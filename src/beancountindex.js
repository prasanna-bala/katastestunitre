export function countBs(s) {
    var count = 0; 
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === "B")
        count += 1;
    }
    return count;
  }
  
 export function countChar(s, c) {
    var count = 0; 
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === c)
        count += 1;
    }
    return count;
  }
  
