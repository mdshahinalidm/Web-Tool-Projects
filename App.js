function App() {
  return (
    <AuthProvider>
      <UrlProvider>
        <div className="flex flex-col min-h-screen" data-id="vf1exjq0x" data-path="App.js">
          <Header />
          <main className="flex-grow" data-id="2kds98f0z" data-path="App.js">
            <React.Suspense fallback={
            <div className="flex items-center justify-center h-screen" data-id="1o4vgg28z" data-path="App.js">
                <div className="loader" data-id="736jn2b0b" data-path="App.js"></div>
                <span className="ml-2" data-id="k6cannh2c" data-path="App.js">Loading...</span>
              </div>
            }>
              <ReactRouterDOM.Routes>
                <ReactRouterDOM.Route path="/" element={<Home />} />
                <ReactRouterDOM.Route path="/dashboard" element={<Dashboard />} />
                <ReactRouterDOM.Route path="/profile" element={<ProfilePage />} />
                <ReactRouterDOM.Route path="/pricing" element={<PricingPage />} />
                <ReactRouterDOM.Route path="*" element={<NotFound />} />
              </ReactRouterDOM.Routes>
            </React.Suspense>
          </main>
          <Footer />
        </div>
      </UrlProvider>
    </AuthProvider>);

}