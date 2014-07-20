var siteURL = "http://www.brasovtour.com/";
$(document).ready( function(){
	
	var now = new Date();
	var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var timestamp = startOfDay / 1000;
	
	var reservationType = "";
	
	$(document).on("click", ".paySeatReservation", function(){
		var cartID = $(this).attr("cart_id");
		var dataString = "&what=get_payment_form&&item_type=seat_reservation&cart_id="+cartID;
		$("#ajaxLoader").show();
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_payments.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "")
				{
					bootbox.dialog({
						message: response,
						buttons: {
						 	success: {
						 		"label" : "Cancel",
						    	"className" : "btn-default",
						    	"callback": function() {
						    		bootbox.hideAll();
					    		}
					    	}
					   }
					});
				}
				$("#ajaxLoader").hide();
			});
	});
	
	$(document).on("click", ".payVoucher", function(){
		var cartID = $(this).attr("cart_id");
		var dataString = "&what=get_payment_form&&item_type=voucher&cart_id="+cartID;
		$("#ajaxLoader").show();
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_payments.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "")
				{
					bootbox.dialog({
						message: response,
						buttons: {
						 	success: {
						 		"label" : "Cancel",
						    	"className" : "btn-default",
						    	"callback": function() {
						    		bootbox.hideAll();
					    		}
					    	}
					   }
					});
				}
				$("#ajaxLoader").hide();
			});
	});
	
	$(document).on("click", ".payHotelReservation", function(){
		var cartID = $(this).attr("cart_id");
		var dataString = "&what=get_payment_form&&item_type=hotel_reservation&cart_id="+cartID;
		$("#ajaxLoader").show();
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_payments.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "")
				{
					bootbox.dialog({
						message: response,
						buttons: {
						 	success: {
						 		"label" : "Cancel",
						    	"className" : "btn-default",
						    	"callback": function() {
						    		bootbox.hideAll();
					    		}
					    	}
					   }
					});
				}
				$("#ajaxLoader").hide();
			});
	});
	
	$(document).on("click", ".sendFoodOrder", function(){
		var cartID = $(this).attr("cart_id");
		var dataString = "&what=get_payment_form&&item_type=catering&cart_id="+cartID;
		$("#ajaxLoader").show();
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_payments.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "")
				{
					bootbox.dialog({
						message: response,
						buttons: {
						 	success: {
						 		"label" : "Cancel",
						    	"className" : "btn-default",
						    	"callback": function() {
						    		bootbox.hideAll();
					    		}
					    	}
					   }
					});
				}
				$("#ajaxLoader").hide();
			});
	});
	
	$(document).on("change", "#delivery_address", function(){
		var useVal = $(this).val();
		var cartID = $("#cart_id").val();
		
		var dataString = "&what=update_delivery_address&item_type=catering&cart_id="+cartID+"&address_id="+useVal;
		
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_payments.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "ok")
				{
					bootbox.alert(response);
				}
				$("#ajaxLoader").hide();
			});
		
	});
	
	$(document).on("change", ".paymentMethod", function(){
		var useVal = $(this).val();
		$(".payForm").addClass("hidden");
		$(".payForm.method"+useVal).removeClass("hidden");
	});
	
	
	$(".newsletterCategories input[type=checkbox]").on("change", function(){
		if(!$(this).prop("checked"))
		{
			if($(this).parents(".checkbox").siblings("ul.collapse").hasClass("in"))
			{
				$(this).parents(".checkbox").siblings("ul.collapse").collapse("hide");
			}
			
			$(this).parents("li:first").find("input[type=checkbox]").each( function(){
				$(this).prop("checked", false).attr("checked", false);
			});
			
		}
		else
		{
			if(!$(this).parents(".checkbox").siblings("ul.collapse").hasClass("in"))
			{
				$(this).parents(".checkbox").siblings("ul.collapse").collapse("show");
			}
			$(this).parents("li:first").find("input[type=checkbox]").each( function(){
				$(this).prop("checked", true).attr("checked", true);
			});
		}
		//alert($(this).prop("checked"));
	});

	
	$("#calendar_holder").on("click", ".day_item", function(){
		var day =  $(this).attr("day");
		var title = $(this).attr("title");

		$(".day_item.selected").removeClass("selected");
		$(this).addClass("selected");

		$("#stuff_list_title").html(title);
		
		$("#ajaxLoader").show();
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
		
		return false;
	});
	
	$("#calendar_holder .day_item.today").trigger("click");
	
	
	$("#getPendingStuff").on("click", function(){
		
		$("#ajaxLoader").show();
		
		var dataString = "&what=get_day_stuff&day=unfinished&reservation_type="+reservationType;
		
		var title = $(this).attr("title");
		$("#stuff_list_title").html(title);
		
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_profile.php",
			data: dataString,
			}).done(function(response){
				if(response && response != "")
				{
					$("#stuff_list").html(response);
				}
				$("#ajaxLoader").hide();
		});
		
		return false;
	});
	
	$(document).on("click", "a.chestii-anuleaza", function(){
		var cart_id = $(this).attr("cart_id");
		var item_type = $(this).attr("item_type");

		var dataString = "&what=remove_cart&cart_id="+cart_id+"&item_type="+item_type;
		$("#ajaxLoader").show();
		
		var parentLi = $(this).parents("li.col-md-12");
		
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_functions.php",
			data: dataString,
			}).done(function(response){
				if(response == "success")
				{
					parentLi.css("background", "yellow");
					parentLi.fadeOut(function(){
						parentLi.remove();
					});
				}
				else
				{
					bootbox.alert(response);
					//console.warn("Output to body ", data);
					//$("body").html(data);
				}
				$("#ajaxLoader").hide();
		});
		
		return false;
	});
	
	$("#addressForm").on("submit", function(){
		var dataString = $("#addressForm").serialize();
		dataString += "&what=add_delivery_address";
		
		$("#ajaxLoader").show();
	
		$.ajax({
			type:'POST',
			url: siteURL+"libs/ajax/ajax_profile.php",
			data: dataString,
			}).done(function(responseJSON){
				if(responseJSON != "")
				{
					var response = JSON.parse(responseJSON);
					
					
					if(response.address)
					{
						if($("#addressTable tr[address_id="+response.address.id+"]").length == 0)
						{
							var row = "<tr address_id='"+response.address.id+"'>"
							row += "<td>"+response.address.address+"<td>";
							row += "<button type='button' class='btn btn-info white btn-sm' onclick='editDeliveryAddress("+response.address.id+", this);'><span class='glyphicon glyphicon-pencil'></span></button>";
							row += "<button type='button' class='btn btn-danger white btn-sm' onclick='deleteDeliveryAddress("+response.address.id+", this);'><span class='glyphicon glyphicon-remove'></span></button>";
							row+= "</tr>";
							$("#addressTable tbody").append(row);
						}
						else
						{
							$("#addressTable tr[address_id="+response.address.id+"] td:first").html(response.address.address);
						}
						
						$("#addressModal").modal("hide");
					}
					else if(response.error)
					{
						bootbox.alert(response.error);
					}
				}
				$("#ajaxLoader").hide();
		});
		
		return false;
	});
	
});


