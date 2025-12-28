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
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (text, apiUrl) => {
                // Create a floating badge near the selection
                const selection = window.getSelection();
                if (!selection.rangeCount) return;
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                const badge = document.createElement('div');
                badge.style.position = 'absolute';
                badge.style.left = `${rect.right + window.scrollX + 5}px`;
                badge.style.top = `${rect.top + window.scrollY}px`;
                badge.style.zIndex = '999999';
                badge.style.padding = '4px 8px';
                badge.style.borderRadius = '4px';
                badge.style.fontSize = '12px';
                badge.style.fontWeight = 'bold';
                badge.style.backgroundColor = '#f1f5f9';
                badge.style.border = '1px solid #cbd5e1';
                badge.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                badge.style.display = 'flex';
                badge.style.alignItems = 'center';
                badge.style.gap = '6px';
                badge.innerHTML = '<span class="satya-loader" style="width:12px;height:12px;border:2px solid #cbd5e1;border-top:2px solid #3b82f6;border-radius:50%;animation:spin 1s linear infinite;display:inline-block"></span> Checking...';

                // Add spin keyframes if not exists
                if (!document.getElementById('satya-style')) {
                    const style = document.createElement('style');
                    style.id = 'satya-style';
                    style.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
                    document.head.appendChild(style);
                }

                document.body.appendChild(badge);

                fetch(`${apiUrl}/analyze`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: text })
                })
                    .then(res => res.json())
                    .then(data => {
                        const isFake = data.isFake;
                        badge.style.backgroundColor = isFake ? '#fef2f2' : '#f0fdf4';
                        badge.style.borderColor = isFake ? '#fecaca' : '#bbf7d0';
                        badge.style.color = isFake ? '#991b1b' : '#166534';

                        // Icon
                        const icon = isFake ? '❌' : '✅';
                        const label = isFake ? 'Fake' : 'Verified';

                        badge.innerHTML = `${icon} <span style="font-weight:600">${label}</span>`;

                        // Add a small popup on hover to show reason
                        const reason = document.createElement('div');
                        reason.style.display = 'none';
                        reason.style.position = 'absolute';
                        reason.style.top = '100%';
                        reason.style.left = '0';
                        reason.style.marginTop = '4px';
                        reason.style.width = '200px';
                        reason.style.padding = '8px';
                        reason.style.backgroundColor = 'white';
                        reason.style.border = '1px solid #e2e8f0';
                        reason.style.borderRadius = '6px';
                        reason.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                        reason.style.fontSize = '11px';
                        reason.style.fontWeight = 'normal';
                        reason.style.color = '#334155';
                        reason.style.lineHeight = '1.4';
                        reason.innerText = data.explanation.reason;

                        badge.appendChild(reason);

                        badge.onmouseenter = () => { reason.style.display = 'block'; };
                        badge.onmouseleave = () => { reason.style.display = 'none'; };

                        // Remove badge after 10 seconds
                        setTimeout(() => badge.remove(), 10000);
                    })
                    .catch(() => {
                        badge.textContent = '❌ Error';
                        setTimeout(() => badge.remove(), 3000);
                    });
            },
            args: [info.selectionText, API_URL]
        });
    }
});
