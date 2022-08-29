let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let Closecart = document.querySelector("#Close-cart");

cartIcon.onclick = () => {
    cart.classList.add ("active");
};

Closecart. onclick = ( )=> {
    cart.classList.remove("active");

};

// cart working JS

if (document.readyState=='loading')
{
    document.addEventListener('DOMContentLoaded',ready);
}
else {
    ready();
}

// Ready function

function ready ()
{
    //remove Items from cart
    var removecartbuttons = document.getElementsByClassName('cart-remove')
    console.log(removecartbuttons)
    for (var i=0;i<removecartbuttons.length;i++)
    {
        var Button=removecartbuttons[i];
        Button.addEventListener("click" ,removeCartItem)
    }
}

function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    Updatetotal ()
}

//Update Total
function Updatetotal (){
var cartcontent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartcontent.getElementsByClassName("cart-box");
var total=0;
for (var i=0;i<cartBoxes.length; i++)
{
    var cartBox =cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];
    var price =parseFloat(priceElement.innertext.replace("$",""));
    var quantity = quantityElement.value ;
    total=total + (price * quantity);
    document.getElementsByClassName("total-price")[0].innertext="$" + total;
}

}