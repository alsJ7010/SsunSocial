package kr.sunmoon.ssun.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.model.UserInformation;

@Repository
public class AdminUsersDao {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}

	public List<UserInformation> adminInfo() {
		

		String sql = "select distinct profile,user_name,user_num,portal_email,dep_name from userinfo,department_info where userinfo.department = department_info.dep_code;";
		//System.out.println(sql);
		return jdbcTemplate.query(sql, new RowMapper<UserInformation>() {
			@Override
			public UserInformation mapRow(ResultSet rs, int rowNum) throws SQLException {

				UserInformation info = new UserInformation();
				info.setAdmin_profile(rs.getString("profile"));
				info.setAdmin_name(rs.getString("user_name"));
				info.setAdmin_num(rs.getString("user_num"));
				info.setAdmin_protal(rs.getString("portal_email"));
				info.setAdmin_dep(rs.getString("dep_name"));
				

				return info;
			}

		});

	}
	
	public UserInformation adminEditInfo(String user_num) throws Exception {
		
		String sql = "select user_name,user_num,portal_email,dep_name,dep_code,certify from userinfo,department_info where user_num = '" + user_num
				+ "' and userinfo.department = department_info.dep_code;";
		
		try {

			return jdbcTemplate.queryForObject(sql, new RowMapper<UserInformation>() {
				@Override
				public UserInformation mapRow(ResultSet rs, int rowNum) throws SQLException {

					UserInformation info = new UserInformation();
					info.setAdminEdit_name(rs.getString("user_name"));
					info.setAdminEdit_num(rs.getString("user_num"));
					info.setAdminEdit_dep(rs.getString("dep_name"));
					info.setAdminEdit_protal(rs.getString("portal_email"));
					info.setAdminEdit_depcode(rs.getString("dep_code"));
					info.setAdminEdit_certify(rs.getString("certify"));
					
					return info;
				}

			});
		} catch (Exception e) {
			return new UserInformation();
		}
		
	}
	
	public void editDepartment(String depNum, String depCode) {
		String sql = "update userinfo set department = '"+depCode+"' where user_num = '"+depNum+"';";
		
		jdbcTemplate.update(sql);
	}
		
	public void blockCertify(String blockNum) {
		String sql = "update userinfo set certify = 'b' where user_num = '"+blockNum+"';";
		
		jdbcTemplate.update(sql);
		
	}
	
	public void unlockCertify(String user_num) {
		String sql = "update userinfo set certify = 'y' where user_num = '"+user_num+"';";
		
		jdbcTemplate.update(sql);
		
	}
	
}
