const person={
    name:"hero alom",
    age:25,
    address:{
        city:"Rangpur",
        village:"Panwapar"
    }
}
const {age, ...homeAdress}=person
console.log(homeAdress)