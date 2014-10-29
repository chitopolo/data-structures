var makeStack = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count]= value;
    count++;
  };

  someInstance.pop = function(){
    if (count > 0){
      count--;
      var popValue = storage[count];
      delete storage[count];
      return popValue;
    }

  };

  someInstance.size = function(){
    if(count === 0){
      return 0;
    }else{
      return count;
    }

  };

  return someInstance;
};
