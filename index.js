const inner = document.querySelector('#inner');

const setGrid = (n) => {
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${(695/80) + 'px'}`;
        square.style.height = `${(390/80) + 'px'}`;
        inner.appendChild(square);
        };
    };
};
setGrid(80);

var squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
});
