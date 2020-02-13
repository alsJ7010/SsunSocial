package kr.sunmoon.ssun.model;

public class GetCommentInfo { // 전체 댓글 정보를 불러올 때 필요
	private int c_num;
	private int w_num;
	private int user_num;
	private String user_name;
	private String user_img;
	private String c_time;
	private String c_content;
	private int like_num;
	public int getC_num() {
		return c_num;
	}
	public void setC_num(int c_num) {
		this.c_num = c_num;
	}
	public int getW_num() {
		return w_num;
	}
	public void setW_num(int w_num) {
		this.w_num = w_num;
	}
	public int getUser_num() {
		return user_num;
	}
	public void setUser_num(int user_num) {
		this.user_num = user_num;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getUser_img() {
		return user_img;
	}
	public void setUser_img(String user_img) {
		this.user_img = user_img;
	}
	public String getC_time() {
		return c_time;
	}
	public void setC_time(String c_time) {
		this.c_time = c_time;
	}
	public String getC_content() {
		return c_content;
	}
	public void setC_content(String c_content) {
		this.c_content = c_content;
	}
	public int getLike_num() {
		return like_num;
	}
	public void setLike_num(int like_num) {
		this.like_num = like_num;
	}
	
	@Override
	public String toString() {
		return "GetCommentInfo [c_num=" + c_num + ", w_num=" + w_num + ", user_name=" + user_name + ", user_img="
				+ user_img + ", c_time=" + c_time + ", c_content=" + c_content + ", like_num=" + like_num + "]";
	}
}
