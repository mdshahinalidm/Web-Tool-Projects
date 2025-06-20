// Validation utility functions

// Validate email format
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate password strength
function validatePassword(password) {
  // Check if password meets minimum requirements
  // - At least 8 characters
  if (password.length < 8) {
    return {
      valid: false,
      message: 'Password must be at least 8 characters long'
    };
  }

  // Optionally check for stronger password requirements
  // Uncomment these for stricter validation
  /*
  // - At least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  
  // - At least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }
  
  // - At least one number
  if (!/[0-9]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one number'
    };
  }
  
  // - At least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one special character'
    };
  }
  */

  return {
    valid: true,
    message: 'Password is valid'
  };
}

// Validate URL format
function validateUrl(url) {
  try {
    new URL(url);
    return {
      valid: true,
      message: 'URL is valid'
    };
  } catch (_) {
    return {
      valid: false,
      message: 'Please enter a valid URL'
    };
  }
}

// Validate custom URL alias
function validateCustomAlias(alias) {
  // Check if alias meets the requirements
  // - Only letters, numbers, hyphens, and underscores allowed
  if (!/^[a-zA-Z0-9-_]+$/.test(alias)) {
    return {
      valid: false,
      message: 'Custom alias can only contain letters, numbers, hyphens, and underscores'
    };
  }

  // Check for reserved words (add more as needed)
  const reservedWords = ['api', 'dashboard', 'admin', 'login', 'signup', 'pricing', 'profile', 'settings', 'help', 'support', 'about', 'terms', 'privacy'];
  if (reservedWords.includes(alias.toLowerCase())) {
    return {
      valid: false,
      message: 'This alias is reserved and cannot be used'
    };
  }

  return {
    valid: true,
    message: 'Custom alias is valid'
  };
}

// Validate form data
function validateFormData(data, validations) {
  const errors = {};

  for (const field in validations) {
    const value = data[field];
    const validation = validations[field];

    // Check if field is required
    if (validation.required && !value) {
      errors[field] = `${validation.label || field} is required`;
      continue;
    }

    // Skip validation if field is empty and not required
    if (!value && !validation.required) continue;

    // Run custom validation function if provided
    if (validation.validate) {
      const result = validation.validate(value);
      if (!result.valid) {
        errors[field] = result.message;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}