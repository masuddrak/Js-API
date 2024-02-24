const instructor=[
    {name:"nodi",age:28, position:"senior"},
    {name:"akil",age:28, position:"junior"},
    {name:"shobuj",age:28, position:"senior"},
]
const seniorInstructors=instructor.filter(instrac=>instrac.position==="senior")
console.log(seniorInstructors)