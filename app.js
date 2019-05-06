const app = () =>{
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time Displayer
    const timeDisplay = document.querySelector('.timeDisplay')
    //get lenght of circular outline
    const outlineLenght = outline.getTotalLenght();
    console.log(outlineLenght);
}

app();