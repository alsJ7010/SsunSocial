package kr.sunmoon.ssun.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.sunmoon.ssun.model.UserInformation;
import kr.sunmoon.ssun.service.RegisterService;


@Controller
public class UserRegisterController {

	private static final Logger logger = LoggerFactory.getLogger(UserRegisterController.class);

	private RegisterService registerService;
	UserInformation user_info = new UserInformation();
	
	@Autowired
	public void setRegisterService(RegisterService registerService) {
		this.registerService = registerService;
	}
	
	

	@RequestMapping(value = "/insertuser", method = RequestMethod.POST)
	public String insertuser(@RequestParam Map<String, Object> infoParm) throws Exception {

		
		
		user_info.setPortal_email(infoParm.get("portal_email").toString()+"@sunmoon.ac.kr");
		user_info.setUser_num(infoParm.get("user_num").toString());
		user_info.setPassword(infoParm.get("password").toString());
		user_info.setUser_name(infoParm.get("user_name").toString());
		user_info.setUser_department(infoParm.get("user_department").toString());

		logger.info("insertuser value: " + user_info.getPortal_email());
		logger.info("insertuser value: " + user_info.getUser_num());
		logger.info("insertuser value: " + user_info.getPassword());
		logger.info("insertuser value: " + user_info.getUser_name());
		logger.info("insertuser value: " + user_info.getUser_department());
		System.out.println(user_info.getPortal_email());
		registerService.insert_Record(user_info);

		return "home";
	}
	
	
	@RequestMapping(value = "/emailConfirm", method = RequestMethod.GET)
	public String emailConfirm(Model model) throws Exception { // 이메일 링크 타고 들어옴
		registerService.userAuth(user_info.getPortal_email(), user_info.getUser_authCode());
	
		return "home";
	}
	

	
}
