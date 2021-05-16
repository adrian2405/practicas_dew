let image = document.querySelector('img');
let changed = './changed.png';
let df = './default.png';

function checkImage(imageSrc, success, error) {
    var img = new Image();
    img.onload = success; 
    img.onerror = error;
    img.src = imageSrc;
}

checkImage("changed.png", function(){ image.src = changed }, function(){ image.src = df } );
    
