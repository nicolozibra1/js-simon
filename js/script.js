// FUNZIONE GENERA
const generate = document.getElementById('generate');
generate.addEventListener('click', function () {
     // CONTO ALLA ROVESCIA
    const countdown = document.querySelector('.countdown');
    let message = document.querySelector('.i-message');
    let count = 10;
    countdown.innerHTML = `<h4>Tempo rimanente:</h4>
                           <h4>${count}</h4>`;
    const endTime = setInterval(() => {
     if(count === 1) {
         clearInterval(endTime);
         countdown.classList.add('d-none');
         message.classList.remove('d-none');
     }
     else {
         count--;
     }  
     countdown.innerHTML = `<h4>Tempo rimanente:</h4>
                            <h4>${count}</h4>`;
     console.log(count);
 }, 1000);

    //  TIMER INVISIBILITA
    let timer = 0;
    timer = setTimeout(function () {
    boxNumber.innerHTML ='';
    btnSend.classList.toggle('d-none');
    }, 10000);

    // GENERAZIONE NUMERI
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







