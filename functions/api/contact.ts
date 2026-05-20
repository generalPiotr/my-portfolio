interface Env {
  MAILERSEND_API_TOKEN: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const MAX_NAME = 200;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (
    !trimmed.name ||
    !trimmed.email ||
    !trimmed.message ||
    trimmed.name.length > MAX_NAME ||
    trimmed.email.length > MAX_EMAIL ||
    trimmed.message.length > MAX_MESSAGE ||
    !EMAIL_RE.test(trimmed.email)
  ) {
    return null;
  }

  return trimmed;
}

type PagesContext = { request: Request; env: Env };

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { env, request } = context;

  if (
    !env.MAILERSEND_API_TOKEN ||
    !env.CONTACT_FROM_EMAIL ||
    !env.CONTACT_TO_EMAIL
  ) {
    console.error("Missing MailerSend or contact environment variables.");
    return jsonResponse({ error: "Contact form is not configured." }, 503);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  const payload = parsePayload(body);
  if (!payload) {
    return jsonResponse({ error: "Please fill in all fields correctly." }, 400);
  }

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  const mailResponse = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.MAILERSEND_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: {
        email: env.CONTACT_FROM_EMAIL,
        name: "Portfolio Contact Form",
      },
      to: [{ email: env.CONTACT_TO_EMAIL }],
      reply_to: [{ email: payload.email, name: payload.name }],
      subject: `Portfolio: message from ${payload.name}`,
      text,
    }),
  });

  if (!mailResponse.ok) {
    const errorText = await mailResponse.text();
    console.error("MailerSend error:", mailResponse.status, errorText);
    return jsonResponse({ error: "Failed to send message. Try again later." }, 502);
  }

  return jsonResponse({ ok: true }, 200);
};
