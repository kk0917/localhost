import { serve } from 'https://deno.land/std@0.81.0/http/server.ts';

const portNum = parseInt(Deno.args[0]);
const server  = serve({hostname: '0.0.0.0', port: portNum});

console.log(`HTTPwebserver running. Access it at: http://localhost:${portNum}/`);

for await (const request of server) {
  let bodyContent = 'Your user-agent is:\n\n';
  bodyContent += request.headers.get('user-agent') || 'Unknown';

  request.respond({status: 200, body: bodyContent});
}
