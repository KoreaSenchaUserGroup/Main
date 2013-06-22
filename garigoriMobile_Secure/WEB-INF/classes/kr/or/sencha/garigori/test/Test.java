package kr.or.sencha.garigori.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * http://garigori.sencha.or.kr/servlet/kr.or.sencha.garigori.test.Test
 * @author JongKwang
 *
 */
public class Test extends HttpServlet {
  public void doGet( HttpServletRequest req, HttpServletResponse res )
    throws ServletException,IOException {
    
    res.setContentType( "text/html;charset=UTF-8" );
    PrintWriter out = res.getWriter();
    
    out.println( "<HTML>" );
    out.println( "<BODY>" );
    out.println( "Hello Servlet!! +  안녕하세요 서블릿!! " );
    out.println( "</BODY>" );
    out.println( "</HTML>" );
    out.close();
    
  }
}