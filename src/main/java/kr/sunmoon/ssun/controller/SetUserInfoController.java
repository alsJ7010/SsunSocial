package kr.sunmoon.ssun.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.sunmoon.ssun.service.SetUserInfoService;

@RestController
public class SetUserInfoController {

	private static final Logger logger = LoggerFactory.getLogger(SetUserInfoController.class);
	private SetUserInfoService setUserInfoService;
	
	@Autowired
	public void setUserInfoService(SetUserInfoService setUserInfoService) {
		this.setUserInfoService = setUserInfoService;
	}
	
	// 학과 코드 이용하여 학과 이름 찾아오기
	@ResponseBody
	@RequestMapping(value="/checkDepartment", produces="application/text;charset=utf8")
	public String checkDepartment(@RequestBody Map<String, Object> data) throws Exception {
		
		String dep_code = data.get("dep_code").toString();
		
		return setUserInfoService.checkDepartment(dep_code);
		
	}
}
