var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.first = 0;
  this.storage = {};

};



Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
  var dVal = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return dVal;
};

Queue.prototype.size = function(){
  if(this.first<this.count){
    return this.count-this.first;
  }

  return 0;
};

