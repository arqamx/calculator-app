let btnContainer = document.getElementById('btn-container');
let output = document.getElementById('result');
let val1 = '';
let operator = '';
let lastButtonClickedOperator = false;

btnContainer.addEventListener('click', (event) => {
    if(!event.target.matches('button')) return;

    let btnType = event.target.className; 

    if (btnType == 'clear') {
        
        clickClear();

    } else if (btnType == 'digit') {
        
        clickDigit(event);
    
    } else if (btnType == 'sign-change') {

        clickSignChange();

    } else if (btnType == 'operator') {
        
        clickOperator(event);
            
    }
});

function clickClear() {
    setOutputText('0');
    val1 = '';
    operator = '';
}

function clickDigit(e) {
    let digitPressed = e.target.innerText;

    if (getOutputText() == '0' || lastButtonClickedOperator) {
        setOutputText(digitPressed);
        lastButtonClickedOperator = false;
        
    } else {
        setOutputText(getOutputText() + digitPressed);
    }
}

function getOutputText() {
    return output.innerText;
}

function setOutputText(text) {
    output.innerText = (Number.isInteger(Number(text))) ? text : Number(text).toFixed(2);
}

function clickSignChange() {
    setOutputText(getOutputText() * -1);
}

function clickOperator(e) {
    let buttonClicked = e.target.innerText;
    let result;

    if (buttonClicked === '%') {
        if (getOutputText() === '0') return;
        result = getOutputText() / 100;
        clickClear();

    } else if (buttonClicked === '.') {
        result = getOutputText();
        if (result.indexOf('.') == -1)
            result += '.';

    } else if (val1 === '') {
            val1 = getOutputText();
            result = val1;
            operator = buttonClicked;
            lastButtonClickedOperator = true;

    } else {
        if (operator === '/') {
            result = Number(val1) / Number(getOutputText());

        } else if (operator === '+') {
            result = Number(val1) + Number(getOutputText());

        } else if (operator === '-') {
            result = Number(val1) - Number(getOutputText());

        } else if (operator === 'x') {
            result = Number(val1) * Number(getOutputText());

        } else if (operator === '') {
            result = getOutputText();
        }
        
        val1 = result;
        operator = buttonClicked;
        lastButtonClickedOperator = true;

        if(buttonClicked === '=') {
            operator = '';
        }
    }


    setOutputText(result);
}
