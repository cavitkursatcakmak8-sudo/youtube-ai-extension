// YouTube Inspector Script

function analyzeYouTubeChannel() {
    // Fetching view count
    const viewCountElement = document.querySelector('meta[itemprop="interactionCount"]').getAttribute('content');
    const viewCount = parseInt(viewCountElement) || 0;

    // Fetching subscriber count
    const subscriberCountElement = document.querySelector('#subscriber-count');
    const subscriberCount = parseInt(subscriberCountElement.innerText.replace(/[^\d]/g, '')) || 0;

    // Fetching channel performance metrics
    const performanceMetrics = fetchPerformanceMetrics();

    // Displaying the results
    console.log(`View Count: ${viewCount}`);
    console.log(`Subscriber Count: ${subscriberCount}`);
    console.log(`Performance Metrics: ${JSON.stringify(performanceMetrics)}`);
}

function fetchPerformanceMetrics() {
    // Assume we fetch additional metrics here
    return {
        averageViewsPerVideo: 10000,
        engagementRate: '5%'
    };
}

// Run the analyzer
analyzeYouTubeChannel();
