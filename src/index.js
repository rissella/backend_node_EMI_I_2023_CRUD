//1. importando framework de express
const express=require("express");
const rutas=require("./router/index");
const seq=require("./config/db");

//variable auxiliares
//2. indicamos el puerto
const PORT= process.env.PORT || 3000;
 //levantamos express
let app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//agregamos rutas
rutas.addRutas(app);

//4. levantar servidor
 app.listen(PORT,()=>{
    console.log(`Servidor levando en el http://127.0.0.1: ${PORT}`)
 })