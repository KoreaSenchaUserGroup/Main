package kr.or.sencha.garigori.mybatis;

import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class GarigoriMyBatis {
	
	public static void main(String[] args) {
		System.out.println("main()");
		
		SqlSession session = MyBatisManager.getSqlMapper().openSession();
		
		try {  
			StringMap result = new StringMap( (HashMap)session.selectOne("Default.selectDefault") );
			System.out.println( result.get("id") );
			System.out.println( result.get("name") );
			System.out.println( result.get("date") );
			
		} catch (Exception e){
			e.printStackTrace();
		} finally {
			session.close();
		}
		System.out.println("## Finish");
		
		GarigoriMyBatis a = new GarigoriMyBatis();
		System.out.println( a.basicInfo() );
		
	}
	
    public GarigoriMyBatis() {
        // TODO Auto-generated constructor stub
    }
    
    public String basicInfo() {
    	JSONObject obj = new JSONObject();
    	
    	obj.put("flag", "REPLACE");
    	obj.put("maxVideoCount", "3");
    	obj.put("updated", "2012-10-20T14:50:37.000Z");
    	obj.put("categoryList", categoryList());
    	obj.put("videoList", videoList());
    	
    	
    	return obj.toString();
    }
    
	public JSONArray videoList() {
		JSONArray jsonList = new JSONArray();
		try {

			SqlSession session = MyBatisManager.getSqlMapper().openSession();
			HashMap p = new HashMap();
			p.put("code", "");
			
			StringMap result = new StringMap( session.selectList("Default.videoList",p) );
			
			JSONObject obj = null;
			for( int i = 0; i < result.size(); i++ ) {
				obj = new JSONObject();
				obj.put( "max_video_count", result.get(i).get("max_video_count") );
				obj.put( "id", result.get(i).get("id") );
				obj.put( "category", result.get(i).get("category") );
				obj.put( "published", result.get(i).get("published") );
				obj.put( "updated", result.get(i).get("updated") );
				obj.put( "title", result.get(i).get("title") );
				obj.put( "content", result.get(i).get("content") );
				obj.put( "link", result.get(i).get("link") );
				obj.put( "author", result.get(i).get("author") );
				obj.put( "favorite_count", result.get(i).get("favorite_count") );
				obj.put( "view_count", result.get(i).get("view_count") );
				obj.put( "thumbnail", result.get(i).get("thumbnail") );
				obj.put( "thumbnail0", result.get(i).get("thumbnail0") );
				jsonList.add(obj);
			}
		} catch( Exception e ) {
			e.printStackTrace();
		}
		
		return jsonList;
	}
    
	public JSONArray categoryList() {

		JSONArray jsonList = new JSONArray();
		
		try {

			SqlSession session = MyBatisManager.getSqlMapper().openSession();
			HashMap p = new HashMap();
			p.put("code", "");
			
			StringMap result = new StringMap( session.selectList("Default.categoryList",p) );
			
			JSONObject obj = null;
			for( int i = 0; i < result.size(); i++ ) {
				obj = new JSONObject();
				obj.put( "id", result.get(i).get("id") );
				obj.put( "count", result.get(i).get("count") );
				obj.put( "category", result.get(i).get("category") );
				jsonList.add(obj);
			}
		} catch( Exception e ) {
			e.printStackTrace();
		}
		
		return jsonList;
	}
}
