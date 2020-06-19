import { fizzBuzz } from "../src/example";

describe('fizzBuzz', () => {
    it('return expected fizz', () => {
        expect(fizzBuzz(6)).toEqual('Fizz');
    });

    it('return expected buzz', () => {
      expect(fizzBuzz(10)).toEqual('Buzz');
    });

    it('return expected fizzbuzz', () => {
      expect(fizzBuzz(30)).toEqual('FizzBuzz');
    });

    it('return expected 7', () => {
      expect(fizzBuzz(7)).toEqual('7');
    });
});