var cartcache = [];
var $btnCart = document.getElementById('js-btn-cart');
var $cartBox = document.getElementById('js-cart-box');
var $btnBuy = document.getElementsByClassName('js-btn-buy');
var $total = document.getElementById('js-total');
var $cartQuantity = document.getElementById('cart-quantity');
for(var item of $btnBuy) {
  item.addEventListener('click', function() {
    actionDelete();
    var cart = {
      name : this.getAttribute('data-name'),
      quantity: parseInt(this.getAttribute('data-quantity')),
      price: parseInt(this.getAttribute('data-price')),
    }
    if(cartcache.length === 0) {
      cartcache.push(cart);
      addData(cart.name, cart.quantity, cart.price);
      document.getElementById('js-total').innerHTML = totalPrice();
    } else {
      var exist_once = 0;
      for(var i = 0, $length = cartcache.length; i < $length; i++) {
        if(cartcache[i].name === cart.name) {
          exist_once++;
          cartcache[i].quantity++;
          $cartBox.rows[i+1].cells[1].innerHTML = cartcache[i].quantity;
        }
      }
      if(exist_once === 0) {
        cartcache.push(cart);
        addData(cart.name, cart.quantity, cart.price);
      }
    }
    $cartQuantity.innerHTML = cartcache.length;
    $total.innerHTML = 'Total: '+totalPrice();
  });
}
$btnCart.addEventListener('click', function() {
  display();
  actionDelete();
});
function display() {
  if ($cartBox.getAttribute('id') == 'js-cart-box' && cartcache.length > 0) {
    $cartBox.setAttribute('id', 'js-cart-box-active');
    $total.setAttribute('id', 'js-total-active');
  } else {
    $cartBox.setAttribute('id', 'js-cart-box');
    $total.setAttribute('id', 'js-total');
  }
}
function addData(name, quantity, price) {
  var tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td></td>
    <td><button class="btn btn-warning js-btn-delete" onclick="confirm('Are you sure?')" data-name="${name}">Delete</button></td>
    `;
  $cartBox.appendChild(tr);
}
function actionDelete() {
  var $btnDelete = document.getElementsByClassName('js-btn-delete');
  for(var item of $btnDelete){
    item.addEventListener('click', function() {
      var cartName = this.getAttribute('data-name');
      function check(check) {
        return check.name === cartName;
      }
      var index = cartcache.findIndex(check);
      $cartBox.removeChild(this.parentElement.parentElement);
      cartcache.splice(index, 1);
      $total.innerHTML = 'Total: '+ totalPrice();
      $cartQuantity.innerHTML = cartcache.length;
      if(cartcache.length === 0) {
        display();
      }
    });
  }
}
function totalPrice() {
  var total = 0;
  for(var i = 0, length = cartcache.length; i < length; i++) {
    total += cartcache[i].price * cartcache[i].quantity;
  }
  return total + '$';
}
