function Pricing() {
  const { currentUser, isPremium } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();

  const handleUpgrade = () => {
    if (!currentUser) {
      // Redirect to login with redirect param
      navigate('/login?redirect=pricing');
      return;
    }

    // Initialize Paddle checkout
    // This would be integrated with the actual Paddle SDK in production
    window.openPaddleCheckout();
  };

  const handleFreeSignup = () => {
    if (!currentUser) {
      navigate('/signup');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" data-id="v4qqea9pm" data-path="components/Pricing.js">
      <div className="container mx-auto px-4" data-id="hnkb54i2f" data-path="components/Pricing.js">
        <div className="text-center mb-16" data-id="7c8md1z1x" data-path="components/Pricing.js">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="9o6aqx3yu" data-path="components/Pricing.js">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="rut6dnqmd" data-path="components/Pricing.js">
            Choose the plan that fits your needs. Start with our free plan and upgrade anytime.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" data-id="e8d0bbcbq" data-path="components/Pricing.js">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden" data-id="4566spkrq" data-path="components/Pricing.js">
            <div className="p-8" data-id="qtr380x1a" data-path="components/Pricing.js">
              <h3 className="text-2xl font-bold text-gray-800 mb-4" data-id="aya448qsy" data-path="components/Pricing.js">Free Plan</h3>
              <div className="flex items-baseline mb-6" data-id="n5m1dsd69" data-path="components/Pricing.js">
                <span className="text-4xl font-extrabold text-gray-900" data-id="e4522ndtx" data-path="components/Pricing.js">$0</span>
                <span className="text-gray-500 ml-1" data-id="oanrstadz" data-path="components/Pricing.js">/month</span>
              </div>
              <p className="text-gray-600 mb-8" data-id="nwcjgzcqn" data-path="components/Pricing.js">
                Perfect for individuals and small projects
              </p>
              
              <ul className="space-y-4 mb-10" data-id="60s8imda5" data-path="components/Pricing.js">
                <li className="flex items-start" data-id="gyyk95gpr" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="hi7mmuf49" data-path="components/Pricing.js"></i>
                  <span data-id="pif6f6nsw" data-path="components/Pricing.js">Up to 50 URLs per month</span>
                </li>
                <li className="flex items-start" data-id="eoioh6fqh" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="h5iws6xyz" data-path="components/Pricing.js"></i>
                  <span data-id="vfvh9548l" data-path="components/Pricing.js">Basic click analytics</span>
                </li>
                <li className="flex items-start" data-id="jxvjz32k4" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="vr3eu1d9s" data-path="components/Pricing.js"></i>
                  <span data-id="wnhfjid5z" data-path="components/Pricing.js">URLs expire after 30 days</span>
                </li>
                <li className="flex items-start text-gray-400" data-id="ub2k81olf" data-path="components/Pricing.js">
                  <i className="fas fa-times text-red-400 mt-1 mr-3" data-id="mzmx3oufc" data-path="components/Pricing.js"></i>
                  <span data-id="fhsiymotw" data-path="components/Pricing.js">No custom URLs</span>
                </li>
                <li className="flex items-start text-gray-400" data-id="q30p2ya1c" data-path="components/Pricing.js">
                  <i className="fas fa-times text-red-400 mt-1 mr-3" data-id="8bp6v44fv" data-path="components/Pricing.js"></i>
                  <span data-id="nce8npbs4" data-path="components/Pricing.js">No QR code generation</span>
                </li>
                <li className="flex items-start text-gray-400" data-id="v3n62c2mi" data-path="components/Pricing.js">
                  <i className="fas fa-times text-red-400 mt-1 mr-3" data-id="2e62mz3je" data-path="components/Pricing.js"></i>
                  <span data-id="zd8s6hqwk" data-path="components/Pricing.js">No advanced analytics</span>
                </li>
              </ul>
              
              <button
                onClick={handleFreeSignup}
                className="w-full block text-center py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors" data-id="d8t8ie7md" data-path="components/Pricing.js">

                {currentUser ? 'Access Dashboard' : 'Sign Up for Free'}
              </button>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative" data-id="w2h9l4nrc" data-path="components/Pricing.js">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg font-medium text-sm" data-id="t2snf7luo" data-path="components/Pricing.js">
              RECOMMENDED
            </div>
            <div className="p-8" data-id="pm29bsz39" data-path="components/Pricing.js">
              <h3 className="text-2xl font-bold text-gray-800 mb-4" data-id="4tn2oq10k" data-path="components/Pricing.js">Premium Plan</h3>
              <div className="flex items-baseline mb-6" data-id="80py609j3" data-path="components/Pricing.js">
                <span className="text-4xl font-extrabold text-gray-900" data-id="pqm6e8p06" data-path="components/Pricing.js">$9.99</span>
                <span className="text-gray-500 ml-1" data-id="ga1vnb0gb" data-path="components/Pricing.js">/month</span>
              </div>
              <p className="text-gray-600 mb-8" data-id="sry8a9sjn" data-path="components/Pricing.js">
                For professionals and businesses
              </p>
              
              <ul className="space-y-4 mb-10" data-id="e3dwtyzba" data-path="components/Pricing.js">
                <li className="flex items-start" data-id="rd9sa6apr" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="ye583gksm" data-path="components/Pricing.js"></i>
                  <span data-id="9py7f70s1" data-path="components/Pricing.js">Unlimited URLs</span>
                </li>
                <li className="flex items-start" data-id="thwti2a33" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="fkv7fhufn" data-path="components/Pricing.js"></i>
                  <span data-id="ws4g35671" data-path="components/Pricing.js">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start" data-id="z72jm0akr" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="0ifo5s7d4" data-path="components/Pricing.js"></i>
                  <span data-id="gpaz98bgv" data-path="components/Pricing.js">URLs never expire</span>
                </li>
                <li className="flex items-start" data-id="20wqgwr9q" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="41bzik3d0" data-path="components/Pricing.js"></i>
                  <span data-id="bp452n3hz" data-path="components/Pricing.js">Custom branded URLs</span>
                </li>
                <li className="flex items-start" data-id="gsafh6jo1" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="qih9pjnn4" data-path="components/Pricing.js"></i>
                  <span data-id="oexa115up" data-path="components/Pricing.js">QR code generation</span>
                </li>
                <li className="flex items-start" data-id="rvztqiet8" data-path="components/Pricing.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="xhrvti2fr" data-path="components/Pricing.js"></i>
                  <span data-id="4cgc4vs6j" data-path="components/Pricing.js">Priority support</span>
                </li>
              </ul>
              
              <button
                onClick={handleUpgrade}
                className={`w-full block text-center py-3 px-4 ${
                isPremium ?
                'bg-green-600 hover:bg-green-700 cursor-default' :
                'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-lg transition-colors`
                }
                disabled={isPremium} data-id="xaazmabf7" data-path="components/Pricing.js">

                {isPremium ? 'Currently Subscribed' : 'Upgrade to Premium'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center" data-id="pk2eqsepx" data-path="components/Pricing.js">
          <h3 className="text-xl font-semibold text-gray-800 mb-4" data-id="6jrwbyrne" data-path="components/Pricing.js">
            Need a custom enterprise plan?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-id="6gbuceog9" data-path="components/Pricing.js">
            We offer customized solutions for enterprises with specific requirements. 
            Contact our sales team to discuss your needs.
          </p>
          <a
            href="mailto:enterprise@quicklink.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" data-id="anv6d4jov" data-path="components/Pricing.js">

            Contact Sales
            <i className="fas fa-arrow-right ml-2" data-id="gx0c12ui1" data-path="components/Pricing.js"></i>
          </a>
        </div>
      </div>
    </section>);

}