package kr.sunmoon.ssun.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.sunmoon.ssun.dao.LoginDao;
import kr.sunmoon.ssun.model.UserInfo;

@Service
public class LoginService {
	
	private static final Logger logger = LoggerFactory.getLogger(LoginService.class);
	private LoginDao loginDao;
	
	@Autowired
	public void setMainTimelineDao(LoginDao loginDao) {
		this.loginDao = loginDao;
	}
	
	// 로그인 관련 함수
	public UserInfo checkLogin(int user_num, String password){
	   return loginDao.checkLogin(user_num, password);
	}
	
}
