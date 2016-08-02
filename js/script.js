$(document).ready(function(){
	$(".craftDrop").on("click", function(){
	
		$(this).next().slideToggle();
	})
	$(".sectionBar").on("click",function(){
		$(this).next(".drop").slideToggle();
		alert(1);
	}) 
	var c4 = {explosive:"25", cloth: "5"};
	   
/* 	$(".submit").on("click",function(){
		var calc=$(".resource").val();
		var number=$(".number").val();
		console.log(number);
		switch(calc){
			case "C4":
				$(".output").html("<p>explosives ="+(25*number)+"</p>"\
					+" ");
				break;
		}
	}) */
}) 