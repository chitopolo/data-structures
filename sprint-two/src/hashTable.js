var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupal = [k, v];
  var bucket;
  if(!this._storage.get(i)){
    bucket = [];
  }else{
    bucket = this._storage.get(i);
  }
  bucket.push(tupal);
  this._storage.set(i, bucket);

};

HashTable.prototype.retrieve = function(k){
  var hashKey = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(hashKey);

  for(var i=0; i<currentBucket.length; i++){
    if(currentBucket[i][0] === k){
      return currentBucket[i][1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){
   var hashKey = getIndexBelowMaxForKey(k, this._limit);
   var currentBucket = this._storage.get(hashKey);


    for(var i=0; i<currentBucket.length; i++){
      if(currentBucket[i][0] === k){
        currentBucket.splice(i,1);
        this._storage.set(hashKey, currentBucket);
        break;
      }
    }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
