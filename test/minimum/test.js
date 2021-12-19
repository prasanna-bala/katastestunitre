import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import {minimum} from '../../src/minimunindex.js';

describe('minimum()', () => {

    it('Should  minimum Value.', () => {     
        assert.equal(minimum(0,10),0)
       // assert.equal(minimum(0,-10),-10)
    });
   
});


describe('minimum()', () => {

    it('Should  minimum Value.', () => {     
        expect(minimum(0,-10)).equal(-10);
    });
   
});
