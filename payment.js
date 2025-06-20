// Payment utility functions for Paddle integration

// Initialize Paddle with your Paddle vendor ID
function initializePaddle(vendorId = 'your-vendor-id') {
  if (typeof window !== 'undefined' && window.Paddle) {
    window.Paddle.Setup({ vendor: vendorId });
  }
}

// Open Paddle checkout for subscription
function openPaddleCheckout(planId, user, successCallback, closeCallback) {
  if (typeof window === 'undefined' || !window.Paddle) {
    console.error('Paddle is not initialized');
    return;
  }

  const checkoutOptions = {
    product: planId,
    email: user.email,
    successCallback,
    closeCallback,
    passthrough: JSON.stringify({
      userId: user.id
    })
  };

  window.Paddle.Checkout.open(checkoutOptions);
}

// Handle subscription creation webhook (server-side function)
// This would be implemented on your backend
function handleSubscriptionCreated(webhookData) {
  // Verify the webhook signature
  // Update user to premium
  // Store subscription details
  console.log('Subscription created:', webhookData);
}

// Handle subscription cancelled webhook (server-side function)
// This would be implemented on your backend
function handleSubscriptionCancelled(webhookData) {
  // Verify the webhook signature
  // Update user's subscription status
  console.log('Subscription cancelled:', webhookData);
}

// Handle subscription payment succeeded webhook (server-side function)
// This would be implemented on your backend
function handlePaymentSucceeded(webhookData) {
  // Verify the webhook signature
  // Update subscription payment status
  console.log('Payment succeeded:', webhookData);
}

// Handle subscription payment failed webhook (server-side function)
// This would be implemented on your backend
function handlePaymentFailed(webhookData) {
  // Verify the webhook signature
  // Update subscription payment status
  // Notify user
  console.log('Payment failed:', webhookData);
}

// Paddle checkout for demo purposes (client-side only)
function initPaddleDemoCheckout() {
  // For demo purposes only - this simulates Paddle checkout
  window.openPaddleCheckout = () => {
    if (confirm('This would open the Paddle checkout in a real application. For demo purposes, would you like to upgrade to premium?')) {
      // Get current user
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        // Update user to premium
        user.accountType = 'premium';
        user.premiumSince = new Date().toISOString();
        localStorage.setItem('user', JSON.stringify(user));

        // Reload to update UI
        window.location.reload();
      }
    }
  };
}

// Initialize demo checkout on load
if (typeof window !== 'undefined') {
  initPaddleDemoCheckout();
}