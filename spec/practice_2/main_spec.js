"use strict";
//import chai from "chai";
//import sinonChai from "sinon-chai";
//const expect = chai.expect;
//chai.use(sinonChai);

const  Person = require ("../../src/practice_2/person");
const  Student = require ("../../src/practice_2/student");
describe("Person", () => {
    it("should have field name and age", () => {
        const person = new Person("Tom", 21);
		console.log(person);
        expect(person.name).toEqual("Tom");
        expect(person.age).toEqual(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person("Tom", 21);
        const introduce = person.introduce();
        expect(introduce).toEqual("My name is Tom. I am 21 years old.");
    });

	 it("should overwrite Person introduce, introduce student with class", () => {
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();
            expect(introduce).toEqual("I am a Student. I am at Class 2.");
        });
});
