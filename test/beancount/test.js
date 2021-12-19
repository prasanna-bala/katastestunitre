import chai from "chai";
const assert = chai.assert;
const expect = chai.expect;

import {countBs} from '../../src/beancountindex.js';
import {countChar} from '../../src/beancountindex.js';

describe('countBs()', () => {
    it('Should  return value 2', () => {
        assert.equal((countBs("BBC")),2);
    });
   
});

describe('countChar()', () => {
    it('Should  return value 4', () => {
        assert.equal(countChar("kakkerlak", "k"),4);
    });
   
});
