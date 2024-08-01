// Binary search tree consists of nodes connectbed by their edgers. 
// Each node contains a data value and optional pointers to their left and right child node.
// Initiallt, we have a parent node with one left and right node. These two are point outs Null at initial stage.



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
}

const bts = new binarySearchTree()
// console.log(bts.isEmpty())

bts.insert(10)
bts.insert(5)
bts.insert(15)

console.log(bts.search(bts.root, 25))