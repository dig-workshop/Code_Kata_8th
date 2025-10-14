import {describe, expect, test} from "vitest";
import {FizzBuzz} from "./FizzBuzz";

describe('FizzBuzz',() => {
    test('1を入力したら1を返す',() => {
        const result = FizzBuzz(1);
        expect(result).toBe(1)
    })
    test('2を入力したら2を返す',() => {
        const result = FizzBuzz(2);
        expect(result).toBe(2)
    })
    describe('3で割り切れる数',() => {
        test('3を入力したらFizzを返す',() => {
            const result = FizzBuzz(3);
            expect(result).toBe('Fizz')
        })

        test('6を入力したらFizzを返す',() => {
            const result = FizzBuzz(6);
            expect(result).toBe('Fizz')
        })
    })
    describe('5で割り切れる数',() => {
        test('5を入力したらBuzzを返す',() => {
            const result = FizzBuzz(5);
            expect(result).toBe('Buzz')
        })

        test('10を入力したらBuzzを返す',() => {
            const result = FizzBuzz(10);
            expect(result).toBe('Buzz')
        })
    })
    describe('15で割り切れる数',() => {
        test('15を入力したらFizzBuzzを返す',() => {
            const result = FizzBuzz(15);
            expect(result).toBe('FizzBuzz')
        })

        test('30を入力したらFizzBuzzを返す',() => {
            const result = FizzBuzz(30);
            expect(result).toBe('FizzBuzz')
        })
    })
})

