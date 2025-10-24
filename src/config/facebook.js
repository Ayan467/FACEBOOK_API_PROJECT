require('dotenv').config();

module.exports = {
  appId: process.env.FACEBOOK_APP_ID,
  appSecret: process.env.FACEBOOK_APP_SECRET,
  accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
  baseUrl: 'https://graph.facebook.com/v18.0',
  redirectUri: `${process.env.BASE_URL}/auth/facebook/callback`
};