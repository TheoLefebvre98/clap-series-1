import { inArray } from "../src/inArray";

describe('inArray', () => {
    it('return true (array includes card)', () => {
        expect(inArray(["2d", "5s", "Ah"], "Ah")).toEqual(true)
    });

    it('return false (array not includes card)', () => {
      expect(inArray(["2d", "5s", "Ah"], "Qh")).toEqual(false)
    });
});