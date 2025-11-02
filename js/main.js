import { Calculator } from "./calculator.js";
import { Display } from "./display.js";
import { History } from "./history.js";

let cals = new Calculator;
let display = new Display;
let history = new History;

let button = document.querySelectorAll('button:not(#pBtn, #closeHistoryBtn)');
button.forEach(btn => {
    btn.addEventListener('click', function(){
        btn.blur();
        let btnText = btn.innerText;
        if(btnText === 'c'){
            cals.clear();
        }else if(btnText === '='){
            cals.calculate();
        } else if(btnText === '⌫'){
            cals.backspace();
        } else if(btnText === '⏲'){
            history.render(cals.getHistory());
            history.toggle();
        } else{
            cals.appendValue(btnText);
        }

        display.update(cals.getValue());
    });
});

document.addEventListener('keydown', function(e){
    let key = e.key;

    let allowKeys = ['+', '-', '*', '/', 'Enter', 'c', 'Backspace', '.', '='];
    let isNumber = !isNaN(key);

    if(isNumber){
        cals.appendValue(key);
    }else if(allowKeys.includes(key)){
        if(key === 'Enter' || key === '='){
            cals.calculate();
        }else if(key === 'Backspace'){
            cals.backspace();
        }else if(key.toLowerCase() === 'c'){
            cals.clear();
        }else{
            cals.appendValue(key);
        }
    }else{
        e.preventDefault();
    }

    display.update(cals.getValue());
});


let inputField = document.querySelector('#calsInput');
inputField.addEventListener('keydown', (e) => e.preventDefault());

let closeHistoryBtn = document.querySelector('#closeHistoryBtn');
closeHistoryBtn.addEventListener('click', function(){
    history.toggle();
});