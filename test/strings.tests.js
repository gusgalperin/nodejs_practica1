import {transformarStringEnArrayDeNumeros,transformarArrayDeNumerosAUnSoloString} from '../src/utils/strings.js'
import chai from 'chai'

const should = chai.should();

describe("strings tests", function(){
    describe("transformarStringEnArrayDeNumeros tests", function() {
    
        it("should work", function(){
            const resultado = transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | ');
            resultado.should.eql([123, 456, 789, 10]);
        });
    
        it("should work_result empty", function(){
            const resultado = transformarStringEnArrayDeNumeros('a123 | r456 | s789 | 1bc ', ' | ');
            resultado.should.eql([]);
        });
    
        it("should work_source empty", function(){
            const resultado = transformarStringEnArrayDeNumeros('', ' | ');
            resultado.should.eql([]);
        });
    
        it("should work_source null", function(){
            const resultado = transformarStringEnArrayDeNumeros(null, ' | ');
            resultado.should.eql([]);
        });
    
        it("should work_one element", function(){
            const resultado = transformarStringEnArrayDeNumeros('123', ' | ');
            resultado.should.eql([123]);
        });
        
    });

    describe("transformarArrayDeNumerosAUnSoloString tests", function() {
        
        it("should work", function(){
            const resultado = transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ',');
            resultado.should.equal('123,456,789,10');
        });

        it("should work_separador empty", function(){
            const resultado = transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], '');
            resultado.should.equal('12345678910');
        });

        it("should work_array empty", function(){
            const resultado = transformarArrayDeNumerosAUnSoloString([], '');
            resultado.should.equal('');
        });

    });
});
