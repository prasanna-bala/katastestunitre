import chai from "chai" ;
const assert = chai.assert;
const expect = chai.expect;

import {reverseArr} from '../../src/reverseindex.js'


describe('reverseArr()', () => {
    it('Should  return Array Value ', () => {
   
        expect(reverseArr(['A', 'B', 'C'])).to.have.same.ordered.members([ 'C', 'B', 'A' ]);
       
    });
   
});
describe('reverseArr()', () => {
    it('Should  return Array Value ', () => {
        expect(reverseArr([1, 2, 3, 4, 5])).to.have.same.ordered.members([ 5, 4, 3, 2, 1 ]);
        
    });
   
});
 