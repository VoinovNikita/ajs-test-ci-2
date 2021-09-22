import sortXp from '../../index';

test('1 the more hp a character has, the higher it is', () => {
  const result = sortXp([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(expected);
});

test('2 the more hp a character has, the higher it is', () => {
  const result = sortXp([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ]);
  const expected = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];
  expect(result).toEqual(expected);
});

test('3 the more hp a character has, the higher it is', () => {
  const result = sortXp([
    { name: 'мечник', health: 15 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
    { name: 'мечник', health: 15 },
  ];
  expect(result).toEqual(expected);
});
