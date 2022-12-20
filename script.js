//Include api for currency exchange
const api = "https://api.exchangerate-api.com/v4/latest/USD";

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultForm;
var resultTo;
var searchValue;

//Event when currency is changed
fromCurrency.addEventListener('change',(event)=>{
    resultForm = `${event.target.value}`;
});

//Event when currency is changed
toCurrency.addEventListener('change',(event)=>{
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

//function for updating values
function updateValue(e){
    searchValue = e.target.value;
}

//when user clicks, it calls the get results function
convert.addEventListener("click", getResults);

//get results function
function getResults(){
    fetch(`${api}`).then(currency => {return currency.json();
    }).then(displayResults);
}

//display resuts after conversion
function displayResults(currency){
    let formRate = currency.rates[resultForm];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = ((toRate / formRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

//when user clicks on the reset button
function clearVal(){
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};
