function calculateLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input

    let distanceA = getDistanceBetweenPoints(x1, x2, y1, y2)
    let distanceB = getDistanceBetweenPoints(x2, x3, y2, y3)
    let distanceC = getDistanceBetweenPoints(x1, x3, y1, y3)


    if ((distanceA <= distanceC) && (distanceC >= distanceB)) {
        let a = distanceA + distanceB;
        console.log('1->2->3: ' + a);
    }
    else if ((distanceA <= distanceB) && (distanceC < distanceB)) {
        let b = distanceC + distanceA;
        console.log('2->1->3: ' + b);
    }
    else {
        let c = distanceB + distanceC;
        console.log('1->3->2: ' + c);
    }


    function getDistanceBetweenPoints(x1, x2, y1, y2) {
        let distanceX = Math.pow(x2 - x1, 2)
        let distanceY = Math.pow(y2 - y1, 2)

        return Math.sqrt(distanceX + distanceY)
    }
}

calculateLength([0, 0, 2, 0, 4, 0])
console.log()
calculateLength([5, 1, 1, 1, 5, 4])
console.log()
calculateLength([-1, -2, 3.5, 0, 0, 2])