import * as Koa from 'koa';
import * as Router from 'koa-router';
import { initData, fetchWeather } from './commands';
import { Incidnet } from './models/incident.model';

const initApp = async port => {
  const incidentData = await initData();
  const mappedIncidentData = await Promise.all(
    incidentData.map(async (incident: Incidnet) => {
      const incidentWeather = await fetchWeather(incident.address);
      return { ...incident, weather: incidentWeather };
    })
  );

  // Create the app

  // TODO: Use spdy, http/2, or https instead
  const app = new Koa();
  const router = new Router();

  // Main route. We are not being complicated here
  // TODO: read the json and hit weather api
  router.get('/*', async ctx => {
    ctx.body = mappedIncidentData;
  });

  // TODO: Add cors and other safety precautions
  app.use(router.routes());

  // TODO: add error checking and graceful shutdown.
  // TODO: check if port is in use.
  app.listen(port);

  console.log(`Server running on port ${port}`);
};

initApp(3000);
