
$("#sub_01").append('<li><a href="/1/">备 案 域 名</a></li>');
//$(".new-user").detach();
$("#mainlevel_10").detach();
$('#sub_07 li:contains(店铺排行榜 )').detach();
//$('.hearnav a:contains(域名竞价)').attr("href","?system_hc_xxx=y");
//$('.hearnav a:contains(域名竞价)').text('更新缓存');
$("#nav").append('<li class="mainlevel " id="mainlevel_018"><a style="color:yellow;" href="#">便捷购买</a><ul id="sub_018" ><li><a href="/?/yba.htm">5元域名</a></li><li><a href="/ykj/?tt=43225&sfba=1&ymlx=1">高权重PR</a></li><li><a href="/ykj/?tt=43225&jgpx=5">高龄老域名</a></li><li><a href="/ykj/?tt=43225&ymlx=222&jgpx=1" title="【腾讯QQ绿标认证域名】">QQ绿色认证域名</a></li></ul></li>');
$("#nav").append('<li class="mainlevel " id="mainlevel_018"><a style="color:yellow;" href="#">功能导航</a><ul id="sub_018" ><li><a href="/user_shop_add.htm" target="_blank">域名提交出售</a></li><li><a href="/user_jiexi.htm" target="_blank">域名批量解析</a></li><li><a href="http://www.chaicp.com/" target="_blank">BeiAn接入商查询</a></li><li><a href="http://www.jucha.com/" target="_blank">批量查询工具</a></li><li><a href="http://www.chaicp.com/home_cha/chadns" target="_blank">DNS批量查询</a></li><li><a href="/user_shop_dianpu.htm">域名交易开店</a></li><li><a href="//masuyun.com" target="_blank"><font color="#0000ff">云服务器购买</font></a></li></ul></li>');
$('body').append('<div id="jm-bottombar" style="text-align: center;"><div class="navbar-box">Yumingku.Net 域名交易平台，业务范围涵盖域名注册，域名交易、过期域名抢注，域名买卖等服务，同时为用户提供全面的域名查询服务，域名库带您进入一个不一样的域名世界。</div></div>');

var link = document.createElement("link");
link.rel = "shortcut icon";
link.href = "http://img.chaicp.com/user/43225/20204215131299863.png";
document.head.appendChild(link);
console.log(window.location.pathname);

var url = window.location.href;
if(url.indexOf("/ykj") >= 0 ) {
$('.orders .paicontent ul').detach();
$(".orders .paicontent").append('<ul><li><strong>一口价推荐：</strong></li><li><a href="/mai-yes.htm?23594476" target="_blank" class="paidomain">81ym.cn</a><br></li><li><a href="https://www.bojinmi.com" target="_blank" class="paidomain">bojinmi.com</a><br></li><li><a href="/mai-yes.htm?23995035" target="_blank" class="paidomain">Lwvip.com</a><br></li><li><a href="/mai-yes.htm?23995032" target="_blank" class="paidomain">szmqhx.Com</a><br></li><li><a href="/mai-yes.htm?ym=quduomi.com" target="_blank" class="paidomain">quduomi.com</a><br></li><li style="margin-right:0;"><a href="/mai-yes.htm?24035929" target="_blank" class="paidomain">siyinet.Com</a><br></li></ul>');
}

if($(".loginBtn").length > 0){
$(".qqtale")[0].firstChild.href = "http://wpa.qq.com/msgrd?v=3&uin=992029892&site=qq&menu=yes"
var iframe = setInterval(function(){
if($("iframe").length > 0){
$("iframe").remove();
clearInterval(iframe);
var qqhma = $(".qqhm")[0];
qqhma.firstChild.href = "http://wpa.qq.com/msgrd?v=3&uin=992029892&site=qq&menu=yes"
qqhma.firstChild.innerHTML  = '<span style="display:block">在线客服（9:00-22:30）</span><strong style="display:block;margin-top:10px;line-height:1;color:#ff8300;font-size:16px;font-family:Arial">992029892</strong>';
}
console.log(1);
},1)
}
//var script= document.createElement("script");
//script.type= "text/javascript";
//script.src= "http://img.chaicp.com/kf22.js?isdl=43225&qqhm=992029892&dhhm=400-997-2996&qqlj=http://wpa.qq.com/yes&tpurl=http://img.chaicp.com";
//document.head.appendChild(script);
