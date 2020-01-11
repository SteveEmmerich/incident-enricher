import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Logger from 'koa-logger';
import * as Cors from '@koa/cors';

import { initData, fetchWeather } from './commands';
import { Incidnet } from './models/incident.model';

const initApp = async port => {
  // Initial data load. Not fancy and could be improved
  let mappedIncidentData;
  try {
    const incidentData = await initData();
    mappedIncidentData = await Promise.all(
      incidentData.map(async (incident: Incidnet) => {
        const incidentWeather = await fetchWeather(incident.address);
        return { ...incident, weather: incidentWeather };
      })
    );
  } catch (e) {
    console.log(`error in processing data ${e}`);
  }

  // Create the app

  // TODO: Use spdy, http/2, or https instead
  const app = new Koa();
  const router = new Router();

  // Main route. We are not being complicated here
  // TODO: read the json and hit weather api
  router.get('/incidents', async ctx => {
    console.log('inident called');
    ctx.body = mappedIncidentData;
  });

  // TODO: Add cors and other safety precautions
  app.use(Cors());
  app.use(Logger());
  app.use(router.routes());

  // TODO: add error checking and graceful shutdown.
  // TODO: check if port is in use.
  app.listen(port);

  console.log(`Server running on port ${port}`);
};

initApp(3001);
