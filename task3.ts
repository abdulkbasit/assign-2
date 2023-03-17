function calculateDiscountAmount(productPrice: number, discountPercentage: number): number {
    if (discountPercentage >= 50) {
      console.log("Error: Invalid discount percentage");
      return 0;
    } else {
      const discountAmount = productPrice * (discountPercentage / 100);
      const finalPrice = productPrice - discountAmount;
      console.log(`Original price: $${productPrice}`);
      console.log(`Discount percentage: ${discountPercentage}%`);
      console.log(`Discount amount: $${discountAmount}`);
      console.log(`Final price: $${finalPrice}`);
      return discountAmount;
    }
  }
  
  // Test the function
  calculateDiscountAmount(100, 25); // Expected output: discount amount of $25 and final price of $75
  calculateDiscountAmount(50, 40); // Expected output: discount amount of $20 and final price of $30
  calculateDiscountAmount(200, 70); // Expected output: error message and discount amount of $0
  