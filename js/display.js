export class Display{
    constructor(){
        this.calsInput = document.querySelector('#calsInput');
    }
    update(value){
        this.calsInput.value = value;
    }
}