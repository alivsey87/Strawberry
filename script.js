// an array that saves all the subscribers
const subList = [];

// an array that acts as a "cart"
const cart = [];

// adding the email to the array that saves the subscribers
const addToSubList = (email) => {
  if (hasSubscribed(email)) console.log("You already subscribed!");
  else subList.push(email);
};

// checking to see if someone already has subscribed
const hasSubscribed = (email) => {
  if (subList.includes(email)) return true;
  else return false;
};

// if there is an unsubscribe implemented
const unSubscribe = (email) => {
  if (subList.indexOf(email) !== -1) subList.splice(subList.indexOf(email), 1);
  else console.log("You are not subscribed!");
};

// add item object to cart
const addToCart = (item) => {
  cart.push(item.price);
};

// delete an item from cart
const removeFromCart = (item) => {
    cart.splice(cart.indexOf(item), 1)
}

// return total price of items in cart
const getTotalPrice = () => {
  let price = 0;
  for (const item of cart) {
    price += item.price;
  }
  return price;
};
