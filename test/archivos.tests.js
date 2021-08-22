import {leerArchivoComoString,escribirTextoEnArchivo} from '../src/utils/archivos.js'
import chai, { expect } from 'chai'
import fs from 'fs'

const should = chai.should();

describe("archivos tests", function() {

    describe("leerArchivoComoString tests", function(){

        it("should work_existing file", function(){
            //arrange
                const fileContent = "contenido del archivo";
                const file = "test1.txt";
                fs.writeFileSync(file, fileContent);
            //act
                const resultado = leerArchivoComoString(file);
            //assert
                resultado.should.equal(fileContent);
                fs.unlinkSync(file); //--> remove file
        });

        it("should work_non existing file", function(){
            //arrange
                const file = "test1.txt";
            //act
                const resultado = leerArchivoComoString(file);
            //assert
                resultado.should.equal('');
        });

    });

    describe("escribirTextoEnArchivo", function(){

        it("should work_existing file flag true", function(){
            //arrange
                const fileContent = "contenido del archivo";
                const file = "test1.txt";
                fs.writeFileSync(file, '');
            //act
                escribirTextoEnArchivo(file, fileContent, true);
            //assert
                var archivoEscrito = fs.readFileSync(file, 'utf-8');
                archivoEscrito.should.equal(fileContent);

                fs.unlinkSync(file); //--> remove file
        });

        it("should work_existing file flag false", function(){
            //arrange
                const fileContent = "contenido del archivo";
                const file = "test1.txt";
                fs.writeFileSync(file, '');
            //act
                escribirTextoEnArchivo(file, fileContent, false);
            //assert
                var archivoEscrito = fs.readFileSync(file, 'utf-8');
                archivoEscrito.should.equal(fileContent);

                fs.unlinkSync(file); //--> remove file
        });

        it("should work_non existing file flag true", function(){
            //arrange
                const fileContent = "contenido del archivo";
                const file = "test1.txt";
            //act
                escribirTextoEnArchivo(file, fileContent, true);
            //assert
                var archivoEscrito = fs.readFileSync(file, 'utf-8');
                archivoEscrito.should.equal(fileContent);

                fs.unlinkSync(file); //--> remove file
        });

        it("should throw error_non existing file flag false", function(){
            //arrange
                const fileContent = "contenido del archivo";
                const file = "test1.txt";
            //act //assert
                expect(function() {
                    escribirTextoEnArchivo(file, fileContent, false);
                }).to.throw("el archivo no existe")
        });

    });

});