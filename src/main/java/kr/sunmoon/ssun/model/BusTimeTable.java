package kr.sunmoon.ssun.model;

public class BusTimeTable {
	
	private String bus_day;
	private String place;
	private int count;
	private String asancam_s;
	private String asanktx_1;
	private String cheonan;
	private String hi;
	private String asanktx_2;
	private String asancam_e;
	private String terminal;
	private String korea;
	private String baebang;
	private String oy;
	private String cheonan_s;
	private String cs;
	private String sb;
	private String cheonan_e;
	
	public String getBus_day() {
		return bus_day;
	}
	public void setBus_day(String bus_day) {
		this.bus_day = bus_day;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getAsancam_s() {
		return asancam_s;
	}
	public void setAsancam_s(String asancam_s) {
		this.asancam_s = asancam_s;
	}
	public String getAsanktx_1() {
		return asanktx_1;
	}
	public void setAsanktx_1(String asanktx_1) {
		this.asanktx_1 = asanktx_1;
	}
	public String getCheonan() {
		return cheonan;
	}
	public void setCheonan(String cheonan) {
		this.cheonan = cheonan;
	}
	public String getHi() {
		return hi;
	}
	public void setHi(String hi) {
		this.hi = hi;
	}
	public String getAsanktx_2() {
		return asanktx_2;
	}
	public void setAsanktx_2(String asanktx_2) {
		this.asanktx_2 = asanktx_2;
	}
	public String getAsancam_e() {
		return asancam_e;
	}
	public void setAsancam_e(String asancam_e) {
		this.asancam_e = asancam_e;
	}
	public String getTerminal() {
		return terminal;
	}
	public void setTerminal(String terminal) {
		this.terminal = terminal;
	}
	public String getKorea() {
		return korea;
	}
	public void setKorea(String korea) {
		this.korea = korea;
	}
	public String getBaebang() {
		return baebang;
	}
	public void setBaebang(String baebang) {
		this.baebang = baebang;
	}
	public String getOy() {
		return oy;
	}
	public void setOy(String oy) {
		this.oy = oy;
	}
	public String getCheonan_s() {
		return cheonan_s;
	}
	public void setCheonan_s(String cheonan_s) {
		this.cheonan_s = cheonan_s;
	}
	public String getCs() {
		return cs;
	}
	public void setCs(String cs) {
		this.cs = cs;
	}
	public String getSb() {
		return sb;
	}
	public void setSb(String sb) {
		this.sb = sb;
	}
	public String getCheonan_e() {
		return cheonan_e;
	}
	public void setCheonan_e(String cheonan_e) {
		this.cheonan_e = cheonan_e;
	}
	
	@Override
	public String toString() {
		return "BusTimeTable [bus_day=" + bus_day + ", place=" + place + ", count=" + count + ", asancam_s=" + asancam_s
				+ ", asanktx_1=" + asanktx_1 + ", cheonan=" + cheonan + ", hi=" + hi + ", asanktx_2=" + asanktx_2
				+ ", asancam_e=" + asancam_e + ", terminal=" + terminal + ", korea=" + korea + ", baebang=" + baebang
				+ ", oy=" + oy + ", cheonan_s=" + cheonan_s + ", cs=" + cs + ", sb=" + sb + ", cheonan_e=" + cheonan_e
				+ "]";
	}
	
}
