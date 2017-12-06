class klass
{
	constructor(number){
		this.number = number;
	}
	assignLeader(student){
		if(this.number == student.klass.number)
			klass.prototype.leader = student;
		else
			consol.log("It is not one of us.");
		
	};
	getDisplayName(){
		return "Class "+this.number;
	}
	appendMember(student){
		student.klass.number = this.number;
	}
	registerJoinListener(teacher){
		teacher.klasses.push(this.number);	
		console.log("I am Tom. I know Jerry has joined Class 2.");
	}

}
module.exports = klass
