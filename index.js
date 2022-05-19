var numBtn=document.querySelectorAll(".btnSet").length;



//button click listener
for(var i = 0; i < numBtn ; i++)
{
    document.querySelectorAll(".btnSet")[i].addEventListener("click", handleClick);
    
}
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//keyboard event listener
document.addEventListener("keydown", handleKey);

function handleKey(event){
    var keyChar = event.key;
    makeSound(keyChar);
    buttonAnimation(keyChar);
}

//make sound function
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default: 
            console.log(key);
            break;
    }
}

//Button animation function

function buttonAnimation(keyPress){
    var activeButton = document.querySelector("."+keyPress);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
