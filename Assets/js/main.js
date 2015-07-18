$(function(){

	$('.navbar-toggle').click(function(){
		
		if (!$('#top-nav').is(':animated')) {
		
			if ($(this).hasClass('collapsed')) {
				$('#top-nav').slideDown(300);
				$('.navbar-toggle').removeClass('collapsed');
			} else {
				$('#top-nav').slideUp(100,function(){
					$('.navbar-toggle').addClass('collapsed');
				});
			}
		}
		
	});
});