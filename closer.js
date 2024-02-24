
function stopWatch(){
    let counter=0
    return function(){
        counter++
        return counter
    }
}
const watch=stopWatch()
const watch1=watch()
const watch2=watch()
const watch3=watch()
const watch4=watch()
console.log(watch1)
console.log(watch2)
console.log(watch3)
console.log(watch4)
const smallWatch=stopWatch()
console.log(smallWatch())
console.log(smallWatch())
console.log(smallWatch())