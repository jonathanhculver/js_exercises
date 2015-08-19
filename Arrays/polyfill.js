/* filter method */
Array.prototype.filter = function(cb) {
    var result = [],
        i= 0;
    for(i; i<this.length; i++)  {
        var isTrue = cb(this[i]);
        if(isTrue === true) {
            result.push(this[i])
        }
    }    
    return result;
}

var foo = [0, 1, 5, 40, 584, 3984, 5];

var filtered = foo.filter(function(value){
    return value < 10;
});

console.log(filtered); // [ 0, 1, 5, 5 ] 