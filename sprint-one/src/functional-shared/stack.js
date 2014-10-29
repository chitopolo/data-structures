var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

//push
stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
}

//pop
stackMethods.pop = function(){
  if(this.count > 0){
    this.count--;
    var popVal = this.storage[this.count];
    delete this.storage[this.count];
    return popVal;
  }
  return 0;
}

//size
stackMethods.size = function(){
  return this.count;
}
