function UrlList() {
  const { urls, loading, error, deleteUrl, refreshUrls } = useUrls();
  const { currentUser, isPremium } = useAuth();
  const [selectedUrl, setSelectedUrl] = React.useState(null);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('createdAt');
  const [sortOrder, setSortOrder] = React.useState('desc');
  const [confirmDelete, setConfirmDelete] = React.useState(null);

  // Refresh URLs on component mount
  React.useEffect(() => {
    refreshUrls();
  }, []);

  // Sort URLs based on current sort settings
  const sortedUrls = React.useMemo(() => {
    if (!urls) return [];

    return [...urls].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'createdAt':
          comparison = new Date(b.createdAt) - new Date(a.createdAt);
          break;
        case 'clicks':
          comparison = b.clicks - a.clicks;
          break;
        case 'originalUrl':
          comparison = a.originalUrl.localeCompare(b.originalUrl);
          break;
        case 'shortCode':
          comparison = a.shortCode.localeCompare(b.shortCode);
          break;
        default:
          comparison = new Date(b.createdAt) - new Date(a.createdAt);
      }

      return sortOrder === 'asc' ? -comparison : comparison;
    });
  }, [urls, sortBy, sortOrder]);

  // Handle sort change
  const handleSort = (column) => {
    if (sortBy === column) {
      // Toggle sort order if same column is clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort column and default to descending order
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  // Handle URL deletion
  const handleDelete = async (urlId) => {
    try {
      const result = await deleteUrl(urlId);
      if (result.success) {
        setConfirmDelete(null);
      }
    } catch (err) {
      console.error('Error deleting URL:', err);
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

  // Open analytics modal for a URL
  const openAnalytics = (url) => {
    setSelectedUrl(url);
    setIsAnalyticsOpen(true);
  };

  // Copy short URL to clipboard
  const copyToClipboard = (shortCode) => {
    const shortUrl = `${window.location.origin}/${shortCode}`;
    navigator.clipboard.writeText(shortUrl).then(() => {
      // You could add a toast notification here
      console.log('URL copied to clipboard');
    }).catch((err) => {
      console.error('Error copying to clipboard:', err);
    });
  };

  // Render table row for a URL
  const renderUrlRow = (url) =>
  <tr key={url.id} className="hover:bg-gray-50" data-id="dz1n8ieo1" data-path="components/dashboard/UrlList.js">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="a5s4bt9if" data-path="components/dashboard/UrlList.js">
        <div className="flex items-center" data-id="32k4uubpf" data-path="components/dashboard/UrlList.js">
          <div className="truncate max-w-xs" data-id="tmltstkcx" data-path="components/dashboard/UrlList.js">
            <a
            href={url.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline truncate"
            title={url.originalUrl} data-id="8wt9qh75a" data-path="components/dashboard/UrlList.js">

              {url.originalUrl}
            </a>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="c0yktbwlg" data-path="components/dashboard/UrlList.js">
        <div className="flex items-center" data-id="taou7rzm6" data-path="components/dashboard/UrlList.js">
          <span className="font-medium text-blue-600" data-id="hlo0fyvlv" data-path="components/dashboard/UrlList.js">
            {`${window.location.origin}/${url.customAlias || url.shortCode}`}
          </span>
          <button
          className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={() => copyToClipboard(url.customAlias || url.shortCode)}
          title="Copy to clipboard" data-id="nlzsgvpwo" data-path="components/dashboard/UrlList.js">

            <i className="fas fa-copy" data-id="pmmdwobqm" data-path="components/dashboard/UrlList.js"></i>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="9xywx873i" data-path="components/dashboard/UrlList.js">
        {formatDate(url.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center" data-id="hae4odd0q" data-path="components/dashboard/UrlList.js">
        {url.clicks}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-id="q5ropr9p7" data-path="components/dashboard/UrlList.js">
        <div className="flex justify-end space-x-2" data-id="31c9zrryg" data-path="components/dashboard/UrlList.js">
          <button
          className="text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={() => openAnalytics(url)}
          title="View Analytics" data-id="g0e83ueqw" data-path="components/dashboard/UrlList.js">

            <i className="fas fa-chart-bar" data-id="yiugf0n72" data-path="components/dashboard/UrlList.js"></i>
          </button>
          <a
          href={`${window.location.origin}/${url.customAlias || url.shortCode}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 focus:outline-none"
          title="Open URL" data-id="0o5hszd1q" data-path="components/dashboard/UrlList.js">

            <i className="fas fa-external-link-alt" data-id="90exqtkms" data-path="components/dashboard/UrlList.js"></i>
          </a>
          <button
          className="text-red-600 hover:text-red-800 focus:outline-none"
          onClick={() => setConfirmDelete(url.id)}
          title="Delete" data-id="mvdh4o2h5" data-path="components/dashboard/UrlList.js">

            <i className="fas fa-trash-alt" data-id="8byznbix1" data-path="components/dashboard/UrlList.js"></i>
          </button>
        </div>
      </td>
    </tr>;


  return (
    <div className="bg-white shadow rounded-lg overflow-hidden" data-id="af0jc2vmy" data-path="components/dashboard/UrlList.js">
      <div className="px-6 py-5 border-b border-gray-200" data-id="4b9tgcfak" data-path="components/dashboard/UrlList.js">
        <div className="flex justify-between items-center" data-id="2cqfiex3s" data-path="components/dashboard/UrlList.js">
          <h3 className="text-lg font-medium text-gray-900" data-id="1xvj54rs4" data-path="components/dashboard/UrlList.js">Your URLs</h3>
          <div className="flex space-x-2" data-id="dchned80g" data-path="components/dashboard/UrlList.js">
            <button
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={refreshUrls}
              title="Refresh" data-id="o3fbxnxqw" data-path="components/dashboard/UrlList.js">

              <i className="fas fa-sync-alt mr-1" data-id="5jvgxcmys" data-path="components/dashboard/UrlList.js"></i> Refresh
            </button>
          </div>
        </div>
      </div>
      
      {error &&
      <div className="px-6 py-4 bg-red-50 border-b border-red-200" data-id="w84yosbrt" data-path="components/dashboard/UrlList.js">
          <div className="flex" data-id="ky8ictz59" data-path="components/dashboard/UrlList.js">
            <div className="flex-shrink-0" data-id="hmuvlkww5" data-path="components/dashboard/UrlList.js">
              <i className="fas fa-exclamation-circle text-red-400" data-id="yh9g0e13p" data-path="components/dashboard/UrlList.js"></i>
            </div>
            <div className="ml-3" data-id="pnn8yuceu" data-path="components/dashboard/UrlList.js">
              <p className="text-sm text-red-700" data-id="tyf1vdtsu" data-path="components/dashboard/UrlList.js">
                {error}
              </p>
            </div>
          </div>
        </div>
      }
      
      {loading ?
      <div className="px-6 py-10 text-center" data-id="vwsaiif58" data-path="components/dashboard/UrlList.js">
          <div className="loader" data-id="9rzfleter" data-path="components/dashboard/UrlList.js"></div>
          <p className="mt-4 text-gray-500" data-id="cv5veyni0" data-path="components/dashboard/UrlList.js">Loading your URLs...</p>
        </div> :
      urls.length === 0 ?
      <div className="px-6 py-10 text-center" data-id="dv5x51hvh" data-path="components/dashboard/UrlList.js">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4" data-id="7z8s2ndqg" data-path="components/dashboard/UrlList.js">
            <i className="fas fa-link text-xl" data-id="zl5d80jeu" data-path="components/dashboard/UrlList.js"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1" data-id="iiul7zhrt" data-path="components/dashboard/UrlList.js">No URLs yet</h3>
          <p className="text-gray-500 mb-4" data-id="m9zy0q62e" data-path="components/dashboard/UrlList.js">
            You haven't created any shortened URLs yet.
          </p>
          <ReactRouterDOM.Link
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">

            Shorten a URL
          </ReactRouterDOM.Link>
        </div> :

      <div className="overflow-x-auto" data-id="b7klz772v" data-path="components/dashboard/UrlList.js">
          <table className="min-w-full divide-y divide-gray-200" data-id="ceq7pb1om" data-path="components/dashboard/UrlList.js">
            <thead className="bg-gray-50" data-id="xqouqp1su" data-path="components/dashboard/UrlList.js">
              <tr data-id="btdajvqpx" data-path="components/dashboard/UrlList.js">
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('originalUrl')} data-id="owecas4lw" data-path="components/dashboard/UrlList.js">

                  <div className="flex items-center" data-id="omw7uv9wx" data-path="components/dashboard/UrlList.js">
                    Original URL
                    {sortBy === 'originalUrl' &&
                  <i className={`fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ml-1`} data-id="8j0ee6dzq" data-path="components/dashboard/UrlList.js"></i>
                  }
                  </div>
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('shortCode')} data-id="2t7r8zt47" data-path="components/dashboard/UrlList.js">

                  <div className="flex items-center" data-id="76ue6k8hq" data-path="components/dashboard/UrlList.js">
                    Short URL
                    {sortBy === 'shortCode' &&
                  <i className={`fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ml-1`} data-id="wbyly6ici" data-path="components/dashboard/UrlList.js"></i>
                  }
                  </div>
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('createdAt')} data-id="5244zsgdd" data-path="components/dashboard/UrlList.js">

                  <div className="flex items-center" data-id="3k1s5bwp3" data-path="components/dashboard/UrlList.js">
                    Created
                    {sortBy === 'createdAt' &&
                  <i className={`fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ml-1`} data-id="84rnjt2fk" data-path="components/dashboard/UrlList.js"></i>
                  }
                  </div>
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('clicks')} data-id="srixubp3h" data-path="components/dashboard/UrlList.js">

                  <div className="flex items-center justify-center" data-id="x6ui5u3bw" data-path="components/dashboard/UrlList.js">
                    Clicks
                    {sortBy === 'clicks' &&
                  <i className={`fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ml-1`} data-id="86qf1hzkb" data-path="components/dashboard/UrlList.js"></i>
                  }
                  </div>
                </th>
                <th scope="col" className="relative px-6 py-3" data-id="ye1kpl82h" data-path="components/dashboard/UrlList.js">
                  <span className="sr-only" data-id="onm3br99t" data-path="components/dashboard/UrlList.js">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200" data-id="mi9fzac6g" data-path="components/dashboard/UrlList.js">
              {sortedUrls.map(renderUrlRow)}
            </tbody>
          </table>
        </div>
      }
      
      {/* Delete Confirmation Modal */}
      {confirmDelete &&
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50" data-id="sowrl4e8v" data-path="components/dashboard/UrlList.js">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden" data-id="0jsnmgh5b" data-path="components/dashboard/UrlList.js">
            <div className="p-6" data-id="rqry5bx24" data-path="components/dashboard/UrlList.js">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4" data-id="6hp3dsr0y" data-path="components/dashboard/UrlList.js">
                <i className="fas fa-exclamation-triangle text-red-600" data-id="fgjem3tds" data-path="components/dashboard/UrlList.js"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2" data-id="vmgwnsh9i" data-path="components/dashboard/UrlList.js">
                Delete URL
              </h3>
              <p className="text-gray-500 text-center mb-6" data-id="kju8vb6lb" data-path="components/dashboard/UrlList.js">
                Are you sure you want to delete this URL? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3" data-id="esa8h61on" data-path="components/dashboard/UrlList.js">
                <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                onClick={() => setConfirmDelete(null)} data-id="5gy1gcrdo" data-path="components/dashboard/UrlList.js">

                  Cancel
                </button>
                <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => handleDelete(confirmDelete)} data-id="3w831awx0" data-path="components/dashboard/UrlList.js">

                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      
      {/* Analytics Modal */}
      {isAnalyticsOpen && selectedUrl &&
      <Analytics
        urlId={selectedUrl.id}
        urlData={selectedUrl}
        isOpen={isAnalyticsOpen}
        onClose={() => {
          setIsAnalyticsOpen(false);
          setSelectedUrl(null);
        }} />

      }
    </div>);

}