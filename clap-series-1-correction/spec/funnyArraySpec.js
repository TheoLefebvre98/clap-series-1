import { funnyArray } from "../src/funnyArray";

describe('funnyArray', () => {
    it("return 'petit'", () => {
        expect(funnyArray(['un', 'petit', 'tableau'])).toEqual('petit');
    });

    it("return 5", () => {
        expect(funnyArray([1,2,3,4])).toEqual(5);
    });

    it("return 'plusgrand'", () => {
      expect(funnyArray(['un', 'plus', 'grand', 'tableau'])).toEqual('plusgrand');
    });

    it("return 'rien' with empty array", () => {
      expect(funnyArray([])).toEqual('rien');
    });
});