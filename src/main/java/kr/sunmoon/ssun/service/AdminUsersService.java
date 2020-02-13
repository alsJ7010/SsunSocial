package kr.sunmoon.ssun.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.sunmoon.ssun.dao.AdminUsersDao;
import kr.sunmoon.ssun.model.UserInformation;


@Service
public class AdminUsersService {
	private static final Logger logger = LoggerFactory.getLogger(AdminUsersService.class);

	private AdminUsersDao adminUsersDao = new AdminUsersDao();
	

	@Autowired
	public void setAdminUsersDao(AdminUsersDao adminUsersDao) {
		this.adminUsersDao = adminUsersDao;
	}

	public List<UserInformation> adminInfo() {
		return adminUsersDao.adminInfo();
	}
	
	public UserInformation adminEditInfo(String user_num) throws Exception {
		return adminUsersDao.adminEditInfo(user_num);
	}
	
	public void editDepartment(String depNum, String depCode) {
		adminUsersDao.editDepartment(depNum,depCode);
	}
	
	public void blockCertify(String user_num) {
		adminUsersDao.blockCertify(user_num);
	}
	
	public void unlockCertify(String user_num) {
		adminUsersDao.unlockCertify(user_num);
	}
	

}
