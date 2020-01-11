import * as Koa from 'koa';
import * as Router from 'koa-router';

// Create the app
// TODO: Use spdy, http/2, or https instead
const app = new Koa();
const router = new Router();

// Main route. We are not being complicated here
// TODO: read the json and hit weather api
router.get('/*', async ctx => {
  ctx.body = 'hello world';
});

app.use(router.routes());

// TODO: add error checking and graceful shutdown.
// TODO: check if port is in use.
app.listen(3000);

console.log(`Server running on port 3000`);
