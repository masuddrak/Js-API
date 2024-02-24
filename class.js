class Teacher{
    constructor(name,subject){
        this.name=name,
        this.subject=subject
    }
}
class TopTecher extends Teacher{
    constructor(name,subject,age){
        super(name,subject)
        this.age=age
    }
}
const topTecher=new TopTecher("ali","Bangla",55)
console.log(topTecher)