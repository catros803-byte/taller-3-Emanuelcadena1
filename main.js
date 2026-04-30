let tareotas = [{}]
const crearTarea = () => {
  let titulo = prompt("Titulo: ")
  let descripcion = prompt("Descripcion: ")

  let tarea = {
    titulo: titulo,
    descripcion: descripcion,
    completada: false
  }

  tareas.push(tarea)
  console.log("Tarea creada\n")
}

const filtrarTareas = () => {
  let estado = prompt("Ver completadas (si/no): ")

  let filtradas

  if (estado.toLowerCase() === "si") {
    filtradas = tareas.filter(t => t.completada === true)
  } else {
    filtradas = tareas.filter(t => t.completada === false)
  }

  console.log("\nTareas:")
  filtradas.forEach((t, i) => {
    console.log(i + 1 + ". " + t.titulo + " - " + t.descripcion + " - " + (t.completada ? "completada" : "pendiente"))
  })
  console.log("")
}

const completarTarea = () => {
  tareas.forEach((t, i) => {
    console.log(i + 1 + ". " + t.titulo)
  })

  let num = parseInt(prompt("Numero de tarea: ")) - 1

  if (tareas[num]) {
    tareas[num].completada = true
    console.log("Tarea completada\n")
  } else {
    console.log("Opcion invalida\n")
  }
}

let opcion

do {
  console.log("1 Crear tarea")
  console.log("2 Filtrar tareas")
  console.log("3 Completar tarea")
  console.log("4 Salir")

  opcion = prompt("selecciona la opcion que deseas realizar: ")

  if (opcion === "1") crearTarea()
  else if (opcion === "2") filtrarTareas()
  else if (opcion === "3") completarTarea()
  else if (opcion === "4") console.log("Fin")
  else console.log("Opcion invalida\n")

} while (opcion !== "4")