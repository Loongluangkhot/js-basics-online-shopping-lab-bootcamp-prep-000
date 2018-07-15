var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 function getRandomIntInclusive(min, max) {
   min = Math.ceil(min)
   max = Math.floor(max)
   return Math.floor(Math.random() * (max - min + 1)) + min
 }
 var itemObject = {itemName: item, itemPrice: getRandomIntInclusive(1,100)}
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var cartStr = ''
    for (var i = 0; i < cart.length; i++) {
      cartStr = `${cartStr}${cart[i]['itemName']} at \$${cart[i]['itemPrice']}, and `
    }
    cartStr = `In your cart, you have ${cartStr.slice(0, (cartStr.length - 6))}.`
    return cartStr
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
