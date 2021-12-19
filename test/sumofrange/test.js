import chai from "chai" ;
const assert = chai.assert;
const expect = chai.expect;

import {range} from '../../src/sumofrangeindex.js';
import {sum} from '../../src/sumofrangeindex.js';

describe('range()', () => {
    it('Should  return Array Value ', () => {
        assert.isArray(range([1,10]));
    });
   
});


describe('[ 1,2,3,4,5,6,7,8,9,10]', () => {
    it(' ', () => {
    
      expect(range([1,10])).to.have.same.members([ 1,2,3,4,5,6,7,8,9,10]);
     
    });
   
});
 
  describe('[ 5, 4, 3, 2]', () => {
    it('Should  return Array Value ', () => {
        
        expect(range([5, 2, -1])).to.have.same.members([ 5, 4, 3, 2]);
    });
   
});    
 describe('sum()', () => {
    it('Should  return value 55', () => {
        assert.equal(sum(range([1,10])),55);
    });
   
});
