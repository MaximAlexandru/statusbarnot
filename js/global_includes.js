function menu_init(){
			
        	alert("lang"+LANG);       
			$what="header";
			string="header_request="+$what+"&"+"lang="+LANG;		
		    $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
            	  panel=response;
			      $.mobile.pageContainer.prepend(panel);
				  $("#menu").panel();
				  $('#list-view').listview();
				  $('#menu').trigger('create');
				  	$('.catli').on('click',function()
		{
			$('.subcats').hide();
			$(this).children('.subcats').toggle();
		});
		
	   $('.catli').children('.subcats').find('.goback').on('click',function(){
	   		$(this).parent().hide();
	   		return false;
	    });
             
            	}
		  });	 		
}
function navbar_init(){
	var nav ='  <div class="pull-left">'+
    			     '<a href="#" class="logo" id="btn-menu">'+
    			     'BrasovTour</a>'+
			     '</div>'+
			     ' <div class="pull-right"> '+
    			    '<a href="#travelplanner" class="icon-navbar ghinda"><div class="number-circle ghinda ">7</div><img src="img/ghinda.png" /></a>'+
    			    '<a href="#notification" class="icon-navbar clopot" id="notification-prev"><div class="number-circle clopot">7</div><img src="img/clopot.png" />'+
    			   '</a>'+
    			    '<a href="#" class="icon-navbar"><img src="img/search.png" /></a>'+
    			  '</div>';
	return nav;
	
}
function footer_init(){
	var footer ='<div class="footer-left">'+
	'<a href="#" data-rel="back"><img class="footer-img" src="img/back2.png"/></a>'+
	'<a href="#acasa" ><img class="footer-img"src="img/home2.png"/></a>'+
	'</div>';
	return footer;
	
}

function navbar(d){
	 	var header = $(d).find('#wrap-header');
	 	header.empty();
	 	header.append(navbar_init());
	    header.find('#btn-menu').on('click',function(){
			 $('#menu').panel('open');
 		 });
 		 	
 	    var footer=$(d).find('.wrap-footer'); 
 		footer.empty();
	 	footer.append(footer_init());
}


