const app = () =>{
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Displayer
    const timeDisplay = document.querySelector(".time-Display");
    //get lenght of circular outline
    const outlineLength = outline.getTotalLenght();
    //console.log(outlineLenght);
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = 200;

};

app();