export class History{
    constructor(){
        this.historyContain = document.querySelector('.history-contain');
        this.historyList = document.querySelector('.historyList');

    }
    render(historyArray){
        if(!historyArray.length){
        this.historyList.innerHTML = '<li class="ml-3 text-yellow-700 font-bold text-xl ">No History Yet!</li>';
        return;
        }
        this.historyList.innerHTML = historyArray.map(items => `<li class="ml-4 text-yellow-700 font-bold text-2xl ">${items}</li>`).join('');
    }
    toggle(){
        this.historyContain.classList.toggle('translate-x-full');
    }
}