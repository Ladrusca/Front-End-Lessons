// ----------------------------------------------- TIPOS DE DATOS  ----------------------------------------------------------  


    // https://www.w3schools.com/js/js_operators.asp

    // Los tipos de datos mas comunes y que mas vamos a utilizar son:

    Enteros (Int): 0, 1, 2, 3, 4, 5, 6, 8, 9

    Flotante (Float): 0.5, 1.2, 3.3
    
    Caracter (Char): 'A', '+', 'Z' , '$', 
    
    Cadena de caracteres (String): 'juan', 'hoy es lunes' , 'Av. Gallardo "123" ' , '321soy-un-string hola ]{}})+&' 
    
    Boleano (Bool): true, false
    
    Lista (Array): [1,2,3,4,5,6]
    
    Objecto (Obj): {'nombre':'tomas', 'edad':24, 'telefono':2944800897}
    
    Indefinido (NaN): undefined

// ----------------------------------------------- OPERADORES  ----------------------------------------------------------  

/*
    https://www.w3schools.com/js/js_operators.asp
*/

// ----------------------------------------------- VARIABLES  ----------------------------------------------------------  

/*
    - Las Variables son espacios en memoria donde almacenamos información que queremos volver a usar más adelante

    - En una variable podemos almacenar todo tipo de datos, incluso podemos almacenar funciones completas.

    - En JavaScript la sintaxis para asignar una variable es la siguiente: 

        var [nombre de la variable] = [valor a guardar]

        ej: var nombre_del_usuario = "Tomas"
                
*/  
            
var primer_numero = 10 //Valor almacenado : 10

// La variable 'primer_numero' guardará el valor 10 y siempre que se la llame devolverá ese valor.

var segundo_numero = 25 //Valor almacenado : 25

// La variable 'segundo_numero' guardará el valor 25 y siempre que se la llame devolverá ese valor.

var resultado = primer_numero + segundo_numero //Valor almacenado : 35

// Ahora creamos una tercer variable, la llamaremos 'resultado'.
// La variable'resultado' almacenará el resultado de la suma de los valores almacenados entre las variables 'primer_numero' y 'segundo_numero'



/*
    Siempre podemos cambiar el valor que contienen nuestras variables.
    
    Podemos cambiar completamente el valor que contienen nuestras variables, asignandoles un nuevo valor a almacenar.

    También podemos asignarles un nuevo valor en base al valor que contenían previamente
*/

var nombre_completo = 'Tomas' //Valor almacenado : 'Tomas'

//En este caso estamos creando una variable que contiene el String 'Tomas'

nombre_completo = 'Grossi' //Valor almacenado : 'Grossi'

/*
    Ahora reemplazamos el valor que contenía la variable. 
    La variable contenía el String 'Tomas', ese valor se eliminó y ahora almacena el String 'Grossi'

    - Observá que la sintaxis para modificar el valor de la variable es similar a la sintaxis para crear la variable
    La diferencia está en que no ponemos la palabra reservada 'var'.
    Esto es porque nuestra variable ya existía y simplemente debemos llamarla por su nombre y asignarle un nuevo valor con el '='

    La sintaxis para modificar variables es:

        [nombre de la variable que ya existe] = [valor a asignar]
*/


var direccion = 'Calle Falsa ' //Valor almacenado : 'Calle Falsa '

// Creamos nuestra variable para guardar una direccion que usaremos mas adelante

direccion += '123' //Valor almacenado : 'Calle Falsa 123'

/* En este caso, notamos que estamos usando el signo '+=', esto agregará el nuevo valor al valor que ya contenía la variable

    Otra forma de lograr el mismo resultado es la siguiente:
*/

var direccion = 'Calle Falsa ' //Valor almacenado : 'Calle Falsa '

direccion = direccion + '123' //Valor almacenado : 'Calle Falsa 123'

// Esto se traduce como :
        
direccion = 'Calle False ' + '123' //Valor almacenado : 'Calle Falsa 123'


// Veamos ejemplos, ahora con numeros!

//

var numero = 10 //Valor almacenado : 10

numero = 5 //Valor almacenado : 5

//

var numero_2 = 50 //Valor almacenado : 50

numero_2 += 15 //Valor almacenado : 65

//

var numero_3 = 100 //Valor almacenado : 100

numero_3 -= 15 //Valor almacenado : 85

