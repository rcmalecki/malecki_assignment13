$(document).ready(function() {
	$(".capital").hide();
	
	$("#state1").mouseover(function () {
		$("#div1").show();
		$("#state1").css("background-color", "#ffffcc");
	});
	
	$("#state1").mouseout(function () {
		$("#state1").css("background-color", "#F0FFFF");
		$("#div1").fadeOut(2000);
	});
	
	$("#state2").mouseover(function () {
		$("#div2").show();
		$("#state2").css("background-color", "#ffffcc");
	});
	
	$("#state2").mouseout(function () {
		$("#state2").css("background-color", "#F0FFFF");
		$("#div2").fadeOut(2000);
	});
	
	$("#state3").mouseover(function () {
		$("#div3").show();
		$("#state3").css("background-color", "#ffffcc");
	});
	
	$("#state3").mouseout(function () {
		$("#state3").css("background-color", "#F0FFFF");
		$("#div3").fadeOut(2000);
	});
	
	$("#state4").mouseover(function () {
		$("#div4").show();
		$("#state4").css("background-color", "#ffffcc");
	});
	
	$("#state4").mouseout(function () {
		$("#state4").css("background-color", "#F0FFFF");
		$("#div4").fadeOut(2000);
	});
	
	$("#state5").mouseover(function () {
		$("#div5").show();
		$("#state5").css("background-color", "#ffffcc");
	});
	
	$("#state5").mouseout(function () {
		$("#state5").css("background-color", "#F0FFFF");
		$("#div5").fadeOut(2000);
	});
	
	$("#state6").mouseover(function () {
		$("#div6").show();
		$("#state6").css("background-color", "#ffffcc");
	});
	
	$("#state6").mouseout(function () {
		$("#state6").css("background-color", "#F0FFFF");
		$("#div6").fadeOut(2000);
	});
});





/*<script type="text/javascript">
			function show(id) {
			document.getElementById(id).style.visibility = "visible";
			}
			function hide(id) {
			document.getElementById(id).style.visibility = "hidden";
			}
			
			$(":button").hover(
				  function(){
					$(this).animate({marginLeft:'9px'},'slow')
				  },
				  function() {
					$(this).animate({marginLeft:'0px'},'slow')
				  });
		</script> -->*/