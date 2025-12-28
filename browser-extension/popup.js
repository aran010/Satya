const API_URL = "https://sahil909-satya-backend.hf.space";

document.getElementById('verifyBtn').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value.trim();
    if (!text) return;

    const btn = document.getElementById('verifyBtn');
    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');

    btn.disabled = true;
    loader.style.display = 'block';
    resultDiv.style.display = 'none';

    try {
        const response = await fetch(`${API_URL}/analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: text })
        });

        if (!response.ok) throw new Error("Network error");
        const data = await response.json();

        resultDiv.style.display = 'block';
        resultDiv.className = data.isFake ? 'status-fake' : 'status-real';

        resultDiv.innerHTML = `
      <strong>${data.isFake ? '⚠️ POTENTIAL RUMOR' : '✅ LIKELY VERIFIED'}</strong><br/>
      <span style="color: #64748b; font-size: 11px;">Confidence: ${(data.confidence * 100).toFixed(0)}%</span><br/><br/>
      ${data.explanation.reason.substring(0, 150)}${data.explanation.reason.length > 150 ? '...' : ''}
    `;

    } catch (err) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = "Error connecting to Satya AI. Please try again.";
    } finally {
        btn.disabled = false;
        loader.style.display = 'none';
    }
});
