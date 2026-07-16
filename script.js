let size = 18

const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', () => {
    size = prompt('Grid Size');
    size = (size == null) ? 18: (size > 100) ? 100 : size;
    box.innerHTML = '';
    generateGrid(box);
})

function generateGrid(box) {  
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex'
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.border = '1px solid black';
            square.style.width = `${960/size}px`;
            square.style.height = `${960/size}px`;
            row.appendChild(square);
        }
        let isMouseDown = false;
        box.addEventListener('mousedown', () => {
            event.preventDefault();
            isMouseDown = true;
        });
        box.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        row.addEventListener('mousemove', (event) => {
            if (isMouseDown) {
                
                let target = event.target;
                target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`;
            }
        });
        box.appendChild(row);
    }
}

generateGrid(box);
