const calculateDistance = (point1, point2) => {
    const [x1, y1] = point1.split(',').map(Number);
    const [x2, y2] = point2.split(',').map(Number);
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const calculateShortestDistance = (points) => {
    const n = points.length;
    const visited = new Array(n).fill(false);
    const path = [];
    let currentPoint = points[0];

    for (let i = 0; i < n - 1; i++) {
        let shortestDistance = Infinity;
        let nextPoint;

        for (let j = 0; j < n; j++) {
            if (!visited[j]) {
                const distance = calculateDistance(currentPoint.address, points[j].address);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nextPoint = points[j];
                }
            }
        }

        path.push(nextPoint);
        visited[points.findIndex(point => point === nextPoint)] = true;
        currentPoint = nextPoint;
    }

    path.push(points[0]);

    const sortedPoints = points.sort((a, b) => {
        return path.indexOf(a) - path.indexOf(b);
    });

    return sortedPoints;
};


module.exports = {
    calculateShortestDistance
};
