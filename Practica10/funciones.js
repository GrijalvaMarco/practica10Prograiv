function suma(){
var n1= document.getElementById("n1").value;
var n2= document.getElementById("n2").value;
if (n1.length==0){
alert("Campo vacio!");
}else{
if (n2.length==0){
alert("Campo vacio!");
}
}
var suma= eval(n1 + '+'+ n2);
document.getElementById("res").value=suma;
}

function resta(){
var n1= document.getElementById("n1").value;
var n2= document.getElementById("n2").value;
if (n1.length==0){
alert("Campo vacio!");
}else{
if (n2.length==0){
alert("Campo vacio!");
}
}
var resta= eval(n1 + '-'+ n2);
document.getElementById("res").value=resta;
}

function multiplica(){
var n1= document.getElementById("n1").value;
var n2= document.getElementById("n2").value;
if (n1.length==0){
alert("Campo vacio!");
}else{
if (n2.length==0){
alert("Campo vacio!");
}
}
var multiplica= eval(n1 + '*'+ n2);
document.getElementById("res").value=multiplica;
}

function dividir(){
var n1= document.getElementById("n1").value;
var n2= document.getElementById("n2").value;
if (n1.length==0){
alert("Campo vacio!");
}else{
if (n2.length==0){
alert("Campo vacio!");
}
}
var dividir= eval(n1 + '/'+ n2);
if(dividir ==0 || dividir== 'Infinity')
alert("Division entre cero!");
document.getElementById("res").value=dividir;

}


function validarVacios(n1,n2){
var n1= document.getElementById("n1").value;
var n2= document.getElementById("n2").value;
if (n1.length==0)
alert("Campo vacio!");
if (n2.length==0)
alert("Campo vacio!");
}

function validarNro(e) {
var key;
if(window.event) // IE
	{
	key = e.keyCode;
	}
else if(e.which) // Netscape/Firefox/Opera
	{
	key = e.which;
	}

if (key < 48 || key > 57)
    {
    if(key == 46 || key == 8) // Detectar . (punto) y backspace (retroceso)
        { return true;  }
    else 
        { return false; }
    }
	
return true;
}

function mostrarAlerta(){
alert("Division entre cero.");
}

function carga(){

document.getElementById("sum").onclick= suma;
document.getElementById("rest").onclick= resta;
document.getElementById("mult").onclick= multiplica;
document.getElementById("div").onclick= dividir;
}


window.onload=carga;