import { dealer } from "../src/dealer";

describe('dealer', () => {
    it('return two array', () => {
        expect(dealer().length).toEqual(2)
    });

    it('return two different arrays', () => {
      let arys = dealer();

      arys[0].forEach(element => {
        expect(arys[1].includes(element)).toEqual(false);
      });
    });
});