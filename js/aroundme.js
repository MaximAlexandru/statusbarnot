 
 function around_me(lat,lng){
 	alert('asjuns');
	string="around_me=around"+"&"+"around_lat="+lat+"&"+"around_lng="+lng+"&"+"cat_around_id="+categoryID;
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
              dataType: "json",
           	 data:  string,
           	 success:function(response){
           	 	
           	 	initialize_around(lat,lng,response);
            	 $.unblockUI();
            	
		  }
		});
		
	
}
var map_around;
var icon ="http://www.brasovtour.com/img/marker.png";
 function initialize_around(lat,lng,markers) {
 	
 	
 	//de scos 
 	lat=45.6486;
	lng=25.5985;
 	//end de scos
  
			  start = new google.maps.LatLng(lat,lng);
			  var mapOptions_around = {
			    zoom:15,
			    center: start
			  };
			  map_around = new google.maps.Map(document.getElementById('map_canvas_around'), mapOptions_around);
			  marker = new google.maps.Marker({
						            position: start,
						            map: map_around,
						            title:"current position",
						            clickable: true,
						         
						            
						          
						            
						        });
			  
			  	$.each(markers,function(key,value)
			      	{
			      	
			      loc = new google.maps.LatLng(value['geo_lat'],value['geo_lon']);
			   m = new google.maps.Marker({
						            position: loc,
						            map: map_around,
						            title:value['name'],
						            clickable: true,
						         
						            icon:icon,
						          
						            
						        });
				
                   
			      			
			      		
					});
	 }
	
		
		function start_around(){
			    navigator.geolocation.getCurrentPosition(onSuccess_around, onError);
			
		}
	 

	 


