import { position } from "../src/position";

describe('position', () => {
    it('return 3 for Earth', () => {
        expect(position("Earth")).toEqual(3);
    });

    it('return 6 for sAtUrN', () => {
      expect(position("sAtUrN")).toEqual(6);
    });
});