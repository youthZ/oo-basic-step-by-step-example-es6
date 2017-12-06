const  Person = require ("../../src/practice_9/person");
const Klass = require("../../src/practice_9/class");
class student extends Person
{
	constructor(id,name,age, klass){
		super(id, name,age);
		this.klass = klass; 
	}
	introduce(){
		var str;
		if(this.klass.leader != null){
			str = " I am a Student. I am Leader of Class "+this.klass.number+".";
		}else{
			str = " I am a Student. I am at Class "+this.klass.number+".";
		}
		return super.introduce()+str;
	}
}
module.exports = student;
