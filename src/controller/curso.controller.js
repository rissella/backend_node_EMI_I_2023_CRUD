const listar_curso= function(req,res){
    
    console.log("esta es la funcion para listar curso")
    console.log(req.route)
    
    res.send([
        {nombre:"Curso Node js",
        capacidad:8
        },
        {nombre:"Curso Angular js",
        capacidad:10
        },
        {nombre:"Curso React js",
        capacidad:15
        }
    ])
}

const guardar_curso= function(req,res){
    console.log("esta es la funcion para guardar curso")
    res.send(
      "esta es la funcion para guardar curso, tu curso ha sido guardado"        
    )
}

const modificar_curso= function(req,res){
    console.log("esta es la funcion para modificar curso")
}

const eliminar_curso= function(req,res){
    console.log("esta es la funcion para eliminar curso")
}

module.exports={
    listar_curso,
    guardar_curso,
    modificar_curso,
    eliminar_curso
}