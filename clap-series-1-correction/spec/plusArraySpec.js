import { plusArray } from "../src/plusArray";

describe('plusArray', () => {
    it('return the value of 1 + 1 ', () => {
        expect(plusArray([1], [1])).toEqual(2);
    });

    it('return the value of 1 + 2 + 3 + 1 + 2 + 3', () => {
      expect(plusArray([1, 2, 3], [1, 2, 3])).toEqual(12);
    });

    it('return the value of 1 + 2 + 3 + 1 - 2 + 3', () => {
      expect(plusArray([1, 2, 3], [1, -2, 3])).toEqual(8);
    });

    it('return the value of 0 + 0 + 0 + 1 - 2 + 3', () => {
      expect(plusArray([0, 0, 0], [1, -2, 3])).toEqual(2);
    });

    it('return the value of 1 + 2 + 3', () => {
      expect(plusArray([1, 2, 3], [])).toEqual(6);
    });
});