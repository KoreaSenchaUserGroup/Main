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
			, "count" : "2"
		},
		{
			  "id" : 3
			, "category" : "전문"
			, "count" : "1"
		},
		{
			  "id" : 4
			, "category" : "문화/예술"
			, "count" : "1"
		},
		{
			  "id" : 5
			, "category" : "사회적기업/NGS"
			, "count" : "1"
		}
	],
	"videoList": [							<%-- Video List --%>
		{
			  "id" : 1
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "[가리고리] 제11화 대림산업 HR담당자 이경수님 - 직업나눔"
			, "content": "대림산업 HR 담당자 이경수님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		    , "category": "2"
		    , "thumbnail": "http://i.ytimg.com/vi/N_W2TFy0YzQ/1.jpg"
		},
		{
			  "id" : 2
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "[가리고리] 제3화 트래블러스맵 여행기획자 이주희님 - 직업나눔"
			, "content": "트래블러스맵 기획팀 이주희님의 직업나눔 영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		    , "category": "5"
		    , "thumbnail": "http://i.ytimg.com/vi/N_W2TFy0YzQ/1.jpg"
		},
		{
			  "id" : 3
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "[가리고리] 제15화 L&S 금융컨설팅 황희철 대표님 - 직업나눔"
			, "content": ""
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		    , "category": "3"
		    , "thumbnail": "http://i.ytimg.com/vi/N_W2TFy0YzQ/1.jpg"
		},
		{
			  "id" : 4
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "[가리고리] 제16화 인디밴드 페이퍼트리 - 직업나눔"
			, "content": "인디밴드 페이퍼트리의 직업나눔영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		    , "category": "4"
		    , "thumbnail": "http://i.ytimg.com/vi/N_W2TFy0YzQ/1.jpg"
		},
		{
			  "id" : 5
			, "published" : "2012-05-10T03:32:47.000Z"
			, "updated" : "2012-09-14T14:50:37.000Z"
			, "title" : "[가리고리] 제17화 SK모네타 자산관리사 김태황님 - 직업나눔"
			, "content": "SK모네타 자산관리사로 근무하고 있는 김태황님의 직업나눔영상입니다. ^^"
			, "link" : "http://www.youtube.com/watch?v=T93mDKxc4Fg&feature=youtube_gdata"
			, "author": "INKWEON7269"
			, "favoriteCount": "0"
		    , "viewCount": "289"
		    , "category": "2"
		    , "thumbnail": "http://i.ytimg.com/vi/N_W2TFy0YzQ/1.jpg"
		}
	]
}
<%
if(isCallback){
%>
)
<%}%>