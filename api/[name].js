export default function handler(request, response) {
  // api/[name].js -> /api/lee
  // request.query.name -> "lee"
  const { name } = request.query;
  console.log("/api/[name] called with name: ", name, request);
  return response.end(`Hello ${name}!`);
}
