
function Suma() {
    var a = 0;
    var b = 0;
    var suma = 0;

    a = parseInt(prompt("Por favor ingresar el primer valor 1"));
    b = parseInt(prompt("Por favor ingresar el segundo valor 2"));

    suma = a + b;

    alert("El resultado de la suma es: " + suma);
}


function OperacionesBasicas() {
    var a = 0;
    var b = 0;

    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    a = parseInt(prompt("Por favor ingresar el primer valor 1"));
    b = parseInt(prompt("Por favor ingresar el segundo valor 2"));

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert("El resultado de la suma es: " + suma);
    alert("El resultado de la resta es: " + resta);
    alert("El resultado de la miltuiplicacion es: " + multiplicacion);
    alert("El resultado de la division es: " + division);
}


function metrosapulgadas() {
    var M = 0;
    var P = 0;

    M = parseInt(prompt("Por favor ingresar el valor en metros que desea convertir a pulgadas "));

    P = M * 39.97;

    alert("El valor en pulgadas es de: " + P);
}


function Areadeltriangulo() {
    var B = 0;
    var H = 0;
    var A = 0;

    B = parseInt(prompt("Por favor ingrese el valor de la Base: "));
    H = parseInt(prompt("Por favor ingrese el valor de la Altura: "));

    A = B * H / 2;

    alert("El Area del triangulo es: " + A);
}


function Añodenacimiento() {
    var AA = 0;
    var Edad = 0;
    var AN = 0;

    AA = parseInt(prompt("Por favor ingrese el año actual: "));
    Edad = parseInt(prompt("Por favor ingrese la edad del usuario: "));

    AN = AA - Edad;

    alert("El Año de nacimiento del usuario es: " + AN);
}


function Inversion() {
    var C = 0;
    var Año = 0;
    var G = 0;
    var IA = 0;

    C = parseInt(prompt("Por favor ingrese el capital invertido: "));
    Año = parseInt(prompt("Por favor ingrese el numero de años a calcular: "));

    IA = 0.017 * 12 / 100;
    G = (C * IA) * 12;
    G = G + C

    alert("Interes recibido: " + G);
}

function mayordedosnumeros() {

    var a = prompt("ingrese el primer numero");
    var b = prompt("ingrese el segundo numero");
    if (a === b)
        alert("son iguales");
    if (a > b)
        alert("el numero mayor es : " + a);
    if (b > a)
        alert("el numero mayor es : " + b);

}

function numeroparoimpar() {
    var numero;
    numero = prompt("Introducir el numero")
    if (numero % 2 == 0) {
        alert("El numero " + numero + " es par");
    }
    else {
        alert("El numero " + numero + " es impar");

    }
}

function cuadrado() {
    var a = 0;
    var elv = 0;
    a = parseInt(prompt("Ingrese el numero del cual desea saber el cuadrado: "));
    elv = a * a;
    alert("el cuadrado de" + a + "es:" + elv)
}

function numeromenor() {
    var a = 0;
    var b = 0;
    var c = 0;
    a = parseInt(prompt("Ingrese el primer valor: "));
    b = parseInt(prompt("Ingrese el segundo valor: "));
    c = parseInt(prompt("Ingrese el tercer valor: "));

      si((a < b) && (a < c)); {
        alert("El numero menor es: " + a)
    } si((b < a) && (b < c)); {
        alert("El numero menor es: " + b)
    } si((c < a) && (c < b));  {
        alert("El numero menor es: " + c)
    }
    alert("Hasta luego");
}

function  colegio_ABC ( ) {
    var  nombre = "" ;
    var  a = 0 ;
    var  b = 0 ;
    var  c = 0 ;
    var  d = 0 ;
    var  e = 0 ;
    var  suma = 0 ;
    var  promedio = 0 ;
    nombre  =  prompt ( "Ingrese el nombre del estudiante: " ) ;
    a  =  parseFloat ( prompt ( "Ingrese la primera nota: " ) ) ;
    b  =  parseFloat ( prompt ( "Ingrese la segunda nota: " ) );
    c  =  parseFloat ( prompt ( "Ingrese la tercera nota: " ) ) ;
    d  =  parseFloat ( prompt ( "Ingrese la cuarta nota: " ) );
    e  =  parseFloat ( prompt ( "Ingrese la quinta nota: " ) ) ;
    suma  =  a + b + c + d + e ;
    alert  ( "la suma de las notas es: " + suma ) ;
    promedio  =  suma / 5
   
    if ( promedio < 3.0 ); {
     alert ( "No aprobo la materia, la nota de " +  nombre  + " es: " +  promedio ) ;  
    }
    if (promedio > 3.0) {
     alert ( "Aprobo la materia, la nota de " +  nombre  + " es: " +  promedio ) ; 
}}

function  FRUTERIA ( ) {
    var  k = 0 ;
    var  td = 0 ;
    var  d = 0 ;
    var  t = 0 ;
 
    k = parseInt ( prompt ( "Ingrese los kilos comprados" ) ) ;
    t = 4500 * k ;
    if ( k <= 2 ) ;{
        alert ( "No tiene descuento" ) ;
        alert ( "Su total a pagar es: "  +  t ) ;
        alert( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( ( k > 2 ) && ( k <= 5 ) ); {
        alert ( "Tiene un descuento del 10%" ) ;
        d = 10 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( ( k > 5 ) && ( k <= 10 ) ) ;{
        alert ( "Tiene un descuento del 15%" ) ;
        d = 15 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( k >= 10 ); {
        alert ( "Tiene un descuento del 20%" ) ;
        d = 20 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
       
}