function SignupForm({ onSuccess }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { register } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const result = await register(name, email, password);

      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-id="elcnyyo1m" data-path="components/auth/SignupForm.js">
      <form onSubmit={handleSubmit} className="space-y-4" data-id="vq1etbxlh" data-path="components/auth/SignupForm.js">
        {error &&
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded" data-id="fo2qwpjf4" data-path="components/auth/SignupForm.js">
            <i className="fas fa-exclamation-circle mr-2" data-id="iq2fb98kn" data-path="components/auth/SignupForm.js"></i>
            {error}
          </div>
        }
        
        <div data-id="g5sdxp4rl" data-path="components/auth/SignupForm.js">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="rca1sgqnv" data-path="components/auth/SignupForm.js">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required data-id="9lefvgih0" data-path="components/auth/SignupForm.js" />

        </div>
        
        <div data-id="osxm9os0z" data-path="components/auth/SignupForm.js">
          <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1" data-id="0fi1uobtl" data-path="components/auth/SignupForm.js">
            Email Address
          </label>
          <input
            type="email"
            id="signup-email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required data-id="o8el1kpcg" data-path="components/auth/SignupForm.js" />

        </div>
        
        <div data-id="6etmpatvs" data-path="components/auth/SignupForm.js">
          <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1" data-id="q079pu0tu" data-path="components/auth/SignupForm.js">
            Password
          </label>
          <input
            type="password"
            id="signup-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            required data-id="8j28rvm6x" data-path="components/auth/SignupForm.js" />

          <p className="mt-1 text-xs text-gray-500" data-id="1956apwen" data-path="components/auth/SignupForm.js">
            Must be at least 8 characters long
          </p>
        </div>
        
        <div data-id="7k81pjeb4" data-path="components/auth/SignupForm.js">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1" data-id="a7fhasuct" data-path="components/auth/SignupForm.js">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required data-id="scm57bjsk" data-path="components/auth/SignupForm.js" />

        </div>
        
        <div className="flex items-start" data-id="ntygj5hpy" data-path="components/auth/SignupForm.js">
          <input
            type="checkbox"
            id="agree-terms"
            className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required data-id="vbvytbimv" data-path="components/auth/SignupForm.js" />

          <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700" data-id="92lunjco6" data-path="components/auth/SignupForm.js">
            I agree to the <a href="#" className="text-blue-600 hover:text-blue-800" data-id="a3bhfz0h8" data-path="components/auth/SignupForm.js">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800" data-id="8vnui4shz" data-path="components/auth/SignupForm.js">Privacy Policy</a>
          </label>
        </div>
        
        <div data-id="f3dvwbgvo" data-path="components/auth/SignupForm.js">
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={loading} data-id="3bm1ak8we" data-path="components/auth/SignupForm.js">

            {loading ?
            <>
                <i className="fas fa-spinner fa-spin mr-2" data-id="vb9j2xw1h" data-path="components/auth/SignupForm.js"></i>
                Creating account...
              </> :

            'Sign Up'
            }
          </button>
        </div>
      </form>
      
      <div className="mt-6" data-id="hycains2g" data-path="components/auth/SignupForm.js">
        <div className="relative" data-id="ly43za5jk" data-path="components/auth/SignupForm.js">
          <div className="absolute inset-0 flex items-center" data-id="pkxk0q0od" data-path="components/auth/SignupForm.js">
            <div className="w-full border-t border-gray-300" data-id="133gs8fuj" data-path="components/auth/SignupForm.js"></div>
          </div>
          <div className="relative flex justify-center text-sm" data-id="4x8xloft4" data-path="components/auth/SignupForm.js">
            <span className="px-2 bg-white text-gray-500" data-id="k6j2x8npr" data-path="components/auth/SignupForm.js">
              Or sign up with
            </span>
          </div>
        </div>
        
        <div className="mt-6" data-id="kl6o9e396" data-path="components/auth/SignupForm.js">
          <GoogleSignIn onSuccess={onSuccess} />
        </div>
      </div>
    </div>);

}