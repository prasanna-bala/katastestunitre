export function triangle (){
     let result = "#"
    let count= 0;
    let resulttot = result;
while(result.length <=7 ){
console.log(result);
result = result + "#";
resulttot = resulttot+ result;
count= count+1;
}

return resulttot;
}