const facebookService = require('../services/facebookService');

class FacebookController {
  async getUserProfile(req, res) {
    try {
      const profile = await facebookService.getUserProfile();
      res.json({ success: true, data: profile });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getUserPages(req, res) {
    try {
      const pages = await facebookService.getUserPages();
      res.json({ success: true, data: pages });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async postToPage(req, res) {
    try {
      const { pageId, message } = req.body;
      
      if (!pageId || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Page ID and message are required' 
        });
      }

      const result = await facebookService.postToPage(pageId, message);
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getPageInsights(req, res) {
    try {
      const { pageId } = req.params;
      const insights = await facebookService.getPageInsights(pageId);
      res.json({ success: true, data: insights });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = new FacebookController();