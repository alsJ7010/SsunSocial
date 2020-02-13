package kr.sunmoon.ssun.service;

import javax.inject.Inject;
import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import kr.sunmoon.ssun.model.UserInformation;
import kr.sunmoon.ssun.controller.MyPageController;
import kr.sunmoon.ssun.dao.MypageDao;
import kr.sunmoon.ssun.dao.RegisterDAO;
import kr.sunmoon.ssun.util.MailHandler;
import kr.sunmoon.ssun.util.TempKey;

@Service
public class MypageService {
	private static final Logger logger = LoggerFactory.getLogger(MypageService.class);


	private MypageDao mypagedao = new MypageDao();

	@Autowired
	public void setMypageDao(MypageDao mypagedao) {
		this.mypagedao = mypagedao;
	}

	public String findPassword(String portal_email, String user_num) throws Exception {
		
		return mypagedao.findPassword(portal_email, user_num);
	}

	public void saveProfileService(String imgUrl, String user_num) throws Exception {
		mypagedao.saveProfileDao(imgUrl, user_num);
	}

	public UserInformation myPageInfoService(String user_num) throws Exception {
		return mypagedao.myPageInfoDao(user_num);
	}

	public void insertNewPassword(String user_num, String password) throws Exception {
		mypagedao.insertNewPassword(user_num, password);
	}

	
	public void deleteUser(String user_num) {
		mypagedao.deleteUser(user_num);
	}

}
