const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function callGemini(apiKey, context, message, attempt = 0) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [{ text: `${context}\n\nUser question: ${message}` }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  };

  const geminiRes = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await geminiRes.json();

  if (geminiRes.status === 429 && attempt < 3) {
    await sleep((attempt + 1) * 2000);
    return callGemini(apiKey, context, message, attempt + 1);
  }

  if (!geminiRes.ok) {
    console.error('Gemini error:', JSON.stringify(data));
    throw new Error(data?.error?.message || 'Gemini API error');
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, context } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });

  try {
    const reply = await callGemini(process.env.GEMINI_API_KEY, context, message);
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Server error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
