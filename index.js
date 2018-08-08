const inner = document.querySelector('#inner');

let squaresPerSide = 16;
let color = 'black';
const rainbow = ['hotpink', 'purple', 'blue', 'limegreen', 'yellow', 'orange', 'red'];

const setColor = (color) => {
    if (color == 'rainbow'){
        return `${rainbow[Math.floor(Math.random() * 7)]}`;
    } else {
        return `black`;
    }
};

const selectColor = (element) => {
    color = element.value;
}

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
                square.style.backgroundColor = setColor(color);

                if(square.style.backgroundColor == 'black'){
                    if(square.style.opacity < .1){
                        square.style.opacity = .1;
                    } else if(square.style.opacity < .3){
                        square.style.opacity = .3;
                    } else if(square.style.opacity < .5){
                        square.style.opacity = .5;
                    } else if(square.style.opacity < .7){
                        square.style.opacity = .7;
                    } else if(square.style.opacity < .8){
                        square.style.opacity = .8;
                    } else if(square.style.opacity < .9){
                        square.style.opacity = .9;
                    }
                }
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
    let squaresPerSide = prompt('Creating new grid. How many squares would you like per axis? (range 1-100)', '16');
    setGrid(squaresPerSide);
}
