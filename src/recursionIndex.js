var isbool = false ;
export function isEven(n) {

  if (n == 0)
  {
    isbool = true ;
   }
  else if (n == 1)
  {
     isbool = false ;
      }else 
/*  if(n%2 == 0){
    isbool = true;
 }
   else */
  {
     isbool =    isEven(n - 2);
   }
      return isbool ;
  }
  
 