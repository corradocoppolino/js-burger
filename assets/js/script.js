// VARIABILI

var nameBurger = document.getElementById("name");
var coupon = document.getElementById("coupon");
var price = document.getElementById("price");
var button = document.getElementById("button");
var ingredients = document.getElementsByClassName("ingredient-checkbox");

var prezzoDefault = 50;
var coupons = ['sconto2021', 'sconto-bool'];
discount = 0.3;

writePrice(prezzoDefault, price);

button.addEventListener("click", function(){

    // Vado a controllare il nome inserito

    var nomeInserito = nameBurger.value.trim();

    if(nomeInserito.length === 0){

        alert("Inserisci un nome al panino");

    }else{

        var prezzoTotale = calcPrice(prezzoDefault);

        if(coupons.includes(coupon.value) === true){
            prezzoTotale -= prezzoTotale * discount;
        }

        writePrice(prezzoTotale, price);

    }  

})

// FUNZIONI

function writePrice(value, target){
    target.innerHTML = value.toFixed(2);
}

function calcPrice(value){
    
    var prezzoIngredienti = 0;

        for(var i = 0; i < ingredients.length; i++){

            var ingredient = ingredients[i];
            
            if(ingredient.checked === true){

                prezzoIngredienti += parseInt(ingredient.value);

            }

        }
    
    return prezzoTot = value + prezzoIngredienti;

}

