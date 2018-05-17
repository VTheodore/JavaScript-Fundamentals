function pointInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input
    let point = x >= xMin && x <= xMax && y >= yMin && y <= yMax ? "inside" : "outside"

    return point
}

console.log(pointInRect([8, -1, 2, 12, -3, 3]));
console.log(pointInRect([12.5, -1, 2, 12, -3, 3]));