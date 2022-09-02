let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let Closecart = document.querySelector("#Close-cart");

cartIcon.onclick = () => {
    cart.classList.add ("active");
}

Closecart. onclick = ( )=> {
    cart.classList.remove("active");

}

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
var quantityInputs = document.getElementsByClassName("cart-quantity");
for (var i=0;i<quantityInputs.length; i++)
{
var input = quantityInputs[i];
input.addEventListener("change",quantitychanged);
}
//Add to cart
var addcart = document.getElementsByClassName("add-cart")
for ( var i =0;i< addcart.length;i++)
{
    var button = addcart[i];
 button.addEventListener("click" , addcartclicked)   ;
}
// Buy Button
document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonclicked);
//*Buy Button function
function buyButtonclicked(){
    alert('Your order is placed')
 var cartcontent =document.getElementsByClassName('') 
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
var input =event && event.target;
if (isNaN (input && input.value) ||  (input && input.value <=0))
{
   if(input){
    input.value=1
   }
}
Updatetotal();
}

//Add to cart 
function addcartclicked (event)
{
    var button = event.target;
    var shopProducts= button.parentElement;
    var title = document.getElementsByClassName("product-title")[0].innerText;
    var price = document.getElementsByClassName("price-element")[0].innerText;
    var productIMG = document.getElementsByClassName("product-img")[0].src;
addProductTocart(title,price,productIMG);
Updatetotal()
}
function addProductTocart(title,price,productIMG)
{
    var cartshopboxs= document.createElement("div");
    var cartitems=document.getElementsByClassName("cart-content")[0];
    var cartitemsnames= document.getElementsByClassName("cart-product-title");
    for (var i=0;i<cartitemsnames.length;i++)
    {
        alert("You have already added this item to cart");
        return;
    }
    var cartboxcontent = `
<img src="${productIMG}" alt="" class="cart-img">
<div class="detail-box">
<div class="cart-product-title">
${title}    
</div>
<div class="cart-price"> $ <span class="Price"> ${price} </span> </div>
<input type="number" value="1" class="cart-quantity">
</div>

<!--remove-->
<i class='bx bxs-trash-alt cart-remove'></i>`;
cartshopboxs.innerHTML = cartboxcontent;
cartitems.append(cartshopboxs);
cartshopboxs.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);
cartshopboxs.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantitychanged);

}



//Update Total
function Updatetotal (){
var cartcontent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartcontent.getElementsByClassName("cart_box");

var total=0;
for (var i=0;i<cartBoxes.length; i++)
{
    var cartBox =cartBoxes[i];

    var price = cartBox.getElementsByClassName ("Price-element")[0];
    var quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];

    var quantity = quantityElement.value ;
    total=total + (price.innerText * quantity);
}
    document.getElementsByClassName("totalPrice")[0].innerText=total;


}