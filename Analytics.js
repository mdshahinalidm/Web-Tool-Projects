function Analytics({ urlId, urlData, isOpen, onClose }) {
  const [analytics, setAnalytics] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('overview');

  const { getUrlAnalytics } = useUrls();
  const { isPremium } = useAuth();

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Load analytics data
  React.useEffect(() => {
    if (isOpen && urlId) {
      loadAnalytics();
    }
  }, [isOpen, urlId]);

  // Function to load analytics data
  const loadAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await getUrlAnalytics(urlId);

      if (result.success) {
        setAnalytics(result.data);
      } else {
        setError(result.error || 'Failed to load analytics');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while loading analytics');
      console.error('Error loading analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50 overflow-y-auto"
      onClick={handleOutsideClick} data-id="qz335yn38" data-path="components/dashboard/Analytics.js">

      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 my-8" data-id="dr74zztyf" data-path="components/dashboard/Analytics.js">
        <div className="flex justify-between items-center p-6 border-b" data-id="njihbunme" data-path="components/dashboard/Analytics.js">
          <h2 className="text-2xl font-semibold text-gray-800" data-id="gtpkbldxs" data-path="components/dashboard/Analytics.js">
            Analytics for {urlData.customAlias || urlData.shortCode}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose} data-id="j8l81oc9u" data-path="components/dashboard/Analytics.js">

            <i className="fas fa-times text-xl" data-id="oxhyk6m03" data-path="components/dashboard/Analytics.js"></i>
          </button>
        </div>
        
        <div className="p-6" data-id="u0wl69u08" data-path="components/dashboard/Analytics.js">
          <div className="mb-6" data-id="6njj06jut" data-path="components/dashboard/Analytics.js">
            <div className="mb-4" data-id="kc6k4ujjz" data-path="components/dashboard/Analytics.js">
              <h3 className="text-lg font-medium text-gray-900" data-id="iwxfdl63i" data-path="components/dashboard/Analytics.js">URL Details</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg" data-id="pwuu4agv9" data-path="components/dashboard/Analytics.js">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="bvcud29lq" data-path="components/dashboard/Analytics.js">
                <div data-id="xbzknoc6q" data-path="components/dashboard/Analytics.js">
                  <p className="text-sm text-gray-500" data-id="i7rb6odkq" data-path="components/dashboard/Analytics.js">Original URL:</p>
                  <a
                    href={urlData.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline truncate block" data-id="nkv7dddsf" data-path="components/dashboard/Analytics.js">

                    {urlData.originalUrl}
                  </a>
                </div>
                <div data-id="lwj15vect" data-path="components/dashboard/Analytics.js">
                  <p className="text-sm text-gray-500" data-id="424pmngio" data-path="components/dashboard/Analytics.js">Short URL:</p>
                  <div className="flex items-center" data-id="lvbl9u3op" data-path="components/dashboard/Analytics.js">
                    <span className="text-blue-600" data-id="qyrs8ylin" data-path="components/dashboard/Analytics.js">{`${window.location.origin}/${urlData.customAlias || urlData.shortCode}`}</span>
                    <button
                      className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                      onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${urlData.customAlias || urlData.shortCode}`)}
                      title="Copy to clipboard" data-id="guosogo5b" data-path="components/dashboard/Analytics.js">

                      <i className="fas fa-copy" data-id="q1spw6nam" data-path="components/dashboard/Analytics.js"></i>
                    </button>
                  </div>
                </div>
                <div data-id="ng323rdf7" data-path="components/dashboard/Analytics.js">
                  <p className="text-sm text-gray-500" data-id="m72kbrpiy" data-path="components/dashboard/Analytics.js">Created on:</p>
                  <p data-id="ijdzhgl75" data-path="components/dashboard/Analytics.js">{formatDate(urlData.createdAt)}</p>
                </div>
                <div data-id="4k5w0eppt" data-path="components/dashboard/Analytics.js">
                  <p className="text-sm text-gray-500" data-id="e8kxt6j0d" data-path="components/dashboard/Analytics.js">Total Clicks:</p>
                  <p className="font-semibold text-lg" data-id="rrioq4end" data-path="components/dashboard/Analytics.js">{urlData.clicks}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Analytics Content */}
          {loading ?
          <div className="py-10 text-center" data-id="amgku5ee2" data-path="components/dashboard/Analytics.js">
              <div className="loader" data-id="tj7fzpsqr" data-path="components/dashboard/Analytics.js"></div>
              <p className="mt-4 text-gray-500" data-id="i83an9sq8" data-path="components/dashboard/Analytics.js">Loading analytics data...</p>
            </div> :
          error ?
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center" data-id="kgux8m55c" data-path="components/dashboard/Analytics.js">
              <i className="fas fa-exclamation-circle text-red-500 text-xl mb-2" data-id="o24jzk93z" data-path="components/dashboard/Analytics.js"></i>
              <p className="text-red-700" data-id="epq9zh7xz" data-path="components/dashboard/Analytics.js">{error}</p>
              <button
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={loadAnalytics} data-id="ngra50mf5" data-path="components/dashboard/Analytics.js">

                Try Again
              </button>
            </div> :
          !analytics && isPremium ?
          <div className="py-8 text-center" data-id="gaf4b1qyx" data-path="components/dashboard/Analytics.js">
              <i className="fas fa-chart-bar text-gray-300 text-5xl mb-4" data-id="0flmrry88" data-path="components/dashboard/Analytics.js"></i>
              <p className="text-gray-500" data-id="maf43tdfh" data-path="components/dashboard/Analytics.js">No analytics data available for this URL yet.</p>
            </div> :
          !isPremium ?
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center" data-id="pkvzpy250" data-path="components/dashboard/Analytics.js">
              <i className="fas fa-lock text-yellow-500 text-3xl mb-3" data-id="23r2yid1o" data-path="components/dashboard/Analytics.js"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-id="1mzfygtsp" data-path="components/dashboard/Analytics.js">
                Analytics are a Premium Feature
              </h3>
              <p className="text-gray-600 mb-4" data-id="2k1k5sa1t" data-path="components/dashboard/Analytics.js">
                Upgrade to our Premium plan to access detailed analytics for your links.
              </p>
              <ReactRouterDOM.Link
              to="/pricing"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              onClick={onClose}>

                Upgrade to Premium
              </ReactRouterDOM.Link>
            </div> :

          <>
              {/* Analytics Tabs */}
              <div className="border-b border-gray-200 mb-6" data-id="lzqutlmlz" data-path="components/dashboard/Analytics.js">
                <nav className="-mb-px flex space-x-6" data-id="2jgn7r046" data-path="components/dashboard/Analytics.js">
                  <button
                  className={`py-3 px-1 border-b-2 ${
                  activeTab === 'overview' ?
                  'border-blue-500 text-blue-600' :
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} font-medium focus:outline-none`
                  }
                  onClick={() => setActiveTab('overview')} data-id="ki0m06npf" data-path="components/dashboard/Analytics.js">

                    Overview
                  </button>
                  <button
                  className={`py-3 px-1 border-b-2 ${
                  activeTab === 'referrers' ?
                  'border-blue-500 text-blue-600' :
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} font-medium focus:outline-none`
                  }
                  onClick={() => setActiveTab('referrers')} data-id="ffaovnyx0" data-path="components/dashboard/Analytics.js">

                    Referrers
                  </button>
                  <button
                  className={`py-3 px-1 border-b-2 ${
                  activeTab === 'devices' ?
                  'border-blue-500 text-blue-600' :
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} font-medium focus:outline-none`
                  }
                  onClick={() => setActiveTab('devices')} data-id="bdnwjvv1s" data-path="components/dashboard/Analytics.js">

                    Devices & Browsers
                  </button>
                  <button
                  className={`py-3 px-1 border-b-2 ${
                  activeTab === 'locations' ?
                  'border-blue-500 text-blue-600' :
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} font-medium focus:outline-none`
                  }
                  onClick={() => setActiveTab('locations')} data-id="ysw55aimf" data-path="components/dashboard/Analytics.js">

                    Locations
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' &&
            <div data-id="c0u3a0lo9" data-path="components/dashboard/Analytics.js">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="krww32s4s" data-path="components/dashboard/Analytics.js">
                    <div className="bg-blue-50 p-4 rounded-lg" data-id="zge1dqctt" data-path="components/dashboard/Analytics.js">
                      <p className="text-blue-800 font-medium" data-id="gimolwwo5" data-path="components/dashboard/Analytics.js">Total Clicks</p>
                      <p className="text-3xl font-bold text-blue-900 mt-2" data-id="ley0bpcrk" data-path="components/dashboard/Analytics.js">{analytics.clicks.total}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg" data-id="4kynow0ow" data-path="components/dashboard/Analytics.js">
                      <p className="text-green-800 font-medium" data-id="dg8s0hwie" data-path="components/dashboard/Analytics.js">Last Week</p>
                      <p className="text-3xl font-bold text-green-900 mt-2" data-id="gz65z03on" data-path="components/dashboard/Analytics.js">{analytics.clicks.lastWeek}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg" data-id="m2m320f9y" data-path="components/dashboard/Analytics.js">
                      <p className="text-purple-800 font-medium" data-id="wyqchnyp4" data-path="components/dashboard/Analytics.js">Last Month</p>
                      <p className="text-3xl font-bold text-purple-900 mt-2" data-id="6abqapdq5" data-path="components/dashboard/Analytics.js">{analytics.clicks.lastMonth}</p>
                    </div>
                  </div>
                  
                  {/* Clicks Over Time Chart (simplified representation) */}
                  <div className="mb-8" data-id="ett07s8ox" data-path="components/dashboard/Analytics.js">
                    <h4 className="text-lg font-medium text-gray-900 mb-4" data-id="c5qp9w9jj" data-path="components/dashboard/Analytics.js">Clicks Over Time</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 h-64 flex items-end space-x-4" data-id="mmc8gvb5c" data-path="components/dashboard/Analytics.js">
                      {analytics.clicksOverTime.map((item, index) =>
                  <div key={index} className="flex flex-col items-center flex-1" data-id="7b1x2edln" data-path="components/dashboard/Analytics.js">
                          <div
                      className="bg-blue-500 w-full rounded-t-md"
                      style={{ height: `${item.count / Math.max(...analytics.clicksOverTime.map((i) => i.count)) * 100}%`, minHeight: '10%' }} data-id="6qo2go1u5" data-path="components/dashboard/Analytics.js">
                    </div>
                          <p className="text-xs mt-2 text-gray-500 transform -rotate-45 origin-top-right" data-id="wed2auob4" data-path="components/dashboard/Analytics.js">{item.date.split('-').slice(1).join('/')}</p>
                        </div>
                  )}
                    </div>
                  </div>
                </div>
            }
              
              {activeTab === 'referrers' &&
            <div data-id="54flks57c" data-path="components/dashboard/Analytics.js">
                  <h4 className="text-lg font-medium text-gray-900 mb-4" data-id="35omxwf0q" data-path="components/dashboard/Analytics.js">Top Referrers</h4>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" data-id="3swejjjo8" data-path="components/dashboard/Analytics.js">
                    <table className="min-w-full divide-y divide-gray-200" data-id="3tx7mf078" data-path="components/dashboard/Analytics.js">
                      <thead className="bg-gray-50" data-id="35oqspfln" data-path="components/dashboard/Analytics.js">
                        <tr data-id="7gsj58u34" data-path="components/dashboard/Analytics.js">
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="4exbjwlph" data-path="components/dashboard/Analytics.js">
                            Source
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="p647eyxri" data-path="components/dashboard/Analytics.js">
                            Clicks
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="ct93f2ler" data-path="components/dashboard/Analytics.js">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200" data-id="q2mtovfeo" data-path="components/dashboard/Analytics.js">
                        {analytics.referrers.map((referrer, index) =>
                    <tr key={index} data-id="mpqws03bi" data-path="components/dashboard/Analytics.js">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-id="ar86absno" data-path="components/dashboard/Analytics.js">
                              {referrer.source}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right" data-id="pcylkka4n" data-path="components/dashboard/Analytics.js">
                              {referrer.count}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right" data-id="ipsrt4u49" data-path="components/dashboard/Analytics.js">
                              {Math.round(referrer.count / analytics.clicks.total * 100)}%
                            </td>
                          </tr>
                    )}
                      </tbody>
                    </table>
                  </div>
                </div>
            }
              
              {activeTab === 'devices' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="528s7eqga" data-path="components/dashboard/Analytics.js">
                  <div data-id="s1r72bimj" data-path="components/dashboard/Analytics.js">
                    <h4 className="text-lg font-medium text-gray-900 mb-4" data-id="cu66pwid5" data-path="components/dashboard/Analytics.js">Devices</h4>
                    <div className="bg-white p-6 rounded-lg border border-gray-200" data-id="d6a7tpnf9" data-path="components/dashboard/Analytics.js">
                      {analytics.devices.map((device, index) =>
                  <div key={index} className="mb-4 last:mb-0" data-id="k2e3nah9b" data-path="components/dashboard/Analytics.js">
                          <div className="flex justify-between mb-1" data-id="nbmxm3vji" data-path="components/dashboard/Analytics.js">
                            <span className="text-gray-700" data-id="e68qp5fms" data-path="components/dashboard/Analytics.js">{device.type}</span>
                            <span className="text-gray-700" data-id="vun33t46a" data-path="components/dashboard/Analytics.js">{device.count} ({Math.round(device.count / analytics.clicks.total * 100)}%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5" data-id="uxiabhiqh" data-path="components/dashboard/Analytics.js">
                            <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${device.count / analytics.clicks.total * 100}%` }} data-id="d6k7ratwj" data-path="components/dashboard/Analytics.js">
                      </div>
                          </div>
                        </div>
                  )}
                    </div>
                  </div>
                  
                  <div data-id="udj4ip48n" data-path="components/dashboard/Analytics.js">
                    <h4 className="text-lg font-medium text-gray-900 mb-4" data-id="iyl1yfdlb" data-path="components/dashboard/Analytics.js">Browsers</h4>
                    <div className="bg-white p-6 rounded-lg border border-gray-200" data-id="4cjra5iyh" data-path="components/dashboard/Analytics.js">
                      {analytics.browsers.map((browser, index) =>
                  <div key={index} className="mb-4 last:mb-0" data-id="11u211a2s" data-path="components/dashboard/Analytics.js">
                          <div className="flex justify-between mb-1" data-id="sj0slbq95" data-path="components/dashboard/Analytics.js">
                            <span className="text-gray-700" data-id="yr4fg4bmo" data-path="components/dashboard/Analytics.js">{browser.name}</span>
                            <span className="text-gray-700" data-id="h23630b8t" data-path="components/dashboard/Analytics.js">{browser.count} ({Math.round(browser.count / analytics.clicks.total * 100)}%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5" data-id="d4cyfd5su" data-path="components/dashboard/Analytics.js">
                            <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${browser.count / analytics.clicks.total * 100}%` }} data-id="ja6hu6okg" data-path="components/dashboard/Analytics.js">
                      </div>
                          </div>
                        </div>
                  )}
                    </div>
                  </div>
                </div>
            }
              
              {activeTab === 'locations' &&
            <div data-id="w5qkyzgx9" data-path="components/dashboard/Analytics.js">
                  <h4 className="text-lg font-medium text-gray-900 mb-4" data-id="3yi475274" data-path="components/dashboard/Analytics.js">Top Locations</h4>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" data-id="x9bdrlpmf" data-path="components/dashboard/Analytics.js">
                    <table className="min-w-full divide-y divide-gray-200" data-id="chvrjcivo" data-path="components/dashboard/Analytics.js">
                      <thead className="bg-gray-50" data-id="cxkuxrj63" data-path="components/dashboard/Analytics.js">
                        <tr data-id="9l3ziho4w" data-path="components/dashboard/Analytics.js">
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="eo6qyk682" data-path="components/dashboard/Analytics.js">
                            Country
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="6gje3y12a" data-path="components/dashboard/Analytics.js">
                            Clicks
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="wymuoazry" data-path="components/dashboard/Analytics.js">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200" data-id="drlrywv2p" data-path="components/dashboard/Analytics.js">
                        {analytics.locations.map((location, index) =>
                    <tr key={index} data-id="h3k96a6a8" data-path="components/dashboard/Analytics.js">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-id="2r9236b7g" data-path="components/dashboard/Analytics.js">
                              {location.country}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right" data-id="cyq39m9lm" data-path="components/dashboard/Analytics.js">
                              {location.count}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right" data-id="3pbm5corm" data-path="components/dashboard/Analytics.js">
                              {Math.round(location.count / analytics.clicks.total * 100)}%
                            </td>
                          </tr>
                    )}
                      </tbody>
                    </table>
                  </div>
                </div>
            }
            </>
          }
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-end" data-id="lxk33bpi4" data-path="components/dashboard/Analytics.js">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={onClose} data-id="qkzx497n0" data-path="components/dashboard/Analytics.js">

            Close
          </button>
        </div>
      </div>
    </div>);

}