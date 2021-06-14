chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status === "complete") {
        chrome.tabs.executeScript(tabId, {file: "jquery.min.js"}, function () {
            chrome.tabs.executeScript(tabId, {file: "script.js"});
        });
    }
});
