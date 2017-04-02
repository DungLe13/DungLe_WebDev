$(document).ready( function() {

	$("#line2").css("visibility", "hidden");
	$("#line3").css("visibility", "hidden");

	$(".navbar a:eq(2)").mouseover( function() {
		$("#line2").css("visibility", "visible");
	});

	$(".navbar a:eq(2)").mouseout( function() {
		$("#line2").css("visibility", "hidden");
	});

	$(".navbar a:eq(3)").mouseover( function() {
		$("#line3").css("visibility", "visible");
	});

	$(".navbar a:eq(3)").mouseout( function() {
		$("#line3").css("visibility", "hidden");
	});
});