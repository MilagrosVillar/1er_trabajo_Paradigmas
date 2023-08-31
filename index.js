//objetos
class Remera {
  constructor() {
    this.peso = 800;
    this.color = "rojo";
    this.material = "lino";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Pelota {
  constructor() {
    this.peso = 800;
    this.color = "pardo";
    this.material = "cuero";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Biblioteca {
  constructor() {
    this.peso = 8000;
    this.color = "verde";
    this.material = "madera";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Muñeco {
  constructor(peso) {
    this.peso = peso;
    this.color = "celeste";
    this.material = "vidrio";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Placa {
  constructor(peso, color) {
    this.peso = peso;
    this.color = color;
    this.material = "cobre";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Arito {
  constructor(){
    this.peso = 180;
    this.color = "celeste";
    this.material = "cobre";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Banquito {
  constructor(){
    this.peso = 1700;
    this.color = "naranja";
    this.material = "madera";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

class Cajita {
  constructor(){
    this.peso = 400 + (vidriera.objetoVidriera.peso || mostrador.objetoMostrador.peso);
    this.color = "rojo";
    this.material = "cobre";
  }
  esBrillante(){
    return this.material === "vidrio" || this.material === "cobre";
  }
}

//personas y sus gustos
const rosa = {
  leGusta(objeto) {
    return objeto.peso <= 1200;
  }
}

const Estefania = {
  leGusta(objeto) {
    return objeto.color === "rojo" || objeto.color === "verde";
  }
}

const Luisa = {
  leGusta(objeto) {
    return objeto.material === "cobre" || objeto.color === "vidrio";
  }
}

const Juan = {
  leGusta(objeto) {
    return (objeto.color != "rojo" && objeto.color != "verde" && objeto.color != "naranja" &&
    objeto.peso <= 1800  && objeto.peso >= 1200);
    
  }
}


class Bolichito {
  
  vidriera = new Arito();
  mostrador = new Pelota();

  cambiarVidriera(objeto){
    this.vidriera = objeto;
  }

  cambiarMostrador(objeto){
    this.mostrador = objeto;
  }

  sonBrillantes() {
  return this.vidriera.esBrillante() && this.mostrador.esBrillante();
  }

  esMonocromatico() {
    return this.vidriera.color === this.mostrador.color;
  }

  estaDesequilibrado() {
    return this.vidriera.peso < this.mostrador.peso;
  }

  tieneAlgoDeColor(color) {
    return (
      this.vidriera.color === color || this.mostrador.color === color
    );
  }

  puedeMejorar() {
    return this.estaDesequilibrado() || this.esMonocromatico();
  }

  puedeOfrecerleAlgoA(persona) {
    return persona.leGusta(this.vidriera) || persona.leGusta(this.mostrador);
  }
}




//objetos definidos
  
const remera = new Remera();
const pelota = new Pelota();
const biblioteca = new Biblioteca();
const placa = new Placa(200, "verde")
const bolichito = new Bolichito();







  
//consola



console.log(`¿Le gusta a Rosa la remera? ${rosa.leGusta(remera)}`);
console.log(`¿Le gusta a Estefania la pelota? ${Estefania.leGusta(pelota)}`);
console.log(`¿Le gusta a Juan la placa? ${Juan.leGusta(placa)}`);

console.log(`¿Le gusta el objeto del mostrador a Rosa? ${rosa.leGusta(bolichito.mostrador)}`);
console.log(`¿Le gusta a Juan el objeto de la vidriera? ${Juan.leGusta(bolichito.vidriera)}`);

console.log(`¿Son brillantes los objetos del bolichito? ${bolichito.sonBrillantes()}`);
console.log(`¿los dos objetos del bolichito son del mismo color? ${bolichito.esMonocromatico()}`)
console.log(`¿El bolichito está desequilibrado? ${bolichito.estaDesequilibrado()}`)
console.log(`¿El bolichito tiene algo de color rojo? ${bolichito.tieneAlgoDeColor("celeste")}`)
console.log(`¿El bolichito puede mejorar? ${bolichito.puedeMejorar()}`)
console.log(`¿El bolichito puede ofrecerle algo a Luisa? ${bolichito.puedeOfrecerleAlgoA(Luisa)}`)

bolichito.cambiarVidriera(Banquito)
bolichito.cambiarMostrador(Cajita)

console.log(`¿Le gusta el objeto del mostrador a Rosa? ${rosa.leGusta(bolichito.mostrador)}`);
console.log(`¿Le gusta a Juan el objeto de la vidriera? ${Juan.leGusta(bolichito.vidriera)}`);
