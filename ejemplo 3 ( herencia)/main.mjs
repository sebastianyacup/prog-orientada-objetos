function videoPlay(ID){
    const urlscreta = "https://Platziultrasecreto.com/" + ID;
    console.log("Se esta reproduciendo esde la url" + urlscreta);
}
function videostop(ID){
    const urlscreta = "https://Platziultrasecreto.com/" + ID;
    console.log("pausamos el video" + urlscreta);
}
export class platziclass{
    constructor({
        name,
        videoID,

    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);

    }
    pausar(){
        videostop(this.videoID);

    }
}
class learningPaths
{
    constructor({
        ID,
        name,
        teacher,
        temas=[],
    }){
        this.ID = ID;
        this._name = name;
        this.teacher = teacher;
        this.temas= temas;
    }
    get name(){
        return this._name;
    }
    set name(nuevonombre){
        if (nuevonombre === "curso malo de programacion basica"){
        console.error("No se autoriza");
    } else {
        this._name = nuevonombre;
    }
  }
}

const EscuelaJuego = new learningPaths({
    name: "Escuela de juego",
    ID: "1093854",
    teacher: "Ingrid Betancourt",
    temas: [
        "programacion orientada a juegos",
        "Programacion basica juegos",
        "Programacion  experta en juegos",
    ],
});

const Escueladefutbol = new learningPaths({
    name: "Escuela de futbol",
    ID: "209423",
    teacher: "David yacup",
    temas: [
        "Dominio del balon",
        "Pases cortos  y fisico",
        "Definicion extrategia",
    ],
});
class student {
    constructor({
        name,
        email,
        username,
        twitter = underfined,
        instagram= undefined,
        facebook = underfined,
        approvedCourses = [],
        learningPaths =[],
    })
    {
        this.name= name;
        this.email = email;
        this.username= username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    }
}

const Juan2 = new student({
    name: "JuanDC",
    username: "DCJuan",
    email: "Juanito@Juanito.com",
    twitter: "fjuanDC",
});

const Migelito = new student({
    name: "Miguelito",
    username: "MiguelDC",
    email: "Miguelito@Juanito.com",
    instagram: "Miguelito",
});