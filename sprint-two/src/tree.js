var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
   this.children.push(makeTree(value));
};

treeMethods.contains = function(target, node){

   node = node || this;

   if(node.value === target ) {
    return true;
   }

   for(var i = 0; i<node.children.length; i++){

      return node.contains(target, node.children[i] );
   }
   return false;
  };


/*
 * Complexity: What is the time complexity of the above functions?
 */
