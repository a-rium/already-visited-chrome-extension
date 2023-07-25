chrome.history.onVisited.addListener(url => {
    if (url.visitCount > 1) {
        const options: chrome.notifications.NotificationOptions = {
            title: "Warning!",
            message: "You have already visited this page.",
            iconUrl: "./extension_icon.png",
            type: "basic"
        };
        chrome.notifications.create(null, options);
    }
});