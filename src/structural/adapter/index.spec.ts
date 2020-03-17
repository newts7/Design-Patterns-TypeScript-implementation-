import {expect} from 'chai';
import {getId, Mongo, MysqlAdapter} from "./index";
import exp = require("constants");

describe('-----Running test cases for adapter pattern-----', function () {
    describe('-----Running positive test cases for adapter pattern-----', function () {
        it('should use same interface of queries for mysql too ', function () {
            expect(getId(new Mongo(),'5')).to.be.deep.equal(getId(new MysqlAdapter(), '5'));
        });
    });
    describe('-----Running negative test cases for adapter pattern-----', function () {

    });
});
