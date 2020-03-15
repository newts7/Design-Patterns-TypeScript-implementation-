import {PrototypeClass} from "./index";
import {expect} from 'chai';

describe('---Running test cases for prototype pattern----', function () {
    describe('---Running positive test cases for prototype pattern----', function () {
        it('should create a clone of object', function () {
            const p1 = new PrototypeClass('test','class',{ class: 'v', rollNo: '7'});
            const p2 = p1.clone();
            expect(p2).instanceOf(PrototypeClass);
            expect(p2).is.not.equal(p1);
        });
    });
    describe('---Running negative  test cases for prototype pattern----', function () {

    });
});
