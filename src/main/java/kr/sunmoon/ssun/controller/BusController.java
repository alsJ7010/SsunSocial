package kr.sunmoon.ssun.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kr.sunmoon.ssun.model.BusTimeTable;
import kr.sunmoon.ssun.service.BusService;

@RestController
public class BusController {
	private static final Logger logger = LoggerFactory.getLogger(BusController.class);
	private BusService busService;
	
	@Autowired
	public void setBusService(BusService busService) {
		this.busService = busService;
	}
	
	//버스 시간표 함수
	@RequestMapping(value = "/bus_p_ca", method = RequestMethod.GET)
	public List<BusTimeTable> bus_p_ca(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_p_ca();
	}
	
	@RequestMapping(value = "/bus_p_ct", method = RequestMethod.GET)
	public List<BusTimeTable> bus_p_ct(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_p_ct();
	}
	
	@RequestMapping(value = "/bus_p_ot", method = RequestMethod.GET)
	public List<BusTimeTable> bus_p_ot(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_p_ot();
	}
	
	@RequestMapping(value = "/bus_p_cc", method = RequestMethod.GET)
	public List<BusTimeTable> bus_p_cc(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_p_cc();
	}
	
	@RequestMapping(value = "/bus_h_ca", method = RequestMethod.GET)
	public List<BusTimeTable> bus_h_ca(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_h_ca();
	}
	
	@RequestMapping(value = "/bus_h_ct", method = RequestMethod.GET)
	public List<BusTimeTable> bus_h_ct(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_h_ct();
	}
	
	@RequestMapping(value = "/bus_s_ca", method = RequestMethod.GET)
	public List<BusTimeTable> bus_s_ca(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_s_ca();
	}
	
	@RequestMapping(value = "/bus_s_ct", method = RequestMethod.GET)
	public List<BusTimeTable> bus_s_ct(Model model) {
		logger.info("busInfo method is excuting!");
		
		return busService.getAllRecord_s_ct();
	}

}	
