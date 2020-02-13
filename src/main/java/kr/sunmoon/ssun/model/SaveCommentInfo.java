package kr.sunmoon.ssun.model;

public class SaveCommentInfo { // DB에 저장할 때 필요한 댓글 정보들
	private int c_num;
	private int user_num;
	private int w_num;
	private String c_content;
	private String c_time;
	private int like_num = 0;
	
	public int getC_num() {
		return c_num;
	}
	public void setC_num(int c_num) {
		this.c_num = c_num;
	}
	public int getUser_num() {
		return user_num;
	}
	public void setUser_num(int user_num) {
		this.user_num = user_num;
	}
	public int getW_num() {
		return w_num;
	}
	public void setW_num(int w_num) {
		this.w_num = w_num;
	}
	public String getC_content() {
		return c_content;
	}
	public void setC_content(String c_content) {
		this.c_content = c_content;
	}
	public String getC_time() {
		return c_time;
	}
	public void setC_time(String c_time) {
		this.c_time = c_time;
	}
	public int getLike_num() {
		return like_num;
	}
	public void setLike_num(int like_num) {
		this.like_num = like_num;
	}
	@Override
	public String toString() {
		return "SaveCommentInfo [c_num=" + c_num + ", user_num=" + user_num + ", w_num=" + w_num + ", c_content="
				+ c_content + ", c_time=" + c_time + ", like_num=" + like_num + "]";
	}
}
