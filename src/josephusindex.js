const josephusval = [];
export function josephus(array, count) {
    
    let counter = 0;
    let index = 0;
    while (array.length > 0) {
        index = index % array.length;
        if (++counter === count) {
            josephusval.push(array.splice(index, 1)[0]);
            counter = 0;
            index--;
        }
        index++;
    }
    return josephusval;
    console.log(josephusval);
}

console.log(josephusval);