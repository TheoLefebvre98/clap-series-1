import { increment } from "../src/increment";

describe('increment', () => {
    it('return next value', () => {
        expect(increment(12)).toEqual(13)
        expect(increment(860)).toEqual(861)
    });

    it('return error message', () => {
      expect(increment("bonjour")).toEqual("bonjour doit être un nombre !")
    });
});