export function fizbuzz(len) {
    let count = 0;
   var   ret=[];

    for (var i = 1; i <= len; i++) {
    if (i % 5 == 0 && i % 3 == 0)
    { 
        ret[i]='FizzBuzz';
        console.log("FizzBuzz");}
    else if (i % 3 == 0) {
        ret[i]='Fizz';
        console.log("Fizz");}
    else if (i % 5 == 0) {
        ret[i]='Buzz';
        console.log("Buzz");}
    else      {
      
        ret[i]=i;
         console.log(i);}
    
}
return ret;
}