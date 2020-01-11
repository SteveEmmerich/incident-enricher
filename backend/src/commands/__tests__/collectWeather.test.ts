import { fetchWeather } from '../collectWeather';

test('it should fetch the weather', async () => {
  const weather = await fetchWeather({ latitude: 1, longitude: 1 });
  expect(weather).not.toBe(null);
});
