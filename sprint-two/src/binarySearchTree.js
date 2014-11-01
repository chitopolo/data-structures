var makeBinarySearchTree = function(value){
	var newSearchTree = {};
	newSearchTree.root = null;

	_.extend(newSearchTree, binaryTreeMethods);
	newSearchTree.value = value;
	newSearchTree.left = null;
	newSearchTree.right = null;

	return newSearchTree;
};


var binaryTreeMethods = {};


binaryTreeMethods.insert = function(value){

	var newTree = makeBinarySearchTree(value);


	var curRoot = this;
	//if(value > curRoot.value)



};

binaryTreeMethods.contains = function(value){
	var current = this;
	var contains = false;

	while(!contains && current){
		if(value > current.value){
			current = this.right;
		}else if(value < current.value){
			current = this.left;
		}else{
			return true;
		}
	}

	return contains;
};

binaryTreeMethods.depthFirstLog = function(){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
