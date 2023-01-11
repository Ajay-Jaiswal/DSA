class Node{
    constructor(data,left,right){
        this.data = data,
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
        this.size = 0
    }
    // insert(data){
    //     const node = new Node(data)
    //     if(!this.root){
    //         this.root = node
    //     }

    // }
    insert(data)
  {
    let node = new Node(data);
    if(this.root == null)
    {
      this.root = node;
    }else{
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, newNode)
  {
    if(newNode.data < root.data)
    {
      if(root.left == null){
        root.left = newNode;}
        else{ this.insertNode(root.left, newNode)}
    }else if(newNode.data > root.data)
    {
      if(root.right == null)
      {
        root.right = newNode;
      }else
      {

        this.insertNode(root.right, newNode);
      }
    }
  }

    InorderTraversal(root){
        if(!root){ return}
        this.InorderTraversal(root.left)
        console.log(root.data, '->')
        this.InorderTraversal(root.right)
    }

    preorderTraversal(root){
        if(!root){ return}
        console.log(root.data, '->')
        this.InorderTraversal(root.left)
        this.InorderTraversal(root.right)
    }

    postorderTraversal(root){
        if(!root){ return}
        this.InorderTraversal(root.left)
        this.InorderTraversal(root.right)
        console.log(root.data, '->')
    }
}

let binarytree = new BinaryTree()
binarytree.insert(10)
binarytree.insert(15)
binarytree.insert(20)
binarytree.insert(25)

// binarytree.InorderTraversal()
binarytree.preorderTraversal()
// binarytree.postorderTraversal()

console.log(binarytree)



// 2nd Type 

// class Node{
//   constructor(data)
//   {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinarySearchTree
// {
//   constructor()
//   {
//     this.root = null;
//   }
//   insert(data)
//   {
//     let node = new Node(data);
//     if(this.root == null)
//     {
//       this.root = node;
//     }else{
//       this.insertNode(this.root, node);
//     }
//   }
//   insertNode(root, newNode)
//   {
//     if(newNode.data < root.data)
//     {
//       if(root.left == null){
//         root.left = newNode;}
//         else{ this.insertNode(root.left, newNode)}
//     }else if(newNode.data > root.data)
//     {
//       if(root.right == null)
//       {
//         root.right = newNode;
//       }else
//       {

//         this.insertNode(root.right, newNode);
//       }
//     }
//   }
//   getRootNode()
//   {
//     return this.root;
//   }
//   //traversal
//  preorder(root)
//   {
//     if(root != null)
//     {
//       console.log(root.data); // first line - P L R
//       this.preorder(root.left); // second line
//       this.preorder(root.right); // third line
//     }
//   }
//   inorder(root)
//   {
//     if(root != null)
//     {
//       this.inorder(root.left); // first line - L P R

//       console.log(root.data); // second line

//       this.inorder(root.right); // third line
//     }
//   }
//   postorder(root)
//   {
//     if(root != null)
//     {
//       this.postorder(root.left); // first line - L R P
//       this.postorder(root.right); // second line
//       console.log(root.data); // third line
//     }
//   }
// }

// var bst = new BinarySearchTree();
// bst.insert(3);

// bst.insert(5);

// bst.insert(1);

// bst.insert(6);

// bst.insert(4);

// var root = bst.getRootNode();
// console.log('Preorder');
// bst.preorder(root);
// console.log('\n');
// console.log('Inorder');
// bst.inorder(root);
// console.log('\n');
// console.log('Postorder');
// bst.postorder(root);
// console.log('\n');