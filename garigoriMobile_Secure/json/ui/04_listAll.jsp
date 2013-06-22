<%@ page language="java" contentType="application/json; charset=utf-8" pageEncoding="utf-8"%>
<%
	String callback = request.getParameter("callback");
	boolean isCallback = (callback==null && !"".equals(callback)) ? false : true;
	
	if(isCallback){
%>
<%=callback%>(
<%
}
%>

{	
	"flag" : "REPLACE",						<%-- REPLACE or NOTHING --%>
	"maxVideoCount" : "5",					<%-- 전체 Video 개수 --%> 
	"updated" : "2012-10-20T14:50:37.000Z",	<%-- 마지막  Update  일자 --%>
	"changedVideo" : ["3", "5"],			<%-- 변경된 Video 목록 --%>
	"categoryList": [						<%-- Category List --%>
		{
			  "id" : 1
			, "category" : "전체보기"
			, "count" : ""
		},
		{
			  "id" : 2
			, "category" : "경영"
			, "count" : "8"
		},
		{
			  "id" : 3
			, "category" : "전문"
			, "count" : "5"
		},
		{
			  "id" : 4
			, "category" : "문화/예술"
			, "count" : "3"
		},
		{
			  "id" : 5
			, "category" : "사회적기업/NGS"
			, "count" : "6"
		}
	],
	"videoList": [							<%-- Video List --%>
		{
			  "id" : 1
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "1[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		},
		{
			  "id" : 2
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "2[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		},
		{
			  "id" : 3
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "3[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		},
		{
			  "id" : 4
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "4[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		},
		{
			  "id" : 5
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "5[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		}
	]
}
<%
if(isCallback){
%>
)
<%}%>