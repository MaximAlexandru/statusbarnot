var contact;
var location_id=0;
var user_id=0;
var LANG='ro';
var categoryID=0;
var supercategoryID=0;
function nots(){
	alert('intrat');
	window.plugins.statusBarNotification.notify("Sample Notification", 'message.value');
	alert('iese');
}
function comanda_mancare(){
	string="comanda_mancare=categ&location_command="+location_id;
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
            	console.log(response);
            	$('.comanda_mancare').empty().append(response);
          
            
            	
		  }
		});
	
	
}
function show_notifications(){
	activePage = $.mobile.activePage;
	$(activePage).find('#notification-prev').on('click',function(){
	
	$(this).find('.dropdown-clopot').toggle();
	
});
}

function category_icon(){
	string="category_icon=categ";
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
            	$('.category-icon').empty().append(response);
          
            
            	
		  }
		});
}
function open_now(){
	string="open_now=open";
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
          
            
            	
		  }
		});
	
}
function events(){
	string="events_req=events";
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
           $('.events').empty().append(response);
           $.unblockUI();
            
            	
		  }
		});
	
}
function recomand(){
	string="recomand=recomands";
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
           $('.recomand').empty().append(response);
           $.unblockUI();
            
            	
		  }
		});
}

function check_qr(text){
	location_id = localStorage['user_id'];
	
	string="check_qr="+text+"&"+"node_id="+location_id;
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
   		   
            data:  string,
            success:function(response){
           alert(response);
           $.unblockUI();
            
            	
		  }
		});
	
	
}
function check_lang(){
	alert('check');
	string='what_lang=lang';
	//$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
   	
            data:  string,
            success:function(response){
            	alert('lang:'+response);
           		
           	
		  }
		});
	
	
}
function change_lang(text){
	
	LANG = text;
	//$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        // $.ajax({
            // type: 'POST',
            // url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            // data:  string,
            // success:function(response){
            	// alert('lang:'+response);
           		window.location="#login";
//            	
		  // }
		// });
	  panel = menu_init();
	  $.mobile.pageContainer.prepend(panel);
	  $("#menu").panel();
	  $('#list-view').listview();
	  $('#menu').trigger('create');
	
}
function sendreservation(){	
	string=$('#reservationForm').serialize();
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
           		$.unblockUI();
		  }
		});
}
function populate_loc(){
	
	$('.location-contact').empty();
	$('.location-contact').html(contact);
	$('.location-contact').trigger('create');
	$('#websitepopup').popup();
	
}
function rezervare(){ 

	user= localStorage['user_id'];
	locationid = location_id;
	
	string="what=get_reservation_data"+"&"+"rez_user_id="+user+"&"+"node_id="+locationid+"&"
	+"mobile_app=true";
	
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/libs/ajax/ajax_functions.php",
   	
            data:  string,
            success:function(response){
   	$('#location').find('#rezervare_response_append').empty().append(response);
       }
		});
	
	
	
}
function set_categorie_id(id,id2)
{
	supercategoryID=id;
	categoryID=id2;
	populate_categorie(false,false);
	
}
function populate_categorie(around,open){//id-supercategoria,id2-categoria
	lat_around=0;
	long_around=0;
	if(around==true)
	{
		   navigator.geolocation.getCurrentPosition(onSuccess_around, onError);
		    lat_around=AROUND_LATITUDE;
		    long_around=AROUND_LONG;
	}
	
	
	
	
	string="category_id="+categoryID+"&supercategory_id="+supercategoryID+"&lang="+LANG+"&around="+around+"&open="+open+"&around_lat="+lat_around+"&around_lon="+long_around;
	
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
            	console.log(response);
               	$('.category-name').empty().append(response[0]);
               	$('.category-locations').empty().append(response[1]);
               	
            	
            	$.unblockUI();
            
            	
		  }
		});
}
function show_cut_text(){
	
	$('.cut-text').show();
	$('.more_text').hide();
}
// function set_footer_loc(){
	// alert('footer');
	// // $('#location').find('#footer-wrapper').empty().append(data).trigger('create');
          // // $('#rezervarepopup').popup();
// 	
// }
// function getfooterlocation(){
// 	
	// var foo="";
	// string="footer_request=footer";
	// //$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        // $.ajax({
            // type: 'POST',
            // url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            // data:  string,
            // success:function(response){
            	 // set_footer_loc();  	
		  // }
		// });
	 // // alert('foo return :'+foo);
	 // // return foo;
// 
// }
function user_qr_code(){
	string="qr_code_id="+localStorage['user_id'];
	//$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
                $('.qr_code_img').empty().append(response).trigger('create');           	
            	//$.unblockUI();  	
		  }
		});
	
}


function validate_login(){
		 var username = $('#username').val();
		 var password = $('#password2').val();
		
		string=$("#form-login").serialize();
		$.blockUI({ message: '<img src="http://www.brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
	            type: 'POST',
	            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
	   		    dataType: "json",
	            data:  string,
	            success:function(response){
	            	console.log(response);
	            	if(response['succes'])
	            	{
	            		
			              localStorage['name']=username;
						 
						  localStorage['user_id']=response['succes'];
						  localStorage['user_type']=response['type'];
						
						  if(response['type']=='user')
	            		{
						  window.location="#acasa";
						 }
						 else if(response['type']=='location-user')
						 {
						 	window.location="index-locatie.html";
						 }
              
            		 }
            		 else
             		{
             			alert('Eroare:'+response['error']);
             		}
             $.unblockUI();
	            	}
			});
		}

function setLocationId(id){
	location_id=id;
	$('#location').find('#node_id').val(id);
	
}
	function login_history(){
		
		// localStorage.removeItem('name');
	    // localStorage.removeItem('password');
	    // localStorage.removeItem('user_id');
	    // localStorage.removeItem('user_type');
	    // alert('user:'+localStorage.removeItem('name'));
	  nots();
	
		if(localStorage['name'] && localStorage['user_id'] && localStorage['user_type'])
		{
			if(localStorage['user_type']=='user')
			{
				window.location="#acasa";
				
			}
			else
			{
				window.location='index-locatie.html';
			}
		}
		else
		{
			
	
			window.location="#login";
 		}
	}
	
	
	function populate_location(id){
		
		
		$('.location-photos').empty();
		$('.location-contact').empty();
		$('.location-name').empty();
		$('.location-facilities').empty();
		$('.location-description').empty();
		$('.location-program').empty();

		          
		string="location_id="+id+"&"+"lang="+LANG;
		$.blockUI({ message: '<img src="http://www.brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
		            type: 'POST',
		            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
		   		    dataType: "json",
		            data:  string,
		            success:function(response)
		            {
		            	dlat=response['lat'];
		            	dlng=response['lng'];
		            	$('.location-name').empty().append(response['name']);
		            	$('.location-facilities').empty().append(response['facilities']);
		            	$('.location-description').empty().append(response['description']);
			            	if(response['program-table'])
			            	{
			            								$('.location-program').empty().append(response['program-table']);
			                }
		                $('.location-photos').empty().append(response['photos']);
		                $('.location-photos').append(response['photos_pop']);
		                $('.location-photos').trigger('create');
		                $('#footer-location-wrapper').empty().append(response['footer']);
		                // $('.location-contact').empty().append(response['contact']);
		               
		            
		              contact=response['contact'];
		              populate_loc();
		                $.unblockUI();
	                  
		        	  }
		});
		}
