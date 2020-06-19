import { orderCards } from "../src/orderCards";

describe('orderCards', () => {
    it('return expected array', () => {
        let cards = ["Qd", "7h", "8d", "As", "Qs"]
        expect(orderCards(cards)).toEqual(["As", "Qs", "Qd", "8d", "7h"])
        let cards2 = ["Qd", "9h", "8d", "As", "Qs"]
        expect(orderCards(cards2)).toEqual(["As", "Qs", "Qd", "9h", "8d"])
    });
});