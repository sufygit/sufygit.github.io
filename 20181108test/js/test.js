var img = [];
$(function(){
	//添加banner图片
	addBanner(5);
	function addBanner(len){
		$('.banner').html('');
		for(var i = 0;i<len;i++){
			if(i == 0){
				img += '<img src="images/banner'+ i +'.jpg" class="bannerChild">';
			}else{
				img += '<img src="images/banner'+ i +'.jpg" class="bannerChild" style="display:none;">';
			}
			 	
		}
		$('.banner').append(img);
	}
	//tab导航栏
	$('.nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	//实现轮播
var images = document.getElementsByClassName('bannerChild');
        var pos = 0;
        var len = images.length;
         
        setInterval(function(){
            images[pos].style.display = 'none';
            pos = ++pos == len ? 0 : pos;
            images[pos].style.display = 'inline';
         
        },2000);
   
   //弹窗
   $('.es6').click(function(){
   	$('.maskLayer').show();
   });
   
   //关闭弹窗
   $('.close').click(function(){
   	$('.maskLayer').hide();
   });
      
//var funcs = []
//  for (var i = 0; i < 10; i++) {
//      funcs.push(
//        (function(value) {
//          return function() {
//              console.log(value)
//          }
//      })(i)
//    )
//  }
//  funcs.forEach(function(func) {
//      func()
//  })

// 再来看看es6怎么处理的
    const funcs = []
    for (let i = 0; i < 10; i++) {
        funcs.push(function() {
            console.log(i)
        })
    }
    funcs.forEach(func => func())



//自执行函数

var i = function () { return 10; } ();  
true && function () { console.log(2) } ();  
0, function () { console.log(3) } (); 
 
  

})
