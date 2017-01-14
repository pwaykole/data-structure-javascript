function Node(data, left, right) {
    this.data = data; // Stores data of the node
    this.left = left; // Stores link to left node
    this.right = right; // Stores link to right node
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
        console.log(this.root);
    } else {
        var current = this.root;
        console.log("Current: " + JSON.stringify(current));
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

//There are three traversal functions used with BSTs: inorder, preorder, and postorder. An
//inorder traversal visits all of the nodes of a BST in ascending order of the node key
//values. A preorder traversal visits the root node first, followed by the nodes in the subtrees
//under the left child of the root node, followed by the nodes in the subtrees under
//the right child of the root node. A postorder traversal visits all of the child nodes of the
//left subtree up to the root node, and then visits all of the child nodes of the right subtree
//up to the root node.

// inorder traversal
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

//function for minimum in a BST
function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

//function for minimum in a BST
function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

//Find a specific data in a BST
function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}

// function to remove node
//The remove() function simply receives the value to be removed and calls the
//second function, removeNode(), which does all the work.
function remove(data) {
    var root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
//console.log("Preorder traversal: ");
//preOrder(nums.root);
// var min = nums.getMin();
// var max = nums.getMax();
// console.log("Minimum value " + min, "Maximum value: " + max);
//var data = prompt("Enter the data to be searched");
//console.log(nums.find(data));