function addToCart(itemId) {
    // Display the form
    document.getElementById('ipForm').style.display = 'block';

    // Submit form handler
    document.getElementById('addToCartForm').onsubmit = function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the IP address entered by the user
      var ipAddress = document.getElementById('ipAddress').value;

      // Perform your logic to add the item to the cart using the IP address
      // For demonstration purposes, you can log the IP address and item ID to the console
      console.log("Item ID:", itemId);
      console.log("IP Address:", ipAddress);

      // Clear the form
      document.getElementById('ipAddress').value = '';

      // Hide the form after submission
      document.getElementById('ipForm').style.display = 'none';
    };
  }