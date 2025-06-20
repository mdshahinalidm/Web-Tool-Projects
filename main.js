// Initialize the application
function init() {
  // Initialize Paddle for payment processing
  initPaddleDemoCheckout();

  // Render the application
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ReactRouterDOM.BrowserRouter>
      <App />
    </ReactRouterDOM.BrowserRouter>
  );
}

// Run initialization
init();