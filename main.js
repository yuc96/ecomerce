
let number_cart =0;
let number=0;

document.getElementById("total_cart").innerHTML =number_cart;
console.log("HOLA HOLA HOLA");

//agregar al carrito
const total_cart=document.getElementById("total_cart");
const total_cart2=document.getElementById("total_cart2");
const btn_agregar1 = document.getElementById("btn_agregar1");
const btn_agregar2 = document.getElementById("btn_agregar2");
const btn_agregar3 = document.getElementById("btn_agregar3");
const mas= document.getElementById("cart_mas");
const menos=document.getElementById("cart_menos");
const menu_cart=document.getElementById("menu_cart");
const carrito_icon=document.getElementById("i2");



mas.addEventListener("click",add_products);
menos.addEventListener("click",subtract_products);
btn_agregar1.addEventListener("click",botonid_set,state1=true);
btn_agregar2.addEventListener("click",botonid_set,state2=true);
carrito_icon.addEventListener("click",show_products,);

function botonid_set(){
    if(state1){
        // total_cart=total_cart;
        number=total_cart.innerHTML;

        number= add_products(number);
        total_cart.innerHTML =number;
    }
    if(state2){
        number=total_cart.innerHTML;
        console.log(number);
        console.log(state1);
        number= add_products(number);
        total_cart2.innerHTML =number;
    }
}
function add_products(number) {
    number++;
    // total_cart.innerHTML =number_cart ;
    return number;
 } 

 function subtract_products() {
     if(number_cart>0){
        number_cart--;
     }
    
   total_cart.innerHTML =number_cart ;
 } 

    function show_products(){
        menu_cart.classList.toggle("show_cart");
        menu_cart.innerHTML= `<div class="products_despensa">
        <img class="products_image" src="/images/Papas.png" alt="papas_image">
        <p class="name_product">PAPAS</p>
        <p class="product_price">desde: $28</p>
            <div class="agregar_cart">
                    <p id="total_cart" class="product_total">${number_cart}</p>
                </div>
        </div>` ;
      }