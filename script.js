let sliderImg = document.getElementById('sliderImg');
let images = new Array ( 
    'images/08.webp', 
    'images/02.webp', 
    'images/03.webp', 
    'images/04.webp', 
    'images/01.webp', 
    'images/06.webp', 
    'images/07.webp',
    'images/08.webp'
);
let leng = images.length;
let i = 0;
function slider() {
    if (i > leng -1) {
        i = 0;
    }
    sliderImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}