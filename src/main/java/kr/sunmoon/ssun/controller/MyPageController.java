package kr.sunmoon.ssun.controller;

import java.io.File;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import kr.sunmoon.ssun.model.UserInfo;
import kr.sunmoon.ssun.model.UserInformation;
import kr.sunmoon.ssun.service.MypageService;
import kr.sunmoon.ssun.service.RegisterService;


@RestController
public class MyPageController {
	private static final Logger logger = LoggerFactory.getLogger(MyPageController.class);
	
	private RegisterService registerService;
	private MypageService mypageService;

	@Autowired
	public void setRegisterService(RegisterService registerService) {
		this.registerService = registerService;
	}
	
	@Autowired
	public void setMypageService(MypageService mypageService) {
		this.mypageService = mypageService;
	}
	
	
	@RequestMapping(value = "/numconfirm" )
	public String checkDuplicate(@RequestParam Map<String, Object> user_info) throws Exception {
		logger.info("@RequestMapping checkDuplicate called. value:" + user_info.get("user_num").toString());
	
		String num_check = user_info.get("user_num").toString();
		logger.info(num_check);

		return registerService.checkDuplicate(num_check);
	}
	
	
	@RequestMapping(value = "/insertProfile")
	public String insertProfile(@RequestParam Map<String, Object> user_info
			                ,MultipartHttpServletRequest request) throws Exception {
		
		logger.info("@RequestMapping insertProfile called.");
		UserInfo DBuserInfo = new UserInfo();
		
		
		String user_num = user_info.get("user_num").toString();
		
		
		
		logger.info(user_num);
 
		//String userid = profileURL.get("user_num").toString();
		String profile_info = "";
		//logger.info(userid);
		//request.getSession().setAttribute("user_img", DBuserInfo.getProfile());
		
		
		
		String root = request.getSession().getServletContext().getRealPath("/");
	    String path = root+"resources/userImage/"; 
	         
	    String newFileName = ""; // 업로드 되는 파일명
	    String fileName    = "";
      
	    File dir = new File(path);
	    if(!dir.isDirectory()){
	    	dir.mkdir();
	    }
	         
	    Iterator<String> files = request.getFileNames();
	        
	    while(files.hasNext()){
	     String uploadFile = files.next();
	                         
	        MultipartFile mFile = request.getFile(uploadFile);
	        fileName = mFile.getOriginalFilename();
	        newFileName = System.currentTimeMillis()+"."+fileName.substring(fileName.lastIndexOf(".")+1);
	             
	        
	        //request.getSession().setAttribute(fileName);
	        
	        logger.info("originalName: " + fileName);
			logger.info("size: " + newFileName);
	        logger.info(path);
	        
	        try {
	       	 mFile.transferTo(new File(path+newFileName));
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	    request.getSession().setAttribute("user_img",newFileName);
	    logger.info( request.getSession().getAttribute("user_img").toString());

	    mypageService.saveProfileService(newFileName,user_num);
	  
	    return newFileName;
	}
	
	@RequestMapping(value = "/mypageInfomation")
	public UserInformation mypageInfomation(@RequestParam Map<String, Object> user_info) throws Exception {
		
		logger.info("값님 : "+ user_info.get("mypage_usernumber").toString());

		String user_num = user_info.get("mypage_usernumber").toString();
		
		return mypageService.myPageInfoService(user_num);
		
	}
	
	@RequestMapping(value = "/mypagePwdChange")
	public void mypagePwdChange(@RequestParam Map<String, Object> user_info) throws Exception {
		
		logger.info("값님 : "+ user_info.get("mypage_usernumber").toString());
		logger.info("값님 : "+ user_info.get("mypage_password").toString());
		
		String user_num = user_info.get("mypage_usernumber").toString();
		String password = user_info.get("mypage_password").toString();
		
		
		mypageService.insertNewPassword(user_num, password);
		
	}
	
	@RequestMapping(value = "/findPassword")
	public String findPassword(@RequestParam Map<String, Object> user_info) throws Exception {
		
		logger.info("값님 : "+ user_info.get("find_portal_emial").toString());
		logger.info("값님 : "+ user_info.get("find_user_num").toString());
		
		String portal_email = (user_info.get("find_portal_emial").toString()+"@sunmoon.ac.kr");
		String user_num = user_info.get("find_user_num").toString();
		
		return mypageService.findPassword(portal_email,user_num);
		
		
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/deleteUser")
	public void deleteUser(@RequestBody Map<String, Object> data) throws Exception {
		
		logger.info("값님 : "+ data.get("user_num").toString());
		
		String delNum = data.get("user_num").toString();

		
		mypageService.deleteUser(delNum);
		
		
	}
	
		}	
