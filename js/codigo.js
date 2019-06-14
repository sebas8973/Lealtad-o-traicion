
$(document).ready(function(){
	var pos1 = $("#seccion1 ").offset().top;



	$("#logo").animate({
            "opacity": "1"
	  	},3000)
	});

$("#texto").animate({
	"opacity": "1",
	"margin-left": "0"
},2500)


$("#btUp").click(function(){
	$("html").animate({
	"scroll-top" : "0px"
	})


	   
	});









	  
 