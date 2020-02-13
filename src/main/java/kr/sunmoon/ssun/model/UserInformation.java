package kr.sunmoon.ssun.model;

public class UserInformation {
	String portal_email;
	String user_num;
	int user_num_confirm;
	String password;
	String user_name;
	String user_department;
	String user_authCode;
	String profile_image;
	
	String admin_profile;
	String admin_protal;
	String admin_name;
	String admin_num;
	String admin_dep;
	
	String adminEdit_protal;
	String adminEdit_name;
	String adminEdit_num;
	String adminEdit_dep;
	String adminEdit_depcode;
	String adminEdit_certify;

	public UserInformation() {

	}
	
	public UserInformation(int user_num_confirm){
		this.user_num_confirm = user_num_confirm;
	}

	public UserInformation(String user_authCode) {
		this.user_authCode = user_authCode;
	}

	public UserInformation(String portal_email, String user_num, String password, String user_name,
			String user_department) {
		this.portal_email = portal_email;
		this.user_num = user_num;
		this.password = password;
		this.user_name = user_name;
		this.user_department = user_department;
	}

	public String getPortal_email() {
		return portal_email;
	}

	public String getAdminEdit_certify() {
		return adminEdit_certify;
	}

	public void setAdminEdit_certify(String adminEdit_certify) {
		this.adminEdit_certify = adminEdit_certify;
	}

	public void setPortal_email(String portal_email) {
		this.portal_email = portal_email;
	}

	public String getUser_num() {
		return user_num;
	}

	public void setUser_num(String user_num) {
		this.user_num = user_num;
	}

	public int getUser_num_confirm() {
		return user_num_confirm;
	}

	public void setUser_num_confirm(int user_num_confirm) {
		this.user_num_confirm = user_num_confirm;
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

	public String getUser_department() {
		return user_department;
	}

	public void setUser_department(String user_department) {
		this.user_department = user_department;
	}

	public String getUser_authCode() {
		return user_authCode;
	}

	public void setUser_authCode(String user_authCode) {
		this.user_authCode = user_authCode;
	}

	public String getProfile_image() {
		return profile_image;
	}

	public void setProfile_image(String profile_image) {
		this.profile_image = profile_image;
	}

	@Override
	public String toString() {
		return "UserInformation [portal_email=" + portal_email + ", user_num=" + user_num + ", password=" + password
				+ ", user_name=" + user_name + ", user_department=" + user_department + ", user_authCode="
				+ user_authCode + "]";
	}

	public String getAdmin_profile() {
		return admin_profile;
	}

	public void setAdmin_profile(String admin_profile) {
		this.admin_profile = admin_profile;
	}

	public String getAdmin_protal() {
		return admin_protal;
	}

	public void setAdmin_protal(String admin_protal) {
		this.admin_protal = admin_protal;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getAdmin_num() {
		return admin_num;
	}

	public void setAdmin_num(String admin_num) {
		this.admin_num = admin_num;
	}

	public String getAdmin_dep() {
		return admin_dep;
	}

	public void setAdmin_dep(String admin_dep) {
		this.admin_dep = admin_dep;
	}

	public String getAdminEdit_protal() {
		return adminEdit_protal;
	}

	public void setAdminEdit_protal(String adminEdit_protal) {
		this.adminEdit_protal = adminEdit_protal;
	}

	public String getAdminEdit_name() {
		return adminEdit_name;
	}

	public void setAdminEdit_name(String adminEdit_name) {
		this.adminEdit_name = adminEdit_name;
	}

	public String getAdminEdit_num() {
		return adminEdit_num;
	}

	public void setAdminEdit_num(String adminEdit_num) {
		this.adminEdit_num = adminEdit_num;
	}

	public String getAdminEdit_dep() {
		return adminEdit_dep;
	}

	public void setAdminEdit_dep(String adminEdit_dep) {
		this.adminEdit_dep = adminEdit_dep;
	}

	public String getAdminEdit_depcode() {
		return adminEdit_depcode;
	}

	public void setAdminEdit_depcode(String adminEdit_depcode) {
		this.adminEdit_depcode = adminEdit_depcode;
	}

	
	
	
	

}
