function added(...arguments){
    console.log(arguments)
}
const totals=added(1,2,3,6,5)
let p='Javascript'; 
let q=p; 
p='React'; 
console.log(p);
const isTrue=true;
console.log(!isTrue ? "hello" : "world")
const sum =(p, q)=> 
    p + q;
   
    function work(x, y = 4) {
        return x + y;
       }
       console.log(work(32));