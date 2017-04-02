$(document).ready( function() {

	$(".parker-cheeto").css("display", "none");
	$(".apartment").css("display", "none");

	$("#chap1").click( function() {
		$(".webcam-tears").css("display", "block");
		$(".parker-cheeto").css("display", "none");
		$(".apartment").css("display", "none");
	});

	$("#chap2").click( function() {
		$(".webcam-tears").css("display", "none");
		$(".parker-cheeto").css("display", "block");
		$(".apartment").css("display", "none");
	});

	$("#chap3").click( function() {
		$(".webcam-tears").css("display", "none");
		$(".parker-cheeto").css("display", "none");
		$(".apartment").css("display", "block");
	});
});