"use server";

export async function askClaude(content, maxTokens, clientApiKey) {
  const apiKey = clientApiKey || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Anthropic API key. Please add it in settings or .env.local");
  }

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20240620", // using valid model name
      max_tokens: maxTokens,
      messages: [{ role: "user", content }],
    }),
  });

  const data = await resp.json();
  if (data.error) throw new Error(data.error.message || "API error");
  return (data.content || []).map((b) => b.text || "").join("");
}