function editDeliveryAddress(addressID, elem)
{
	var dataString = "&what=get_delivery_address&address_id="+addressID;
	$("#ajaxLoader").show();
	
	$.ajax({
		type:'POST',
		url: siteURL+"libs/ajax/ajax_profile.php",
		data: dataString,
		}).done(function(responseJSON){
			if(responseJSON != "")
			{
				var response = JSON.parse(responseJSON);
				
				if(response.error)
				{
					bootbox.alert(response.error);
				}
				else if(response.address)
				{
					$("#delivery_address").val(response.address);
					$("#delivery_address_id").val(addressID);
					$("#addressModal").modal("show");
				}
			}
			$("#ajaxLoader").hide();
	});
}

function newAddress()
{
	$("#delivery_address").val("");
	$("#delivery_address_id").val(0);
	$("#addressModal").modal("show");
}

function deleteDeliveryAddress(addressID, elem)
{
	var dataString = "&what=delete_delivery_address&address_id="+addressID;
	$("#ajaxLoader").show();
	
	var row = $(elem).parents("tr");
	
	$.ajax({
		type:'POST',
		url: siteURL+"libs/ajax/ajax_profile.php",
		data: dataString,
		}).done(function(responseJSON){
			if(responseJSON != "")
			{
				var response = JSON.parse(responseJSON);
				
				if(response.error)
				{
					bootbox.alert(response.error);
				}
				else if(response.message == "ok")
				{
					row.css("background", "yellow");
					row.fadeOut(function(){
						row.remove();
					});
				}
			}
			$("#ajaxLoader").hide();
	});
}
