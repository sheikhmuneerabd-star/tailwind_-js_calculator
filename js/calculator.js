export class Calculator{
    constructor(){
        this.currentValue = '';
        this.history = [];
    }
    appendValue(value){
        let operator = ['+', '-', '*', '/'];
        let lastChar = this.currentValue.slice(-1);

        if(operator.includes(value)){
            if(this.currentValue === ''){
                if(value !== '-'){
                    return;
                }
            }

            if(this.currentValue === '-' && value !== '-'){
                return;
            }

            if(operator.includes(lastChar)){
                this.currentValue = this.currentValue.slice(0, -1) + value;
                return;
            }
        }

        if(value === '.'){
            let part = this.currentValue.split(/[\+\-\/\*]/);
            let lastPart = part[part.length - 1];

            if(lastPart.includes('.')){
                return;
            }
        }

        if(this.currentValue === 'Error'){
            this.currentValue = '';
        }
        this.currentValue += value;
    }
    calculate(){
        try{
            if(/[+\-*/.]$/.test(this.currentValue)){
                this.currentValue = this.currentValue.slice(0, -1);
            }
            
            if(this.currentValue === '') return;
            
            let result = eval(this.currentValue);

            this.history.push(`${this.currentValue} = ${result}`);
            this.currentValue = result.toString();
        }catch(error){
            this.currentValue = 'Error';
        }
    }
    backspace(){
        this.currentValue = this.currentValue.slice(0, -1);
    }
    clear(){
        this.currentValue = '';
    }
    getValue(){
        return this.currentValue;
    }
    getHistory(){
        return this.history;
    }
}