package kr.sunmoon.ssun.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.sunmoon.ssun.dao.BusDao;
import kr.sunmoon.ssun.dao.LoginDao;
import kr.sunmoon.ssun.dao.MainTimelineDao;
import kr.sunmoon.ssun.model.BusTimeTable;
import kr.sunmoon.ssun.model.GetCommentInfo;
import kr.sunmoon.ssun.model.PostInfo;
import kr.sunmoon.ssun.model.PostView;
import kr.sunmoon.ssun.model.SaveCommentInfo;
import kr.sunmoon.ssun.model.UserInfo;

@Service
public class BusService {
	
	private static final Logger logger = LoggerFactory.getLogger(BusService.class);
	private BusDao busDao;
	
	@Autowired
	public void setBusDao(BusDao busDao) {
		this.busDao = busDao;
	}

	public List<BusTimeTable> getAllRecord_p_ca() {
		return busDao.getMultiRow_p_ca();
	}
	
	public List<BusTimeTable> getAllRecord_p_ct() {
		return busDao.getMultiRow_p_ct();
	}
	
	public List<BusTimeTable> getAllRecord_p_ot() {
		return busDao.getMultiRow_p_ot();
	}
	
	public List<BusTimeTable> getAllRecord_p_cc() {
		return busDao.getMultiRow_p_cc();
	}
	
	public List<BusTimeTable> getAllRecord_h_ca() {
		return busDao.getMultiRow_h_ca();
	}
	
	public List<BusTimeTable> getAllRecord_h_ct() {
		return busDao.getMultiRow_h_ct();
	}
	
	public List<BusTimeTable> getAllRecord_s_ca() {
		return busDao.getMultiRow_s_ca();
	}
	
	public List<BusTimeTable> getAllRecord_s_ct() {
		return busDao.getMultiRow_s_ct();
	}
}
