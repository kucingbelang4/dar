$(document).ready(function(){

	//var home = 'pages/home.html';
		//portofolio = 'pages/portofolio.html';
	
	$('#ajaxReplace .elem').load('pages/home.html').fadeIn(1000);

	$("#list a.ajax").on("click", function(){	
		
		var value = $(this).data('value');
		
		console.log(value);
		
		getData(value);

	});
	
	function getData(value){
	
		$('#ajaxReplace .elem').fadeOut(200).hide();
		
		$.ajax({
		
			dataType: 'html',
			url: 'pages/'+value+'.html',
			
		}).done(function(){
		
			console.log(value);
		
			$('#ajaxReplace .elem').load('pages/'+value+'.html').fadeIn(1000);
		
		}).fail(function(){
		
			$('#ajaxReplace .elem').load('pages/404.html').fadeIn(1000);
		
		});
	
	}

	console.log('masuk gan');

});