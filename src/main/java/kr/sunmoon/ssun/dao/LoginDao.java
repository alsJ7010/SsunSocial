package kr.sunmoon.ssun.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.model.UserInfo;

@Repository
public class LoginDao {

	private static final Logger logger = LoggerFactory.getLogger(LoginDao.class);
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}

	// 로그인 관련 함수
	public UserInfo checkLogin(int user_num, String password) {

		logger.info(Integer.toString(user_num));
		logger.info(password);

		String sqlStatement = "select * from userinfo where user_num=" + user_num;

		try {
			logger.info("UserInfo checkLogin try.");

			return jdbcTemplate.queryForObject(sqlStatement, new RowMapper<UserInfo>() {
				@Override
				public UserInfo mapRow(ResultSet rs, int rowNum) throws SQLException {

					UserInfo userInfo = new UserInfo();
					userInfo.setUser_num(rs.getInt("user_num"));
					userInfo.setPassword(rs.getString("password"));
					userInfo.setUser_name(rs.getString("user_name"));
					userInfo.setDepartment(rs.getString("department"));
					userInfo.setProfile(rs.getString("profile"));
					userInfo.setCertify(rs.getString("certify"));
					userInfo.setPortal_email(rs.getString("portal_email"));

					logger.info("*******userinfo select Value*******: " + userInfo.toString());
					// request.getSession().setAttribute("signedUser",
					// userInfo);
					return userInfo;
				}

			});

		} catch (Exception e) {
			logger.info("DB Exception");
			return new UserInfo();
		}

	}

}
