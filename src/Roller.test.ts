import { Roller } from './Roller';

describe('Roller', () => {
  describe('constructor', () => {
    test('The constructor of the Roller class should automatically assign six as the number of faces if the provided value is not a valid number for a die face count', () => {
      const roller = new Roller(0);
      expect(roller['_faces']).toEqual(6);
    });

    test('The constructor should assign the number of faces to the specified value if it is a valid input', () => {
      const roller = new Roller(7);
      expect(roller['_faces']).toEqual(7);
    });
  });

  describe('roll', () => {
    test('The roll function should output 0 if the input value is not valid for the number of faces on the die', () => {
      const roller = new Roller(4);
      expect(roller.roll(5)).toEqual(0);
    });

    test('This test case is checking whether the roll method of the Roller class returns the provided value when it is a valid input for the number of faces of the die being rolled', () => {
      const roller = new Roller(4);
      expect(roller.roll(3)).toEqual(3);
    });

    test('This test case verifies that after rolling the die, the value of the roll should be stored as the most recent roll.', () => {
      const roller = new Roller(4);
      roller.roll(3);
      expect(roller.last()).toEqual(3);
    });

    test('The distribution of possible face values should be adjusted to reflect the occurrence of the most recent roll.', () => {
      const roller = new Roller(4);
      roller.roll(3);
      expect(roller.distribution().get(3)).toEqual(1);
    });
  });

  describe('last', () => {
    test('In the absence of any rolls, the method should return a default value of 0', () => {
      const roller = new Roller(4);
      expect(roller.last()).toEqual(0);
    });

    
    test('This test case checks if the last() method of the Roller class returns the value of the most recent roll of the die', () => {
      const roller = new Roller(4);
      roller.roll(3);
      expect(roller.last()).toEqual(3);
    });
  });

  describe('distribution', () => {
    test('The distribution method should initialize a Map with all possible face values as keys and 0 as values', () => {
      const roller = new Roller(4);
      const distribution = roller.distribution();
      expect(distribution.size).toEqual(4);
      expect(distribution.get(1)).toEqual(0);
      expect(distribution.get(2)).toEqual(0);
      expect(distribution.get(3)).toEqual(0);
      expect(distribution.get(4)).toEqual(0);
    });

    test('the distribution map should reflect the number of times each face has been rolled.', () => {
      const roller = new Roller(4);
      roller.roll(1);
      roller.roll(2);
      roller.roll(3);
      roller.roll(4);
      const distribution = roller.distribution();
      expect(distribution.get(1)).toEqual(1);
      expect(distribution.get(2)).toEqual(1);
      expect(distribution.get(3)).toEqual(1);
      expect(distribution.get(4)).toEqual(1);
      expect(distribution.get(3)).toEqual(1);
      expect(distribution.get(4)).toEqual(1);

    });
  });
});
