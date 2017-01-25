$(document).ready(function(){

	console.log(("Jquery is awesome!"));

	$(".up-button").click(function(){

		$.scrollTo(0, 500);
	
	});

	$(".down-button").click(function(){

		$.scrollTo('+=200px', 500);
	
	});

	$("#scene").parallax();

	var waypoint = new Waypoint({
		element: $(".last"),
		handler: function(direction){
			if (direction === "down") {
				$(".down-button").addClass("hidden");
				$(".up-button").removeClass("hidden");
			} else {
				$(".down-button").removeClass("hidden");
				$(".up-button").addClass("hidden");
			}
		},
		offset: 'bottom-in-view'
	});
});