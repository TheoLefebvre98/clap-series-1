import { discount } from "../src/discount";

describe('discount', () => {
    it('return expected discount price', () => {
        expect(discount(100, 30)).toEqual("70 €")
        expect(discount(100, 20)).toEqual("80 €")
        expect(discount(800, 20)).toEqual("640 €")
    });
});