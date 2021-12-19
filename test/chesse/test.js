import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import {chessboard} from '../../src/chesseboardindex.js';

describe('creating Tiles', () => {
       it('Should  run while loop for 8 times.', () => {     
        assert.equal(chessboard(8),8)
    });
   
});

describe('Creating the tiles', () => {
    let board;
     
        board = new chessboard(8);
  
    it('Should create tiles', () => {
       expect(chessboard(8)).equal(8);
       
    });

 
    
});