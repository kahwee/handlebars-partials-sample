$(document).ready(function() {
	var template = Handlebars.compile($("#form-template").html());
	Handlebars.registerPartial("basic-select", $("#select-partial").html());
	Handlebars.registerPartial("basic-email", $("#email-partial").html());
	var output = template(fixtures);
	$('#basic').html(output);
});