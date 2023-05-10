export const config = { runtime: 'edge' };

export default function handler(request, context) {
  // https://vercel.com/docs/concepts/functions/edge-functions/edge-functions-api#request-properties
  return new Response(`Hello from an Edge Function! ${request.url}`);
}
