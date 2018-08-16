$(function() {
	$.ajax({
		url: './src/resources/data.json',
		type: 'GET',
		context: document.body,
		dataType: 'json',
		success: function(data){
			mapJsonToProduct(data);
			
		}

	});
});
var products;

function mapJsonToProduct(json){
	products = json;
}


