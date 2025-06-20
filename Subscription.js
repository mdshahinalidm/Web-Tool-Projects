function Subscription() {
  const { currentUser, isPremium, upgradeToPremium } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = React.useState(false);

  // Mock subscription data for UI
  const subscriptionData = React.useMemo(() => {
    if (!currentUser) return null;

    if (isPremium) {
      return {
        plan: 'Premium',
        status: 'active',
        renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
        paymentMethod: 'Visa ending in 4242',
        price: '$9.99/month'
      };
    }

    return {
      plan: 'Free',
      status: 'active',
      features: [
      'Up to 50 URLs per month',
      'Basic click analytics',
      'URLs expire after 30 days']

    };
  }, [currentUser, isPremium]);

  // Function to handle upgrade to premium
  const handleUpgrade = async () => {
    try {
      setLoading(true);
      setError(null);

      // Initialize Paddle checkout
      // This would be integrated with the actual Paddle SDK in production
      // For the demo, we'll simulate a successful upgrade

      const result = await upgradeToPremium();

      if (!result.success) {
        setError(result.error || 'Failed to upgrade to premium');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during the upgrade process');
      console.error('Error upgrading to premium:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to simulate cancelling subscription
  const handleCancelSubscription = () => {
    // In a real app, this would make an API call to cancel the subscription
    setShowCancelConfirm(false);
  };

  if (!currentUser) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden" data-id="vara04vz0" data-path="components/dashboard/Subscription.js">
      <div className="px-6 py-5 border-b border-gray-200" data-id="bbd51upcn" data-path="components/dashboard/Subscription.js">
        <h3 className="text-lg font-medium text-gray-900" data-id="b94jk3xvi" data-path="components/dashboard/Subscription.js">Subscription</h3>
        <p className="mt-1 text-sm text-gray-500" data-id="6iwcsla4f" data-path="components/dashboard/Subscription.js">
          Manage your subscription plan and payment details
        </p>
      </div>
      
      <div className="p-6" data-id="906hwuph0" data-path="components/dashboard/Subscription.js">
        {error &&
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded" data-id="aspbt0pdo" data-path="components/dashboard/Subscription.js">
            <i className="fas fa-exclamation-circle mr-2" data-id="dqsccve1k" data-path="components/dashboard/Subscription.js"></i>
            {error}
          </div>
        }
        
        <div className="mb-8" data-id="wob994008" data-path="components/dashboard/Subscription.js">
          <div className="flex items-center justify-between" data-id="7uu16bdzu" data-path="components/dashboard/Subscription.js">
            <div data-id="g2annb3s0" data-path="components/dashboard/Subscription.js">
              <h4 className="text-md font-medium text-gray-900 mb-1" data-id="t1dlyucqg" data-path="components/dashboard/Subscription.js">Current Plan</h4>
              <div className="flex items-center" data-id="3mxyxlnts" data-path="components/dashboard/Subscription.js">
                <span className={`text-xl font-bold ${isPremium ? 'text-blue-600' : 'text-gray-700'}`} data-id="qesavj3ik" data-path="components/dashboard/Subscription.js">
                  {subscriptionData.plan}
                </span>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                isPremium ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`
                } data-id="hoyatrjjz" data-path="components/dashboard/Subscription.js">
                  {subscriptionData.status}
                </span>
              </div>
            </div>
            
            {!isPremium &&
            <button
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading ? 'opacity-75 cursor-not-allowed' : ''}`
              }
              onClick={handleUpgrade}
              disabled={loading} data-id="wq8jp6l9r" data-path="components/dashboard/Subscription.js">

                {loading ?
              <>
                    <i className="fas fa-spinner fa-spin mr-2" data-id="kuy5vu6vj" data-path="components/dashboard/Subscription.js"></i>
                    Upgrading...
                  </> :

              <>
                    Upgrade to Premium
                  </>
              }
              </button>
            }
          </div>
        </div>
        
        {isPremium ?
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200" data-id="ohnoibkuo" data-path="components/dashboard/Subscription.js">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="y97odp8ix" data-path="components/dashboard/Subscription.js">
              <div data-id="u73nr7qn0" data-path="components/dashboard/Subscription.js">
                <h5 className="text-sm font-medium text-gray-500 mb-1" data-id="6h925qibt" data-path="components/dashboard/Subscription.js">Payment Method</h5>
                <p className="text-gray-900" data-id="vr7ma956o" data-path="components/dashboard/Subscription.js">{subscriptionData.paymentMethod}</p>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-800" data-id="5nl5rrk8f" data-path="components/dashboard/Subscription.js">
                  Update payment method
                </button>
              </div>
              
              <div data-id="fy74nyu1e" data-path="components/dashboard/Subscription.js">
                <h5 className="text-sm font-medium text-gray-500 mb-1" data-id="7a7cr64hv" data-path="components/dashboard/Subscription.js">Next Billing Date</h5>
                <p className="text-gray-900" data-id="kextnav2p" data-path="components/dashboard/Subscription.js">{subscriptionData.renewalDate}</p>
                <p className="text-sm text-gray-500 mt-1" data-id="cbbc74em2" data-path="components/dashboard/Subscription.js">{subscriptionData.price}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6" data-id="shn9fbl4t" data-path="components/dashboard/Subscription.js">
              <button
              className="text-red-600 hover:text-red-800 text-sm font-medium"
              onClick={() => setShowCancelConfirm(true)} data-id="nfqacmvpp" data-path="components/dashboard/Subscription.js">

                Cancel Subscription
              </button>
            </div>
          </div> :

        <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200" data-id="78o7b1azz" data-path="components/dashboard/Subscription.js">
            <h4 className="text-md font-medium text-gray-900 mb-4" data-id="w5eaw04zh" data-path="components/dashboard/Subscription.js">Free Plan Features</h4>
            <ul className="space-y-2" data-id="xl0z43n3m" data-path="components/dashboard/Subscription.js">
              {subscriptionData.features.map((feature, index) =>
            <li key={index} className="flex items-start" data-id="qcyro2nne" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="iyi500lj9" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="gionivuwu" data-path="components/dashboard/Subscription.js">{feature}</span>
                </li>
            )}
            </ul>
          </div>
        }
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200" data-id="nd6488jls" data-path="components/dashboard/Subscription.js">
          <div className="flex items-start" data-id="r64yzio8i" data-path="components/dashboard/Subscription.js">
            <div className="flex-shrink-0" data-id="az6s38rxt" data-path="components/dashboard/Subscription.js">
              <i className="fas fa-crown text-yellow-500 text-xl" data-id="q7aoooefs" data-path="components/dashboard/Subscription.js"></i>
            </div>
            <div className="ml-3" data-id="a9hx93spa" data-path="components/dashboard/Subscription.js">
              <h4 className="text-md font-medium text-gray-900 mb-1" data-id="ppj44me2i" data-path="components/dashboard/Subscription.js">
                Premium Plan Benefits
              </h4>
              <ul className="space-y-2 mt-3" data-id="paildzsil" data-path="components/dashboard/Subscription.js">
                <li className="flex items-start" data-id="wgvir8o9z" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="9ufu3yevi" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="qy97h3e8l" data-path="components/dashboard/Subscription.js">Unlimited URLs</span>
                </li>
                <li className="flex items-start" data-id="u284ydydr" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="h131dlztl" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="wcfgc5tcw" data-path="components/dashboard/Subscription.js">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start" data-id="sgvj5ndbi" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="23g7wy4wj" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="lgxwawbqg" data-path="components/dashboard/Subscription.js">URLs never expire</span>
                </li>
                <li className="flex items-start" data-id="5tejn2vzn" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="5fu9zg42i" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="reb6vmzv6" data-path="components/dashboard/Subscription.js">Custom branded URLs</span>
                </li>
                <li className="flex items-start" data-id="bamjin1wu" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="vgdjvxp1x" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="s639kx96k" data-path="components/dashboard/Subscription.js">QR code generation</span>
                </li>
                <li className="flex items-start" data-id="1s5xt9smo" data-path="components/dashboard/Subscription.js">
                  <i className="fas fa-check text-green-500 mt-1 mr-3" data-id="ledorbupq" data-path="components/dashboard/Subscription.js"></i>
                  <span data-id="52ctoyea4" data-path="components/dashboard/Subscription.js">Priority support</span>
                </li>
              </ul>
              
              {!isPremium &&
              <div className="mt-4" data-id="zwny6f0cj" data-path="components/dashboard/Subscription.js">
                  <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleUpgrade} data-id="at73f2y32" data-path="components/dashboard/Subscription.js">

                    Upgrade Now for $9.99/month
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      
      {/* Cancel Subscription Confirmation Modal */}
      {showCancelConfirm &&
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50" data-id="pihvliwfk" data-path="components/dashboard/Subscription.js">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden" data-id="qbi58uct2" data-path="components/dashboard/Subscription.js">
            <div className="p-6" data-id="96ppoccu7" data-path="components/dashboard/Subscription.js">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4" data-id="xlxfsx7kc" data-path="components/dashboard/Subscription.js">
                <i className="fas fa-exclamation-triangle text-red-600" data-id="c1fjr6qdn" data-path="components/dashboard/Subscription.js"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2" data-id="ng4libdjh" data-path="components/dashboard/Subscription.js">
                Cancel Subscription
              </h3>
              <p className="text-gray-500 text-center mb-6" data-id="7azc5p6k4" data-path="components/dashboard/Subscription.js">
                Are you sure you want to cancel your premium subscription? You'll lose access to premium features at the end of your current billing period.
              </p>
              <div className="flex justify-end space-x-3" data-id="8o37pzdp4" data-path="components/dashboard/Subscription.js">
                <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                onClick={() => setShowCancelConfirm(false)} data-id="ikeaitqj6" data-path="components/dashboard/Subscription.js">

                  Keep Subscription
                </button>
                <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={handleCancelSubscription} data-id="sswc1uwmn" data-path="components/dashboard/Subscription.js">

                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}