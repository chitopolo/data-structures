var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.count = 0;
  newQueue.first = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};


//enqueue
queueMethods.enqueue = function(value){
  this.storage[this.count]= value;
  this.count++;

}

//dequeue
queueMethods.dequeue = function(){


    var deqQue = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return deqQue;
}

//size

queueMethods.size = function(){
if(this.first < this.count){

  var result = this.count - this.first;
  console.log(result);
  return result;
 }
return 0;
}
