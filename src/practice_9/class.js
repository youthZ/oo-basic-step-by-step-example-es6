class klass
{
	constructor(number){
		this.number = number;
	}
	assignLeader(student){
		if(this.number == student.klass.number)
			klass.prototype.leader = student;
		else
			console.log("It is not one of us.");
		
	};
	getDisplayName(){
		return "Class "+this.number;
	}
	appendMember(student){
		student.klass.number = this.number;
	}

}
module.exports = klass
