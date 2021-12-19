import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import {fizbuzz} from '../../src/fizzbuzzindex.js';

/* describe('fizbuzz()', () => {

    it('Should  run while loop for 100 times.', () => {     
        assert.equal(fizbuzz(100),100)
    });
   
});  */
 
describe('fizbuzz', () => {
    it('executes', () => {
      
      for (var i = 1; i <= 100; i++) {
       
        if (i % 5 == 0 && i % 3 == 0){
          expect(fizbuzz(i)).to.be.contain('FizzBuzz')
        }  
            
   else if (i % 3 == 0) 
        {
          expect(fizbuzz(i)).to.have.contain('Fizz')
        }  
        else if (i % 5 == 0) {
          expect(fizbuzz(i)).to.be.contain('Buzz')
        }  else{
          expect(fizbuzz(i)).to.be.contain(i)
        }   

    }
      
    })
      
  })
  