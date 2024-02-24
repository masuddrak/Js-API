

const person=[
    {id:1,name:"sakib",salary:25},
    {id:2,name:"salman",salary:30.},
    {id:3,name:"roki",salary:40},
    {id:4,name:"rabbi",salary:12},

]
const  totalSalary=person.reduce(function(previus,next){
    return previus+next.salary;
},0)
console.log(totalSalary)