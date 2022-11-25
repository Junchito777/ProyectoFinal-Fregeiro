import { createAuto, getAuto, updateAuto, deleteAuto, getOrdenCompra, createOrdenCompra} from "./firebase";  

// const auto ={
//     "id":1,
//         "idCategoria": 9,
//         "nombre":"Vantage", 
//         "motor": "estándar", 
//         "consumo": 11.5, 
//         "plazas":4, 
//         "maletero":350, 
//         "potencia":510, 
//         "precio":141695,
//         "picture":"https://firebasestorage.googleapis.com/v0/b/react-fa067.appspot.com/o/Aston_Martin-Vantage-2019-C01_0.webp?alt=media&token=b21f8880-ed50-47b7-9494-7db7a1475365",
//         "stock": 10
// }

// getAuto("7lHNkskCTgy2qI6kPLuv").then(aut =>{
//     aut.stock -= 5
//     updateAuto("7lHNkskCTgy2qI6kPLuv", aut).then(mensaje =>console.log(mensaje))
// })

// deleteAuto("7lHNkskCTgy2qI6kPLuv").then(mensaje=>console.log(mensaje))


const cliente ={
    nombre:"Pepe",
    apellido: "Perez",
    email: "pepe@gmail.com",
    dni: 123456,
    direccion: "calvito 111"
}

createOrdenCompra (cliente,12500, Date.now( )).then(orden=> console.log(orden))

getOrdenCompra("lr8pRpPcQzfbdhiGtEuC").then(orden => console.log(orden))