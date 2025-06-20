function Header() {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authMode, setAuthMode] = React.useState('login');
  const navigate = ReactRouterDOM.useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openLoginModal = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const openSignupModal = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10" data-id="ba3p7kzwa" data-path="components/Header.js">
      <div className="container mx-auto px-4 py-3" data-id="1s2i5kzpk" data-path="components/Header.js">
        <div className="flex justify-between items-center" data-id="2htv605b3" data-path="components/Header.js">
          {/* Logo */}
          <ReactRouterDOM.Link to="/" className="flex items-center">
            <i className="fas fa-link text-primary-600 mr-2 text-2xl" data-id="9v3hxd90e" data-path="components/Header.js"></i>
            <span className="font-bold text-xl text-gray-800" data-id="7zhiwxcc6" data-path="components/Header.js">QuickLink</span>
          </ReactRouterDOM.Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-id="2jhtfby8v" data-path="components/Header.js">
            <ReactRouterDOM.NavLink
              to="/"
              className={({ isActive }) =>
              isActive ?
              "font-medium text-blue-600" :
              "text-gray-600 hover:text-blue-600 transition-colors"
              }
              end>

              Home
            </ReactRouterDOM.NavLink>
            <ReactRouterDOM.NavLink
              to="/pricing"
              className={({ isActive }) =>
              isActive ?
              "font-medium text-blue-600" :
              "text-gray-600 hover:text-blue-600 transition-colors"
              }>

              Pricing
            </ReactRouterDOM.NavLink>
            
            {currentUser ?
            <div className="relative group" data-id="f47zk03mu" data-path="components/Header.js">
                <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)} data-id="px7rgj2z1" data-path="components/Header.js">

                  <span className="mr-2" data-id="cay2651l9" data-path="components/Header.js">{currentUser.name}</span>
                  <i className="fas fa-chevron-down text-xs" data-id="vdq9lfls9" data-path="components/Header.js"></i>
                </button>
                
                {isMenuOpen &&
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20" data-id="8pbjbxhc5" data-path="components/Header.js">
                    <ReactRouterDOM.Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}>

                      Dashboard
                    </ReactRouterDOM.Link>
                    <ReactRouterDOM.Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}>

                      Profile
                    </ReactRouterDOM.Link>
                    <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout} data-id="0nmbpf9fz" data-path="components/Header.js">

                      Log Out
                    </button>
                  </div>
              }
              </div> :

            <div className="flex items-center space-x-4" data-id="2yyldrrzj" data-path="components/Header.js">
                <button
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={openLoginModal} data-id="e4nw0q4op" data-path="components/Header.js">

                  Log In
                </button>
                <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                onClick={openSignupModal} data-id="n5wkwr165" data-path="components/Header.js">

                  Sign Up
                </button>
              </div>
            }
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu} data-id="hnawl6rz0" data-path="components/Header.js">

            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="htix9m7ng" data-path="components/Header.js"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen &&
        <nav className="md:hidden mt-4 py-3 border-t border-gray-200" data-id="s9xgp0ps2" data-path="components/Header.js">
            <ul className="space-y-4" data-id="saxaag3dl" data-path="components/Header.js">
              <li data-id="cxevs2fjp" data-path="components/Header.js">
                <ReactRouterDOM.NavLink
                to="/"
                className={({ isActive }) =>
                isActive ?
                "block font-medium text-blue-600" :
                "block text-gray-600 hover:text-blue-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
                end>

                  Home
                </ReactRouterDOM.NavLink>
              </li>
              <li data-id="kg7a4pdwd" data-path="components/Header.js">
                <ReactRouterDOM.NavLink
                to="/pricing"
                className={({ isActive }) =>
                isActive ?
                "block font-medium text-blue-600" :
                "block text-gray-600 hover:text-blue-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}>

                  Pricing
                </ReactRouterDOM.NavLink>
              </li>
              
              {currentUser ?
            <>
                  <li data-id="q6f9uttdi" data-path="components/Header.js">
                    <ReactRouterDOM.Link
                  to="/dashboard"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>

                      Dashboard
                    </ReactRouterDOM.Link>
                  </li>
                  <li data-id="e09yz0vki" data-path="components/Header.js">
                    <ReactRouterDOM.Link
                  to="/profile"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>

                      Profile
                    </ReactRouterDOM.Link>
                  </li>
                  <li data-id="1wt7qzd2d" data-path="components/Header.js">
                    <button
                  className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={handleLogout} data-id="kobjlbp3r" data-path="components/Header.js">

                      Log Out
                    </button>
                  </li>
                </> :

            <>
                  <li data-id="38pji6ljl" data-path="components/Header.js">
                    <button
                  className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => {
                    openLoginModal();
                    setIsMenuOpen(false);
                  }} data-id="86jl3b6b6" data-path="components/Header.js">

                      Log In
                    </button>
                  </li>
                  <li data-id="3ssvt5y31" data-path="components/Header.js">
                    <button
                  className="block w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => {
                    openSignupModal();
                    setIsMenuOpen(false);
                  }} data-id="vjm3ws3mu" data-path="components/Header.js">

                      Sign Up
                    </button>
                  </li>
                </>
            }
            </ul>
          </nav>
        }
      </div>
      
      {/* Auth Modal */}
      {showAuthModal &&
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        setMode={setAuthMode} />

      }
    </header>);

}