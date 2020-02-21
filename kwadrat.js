const mainContent = document.getElementById('main-content');
const inputSize = document.getElementById('size');
const containerWidth = 800;

class Row {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.numberOfRecs = width/height;
        this.injectRow();
    }
    injectRow = () => {
        const newDiv = document.createElement('div');
        newDiv.style.display = 'flex';
        for (let i=0; i<this.numberOfRecs; i++){
            new Rectangle(this.height, newDiv);
        }
        mainContent.appendChild(newDiv);
    }
}

class Rectangle {
    constructor(height, parent){
        this.width = height;
        this.height = height;
        this.color = this.getRandomColor();
        this.parent = parent;
        this.injectRec();
    }
    injectRec = () => {
        const newRec = document.createElement('div');
        newRec.style.height = this.height + 'px';
        newRec.style.width = this.width + 'px';
        newRec.style.background = '#' + this.color;
        this.parent.appendChild(newRec);
    }
    getRandomColor = () => {
        return Math.floor(Math.random()*1000000-1);
    }
}

function makeNewRec (){
    const size = inputSize.value;
    const numberOfRows = containerWidth/size;
    for( let i=0; i<numberOfRows; i++ ){
        new Row(size, containerWidth);
    }
}