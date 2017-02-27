"use strict";

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var server = require('../app');

chai.use(chaiHttp);

describe('routes', function(){
    it('main route exists', function(done){
        chai.request(server)
            .get('/')
            .end(function(err, res){
                expect(err).to.not.exist;
                expect(res).to.have.status(200); 
                done();          
            });
    });

    it('convert route exists', function(done){
        chai.request(server)
            .get('/convert')
            .query({text: 'hello world'})
            .end(function(err, res){
                expect(err).to.not.exist;
                expect(res).to.have.status(200); 
                done();
            })
    })
}); 

describe('convert', function(){
    it('should return 200 when no input given', function(done){
        chai.request(server)
            .get('/convert')
            .end(function(err, res){
                expect(err).to.not.exist;
                expect(res).to.have.status(200);
                done();
            }); 
    });
});