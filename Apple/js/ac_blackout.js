AC.Blackout=Class.create({defaultOptions:{duration:1.25,delay:2,showOnce:false,showWhenReferredByApple:true,link:false,iosbgsrc:"/global/elements/blank.gif"},initialize:function(c,a,b){this.uniqueIdentifier=a||Math.floor(Math.random()*1000000);
this.options=Object.extend(Object.clone(this.defaultOptions),b);this.isiOS=(typeof AC!=="undefined"&&typeof AC.Detector!=="undefined")&&(AC.Detector.isiPad()||AC.Detector.isiPhone());
if(!this.shouldShow()){return false}this._addBodyClass();Event.onDOMReady(function(){this.og={};
this.og.element=$(c);this.bo={};this.bo.offsets=this.og.element?this.og.element.cumulativeOffset():[0,0];
this.images=[];if(this.options.showOnce){this._setHasShown()}this._create();this.fade.bind(this).delay(this.options.delay)
}.bind(this))},addImage:function(b,a){if(!a.link&&!!this.options.link){a.link=this.options.link
}this.preloadImage(b);if(!!this._acceptImages){this._addImage(false,b,a)}else{this._boundAddImage=this._addImage.bindAsEventListener(this,b,a);
Event.observe(document.body,"ACBlackout:acceptImages",this._boundAddImage)}},preloadImage:function(c){var b=function(d){delete a
};var a=new Image();a.onload=b;a.src=c},_addImage:function(a,c,b){if(typeof this.images=="undefined"){return false
}this.images.push(new AC.Blackout.Image(this.bo,c,b))},wasReferredByApple:function(){if(typeof this._wasReferredByApple!=="undefined"){return this._wasReferredByApple
}this._wasReferredByApple=document.referrer.match(/^\w*:\/\/[^\.]*.apple.com/);
if(!!document.referrer.match(/\/home/)){return false}return this._wasReferredByApple
},shouldShow:function(){if(typeof this._shouldShow!=="undefined"){return this._shouldShow
}if(/msie|MSIE 6/.test(navigator.userAgent)){return this._shouldShow=false}this._shouldShow=true;
if(this.options.showOnce){if(!this.options.showWhenReferredByApple){if(!this.wasReferredByApple()){return this._shouldShow=true
}}try{typeof localStorage}catch(b){return this._shouldShow=false}if(typeof localStorage!=="undefined"){try{var a=localStorage.getItem("ACBlackout-"+this.uniqueIdentifier);
this._shouldShow=(a==null)?true:false}catch(b){return this._shouldShow=false}}else{if("addBehavior" in document.body){document.body.addBehavior("#default#userData");
document.body.load("ACBlackout");this._shouldShow=document.body.getAttribute("ACBlackout-"+this.uniqueIdentifier)==null?true:false
}}}else{if(!this.options.showWhenReferredByApple){if(!!this.wasReferredByApple()){this._shouldShow=false
}}}return this._shouldShow},_addBodyClass:function(){document.documentElement.className+=" ACBlackoutBody"
},_setHasShown:function(){var a=new Date;a=a.getTime();try{typeof localStorage}catch(b){return true
}if(typeof localStorage!=="undefined"){try{localStorage.setItem("ACBlackout-"+this.uniqueIdentifier,a)
}catch(b){return true}}else{if("addBehavior" in document.body){document.body.addBehavior("#default#userData");
document.body.setAttribute("ACBlackout-"+this.uniqueIdentifier,a);document.body.save("ACBlackout");
return true}else{return true}}},_create:function(){this.bo.height=document.documentElement.clientHeight>document.body.scrollHeight?document.documentElement.clientHeight:document.body.scrollHeight;
this.bo.width=document.documentElement.clientWidth>document.body.scrollWidth?document.documentElement.clientWidth:document.body.scrollWidth;
if($("ACBlackout")){this.bo.element=$("ACBlackout")}else{this.bo.element=new Element("div",{id:"ACBlackout","class":"ACBlackout",style:"height: "+this.bo.height+"px;"});
if(this.isiOS&&!!this.options.iosbgsrc){this.bo.element.setStyle("height: 100%; background: none !important; overflow: visible;");
this.bo.iosbg=new Element("img",{src:this.options.iosbgsrc,height:"1",width:"1","class":"ACBlackoutiOSBG"});
if((typeof AC!=="undefined"&&typeof AC.Detector!=="undefined")&&(AC.Detector.supportsThreeD())){this.bo.iosbg.setStyle("-webkit-transform: scale3d("+this.bo.width+","+this.bo.height+",1); -webkit-transform-origin: 0 0 0;")
}else{this.bo.iosbg.setStyle("-webkit-transform: scale("+this.bo.width+","+this.bo.height+"); -webkit-transform-origin: 0 0 0;")
}this.bo.element.insert(this.bo.iosbg)}}this._acceptImages=true;Event.fire(document.body,"ACBlackout:acceptImages",true);
if(AC.Detector.isCSSAvailable("transition")){this.bo.element.setVendorPrefixStyle("transitionProperty","opacity");
this.bo.element.setVendorPrefixStyle("transitionDuration",this.options.duration+"s");
this.bo.element.setVendorPrefixStyle("transitionTimingFunction","ease-in")}if(AC.Detector.isIE()){Element.insert(document.body,{bottom:this.bo.element})
}else{Element.insert(document.body,{top:this.bo.element})}Element.removeClassName(document.documentElement,"ACBlackoutBody")
},fade:function(){if(AC.Detector.isCSSAvailable("transition")){var b=function(c){c.target.hide();
c.target.removeVendorEventListener("transitionEnd",a);b=function(){}};var a=b.bindAsEventListener(this);
this.bo.element.addVendorEventListener("transitionEnd",a);this.bo.element.setStyle("opacity: 0;");
b.delay(this.options.duration+0.01,{target:this.bo.element})}else{this.bo.element.fade({duration:this.options.duration})
}}});AC.Blackout.Image=Class.create({defaultOptions:{offsets:[0,0],dimensions:false,duration:0.75,delay:0,link:false},initialize:function(b,c,a){this.options=Object.extend(Object.clone(this.defaultOptions),a);
this.bo=b;this.src=c;this._create();this.fadeIn.bind(this).delay(this.options.delay)
},_create:function(){this.left=this.options.offsets[0];this.top=this.bo.offsets[1]+this.options.offsets[1];
if(!!this.options.link){this.main=new Element("a",{"class":"ACBlackoutMain linked",href:this.options.link})
}else{this.main=new Element("div",{"class":"ACBlackoutMain"})}this.img=new Element("img",{src:this.src,"class":"ACBlackoutImg",style:"top: "+this.top+"px; left: "+this.left+"px;"});
if(this.options.dimensions){this.img.setStyle("width: "+this.options.dimensions[0]+"px; height: "+this.options.dimensions[1]+"px;")
}if(AC.Detector.isCSSAvailable("transition")){this.img.setStyle("opacity: 0");this.img.setVendorPrefixStyle("transitionProperty","opacity");
this.img.setVendorPrefixStyle("transitionDuration",this.options.duration+"s");this.img.setVendorPrefixStyle("transitionTimingFunction","ease-in")
}else{this.img.hide()}this.bo.element.insert(this.main);this.main.insert(this.img)
},fadeIn:function(){var a=this;var b=function(){document.body.fire("ACBlackout:didFadeImageIn",a);
a.img.removeVendorEventListener("transitionEnd",b)};document.body.fire("ACBlackout:willFadeImageIn",this);
if(AC.Detector.isCSSAvailable("transition")){this.img.setStyle("opacity: 1;");this.img.addVendorEventListener("transitionEnd",b)
}else{this.img.appear({duration:this.options.duration,afterFinish:b})}}});

// ������������ͼ�⣨������ ���������Ͷ� ת����ע������ www.lanrentuku.com