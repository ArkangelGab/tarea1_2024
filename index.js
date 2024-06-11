import fs from "fs";
import inquirer from "inquirer";

const listado = JSON.parse(fs.readFileSync("tareas.json", "utf-8"));

const input = await inquirer.prompt([
  {
    name: "opciones",
    message: "Selecciona una opción: ",
    type: "list",
    choices: ["Agregar tarea", "Eliminar tarea"],
  },
  {
    name: "tarea",
    message: "Ingresa una tarea: ",
  }])



if (input.opciones === "Agregar tarea") {
 const nuevaTarea = {};

  nuevaTarea.tarea = input.tarea;

   listado.push(nuevaTarea)

  fs.writeFileSync("tareas.json", JSON.stringify(listado, null, 2));
}

if(input.opciones === "Eliminar tarea") {

    const listaNueva = listado.filter((item) => input.tarea != item.tarea);

    fs.writeFileSync("tareas.json", JSON.stringify(listaNueva))
    
}
