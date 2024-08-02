// Binary search tree (BST) consists of nodes connectbed by their edgers. 
// Each node contains a data value and optional pointers to their left and right child node.
// Initially, we have a parent node with one left and right node. These two are point outs Null at initial stage.



class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class binarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root  = newNode;
        }else{
           this.insertNode(this.root, newNode)  // Recursive call for proper insertion
        }
    }


    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }


    search(root, value){
        if(!root){
            return false;
        } else {
            if(root.value === value){
                return true;
            } else if (value < root.value){  // If the value is less than the root node value
               return this.search(root.left, value)
            }  else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = []  // Queue for simplicity
        queue.push(this.root);  // push the root node value into an empty array area.  (Keep in mind that only [this.root] is valid, we access only like this. )
        while(queue.length){  // we have length is true, atleast length is one.
            let curr = queue.shift()  // Using Dequeue, to read the first node (base root node) using shift method.
            console.log(curr.value);
            if(curr.left){  // then we check if the base node contains sub node trees like check it has left node. If it is, we push the left node into an array
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)  // then also we check, if the root node has right sub trees. If it is, push the values.
            }
        }

    }

}

const bst = new binarySearchTree()
console.log(bst.isEmpty())  // Initially it is true.

bst.insert(10)
bst.insert(5)
bst.insert(15)            
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 25))

bst.preOrder(bst.root)  // 10 5 3 7 15
console.log();
console.log();
bst.inOrder(bst.root)  // 3 5 7 10 15
console.log();
console.log();
bst.postOrder(bst.root)  // 3 5 7 15 10
console.log();
console.log();
bst.levelOrder()      // 10 5 15 3 7











 
/*  Different tree traversal techniques

Traversal means => Visiting every node in the tree.
In linear data structures like stacks, queues, linked list and arrays have only one way to traversal to read all the existing nodes. 
But, in tree data structure, we have some other options are available to read the nodes like,
1. Depth First Search (DFS) 
2. Breath First Search (BFS)

(DFS) => Depth First Search => Have Pre-order, In-order, Post-order traversal.

Pre-Order follows is as
1. Read the root node
2. Read the left sub-tree nodes
3. Read the right sub-tree nodes

In-Order follows is as
2. Read the left sub-tree nodes
1. Read the root node
3. Read the right sub-tree nodes

Post-Order follows is as
2. Read the left sub-tree nodes
3. Read the right sub-tree nodes
1. Read the root node


(BFS) => Breath First Search, This loop will ensure all the nodes at the same level are visited first, before nodes at the deeper level. 

Create a queue
Enqueue the root node
As long as a node exists in the queue => 
  Dequeue the node from the front
  Read the node value
  Enqueue at left and right side.

*/