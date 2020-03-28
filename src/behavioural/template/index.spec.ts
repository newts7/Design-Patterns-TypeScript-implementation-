import {ConcreteclassA, ConcreteclassB, TemplateClass} from "./index";

describe('-----Running test cases for template pattern ------', function () {
    describe('-----Running positive test cases for template pattern ------', function () {
        it('should produce separate output for the same process using different classes ', function () {
                const concreteClassA: TemplateClass = new ConcreteclassA();
                console.log("###### Calling concrete class A #####");
                concreteClassA.template();
                console.log("###### Calling concrete class B #####");
                const concreteClassB: TemplateClass = new ConcreteclassB();
                concreteClassB.template();
        });
    });
    describe('-----Running negative test cases for template pattern ------', function () {

    });
});
