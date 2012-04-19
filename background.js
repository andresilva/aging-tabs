var timeStamp = new Date().getTime();
var elapsedTime = function() {
    var newTimestamp = new Date().getTime();
    var ret = newTimestamp - timeStamp;
    timeStamp = newTimestamp;
    return ret;
};

setInterval(function() {
    chrome.tabs.query({}, function(tabs) {
        alert(tabs.length + " tabs opened.");
    });
}, 3000);
