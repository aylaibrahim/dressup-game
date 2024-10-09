const topImages = ['clothes/flowy_top.png', 'clothes/latte_dress.png', 'clothes/emo_top.png'];
const bottomImages = ['clothes/flowy_pants.png', 'clothes/emo_skirt.png'];
const hairImages = ['hair/bob_black.png', 'hair/bob_red.png', 'hair/curly_black.png', 'hair/curly_blonde.png'];
const eyesImages = [];
const shoesImages = ['clothes/black_flats.png', 'clothes/white_flats.png', 'clothes/grey_flats.png', 'clothes/maryjane_tights.png', 'clothes/emo_shoes.png'];
const skinColors = ['base/skin_pale.png', 'base/skin_olive.png', 'base/skin_brown.png', 'base/skin_black.png'];

let currentTop = 0;
let currentBottom = 0;
let currentHair = 0;
let currentEyes = 0;
let currentShoes = 0;
let currentSkin = 0;

window.onload = function() {
    const hairDiv = document.querySelector('.hair');
    hairDiv.style.backgroundImage = `url(${hairImages[0]})`;
    hairDiv.classList.add('visible');
    currentHair = 0;
};

function nextTop() {
    const topDiv = document.querySelector('.top');
    currentTop = (currentTop + 1) % topImages.length;
    topDiv.style.backgroundImage = `url(${topImages[currentTop]})`;
    topDiv.classList.add('visible');
}

function removeTop() {
    const topDiv = document.querySelector('.top');
    topDiv.style.backgroundImage = '';
    topDiv.classList.remove('visible');
}

function nextBottom() {
    const bottomDiv = document.querySelector('.bottom');
    currentBottom = (currentBottom + 1) % bottomImages.length;
    bottomDiv.style.backgroundImage = `url(${bottomImages[currentBottom]})`;
    bottomDiv.classList.add('visible');
}

function removeBottom() {
    const bottomDiv = document.querySelector('.bottom');
    bottomDiv.style.backgroundImage = '';
    bottomDiv.classList.remove('visible');
}

function nextHair() {
    const hairDiv = document.querySelector('.hair');
    currentHair = (currentHair + 1) % hairImages.length;
    hairDiv.style.backgroundImage = `url(${hairImages[currentHair]})`;
    hairDiv.classList.add('visible');
}

function removeHair() {
    const hairDiv = document.querySelector('.hair');
    hairDiv.style.backgroundImage = '';
    hairDiv.classList.remove('visible');
}

function nextEyes() {
    const eyesDiv = document.querySelector('.eyes');
    currentEyes = (currentEyes + 1) % eyesImages.length;
    eyesDiv.style.backgroundImage = `url(${eyesImages[currentEyes]})`;
    eyesDiv.classList.add('visible');
}

function removeEyes() {
    const eyesDiv = document.querySelector('.eyes');
    eyesDiv.style.backgroundImage = '';
    eyesDiv.classList.remove('visible');
}

function nextShoes() {
    const shoesDiv = document.querySelector('.shoes');
    currentShoes = (currentShoes + 1) % shoesImages.length;
    shoesDiv.style.backgroundImage = `url(${shoesImages[currentShoes]})`;
    shoesDiv.classList.add('visible');
}

function removeShoes() {
    const shoesDiv = document.querySelector('.shoes');
    shoesDiv.style.backgroundImage = '';
    shoesDiv.classList.remove('visible');
}

function nextSkin() {
    const skinDiv = document.querySelector('.skin');
    currentSkin = (currentSkin + 1) % skinColors.length;
    skinDiv.style.backgroundImage = `url(${skinColors[currentSkin]})`;
    skinDiv.classList.add('visible');
}

function removeSkin() {
    const skinDiv = document.querySelector('.skin');
    skinDiv.style.backgroundImage = '';
    skinDiv.classList.remove('visible');
}

function resetCharacter() {
    removeTop();
    removeBottom();
    removeHair();
    removeEyes();
    removeShoes();
    removeSkin();
}
