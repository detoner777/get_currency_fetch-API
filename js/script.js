let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

/* GET use XMLHttpRequest

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});
*/


// GET use FETCH
inputRub.addEventListener('input', () => {

    fetch('js/current.json')
        .then(response => {
            
            return response.json();
        })
        .then(data => {
             
            inputUsd.value = Math.round (inputRub.value / data.usd);
        })
        .catch(err => {
            inputUsd.value = "Что-то пошло не так!";
        })

});