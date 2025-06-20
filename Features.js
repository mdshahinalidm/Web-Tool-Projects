function Features() {
  const features = [
  {
    icon: "fa-link",
    title: "Quick URL Shortening",
    description: "Generate short links instantly with our lightning-fast URL shortening engine. No more sharing long, complex URLs."
  },
  {
    icon: "fa-chart-line",
    title: "Detailed Analytics",
    description: "Track clicks, monitor traffic sources, and gain insights into geographical distribution of your audience."
  },
  {
    icon: "fa-edit",
    title: "Custom URLs",
    description: "Create memorable and branded short links with custom aliases that reflect your brand or content."
  },
  {
    icon: "fa-qrcode",
    title: "QR Code Generation",
    description: "Generate QR codes for your shortened URLs to enable easy sharing in print materials and physical locations."
  },
  {
    icon: "fa-shield-alt",
    title: "Secure & Reliable",
    description: "Enterprise-grade security ensures your links remain operational 24/7 with 99.9% uptime guarantee."
  },
  {
    icon: "fa-mobile-alt",
    title: "Mobile Friendly",
    description: "Responsive design provides a seamless URL shortening experience across all your devices."
  }];


  return (
    <section id="features" className="py-20 bg-gray-50" data-id="wbfw7la58" data-path="components/Features.js">
      <div className="container mx-auto px-4" data-id="i9yl97nge" data-path="components/Features.js">
        <div className="text-center mb-16" data-id="fyi86sssg" data-path="components/Features.js">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="vcyfgqayu" data-path="components/Features.js">
            Powerful URL Shortening Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="mzcr32h0h" data-path="components/Features.js">
            Everything you need to simplify your links and enhance your online presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="gbcnbm9cw" data-path="components/Features.js">
          {features.map((feature, index) =>
          <div
            key={index}
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow" data-id="5mewnufqf" data-path="components/Features.js">

              <div className="text-blue-500 mb-5" data-id="plpsofvy2" data-path="components/Features.js">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full" data-id="o8xygcdq6" data-path="components/Features.js">
                  <i className={`fas ${feature.icon} text-2xl`} data-id="82p55dsq4" data-path="components/Features.js"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3" data-id="lkp9c46un" data-path="components/Features.js">
                {feature.title}
              </h3>
              <p className="text-gray-600" data-id="eytdk6tv3" data-path="components/Features.js">
                {feature.description}
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center" data-id="3ff7zsy89" data-path="components/Features.js">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6" data-id="0ophlxpq1" data-path="components/Features.js">
            Ready to start shortening URLs?
          </h3>
          <ReactRouterDOM.Link
            to="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">

            Get Started Now
            <i className="fas fa-arrow-right ml-2" data-id="81jyogokk" data-path="components/Features.js"></i>
          </ReactRouterDOM.Link>
        </div>
      </div>
    </section>);

}