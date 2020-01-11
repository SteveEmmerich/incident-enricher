import { initData } from '../readDataFiles';

test('it should read the json files with no errors', async () => {
  const data = await initData();
  console.log(JSON.stringify(data, null, 2));
  expect(data).not.toBe(null);
});
