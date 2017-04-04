function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var selector= document.getElementById("selector");

	if(nombre.value.trim().length == 0){
		nombre.nextElementSibling.innerText = "Ingresar tu nombre";
	}else{
		nombre.nextElementSibling.innerText = "";
		if(!primeraLetraMayus(nombre)){
			nombre.nextElementSibling.innerText = "La primera letra debe estar en Mayuscula";
		}else{
			nombre.nextElementSibling.innerText = "";
			nombre.nextElementSibling.classList.add("ocultar");
		}
	}

	if(apellido.value.trim().length == 0){
		apellido.nextElementSibling.innerText = "Ingresar tu apellido";
	}else{
		apellido.nextElementSibling.innerText = "";
		if(!primeraLetraMayus(apellido)){
			apellido.nextElementSibling.innerText = "La primera Letra debe estar en mayuscula";
		}else{
			apellido.nextElementSibling.innerText = "";
		}
	}

	if(email.value.trim().length==0){
		email.nextElementSibling.innerText = "Ingresar un correo electronico";
	}else{
		email.nextElementSibling.innerText = "";
		if(!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email.value)){
			email.nextElementSibling.innerText = "Segun el formato: correo@dominio.com";
		}else{
			email.nextElementSibling.innerText = "";
		}
	}

	if(password.value.length == 0){
		password.nextElementSibling.innerText = "Debe ingresar una contraseña";
	}else{
		password.nextElementSibling.innerText = "";
		if(password.value.length>=6 && password.value.length<=30){
			password.nextElementSibling.innerText = "";
		}else{
			password.nextElementSibling.innerText = "Debe contener entre 6 a 30 caracteres";
		}
	}

	if(selector.value == "0"){
		selector.nextElementSibling.innerText = "Seleccione alguna bicicleta";
	}else{
		selector.nextElementSibling.innerText = "";
	}
}

function primeraLetraMayus(input){
	var arrayString = input.value.trim().split(" ");
	var cont=0;
	console.log(arrayString);
	arrayString.forEach(function(elem){
		if(elem.charAt(0)== elem.charAt(0).toUpperCase()){
			cont++;
		}
	});
	return(cont == arrayString.length)
}

window.addEventListener('load',function(){
 	var arrayInput = document.getElementsByTagName("input");
 /*	var selector = document.getElementById("selector");
 	for(var i=0; i<arrayInput.length; i++){
 		if(arrayInput[i].id=="name" || arrayInput[i].id=="lastname" || arrayInput[i].id=="input-email" || arrayInput[i].id=="input-password"){
 			arrayInput[i].onblur = function(e){
								if(e.target.value.length==0){
 									e.target.nextElementSibling.innerText = "llenars obligatorio";
 								}else{
 									e.target.nextElementSibling.innerText = "";
 								}
 			};
 		}
 	}
	
*/	
 	for(var i=0;i<arrayInput.length; i++){
 		if(arrayInput[i].id=="name" || arrayInput[i].id=="lastname"){
 			arrayInput[i].onkeypress = function(e){
 										var code = e.keyCode;
 										if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
 											return true;
 										}else{
 											return false;
 										}
 			};							
 										
 		}
 	}

});
