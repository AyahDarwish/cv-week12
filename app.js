const images = ['3.jpg', '4.png'];
const targetImage = document.querySelector('.avatar img');
let i = 0;

targetImage.addEventListener('click', () => {

    if(i === images.length) {
        i = 0;
    }

    targetImage.src = 'images/'+images[i];
    i++;
});