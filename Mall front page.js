$(".box").css({"width":"100%;","height":"1000px","background-color":" red"});
$("*").css({"margin":"0","padding":"0"});
$(".box-top").css({"width":"100%","height":"100px","background-color":"blue","position":"fixed","top":"0","display":"flex"})
$(".box-top").prepend("<div class='top-right'></div>")
/*顶部左边*/
$(".box-top").prepend("<div class='top-left'></div>")
$(".top-left img").css({"width":"110px","height":"60px"})
$(".top-left").css({"width":"40%","height":"100px","background-color":"green","display":"flex",
"align-items":"center","justify-content":"space-around",})
$(".top-left").prepend("<img src='../img/2019-03-25_141714.png'/>")
$(".top-left img").css({"width":"110px","height":"60px"})
/*顶部右上*/
$(".top-right").prepend("<div class='right-top'></div>")
$(".right-top").css({"width":"100%","height":"50%","background-color":"green","display":"block",})
$(".top-right").css({"width":"60%","height":"100px","background-color":"green",
"align-items":"center","justify-content":"flex-end",})
/*顶部右下*/
$(".top-right").prepend("<div class='right-bottom'></div>")
$(".right-bottom").css({"width":"100%","height":"50%","background-color":"green","display":"",})


