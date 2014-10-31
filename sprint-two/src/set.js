var makeSet = function(){
  var set = Object.create(setPrototype);
  //set._storage = undefined;
  set._storage = {};
  set._size = 0;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
      this._storage[this._size] = item;
      this._size++;
  }
};

setPrototype.contains = function(item){
  for(var k in this._storage){
    if(this._storage[k] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  if(this.contains(item)){
    for(var k in this._storage){
      if(this._storage[k] === item){
        delete this._storage[k];
      }
    }
  }

  this._size--;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
