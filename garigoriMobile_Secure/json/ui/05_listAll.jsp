<%@ page language="java" contentType="application/json; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="kr.or.sencha.garigori.mybatis.GarigoriMyBatis" %>
<%
	String callback = request.getParameter("callback");
	boolean isCallback = (callback==null && !"".equals(callback)) ? false : true;
	
	if(isCallback){
%>
<%=callback%>(
<%
}
%>

<%
	GarigoriMyBatis garigori = new GarigoriMyBatis();
	out.println( garigori.basicInfo() );
%>

<%
if(isCallback){
%>
)
<%}%>