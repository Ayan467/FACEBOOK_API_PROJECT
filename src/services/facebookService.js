const axios = require('axios');
const facebookConfig = require('../config/facebook');

class FacebookService {
  constructor() {
    this.baseURL = facebookConfig.baseUrl;
    this.accessToken = facebookConfig.accessToken;
  }

  async makeAPIRequest(endpoint, params = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await axios.get(url, {
        params: {
          access_token: this.accessToken,
          ...params
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Facebook API error: ${error.response?.data?.error?.message || error.message}`);
    }
  }

  // Get user profile
  async getUserProfile(userId = 'me') {
    return await this.makeAPIRequest(`/${userId}`, {
      fields: 'id,name,email,picture'
    });
  }

  // Get user pages
  async getUserPages(userId = 'me') {
    return await this.makeAPIRequest(`/${userId}/accounts`, {
      fields: 'id,name,access_token,category'
    });
  }

  // Post to page
  async postToPage(pageId, message) {
    return await this.makeAPIRequest(`/${pageId}/feed`, {
      message: message
    }, 'POST');
  }

  // Get page insights
  async getPageInsights(pageId, metrics = 'page_impressions') {
    return await this.makeAPIRequest(`/${pageId}/insights`, {
      metric: metrics
    });
  }
}

module.exports = new FacebookService();