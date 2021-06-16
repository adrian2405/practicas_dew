let myAudio = document.getElementById('audio');

let audioList = ['Seven Nation Army.mp3', 'Metallica - Nothing Else Matters.mp3', 'My Chemical Romance - The Light Behind Your Eyes.mp3'];

let playPause = document.getElementById('playPause');

let previous = document.getElementById('previous');
let next = document.getElementById('next');

/*$('ol li').each(function(indice, elemento) {
    console.log('El elemento con el índice '+indice+' contiene '+$(elemento).text());
  });*/

let count = 0;
let i = 0;

myAudio.setAttribute('src', "audio/"+audioList[i]);

playPause.addEventListener("click", playMusic);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);

function playMusic(){
    
    if(count == 0){

        count = 1;
        myAudio.play();
        playPause.classList.replace('fa-pause', 'fa-play');

    }else{

        count = 0;
        myAudio.pause();
        playPause.classList.replace('fa-play', 'fa-pause');
    }
    }

    function previousSong(){
        if(i <= 0) i = audioList.length;	
        i--;
        count = 0;
        return setMusic();			 
    }
    
    function nextSong(){
        if(i >= audioList.length-1) i = -1;
        i++;
        count = 0;
        return setMusic();			 
    }
    
    function setMusic(){
         myAudio.setAttribute('src', "audio/"+audioList[i]);
         playMusic();
        
    }