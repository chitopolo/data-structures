var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.head = makeNode(value);
      list.tail = list.head;
    }else{
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var curHead = list.head.value;
    list.head = list.head.next;
    return curHead;
  };

  list.contains = function(target, startPoint){
    startPoint = startPoint || list.head;
    if(startPoint.value === target){
      return true;
    }else if(startPoint.next !== null){
      return list.contains(target, startPoint.next);
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
