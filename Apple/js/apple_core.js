Object.extend(Event,{_domReady:function(){if(arguments.callee.done){return}arguments.callee.done=true;
if(this._timer){clearInterval(this._timer)}AC.isDomReady=true;if(this._readyCallbacks){this._readyCallbacks.each(function(a){a()
})}this._readyCallbacks=null},onDOMReady:function(b){if(AC.isDomReady){b()}else{if(!this._readyCallbacks){var a=this._domReady.bind(this);
if(document.addEventListener){document.addEventListener("DOMContentLoaded",a,false)
}if(document.all){document.onreadystatechange=function(){if(this.readyState=="complete"){a()
}}}if(/WebKit/i.test(navigator.userAgent)){this._timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){a()
}},10)}Event.observe(window,"load",a);Event._readyCallbacks=[]}Event._readyCallbacks.push(b)
}}});if(typeof(AC)=="undefined"){AC={}}AC.decorateSearchInput=function(k,q){var p=$(k);
var g=null;var f=0;var l="";var j="";if(q){if(q.results){f=q.results}if(q.placeholder){l=q.placeholder
}if(q.autosave){j=q.autosave}}if(AC.Detector.isWebKit()){if(AC.Detector.isWin()){p.addClassName("not-round")
}p.setAttribute("type","search");if(!p.getAttribute("results")){p.setAttribute("results",f)
}if(null!=l){p.setAttribute("placeholder",l);p.setAttribute("autosave",j)}}else{p.setAttribute("autocomplete","off");
g=document.createElement("input");p.parentNode.replaceChild(g,p);var d=document.createElement("span");
Element.addClassName(d,"left");var m=document.createElement("span");Element.addClassName(m,"right");
var i=document.createElement("div");Element.addClassName(i,"reset");var a=document.createElement("div");
Element.addClassName(a,"search-wrapper");var h=k.value==l;var e=k.value.length==0;
if(h||e){p.value=l;Element.addClassName(a,"blurred");Element.addClassName(a,"empty")
}a.appendChild(d);a.appendChild(p);a.appendChild(m);a.appendChild(i);var o=function(){var r=Element.hasClassName(a,"blurred");
if(p.value==l&&r){p.value=""}Element.removeClassName(a,"blurred")};Event.observe(p,"focus",o);
var c=function(){if(p.value==""){Element.addClassName(a,"empty");p.value=l}Element.addClassName(a,"blurred")
};Event.observe(p,"blur",c);var b=function(){if(p.value.length>=0){Element.removeClassName(a,"empty")
}};Event.observe(p,"keydown",b);var n=function(){return(function(r){var t=false;
if(r.type=="keydown"){if(r.keyCode!=27){return}else{t=true}}p.blur();p.value="";
Element.addClassName(a,"empty");p.focus()})};Event.observe(i,"mousedown",n());Event.observe(p,"keydown",n());
if(g){g.parentNode.replaceChild(a,g)}}};Element.addMethods({getInnerDimensions:function(c){c=$(c);
var f=Element.getDimensions(c);var e=f.height;var b=Element.getStyle;e-=b(c,"border-top-width")&&b(c,"border-top-width")!="medium"?parseInt(b(c,"border-top-width"),10):0;
e-=b(c,"border-bottom-width")&&b(c,"border-bottom-width")!="medium"?parseInt(b(c,"border-bottom-width"),10):0;
e-=b(c,"padding-top")?parseInt(b(c,"padding-top"),10):0;e-=b(c,"padding-bottom")?parseInt(b(c,"padding-bottom"),10):0;
var a=f.width;a-=b(c,"border-left-width")&&b(c,"border-left-width")!="medium"?parseInt(b(c,"border-left-width"),10):0;
a-=b(c,"border-right-width")&&b(c,"border-right-width")!="medium"?parseInt(b(c,"border-right-width"),10):0;
a-=b(c,"padding-left")?parseInt(b(c,"padding-left"),10):0;a-=b(c,"padding-right")?parseInt(b(c,"padding-right"),10):0;
return{width:a,height:e}},getOuterDimensions:function(b){b=$(b);var g=b.cloneNode(true);
document.body.appendChild(g);Element.setStyle(g,{position:"absolute",visibility:"hidden"});
var f=Element.getDimensions(g);var c=f.height;var a=Element.getStyle;c+=a(g,"margin-top")?parseInt(a(g,"margin-top"),10):0;
c+=a(g,"margin-bottom")?parseInt(a(g,"margin-bottom"),10):0;var e=f.width;e+=a(g,"margin-left")?parseInt(a(g,"margin-left"),10):0;
e+=a(g,"margin-right")?parseInt(a(g,"margin-right"),10):0;Element.remove(g);return{width:e,height:c}
},removeAllChildNodes:function(a){a=$(a);if(!a){return}while(a.hasChildNodes()){a.removeChild(a.lastChild)
}},setVendorPrefixStyle:function(c,e,d){if(e.match(/^webkit/i)){e=e.replace(/^webkit/i,"")
}else{if(e.match(/^moz/i)){e=e.replace(/^moz/i,"")}else{if(e.match(/^ms/i)){e=e.replace(/^ms/i,"")
}else{if(e.match(/^o/i)){e=e.replace(/^o/i,"")}else{if(e.match("-")){var b=e.split("-");
e="";for(var a=0;a<b.length;a++){e+=b[a].charAt(0).toUpperCase()+b[a].slice(1)}}else{e=e.charAt(0).toUpperCase()+e.slice(1)
}}}}}if(d.match("-webkit-")){d=d.replace("-webkit-","-vendor-")}else{if(d.match("-moz-")){d=d.replace("-moz-","-vendor-")
}else{if(d.match("-ms-")){d=d.replace("-ms-","-vendor-")}else{if(d.match("-o-")){d=d.replace("-o-","-vendor-")
}}}}c.style["webkit"+e]=d.replace("-vendor-","-webkit-");c.style["Moz"+e]=d.replace("-vendor-","-moz-");
c.style["ms"+e]=d.replace("-vendor-","-ms-");c.style["o"+e]=d.replace("-vendor-","-o-");
c.style[e]=d;e=e.charAt(0).toLowerCase()+e.slice(1);c.style[e]=d},addVendorEventListener:function(b,c,d,a){if(typeof(addEventListener)=="function"){if(c.match(/^webkit/i)){c=c.replace(/^webkit/i,"")
}else{if(c.match(/^moz/i)){c=c.replace(/^moz/i,"")}else{if(c.match(/^ms/i)){c=c.replace(/^ms/i,"")
}else{if(c.match(/^o/i)){c=c.replace(/^o/i,"")}else{c=c.charAt(0).toUpperCase()+c.slice(1)
}}}}if(/WebKit/i.test(navigator.userAgent)){b.addEventListener("webkit"+c,d,a)}else{if(/Opera/i.test(navigator.userAgent)){b.addEventListener("o"+c,d,a)
}else{if(/Gecko/i.test(navigator.userAgent)){b.addEventListener(c.toLowerCase(),d,a)
}else{c=c.charAt(0).toLowerCase()+c.slice(1);return b.addEventListener(c,d,a)}}}}},removeVendorEventListener:function(b,c,d,a){if(typeof(removeEventListener)=="function"){if(c.match(/^webkit/i)){c=c.replace(/^webkit/i,"")
}else{if(c.match(/^moz/i)){c=c.replace(/^moz/i,"")}else{if(c.match(/^ms/i)){c=c.replace(/^ms/i,"")
}else{if(c.match(/^o/i)){c=c.replace(/^o/i,"")}else{c=c.charAt(0).toUpperCase()+c.slice(1)
}}}}b.removeEventListener("webkit"+c,d,a);b.removeEventListener("o"+c,d,a);b.removeEventListener(c.toLowerCase(),d,a);
c=c.charAt(0).toLowerCase()+c.slice(1);return b.removeEventListener(c,d,a)}}});
addVendorEventListener=function(b,c,a){Element.Methods.addVendorEventListener(window,b,c,a)
};removeVendorEventListener=function(b,c,a){Element.Methods.removeVendorEventListener(window,b,c,a)
};var Element2={};Element2.Methods=Object.clone(Element.Methods);if(typeof(AC)=="undefined"){AC={}
}if(typeof(AC.Tracking)=="undefined"){AC.Tracking={}}AC.Tracking.getLinkClicked=function(a){if(!a){return null
}while(a.nodeName.toLowerCase()!="a"&&a.nodeName.toLowerCase()!="body"){a=a.parentNode
}if(!a.href){a=null}return a};AC.Tracking.trackLinksWithin=function(a,e,d,c,b){$(a).observe("mousedown",function(f){var h=AC.Tracking.getLinkClicked(Event.element(f));
if(h&&e(h)){if(b&&b.beforeTrack){var g=b.beforeTrack(h,d,c);if(g){d=g.title;c=g.properties
}}AC.Tracking.trackClick(c,this,"o",d)}})};AC.Tracking.tagLinksWithin=function(a,b,c,d){$(a).observe("mousedown",function(e){var f=Event.element(e);
if(!f){return}while(f.nodeName.toLowerCase()!="a"&&f.nodeName.toLowerCase()!="body"){f=f.parentNode
}if(f.href&&d(f)){AC.Tracking.tagLink(f,b,c)}f=null})};AC.Tracking.tagLink=function(c,b,d){var a=c.getAttribute("href");
if(a.match(/\?/)){var e=a.toQueryParams();e[b]=d;a=a.split(/\?/)[0]+"?"+$H(e).toQueryString()
}else{a+="?"+b+"="+d}c.setAttribute("href",a)};AC.Tracking.s_vi=function(){var d=document.cookie.split(";"),e=null,a;
for(var c=0,b;(b=d[c]);c++){a=b.match(/^\s*s_vi=\[CS\]v1\|(.+)\[CE\]\s*$/);if(a){e=a[1];
break}}return e};AC.Tracking.track=function(f,d,b){if(typeof(s_gi)=="undefined"||!s_gi){return
}b=b||{};if(typeof(s_account)!="undefined"){s=s_gi(s_account)}else{if(b.s_account){s=s_gi(b.s_account)
}else{return}}if(f==s.tl){var a="";for(var c in d){a+=c+","}a=a.replace(/,$/,"");
s.linkTrackVars=a}else{s.linkTrackVars=""}s.prop4="";s.g_prop4="";s.prop6="";s.g_prop6="";
s.pageURL="";s.g_pageURL="";s.g_channel="";var e=function(g){if(typeof(g)=="string"){return g.replace(/[\'\"\�\�\�\�]/g,"")
}else{return g}};for(var c in d){s[c]=e(d[c]);if(c=="events"){s.linkTrackEvents=e(d[c])
}}if(f==s.t){void (s.t())}else{s.tl(b.obj,b.linkType,e(b.title))}for(var c in d){if(c!="pageName"){s[c]=""
}if(c=="events"){s.linkTrackEvents="None"}}},AC.Tracking.trackClick=function(c,d,a,e,b){var b={obj:d,linkType:a,title:e};
AC.Tracking.track(s.tl,c,b)},AC.Tracking.trackPage=function(b,a){AC.Tracking.track(s.t,b,a)
};Element.Methods.childNodeWithNodeTypeAtIndex=function(d,a,b){var e=d.firstChild;
if(!e){return null}var c=0;while(e){if(e.nodeType===a){if(b===c){return e}c++}e=e.nextSibling
}return null};String.prototype.lastPathComponent=function(){var a=this.lastIndexOf("/");
if(a!=-1){return this.substring(a+1,this.length-1)}else{return null}};String.prototype.stringByDeletingLastPathComponent=function(){var a=this.lastIndexOf("/");
if(a!=-1){return this.slice(0,a)}else{return null}};String.prototype.stringByAppendingPathComponent=function(a){return(this.lastIndexOf("/")!==(this.length-1))?(this+"/"+a):(this+a)
};String.prototype.stringByRemovingPrefix=function(c){var b=this.indexOf(c);if(b>-1){var a=this.substring(b+c.length,this.length);
return a}else{return this}};String.prototype.pathExtension=function(){var b=this.lastPathComponent();
var a=b.lastIndexOf(".");if(a!=-1){return b.slice(a,b.length)}else{return""}};Array.prototype.addObjectsFromArray=function(c){if(c.constructor===Array){this.push.apply(this,c)
}else{for(var a=0,b;(b=c[a]);a++){this[this.length]=b}}};Array.prototype.item=function(a){return this[a]
};document._importNode=function(g,b){if(g.nodeType===Node.ELEMENT_NODE){var e=document.createElement(g.nodeName);
var d,c;if(g.attributes&&g.attributes.length>0){var h=g.attributes}var f,a;for(d=0,c=g.attributes.length;
d<c;){f=h[d].nodeName;a=g.getAttribute(h[d++].nodeName);if(f==="class"){e.setAttribute("className",a)
}e.setAttribute(f,a)}if(b&&g.childNodes&&g.childNodes.length>0){for(d=0,c=g.childNodes.length;
d<c;d++){if(e.tagName==="NOSCRIPT"){continue}e.appendChild(document._importNode(g.childNodes[d],b))
}}return e}else{if(g.nodeType===Node.TEXT_NODE){return document.createTextNode(g.nodeValue)
}else{if(g.nodeType===Node.COMMENT_NODE){return document.createComment(g.nodeValue)
}else{if(g.nodeType===Node.CDATA_SECTION_NODE){return document.createCDATASection(g.nodeValue)
}else{return null}}}}};if(!document.importNode){document.importNode=document._importNode
}if(AC.Detector.isIEStrict()){Element.Methods.hasAttribute=function(c,b){if(b=="class"){b="className"
}else{if(b=="for"){b="htmlFor"}}var a=c.getAttribute(b);return((a!=null)&&(a!==""))
};document._getElementsByName=document.getElementsByName;document._HTMLElementsWithName=["a","apple","button","form","frame","iframe","img","input","object","map","meta","param","textarea","select"];
document.getElementsByName=function(d){var c=this._HTMLElementsWithName;var a=[],b,g,h;
for(var j=0,f;(f=c[j]);j++){b=document.getElementsByTagName(f);for(g=0;(h=b[g]);
g++){if(h.name===d){a[a.length]=h}}}return a}}AC.Storage={_storageType:false,storageType:function(){if(!this._storageType){if(document.cookie){this._storageType="cookie"
}try{if(window.localStorage){this._storageType="localStorage"}}catch(a){}}return this._storageType
},setItem:function(a,b,c){if(this.storageType()=="localStorage"){localStorage.removeItem(a);
localStorage.setItem(a,b)}else{this.createCookie(a,b,c)}},getItem:function(a){var b;
return((this.storageType()=="localStorage")&&(b=localStorage.getItem(a)))?b:this.readCookie(a)
},removeItem:function(a){if(this.storageType()=="localStorage"){localStorage.removeItem(a)
}this.eraseCookie(a)},createCookie:function(c,d,e){if(e===null){e=365}if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));var a="; expires="+b.toGMTString()}else{var a=""
}document.cookie=c+"="+d+a+"; path=/"},readCookie:function(d){var f=d+"=";var a=document.cookie.split(";");
for(var b=0;b<a.length;b++){var e=a[b];while(e.charAt(0)==" "){e=e.substring(1,e.length)
}if(e.indexOf(f)==0){return e.substring(f.length,e.length)}}return null},eraseCookie:function(a){this.createCookie(a,"",-1)
}};var gomez=gomez?gomez:{};gomez.h3=function(c,a){for(var b in a){c[b]=a[b]}return c
};gomez.h3(gomez,{b3:function(a){if(a<=0){return false}return Math.random()<=a&&a
},b0:function(d){var b=document.cookie;var a=b.match(new RegExp(";[ ]*"+d+"=([^;]*)"));
if(!a){a=b.match(new RegExp(d+"=([^;]*)"))}if(a){return unescape(a[1])}return""
},c2:function(f,k,g,b,h,m){try{var l=this,j=location.hostname;var i=f+"="+escape(k)+(g?";expires="+g.toGMTString():"")+(b?";path="+b:";path=/")+(h?";domain="+h:";domain="+j)+(m?";secure":"");
document.cookie=i}catch(g){}},z0:function(d){var b=this;if(d){var c=b.b0("__g_c");
if(!c){return""}var a=c.match(new RegExp(d+":([^|]*)"));if(a){return unescape(a[1])
}return""}else{return""}},z1:function(d,a){var b=this;if(d){var c=b.b0("__g_c");
if(c){if(c.indexOf(d+":")!=-1){c=c.replace(new RegExp("("+d+":[^|]*)"),d+":"+a)
}else{c=c==" "?d+":"+a:c+"|"+d+":"+a}b.c2("__g_c",c)}else{b.c2("__g_c",d+":"+a)
}}}});if(gomez.wrate){gomez.i0=gomez.z0("w");if(gomez.i0){gomez.runFlg=parseInt(gomez.i0)>0?true:false
}else{if(gomez.b3(parseFloat(gomez.wrate))){gomez.runFlg=true;gomez.z1("w",1)}else{gomez.runFlg=false;
gomez.z1("w",0)}}}else{if(gomez.wrate==undefined){gomez.runFlg=true;gomez.z1("w",1)
}else{gomez.runFlg=false;gomez.z1("w",0)}}if(gomez.runFlg){gomez.h1=function(a,b){return a?a:b
};gomez.gs=gomez.h1(gomez.gs,new Date().getTime());gomez.acctId=gomez.h1(gomez.acctId,"");
gomez.pgId=gomez.h1(gomez.pgId,"");gomez.grpId=gomez.h1(gomez.grpId,"");gomez.E=function(a){this.s=a
};gomez.E.prototype={g1:function(c){var b=gomez,a=b.g6(c);if(a){a.e=b.b5()}}};gomez.L=function(a){this.a=a
};gomez.L.prototype={g2:function(c){var j=gomez,b=j.b5();var k=document.getElementsByTagName(c);
var g=j.k;if(c=="script"){g=j.j}if(c=="iframe"){g=j.l}if(k){var d=k.length;for(var f=0;
f<d;f++){var h=k[f].src||k[f].href;if(h&&!g[h]){var a=new gomez.E(g);j.grm[h]=a;
g[h]=new j.c7(h,b);if(j.gIE&&c=="script"){j.e2(k[f],"readystatechange",j.d2,false)
}else{j.e2(k[f],"load",a.g1,false)}}}}}};gomez.L.m=new Object;gomez.L.m.script=new gomez.L();
gomez.L.m.link=new gomez.L();gomez.L.m.iframe=new gomez.L();gomez.S=function(){var a=this,b=gomez.acctId+".r.axf8.net";
a.x=location.protocol+"//"+b+"/mr/b."+["g","i","f"].join("")+"?";a.y=location.protocol+"//"+b+"/mr/a."+["g","i","f"].join("")+"?"
};gomez.h2=function(){var a=this;a.gIE=false;a.f=new Object;a._h=0;a.j=new Object;
a.k=new Object;a.l=new Object;a.m=location.href;a.p=-1;a.q=-1;a.t=new Array;a.u=new Array;
a._w=false;a.gSfr=/KHTML|WebKit/i.test(navigator.userAgent);a.gc={n:"c"};a.grm=new Object;
a.b;a.a=0;a.d=false;a.x=false;a.s=new gomez.S;a._a=false;a.h6=false};gomez.h3(gomez,{h5:function(a){try{var b=document.createElement("script");
b.src=a;b.type="text/javascript";if(document.body){document.body.appendChild(b)
}else{if(document.documentElement.getElementsByTagName("head")[0]){document.documentElement.getElementsByTagName("head")[0].appendChild(b)
}}}catch(c){}},a9:function(){var b=gomez,a=b.z0("a"),e=b.b0("__g_u");b.gc.h=b.z0("b");
if(!b.gc.h){b.gc.h=1}b.z1("b",parseInt(b.gc.h)+1);if(a){b.a=parseInt(a);if(b.a==1){b._w=true
}else{if(b.a==3){b.x=true;b._w=true}}b.d=true;b.gc.c=b.z0("c");b.gc.d=b.z0("d");
b.gc.i=b.z0("e");b.gc.j=b.z0("f");if(b._w&&!b._a){b.h7();b._a=true}}else{if(!b.gc.a){return
}var c="v=1";b.c2("__g_u","1",new Date(b.gt()+1000));if(b.b0("__g_u")&&e&&e!="1"&&e.indexOf("NaN")==-1&&e.indexOf("undefined")==-1){c="v=0";
var d=e.split("_");b.b2(parseInt(d[0]),parseInt(d[1])+1);if(d[4]&&d[4]!="0"&&b.gt()<parseInt(d[5])&&d[2]&&d[2]!="0"){b.b1(parseFloat(d[2]),parseFloat(d[3]),parseFloat(d[4]),parseInt(d[5]));
return}}b.h6=true;c=b.s.y+"a="+b.gc.a+"&"+c;if(b.gSfr){document.write("<script src='"+c+"'><\/script>")
}else{b.h5(c)}}b.b=b.z0("g")},h7:function(){var b=gomez,a=b.tloc?b.tloc:location.protocol+"//"+b.acctId+".t.axf8.net/js/gtag4.js";
if(b.gSfr){document.write("<script src='"+a+"'><\/script>")}else{b.h5(a)}},b1:function(a,c,e,d){var b=this;
if(b._a){return}if(b.b3(a)){b._w=true;b.a=1;var g=parseFloat(c/a);if(b.b3(g)){b.x=true;
b.a=3}}b.d=true;b.z1("a",b.a);b.z1("e",a);b.z1("f",c);b.gc.i=a;b.gc.j=c;b.h4(a,c,e,d);
if(b._w){b.h7();b._a=true}},b2:function(a,c){var b=this,e=new Date(b.gt()+946080000000),d=""+a+"_"+c;
if(b._a){return}b.c2("__g_u",d,e);b.gc.c=a;b.gc.d=c;b.z1("c",a);b.z1("d",c)},h4:function(e,c,b,j){var k=this,i=new Date(k.gt()+946080000000),h=k.b0("__g_u");
if(h&&h!="1"&&h.indexOf("NaN")==-1&&h.indexOf("undefined")==-1){var a=h.split("_"),l;
if(j){l=j}else{if(b&&b>=0){l=new Date(k.gt()+parseInt(b*86400000)).getTime()}else{b=5;
l=new Date(k.gt()+432000000).getTime()}}h=""+a[0]+"_"+a[1]+"_"+e+"_"+c+"_"+b+"_"+l;
k.c2("__g_u",h,i)}},gt:function(){return new Date().getTime()},b5:function(){return new Date().getTime()-gomez.gs
},b6:function(){var a=gomez;a.p=a.b5()},f8:function(){var a=this;if(a.pollId1){clearInterval(a.pollId1)
}if(a.pollId2){clearInterval(a.pollId2)}if(a.pollId3){clearInterval(a.pollId3)}if(a.pollId4){clearInterval(a.pollId4)
}},b7:function(){var a=gomez;a.f8();a.q=a.b5()},c7:function(a,c){var b=this;b.m=a;
b.s=c},c8:function(){var d=gomez,f=d.b5(),a=document.images.length;if(a>d._h){for(var c=d._h;
c<a;++c){var b=document.images[c].src;if(b){var e=new gomez.E(d.f);d.grm[b]=e;d.f[b]=new d.c7(b,f);
d.e2(document.images[c],"load",d.c4,false);d.e2(document.images[c],"error",d.c5,false);
d.e2(document.images[c],"abort",d.c6,false)}}}d._h=a},c4:function(c){var b=gomez,a=b.g6(c);
if(a){a.e=b.b5()}},c5:function(c){var b=gomez,a=b.g6(c);if(a){a.e=b.b5();a.b=1}},c6:function(c){var b=gomez,a=b.g6(c);
if(a){a.a=b.b5()}},g6:function(f){var d=gomez,f=window.event?window.event:f,b=d.d8(f),c;
if(d.grm[b.src||b.href]&&d.grm[b.src||b.href].s){c=d.grm[b.src||b.href].s[b.src||b.href]
}return c},d2:function(){var a=gomez;var c=window.event?window.event:c,b=a.d8(c);
if(b.readyState=="loaded"||b.readyState=="complete"){var d=a.j[b.src];if(d){d.e=a.b5()
}}},setPair:function(a,c){var b=this;b.t[b.t.length]={n:"p",a:a,b:c}},nameEvent:function(b){var a=this;
a.f6(b,1)},startInterval:function(b){var a=this;a.f6(b,2,1)},endInterval:function(b){var a=this;
a.f6(b,2,2)},f6:function(g,e,a){if(g&&g.length>20){g=g.substring(0,20)}var c=this,d=c.u;
d[d.length]={n:"a",a:g,b:c.b5(),e:e,f:a}},d8:function(a){if(gomez.gIE){return a.srcElement||{}
}else{return a.currentTarget||a.target||{}}},e2:function(g,d,b,i){var h="on"+d;
if(g.addEventListener){g.addEventListener(d,b,i)}else{if(g.attachEvent){g.attachEvent(h,b)
}else{var a=g[h];if(typeof g[h]!="function"){g[h]=b}else{g[h]=function(c){a(c);
b(c)}}}}},i1:function(){var c=window.document,a=false,b=function(){if(!a){a=true;
gomez.b6();gomez.a9()}};(function(){try{c.documentElement.doScroll("left")}catch(d){setTimeout(arguments.callee,50);
return}b()})();c.onreadystatechange=function(){if(c.readyState=="complete"){c.onreadystatechange=null;
b()}}},g7:function(){try{var t=gomez;t.gc.a=t.acctId;
/*@cc_on t.gIE=true;@*/
if(t.gIE){t.i1();
window.attachEvent("onload",t.b7)}else{if(t.gSfr){var m=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(m);
delete m;t.b6();t.b7()}},10)}else{if(window.addEventListener){window.addEventListener("DOMContentLoaded",t.b6,false);
window.addEventListener("load",t.b7,false)}else{return}}}t.c8();t.pollId1=setInterval(t.c8,1);
gomez.L.m.link.g2("link");t.pollId3=setInterval("gomez.L.m['link'].g2('link')",1);
gomez.L.m.iframe.g2("iframe");t.pollId4=setInterval("gomez.L.m['iframe'].g2('iframe')",1);
if(!t.gIE){t.a9()}}catch(e){return}}});gomez.h2();gomez.g7()};