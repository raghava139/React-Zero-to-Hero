import { Sum } from "../sum"

test('sum calculates', () => {
        const result = Sum(20, 30);
        expect(result).toBe(50)
})