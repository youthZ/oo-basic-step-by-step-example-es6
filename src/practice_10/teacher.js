const  Person = require ("../../src/practice_11/person");
const Klass = require("../../src/practice_11/class");
const Student = require("../../src/practice_11/student");
class teacher extends Person
{
	constructor(id, name,age, klasses){
		super(id, name,age); 
		this.klasses = klasses;
	}
	introduce(){
		var str;
		if(this.klasses == null){
			str = " I am a Teacher. I teach No Class.";
		}else{
			str = " I am a Teacher. I teach Class ";
			this.klasses.forEach(function(e){
				str = str + e.number.toString()+", ";
			});
			str = str.substring(0,str.length-2)+".";
		}
		return super.introduce()+str;
	}
	
	isTeaching(student){
		var flag = false;
		this.klasses.forEach(function(e){
			if(student.klass == e)
				falg =  true;
		});
		return flag;
	}
}
module.exports = teacher;
