import chai from 'chai';
import { FALSE } from 'node-sass';
const assert = chai.assert;
const expect = chai.expect;

import {isEven} from '../../src/recursionIndex.js';

describe('#isEven()', () => {
    it('Should  isEven Value is false', () => {
        assert.isTrue(isEven(50), true,true); 
    });
   
    it('Should  isEven Value is false', () => {
        assert.isFalse(isEven(1), false,false); 
    });
});

/* 
describe("#recursion()",()=>{
    it("should be boolean",()=>{
        assert.isBoolean(recursion(6),"Not boolean");
    })

    it("should be true",()=>{
        assert.isTrue(recursion(6),"Not boolean");
    })

    it("should be false",()=>{
        assert.isFalse(recursion(5),"Not boolean");
    })

    it("should be facnction",()=>{
        assert.isFunction(recursion,"Not function");
    })

    it("should equal true",()=>{
        assert.strictEqual(recursion(50),true,"Not function");
    })

    it("should equal false",()=>{
        assert.strictEqual(recursion(75),false,"Not function");
    })

    it("should true with negative arg",()=>{
        assert.strictEqual(recursion(-1),false,"Not false");
    })
}) */