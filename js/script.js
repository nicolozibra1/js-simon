// FUNZIONE PER GENERARE I NUMERI
const generate = document.getElementById('generate');
let timer = 0;
generate.addEventListener('click', function () {
    timer = setTimeout(function () {
    boxNumber.innerHTML ='';
    btnSend.classList.toggle('d-none');
    }, 10000);

    const numbers = [];
    
    while(numbers.length < 5) {
        const number = getRndNumber(1, 100);
    
        if(!numbers.includes(number)) {
        numbers.push(number);
        }
    }

    console.log(numbers);
    let boxNumber = document.querySelector('.box-number');
    boxNumber.innerHTML = `<h1 class="text-white text-center">${numbers}</h1>`;
    // PRELEVO I NUMERI IN INPUT DEL UTENTE
    function checkNumber(e) {
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
        // VERIFICO LA CORRISPONDEZA TRA NUMERI BOT E NUMERI UTENTE
        for(let i = 0; i < inputs.length; i++) {
            if(numbers.includes(inputs[i])){
                count++;
                userNumber.push(inputs[i]);
                console.log(inputs[i]);
            }
        }

        const boxResult = document.querySelector('.box-result');
        boxResult.innerHTML = `<h1 class="text-center">Hai indovinato <span class="text-danger">${count}</span> numeri. Ecco quali: <span class="text-danger">${userNumber}</span></h1>`

        const restartBox = document.getElementById('box-restart');
        restartBox.classList.remove('d-none');

    }

        const btnSend = document.getElementById('form');
        btnSend.addEventListener('submit', checkNumber);
       
        const restart = document.getElementById('restart');
        restart.addEventListener('click', function() {
            location.reload();
        });
    });

    





