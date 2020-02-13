package kr.sunmoon.ssun.model;

public class Msg {
	
	private int num;
	private String user_name;
	private String from_user_num;
	private String to_user_num;
	private String title;
	private String senddate;
	private String open;
	private String msg;
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getFrom_user_num() {
		return from_user_num;
	}
	public void setFrom_user_num(String from_user_num) {
		this.from_user_num = from_user_num;
	}
	public String getTo_user_num() {
		return to_user_num;
	}
	public void setTo_user_num(String to_user_num) {
		this.to_user_num = to_user_num;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSenddate() {
		return senddate;
	}
	public void setSenddate(String senddate) {
		this.senddate = senddate;
	}
	public String getOpen() {
		return open;
	}
	public void setOpen(String open) {
		this.open = open;
	}
	
	@Override
	public String toString() {
		return "Msg [num=" + num + ", user_name=" + user_name + ", from_user_num=" + from_user_num + ", to_user_num="
				+ to_user_num + ", title=" + title + ", senddate=" + senddate + ", open=" + open + ", msg=" + msg + "]";
	}	

}
