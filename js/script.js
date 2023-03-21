


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

    const btnSend = document.getElementById('form');
    btnSend.addEventListener('submit', function (e){
        e.preventDefault();
        let inputs = [
            parseInt(document.getElementById('n1').value),
            parseInt(document.getElementById('n2').value),
            parseInt(document.getElementById('n3').value),
            parseInt(document.getElementById('n4').value),
            parseInt(document.getElementById('n5').value)
            ]
            console.log(inputs);
    
        let count = 0;
        let userNumber = [];

        for(let i = 0; i < inputs.length; i++) {
            if(numbers.includes(inputs[i])){
                count++;
                userNumber.push(inputs[i]);
                console.log(inputs[i]);
            }
        }
    });
});

    





