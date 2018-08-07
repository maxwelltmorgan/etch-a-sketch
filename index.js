const inner = document.querySelector('#inner');

let squaresPerSide = 16;

const black = 'black';
const rainbow = ['violet', 'indigo', 'blue', 'limegreen', 'yellow', 'orange', 'red'];
const shades = ['#cccccc', '#b2b2b2', '#999999', '#7f7f7f', '#666666', '#4c4c4c', '#323232', '#191919', '#000000'];



const setColor = () => {

    return `${rainbow[Math.floor(Math.random() * 7)]}`
//return `${black}`;
};

const setGrid = (squaresPerSide) => {

    if(squaresPerSide > 0 && squaresPerSide <= 100){
        for(var i = 0; i < squaresPerSide; i++){
            for(var j = 0; j < squaresPerSide; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.style.width = `${(695/squaresPerSide) + 'px'}`;
                square.style.height = `${(390/squaresPerSide) + 'px'}`;
                inner.appendChild(square);
            };
        };

        let squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = setColor();
            });
        });
    } else {
        alert('out of range.  please select # between 1-100')
    };
};
setGrid(squaresPerSide);

const restart = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    let squaresPerSide = prompt('enter # of squares per axis (range 1-100)');
    setGrid(squaresPerSide);

}
