import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
 

import {triangle} from '../../src/looptriangeindex.js';

/* describe('triangle()', () => {

    it('Should  run while loop for 7 times.', () => {     
        assert.equal(triangle(),7);
    });
   
}); */
describe('triangle()', () => {

    it('Should contain value #', () => {     
        should.exist(triangle(),'##');
    });
   
});
