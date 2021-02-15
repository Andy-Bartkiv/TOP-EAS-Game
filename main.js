function clearGrid() {
    const del = [...document.querySelectorAll('.div-box')];
    del.forEach(e => {
        e.classList.remove('m-over')
        e.removeAttribute('style');
    });
}

function drawGrid() {
    let gridSize = document.querySelector('#grid-size').value;
    gridContainer.setAttribute('style', `    grid-template-columns: repeat(${gridSize}, 1fr);
    grid-template-rows: repeat(${gridSize}, 1fr);`)
    const del = [...document.querySelectorAll('.div-box')];
    del.forEach(e => e.remove());
    for (let i=0; i<gridSize; i++) {
    //    const divRows = document.createElement('div');
    //    gridContainer.appendChild(divRows);
    //    divRows.setAttribute('class', 'div-rows');
        for (let j=0; j<gridSize; j++){
            const divBox = document.createElement('div');
            divBox.setAttribute('class', 'div-box');
            divBox.setAttribute('id', `box-${i}-${j}`);
            gridContainer.appendChild(divBox);
            divBox.addEventListener('mouseover', () =>{
                divBox.classList.add('m-over');
                divBox.setAttribute('style', `background: ${color.value}`)
            })
        }
    }
}

const color = document.querySelector('#color');
color.value = '#0000ff';

const actualSize = document.querySelector('#grid-size');
actualSize.value = 24;
document.querySelectorAll('.gsv').forEach(el =>
    el.textContent = actualSize.value)
actualSize.addEventListener('mousemove', () => {
    document.querySelectorAll('.gsv').forEach(el =>
        el.textContent = actualSize.value)
})

const btnClear = document.querySelector('#clear-btn');
btnClear.addEventListener('click', clearGrid);

const btnNewGrid = document.querySelector('#new-btn');
btnNewGrid.addEventListener('click', drawGrid);

const gridContainer = document.querySelector('.grid-container')

drawGrid();


