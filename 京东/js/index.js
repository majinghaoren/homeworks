var Swiper = new Swiper('.swiper-container',{
	pagination:".swiper-pagination",
	paginationType:"custom",
	autoplay: 1000,
	autoplayDisableOnInteraction : false,
	paginationCustomRender:function(swiper,current,total) {
		var lis = document.querySelectorAll(".point_box li");
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		lis[current - 1].className = "current";
	},

	spaceBetween:0,
	loop : true,
})

// var time;
// function getTimes(){
//     var date = new Date();
//     var endDate = new Date(2017,6,5,21,30,0);
//     var count = endDate.getTime() - date.getTime();
//     var d =parseInt(count/1000/60/60/24);
//     var h =parseInt(count/1000/60/60%24)+d*24;
//     var m =parseInt(count/1000/60%60);
//     var s =parseInt(count/1000%60);

// if (h.toString().length == 1) {
// 	document.getElementsByClassName('date_h')[0].innerHTML = 0;
// 	document.getElementsByClassName('date_h')[1].innerHTML = h;
// }else{
// 	document.getElementsByClassName('date_h')[0].innerHTML = h.toString().slice(0,1);
// 	document.getElementsByClassName('date_h')[1].innerHTML = h.toString().slice(1,2);
// }
// if (m.toString().length == 1) {
// 	document.getElementsByClassName('date_m')[0].innerHTML = 0;
// 	document.getElementsByClassName('date_m')[1].innerHTML = m;
// }else{
// 	document.getElementsByClassName('date_m')[0].innerHTML = m.toString().slice(0,1);
// 	document.getElementsByClassName('date_m')[1].innerHTML = m.toString().slice(1,2);
// }
// if (s.toString().length == 1) {
// 	document.getElementsByClassName('date_s')[0].innerHTML = 0;
// 	document.getElementsByClassName('date_s')[1].innerHTML = s;
// }else{
// 	document.getElementsByClassName('date_s')[0].innerHTML = s.toString().slice(0,1);
// 	document.getElementsByClassName('date_s')[1].innerHTML = s.toString().slice(1,2);
// }
// }
// time = setInterval(getTimes,1000)
var time;
var isShow = true;
function getTimes() {
	var startTime = new Date();
	var endTime = new Date(2017,6,5,21,00,00);
	var t = endTime.getTime()-startTime.getTime();
	var d = Math.floor(t/1000/60/60/24);
	var h =Math.floor(t/1000/60/60%24)+d*24;
    var m =Math.floor(t/1000/60%60);
    var s =Math.floor(t/1000%60);
   
    $($(".date_h")[0]).text(parseInt(h/10));
    $($(".date_h")[1]).text(h%10);

    $($(".date_m")[0]).text(parseInt(m/10));
    $($(".date_m")[1]).text(m%10);
    
    $($(".date_s")[0]).text(parseInt(s/10));
    $($(".date_s")[1]).text(s%10);

    var buling = document.getElementsByClassName('buling');
	
	if (isShow) {
		buling[0].style.visibility = "hidden";
		buling[1].style.visibility = "hidden";
		isShow = false;
	}else{
		buling[0].style.visibility = "visible";
		buling[1].style.visibility = "visible";
		isShow = true;
	}
}; 
time = setInterval(getTimes,1000);
