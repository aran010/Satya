const API_URL = "https://sahil909-satya-backend.hf.space";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "verify-satya",
        title: "Verify \"%s\" with Satya",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "verify-satya" && info.selectionText) {
        // Inject script to show loading/result toast on the page
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (text, apiUrl) => {
                // Simple toast notification injected into the page
                const showToast = (msg, isError = false) => {
                    const div = document.createElement('div');
                    div.style.position = 'fixed';
                    div.style.bottom = '20px';
                    div.style.right = '20px';
                    div.style.padding = '15px 20px';
                    div.style.background = isError ? '#ef4444' : '#1e3a8a';
                    div.style.color = 'white';
                    div.style.borderRadius = '8px';
                    div.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    div.style.zIndex = '999999';
                    div.style.fontFamily = 'system-ui, sans-serif';
                    div.style.maxWidth = '300px';
                    div.textContent = msg;
                    document.body.appendChild(div);
                    setTimeout(() => div.remove(), 5000);
                };

                showToast("Satya is verifying...");

                fetch(`${apiUrl}/analyze`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: text })
                })
                    .then(res => res.json())
                    .then(data => {
                        showToast(data.isFake ? `⚠️ Rumor Detected: ${data.explanation.reason.substring(0, 50)}...` : "✅ Verified Source!");
                    })
                    .catch(() => showToast("Error connecting to Satya", true));
            },
            args: [info.selectionText, API_URL]
        });
    }
});
