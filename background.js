chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status === "complete") {
        chrome.tabs.executeScript(tabId, {file: "jquery.min.js"}, function () {
            chrome.tabs.executeScript(tabId, {file: "script.js"});
            // function reload() {
            //     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            //         chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            //     });
            // }
            //
            // chrome.runtime.onMessage.addListener(function (msg) {
            //     alert(JSON.stringify(msg))
            //     if (msg.e1 || msg.e2 === "Unable to Process Request") {
            //         setTimeout(reload, 5000)
            //     }
            // })
            //
            // chrome.tabs.executeScript(null, {
            //     code: "alert(document.querySelector('p').innerText)"
            // });
        });
    }
});