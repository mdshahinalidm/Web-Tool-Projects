function Profile() {
  const { currentUser, updateProfile, loading, error } = useAuth();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [updateSuccess, setUpdateSuccess] = React.useState(false);
  const [formError, setFormError] = React.useState(null);

  // Load user data on component mount
  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
    }
  }, [currentUser]);

  // Handle profile update
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords if provided
    if (password && password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    // Only include password in update if provided
    const updateData = {
      name
    };

    if (password) {
      updateData.password = password;
    }

    try {
      setFormError(null);

      const result = await updateProfile(updateData);

      if (result.success) {
        setUpdateSuccess(true);
        setPassword('');
        setConfirmPassword('');

        // Clear success message after a delay
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 3000);
      } else {
        setFormError(result.error);
      }
    } catch (err) {
      setFormError(err.message || 'Failed to update profile');
      console.error('Profile update error:', err);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden" data-id="7i16bvdu5" data-path="components/dashboard/Profile.js">
      <div className="px-6 py-5 border-b border-gray-200" data-id="gkb3u7m13" data-path="components/dashboard/Profile.js">
        <h3 className="text-lg font-medium text-gray-900" data-id="x7j7vpfl7" data-path="components/dashboard/Profile.js">Your Profile</h3>
        <p className="mt-1 text-sm text-gray-500" data-id="ruw7mumz7" data-path="components/dashboard/Profile.js">
          Update your account information and password
        </p>
      </div>
      
      <div className="p-6" data-id="z61crkg0r" data-path="components/dashboard/Profile.js">
        {error &&
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded" data-id="eewhd4v7g" data-path="components/dashboard/Profile.js">
            <i className="fas fa-exclamation-circle mr-2" data-id="ngy5xji6n" data-path="components/dashboard/Profile.js"></i>
            {error}
          </div>
        }
        
        {updateSuccess &&
        <div className="mb-6 bg-green-50 border border-green-200 text-green-600 p-4 rounded" data-id="qgtl9ikgv" data-path="components/dashboard/Profile.js">
            <i className="fas fa-check-circle mr-2" data-id="9xf5ivnnf" data-path="components/dashboard/Profile.js"></i>
            Profile updated successfully!
          </div>
        }
        
        {formError &&
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded" data-id="aq9r5z9tr" data-path="components/dashboard/Profile.js">
            <i className="fas fa-exclamation-circle mr-2" data-id="vmdjdnsci" data-path="components/dashboard/Profile.js"></i>
            {formError}
          </div>
        }
        
        <form onSubmit={handleSubmit} className="space-y-6" data-id="zwgi36wp6" data-path="components/dashboard/Profile.js">
          <div data-id="sbey2qehx" data-path="components/dashboard/Profile.js">
            <div className="flex items-center justify-center mb-6" data-id="f6u6ssm4v" data-path="components/dashboard/Profile.js">
              <div className="relative" data-id="r98tzqm4w" data-path="components/dashboard/Profile.js">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl font-bold overflow-hidden" data-id="k9k62f2yo" data-path="components/dashboard/Profile.js">
                  {currentUser?.picture ?
                  <img
                    src={currentUser.picture}
                    alt={currentUser.name}
                    className="w-full h-full object-cover" data-id="v2ayrn657" data-path="components/dashboard/Profile.js" /> :


                  currentUser?.name?.charAt(0) || <i className="fas fa-user" data-id="fhrv53734" data-path="components/dashboard/Profile.js"></i>
                  }
                </div>
                <div className="absolute bottom-0 right-0" data-id="zpp707mep" data-path="components/dashboard/Profile.js">
                  <button
                    type="button"
                    className="bg-gray-100 rounded-full p-2 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    title="Upload new picture" data-id="iei5ex5mk" data-path="components/dashboard/Profile.js">

                    <i className="fas fa-camera" data-id="6daz1n9b9" data-path="components/dashboard/Profile.js"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="y7dpteuk4" data-path="components/dashboard/Profile.js">
              <div data-id="k3ctev944" data-path="components/dashboard/Profile.js">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="5prug9gnz" data-path="components/dashboard/Profile.js">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required data-id="31z0hnxs8" data-path="components/dashboard/Profile.js" />

              </div>
              
              <div data-id="2f53m13ux" data-path="components/dashboard/Profile.js">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="plj25y5g0" data-path="components/dashboard/Profile.js">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none"
                  value={email}
                  readOnly
                  disabled data-id="mb31qip7a" data-path="components/dashboard/Profile.js" />

                <p className="mt-1 text-xs text-gray-500" data-id="ea7ri551v" data-path="components/dashboard/Profile.js">
                  Email cannot be changed
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6" data-id="6g1pcw2rm" data-path="components/dashboard/Profile.js">
              <h4 className="text-md font-medium text-gray-900 mb-4" data-id="u1u0gxoxs" data-path="components/dashboard/Profile.js">Change Password</h4>
              <p className="text-sm text-gray-500 mb-4" data-id="4hu2jg1w1" data-path="components/dashboard/Profile.js">
                Leave blank if you don't want to change your password
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="3js0xxpqv" data-path="components/dashboard/Profile.js">
                <div data-id="ko9xn9ntl" data-path="components/dashboard/Profile.js">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1" data-id="a7n5qvss8" data-path="components/dashboard/Profile.js">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="8" data-id="dz0l7u3lk" data-path="components/dashboard/Profile.js" />

                </div>
                
                <div data-id="nsfkknydq" data-path="components/dashboard/Profile.js">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1" data-id="6rxmczhtk" data-path="components/dashboard/Profile.js">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength="8" data-id="kbob48tgj" data-path="components/dashboard/Profile.js" />

                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end" data-id="e2a1lgh3j" data-path="components/dashboard/Profile.js">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading ? 'opacity-75 cursor-not-allowed' : ''}`
              }
              disabled={loading} data-id="cvysj2l3z" data-path="components/dashboard/Profile.js">

              {loading ?
              <>
                  <i className="fas fa-spinner fa-spin mr-2" data-id="gln4nchjo" data-path="components/dashboard/Profile.js"></i>
                  Saving...
                </> :

              'Save Changes'
              }
            </button>
          </div>
        </form>
      </div>
    </div>);

}