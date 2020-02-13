package kr.sunmoon.ssun.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

import javax.inject.Inject;
import javax.mail.MessagingException;
import javax.sql.DataSource;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.model.UserInfo;
import kr.sunmoon.ssun.model.UserInformation;
import kr.sunmoon.ssun.util.MailHandler;

@Repository
public class MypageDao {
	// private static final Logger logger = (Logger)
	// LoggerFactory.getLogger(RegisterDAO.class);
	@Inject
	private JavaMailSender mailSender;
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}
	
	// 비밀번호 찾기
	public String findPassword(String portal_email,String user_num) throws Exception{
		
		String sql = "select count(*) from userinfo where user_num = '"+user_num+"';";
		int result = Integer.parseInt(jdbcTemplate.queryForObject(sql, String.class));
		
		// 메일 보내기
		if(result == 1){
			String sqlStatement = "select password from userinfo where user_num = '"+user_num+"';";
			String rst = jdbcTemplate.queryForObject(sqlStatement, String.class);

			MailHandler sendMail = new MailHandler(mailSender);
			sendMail.setSubject("[선문대 귀는 당나귀 귀 ★ 비밀번호 찾기 안내]");
			sendMail.setText(new StringBuffer().append("<h1>비밀번호 안내</h1>").append("찾으신 비밀번호 : ")
					.append(rst).toString());
			sendMail.setFrom("dpfls96@gmail.com", "선귀당귀 관리자");
			sendMail.setTo(portal_email);
			sendMail.send();
			
			return jdbcTemplate.queryForObject(sqlStatement, String.class);
			
			
		}else{
		return "fail"; 
		}
	}
	

	public void saveProfileDao(String imgUrl, String user_num) throws Exception {
		String sql = "update userinfo set profile = '" + imgUrl + "' where user_num = '" + user_num + "';";
		System.out.println(sql);
		jdbcTemplate.update(sql);
	}

	public UserInformation myPageInfoDao(String user_num) throws Exception {
		// UserInformation info = new UserInformation();
		String sql = "select portal_email,user_num,user_name,department from userinfo where user_num = '" + user_num
				+ "';";
		System.out.println(user_num);

		try {

			return jdbcTemplate.queryForObject(sql, new RowMapper<UserInformation>() {
				@Override
				public UserInformation mapRow(ResultSet rs, int rowNum) throws SQLException {

					UserInformation info = new UserInformation();
					// UserInfo userInfo = new UserInfo();
					// userInfo.setUser_num(rs.getInt("user_num"));
					info.setPortal_email(rs.getString("portal_email"));
					info.setUser_num(rs.getString("user_num"));
					info.setUser_name(rs.getString("user_name"));
					info.setUser_department(rs.getString("department"));
					// logger.info("*******userinfo select Value*******: " +
					// userInfo.toString());
					// request.getSession().setAttribute("signedUser",
					// userInfo);
					return info;
				}

			});

		} catch (Exception e) {
			return new UserInformation();
		}

	}

	public void insertNewPassword(String user_num, String password) {

		String sql = "update userinfo set password = '"+password+"' where user_num = '" + user_num + "';";
		System.out.println(sql);
		jdbcTemplate.update(sql);

	}
	

	public void deleteUser(String user_num) {
		
		String sql = "delete from userinfo where user_num = "+user_num+"";
		jdbcTemplate.update(sql);
		
	}

}
