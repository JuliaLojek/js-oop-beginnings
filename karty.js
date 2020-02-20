const cardBox = document.getElementById('card-box');
const cardData = ['rycarz', 'smok', 'krolewna', 'pacholek', 'kowal'];

function Card(name){
    this.name = name;
    this.printName = function(){
        console.log(this.name);
    };
    this.power = Math.floor( Math.random()*100 );
    const newBox = document.createElement('div');
    newBox.innerHTML = '<p>' + this.name + '</p>' + '<p>' + this.power + '</p>';
    newBox.onclick = () => {
        this.printName.call(this);
    };
    cardBox.appendChild(newBox);
}

// const cards = cardData.map( item => new Card(item) );

function losujKarte(){
    const index = Math.floor( Math.random()*cardData.length );
    return new Card(cardData[index]);
}
