chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({}, function () {
    console.log("Crypter is Added.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([]);
  });
});
