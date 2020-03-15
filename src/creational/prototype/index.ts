interface Icloneable  {
    clone<T>(): any
}

export type StudentDetails = {
    class: string,
    rollNo: string
};

export  class PrototypeClass implements Icloneable {
    firstName: string;
    lastName: string;
    details: StudentDetails;

    constructor(firstName: string, lastName: string, details: StudentDetails){
        this.firstName = firstName;
        this.lastName = lastName;
        this.details = details;
    }

    clone<PrototypeClass>() {
        return new PrototypeClass(this.firstName, this.lastName, this.details);
    }

}
