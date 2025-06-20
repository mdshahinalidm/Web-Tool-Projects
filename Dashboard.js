function Dashboard() {
  const { currentUser, isPremium } = useAuth();
  const [activeTab, setActiveTab] = React.useState('links');
  const navigate = ReactRouterDOM.useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!currentUser) {
      navigate('/login?redirect=dashboard');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return (
      <div className="container mx-auto px-4 py-10 text-center" data-id="pp9y4034u" data-path="pages/Dashboard.js">
        <div className="loader mx-auto" data-id="zmiubjnxn" data-path="pages/Dashboard.js"></div>
        <p className="mt-4 text-gray-500" data-id="bvthkv76z" data-path="pages/Dashboard.js">Loading your dashboard...</p>
      </div>);

  }

  return (
    <div className="bg-gray-50 min-h-screen" data-id="uxa6emgmv" data-path="pages/Dashboard.js">
      <div className="container mx-auto px-4 py-8" data-id="8anphzg28" data-path="pages/Dashboard.js">
        <div className="mb-8" data-id="pushmr2kp" data-path="pages/Dashboard.js">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" data-id="38gb55i54" data-path="pages/Dashboard.js">
            Dashboard
          </h1>
          <p className="text-gray-600" data-id="gqir39ccc" data-path="pages/Dashboard.js">
            Manage your URLs, view analytics, and update your profile
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-id="uuzii90gc" data-path="pages/Dashboard.js">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1" data-id="yfjdc533d" data-path="pages/Dashboard.js">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden" data-id="019bh6jnu" data-path="pages/Dashboard.js">
              {/* User Profile Summary */}
              <div className="p-4 border-b border-gray-200" data-id="jfu4o54rd" data-path="pages/Dashboard.js">
                <div className="flex items-center" data-id="w8m9e8v6l" data-path="pages/Dashboard.js">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3 overflow-hidden" data-id="2vcmytnrt" data-path="pages/Dashboard.js">
                    {currentUser?.picture ?
                    <img
                      src={currentUser.picture}
                      alt={currentUser.name}
                      className="w-full h-full object-cover" data-id="gn9hv79zt" data-path="pages/Dashboard.js" /> :


                    currentUser?.name?.charAt(0) || <i className="fas fa-user" data-id="ofpinokez" data-path="pages/Dashboard.js"></i>
                    }
                  </div>
                  <div data-id="kodkc03dz" data-path="pages/Dashboard.js">
                    <p className="font-medium text-gray-900 truncate max-w-[150px]" data-id="z9k2i1shw" data-path="pages/Dashboard.js">
                      {currentUser.name}
                    </p>
                    <div className="flex items-center" data-id="5lh5d4lv3" data-path="pages/Dashboard.js">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                      isPremium ?
                      'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'}`
                      } data-id="i0e1fxvrd" data-path="pages/Dashboard.js">
                        {isPremium ? 'Premium' : 'Free'}
                      </span>
                      {!isPremium &&
                      <ReactRouterDOM.Link
                        to="/pricing"
                        className="ml-2 text-xs text-blue-600 hover:text-blue-800">

                          Upgrade
                        </ReactRouterDOM.Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Links */}
              <nav className="p-4" data-id="v1eafdp83" data-path="pages/Dashboard.js">
                <ul className="space-y-2" data-id="8ygz8reqh" data-path="pages/Dashboard.js">
                  <li data-id="vo9251d9z" data-path="pages/Dashboard.js">
                    <button
                      className={`w-full text-left py-2 px-3 rounded-md flex items-center ${
                      activeTab === 'links' ?
                      'bg-blue-50 text-blue-700' :
                      'text-gray-700 hover:bg-gray-50'}`
                      }
                      onClick={() => setActiveTab('links')} data-id="5gha701de" data-path="pages/Dashboard.js">

                      <i className={`fas fa-link mr-3 ${
                      activeTab === 'links' ? 'text-blue-700' : 'text-gray-500'}`
                      } data-id="yiz74van4" data-path="pages/Dashboard.js"></i>
                      My Links
                    </button>
                  </li>
                  <li data-id="3bjyicr9g" data-path="pages/Dashboard.js">
                    <button
                      className={`w-full text-left py-2 px-3 rounded-md flex items-center ${
                      activeTab === 'create' ?
                      'bg-blue-50 text-blue-700' :
                      'text-gray-700 hover:bg-gray-50'}`
                      }
                      onClick={() => setActiveTab('create')} data-id="3xvidqndu" data-path="pages/Dashboard.js">

                      <i className={`fas fa-plus mr-3 ${
                      activeTab === 'create' ? 'text-blue-700' : 'text-gray-500'}`
                      } data-id="668mh94uj" data-path="pages/Dashboard.js"></i>
                      Create New Link
                    </button>
                  </li>
                  <li data-id="myznjuslv" data-path="pages/Dashboard.js">
                    <button
                      className={`w-full text-left py-2 px-3 rounded-md flex items-center ${
                      activeTab === 'subscription' ?
                      'bg-blue-50 text-blue-700' :
                      'text-gray-700 hover:bg-gray-50'}`
                      }
                      onClick={() => setActiveTab('subscription')} data-id="0g3785qnb" data-path="pages/Dashboard.js">

                      <i className={`fas fa-credit-card mr-3 ${
                      activeTab === 'subscription' ? 'text-blue-700' : 'text-gray-500'}`
                      } data-id="zm8ijyidt" data-path="pages/Dashboard.js"></i>
                      Subscription
                    </button>
                  </li>
                  <li data-id="r6wkcb9a3" data-path="pages/Dashboard.js">
                    <button
                      className={`w-full text-left py-2 px-3 rounded-md flex items-center ${
                      activeTab === 'profile' ?
                      'bg-blue-50 text-blue-700' :
                      'text-gray-700 hover:bg-gray-50'}`
                      }
                      onClick={() => setActiveTab('profile')} data-id="wv6enzuy7" data-path="pages/Dashboard.js">

                      <i className={`fas fa-user mr-3 ${
                      activeTab === 'profile' ? 'text-blue-700' : 'text-gray-500'}`
                      } data-id="pkmxkk7g9" data-path="pages/Dashboard.js"></i>
                      Profile Settings
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4" data-id="nucigo7e0" data-path="pages/Dashboard.js">
              <h3 className="text-sm font-medium text-gray-900 mb-3" data-id="z5ky46urp" data-path="pages/Dashboard.js">Quick Actions</h3>
              <ul className="space-y-2" data-id="k9pme27mu" data-path="pages/Dashboard.js">
                <li data-id="2p9igx1ir" data-path="pages/Dashboard.js">
                  <ReactRouterDOM.Link
                    to="/"
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600">

                    <i className="fas fa-home mr-2" data-id="bsulktta7" data-path="pages/Dashboard.js"></i>
                    Return to Home
                  </ReactRouterDOM.Link>
                </li>
                <li data-id="um91b7mxq" data-path="pages/Dashboard.js">
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600" data-id="11cehx7sm" data-path="pages/Dashboard.js">

                    <i className="fas fa-question-circle mr-2" data-id="azde1f6n8" data-path="pages/Dashboard.js"></i>
                    Help & Support
                  </a>
                </li>
                <li data-id="y5jjejs30" data-path="pages/Dashboard.js">
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600" data-id="0b1owab4u" data-path="pages/Dashboard.js">

                    <i className="fas fa-book mr-2" data-id="6msdth2mw" data-path="pages/Dashboard.js"></i>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:col-span-3" data-id="9d4ivfubm" data-path="pages/Dashboard.js">
            {activeTab === 'links' && <UrlList />}
            
            {activeTab === 'create' &&
            <div className="bg-white shadow rounded-lg overflow-hidden" data-id="31oqmk8pp" data-path="pages/Dashboard.js">
                <div className="px-6 py-5 border-b border-gray-200" data-id="ldk6nf75y" data-path="pages/Dashboard.js">
                  <h3 className="text-lg font-medium text-gray-900" data-id="gin2sqdet" data-path="pages/Dashboard.js">Create New Link</h3>
                  <p className="mt-1 text-sm text-gray-500" data-id="f68mrc3dp" data-path="pages/Dashboard.js">
                    Shorten a URL and customize it to your liking
                  </p>
                </div>
                <div className="p-6" data-id="uk64i7rzz" data-path="pages/Dashboard.js">
                  <UrlShortener showAdvanced={true} />
                </div>
              </div>
            }
            
            {activeTab === 'subscription' && <Subscription />}
            
            {activeTab === 'profile' && <Profile />}
          </div>
        </div>
      </div>
    </div>);

}