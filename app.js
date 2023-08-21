// const evenOrOdd = require('num-is-even-or-odd');
const http=require('http')


const servidor=http.createServer((pedido,respuesta)=>{
    respuesta.writeHead(200,{'Content-Type':'text/html'})
    respuesta.write('<h1>hola</h1>')
    respuesta.end()
})

servidor.listen(8888)
console.log("servidor ejecutandose")
// console.log(evenOrOdd(25))
// console.log(evenOrOdd(90))

// console.log('este numero es del tipo', evenOrOdd(87))
// console.log('hola')
// console.log("Buenas noches como estas")


// console.log("hola mundo")
// function saludo(nombre){
//     console.log(`Hola buenos dias ${nombre}`)
// }

// saludo('manuel')