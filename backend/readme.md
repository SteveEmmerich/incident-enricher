---

This is the backend api for the incident system.

GOALS: Have one endpoint to return all incidents read in from the data directory. Once data is read retrive weather information from the darksky api.

Future improvements:

- Add a database
- Move this api to a serverless function that polls from a database

Stack:

- Koa2
- Jest
- Typescript
