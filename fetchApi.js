document.addEventListener('DOMContentLoaded', () => {
    fetch('https://blockchain.info/q/24hrprice')
        .then(res => res.json())
        .then(data => {
            document.querySelector('#price').innerHTML = `${data} (USD)`;
        });
    (e => {
        console.log('Error:', e);
    });
})