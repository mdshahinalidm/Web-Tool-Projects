function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" data-id="tz8o30znc" data-path="pages/NotFound.js">
      <div className="max-w-md w-full text-center" data-id="vm16vkrq6" data-path="pages/NotFound.js">
        <div className="text-6xl font-bold text-blue-600 mb-4" data-id="4w02vvmwa" data-path="pages/NotFound.js">404</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2" data-id="doe2gw277" data-path="pages/NotFound.js">Page not found</h1>
        <p className="text-xl text-gray-600 mb-8" data-id="6g4esb1wg" data-path="pages/NotFound.js">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center space-x-4" data-id="wd3mslnw2" data-path="pages/NotFound.js">
          <ReactRouterDOM.Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">

            <i className="fas fa-home mr-2" data-id="2h4fn7ajk" data-path="pages/NotFound.js"></i> Go Home
          </ReactRouterDOM.Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="tk858luco" data-path="pages/NotFound.js">

            <i className="fas fa-arrow-left mr-2" data-id="7snn8gzzj" data-path="pages/NotFound.js"></i> Go Back
          </button>
        </div>
      </div>
    </div>);

}