package kr.sunmoon.ssun.dao;

import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.service.SetUserInfoService;

@Repository
public class SetUserInfoDao {

	private static final Logger logger = LoggerFactory.getLogger(SetUserInfoDao.class);
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}
	
	// 학과 코드 이용하여 학과 이름 찾아오기
	public String checkDepartment(String dep_code) {
		String sqlStatement = "select dep_name from department_info where dep_code='" + dep_code + "'";
		
		String temp = jdbcTemplate.queryForObject(sqlStatement, String.class); 
		logger.info("셀렉한 학과명~!_!_!_!_!!_!_: " + temp);
		return temp;
	}
}
