var str= [];
export function chessboard(len) {
    let count= 0;
    
    for (var i = 1; i <= len; i++) {
    if (i % 2 == 0)
    {
      str[i]="# # # #";
    } 
    //console.log("# # # #");
    else  {str[i]= " # # # #"}
    //console.log(" # # # #");
  count = count+1 ;  
  console.log(str[i]);
}

  return count ;
}