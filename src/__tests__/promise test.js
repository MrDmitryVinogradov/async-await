import GameSavingLoader from '../js/classes/GameSavingLoader';

test('promises class', async () => {
  let result = await new GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    }
  });
});