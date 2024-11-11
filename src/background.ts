chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "testContext",
    title: "Test context",
    contexts: ["image"],
  });
});

export {};
