// API Client for portfolio backend - visitor tracking only

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const getSessionId = () => {
  let sessionId = sessionStorage.getItem('portfolio-session-id');
  if (!sessionId) {
    sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('portfolio-session-id', sessionId);
  }
  return sessionId;
};

export const apiClient = {
  async getVisitorCount() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/visitors`);
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (error) {
      console.error('Error fetching visitor count:', error);
      return { count: 0 };
    }
  },

  async trackVisitor() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/visitors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: getSessionId() }),
      });
      if (!response.ok) throw new Error('Failed to track');
      return await response.json();
    } catch (error) {
      console.error('Error tracking visitor:', error);
      return { count: 0 };
    }
  },
};

