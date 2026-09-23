function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVIP = false) {
  let totalPrice = quantity * basePrice;

  if (quantity >= 5) {
    totalPrice = totalPrice * 0.90;
  }

  if (isVIP) {
    totalPrice = totalPrice * 1.50;
  }

  totalPrice = totalPrice - 10;

  return Math.round(totalPrice);
}

module.exports = { isValidQuantity, calculateTicketPrice };
