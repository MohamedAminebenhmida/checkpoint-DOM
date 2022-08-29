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
//Quantity Changes
var quantityInputs = document.getElementsByClassName('cart-quantity');
for (var i=0;i<quantityInputs.length; i++)
{
var input = quantityInputs[i];
input.addEventListener("change",quantitychanged);
}
//Add to cart
var addcart = document.getElementsByClassName('add-cart')
for ( var i =0;i< addcart.length;i++)
{
    var button = addcart[i];
 button.addEventListener("click" , addcartclicked)   ;
}




//Remove items from cart

function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    Updatetotal ()
}
//Quantity changes
function quantitychanged (event)
{
var input = event.target;
if (isNaN (input.value) ||  (input.value <=0))
{
    input.value=1;
}
Updatetotal();
}
//dd to cart 
function addcartclicked (event)
{
    var button = event.target;
    var shopProducts= button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innertext;
    var productIMG = shopProducts.getElementsByClassName("product-img")[0].src;
    console.log(title, price, productIMG);

}

//Update Total
function Updatetotal (){
var cartcontent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartcontent.getElementsByClassName("cart_box");
var total=0;
for (var i=0;i<cartBoxes.length; i++)
{
    var cartBox =cartBoxes[i];

    var priceElement = cartBox.getElementsByClassName ("price")[0];
    var quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];

    var quantity = quantityElement.value ;
    total=total + (price * quantity);
}
    document.getElementsByClassName("total-price")[0].innertext="$" + total;


}