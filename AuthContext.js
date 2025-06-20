// Authentication Context
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Check if user is already logged in
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        setCurrentUser(JSON.parse(user));
      } catch (err) {
        console.error('Error parsing user from localStorage:', err);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Email/Password Register
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: Date.now().toString(),
            name,
            email,
            accountType: 'free',
            createdAt: new Date().toISOString()
          });
        }, 800);
      });

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(response));
      setCurrentUser(response);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Registration failed');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Email/Password Login
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Demo credentials check
          if (email === 'demo@example.com' && password === 'password') {
            resolve({
              id: '123456',
              name: 'Demo User',
              email,
              accountType: 'free',
              createdAt: '2023-01-01T00:00:00Z'
            });
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 800);
      });

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(response));
      setCurrentUser(response);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Login failed');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const googleSignIn = async (googleUser) => {
    try {
      setLoading(true);
      setError(null);

      // Parse Google user data
      const userData = {
        id: googleUser.id || Date.now().toString(),
        name: googleUser.name,
        email: googleUser.email,
        accountType: 'free',
        createdAt: new Date().toISOString(),
        googleId: googleUser.googleId
      };

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      setCurrentUser(userData);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Google sign in failed');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const updatedUser = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...currentUser,
            ...userData,
            updatedAt: new Date().toISOString()
          });
        }, 800);
      });

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Profile update failed');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Upgrade to premium
  const upgradeToPremium = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const updatedUser = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...currentUser,
            accountType: 'premium',
            premiumSince: new Date().toISOString()
          });
        }, 800);
      });

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Upgrade failed');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    googleSignIn,
    logout,
    updateProfile,
    upgradeToPremium,
    isPremium: currentUser?.accountType === 'premium'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>);

}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}