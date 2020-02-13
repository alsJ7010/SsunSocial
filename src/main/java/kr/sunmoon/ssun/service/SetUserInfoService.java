package kr.sunmoon.ssun.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import kr.sunmoon.ssun.dao.SetUserInfoDao;

@Service
public class SetUserInfoService {

	private static final Logger logger = LoggerFactory.getLogger(SetUserInfoService.class);
	private SetUserInfoDao setUserInfoDao;
	
	@Autowired
	public void setUserInfoDao(SetUserInfoDao setUserInfoDao) {
		this.setUserInfoDao = setUserInfoDao;
	}
	
	// 학과 코드 이용하여 학과 이름 찾아오기
	public String checkDepartment(String dep_code) {
		return setUserInfoDao.checkDepartment(dep_code);
	}
	
}
