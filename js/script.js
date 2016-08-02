$(document).ready(function(){
	$(".craftDrop").on("click", function(){
	
		$(this).next().slideToggle();
	})
	$(".sectionBar").on("click",function(){
		$(this).next(".drop").slideToggle();
		
	}) 
	
	$(".picWrap img").on("click",function(){
		alert(1);
		var img=$(this).attr("src");
		console.log(img);
		$(".largePic").removeClass(".hidden");
		$(".largePic").html('<img src="'+img+'">');
	})
	$(".largePic").on("click", function(){
		$(this).empty();
	})
	var c4 = {explosive:"25", cloth: "5"};
	   
/* 	$(".submit").on("click",function(){
		var calcsafasdfa=$(".resource").val();
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