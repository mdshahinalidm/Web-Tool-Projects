// Analytics utility functions for URL tracking

// Store a click event in localStorage (for demo purposes)
function storeClickEvent(urlId, clickData) {
  const clicks = JSON.parse(localStorage.getItem(`clicks_${urlId}`) || '[]');
  clicks.push({
    ...clickData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem(`clicks_${urlId}`, JSON.stringify(clicks));
}

// Get all click events for a URL (for demo purposes)
function getClickEvents(urlId) {
  return JSON.parse(localStorage.getItem(`clicks_${urlId}`) || '[]');
}

// Record a new click event
function recordClick(urlId, shortCode) {
  try {
    // Get browser and device information
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /iPad|Tablet/i.test(userAgent);

    // Determine browser
    let browser = 'Unknown';
    if (/Chrome/i.test(userAgent) && !/Chromium|Edge|Edg/i.test(userAgent)) {
      browser = 'Chrome';
    } else if (/Firefox/i.test(userAgent)) {
      browser = 'Firefox';
    } else if (/Safari/i.test(userAgent) && !/Chrome|Chromium|Edge|Edg/i.test(userAgent)) {
      browser = 'Safari';
    } else if (/Edge|Edg/i.test(userAgent)) {
      browser = 'Edge';
    }

    // Determine device type
    let deviceType = 'desktop';
    if (isMobile) {
      deviceType = 'mobile';
    } else if (isTablet) {
      deviceType = 'tablet';
    }

    // Get referrer if available
    const referrer = document.referrer || 'direct';

    // Store click data
    const clickData = {
      browser,
      deviceType,
      referrer,
      shortCode
    };

    storeClickEvent(urlId, clickData);

    return true;
  } catch (error) {
    console.error('Error recording click:', error);
    return false;
  }
}

// Generate analytics summary for a URL
function generateAnalyticsSummary(urlId) {
  const clickEvents = getClickEvents(urlId);

  if (clickEvents.length === 0) {
    return {
      totalClicks: 0,
      clicksLast7Days: 0,
      clicksLast30Days: 0,
      browsers: [],
      devices: [],
      referrers: [],
      clicksByDay: []
    };
  }

  const now = new Date();
  const last7Days = new Date(now);
  last7Days.setDate(now.getDate() - 7);

  const last30Days = new Date(now);
  last30Days.setDate(now.getDate() - 30);

  // Count clicks in time periods
  const clicksLast7Days = clickEvents.filter((click) => new Date(click.timestamp) >= last7Days).length;
  const clicksLast30Days = clickEvents.filter((click) => new Date(click.timestamp) >= last30Days).length;

  // Count unique browsers
  const browserCounts = {};
  clickEvents.forEach((click) => {
    browserCounts[click.browser] = (browserCounts[click.browser] || 0) + 1;
  });

  const browsers = Object.entries(browserCounts).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);

  // Count unique devices
  const deviceCounts = {};
  clickEvents.forEach((click) => {
    deviceCounts[click.deviceType] = (deviceCounts[click.deviceType] || 0) + 1;
  });

  const devices = Object.entries(deviceCounts).map(([type, count]) => ({
    type,
    count
  })).sort((a, b) => b.count - a.count);

  // Count unique referrers
  const referrerCounts = {};
  clickEvents.forEach((click) => {
    // Extract domain from referrer URL
    let referrer = click.referrer;
    try {
      if (referrer !== 'direct') {
        const url = new URL(referrer);
        referrer = url.hostname;
      }
    } catch (_) {

      // If parsing fails, keep original referrer
    }
    referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1;
  });

  const referrers = Object.entries(referrerCounts).map(([source, count]) => ({
    source,
    count
  })).sort((a, b) => b.count - a.count);

  // Group clicks by day
  const clicksByDay = {};
  clickEvents.forEach((click) => {
    const date = new Date(click.timestamp).toISOString().split('T')[0];
    clicksByDay[date] = (clicksByDay[date] || 0) + 1;
  });

  const clicksOverTime = Object.entries(clicksByDay).map(([date, count]) => ({
    date,
    count
  })).sort((a, b) => a.date.localeCompare(b.date)).slice(-7); // Last 7 days

  return {
    totalClicks: clickEvents.length,
    clicksLast7Days,
    clicksLast30Days,
    browsers,
    devices,
    referrers,
    clicksOverTime
  };
}

// Track URL performance over time
function trackUrlPerformance(urlId, period = '30d') {
  const clickEvents = getClickEvents(urlId);

  // Calculate date range based on period
  const now = new Date();
  const startDate = new Date(now);

  switch (period) {
    case '7d':
      startDate.setDate(now.getDate() - 7);
      break;
    case '30d':
      startDate.setDate(now.getDate() - 30);
      break;
    case '90d':
      startDate.setDate(now.getDate() - 90);
      break;
    case '1y':
      startDate.setFullYear(now.getFullYear() - 1);
      break;
    default:
      startDate.setDate(now.getDate() - 30);
  }

  // Filter clicks within the date range
  const filteredClicks = clickEvents.filter((click) =>
  new Date(click.timestamp) >= startDate
  );

  // Group clicks by day
  const clicksByDay = {};
  filteredClicks.forEach((click) => {
    const date = new Date(click.timestamp).toISOString().split('T')[0];
    clicksByDay[date] = (clicksByDay[date] || 0) + 1;
  });

  // Fill in missing days with zero counts
  const dateRange = [];
  const currentDate = new Date(startDate);

  while (currentDate <= now) {
    const dateStr = currentDate.toISOString().split('T')[0];
    dateRange.push({
      date: dateStr,
      count: clicksByDay[dateStr] || 0
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
}