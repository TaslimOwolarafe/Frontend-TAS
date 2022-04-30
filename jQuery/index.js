$("h1").css("color", "green");
console.log($("h1").css("color"));

$('h1').addClass("big-title margin-50");

setTimeout(function(){$("h1").removeClass("big-title margin-50");
$("h1").text("Hi World!");
$("button").text("Don't click me!");
$("h2").css("visibility", "visible").css("color", "white");}, 2000);



// to check if an element has a class we do:
// $("h1").hasClass("margin-50");
$("button").html("<em>Bye</em>");
$("button").attr("style","background-color: blue");

// adding event listeners
$("button").click(function() {
  $("h1").css("color", "#fff");
});

$(document).keypress(function(e) {
  $("h1").text(e.key);
})

// has repalced

// buttons = document.querySelectorAll("button")
// for (var i=0; i<(buttons.length); i++) {
//   buttons[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "pink";
//   });
// }

$("input").keypress(function(event) {
  console.log(event.key.toUpperCase());
})

$("h1").before("<h3>TAS</h3>"); //to add elements
// you can also use after(), prepend(), append()

// to remove elements e.g. buttons
// $("button").remove();

// can also be written this way
// $("input").on("keypress", function(e) {
//
// });
