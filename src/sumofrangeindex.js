var array = [];
let i=0;
export function range(arr){  
    var array = [];
    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);

    for (var i = lower; i <= upper; i++) {
        array.push(i);
    }
    return array;
}  
export function sum(array){  var total = 0;  
    for(var i in array){  
       total = total+array[i];  
    }
    return total;
}  
