// document.querySelector(".drum").addEventListener("click", handleClick);

for (var button = 0; button < document.querySelectorAll(".drum").length; button++) {
  document.querySelectorAll(".drum")[button].addEventListener("click", function() {
    // return this.style.color = 'white';   //to know the html element that triggered the eventlstener

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
try {
  makeSound(event.key);
  buttonAnimation(event.key)
} catch (ReferenceError) {
  return null;

}

  // alert("key was pressed");
});

function makeSound(key) {
  switch (key.toLowerCase()) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":b
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}

// return audio.play();
