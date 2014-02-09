$(document).ready(function() {
	var output = window.hbs.form(fixtures);
	$('#precompiled').html(output);
});