document.querySelector('#crYear').addEventListener('load', currentYear());

function currentYear(){
    let today = new Date();
    let currentYear = today.getFullYear();
    
    if (currentYear != '2019') {
        document.getElementById('crYear').innerHTML = ` - ${currentYear}`;
    }
}