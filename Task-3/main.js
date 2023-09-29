let navbar = document.getElementById('navbar-nav');
let toggle = document.getElementById('toggle-btn');
let close = document.getElementById('close');

toggle.addEventListener('click', () => {
    navbar.classList.add("nav-active");


});

close.addEventListener('click', () => {
    navbar.classList.remove("nav-active");

});

document.addEventListener("click", function(e)
{
    if(e.target.id !== 'navbar-nav' && e.target.id !== 'toggle-btn' )
    {
        navbar.classList.remove("nav-active");
    }
})



let shopIcon = document.querySelector('.shop-icon');
let shopIcon1 = document.querySelector('.shop-icon1');
let shopping = document.querySelector('.shopping');
let shop_close = document.getElementById('shop-close');

shopIcon.addEventListener('click', () => {
    shopping.classList.add("shop-active");

    // console.log("shop icon clik")


});

shopIcon1.addEventListener('click', () => {
    shopping.classList.add("shop-active");

    // console.log("shop icon clik")


});

shop_close.addEventListener('click', () => {
    shopping.classList.remove("shop-active");

});



let add_to_cart_btns = document.querySelectorAll(".add-cart");
let mainContainer = document.querySelector(".maincontainer");
let quantity_field = document.getElementsByClassName("num");
let removeBtns = document.getElementsByClassName("remove-btns");











for (let i = 0; i < add_to_cart_btns.length; i++) {
    add_to_cart_btns[i].addEventListener("click", addToCart)
    
   
   
}

//counter increase after add product 
let count = 0;
let counter_no = document.querySelector(".counter");
let counter_no1 = document.querySelector(".counter1");
function addToCart(event) {
    let btn = event.target
    let btn_parent = btn.parentElement
    let btn_grantparent = btn.parentElement.parentElement

    let itemPrice = btn_parent.children[0].innerText;
    let itemName = btn_grantparent.children[2].innerText;
    let itemImg = btn_grantparent.children[0].children[1].src;

    // counter ++ when product add
    count++
    counter_no.innerText = count
    counter_no1.innerText = count

    if(counter_no.innerText > 0 || counter_no1.innerText > 0  )
    {
        counter_no.classList.remove("hide");
        counter_no1.classList.remove("hide");
        
        
    }

  
 
    let itemContainer = document.createElement('div');
    itemContainer.innerHTML =
        `<div class="bg-dark d-flex align-items-center  justify-content-around overflow-auto my-1 rounded-3 p-1">
            <img src="${itemImg}" alt="" class="w-25 p-2">
            <div>
                <h6 class="item-name">${itemName}</h6>
            <h6 class="item-price">${itemPrice}</h6>
            <input type="number" class="num w-50" value="1" title="quantity">
            <span class="item-total"> ${itemPrice}</span>
                
            </div>
           
          
           <i class="ri-delete-bin-5-line fs-3 px-1 bg-white rounded-circle text-danger remove-btns"></i>
           
        </div>`

    mainContainer.append(itemContainer);

    

    // 
    for (let i = 0; i < quantity_field.length; i++) {
        quantity_field[i].addEventListener("change", updateTotal)
    }


    for (let i = 0; i < removeBtns.length; i++) {

        removeBtns[i].addEventListener("click", addToCartRemoveItem)

    }
    grandTotal();

    // console.log(itemName);
    // console.log(itemPrice);
    // console.log(itemImg);
    // console.log(itemImg);
}
function updateTotal(event) {

    number_of_item = event.target
    number_of_item_parent = number_of_item.parentElement

    price_field = number_of_item_parent.getElementsByClassName('item-price')[0]
    total_field = number_of_item_parent.getElementsByClassName('item-total')[0]

    price_field_content = price_field.innerText.replace('$', '')
    total_field.innerText = '$' + number_of_item.value * price_field_content


    if (isNaN(number_of_item.value) || (number_of_item.value <= 0)) {
        number_of_item.value = 1;
        total_field.innerText = '$' + number_of_item.value * price_field_content
    }

    grandTotal()



}

let grand_total = document.getElementsByClassName('final-total')[0];
function grandTotal() {
    let total = 0
    let total_price = document.getElementsByClassName('item-total');


    for (let i = 0; i < total_price.length; i++) {
        total_price_content = Number(total_price[i].innerText.replace('$', ''))

        total += total_price_content
    }
    grand_total.innerText = '$' + total

    // console.log(grand_total)
    // console.log(total)



}
function addToCartRemoveItem(event) {
    remove_btn = event.target
    remove_btn_grandparent = remove_btn.parentElement
     remove_btn_grandparent.remove()
     grandTotal()
    // alert("click");
    count--
    counter_no.innerText = count
    counter_no1.innerText = count

    // console.log(counter_no.innerText)

    if(counter_no.innerText == 0 || counter_no1.innerText == 0)
    {
        shopping.classList.remove("shop-active");
        // console.log("remove")
        counter_no.classList.add("hide");
        counter_no1.classList.add("hide");
        
    }

  

    
    
   

    // console.log(remove_btn_grandparent)


}



