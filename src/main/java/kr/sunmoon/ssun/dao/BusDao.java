package kr.sunmoon.ssun.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.sunmoon.ssun.model.BusTimeTable;
import kr.sunmoon.ssun.model.GetCommentInfo;
import kr.sunmoon.ssun.model.PostInfo;
import kr.sunmoon.ssun.model.PostView;
import kr.sunmoon.ssun.model.SaveCommentInfo;
import kr.sunmoon.ssun.model.UserInfo;
import kr.sunmoon.ssun.model.W_files;

@Repository
public class BusDao {

	private static final Logger logger = LoggerFactory.getLogger(BusDao.class);
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource datasource) {
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}
	
	//DB에서 값 불러오기
	public List<BusTimeTable> getMultiRow_p_ca(){
		String sqlStatement = "select count, asancam_s, asanktx_1, cheonan, hi, asanktx_2, asancam_e "
								+ "from bus "
								+ "where bus_day='p' and place='ca'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setAsanktx_1(rs.getString("asanktx_1"));
				bus.setCheonan(rs.getString("cheonan"));
				bus.setHi(rs.getString("hi"));
				bus.setAsanktx_2(rs.getString("asanktx_2"));
				bus.setAsancam_e(rs.getString("asancam_e"));

				return bus;
			}
		});
	}

	public List<BusTimeTable> getMultiRow_p_ct(){
		String sqlStatement = "select count, asancam_s, terminal, korea, asancam_e "
								+ "from bus "
								+ "where bus_day='p' and place='ct'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setTerminal(rs.getString("terminal"));
				bus.setKorea(rs.getString("korea"));
				bus.setAsancam_e(rs.getString("asancam_e"));
				
				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_p_ot(){
		String sqlStatement = "select count, asancam_s, baebang, terminal, oy, asancam_e "
								+ "from bus "
								+ "where bus_day='p' and place='ot'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setBaebang(rs.getString("baebang"));
				bus.setTerminal(rs.getString("terminal"));
				bus.setOy(rs.getString("oy"));
				bus.setAsancam_e(rs.getString("asancam_e"));
				
				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_p_cc(){
		String sqlStatement = "select count, cheonan_s, cs, sb, asanktx_1, asancam_s, baebang, terminal, oy, asancam_e, cheonan_e "
								+ "from bus "
								+ "where bus_day='p' and place='cc'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setCheonan_s(rs.getString("cheonan_s"));
				bus.setCs(rs.getString("cs"));
				bus.setSb(rs.getString("sb"));
				bus.setAsanktx_1(rs.getString("asanktx_1"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setBaebang(rs.getString("baebang"));
				bus.setTerminal(rs.getString("terminal"));
				bus.setOy(rs.getString("oy"));
				bus.setAsancam_e(rs.getString("asancam_e"));
				bus.setCheonan_e(rs.getString("cheonan_e"));

				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_h_ca(){
		String sqlStatement = "select count, asancam_s, asanktx_1, cheonan, asanktx_2, asancam_e "
								+ "from bus "
								+ "where bus_day='h' and place='ca'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setAsanktx_1(rs.getString("asanktx_1"));
				bus.setCheonan(rs.getString("cheonan"));
				bus.setAsanktx_2(rs.getString("asanktx_2"));
				bus.setAsancam_e(rs.getString("asancam_e"));
				
				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_h_ct(){
		String sqlStatement = "select count, asancam_s, terminal, asancam_e "
								+ "from bus "
								+ "where bus_day='h' and place='ct'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setTerminal(rs.getString("terminal"));
				bus.setAsancam_e(rs.getString("asancam_e"));

				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_s_ca(){
		String sqlStatement = "select count, asancam_s, asanktx_1, cheonan, asanktx_2, asancam_e "
								+ "from bus "
								+ "where bus_day='s' and place='ca'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setAsanktx_1(rs.getString("asanktx_1"));
				bus.setCheonan(rs.getString("cheonan"));
				bus.setAsanktx_2(rs.getString("asanktx_2"));
				bus.setAsancam_e(rs.getString("asancam_e"));
				
				return bus;
			}
		});
	}
	
	public List<BusTimeTable> getMultiRow_s_ct(){
		String sqlStatement = "select count, asancam_s, terminal, asancam_e "
								+ "from bus "
								+ "where bus_day='s' and place='ct'";
		
		return jdbcTemplate.query(sqlStatement, new RowMapper<BusTimeTable>(){
			
			@Override
			public BusTimeTable mapRow(ResultSet rs, int rowNum) throws SQLException {
				BusTimeTable bus = new BusTimeTable();
				bus.setCount(rs.getInt("count"));
				bus.setAsancam_s(rs.getString("asancam_s"));
				bus.setTerminal(rs.getString("terminal"));
				bus.setAsancam_e(rs.getString("asancam_e"));

				return bus;
			}
		});
	}
	
}
