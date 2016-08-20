$(document).ready(function() {
	//add new item

	$("#js-shopping-list-form").submit(function(event) {
 		event.preventDefault();
 		$(".shopping-list").append(
  			'<li>' +
  				'<span class="shopping-item">' +
  					$("#shopping-list-entry").val() +
  				'</span>' +
  					'<div class="shopping-item-controls">' +
  						'<button class="shopping-item-toggle">' +
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
	
	$(document).on("click", ".shopping-item-delete", function(event) {	
    console.log(this);
		$(this).closest("li").remove();	
	});

	//check and uncheck item
	$(document).on("click", ".shopping-item-toggle", function(event) {
    console.log($(this).closest("li").find(".shopping-item"));
		$(this).closest("li").find(".shopping-item").toggleClass("shopping-item-checked");
	});

});