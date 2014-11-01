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

treeMethods.contains = function(target){
  var found = false;
  found = checkValueRecursively(this, target);
  return found;
};

function checkValueRecursively(tree, value) { 
    var children = tree.children; 
    for(var i = 0; i < tree.children.length; i++) { 
        if(children[i].value === value){ 
            return true; 
        } 
        else { 
            // Find it in this tree 
            if(checkValueRecursively(children[i], value)) { 
                return true; 
            } 
        } 
    } 
    return false; 
}  

/*
 * Complexity: What is the time complexity of the above functions?
 */
