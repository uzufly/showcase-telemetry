import { readFileSync } from 'fs';
import path from 'path';

export default function handler(request, response) {
  const file = path.join(process.cwd(), 'api', 'files', 'test.json');
  const stringified = readFileSync(file, 'utf8');
  console.log("/api/readfile called, file contents: ", stringified);

  response.setHeader('Content-Type', 'application/json');
  return response.end(stringified);
}
