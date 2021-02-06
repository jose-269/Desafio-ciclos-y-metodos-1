let nro;

const usuarioElige = () => {
    let select = Number(prompt("Elige un número del 1 al 5"));
    switch (select) {
        case 1: const unoAcien = () => {
            nro = 1;
            let usuario = Number(prompt("Ingrese un número entre 1 y 100"));
            for (let i = 0; i <= usuario; i++) {
                console.log(i);
            }
        }
        unoAcien()
        break;
        case 2: const napoleon = () => {
            nro = 2;
            let pregunta = ""
            do {
                pregunta = prompt("¿De qué color es el caballo blanco de Napoleón?");  
            }while(pregunta.trim().toLowerCase() != "blanco");
        }
        napoleon()
        break;
        case 3: const promedios = () => {
            nro = 3;
            const prom1 = Number(prompt("Ingresa tu promerdio de Matemática"));
            const prom2 = Number(prompt("Ingresa tu promerdio de Física"));
            const prom3 = Number(prompt("Ingresa tu promerdio de Ciencias"));
        
            let promArr = [prom1, prom2, prom3];
        
            const promFinal = (pr) => Math.round(promArr.reduce((x,  y) => x + y) / promArr.length); 
            alert(`${"Su promedio final es un:"} ${promFinal(promFinal)}`);
        }
        promedios();
        break;
        case 4: const frutasFavoritas = () => {
            let fruta1 = prompt("Dime el nombre de una fruta").trim();
            let fruta2 = prompt("Dime el nombre de una fruta").trim();
            let fruta3 = prompt("Dime el nombre de una fruta").trim();
        
            const arrFrutas = [fruta1, fruta2, fruta3];
        
            for (let i of arrFrutas) {
                if (i != "manzana") console.log(i);
            };
        }
        frutasFavoritas();
        break;
        case 5: const vocalesConsonantes = () => {
            let nombre = prompt("Escriba su nombre");
            
            let vocales = nombre.match(/[aeiou]/gim).length;
            let consonantes = nombre.match(/[^aeiou]/gim).length;
            
            alert(`${nombre}: ${"Su nombre tiene"} ${vocales} ${"vocales"} ${"y"} ${consonantes} ${"consonantes"}`);
            };
            vocalesConsonantes();
            break;
        }
        

}
usuarioElige()

// 1 Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir 
// por consola los números desde el 0 hasta el número que ingresó el usuario.
// 2 Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?
// 3 En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le
// debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias


// 4. Solicite al usuario escribir el nombre de 3 frutas. 




// 5. Solicite al usuario escribir su nombre


