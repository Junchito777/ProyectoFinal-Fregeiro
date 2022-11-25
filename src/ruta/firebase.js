import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQku-PBqPjH8HGLBHaDnl7wOf3-GE46w4",
  authDomain: "react-fa067.firebaseapp.com",
  projectId: "react-fa067",
  storageBucket: "react-fa067.appspot.com",
  messagingSenderId: "375367907219",
  appId: "1:375367907219:web:d8d2c500345656b1d49a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const db = getFirestore()


const getAutos = async()=>{
const autos = await getDocs(collection(db,"autos"))
const items = autos.docs.map(aut => {return{...aut.data(), id: aut.id}})
return items
}



const getAuto = async (id)=>{
  const aut = await getDoc(doc(db,"autos",id))
  let item
  if (aut.data()) {
    item = {...aut.data(), id: aut.id}
  }else {
    item = "Producto no encontrado"
  }  
  return item
}
const cargarBDD = async () =>{
  const promise = await fetch('./json/autos.json')
  const autos = await promise.json()
  autos.forEach(async (aut)=>{
    await addDoc(collection(db, "autos"),{
    
    nombre: aut.nombre,
    modelo: aut.motor,
    consumo: aut.consumo,
    plazas: aut.plazas,
    maletero: aut.maletero,
    potencia: aut.potencia,
    stock: aut.stock,
    precio: aut.precio,
    picture: aut.picture,
    idCategoria: aut.idCategoria,
    id: aut.id
    })
  })
}





const createAuto = async (objAuto) => {
  const estado = await addDoc(collection(db, "autos"), {
      nombre: objAuto.nombre,
      marca: objAuto.marca,
      modelo: objAuto.modelo,
      idCategoria: objAuto.idCategoria,
      stock: objAuto.stock,
      precio: objAuto.precio,
      img: objAuto.img
  })
  return estado
}
const updateAutos = async (id, info)=>{
  const estado = await updateDoc(doc(db, "autos", id), info)
  return estado
}

const deleteAuto = async (id) =>{
  const estado = await deleteDoc(doc(db, "autos", id))
  return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha)=>{
  const ordenCompra = await  addDoc(collection(db, "ordenCompra"),{
    
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    direccion: cliente.direccion,
    fecha: fecha,
    precioTotal: preTotal,
})
return ordenCompra
}

const getOrdenCompra = async (id)=>{
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}

export {cargarBDD, getAuto, getAutos, createOrdenCompra, getOrdenCompra, updateAutos, deleteAuto, createAuto}