let Queue = require('./queue')

class Graph{
    constructor(nonOfVertices){
        this.nonOfVertices = nonOfVertices
        this.adjList = new Map()
    }

    addVertex(v){
        this.adjList.set(v,[])
    }
    addEdge(v,target){
        this.adjList.get(v).push(target)
        this.adjList.get(target).push(v)
    }
    printGraph(){
        const keys = this.adjList.keys();
        for(let key of keys){
            console.log(key,'->',this.adjList.get(key))
        }
    }


    bfs(vertex){
        const queue = new Queue.Queue()
        let visisted = {};
        queue.enQueue(vertex);
        visisted[vertex] = true;

        while(!queue.isEmpty()){
            const elem = queue.deQueue()
            console.log(elem)

            const vertices = this.adjList.get(elem)
            
            for(let vertex of vertices){

                if(!visisted(vertex)){
                    queue.enQueue(vertex);
                    visisted[vertex] = true;
                }
            }
        }
    }
    bft(){
        let visited = []
        let disconnectedCount = 0;
        for(let key of this.adjList.keys()){
        if(!visited[key]){
            disconnectedCount++;
            this.bfs(key,visited);
        }
    }
    console.log(disconnectedCount);
}

dfs(vertex,visited={}){
    visited[vertex]= true;
    console.log(vertex);

    for(let vert of this.adjList.get(vertex)){
        if(!visited[vert]){
            this.dfs(vert,visited)
        }
    }
}
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','E')
graph.addEdge('B','E')
graph.addEdge('B','D')
graph.addEdge('C','E')
graph.addEdge('C','D')

graph.printGraph()

graph.bfs(5)
graph.bfs(6)
graph.dfs(7)