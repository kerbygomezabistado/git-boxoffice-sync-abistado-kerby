function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVIP = false) {
  let totalPrice = quantity * basePrice;

  if (isVIP) {
    totalPrice = totalPrice * 1.50;
  }

  return Math.floor(totalPrice);
}

module.exports = { isValidQuantity, calculateTicketPrice };
