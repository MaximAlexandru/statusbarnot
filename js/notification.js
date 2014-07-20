function notification_move(position){
	var not_lat=position.coords.latitude;
	var not_lon=position.coords.longitude;

	 string="notification_lat="+not_lat+"&notification_lon="+not_lon;
	//$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            dataType: "json",
            data:  string,
            success:function(response){
           if(response)
           {
           		res=check_around_distance(not_lat,not_lon,response);
           		if(res)
           		{
           			//navigator.notification.beep(5);

           			
           			
           		}

           }
		  }
		});
	
}
function notification_error(){
	alert("Eroare gps");
}
   
   
   
    function distance(lat1,lon1,lat2,lon2) {
    	
	    var R = 6371; // km (change this constant to get miles)
	    var dLat = (lat2-lat1) * Math.PI / 180;
	    var dLon = (lon2-lon1) * Math.PI / 180;
	    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
	    Math.sin(dLon/2) * Math.sin(dLon/2);
	    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	    var d = R * c;
	    if (d>1) return Math.round(d)+"km";
	    else if (d<=1) return Math.round(d*1000);
	    return d;
    }
    
function check_around_distance(lat,lon,response){
	var a = new Array();
	var node;
		$.each(response,function(key,value)
			      	{
			      		check=distance(lat,lon,value['geo_lat'],value['geo_lon']);
			      		console.log(check);
			      	    if(check<100){
			      	    
			      	    	node="Sunteti in apropierea localului"+value['name']+"<br>";
			      	    	a.push(node);
			      	    }
			    
					});
					
					return a;
}



///notification from travelplanner//
function notification_init(){
	string="message_notification=not&not_client_id="+localStorage['user_id'];
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/notification-ajax.php",
            data:  string,
            success:function(response){
            	$('.notification-content').empty().append(response);
            	$.unblockUI();
          
            
            	
		  }
		});
	
}



