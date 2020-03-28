export abstract class TemplateClass {
    protected abstract init();
    template(){
      this.init();
      this.processTask();
      this.hook1();
      this.hook2();
    };
    protected abstract processTask();
    protected hook1(){
        console.log("hook1 template class")
    }
    protected  hook2(){
        console.log("hook2 template class")
    }
}

export class ConcreteclassA extends TemplateClass{
    init() {
        console.log("Init A");
    }
    processTask() {
        console.log("process task in A");
    }
    hook1() {
        console.log("hook concrete class A");
    }
}
export class ConcreteclassB extends TemplateClass{
    init() {
        console.log("Init B");
    }
    processTask() {
        console.log("processTask in B");
    }
    hook2() {
        console.log("hook2 concrete class B");
    }
}
