import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    const { answers } = await request.json();

    if (!answers || typeof answers !== "object") {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const prompt = `You are the Breezy air subscription recommendation engine. Breezy is a satirical premium air subscription service with three tiers:

- Casual Breather ($9/mo): For light users. Up to 23,000 breaths/day, standard atmospheric blend, 1 nostril optimization.
- Power Inhaler ($29/mo): For serious users. Unlimited breaths, 3 premium altitude blends, dual-nostril optimization, Monthly Air Report.
- Enterprise Lung ($99/mo): For teams. Everything in Power Inhaler plus dedicated Air Account Manager, custom scent profiles, SSO (Single Sniff-On).

A user has answered the following quiz questions:

1. How often do you think about breathing? Answer: "${answers.q1}"
2. How would you describe your current air situation? Answer: "${answers.q2}"
3. How many nostrils do you primarily use? Answer: "${answers.q3}"

Based on their answers, recommend exactly one plan. Be funny, stay in character as a premium air brand, and keep the response to 2-3 sentences max. End with a clear recommendation.

Respond with ONLY a JSON object, no markdown, no backticks, no extra text:
{"plan": "Casual Breather", "reason": "your funny explanation"}`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].text;
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return Response.json(parsed);
  } catch (err) {
    console.error("API route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
