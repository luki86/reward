import {countPoints} from "./countPoints";

describe('countPoints', () => {
    it('should return 0 points for amount less than 50', () => {
        const amount = 45;

        const result = countPoints(amount);

        expect(result).toBe(0);
    })

    it('should return 0 points for amount 50.1', () => {
        const amount = 50.1;

        const result = countPoints(amount);

        expect(result).toBe(0);
    })

    it('should return 0 points for amount equal 50', () => {
        const amount = 50;

        const result = countPoints(amount);

        expect(result).toBe(0);
    })

    it('should return 1 point for every dollar spent between range 51-100', () => {
        const amount = 70.2;

        const result = countPoints(amount);

        expect(result).toBe(20);
    })

    it('should return 2 points for every amount over 100 plus 1 point every amount over 50', () => {
        const amount = 120.3;

        const result = countPoints(amount);

        expect(result).toBe(90);
    })

    it('should return 450 for amount equal 300', () => {
        const amount = 300;

        const result = countPoints(amount);

        expect(result).toBe(450);
    })
});
