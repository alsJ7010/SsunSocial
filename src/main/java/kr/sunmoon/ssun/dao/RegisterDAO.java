package kr.sunmoon.ssun.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

import javax.sql.DataSource;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.model.UserInfo;
import kr.sunmoon.ssun.model.UserInformation;

@Repository
public class RegisterDAO {
	// private static final Logger logger = (Logger)
	// LoggerFactory.getLogger(RegisterDAO.class);
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}

	public String checkDuplicate(String userNum) {

		String sql = "select count(*) from userinfo where user_num = '" + userNum + "';";
		System.out.println(sql);

		return jdbcTemplate.queryForObject(sql, String.class);

	}

	/*
	 * @Override public UserVO authenticate(String str) throws Exception { //
	 * TODO Auto-generated method stub System.out.println("dao"); return
	 * sqlSession.selectOne(namespace+".checkdupl", str); }
	 */

	public void insertRegisterUser(UserInformation info) {

		String sql = "insert into userinfo values(?,?,?,?,null,null,?,null)";

		jdbcTemplate.update(sql, info.getUser_num(), info.getPassword(), info.getUser_name(), info.getUser_department(),
				info.getPortal_email());

	}

	public void createAuthKey(String portal_email, String user_authCode) throws Exception {
		// TODO Auto-generated method stub
		UserInformation info = new UserInformation();

		info.setUser_authCode(user_authCode);
		info.setPortal_email(portal_email);
		String sql = "update userinfo set user_key = '" + user_authCode + "' where portal_email = '" + portal_email
				+ "';";
		System.out.println(sql);
		jdbcTemplate.update(sql);
	}

	// @Override
	public void userAuth(String portal_email, String user_key) throws Exception {
		// TODO Auto-generated method stub
		// sqlSession.update(namespace + ".userAuth", user_email);

		String sql = "update userinfo set certify = 'y' where portal_email = '" + portal_email + "';";
		System.out.println(sql);
		jdbcTemplate.update(sql);
	}

	
}
