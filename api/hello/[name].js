export default function handler(request, response) {
  // api/[name].js -> /api/lee
  // request.query.name -> "lee"
  const { name = 'World' } = request.query;
  console.log("/api/hello/[name] called with name: ", name);
  return response.end(`Hello ${name}!`);
}
