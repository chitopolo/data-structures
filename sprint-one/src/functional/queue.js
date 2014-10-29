var makeQueue = function(){
  var someInstance = {};
  var count = 0;
  var first = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;

  };

  someInstance.dequeue = function(){
    var deqVal = storage[first];
    delete storage[first];
    first++;
    return deqVal;

  };

  someInstance.size = function(){
    if(first < count){
      return count - first;
    }
      return 0;
  };

  return someInstance;
};
