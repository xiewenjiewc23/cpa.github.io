/**
*	ͨ��webPath�����·����д��̬ҳ��Ķ�����Ϣ
*/
function writeTop(){
	var h = new Array();
	h.push("<table class=\"topfrm\" height=\"78\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">");
		h.push("<tr>");
			h.push("<td height=\"120\" class=\"topBgColor\" valign=\"middle\">");
				h.push("<table height=\"120\" class=\"topsubfrm\" align=\"center\" border=0 cellpadding=\"0\" cellspacing=\"0\">");
					h.push("<tr>");
						h.push("<td>");
							h.push("<img class=\"logo\" id=\"logo\"  height=\"60px\" />");
							h.push("<span class=\"logo-cn-title\"><b>ע����ʦȫ��ͳһ�������ϱ���</b></span>");
							//h.push("<span class=\"logo-en-title\">Online registration of CPA national unified examination</span>");
						h.push("</td>");
					h.push("</tr>");
				h.push("</table>");
			h.push("</td>");
		h.push("</tr>");	
	h.push("</table>");	
	h.push("<table class=\"topfrm\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">");
		h.push("<tr>");
			h.push("<td height=\"40\" style=\"background:#377ED0;\">");
				h.push("<table border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">");
				h.push("<tr>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\">");
						h.push("<p>");
				    		h.push("<a href=\""+webPath+"toindex.jsp\" class=\"daohang-font\">�� ҳ</a>");
						h.push("</p>");
					h.push("</td>");
					h.push("<td width=\"6\"></td>");
					h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"notice\" class=\"daohang-font\">��Ҫ֪ͨ</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"policy\" class=\"daohang-font\">�����ƶ�</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"prostatement\" class=\"daohang-font\">�ط�����</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"question\" class=\"daohang-font\">������</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"process.html\" class=\"daohang-font\">��������</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"cpaexamhome\" class=\"daohang-font\">���ϱ���</a></p></td>");
				    h.push("<td width=\"4\"></td>");
				    h.push("<td width=\"120\" class=\"daohang-font\" align=\"center\"><p><a href=\""+webPath+"examareainfo\" class=\"daohang-font\">������Ϣ</a></p></td><td>&nbsp;</td>");
				h.push("</tr>");
				h.push("</table>");
			h.push("</td>");
		h.push("</tr>");	
	h.push("</table>");
	h.push("<table class=\"frm\" style=\"margin-top:5px;border: 1px solid #B8B8B8;\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">");
		h.push("<tr>");
			h.push("<td height=\"42\"  align=\"center\">");
			h.push("<font color=\"FF7F00\" style=\"font-size: 12;font-family:'΢���ź�'\">��ܰ��ʾ����������ʹ��IE������������ϱ�����</font>");
			h.push("</td>");
		h.push("</tr>");
	h.push("</table>");
	document.write(h.join(""));
	document.getElementById("logo").src = CDN_PATH + "images/index/logo.png";
}

/**
*	ͨ��webPath�����·����д��̬ҳ��ĵײ���Ϣ
*/
function writeBottom(){
	var h = new Array();
	h.push("<table class=\"frmbottom\" height=\"128\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" style=\"width:100%;background-color:#E8E8E8;margin-top:10px;\">");
	h.push("<tr>");
		h.push("<td style=\"text-align:center;\" >");
			h.push("<table style=\"width:100%;\">");
				h.push("<tr>");
					h.push("<td style=\"text-align:center;height: 61px;color:#5e5e5e\" >");
						h.push("<div style=\"line-height:20px\">�������䣺cpaks@cicpa.org.cn&nbsp;&nbsp;&nbsp;&nbsp;�绰��<a href='"+webPath+"examareainfo'>��ʡ������ϵ��Ϣ</a></div>");
						h.push("<div style=\"line-height:20px\">��Ȩ�� �й�ע����ʦЭ��&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"https://beian.miit.gov.cn\" target=\"_blank\" style=\"color:#5e5e5e;text-decoration-line:none;\">��ICP�� 05032222-1 ��</a></div>");
					h.push("</td>");
				h.push("</tr>");
			h.push("</table>");
		h.push("</td>");
	h.push("</tr>");
	h.push("</table>");
	document.write(h.join(""));
}