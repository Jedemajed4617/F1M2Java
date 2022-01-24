console.log("console is geladen")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function ZetInFruitla(fruit){
    console.log(fruit)

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'blauw1';
    fruitvak.appendChild(nieuwElement);
}

function ZetInGroentela(groente){
    console.log(groente)

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'blauw2';
    groentevak.appendChild(nieuwElement);
}