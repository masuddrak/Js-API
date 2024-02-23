const products=[
    {id:1, name:"samsung",price:40},
    {id:2, name:"Nokia",price:5},
    {id:3, name:"HTC",price:30},
    {id:4, name:"Itel",price:20},
    {id:5, name:"Iphone",price:10},
]
const productName=products.map(product=>product.price)
// console.log(productName)
const productsPrice=products.filter(product=>product.price>7000)
// console.log(productsPrice)
// const productsId=products.forEach(id=>console.log(id.id))
const higestPrice=products.find(product=>product.price>30)
// console.log(higestPrice)

const totalaPrice=products.reduce((p,c)=>p+c.price,0)
console.log(totalaPrice)


