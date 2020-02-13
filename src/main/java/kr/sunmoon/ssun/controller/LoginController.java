package kr.sunmoon.ssun.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import kr.sunmoon.ssun.model.UserInfo;
import kr.sunmoon.ssun.service.LoginService;

@RestController
public class LoginController {
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	private LoginService loginService;
	
	@Autowired
	public void setMainTimelineService(LoginService loginService) {
		this.loginService = loginService;
	}

	// 로그인 관련 함수
	@RequestMapping("/login")
	   public UserInfo checkLogin(@RequestParam Map<String, Object> UserInfoParm, HttpServletRequest request) throws Exception {

	      logger.info("RequestMapping /login checkLogin.");
	      UserInfo userInfo = new UserInfo();
	      //try {
	         logger.info("=====RequestMapping /login UserInfoParm username:" + UserInfoParm.get("username").toString());
	         logger.info("=====RequestMapping /login UserInfoParm password:" + UserInfoParm.get("password").toString());

	         userInfo.setUser_num(Integer.parseInt(UserInfoParm.get("username").toString()));
	         userInfo.setPassword(UserInfoParm.get("password").toString());

	         logger.info("RequestMapping /login UserInfoParm Value:" + userInfo.toString());
	         
	         UserInfo DBuserInfo = new UserInfo();
	         DBuserInfo = loginService.checkLogin(userInfo.getUser_num(), userInfo.getPassword());
	         //request.getSession().setAttribute("signedUser", DBuserInfo.getUser_num());
	         request.getSession().setAttribute("user_num", DBuserInfo.getUser_num());
	         request.getSession().setAttribute("password", DBuserInfo.getPassword());
	         request.getSession().setAttribute("department", DBuserInfo.getDepartment());
	         request.getSession().setAttribute("user_name", DBuserInfo.getUser_name());
	         request.getSession().setAttribute("user_img", DBuserInfo.getProfile());
	         //request.getSession().setAttribute("certify", DBuserInfo.getCertify());
	         
	         logger.info("세션~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ : " + request.getSession().getAttribute("user_num"));
	         logger.info("세션~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ : " + request.getSession().getAttribute("password"));
	         logger.info("세션~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ : " + request.getSession().getAttribute("department"));
	         return  DBuserInfo;
	      /*   
	      } catch (Exception e) {
	         e.getMessage();
	         //return "login";
	      }*/
	      //request.getSession().setAttribute("UserInfo", userInfo);
	      //return mainTimelineService.checkLogin(userInfo.getUser_num(), userInfo.getPassword());
	      //return "redirect:/newsFeed";
	   }
	
	//로그아웃
	@RequestMapping("/logout")
	public String logout(Model model, HttpSession session, SessionStatus status) {
		logger.info("login controller RequestMapping /logout");

		// logoutResult 1: 성공
		// 0: 실패
		String logoutResult;

		try {
			status.setComplete();
			session.invalidate();
			logger.info("세션 해제 거쳤어!!");
			logoutResult = "1";
		} catch (Exception e) {
			logoutResult = "0";
		}

		logger.info("~~~~~~~logoutResult~~~~~~~~ : " + logoutResult);
		return logoutResult;
	}
	
}	
