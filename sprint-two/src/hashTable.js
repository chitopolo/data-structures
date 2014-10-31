var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupal = [k, v];


  if(this._storage.get(i)){
    var ret = this._storage.get(i);
    ret.push(tupal);
    this._storage.set(i, ret);
   }else{

    var bucket = [];
    bucket.push(tupal);
    this._storage.set(i, bucket);
   }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var name = this._storage.get(i);
  var last_name = name[0][1];
  return last_name;

};

HashTable.prototype.remove = function(k){
   var i = getIndexBelowMaxForKey(k, this._limit);
    var res = this._storage.get(3);



    this._storage.set(i, null);
    var res = this._storage.get(i);
    debugger;
    console.log('deleting this: '+res);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
