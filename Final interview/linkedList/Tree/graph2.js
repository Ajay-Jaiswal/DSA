
const Queue = require('./queue');

// User defined class
// to store element and its priority
class QElement {
	constructor(element, priority)
	{
		this.element = element;
		this.priority = priority;
	}
}

// PriorityQueue class
class PriorityQueue {

	// An array is used to implement priority
	constructor()
	{
		this.items = [];
	}

	// functions to be implemented
	// enqueue(item, priority)
	// dequeue()
	// front()
	// isEmpty()
	// printPQueue()
    // enqueue function to add element
// to the queue as per priority
enqueue(element, priority)
{
	// creating object from queue element
	var qElement = new QElement(element, priority);
	var contain = false;

	// iterating through the entire
	// item array to add element at the
	// correct location of the Queue
	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i].priority > qElement.priority) {
			// Once the correct location is found it is
			// enqueued
			this.items.splice(i, 0, qElement);
			contain = true;
			break;
		}
	}

	// if the element have the highest priority
	// it is added at the end of the queue
	if (!contain) {
		this.items.push(qElement);
	}
}
// dequeue method to remove
// element from the queue
dequeue()
{
	// return the dequeued element
	// and remove it.
	// if the queue is empty
	// returns Underflow
	if (this.isEmpty())
		return "Underflow";
	return this.items.shift();
}
front()
{
    // returns the highest priority element
    // in the Priority queue without removing it.
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}

// rear function
rear()
{
    // returns the lowest priority
    // element of the queue
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}

// isEmpty function
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}


// printQueue function
// prints all the element of the queue
printPQueue()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i].element + " ";
    return str;
}
}



const pq = new PriorityQueue();

class Graph{

    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;

        // represent the whole graph
        this.adjList = new Map();
    }

    addVertex(v){
        // add vertex in graph
        this.adjList.set(v,[]);


    }

    addEdge(v,target,weight){
        // this is adding edge from v to target v->target
        this.adjList.get(v).push({target:target,wt:weight});

        // this is adding edge from targte to v v<-target
        // this.adjList.get(target).push(v);
    }

    printGraph(){

        const keys = this.adjList.keys();
        for(let key of keys){
            console.log(key,'->',this.adjList.get(key));
        }
    }

    bfs(vertex,visisted={}){

        const queue = new Queue();
        

        queue.enQueue(vertex);
        visisted[vertex]=true;

        while(!queue.isEmpty()){
            const elem = queue.deQueue();
            console.log(elem);

            const vertices = this.adjList.get(elem);

            for(let vertex of vertices){

                if(!visisted[vertex]){
                    queue.enQueue(vertex);
                    visisted[vertex]=true;
                }

            }

        }
    }

    bft(){
        let visited={};
        let disconnectedCount=0;
        for(let key of this.adjList.keys()){
            if(!visited[key]){
                disconnectedCount++;
                this.bfs(key,visited);
            }
        }

        console.log(disconnectedCount);
    }

    dfs(vertex,visited={}){

        visited[vertex]=true;
        console.log(vertex);

        for(let vert of this.adjList.get(vertex)){
            if(!visited[vert]){
                this.dfs(vert,visited);
            }
        }
    }

    dijkstra(source='A'){

        let dist={};

        for(let vertex of this.adjList.keys()){
            dist[vertex]=Infinity;
        }

        dist[source]=0;
        // lesser number more priority
        pq.enqueue(source,0);

        while(!pq.isEmpty()){

            let source = pq.front().element // return minimum distance source
            pq.dequeue();
            const sourceAdj = this.adjList.get(source);
            for(let curr of sourceAdj){
                // relaxation
                if(dist[curr.target]>dist[source]+curr.wt){
                    dist[curr.target]= dist[source] + curr.wt;
                    pq.enqueue(curr.target,dist[curr.target]);
                }

            }

        }

        return dist

    }
    
}


const graph = new Graph(5);

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');



graph.addEdge('A','B',4);
graph.addEdge('A','C',1);
graph.addEdge('B','E',4);
graph.addEdge('C','B',2);
graph.addEdge('C','D',4);
graph.addEdge('D','E',4);

graph.printGraph();
// graph.bfs('A');
// console.log("+++++++++++++=====")
// graph.dfs('A');

console.log(graph.dijkstra());