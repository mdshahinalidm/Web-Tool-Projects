function UrlShortener({ showAdvanced = false }) {
  const [url, setUrl] = React.useState('');
  const [customAlias, setCustomAlias] = React.useState('');
  const [showCustom, setShowCustom] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { currentUser } = useAuth();
  const { createShortUrl, checkAliasAvailability } = useUrls();

  // Function to validate URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Function to toggle custom alias input
  const toggleCustomAlias = () => {
    setShowCustom(!showCustom);
    if (!showCustom) {
      // Focus on the custom alias input when shown
      setTimeout(() => {
        document.getElementById('custom-alias').focus();
      }, 100);
    }
  };

  // Function to check custom alias availability
  const checkAlias = async () => {
    if (!customAlias) return;

    try {
      setLoading(true);
      const isAvailable = await checkAliasAvailability(customAlias);

      if (!isAvailable) {
        setError('This custom alias is already taken. Please try another one.');
      } else {
        setError(null);
      }
    } catch (err) {
      console.error('Error checking alias:', err);
    } finally {
      setLoading(false);
    }
  };

  // React hook to check alias availability when it changes
  React.useEffect(() => {
    if (customAlias) {
      const timer = setTimeout(() => {
        checkAlias();
      }, 500); // Debounce the check

      return () => clearTimeout(timer);
    }
  }, [customAlias]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate URL
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    // Validate custom alias if provided
    if (showCustom && customAlias) {
      if (!/^[a-zA-Z0-9-_]+$/.test(customAlias)) {
        setError('Custom alias can only contain letters, numbers, hyphens, and underscores');
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);

      // Create short URL
      const response = await createShortUrl(url, showCustom ? customAlias : null);

      if (!response.success) {
        setError(response.error);
        return;
      }

      // Set result for display
      setResult({
        originalUrl: response.data.originalUrl,
        shortUrl: `${window.location.origin}/${response.data.shortCode}`,
        shortCode: response.data.shortCode
      });

      // Reset form if successful
      if (!showAdvanced) {
        setUrl('');
        setCustomAlias('');
        setShowCustom(false);
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Error creating short URL:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to copy short URL to clipboard
  const copyToClipboard = () => {
    if (!result) return;

    navigator.clipboard.writeText(result.shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error('Error copying to clipboard:', err);
    });
  };

  return (
    <div className="url-shortener w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8" data-id="rf3etljbx" data-path="components/UrlShortener.js">
      <form onSubmit={handleSubmit} className="space-y-4" data-id="z9magp5ql" data-path="components/UrlShortener.js">
        <div className="space-y-2" data-id="4n7kfojvo" data-path="components/UrlShortener.js">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700" data-id="awvo00zih" data-path="components/UrlShortener.js">
            Enter your long URL
          </label>
          <div className="relative" data-id="l2xhqtg7e" data-path="components/UrlShortener.js">
            <input
              type="text"
              id="url"
              className={`block w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="https://example.com/your-long-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required data-id="t1o43ptf5" data-path="components/UrlShortener.js" />

          </div>
        </div>
        
        {showAdvanced &&
        <div className="pt-2" data-id="r4g50urb6" data-path="components/UrlShortener.js">
            <div className="flex items-center" data-id="bsmg5o13l" data-path="components/UrlShortener.js">
              <input
              type="checkbox"
              id="custom-check"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={showCustom}
              onChange={toggleCustomAlias} data-id="919tmisqa" data-path="components/UrlShortener.js" />

              <label htmlFor="custom-check" className="ml-2 text-sm text-gray-700" data-id="lren8gpkw" data-path="components/UrlShortener.js">
                Use custom alias
              </label>
            </div>
            
            {showCustom &&
          <div className="mt-3" data-id="gqlck9z6l" data-path="components/UrlShortener.js">
                <label htmlFor="custom-alias" className="block text-sm font-medium text-gray-700" data-id="s6fig9trf" data-path="components/UrlShortener.js">
                  Custom alias
                </label>
                <div className="mt-1 relative rounded-md shadow-sm" data-id="mlfkn4hzz" data-path="components/UrlShortener.js">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-id="95uvsmrad" data-path="components/UrlShortener.js">
                    <span className="text-gray-500 sm:text-sm" data-id="j031tqv5i" data-path="components/UrlShortener.js">
                      {window.location.origin}/
                    </span>
                  </div>
                  <input
                type="text"
                id="custom-alias"
                className={`block w-full pl-[calc(0.75rem+${window.location.origin.length / 2}px)] pr-10 py-2 rounded-md ${error && error.includes('alias') ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="your-custom-link"
                value={customAlias}
                onChange={(e) => setCustomAlias(e.target.value)} data-id="v3tqpb1t7" data-path="components/UrlShortener.js" />

                  {loading && customAlias &&
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center" data-id="ubx2lkjk0" data-path="components/UrlShortener.js">
                      <i className="fas fa-spinner fa-spin text-gray-400" data-id="6x6eh667i" data-path="components/UrlShortener.js"></i>
                    </div>
              }
                </div>
                <p className="mt-1 text-xs text-gray-500" data-id="ea80yfx60" data-path="components/UrlShortener.js">
                  Use only letters, numbers, hyphens, and underscores
                </p>
              </div>
          }
          </div>
        }
        
        {error &&
        <div className="text-red-500 text-sm py-1" data-id="6k9tnu333" data-path="components/UrlShortener.js">
            <i className="fas fa-exclamation-circle mr-1" data-id="m527us3ao" data-path="components/UrlShortener.js"></i> {error}
          </div>
        }
        
        <div className="pt-2" data-id="3sfmrfh9t" data-path="components/UrlShortener.js">
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={loading} data-id="5vk8kz1v2" data-path="components/UrlShortener.js">

            {loading ?
            <span data-id="7zvdedbd4" data-path="components/UrlShortener.js">
                <i className="fas fa-spinner fa-spin mr-2" data-id="8d81c8gkq" data-path="components/UrlShortener.js"></i> Processing...
              </span> :

            'Shorten URL'
            }
          </button>
        </div>
      </form>
      
      {result &&
      <div className="mt-6 p-4 bg-blue-50 rounded-lg" data-id="22zg0mxnh" data-path="components/UrlShortener.js">
          <h3 className="text-lg font-medium text-gray-800 mb-2" data-id="8027h7lvj" data-path="components/UrlShortener.js">Your shortened URL:</h3>
          <div className="flex items-center" data-id="vox12vgl4" data-path="components/UrlShortener.js">
            <div className="relative flex-1" data-id="ios9av5kf" data-path="components/UrlShortener.js">
              <input
              type="text"
              className="block w-full pl-4 pr-10 py-3 bg-white border border-gray-300 rounded-lg text-blue-600 font-medium overflow-hidden"
              value={result.shortUrl}
              readOnly data-id="74evoaf54" data-path="components/UrlShortener.js" />

              <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-600 hover:text-blue-800"
              onClick={copyToClipboard}
              title="Copy to clipboard" data-id="s21chm1tx" data-path="components/UrlShortener.js">

                <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`} data-id="m7bxhjgkb" data-path="components/UrlShortener.js"></i>
              </button>
            </div>
            <a
            href={result.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center text-blue-600 hover:text-blue-800"
            title="Open URL" data-id="rniaaazeo" data-path="components/UrlShortener.js">

              <i className="fas fa-external-link-alt text-lg" data-id="mveu79i7e" data-path="components/UrlShortener.js"></i>
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-600" data-id="7se2x3deo" data-path="components/UrlShortener.js">
            Original URL: <a href={result.originalUrl} className="text-blue-600 hover:underline truncate inline-block max-w-xs" target="_blank" rel="noopener noreferrer" data-id="c5tujg1xf" data-path="components/UrlShortener.js">{result.originalUrl}</a>
          </p>
          
          {!currentUser &&
        <p className="mt-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200" data-id="g8asi2khd" data-path="components/UrlShortener.js">
              <i className="fas fa-info-circle mr-1 text-yellow-500" data-id="x515g7it4" data-path="components/UrlShortener.js"></i>
              <strong data-id="dbecpelvz" data-path="components/UrlShortener.js">Note:</strong> You're using QuickLink without an account. Sign up to track clicks, customize links, and access more features!
            </p>
        }
        </div>
      }
      
      {!showAdvanced && !result && currentUser?.accountType !== 'premium' &&
      <div className="mt-6 text-center" data-id="3tpc7zcqk" data-path="components/UrlShortener.js">
          <p className="text-sm text-gray-600" data-id="4audt7316" data-path="components/UrlShortener.js">
            Want custom URLs and advanced features? <ReactRouterDOM.Link to="/pricing" className="text-blue-600 hover:underline">Upgrade to Premium</ReactRouterDOM.Link>
          </p>
        </div>
      }
    </div>);

}