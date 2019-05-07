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
    const outlineLength = outline.getTotalLength();
    //console.log(outlineLenght);
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Play Sound
    play.addEventListener('click', () =>{
        song.play();
    });

    //function to stop and play song
    const checkPlaying = song =>{
        if(song.paused){
        song.play();
        play.src = './svg/pause.svg';
        }else{
            song.pause();
            play.src = './svg/play.svg';
        }
    }
}

app();