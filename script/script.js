const makeYellow = () => {
    document.body.style.backgroundColor = 'yellow';
}

const makePinkButton = document.getElementById('makePink');
makePinkButton.onclick = function makePink() {
    document.body.style.backgroundColor = 'pink';
}


const makeGrayButton = document.getElementById('makeGray');
makeGrayButton.onclick = makeBgGray;

// const makeBgGray = () => {
//     document.body.style.backgroundColor = 'gray';
// }
function makeBgGray() {
    document.body.style.backgroundColor = 'gray';
}



const makeTomatoButton = document.getElementById('makeTomato');
makeTomatoButton.addEventListener('click', makeBgTomato);
function makeBgTomato() {
    document.body.style.backgroundColor = 'tomato';
}



document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})