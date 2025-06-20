// URL Context for managing shortened URLs
const UrlContext = React.createContext();

function UrlProvider({ children }) {
  const [urls, setUrls] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { currentUser } = useAuth();

  // Load user's URLs on auth change
  React.useEffect(() => {
    if (currentUser) {
      loadUserUrls();
    } else {
      // Clear URLs when user logs out
      setUrls([]);
    }
  }, [currentUser]);

  // Load URLs for the current user
  const loadUserUrls = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const userUrls = await new Promise((resolve) => {
        setTimeout(() => {
          // Get URLs from localStorage or return demo data
          const storedUrls = localStorage.getItem(`urls_${currentUser.id}`);
          if (storedUrls) {
            resolve(JSON.parse(storedUrls));
          } else {
            resolve([
            {
              id: '1',
              originalUrl: 'https://example.com/very/long/url/that/needs/shortening/for/demonstration/purposes',
              shortCode: 'abc123',
              customAlias: null,
              createdAt: '2023-06-15T10:30:00Z',
              clicks: 42,
              userId: currentUser.id
            },
            {
              id: '2',
              originalUrl: 'https://anotherexample.com/blog/post/with/long/url',
              shortCode: 'def456',
              customAlias: 'myblog',
              createdAt: '2023-06-10T14:45:00Z',
              clicks: 17,
              userId: currentUser.id
            }]
            );
          }
        }, 800);
      });

      setUrls(userUrls);
    } catch (err) {
      setError(err.message || 'Failed to load URLs');
      console.error('Error loading URLs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create a new shortened URL
  const createShortUrl = async (originalUrl, customAlias = null) => {
    try {
      setLoading(true);
      setError(null);

      // Generate random code if no custom alias
      const shortCode = customAlias || generateRandomCode(6);

      // Check if custom alias is available (if provided)
      if (customAlias) {
        const isAvailable = await checkAliasAvailability(customAlias);
        if (!isAvailable) {
          throw new Error('Custom alias is already taken');
        }
      }

      // Simulate API call - would be replaced with actual backend call
      const newUrl = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: Date.now().toString(),
            originalUrl,
            shortCode,
            customAlias: customAlias || null,
            createdAt: new Date().toISOString(),
            clicks: 0,
            userId: currentUser?.id || null
          });
        }, 800);
      });

      // If user is logged in, add to their URLs
      if (currentUser) {
        const updatedUrls = [...urls, newUrl];
        setUrls(updatedUrls);

        // Save to localStorage
        localStorage.setItem(`urls_${currentUser.id}`, JSON.stringify(updatedUrls));
      }

      return { success: true, data: newUrl };
    } catch (err) {
      setError(err.message || 'Failed to create short URL');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Delete a shortened URL
  const deleteUrl = async (urlId) => {
    if (!currentUser) return { success: false, error: 'You must be logged in' };

    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });

      // Remove URL from state
      const updatedUrls = urls.filter((url) => url.id !== urlId);
      setUrls(updatedUrls);

      // Update localStorage
      localStorage.setItem(`urls_${currentUser.id}`, JSON.stringify(updatedUrls));

      return { success: true };
    } catch (err) {
      setError(err.message || 'Failed to delete URL');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Get analytics for a specific URL
  const getUrlAnalytics = async (urlId) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call - would be replaced with actual backend call
      const analytics = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            clicks: {
              total: 68,
              lastWeek: 24,
              lastMonth: 42
            },
            referrers: [
            { source: 'direct', count: 30 },
            { source: 'twitter.com', count: 15 },
            { source: 'facebook.com', count: 12 },
            { source: 'linkedin.com', count: 8 },
            { source: 'other', count: 3 }],

            devices: [
            { type: 'desktop', count: 40 },
            { type: 'mobile', count: 25 },
            { type: 'tablet', count: 3 }],

            browsers: [
            { name: 'Chrome', count: 35 },
            { name: 'Firefox', count: 12 },
            { name: 'Safari', count: 15 },
            { name: 'Edge', count: 5 },
            { name: 'Other', count: 1 }],

            locations: [
            { country: 'United States', count: 30 },
            { country: 'United Kingdom', count: 12 },
            { country: 'Canada', count: 8 },
            { country: 'Germany', count: 6 },
            { country: 'Other', count: 12 }],

            clicksOverTime: [
            { date: '2023-06-01', count: 2 },
            { date: '2023-06-02', count: 5 },
            { date: '2023-06-03', count: 3 },
            { date: '2023-06-04', count: 7 },
            { date: '2023-06-05', count: 4 },
            { date: '2023-06-06', count: 6 },
            { date: '2023-06-07', count: 8 }]

          });
        }, 800);
      });

      return { success: true, data: analytics };
    } catch (err) {
      setError(err.message || 'Failed to get analytics');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Utility function to generate random code
  const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Check if custom alias is available
  const checkAliasAvailability = async (alias) => {
    // Simulate API call - would be replaced with actual backend call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if alias exists in current URLs
        const exists = urls.some((url) => url.customAlias === alias || url.shortCode === alias);
        resolve(!exists);
      }, 500);
    });
  };

  const value = {
    urls,
    loading,
    error,
    createShortUrl,
    deleteUrl,
    getUrlAnalytics,
    checkAliasAvailability,
    refreshUrls: loadUserUrls
  };

  return (
    <UrlContext.Provider value={value}>
      {children}
    </UrlContext.Provider>);

}

function useUrls() {
  const context = React.useContext(UrlContext);
  if (context === undefined) {
    throw new Error('useUrls must be used within a UrlProvider');
  }
  return context;
}