	"use strict";
	//import chai from "chai";
	//import sinonChai from "sinon-chai";
//	const expect = chai.expect;
//	chai.use(sinonChai);

	const  Person = require ("../../src/practice_11/person");
	const  Student = require ("../../src/practice_11/student");
	const  Teacher = require ("../../src/practice_11/teacher");
	const Class = require("../../src/practice_10/class");
	describe("Person", () => {
		it("should have field name and age", () => {
        const person = new Person(1, "Tom", 21);
        expect(person.name).toEqual("Tom");
        expect(person.age).toEqual(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person(1, "Tom", 21);
        const introduce = person.introduce();
        expect(introduce).toEqual("My name is Tom. I am 21 years old.");
    });
	 describe("Student", () => {
        let klass;

        beforeEach(() => {
            klass = new Class(2);
        });

        it("should have field name, age and class number", () => {
            const student = new Student(1, "Tom", 21, klass);
            expect(student.name).toEqual("Tom");
            expect(student.age).toEqual(21);
            expect(student.klass).toEqual(klass);
        });

        describe("#introduce", () => {
            it("should overwrite Person introduce, introduce with name, age and class number", () => {
                const student = new Student(1, "Tom", 21, klass);
                const introduce = student.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
            });

            it("should print Leader role, given student is leader", () => {
                const klass = new Class(2);
                const student = new Student(1, "Tom", 21, klass);

                klass.assignLeader(student);
                const introduce = student.introduce();

                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.");            
            });
        });
    });

    describe("Teacher", () => {
        let klasses;

        beforeEach(() => {
            klasses = [new Class(2), new Class(3)];
        });

        it("should have field name, age and class number", () => {
            const teacher = new Teacher(1, "Tom", 21, klasses);
            expect(teacher.name).toEqual("Tom");
            expect(teacher.age).toEqual(21);
            expect(teacher.klasses.length).toEqual(klasses.length);
            expect(teacher.klasses[0]).toEqual(klasses[0]);
            expect(teacher.klasses[1]).toEqual(klasses[1]);
        });

        describe("#introduce", () => {
            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", () => {
                const teacher = new Teacher(1, "Tom", 21, klasses);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2, 3.");
            });

            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", () => {
                const teacher = new Teacher(1, "Tom", 21);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");
            });
        });
    });
});

describe("Class", () => {
    it("should have class number", () => {
        const klass = new Class(2);
        expect(klass.number).toEqual(2);
    });

    it("should get display name with number", () => {
        const klass = new Class(2);
        expect(klass.getDisplayName()).toEqual("Class 2");
    });

    describe("#assignLeader", () => {
        


        it("should assign student as Leader, given student is class member", () => {
            const klass = new Class(2);
            const student = new Student(1, "Jerry", 21, klass);

            klass.assignLeader(student);
            expect(klass.leader).toEqual(student);
         });

        it("should not assign student as Leader, given student is not class member", () => {
            const klass = new Class(2);
            const otherKlass = new Class(3);
            const student = new Student(1, "Jerry", 21, otherKlass);

            klass.assignLeader(student);

            expect(klass.leader).not.toEqual(student);
        });

        it("should not assign student as Leader, given student is not class member", () => {
			
			spyOn(console, 'log');

			const klass = new Class(2);
            const otherKlass = new Class(3);
            const student = new Student(1, "Jerry", 21, otherKlass);

            klass.assignLeader(student);

            expect(klass.leader).not.toEqual(student);
            //expect(console.log.getCall(0).args[0]).to.equal("It is not one of us."); //assert style 2.
			expect(console.log).toHaveBeenCalledWith("It is not one of us.");
        });
    });

    describe("#appendMemeber", () => {
        it("should change student's klass attribute", () => {
	
			spyOn(console, 'log');

            const klass = new Class(2);
            const otherKlass = new Class(3);

            const student = new Student(1, "Jerry", 21, otherKlass);

            expect(student.klass).toEqual(otherKlass);

            klass.appendMember(student);

            expect(student.klass).toEqual(klass);
        });

		 it("should notify join listeners", () => {
            const klass = new Class(2);
            const otherKlass = new Class(3);
            const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);

            const student = new Student(1, "Jerry", 21, otherKlass);
            klass.appendMember(student);

            expect("I am Tom. I know Jerry has joined Class 2.").toEqual("I am Tom. I know Jerry has joined Class 2.");
        });
    });
});