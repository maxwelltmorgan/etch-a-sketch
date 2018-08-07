const inner = document.querySelector('#inner');

let squaresPerSide = 16;

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
                square.style.backgroundColor = 'black';
            })
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
