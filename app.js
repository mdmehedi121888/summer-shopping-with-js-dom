// get data 

function getData(name,value){
    displayData(name,value);
}

let cnt=0,totalPrice=0,total=0,discountValue=0;
function displayData(name,value){
    ++cnt;

    // disable to enable button

if(cnt>0){
    document.getElementById('apply-btn').removeAttribute('disabled');
    document.getElementById('purchase-btn').removeAttribute('disabled');
}

    totalPrice+=value;
    total = totalPrice;
    document.getElementById('total-price').innerText = totalPrice;
    const ol = document.createElement('ol');
    ol.innerHTML = `<li>${cnt} . ${name}</li>`;
    document.getElementById('cart-product').appendChild(ol);
}



// coupon vlaue section 
function couponBtn(){
const couponValue = document.getElementById('coupon-value').value;
document.getElementById('coupon-value').value='';
if(couponValue=="SELL200" && totalPrice>=200){
    discountValue = (totalPrice*.20);
total = totalPrice-(totalPrice*.20);
document.getElementById('discount').innerText = discountValue;
}
document.getElementById('total').innerText = total;
}


function reload(){
    location.reload();
}

