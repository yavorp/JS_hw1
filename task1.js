const INF = 1000000000;

class Node {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
 
class Graph {
    constructor() {
        this.adjList = [];
    }
 
    addPath(v1, v2, weight) {
        this.adjList[v1 - 1] = this.adjList[v1 - 1] || [];
        this.adjList[v2 - 1] = this.adjList[v2 - 1] || [];
        this.adjList[v1 - 1].push(new Node(v2 - 1, weight));
        this.adjList[v2 - 1].push(new Node(v1 - 1, weight));
    }
 
    dijkstra(source) {
        let q = [];
        let distances = new Array(this.adjList.length).fill(INF);
        let visited = new Array(this.adjList.length).fill(false);
        let parents = new Array(this.adjList.length).fill(-1);
        distances[source - 1] = 0;
        q.push(new Node(source - 1, 0));
        while (q.length > 0) {
            q.sort((el1, el2) => el1.weight > el2.weight ? 1: -1);
            let currentPath = q[0];
            q.splice(0, 1);
            if(visited[currentPath.vertex]) continue;
            let parent = currentPath.vertex;
            visited[parent] = true;
            let currentNode = this.adjList[parent]
            currentNode.forEach(element => {
                let currentDistance = distances[parent] + element.weight;
                if(distances[element.vertex] > currentDistance) {
                    parents[element.vertex] = parent; 
                    q.push(new Node(element.vertex, currentDistance));
                    distances[element.vertex] = currentDistance;
                }              
            });
        }
        return distances;
    }
 
 
}

const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (error, data) => {
    let lines = data.split(/\n+/g);
    let graph = new Graph();
    lines.forEach(line => {
        [v1,v2,shit] = line.split(/\s+/g);
        if(shit != '?') {
            graph.addPath(v1,v2,parseInt(shit));
        } else {
            console.log(`${v1} ${v2} ${graph.dijkstra(v1)[v2 - 1]}`);
        }
    });
});