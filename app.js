$(document).ready(function() {
	//add new item

	$("#js-shopping-list-form").submit(function( event ) {
 		event.preventDefault();
 		 $( ".shopping-list" ).append(
  			'<li>' +
  				'<span class="shopping-item">' +
  					$("#shopping-list-entry").val() +
  				'</span>' +
  					'<div class="shopping-item-controls">' +
  						'<button class="shopping-item-toggle">'
  							'<span class="button-label">check</span>' +
  						'</button>' +
          				'<button class="shopping-item-delete">' +
            				'<span class="button-label">delete</span>' +
          				'</button>' +
        			'</div>' +
     		'</li>'
     	);
    });

	//delete item from form
	
	$(".shopping-list").on('click', '.shopping-item-delete', function(event) {	
		$(this).closest("li").remove();	
	});

	//check and uncheck item
	$(".shopping-list").on("click", ".shoppping-item-toggle", function(event) {
		$(this).closest("li").find(".shopping-item").toggleClass(
			"shopping-item_checked");
	});

});