$(document).ready(() => {
	$("h1").css("color","white");
	var ele = $(".btn").length;
});

$(".btn").click(function (event) { 
	console.log(event)
	var e = this.innerHTML;
	alert(e);
	$("h1").css("color","black");
 })
