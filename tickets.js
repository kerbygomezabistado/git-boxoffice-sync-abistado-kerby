function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let totalPrice = quantity * basePrice;

  if (quantity >= 5) {
    totalPrice = totalPrice * 0.90;
  }

  return Math.floor(totalPrice);
}

module.exports = { isValidQuantity, calculateTicketPrice };
