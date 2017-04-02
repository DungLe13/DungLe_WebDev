$(document).ready( function() {

	$("#line1").css("visibility", "hidden");
	$("#line3").css("visibility", "hidden");
	$(".description").hide();

	$(".navbar a:eq(1)").mouseover( function() {
		$("#line1").css("visibility", "visible");
	});

	$(".navbar a:eq(1)").mouseout( function() {
		$("#line1").css("visibility", "hidden");
	});

	$(".navbar a:eq(3)").mouseover( function() {
		$("#line3").css("visibility", "visible");
	});

	$(".navbar a:eq(3)").mouseout( function() {
		$("#line3").css("visibility", "hidden");
	});

	$(".collection").mouseover( function() {
		$(".diamond").css("background-color", "rgb(150, 150, 150)");

		$(".description").show("blind", 500);
	});

	$(".collection").mouseout( function() {
		$(".diamond").css("background-color", "rgb(210, 210, 210)");

		$(".description").hide();
	});
});