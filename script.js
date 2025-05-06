const topImages = ['clothes/flowy_top.png', 'clothes/latte_dress.png', 'clothes/emo_top.png'];
const bottomImages = ['clothes/flowy_pants.png', 'clothes/emo_skirt.png'];
const hairImages = ['hair/bob_black.png', 'hair/bob_red.png', 'hair/curly_black.png', 'hair/curly_blonde.png'];
const eyesImages = ['eyes/eyes1.png', 'eyes/eyes2.png'];
const shoesImages = ['clothes/black_flats.png', 'clothes/white_flats.png', 'clothes/grey_flats.png', 'clothes/maryjane_tights.png', 'clothes/emo_shoes.png'];
const skinColors = ['base/skin_pale.png', 'base/skin_tan.png', 'base/skin_brown.png'];

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-screen').style.display = 'none';
    document.querySelector('.main-wrapper').style.display = 'flex';
});

let topIndex = -1, bottomIndex = -1, hairIndex = -1, eyesIndex = -1, shoesIndex = -1, skinIndex = -1;
let undoStack = [], redoStack = [];

function updateCharacter() {
    const setImage = (selector, images, index) => {
        const el = document.querySelector(selector);
        if (index >= 0 && images[index]) {
            el.style.backgroundImage = `url(${images[index]})`;
            el.classList.add('visible');
        } else {
            el.style.backgroundImage = '';
            el.classList.remove('visible');
        }
    };

    setImage('.top', topImages, topIndex);
    setImage('.bottom', bottomImages, bottomIndex);
    setImage('.hair', hairImages, hairIndex);
    setImage('.eyes', eyesImages, eyesIndex);
    setImage('.shoes', shoesImages, shoesIndex);
    setImage('.skin', skinColors, skinIndex);
}


function saveState() {
    undoStack.push({
        topIndex, bottomIndex, hairIndex, eyesIndex, shoesIndex, skinIndex
    });
    redoStack = [];
}

function nextTop() { saveState(); topIndex = (topIndex + 1) % topImages.length; updateCharacter(); }
function nextBottom() { saveState(); bottomIndex = (bottomIndex + 1) % bottomImages.length; updateCharacter(); }
function nextHair() { saveState(); hairIndex = (hairIndex + 1) % hairImages.length; updateCharacter(); }
function nextEyes() { saveState(); eyesIndex = (eyesIndex + 1) % eyesImages.length; updateCharacter(); }
function nextShoes() { saveState(); shoesIndex = (shoesIndex + 1) % shoesImages.length; updateCharacter(); }
function nextSkin() { saveState(); skinIndex = (skinIndex + 1) % skinColors.length; updateCharacter(); }

function removeTop() { saveState(); topIndex = 0; updateCharacter(); }
function removeBottom() { saveState(); bottomIndex = 0; updateCharacter(); }
function removeHair() { saveState(); hairIndex = 0; updateCharacter(); }
function removeEyes() { saveState(); eyesIndex = 0; updateCharacter(); }
function removeShoes() { saveState(); shoesIndex = 0; updateCharacter(); }
function removeSkin() { saveState(); skinIndex = 0; updateCharacter(); }

function styleMe() {
    saveState();
    topIndex = Math.floor(Math.random() * topImages.length);
    bottomIndex = Math.floor(Math.random() * bottomImages.length);
    hairIndex = Math.floor(Math.random() * hairImages.length);
    eyesIndex = Math.floor(Math.random() * eyesImages.length);
    shoesIndex = Math.floor(Math.random() * shoesImages.length);
    skinIndex = Math.floor(Math.random() * skinColors.length);
    updateCharacter();
}

function undo() {
    if (undoStack.length > 0) {
        redoStack.push({ topIndex, bottomIndex, hairIndex, eyesIndex, shoesIndex, skinIndex });
        const prev = undoStack.pop();
        topIndex = prev.topIndex;
        bottomIndex = prev.bottomIndex;
        hairIndex = prev.hairIndex;
        eyesIndex = prev.eyesIndex;
        shoesIndex = prev.shoesIndex;
        skinIndex = prev.skinIndex;
        updateCharacter();
    }
}

function redo() {
    if (redoStack.length > 0) {
        saveState();
        const next = redoStack.pop();
        topIndex = next.topIndex;
        bottomIndex = next.bottomIndex;
        hairIndex = next.hairIndex;
        eyesIndex = next.eyesIndex;
        shoesIndex = next.shoesIndex;
        skinIndex = next.skinIndex;
        updateCharacter();
    }
}

function saveFavorite() {
    const fav = { topIndex, bottomIndex, hairIndex, eyesIndex, shoesIndex, skinIndex };
    localStorage.setItem('favOutfit', JSON.stringify(fav));
    document.querySelector('button[onclick="saveFavorite()"]').classList.add('saving-fav');
    setTimeout(() => {
        document.querySelector('button[onclick="saveFavorite()"]').classList.remove('saving-fav');
    }, 500);
}

function loadFavorite() {
    const fav = JSON.parse(localStorage.getItem('favOutfit'));
    if (fav) {
        topIndex = fav.topIndex;
        bottomIndex = fav.bottomIndex;
        hairIndex = fav.hairIndex;
        eyesIndex = fav.eyesIndex;
        shoesIndex = fav.shoesIndex;
        skinIndex = fav.skinIndex;
        updateCharacter();
    }
}

updateCharacter();

function resetCharacter() {
    saveState();
    topIndex = -1;
    bottomIndex = -1;
    hairIndex = -1;
    eyesIndex = -1;
    shoesIndex = -1;
    skinIndex = -1;
    updateCharacter();
}

