class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    //add data to nodes
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    //pre order traversal
    preOrder(){
        if(this.root==null){
            return null;
        }else{
            var result = new Array();
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }

}

//write a program to demonstrate pre order traversal.
const binaryTree = () => {
    const bst = new BST();
    bst.add(4);
    bst.add(3);
    bst.add(5);
    bst.add(8);
    bst.add(2);
    bst.add(9);
    bst.add(7);
    bst.add(6);

    console.log("pre-order-traversal: " + bst.preOrder());
}

module.exports = binaryTree;