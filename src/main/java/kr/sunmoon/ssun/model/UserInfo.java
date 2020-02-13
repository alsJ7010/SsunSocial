package kr.sunmoon.ssun.model;

public class UserInfo {

	private int user_num;
	private String password;
	private String user_name;
	private String department;
	private String profile;
	private String certify;
	private String portal_email;
	
	
	public int getUser_num() {
		return user_num;
	}
	public void setUser_num(int user_num) {
		this.user_num = user_num;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getCertify() {
		return certify;
	}
	public void setCertify(String certify) {
		this.certify = certify;
	}
	public String getPortal_email() {
		return portal_email;
	}
	public void setPortal_email(String portal_email) {
		this.portal_email = portal_email;
	}
	
	@Override
	public String toString() {
		return "UserInfo [user_num=" + user_num + ", password=" + password + ", user_name=" + user_name
				+ ", department=" + department + ", profile=" + profile + ", certify=" + certify + ", portal_email="
				+ portal_email + "]";
	}
	
}
