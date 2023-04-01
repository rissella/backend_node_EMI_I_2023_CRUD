const curso_controller = require("./../controller/curso.controller.js")

function addRutas(app){
    
    app.get("/inicio", function(req,res){
        res.send({mensaje:"Bienvenido a la página de inicio"})
    })     

//CRUD CREATE READ UPDATE DELETE
   app.get("/cursos",curso_controller.listar_curso)
    app.post("/cursos",curso_controller.guardar_curso)
    app.put('/cursos/:id_curso',curso_controller.modificar_curso)
    app.delete('/cursos/:id_curso',curso_controller.eliminar_curso)
    
}

module.exports={ addRutas}