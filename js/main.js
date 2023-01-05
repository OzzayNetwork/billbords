$(window).on('load', function(){
	
	new WOW().init();
	jQuery('.scrollbar-inner').scrollbar();
	
	//-------------------------------------------------------
	//data representation functions
	//-------------------------------------------------------
	
	//collection trends
		var diff=$('.trend h4').text();
	//		diff=diff.replace(',', '');
		var count = (diff.match(/,/g) || []).length;
	
		var i;
		count=count+1;
		for (i = 0; i<count; i++) {
		 diff=diff.replace(',', '')
		}
		
		diff=parseInt(diff);
	
		if(diff>0){
			$('.trend h4').addClass('text-success');
			$('.trend i').addClass(' zmdi-trending-up');
		}
	
		if(diff<0){
			$('.trend h4').addClass('text-danger');
			$('.trend i').addClass('zmdi-trending-down');
		}
	
		if(diff==0){
			$('.trend h4').addClass('text-info');
			$('.trend i').addClass('zmdi-dot-circle');
		}
	
	
	//	for the months
	
		var mon_diff=$('.month-trend h4').text();
	//		diff=diff.replace(',', '');
		var count = (mon_diff.match(/,/g) || []).length;
	
		var i;
		count=count+1;
		for (i = 0; i<count; i++) {
		mon_diff=mon_diff.replace(',', '')
		}
		
		mon_diff=parseInt(mon_diff);
	
		if(mon_diff>0){
			$('.month-trend h4').addClass('text-success');
			$('.month-trend i').addClass(' zmdi-trending-up');
		}
	
		if(mon_diff<0){
			$('.month-trend h4').addClass('text-danger');
			$('.month-trend i').addClass('zmdi-trending-down');
		}
	
		if(mon_diff==0){
			$('.month-trend h4').addClass('text-info');
			$('.month-trend i').addClass('zmdi-dot-circle');
		}
	
	//changing graph
	$('#select-graph').on('change', function(){
		var selected=$(this).val();
//		alert(selected);
		if(selected=="Detailed"){
			$('#revenuestream-annual').removeClass('d-none');
			$('#substreams').addClass('d-none');
		}
		else{
			$('#revenuestream-annual').addClass('d-none');
			$('#substreams').removeClass('d-none');
			
		}
		
	});
	
	
	
	//	for the months
	
		
	//collection trends
	
	//-------------------------------------------------------
	//data representation functions
	//-------------------------------------------------------
	
	
	//=======================================================
	/*the streams progress bars*/
	//=======================================================
	stream_calc();
	
	function stream_calc(){
		var stream_total;
		
		var today_stream_total=$(".today-collections h4").text();
		var count = (today_stream_total.match(/,/g) || []).length;
	
		var i;
		count=count+1;
		for (i = 0; i<count; i++) {
		 today_stream_total=today_stream_total.replace(',', '')
		}
	
		$('.the-streams .form-group').each(function(index){
			var stream_collection=$(this).children("label").children("span").eq(1).text();
			var stream_name=$(this).children("label").children("span").eq(0).text();
//			alert(stream_name);
			var count = (stream_collection.match(/,/g) || []).length;
//			alert(count);
			var i;
			count=count;
			for (i = 0; i<count; i++) {
			stream_collection=stream_collection.replace(',', '');		
			}
			stream_collection=parseInt(stream_collection);

			stream_total=stream_total+stream_collection;
			
			var percentage=parseInt((stream_collection*100)/today_stream_total);
			//			alert(percentage);
			var progress_value=percentage +"%";
			$(this).attr('data-original-title',progress_value +" (Click to view "+stream_name+" Collection summary)");
			
			var the_bar=$(this).children(".progress").children(".progress-bar");
			the_bar.addClass("added");
			
			the_bar.css("width",progress_value);
			
			//			progress color controller
			
			
			if (percentage>0) {
				

				if (percentage<15) {
					the_bar.addClass('progress-bar-dangger');
				} 			
			} 


			if (percentage>14) {

				if (percentage<40) {
					the_bar.addClass('progress-bar-warning');
				} 			
			} 

			if (percentage>39) {

				if (percentage<75) {
					the_bar.addClass('progress-bar-info');
				} 			
			} 

			if (percentage>74) {

				if (percentage<101) {
					the_bar.addClass('progress-bar-success');
				} 			
			}
			
//			progress color controller
			
				
			

		});
//		alert(today_stream_total);
	}


	//=======================================================
	/*the streams progress bars*/
	//=======================================================
	
	var to_day=moment().format('ddd, MMMM Do YYYY');
	$('.date-range-text').text(to_day);
	$('.today').text(moment().format("MMM Do YY"));
	
	$('.year-abr').text(moment().format('YY'));
	$('.this-year').text(moment().format('YYYY'));
	$('.this-month').text(moment().format('MMMM'));
	$('.month-abr').text(moment().format('MMM'));
//	alert(moment().format('YY'));

$(function() {

	var start = moment();
	var end = moment();

	function cb(start, end) {
		// $('#today').html(start.format('MMMM D, YYYY'));

		if(end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){			
			$('#reportrange span').html(start.format('MMMM D, YYYY'));
			$('#today').html(start.format('MMMM D, YYYY'));

			if(moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){
				// if todays date is today
				$('#date-reset').addClass('d-none');
			}
			else{
				$('#date-reset').removeClass('d-none');	
			}

			

		} else {
			$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			$('#today').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			$('#date-reset').removeClass('d-none');	
		}

	}

	$('#reportrange').daterangepicker({
		startDate: start,
		endDate: end,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}, cb, );

	cb(start, end);

});
	
function reset_date(){
	$('#reportrange span').html(moment().format('MMMM D, YYYY'));
	// $('#today').html(moment().format('MMMM D, YYYY'));
	$('#date-reset').addClass('d-none');	

}

	
	
//	custom day time picker
	$('#daily_date').on('change', function(){
		var dated=$(this).val();
		var dated=(moment(dated).format('LL'));
		$('.the_day').text(dated);
//		alert(moment(dated).format('LL'));
	});
	$('.table-ranger').on('change', function(){
		
	});
//	increase wigdth when value changes
	function Expand(obj){
      if (!obj.savesize) obj.savesize=obj.size;
      obj.size=Math.max(obj.savesize,obj.value.length);
     }
	
	
	
//	date ranger functions
	
	$(".date-range")[0] && $(".date-range").flatpickr({
      enableTime: !1,
	  altInput: true,
	   mode:"range",
	   altFormat: "j-F, Y",
	  dateFormat: "Y-m-d",
	  maxDate: "today",
	  minDate: "06-10-2019",
		
		
      nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
      prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',
		
		//		write a function here when making changes in regards to date ranger
		
		onClose: function(selectedDates, dateStr, instance) {
			var therange=$('#date_ranger').val();
			
			//selected date range
			var dates=therange.split(' to ');
			
			//date in the format 2020-mm-dd
			var date1=dates[0];
			var date2=dates[1];
			
			// date in the format March 19, 2020
			var date1read=moment(date1).format('ddd, MMMM Do YYYY');
			var date2read=moment(date2).format('ddd, MMMM Do YYYY');
			
			//======= write custom functions below once a change has been made to the date range=======
			
			//function to update text output with new date range
			if(date1read==date2read){
				$('.date-range-text').text(date1read);	
			}
			else{
				$('.date-range-text').text(date1read+' To '+date2read);	
			}
					
			
       
    }
    });
//	full screen table

	
	 $("body").on("click", "[data-table-action]", function (a) {
      a.preventDefault();
      var b = $(this).data("table-action");
      if ("print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
        var c = $(this).parent().parent().parent().parent().parent().parent().parent()
        c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
      }
    });
//full screen controller
	
	
//	datatable navigation styling
	$('.nav-link').on('click', function(){
		event.preventDefault();
		$(this).addClass('active').parent().siblings().children('.nav-link').removeClass('active');
	});

	// $('td').eq(0).on('click', function(){
	// 	$('.modal-body-header').children('span').html("nothing");

	// 	var html_data=$('this').siblings().index(6).text();
	// 	alert(html_data);
	// });
	
	

	$('.show-all').on('click', function(){
			$('.table-all').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-compliant').on('click', function(){
			$('.table-compliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-uncompliant').on('click', function(){
			$('.table-uncompliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-penalty').on('click', function(){
			$('.table-penalty').removeClass('d-none').siblings().addClass('d-none');
		});
	
	
	
});

//department and agencies
$( "input[name='memberType']" ).on('change', function(){
	var userType=$(this).val();
	

	if(userType=="department"){
		$('.departmentInputs').removeClass('d-none').siblings('.agencyInputs').addClass('d-none');
	}
	if(userType=="agent"){
		$('.agencyInputs').removeClass('d-none').siblings('.departmentInputs').addClass('d-none');
	}
})



//owl initializer
$(document).ready(function(){

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1440:{
				items:4
			}
		}
	});

  });

  function show_receipt_details(){
	  document.getElementById('search_receipt_results').classList.remove('d-none');
	  document.getElementById('before_search_receipt_img').classList.add('d-none');
  }

  //Add Billable Script
  function costing(){
	var customCheck3 = document.getElementById("customCheck3");
		if(!customCheck3.checked == true){  
			document.getElementById('flexible-cost-radio').classList.remove('d-none');
			document.getElementById('fixed-cost-for-each').classList.add('d-none');

		}else{
			document.getElementById('flexible-cost-radio').classList.add('d-none');
			document.getElementById('fixed-cost-for-each').classList.remove('d-none');
		}
  }

  function fixed_cost(){
	  document.getElementById("fixed-cost").classList.remove('d-none');
	  document.getElementById("flexible-cost").classList.add('d-none');
  }

  function flexible_cost(){
	document.getElementById("fixed-cost").classList.add('d-none');
	document.getElementById("flexible-cost").classList.remove('d-none');
	
}

function phonenum_input(){
	document.getElementById("phonenumber-input").classList.remove('d-none');
	document.getElementById("phonenumber-input-partly").classList.remove('d-none');
}

function phonenum_input_remove(){
	document.getElementById("phonenumber-input").classList.add('d-none');
	document.getElementById("phonenumber-input-partly").classList.add('d-none');

}


    //================================================
  //map scripts
  //================================================
  $('.map-key-card').on('click', function(){
	$('.map-card').removeClass('d-none');
	});

	$('.close-map-key').on('click', function(){
  $('.map-card').addClass('d-none');
  });

//   traversing through add faces next
$('#multi-plate .next-side').on('click',function(error){

	//stores the index of the last child
	var NumOfChildren=$('.faces-container.scrollbar-inner .plate-slides').last().index();
	
	//goes through every face on the multiple plate
	$('.faces-container .plate-slides').each(function(index) {
		var theIndex=$(this).index();

		var hasDnone=$(this).hasClass( "d-none" ).toString();

		// alert(theIndex);
		// alert(hasDnone);

		if(hasDnone=="false"){
			if(theIndex==NumOfChildren){
			
				$(this).addClass('d-none');				
				$('.faces-container.scrollbar-inner .plate-slides').eq(0).removeClass('d-none');
				$('.faces-counter-container .thePosition').text('1');
			}
			else{
				$(this).addClass('d-none');
				$(this).next().removeClass('d-none');
				$('.faces-counter-container .thePosition').text(theIndex+2);
			}
			
			return false;
		}
		
	  });

});

//using prev
$('#multi-plate .prev-side').on('click', function(error){
	var NumOfChildren=$('.faces-container.scrollbar-inner .plate-slides').last().index();
	
	$('.faces-container .plate-slides').each(function(index){

		var theIndex=$(this).index();

		var hasDnone=$(this).hasClass( "d-none" ).toString();

		
		var hasDnone=$(this).hasClass( "d-none" ).toString();

		if(hasDnone=="false"){
			if(theIndex==0){
			
				$(this).addClass('d-none');				
				$('.faces-container.scrollbar-inner .plate-slides').eq(NumOfChildren).removeClass('d-none');
				$('.faces-counter-container .thePosition').text(NumOfChildren+1);
			}
			else{
				$(this).addClass('d-none');
				$(this).prev().removeClass('d-none');
				$('.faces-counter-container .thePosition').text(theIndex);
			}
			
			return false;
		}
	});

});


//=============================================================
// new advert functions
//=============================================================

$('input[name="client-type"]').on('change', function(){
	var theType=$(this).val();
	// alert(theType);
	if(theType=="individual"){
		$('.individual-application').removeClass('d-none').siblings().addClass('d-none')
	}

	else if(theType=="company"){
		$('.company-application').removeClass('d-none').siblings().addClass('d-none')
	}
});

$('#advert-type').on('change', function(){
	var theAdType=$(this).val();
	// alert(theAdType);

	//applicable for advert types with fixed locations such as signages
	if(theAdType=="fixedLocation"){
		$('.map-location').removeClass('d-none');
		$('.subcountyWard').addClass('d-none');

	}

	//applicable for plates
	else if(theAdType=="plate"){
		$('.map-location').addClass('d-none');
		$('.subcountyWard').addClass('d-none');

	}

	//applicable for things such as flyers
	else if(theAdType=="area"){
		$('.map-location').addClass('d-none');
		$('.subcountyWard').removeClass('d-none');

	}
});

function file_changed(theId){
	// alert(theId);
      
	var selectedFile = document.getElementById(theId).files[0];
	var img = document.getElementById('selected-image');
	
	$('.upload-img-cont h6').addClass('d-none');
	
   

	$('.activation-form-container .upload-img-cont').addClass('no-img-bg');
	$('.no-image-selected').addClass('d-none');
   
	// var img = document.getElementsByClassName(theId);
  
	var reader = new FileReader();
	reader.onload = function(){
	   img.src = this.result;
	  
	}

  
	reader.readAsDataURL(selectedFile);
	
   }

   $('#tehArtwork').on('change', function(){
	var theId=$(this).attr("id");
	var theInput;
	var lastCharacter=theId[theId.length-1];
	theInput="input"+lastCharacter;

	file_changed(theId);
});

$( "input[name='plate-owner']" ).on('change', function(){
	
	var theOwner=$(this).val();
	
	if(theOwner=="yes"){
		$('.plate-ownership-cont').addClass('d-none');
		$('.owned-by-county').removeClass('d-none');
	}
	else{
		$('.plate-ownership-cont').removeClass('d-none');
		$('.owned-by-county').addClass('d-none');
	}

});

$('#locationCategory').on('change', function(){
	var theOption=$(this).val();
	alert(theOption);
	if(theOption=="plate"){
		$('.new-plate').removeClass('d-none');
	}
	else if(theOption!=="plate"){
		$('.new-plate').addClass('d-none');
	}
	

});

$('.search-add').on('click', function(e){
	e.preventDefault();
	$('.ad-results').removeClass('d-none');
});

$('.mobile-payment-method').on('click', function(){
	$('.mobile-pay').removeClass('d-none');
});



