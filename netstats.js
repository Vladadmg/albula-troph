function plugNS(){var b=1;
var o=0;
var p=new Array("Shockwave Flash","Shockwave for Director","RealPlayer","QuickTime","VivoActive","LiveAudio","VRML","Dynamic HTML Binding","Windows Media Services");
var np=navigator.plugins;
for(var x=0;
x<p.length;
x++){for(var i=0;
i<np.length;
i++)if(np[i].name.indexOf(p[x])>=0)o|=b;
b*=2;
}return o;
}function plugIE(){if(!document.body)document.write('<body>');
var db=document.body;
var o=0;
var b=1;
var p=new Array("D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20","23064720-C4F8-11D1-994D-00C04F98BBC9","","","","90A7533D-88FE-11D0-9DBE-0000C0411FC3","9381D8F2-0288-11D0-9501-00AA00B911A5","22D6F312-B0F6-11D0-94AB-0080C74C7E95");
db.addBehavior("#default#clientcaps");
for(var i=0;
i<p.length;
i++){if(p[i])if(db.isComponentInstalled("{"+p[i]+"}","componentid"))o|=b;
b*=2;
}return o;
}function webstats4u(id,options){var n=navigator;
var ver=n.appVersion;
var d=document;
var verIE=parseInt(ver.substring(ver.indexOf("MSIE")+5,ver.indexOf("MSIE")+6));
if(verIE>0)ver=verIE;
else ver=parseInt(ver);
var u="http://m1.webstats4u.com/n?id="+id;
var r;
if(options&1)r=d.referrer;
else r=top.document.referrer;
if(!(options&2)){var rc=r;
var i=rc.indexOf('?');
if(i>=0)rc=rc.substring(0,i);
i=rc.lastIndexOf('/');
if(i>=0)rc=rc.substring(0,i+1);
var l=''+d.location;
if(l.indexOf(rc)==0)r='';
}if(r&&(r!=d.location))u+="&r="+escape(r);
if((n.appName=="Netscape"&&ver>=3))u+="&p="+plugNS();
if(verIE>=5&&n.appVersion.indexOf('Win')>=0&&n.userAgent.indexOf('Opera')<0)u+="&p="+plugIE();
if(ver>=4){var s=screen;
var w=s.width;
var h=s.height;
var c=s.colorDepth;
if(w)u+="&w="+w;
if(h)u+="&h="+h;
if(c)u+="&c="+c;
}u+="&v=1";
d.write('<a target=_blank href="http://www.webstats4u.com/stats?'+id+'"><img src="'+u+'" border=0 width=18 height=18 alt="Webstats4U - Free web site statistics"></a>');
// d.write("<scr"+"ipt language='JavaScript' type='text/javascript' src='http://m1.webstats4u.com/md.js?country=ch&id="+id+"&_t="+(new Date()).getTime()+"'></scr"+"ipt>");
}function nedstatbasic(id,options){webstats4u(id,options);
}    
