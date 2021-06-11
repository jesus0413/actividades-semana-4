var maradona= document.getElementById('maradona');
var messi= document.getElementById('messi');
var aguero= document.getElementById('aguero');

var pregunta1=document.getElementById('uno');
var pregunta2= document.getElementById('dos');

var buenosaires= document.getElementById('buenosaires');
var laplata= document.getElementById('laplata');
var laboca= document.getElementById('laboca');

var correcto=document.getElementById('correcto');
var incorrecto= document.getElementById('incorrecto');

var correcto2=document.getElementById('correcto2');
var incorrecto2= document.getElementById('incorrecto2');

var puntaje =0;

maradona.addEventListener("click", function(e){
    e.preventDefault();
    maradona.style.background= "red";
    incorrecto.style.display= "block";
    setTimeout(function(){
        pregunta1.style.display="none";
        pregunta2.style.display="block";
    }, 1000);
})

messi.addEventListener("click", function(e){
    e.preventDefault();
    messi.style.background= "green";
    correcto.style.display= "block";
    puntaje++;
    setTimeout(function(){
        pregunta1.style.display="none";
        pregunta2.style.display="block";
    }, 1000);
})

aguero.addEventListener("click", function(e){
    e.preventDefault();
    aguero.style.background= "red";
    incorrecto.style.display= "block";
    setTimeout(function(){
        pregunta1.style.display="none";
        pregunta2.style.display="block";
    }, 1000);
})

buenosaires.addEventListener("click", function(e){
    e.preventDefault();
     buenosaires.style.background= "green";
    correcto2.style.display= "block";
      puntaje++;
    setTimeout(function(){
     document.write('<h1> Tu puntaje es '+ puntaje+'</h1>')

    }, 1000);

})

laplata.addEventListener("click", function(e){
    e.preventDefault();
     laplata.style.background= "red";
    incorrecto2.style.display= "block";
          setTimeout(function(){
            document.write('<h1> Tu puntaje es '+ puntaje+'</h1>')
    }, 1000);

})
laboca.addEventListener("click", function(e){
    e.preventDefault();
     laboca.style.background= "red";
    incorrecto2.style.display= "block";
          setTimeout(function(){
            document.write('<h1> Tu puntaje es '+ puntaje+'</h1>')
    }, 1000);

})