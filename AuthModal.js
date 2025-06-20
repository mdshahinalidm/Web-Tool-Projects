function AuthModal({ isOpen, onClose, mode, setMode }) {
  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  // Toggle between login and signup modes
  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50"
      onClick={handleOutsideClick} data-id="4bgf2iig4" data-path="components/auth/AuthModal.js">

      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden" data-id="srumnyq3p" data-path="components/auth/AuthModal.js">
        <div className="flex justify-between items-center p-6 border-b" data-id="j6vtcs1l6" data-path="components/auth/AuthModal.js">
          <h2 className="text-2xl font-semibold text-gray-800" data-id="c0h3koraq" data-path="components/auth/AuthModal.js">
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose} data-id="zao9et3ug" data-path="components/auth/AuthModal.js">

            <i className="fas fa-times text-xl" data-id="wdsrc7czb" data-path="components/auth/AuthModal.js"></i>
          </button>
        </div>
        
        <div className="p-6" data-id="5fmslvwpf" data-path="components/auth/AuthModal.js">
          {mode === 'login' ?
          <LoginForm onSuccess={onClose} /> :

          <SignupForm onSuccess={onClose} />
          }
          
          <div className="mt-6 text-center" data-id="a2rlz0a0g" data-path="components/auth/AuthModal.js">
            <p className="text-gray-600" data-id="al2knm93w" data-path="components/auth/AuthModal.js">
              {mode === 'login' ?
              "Don't have an account?" :
              "Already have an account?"}
              <button
                className="text-blue-600 hover:text-blue-800 font-medium ml-2"
                onClick={toggleMode} data-id="ib1rnuej8" data-path="components/auth/AuthModal.js">

                {mode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>);

}