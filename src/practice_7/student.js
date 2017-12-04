const  Person = require ("../../src/practice_7/person");
const Klass = require("../../src/practice_7/class");
class student extends Person
{
	constructor(name,age, klass){
		super(name,age);
		this.klass = klass; 
	}
	introduce(){
		return super.introduce()+" I am a Student. I am at Class "+this.klass.number+".";
	}
}
module.exports = student;