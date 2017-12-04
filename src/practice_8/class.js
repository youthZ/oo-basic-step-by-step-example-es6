class klass
{
	constructor(number){
		this.number = number;
	}
	assignLeader(student){
		klass.prototype.leader = student;
	};
	getDisplayName(){
		return "Class "+this.number;
	}
}
module.exports = klass
