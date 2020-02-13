package kr.sunmoon.ssun.model;

public class countTop5 {
	private String content;
	private int count;
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	@Override
	public String toString() {
		return "writerTop10 [content=" + content + ", count=" + count + "]";
	}
}
