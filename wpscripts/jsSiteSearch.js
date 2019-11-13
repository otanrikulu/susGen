function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=");
var sValue = unescape(sParam[1]);
if( sParam[0] == frameObjectName)
	sTerms = sValue;
if( sParam[0] == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>"); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">");
d.write("<html lang=\"en\">");
d.write("<head>");
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
d.write("</head>");
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: transparent;\">");
d.write("<div id=\"wpSearchResults\"></div>");
d.write("<script type=\"text/javascript\">");
d.write("var wordMap = new Array(\" event organizers hall lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus managing your carbon footprint energy efficient products review sustainability news \",\" what co-innovate susgen? lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus submit idea benefits contributing \",\" username password e-mail address existing users susgen? your part live sustainable life business community register here… \",\" \",\" list partners logos lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus become partner \",\" register? lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus join customer voices excerpts involvement news \",\" \",\" search panel sustainability products services either browsing through catalogue with search criteria product service category like yellow pages full text ratings open window found recommendation engine only available premium members looks your profile needs makes educated proposal about best recommended that shows impact index non-premium description benefits link upgrade membership buying history list bought their personal even non-premium which case there list also give member opportunity rate each rating gets susgen credits \",\" personalized news ticker allows adding deleting news streams from susgen website also external feeds lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus communities list part with some community information content items since last visit members active discussions learning activities currently pursuing people learning same thing progress credits show current many month free premium membership this means member show link upgrade give opportunity choose doesn't doesnt want billed also include button transfer credit another donate donation money value used support sustainability initiatives \",\" personal information usage platform #logins #contributions communities #product searches recommendations #e-learnings completed #re-directs product vendor sites ratings given #likes preferences areas sustainability interests broken down area health environment society sustainability profile premium lorem ipsum dolor amet consectetuer adipiscing elit curabitur tincidunt nisl pellentesque donec mauris mauris neque magna malesuada vitae aliquam lacinia suspendisse potenti proin justo lorem rutrum facilisis ligula lobortis lacus nibh aenean odio placerat hendrerit tempor pharetra eget ornare pede aliquet elementum pretium arcu luctus purus diam augue mollis scelerisque condimentum vestibulum tristique lectus first name last address town city state languages country postcode home telephone mobile work e-mail \",\" list communities part with some community information content items since last visit members active discussions with mouse click window opens that shows page search panel existing communities either browsing through catalogue search criteria category full text ratings area create have approval process community information need name topic description target audience type public restricted \",\" list learning content member subscribed finished learning show list there possibility document progress entering percentage number well rate with mouse click window opens that shows provides external providers navigation different from susgen page search panel either browsing through catalogue with search criteria category full text ratings \",\" \",\" \",\" marketplace company name phone number e-mail address business academia non-profit organization institution individual user register here… \");");
d.write("var pageMap = new Array(\"Home\",\"Co-Innovate\",\"LogIn\",\"About Us\",\"Partnership\",\"Becoming A Member\",\"Search Results\",\"My Needs\",\"My World\",\"My Profile\",\"Communities\",\"My Learning\",\"My Interests\",\"Value\",\"Join Us\");");
d.write("var linkMap = new Array(\"index.html\",\"coinnovate.html\",\"login.html\",\"aboutus.html\",\"partnership.html\",\"becomemember.html\",\"search.html\",\"needs.html\",\"myworld.html\",\"myprofile.html\",\"communities.html\",\"mylearning.html\",\"myinterests.html\",\"whysusgen.html\",\"joinus.html\");");
d.write("var preMap = new Array(\"EVENT ORGANIZERS HALL Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Curabitur id est tincidunt nisl pellentesque tincidunt  Donec in mauris  Mauris neque magna  consectetuer id  malesuada \",\"WHAT IS co-innovate susgen? Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Curabitur id est tincidunt nisl pellentesque tincidunt  Donec in mauris  Mauris neque magna  consectetuer id  male\",\"Username Password Username Password E-mail address Existing Users New to SusGen? Do Your Part Live a Sustainable Life   If You Are a Business or a Community  Register Here… \",\"\",\"LIST OF PARTNERS AND LOGOS Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Curabitur id est tincidunt nisl pellentesque tincidunt  Donec in mauris  Mauris neque magna  consectetuer id  males\",\"WHY REGISTER? Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Curabitur id est tincidunt nisl pellentesque tincidunt  Donec in mauris  Mauris neque magna  consectetuer id  malesuada vitae  t\",\"\",\" Search Panel for sustainability products and services Either browsing through a catalogue or with search criteria  product service category  like yellow pages    full text  ratings      Open a new wi\",\"Personalized News Ticker Allows adding and Deleting of news Streams from susGen Website and also External RSS feeds  Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Curabitur id est tincidun\",\"Personal Information  Usage of Platform - #logins - #contributions in communities - #product searches - #product recommendations - #e-Learnings completed - #re-directs to product vendor web sites - #p\",\" List of Communities I'm part of  with some community information  e g  # of new content items Since last visit of the community  # of members  # of active discussions  … With a mouse click a new wind\",\" List of Learning content the member has subscribed to Not finished learning content is show on top of list There is the possibility to document the learning progress by entering a percentage number  \",\"\",\"\",\"Marketplace Company Name Phone Number E-mail address Business Academia Non-profit Business Name Phone Number E-mail address Organization Phone Number E-mail address Institution Phone Number E-mail add\");");
d.write("function doNav(ind)");
d.write("{");
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\");");
else
d.write("		 parent.window.location.href=linkMap[ind];");
d.write("}");
d.write("function wpDoSearch(searchTerms){");
d.write("var terms = searchTerms.split(\" \");");
d.write("if (terms==\"\") return;");
d.write("var results = \"\";");
d.write("var resultscount = 0;");
d.write("for (var i=0; i<wordMap.length; i++)");
d.write("{");
d.write("			var found=true;");
d.write("			for (var j=0; j<terms.length; j++)");
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;");
d.write("			if (found)");
d.write("			{");
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\");\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";");
d.write("				 resultscount++;");
d.write("			}");
d.write("}");
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;");
d.write("}");
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","");
};
d.write("wpDoSearch(\""+sTerms+"\");");
d.write("</script>");
d.write("</body></html>");
d.close();
}