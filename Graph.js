class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if(!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]) {
            this.addVertex[vertex2]
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjList[vertex]) {
            return 
        }

        for(let adjvert of this.adjList[vertex]) {
            this.removeEdge(vertex, adjvert)
        }

        delete this.adjList[vertex]
    }

    diplay() {
        for(let vertex in this.adjList[vetex]) {
            console.log(vertex + "->" + [...this.adjList[vertex]])
        }
    }
}