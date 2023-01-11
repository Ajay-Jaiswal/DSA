class Node{
    constructor(data,left,right){
    this.data=data
    this.left=null
    this.right=null
    }
}

//BST - All the nodes on left subtree having lesser value than root node
//and All the nodes on right subtree having greater value than root node

//Basic operation : insertion , deletion , searching

//Given 6,4,10,3,1,5,7,12,9,8 --> Arrange it in form of BST
/**
 *           6
 *        4     10
 *      3   5  7   12
 *    1         9
 *                8 
 */
class BST{
    constructor(){
        this.root=null
    }
    //Recursive function for inserting
    insertRecursively(root,data){
        if(!root){
            const node = new Node(data);
            root=node;
            return node;
        }

        //If data is greater than current value insert in right subtree
        if(root.data<data){
            root.right=this.insertRecursively(root.right,data)
        } else {
            root.left=this.insertRecursively(root.left,data)
        }
        return root;
    }
    //Inserting data in Binary Search Tree
    insert(data){
        
        this.root=this.insertRecursively(this.root,data)
    }

    //Searching data in Binary Search Tree
    search(root,data){
        if(!root){ return "Binary Search Tree is Empty"}
        if(root.data>data){
            return this.search(root.left,data);
        } else if(root.data<data){
            return this.search(root.right,data);
        }
        return root;
    }

    //Find maximum element
    findMax(root){
        //Edge Case to handle if tree is empty
        if(!root) return "BST is Empty";

        //If root's right element is empty then simply return its root data
        if(root.right==null){
            return root;
            
        } 
        //Recursive call to this function
        return this.findMax(root.right);
    }

        //Find minimum element
        findMin(root){
            //Edge Case to handle if tree is empty
            if(!root) return "BST is Empty";
    
            //If root's right element is empty then simply return its root data
            if(root.left==null){
                return root;
                
            } 
            //Recursive call to this function
            return this.findMax(root.left);
        }

    //Inorder trvaersal of a binary search tree returns data in ascending order
    inorder(root){
        //console.log(this.root);
        if(root){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
        }
    }

    //Deleting from tree two types --> leaf node delete , non-leaf delete -> two child root delete-> to delete this we replace root node with its predecessor and successor 
    //So on right we replace root with successor because it maintains BST property & on left side deletion we take predeccesor to replace with root(deleting node having two child or one child) to maintain BST property

    //Delete a node
    delete(root,data){
        if(!root) { return null }

        if(root.data>data){
           root.left = this.delete(root.left,data);
        } else if(root.data<data){
           root.right = this.delete(root.right,data);
        }
        else{

            //we find the node we want to delete

            //if leaf node
            if(root.left==null&&root.right==null){
                return null;
            }
            else if(root.left && root.right){
                let maxNode = this.findMax(root.left)
                root.data = maxNode.data;
                root.left = this.delete(root.left,root.data)
            }
            else{
                let curr=root;
                if(root.left==null){
                    root=root.right
                }
                if(root.right==null){
                    root=root.left
                }
                curr.left=null;
                curr.right=null;

            }
        }
        // return root of the subtree
        return root; 
    }

     //Find maximum element in Whole tree
     findMaxinTree(root){
        if(!root) return -Infinity;
        
        return Math.max(this.findMaxinTree(root.right),this.findMaxinTree(root.left),root.data);
    }

        //Find manimumelement in Whole tree
        findMininTree(root){
            if(!root) return Infinity;
            
            return Math.min(this.findMininTree(root.right),this.findMininTree(root.left),root.data);
        }

    //Check given tree is Binary Search Tree or not
    //TC :- O(n^2)
    isBst(root){
        if(!root){
            return true;
        }
        if(root.left!=null && this.findMaxinTree(root.left)>root.data){ //O(n) times run 
            return false;
        }
        if(root.right!=null && this.findMininTree(root.right)<root.data){ //O(n) times run
            return false;
        }
        //Recursive call to check both tree met BST condition then return true
        return this.isBst(root.left) && this.isBst(root.right); //O(n) times run
    }

    //Check given tree is Binary Search Tree or not [Optimal Solution] TC-> 0
    isBstOptimal(root,minVal,maxVal){
        if(!root){
            return true;
        }

        if(root.data<minVal){
            return false;
        }

        if(root.data>maxVal){
            return false;
        }

        return this.isBstOptimal(root.left,minVal,root.data) && this.isBstOptimal(root.right,root.data,maxVal) 
    }


}

const bst = new BST();
const arr = '6 4 10 3 1 5 7 12 9 8'.split(' ').map(Number)
//console.log(arr)
for(let val of arr)
bst.insert(val);
bst.inorder(bst.root);
//console.log(bst.search(bst.root,10));
//console.log(bst.findMax(bst.root))
//console.log(bst.findMin(bst.root))
//bst.delete(bst.root,9)
//bst.root.left.left.data = 50;
//bst.root.right.left.data = 2;
//bst.inorder(bst.root);
//console.log(bst.root)
//console.log(bst.isBst(bst.root));
//console.log(bst.findMaxinTree(bst.root));
//console.log(bst.findMininTree(bst.root));
//console.log(bst.isBstOptimal(bst.root,-Infinity,Infinity));