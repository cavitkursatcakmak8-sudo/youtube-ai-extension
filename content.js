// YouTube Analytics Code

// Variables to hold the data
let views = 0;
let subscribers = 0;
let performanceMetrics = {};

// Function to capture views
function captureViews(newViews) {
    views += newViews;
    calculatePerformanceMetrics();
}

// Function to capture subscribers
function captureSubscribers(newSubscribers) {
    subscribers += newSubscribers;
    calculatePerformanceMetrics();
}

// Function to calculate performance metrics
function calculatePerformanceMetrics() {
    performanceMetrics.viewToSubscriberRatio = views > 0 ? (subscribers / views) * 100 : 0;
    // Additional metrics can be calculated here
}

// Example usage
// captureViews(150);
// captureSubscribers(5);

console.log(performanceMetrics);