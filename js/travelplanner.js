function travelplanner_calendar(){
	string="travelplanner_calendar=travel&travel_client_id="+localStorage['user_id'];
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/travelplanner-ajax.php",
            data:  string,
            success:function(response){
            	$('#calendar_holder').empty().append(response);
            	$.unblockUI();
          
            
            	
		  }
		});
}
function travelplanner_stuff(){
	string="travelplanner_stuff=travel&travel_client_id="+localStorage['user_id'];
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/travelplanner-ajax.php",
            data:  string,
            success:function(response){
            	$('.travel-do').empty().append(response).trigger('create');
            	$.unblockUI();
            	$('#calendar-holder').children(".day_item.today").attr('id','today-stuff');
          
            
            	
		  }
		});
}
function get_day_stuff(){
	var reservationType="";
	day="abc";
	var dataString = "&what=get_day_stuff&day="+day+"&reservation_type="+reservationType+"&stuff_client_id="+localStorage['user_id']+" ";

		

		$.ajax({

			type:'POST',

			url: siteURL+"libs/ajax/ajax_profile.php",

			data: dataString,

			}).done(function(response){

				if(response && response != "")

				{

					$("#stuff_list").empty().html(response);

				}

				$("#ajaxLoader").hide();

			});
}
