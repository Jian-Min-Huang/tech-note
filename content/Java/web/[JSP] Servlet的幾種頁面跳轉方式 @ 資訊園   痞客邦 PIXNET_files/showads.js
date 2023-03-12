
﻿(function(w){if(w['BA_CORE_20']){return;}
w['BA_CORE_20']=true;
﻿var FD=new function(){var s=this;s.i=false;var sf="ShockwaveFlash";var v="version";var aDR=[{"name":sf+"."+sf+".7",v:function(o){return gAV(o);}},{"name":sf+"."+sf+".6",v:function(o){var v="6,0,21";try{o.AllowScriptAccess="always";v=gAV(o);}catch(err){}
return v;}},{"name":sf+"."+sf,v:function(o){return gAV(o);}}];var gAV=function(axo){var v=-1;try{v=axo.GetVariable("$"+v);}catch(err){}
return v;};var gAO=function(n){var o=-1;try{o=new ActiveXObject(n);}catch(err){o={e:true};}
return o;};s.FD=function(){var n=navigator;if(n.plugins&&n.plugins.length>0){var t='application/x-shockwave-flash';var mT=n.mimeTypes;if(mT&&mT[t]&&mT[t].enabledPlugin&&mT[t].enabledPlugin.description){s.i=true;}}
else if(n.appVersion.indexOf("Mac")==-1&&window.execScript){var v=-1;for(var i=0;i<aDR.length&&v==-1;i++){var o=gAO(aDR[i].name);if(!o.e){s.i=true;}}}}();};
function BA_CORE(){this.sBID='20110429000035';this.sFID='2';this.sMID='20110421000043';};BA_CORE.prototype={oD:document,sAD:'BA_AD'+(''=='w'?'2':('0'=='1'?'0':'_2')),sTL:(top!=self)?document.referrer:location.href,sLH:location.host,rAMID:/ba_amid=(\d+)/i,rFID:/ba_fid=(\d+)/i,iSD:function(){with(this){return(sLH.split('.').reverse()[1]==sADD.split('.').reverse()[1]&&sLH.search('signup')==0)?1:0;}},gAMID:function(){with(this){if(iSD()){var m=location.href.match(/\?id=(\d+)/i);if(m&&m[1])
return m[1];}
if(rAMID.test(sTL)&&rFID.test(sTL)&&sTL.match(rFID)[1]==sFID){return sTL.match(rAMID)[1];}
return'';}},iPV:function(){return this.gAMID()!='';},sADD:'js1.bloggerads.net',sSC:'/',iMB:'0',sH5:(!!document.createElement('canvas').getContext)?1:0,sFLASH:FD.i?1:0,sL:location.href,sMD:'d1e162yg4o0uim.cloudfront.net/AdsService',sCSS:'CSS/ba.min.css',sADP:'getads.aspx',sPVP:'getads_pv.aspx',sF:'JS/ba2.min.js',sFV:'v=170405001',sCD:'1',isWeb:'0',isContent:'0',eXT:function(t){t.dEC(this,function(a){t[a]=this==window?null:this;});},aPN:function(o,c){o.appendChild(c);},dEC:function(o,f){if(!o){return;}
if(!o.length||o.length==0){for(var _i in o){if(f.call(o[_i],_i)===false){break;}}}
else{for(var _i=0;_i<o.length;_i++){if(f.call(o[_i],_i)===false){break;}}}
return o;},sATT:function(o,a,v){if(v){o[a]=v;return o;}
this.dEC(a,function(k){o[k]=this;});return o;},gBT:function(t,o){return(o||this.oD).getElementsByTagName(t);},gBI:function(i){return this.oD.getElementById(i);},gCE:function(t,a,i,iT){with(this){var _d=this.oD.createElement(t);this.sATT(_d,a);if(iT){this.aPN(_d,this.oD.createTextNode(i));}else if(i){_d.innerHTML=i;}
return _d;}},lJS:function(s,a){var _tn='script',_t='text/java'+_tn;with(this){t=gBT('script')[0];t.parentNode.insertBefore(gCE(_tn,{type:_t,src:s,'async':'async'}),t);}},tB:function(t,a,i){return'<'+t+' '+(a||'')+'>'+(i||'')+'</'+t+'>';},gAD:function(){return this.gBI(this.sAD);},pAD:function(h){if(typeof(h)==='string'){var t=this.gCE('div',null,h);h=t.childNodes;}
var ad=this.gBI(this.sAD);while(h&&h.length&&h.length>0){this.aPN(ad,h[0]);}},lCSS:function(h){var _t='text/css',_r='stylesheet',_tn='link';with(this){t=gBT('script')[0];t.parentNode.insertBefore(gCE(_tn,{rel:_r,type:_t,href:h}),t);}},eURI:function(d){return encodeURIComponent(d);},sI:function(cn){w[cn]=this;with(this){var ss=oD.getElementsByTagName("script");var u1,u2;if(isWeb==0)
{u1='//js1.bloggerads.net/'+(isContent==1?'contentads.aspx':(sFID=='2'?'ShowAds.aspx':'ShowBanner.aspx'))+'?blogid='+sBID;u2='//ad2.bloggerads.net/'+(isContent==1?'contentads.aspx':(sFID=='2'?'ShowAds.aspx':'ShowBanner.aspx'))+'?blogid='+sBID;}
else
{u1='//js1.bloggerads.net/verify.aspx?w='+sBID+'&chartset=utf-8&f='+(sFID=='2'?'1':'5');u2='//js1.bloggerads.net/verify.aspx?w='+sBID+'&f='+(sFID=='2'?'1':'5');}
for(var script=0,len=ss.length;script<len;script++){var s=ss[script];if(s.src.toLowerCase().indexOf(u1.toLowerCase())>=0||s.src.toLocaleLowerCase().indexOf(u2.toLowerCase())>=0){var n=document.createElement('div');n.id=sAD;n.onclick="return false;";n.setAttribute('align',"left");if(isContent==1||sFID=='1')
n.className='';else
n.className="BA_AD";if(isContent==1)
n.setAttribute('style',"width: 510px;");s.parentNode.insertBefore(n,s);break;}}
lCSS([sSC,sMD,sCSS].join('/')+'?'+sFV);lJS([sSC,sMD,sF].join('/')+'?'+sFV);if(!iPV())
lJS([sSC,sADD,sADP].join('/')+'?'+['blogid='+sBID,'fid='+sFID,'c='+cn,'d='+sCD,'sh5='+sH5,'sflash='+sFLASH,'isc='+isContent,'w='+(oD.body==null?0:oD.body.clientWidth)].join('&'));else
lJS([sSC,sADD,sPVP].join('/')+'?'+['blogid='+sBID,'amid='+gAMID(),'isd='+iSD(),'c='+cn,'isc='+isContent].join('&'));}}}
try{var c=new BA_CORE();c.sI('b423516640');}
catch(e){}})(window);var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-1689570-29']);_gaq.push(['_setDomainName','js1.bloggerads.net']);_gaq.push(['_setAllowHash',false]);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();
(function(i,s,g,r,a,m){i['eagleeyeObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement('script'),m=s.getElementsByTagName('script')[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'https://wrl.eagleeye.com.tw/ea','$$eeA');$$eeA('create','115-243-1137');$$eeA('send','page',{cmid:'',blog_BId:'20110429000035'});