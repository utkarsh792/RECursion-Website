$(document).ready(function() {

	$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 30, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false, // Close upon selecting a date,
	min: new Date('01/01/1990'), 
	max: new Date('01/01/2005')
	});

	$("#nickname").keyup(function(){
			nickname = $(this).val();
			if(/^[a-zA-Z0-9_]*$/.test(nickname) == false || nickname.length < 4) {
    			$('#status').hide().html('<p>Nickname should be of length more than 4</p>').fadeIn("slow");
    			$(':input[type="submit"]').prop('disabled', true);
				return;
			}
			
			$.ajax({
				type: "POST",
				url: "/users/checknickname",
				data: {"nickname": nickname},
				success: function(result){
					if(result.status==='GoodToGo'){
						$(':input[type="submit"]').prop('disabled', false);
    					$('#status').hide().html('<p>Available</p>').fadeIn("slow");
					}
					else{
    					$('#status').hide().html('<p>Choose Another</p>').fadeIn("slow");
						$(':input[type="submit"]').prop('disabled', true);
					}
				},
			});
		});
});