$(document).ready( function() {

	$(".horizontal").hide();
	$(".vertical").hide();

	$(".info").hide();
	$(".contact-form").hide();

	$(".collection").click( function() {
		$(".intro").hide("drop", {direction: "up"}, "slow");

		//$(".collection").css("margin-top", "210px");

		$("#hr1").show("slide", {direction: "left"}, 1500);
		$("#hr2").show("slide", {direction: "right"}, 1500);
		//$("#vr1").show("slide", {direction: "up"}, 1500);
		$("#vr2").show("slide", {direction: "down"}, 1500);

		$(".info").show();
		$(".contact-form").show("blind", 1000);
	});

	$("#line1").css("visibility", "hidden");
	$("#line2").css("visibility", "hidden");

	$(".navbar a:eq(1)").mouseover( function() {
		$("#line1").css("visibility", "visible");
	});

	$(".navbar a:eq(1)").mouseout( function() {
		$("#line1").css("visibility", "hidden");
	});

	$(".navbar a:eq(2)").mouseover( function() {
		$("#line2").css("visibility", "visible");
	});

	$(".navbar a:eq(2)").mouseout( function() {
		$("#line2").css("visibility", "hidden");
	});

});