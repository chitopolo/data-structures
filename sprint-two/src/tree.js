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

  var contains = walkTheDOM(this, target);

  // var contains = walkTheDOM(this, function(node){
  //   if(node.value === target){
  //       found = true;
  //       return true;
  //     }
  //     return false;
  //  });

  return found;

};

  function walkTheDOM(node, target) {
    ;
      if(node.value === target){
        return true;
      }

      node = node.children[0];
      var i = 1;
      while (node) {

          walkTheDOM(node, func);
          node = node.children[i]; //next sibling
          i++;
      }
      return false;
  }



  // function walkTheDOM(node, func) {
  //     var cont = func(node);
  //     if(cont === true){
  //       return true;
  //     }

  //     node = node.children[0];
  //     var i = 1;
  //     while (node) {

  //         walkTheDOM(node, func);
  //         node = node.children[i]; //next sibling
  //         i++;
  //     }
  //     return false;
  // }






/*
 * Complexity: What is the time complexity of the above functions?
 */
