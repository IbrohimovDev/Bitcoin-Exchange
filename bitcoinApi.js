document.addEventListener('DOMContentLoaded', () => {
    getBitcoinPrice();


});

function updateBitcoinPrice(newValue) {
    document.querySelector('#price').innerHTML = `${newValue} (USD)`;
    setTimeout(getBitcoinPrice, 5000);
}
// creating a function
function getBitcoinPrice() {
    // creating XML object
    let xhr = new XMLHttpRequest;
    //the url requests api
    let url = 'https://blockchain.info/q/24hrprice';
    //event handler
    xhr.onload = function() {
            try {
                let data = this.responseText;
                document.querySelector('#price').innerHTML = `${data} (USD)`;
                updateBitcoinPrice(data);

            } catch (e) {
                console.log('Error :', e);
            }
        }
        //creating AJAX request
    xhr.open('GET', url);
    //Send AJAX request to web service
    xhr.send();

}