var makeQueue = function() {

  var newQ = Object.create(queueMethods);
  newQ.count = 0;
  newQ.first = 0;
  newQ.storage = {};

  return newQ;


};

var queueMethods = {};


queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  var firstVal = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return firstVal;
};

queueMethods.size = function(){
  if(this.first<this.count){
    return this.count-this.first;
  }

  return 0;


};
