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

    var test = this._storage.get(i);
       // debugger;

   }else{

    var bucket = [];
    bucket.push(tupal);
    var test = bucket;



    this._storage.set(i, bucket);

    var test = this._storage.get(i);
    // debugger;
   }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var name = this._storage.get(i);

  //debugger;
  return name[0][1];

};

HashTable.prototype.remove = function(k){
   var i = getIndexBelowMaxForKey(k, this._limit);
     var res = this._storage.get(i);



    this._storage.set(i, null);
    var res = this._storage.get(i);
      debugger;
    console.log('deleting this: '+res);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
