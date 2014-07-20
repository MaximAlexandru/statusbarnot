function start_open_now(){
	  navigator.geolocation.getCurrentPosition(onSuccess_open, onError);
}


function onSucces_open(position){
	 open_now(position.coords.latitude,position.coords.longitude);
}
function open_now(lat,lon){
	string="open_now=open&lat_open="+lat+"&lon_open="+lon+"cat_open="+categoryID;
	//$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
          
            
            	
		  }
		});
	
}

