// Utility functions
const helpers = {
  validateAccessToken(token) {
    return token && token.length > 10;
  },

  formatFacebookResponse(data) {
    return {
      success: true,
      timestamp: new Date().toISOString(),
      data: data
    };
  },

  handleError(error) {
    console.error('Facebook API Error:', error);
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

module.exports = helpers;