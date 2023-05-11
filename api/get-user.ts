import type { VercelRequest, VercelResponse } from '@vercel/node';
import { tracer, context } from './_otel-initialiser.js';

export default async function handler(_request: VercelRequest, response: VercelResponse) {
  const span = tracer.startSpan('handler', undefined, context.active());
  const ms = Math.floor(Math.random() * 1000);
  span.setAttribute('sleep', ms);
  await new Promise((resolve) => setTimeout(resolve, ms));
  response.status(200).json({ greetings: `Hi there ${ms}!` });
  span.end();
}
