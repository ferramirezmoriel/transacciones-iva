// Ejercicio #1
//Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
//Return the value of what she should be paying.


/*
function transaccion(){
    var tran = prompt("dame cuantas transacciones hiciste?");
    var costo = prompt("dame el costo total de las transacciones")

    var resultado = (tran * 3) + (costo * 1.01);

    alert(resultado); 
}

transaccion();

*/

//--------------------------------------------------------------------------------------------

//Ejercicio #2

//Parte 1
//Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

/*
function saludar(name1, name2, name3){
    var nombres = {
        nom1: prompt("Nombre 1: "), nom2: prompt("Nombre 2"), nom3: prompt("Nombre 3")
    }
    

    console.log("welcome " +nombres.nom1+ ", " +nombres.nom2+ ", " +nombres.nom3);
}

saludar();
*/

//---------------------------------------------------------------------------------------------

//parte2
//Ed would like to create a function that takes in a birth year and returns the age.
//i.e. 1990 returns 30

/*
function edad(){
    var anio = prompt("Dame tu fecha de nacimiento: ");
    var edad = 2022 - anio;

    alert(anio+" returns "+edad);
}

edad();
*/

//---------------------------------------------------------------------------------------------

//parte 3
//Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

/*
function welcome(){
    var nombres = {
        nom1: prompt("nombre1: "),
        nom2: prompt("nombre2: "),
        nom3: prompt("nombre3: ")
    }
    var edades = {
        edad1: prompt("edad1: "),
        edad2: prompt("edad2: "),
        edad3: prompt("edad3: ")
    }

    console.log("welcome " +nombres.nom1+ ", " +edades.edad1+ ". welcome " +nombres.nom2+ ", " +edades.edad2+ ". welcome " +nombres.nom3+ ", " +edades.edad3+ ". ");
}

welcome();
*/


//----------------------------------------------------------------------------------------------

//Challenge Yourself
//A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

//A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.


(function (grad) {
    //comprobamos que el rango de edad sea correcto
     if (grad <= 11 && grad >= 0) {
         if (grad >= 5) {
             console.log("Passed: " + true);
         }
         else {
             console.log("Passed: " + false)
         }
 
         if (grad>=8 && grad <11) {
             console.log("Excelent")
         }
         
         if(grad == 11) {
             console.log("Perfect")
         }
     }
     else {
         console.log("Valor no aceptado.")
     }
      
 })((10));
 
