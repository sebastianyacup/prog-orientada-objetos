const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML Y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};
function student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    

}

student.prototype.aprobarCurso= function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}
const juanita = new student(
    "juannita alejandra",
    15,
    [
        "Curso introduccion  de video juegos",
        "Curso de creacion de personajes",
    ]
)

// prototipos con la sintaxis de clases
class student2 {
    constructor({
        name,
        age,
        cursosAprobados =[],
    }){
        this.name = name;
        this.email = this.email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;       
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);

    }
}

const miguelito = new student2({
 email: "miguelito@gmail.com",
 name:"Miguel",
 age: 28,

});