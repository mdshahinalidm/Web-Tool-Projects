// API Utilities

// Function to validate URL format
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Function to generate a random code for URL shortening
function generateRandomCode(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to store URL data in localStorage (for demo purposes)
function storeUrl(urlData) {
  const urls = JSON.parse(localStorage.getItem('urls') || '[]');
  urls.push(urlData);
  localStorage.setItem('urls', JSON.stringify(urls));
}

// Function to get all URLs from localStorage (for demo purposes)
function getUrls() {
  return JSON.parse(localStorage.getItem('urls') || '[]');
}

// Function to get a URL by its short code (for demo purposes)
function getUrlByShortCode(shortCode) {
  const urls = getUrls();
  return urls.find((url) => url.shortCode === shortCode || url.customAlias === shortCode);
}

// Function to check if a custom alias is available (for demo purposes)
function isAliasAvailable(alias) {
  const urls = getUrls();
  return !urls.some((url) => url.customAlias === alias || url.shortCode === alias);
}

// Function to increment click count for a URL (for demo purposes)
function incrementUrlClicks(shortCode) {
  const urls = getUrls();
  const urlIndex = urls.findIndex((url) => url.shortCode === shortCode || url.customAlias === shortCode);

  if (urlIndex !== -1) {
    urls[urlIndex].clicks = (urls[urlIndex].clicks || 0) + 1;
    localStorage.setItem('urls', JSON.stringify(urls));
    return urls[urlIndex];
  }

  return null;
}

// Function to delete a URL (for demo purposes)
function deleteUrl(urlId) {
  const urls = getUrls();
  const filteredUrls = urls.filter((url) => url.id !== urlId);
  localStorage.setItem('urls', JSON.stringify(filteredUrls));
}

// Function to handle URL redirection tracking (for demo purposes)
function trackRedirect(shortCode, referrer = null) {
  const url = incrementUrlClicks(shortCode);

  if (!url) return null;

  // In a real application, this would also track:
  // - Referrer
  // - Browser info
  // - Device info
  // - Location
  // - Timestamp

  return url.originalUrl;
}

// Simulate API request delay (for demo purposes)
function simulateDelay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Initialize Paddle for payments (for demo purposes)
function initializePaddle(vendorId = '12345') {
  // In a real application, this would initialize the Paddle SDK
  window.openPaddleCheckout = () => {
    // Display a mock checkout process
    alert('This would open the Paddle checkout process in a real application.');

    // For demo purposes, simulate a successful upgrade after 2 seconds
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        user.accountType = 'premium';
        user.premiumSince = new Date().toISOString();
        localStorage.setItem('user', JSON.stringify(user));

        // Reload the page to reflect changes
        window.location.reload();
      }
    }, 2000);
  };
}