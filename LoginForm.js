function LoginForm({ onSuccess }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { login } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const result = await login(email, password);

      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('demo@example.com');
    setPassword('password');

    try {
      setLoading(true);
      setError(null);

      const result = await login('demo@example.com', 'password');

      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Demo login failed. Please try again.');
      console.error('Demo login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-id="upjet9k50" data-path="components/auth/LoginForm.js">
      <form onSubmit={handleSubmit} className="space-y-4" data-id="njs3mh4nt" data-path="components/auth/LoginForm.js">
        {error &&
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded" data-id="psyrgbtrr" data-path="components/auth/LoginForm.js">
            <i className="fas fa-exclamation-circle mr-2" data-id="4jgtdrddo" data-path="components/auth/LoginForm.js"></i>
            {error}
          </div>
        }
        
        <div data-id="37j5s0lhj" data-path="components/auth/LoginForm.js">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="b0kt6m7us" data-path="components/auth/LoginForm.js">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required data-id="r5a8n74xc" data-path="components/auth/LoginForm.js" />

        </div>
        
        <div data-id="llo5d07ei" data-path="components/auth/LoginForm.js">
          <div className="flex justify-between mb-1" data-id="27c71foss" data-path="components/auth/LoginForm.js">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700" data-id="1ssfmjkwd" data-path="components/auth/LoginForm.js">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800" data-id="bd89nbtn2" data-path="components/auth/LoginForm.js">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required data-id="xlac6t1sk" data-path="components/auth/LoginForm.js" />

        </div>
        
        <div className="flex items-center" data-id="nee2kd79i" data-path="components/auth/LoginForm.js">
          <input
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)} data-id="zvxhztgsg" data-path="components/auth/LoginForm.js" />

          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700" data-id="yjqdc17mq" data-path="components/auth/LoginForm.js">
            Remember me
          </label>
        </div>
        
        <div data-id="b1g5td0qx" data-path="components/auth/LoginForm.js">
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={loading} data-id="2t4h5c3t3" data-path="components/auth/LoginForm.js">

            {loading ?
            <>
                <i className="fas fa-spinner fa-spin mr-2" data-id="skau0id8r" data-path="components/auth/LoginForm.js"></i>
                Logging in...
              </> :

            'Log In'
            }
          </button>
        </div>
      </form>
      
      <div className="mt-6" data-id="nr4out2lq" data-path="components/auth/LoginForm.js">
        <div className="relative" data-id="wll5ki7bo" data-path="components/auth/LoginForm.js">
          <div className="absolute inset-0 flex items-center" data-id="tvuuj5rfg" data-path="components/auth/LoginForm.js">
            <div className="w-full border-t border-gray-300" data-id="imh3sn5eo" data-path="components/auth/LoginForm.js"></div>
          </div>
          <div className="relative flex justify-center text-sm" data-id="xmrfjze1q" data-path="components/auth/LoginForm.js">
            <span className="px-2 bg-white text-gray-500" data-id="ow7ssnjpb" data-path="components/auth/LoginForm.js">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-3" data-id="pr6v2zih8" data-path="components/auth/LoginForm.js">
          <GoogleSignIn onSuccess={onSuccess} />
          
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleDemoLogin} data-id="k7kxfm8hg" data-path="components/auth/LoginForm.js">

            <i className="fas fa-user-circle mr-2" data-id="u94tlsi10" data-path="components/auth/LoginForm.js"></i>
            Try Demo Account
          </button>
        </div>
      </div>
    </div>);

}