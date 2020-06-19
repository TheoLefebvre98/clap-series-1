import Card from "../src/Card"

describe('Card', () => {
  describe('score', () => {
    it('return 21 with 2d', () => {
        let card = new Card("2d")
        expect(card.score()).toEqual(21)
    })

    it('return 32 with 3c', () => {
      let card = new Card("3c")
      expect(card.score()).toEqual(32)
    })

    it('return 43 with 4h', () => {
      let card = new Card("4h")
      expect(card.score()).toEqual(43)
    })

    it('return 54 with 5s', () => {
      let card = new Card("5s")
      expect(card.score()).toEqual(54)
    })
  })
})