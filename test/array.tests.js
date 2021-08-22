import {combinarDosArrays,combinarNArrays} from '../src/utils/arrays.js'
import chai from 'chai'

const should = chai.should();

describe("arrays tests", function(){
    describe("combinarDosArrays tests", function() {
    
        it("should work", function(){
            const resultado = combinarDosArrays([1, 5, 8, 10], [2, 3, 8, 11]);
            resultado.should.eql([1, 2, 3, 5, 8, 10, 11]);
        });

        it("should work_first empty", function(){
            const resultado = combinarDosArrays([], [2, 3, 8, 11]);
            resultado.should.eql([2, 3, 8, 11]);
        });

        it("should work_second empty", function(){
            const resultado = combinarDosArrays([2, 3, 8, 11], []);
            resultado.should.eql([2, 3, 8, 11]);
        });

        it("should work_first larger", function(){
            const resultado = combinarDosArrays([2, 3, 8, 11], [5, 6]);
            resultado.should.eql([2, 3, 5, 6, 8, 11]);
        });

        it("should work_second larger", function(){
            const resultado = combinarDosArrays([2, 3, 8, 11], [1, 4, 5, 8, 11, 12]);
            resultado.should.eql([1, 2, 3, 4, 5, 8, 11, 12]);
        });

        it("should work_equals", function(){
            const resultado = combinarDosArrays([2, 3, 8, 11], [2, 3, 8, 11]);
            resultado.should.eql([2, 3, 8, 11]);
        });

        it("should work_both empty", function(){
            const resultado = combinarDosArrays([], []);
            resultado.should.eql([]);
        });

        
    });

    describe("combinarNArrays tests", function() {
    
        it("should work_one", function(){
            const resultado = combinarNArrays([[1, 5, 8, 10]]);
            resultado.should.eql([1, 5, 8, 10]);
        });

        it("should work_two", function(){
            const resultado = combinarNArrays([[1, 5, 8, 10], [2, 3, 8, 11]]);
            resultado.should.eql([1, 2, 3, 5, 8, 10, 11]);
        });

        it("should work_three", function(){
            const resultado = combinarNArrays([[1, 5, 8, 10], [2, 3, 8, 11], [2, 3, 8, 11]]);
            resultado.should.eql([1, 2, 3, 5, 8, 10, 11]);
        });

    });
});
