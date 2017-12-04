const  Person = require ("../../src/practice_7/person");
const Klass = require("../../src/practice_7/class");
const Student = require("../../src/practice_7/student");
class teacher extends Person
{
	constructor(name,age, klass){
		super(name,age); 
		this.klass = klass;
	}
	introduce(){
		var str;
		if(this.klass == null){
			str = " I am a Teacher. I teach No Class.";
		}else{
			str = " I am a Teacher. I teach Class "+this.klass.number+".";
		}
		return super.introduce()+str;
	}
	introduceWith(student){
		var str;
		if(student.klass.number == this.klass.number){
			str =" I am a Teacher. I teach Jerry.";
		}else{
			str=" I am a Teacher. I don't teach Jerry.";
		}
		return super.introduce()+str;
	}
}
module.exports = teacher;