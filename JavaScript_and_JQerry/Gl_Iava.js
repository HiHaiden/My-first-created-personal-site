$(document).ready(function() {
	$("#vnz_js").on("click", function(e) {
		e.preventDefault();
		var top = $("#syda_js").offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 1500);
	});
});
$(document).ready(function() {
	$("#navex").on("click", function(el) {
		el.preventDefault();
		var bottom = $("#vex").offset().bottom;
		$("html, body").animate({
			scrollTop: 0
		}, 1500);
	});
});
$(document).ready(function() {
	$(".bkv1").on("click", function(el) {
		el.preventDefault();
		var bottom = $("#vex").offset().bottom;
		$("html, body").animate({
			scrollTop: 0
		}, 1);
	});
});
$(document).ready(function() {
	$(".bkv2").on("click", function(el) {
		el.preventDefault();
		var bottom = $("#vex").offset().bottom;
		$("html, body").animate({
			scrollTop: 0
		}, 1);
	});
});
$(document).ready(function() {
	$(".bkv3").on("click", function(el) {
		el.preventDefault();
		var bottom = $("#vex").offset().bottom;
		$("html, body").animate({
			scrollTop: 0
		}, 1);
	});
});
$(document).ready(function() {
	$(".bkv4").on("click", function(el) {
		el.preventDefault();
		var bottom = $("#vex").offset().bottom;
		$("html, body").animate({
			scrollTop: 0
		}, 1);
	});
});