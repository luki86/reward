const minDoubledPricePoint = 100;
const minAwardPricePoint = 50

export function countPoints(amount: number) {
    const pointsToDouble = Math.max(Math.floor(amount - minDoubledPricePoint), 0);
    const points = Math.max(Math.floor(amount - pointsToDouble - minAwardPricePoint), 0);
    return pointsToDouble * 2 + points;
}
