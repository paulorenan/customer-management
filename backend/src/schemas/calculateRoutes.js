// Function to calculate the distance between two points in the Cartesian plane
const calculateDistance = (point1, point2) => {
    const [x1, y1] = point1.split(',').map(parseFloat);
    const [x2, y2] = point2.split(',').map(parseFloat);
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Function to calculate the total distance of a route
const calculateTotalDistance = (route, clients) => {
    let totalDistance = 0;
    for (let i = 0; i < route.length - 1; i++) {
        totalDistance += calculateDistance(
            clients[route[i]].address,
            clients[route[i + 1]].address
        );
    }
    // Adding distance back to the starting point
    totalDistance += calculateDistance(
        clients[route[route.length - 1]].address,
        clients[route[0]].address
    );
    return totalDistance;
}

// Function to permute possible routes
const permuteRoute = (array) => {
    const results = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            results.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const current = arr.slice();
                const next = current.splice(i, 1);
                permute(current.slice(), m.concat(next));
            }
        }
    }

    permute(array);

    return results;
}

// Main function to find the shortest route
const findShortestRoute = (clients) => {
    const clientKeys = Object.keys(clients);
    const possibleRoutes = permuteRoute(clientKeys);
    let shortestDistance = Infinity;
    let shortestRoute;

    possibleRoutes.forEach(route => {
        const distance = calculateTotalDistance(route, clients);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            shortestRoute = route;
        }
    });

    return shortestRoute.map(key => clients[key]);
}

module.exports = {
    findShortestRoute
};
