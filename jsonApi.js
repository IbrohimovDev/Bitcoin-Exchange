document.addEventListener('load', () => {
    document.querySelector('button').addEventListener('click', () => {

        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            let data = JSON.parse(this.responseText);
            let currency = document.querySelector('input').value;
            let rate = data.rates[currency.toUpperCase()];
            if (rate != undefined) {
                document.querySelector('#result').innerHTML = `1 USD is ${rate.toFixed(3) }(${currency})`;
            } else {
                document.querySelector('#result').innerHTML = 'Currency is not valid';
            }
        }
        xhr.open('GET', 'https://api.exchangeratesapi.io/latest?base=USD');
        xhr.send();

    });
});