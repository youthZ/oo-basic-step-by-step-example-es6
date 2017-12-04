const  Person = require ("../../src/practice_6/person");
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
			str = " I am a Teacher. I teach Class "+this.klass+".";
		}
		return super.introduce()+str;
	}
}
module.exports = teacher;

