<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   <html>   
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
sun.boot.class.path : <%= System.getProperty("sun.boot.class.path") %><br/>
sun.boot.library.path : <%= System.getProperty("sun.boot.library.path") %><br/>
java.library.path : <%= System.getProperty("java.library.path") %><br/>
java.class.path : <%= System.getProperty("java.class.path") %><br/>
getClassLoader() : <%= this.getClass().getClassLoader() %><br/>
DocumentBuilderFactory : <%= javax.xml.parsers.DocumentBuilderFactory.newInstance() %><br/>
/javax/xml.parsers/DocumentBuilderFactory.class : <%= this.getClass().getResource("/javax/xml.parsers/DocumentBuilderFactory.class") %><br/>
SAXParserFactory : <%= javax.xml.parsers.SAXParserFactory.newInstance() %><br/>
/javax/xml/parsers/SAXParserFactory.class : <%= this.getClass().getResource("/javax/xml/parsers/SAXParserFactory.class") %><br/>
TransformerFactory : <%= javax.xml.transform.TransformerFactory.newInstance() %><br/>
/javax/xml/transform/TransformerFactory.class : <%= this.getClass().getResource("/javax/xml/transform/TransformerFactory.class") %><br/>
<hr>
Servlet : <%= application.getMajorVersion() %><br/>.<%= application.getMinorVersion() %><br/>
JSP : <%= javax.servlet.jsp.JspFactory.getDefaultFactory().getEngineInfo().getSpecificationVersion() %><br/>
ServerInfo : <%= application.getServerInfo() %><br/>
RealPath : <%= application.getRealPath("/") %><br/>
ContextPath : <%= request.getContextPath()%><br/>
<hr>
totalMemory : <%= Runtime.getRuntime().totalMemory() %><br/>
maxMemory : <%= Runtime.getRuntime().maxMemory() %><br/>
freeMemory : <%= Runtime.getRuntime().freeMemory() %><br/>
<hr>
    </body>
</html>