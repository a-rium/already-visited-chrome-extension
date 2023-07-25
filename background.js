chrome.history.onVisited.addListener(url => {
    if (url.visitCount > 1) {
        const options = {
            title: "Attenzione!",
            message: "Hai visitato questa pagina più di una volta!",
            iconUrl: "./hello_extension.png",
            type: "basic"
        };
        chrome.notifications.create(null, options);
    }
});