// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar


let user = prompt("Ingresa el tipo de sticker que desees.  1. Pequeño  2. Grande")
let cantidad = parseInt(prompt("Ingresa la cantidad de stickers que deseas. \n Nota: Puedes pedir minimo 10 stickers"))
while(cantidad >= 10){
     let pequeño = 4000
     let grande = 6000
     if(user == 1){
          alert("El valor de su compra es: " + pequeño*cantidad)
     }if(user == 2){
          alert("El valor de su compra es: " + grande*cantidad)
     }
}
if(cantidad < 10){
     alert("Ingrese la cantidad nuevamente")
     let cantidad = parseInt(prompt("Ingresa la cantidad de stickers que deseas. \n Nota: Puedes pedir minimo 10 stickers"))
}