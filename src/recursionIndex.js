const isbool = false 
export function isEven(n) {
    if (n === 0)
    {
     let isbool = true ;
     }
    else if (n === 1)
    {
      let isbool = false ;
        }
    
 /*    else if (n < 0)
    {
      let isbool = isEven(-n);
        } */
     else
    {
      let isbool =    isEven(n - 2);;
         }
        return isbool ;
  }
  
 