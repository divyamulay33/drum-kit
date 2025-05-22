function first(){
    var ButtoninnerhTML=this.innerHTML;
    makesound(ButtoninnerhTML);
    animation(ButtoninnerhTML)
    
}
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",first);
}
function makesound(key){

    switch(key){
        case "w" :
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a" :
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            case "s" :
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case "d" :
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            case "j" :
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k" :
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "l" :
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            default:
                console.log(ButtoninnerhTMLinner);
    }
}
document.addEventListener("keypress",function(event){
    key=event.key;
    makesound(key);
    animation(event.key)
})
function animation(createbutton){
    var press=document.querySelector("."+createbutton);
       press.classList.add("pressed");
       setTimeout(function(){
        press.classList.remove("pressed");
       },100);
}

