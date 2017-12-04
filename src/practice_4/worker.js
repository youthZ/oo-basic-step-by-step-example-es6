const  Person = require ("../../src/practice_2/person");
class worker extends Person
{
	constructor(name,age){
		super(name,age); 
	}
	introduce(){
		return super.introduce()+" I am a Worker. I have a job.";
	}
}
module.exports = worker;
