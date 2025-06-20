function GoogleSignIn({ onSuccess }) {
  const { googleSignIn } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);

      // For demo purposes, we'll simulate a Google login with mock data
      // In production, this would use the actual Google Sign-In API
      const mockGoogleUser = {
        id: 'google123456',
        name: 'Google User',
        email: 'google.user@example.com',
        googleId: 'google123456',
        picture: 'https://ui-avatars.com/api/?name=Google+User&background=0D8ABC&color=fff'
      };

      const result = await googleSignIn(mockGoogleUser);

      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Google sign-in failed. Please try again.');
      console.error('Google sign-in error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error &&
      <div className="mb-4 bg-red-50 border border-red-200 text-red-600 p-3 rounded" data-id="q3zpxwfbe" data-path="components/auth/GoogleSignIn.js">
          <i className="fas fa-exclamation-circle mr-2" data-id="zolkwidnz" data-path="components/auth/GoogleSignIn.js"></i>
          {error}
        </div>
      }
      
      <button
        type="button"
        className={`w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        onClick={handleGoogleSignIn}
        disabled={loading} data-id="eauqlp7aj" data-path="components/auth/GoogleSignIn.js">

        {loading ?
        <i className="fas fa-spinner fa-spin mr-2" data-id="vf1v59n6c" data-path="components/auth/GoogleSignIn.js"></i> :

        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" data-id="zrajbqch7" data-path="components/auth/GoogleSignIn.js">
            <path
            fill="#4285F4"
            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" data-id="l6le1rggz" data-path="components/auth/GoogleSignIn.js" />

            <path
            fill="#34A853"
            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" data-id="f79mcyjlg" data-path="components/auth/GoogleSignIn.js" />

          </svg>
        }
        Continue with Google
      </button>
    </>);

}