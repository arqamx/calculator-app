let btnContainer = document.getElementById('btn-container');
let output = document.getElementById('result');

btnContainer.addEventListener('click', (event) => {
    if(!event.target.matches('button')) return;

    let btnType = event.target.className; 

    if (btnType == 'clear') {
        output.innerText = '0';
    }
});