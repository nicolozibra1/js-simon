let input1 = document.getElementById('n1').value;
let input2 = document.getElementById('n2').value;
let input3 = document.getElementById('n3').value;
let input4 = document.getElementById('n4').value;
let input5 = document.getElementById('n5').value;

// FUNZIONE PER GENERARE I NUMERI
const generate = document.getElementById('generate');
generate.addEventListener('click', function () {

    const numbers = [];
    
    while(numbers.length < 5) {
        const number = getRndNumber(1, 100);
    
        if(!numbers.includes(number)) {
        numbers.push(number);
        }
    }
    
    console.log(numbers);
    const boxNumber = document.querySelector('.box-number');
    boxNumber.innerHTML = `<h1 class="text-white text-center">${numbers}</h1>`;
});

const result = document.querySelector('.box-result');




