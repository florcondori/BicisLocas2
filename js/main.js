function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var selector= document.getElementById("selector");

	if(!validarInput(nombre)){
		nombre.nextElementSibling.innerText = "Ingresar tu nombre";
	}else{
		nombre.nextElementSibling.innerText = "";
		primeraLetraMayus(nombre);
	}

	if(!validarInput(apellido)){
		apellido.nextElementSibling.innerText = "Ingresar tu apellido";
	}else{
		apellido.nextElementSibling.innerText = "";
		primeraLetraMayus(apellido);
	}

	if(!validarInput(email)){
		email.nextElementSibling.innerText = "Ingresar un correo electronico";
	}else{
		email.nextElementSibling.innerText = "";
		if(!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email.value)){
			email.nextElementSibling.innerText = "Segun el formato: correo@dominio.com";
		}else{
			email.nextElementSibling.innerText = "";
			email.nextElementSibling.classList.add("ocultar");
		}
	}

	if(!validarInput(password)){
		password.nextElementSibling.innerText = "Debe ingresar una contraseña";
	}else{
		password.nextElementSibling.innerText = "";
		if(password.value.length>=6 && password.value.length<=30){
			if(password.value!="password" && password.value != "123456" && password.value !="098754"){
				password.nextElementSibling.innerText = "";
				password.nextElementSibling.classList.add("ocultar");
			}else{
				password.nextElementSibling.innerText = "No debe ser: password ó 123456 ó 098754";
			}
			
		}else{
			password.nextElementSibling.innerText = "Debe contener entre 6 a 30 caracteres";			
		}
	}

	if(selector.value == "0"){
		selector.nextElementSibling.style.display = "block";
		selector.nextElementSibling.innerText = "Seleccione alguna bicicleta";
	}else{
		selector.nextElementSibling.innerText = "";
		selector.nextElementSibling.classList.add("ocultar");
	}
}
function validarInput(input){
	if(input.value.trim().length == 0){
		input.nextElementSibling.style.display = "block";
		return false;
	}else{
		input.nextElementSibling.style.display = "block";
		return true;
	}

}
function primeraLetraMayus(input){
	var arrayString = input.value.trim().split(" ");
	var cont=0;
	console.log(arrayString);
	arrayString.forEach(function(elem){
		if(elem == elem.charAt(0).toUpperCase()+elem.slice(1).toLowerCase()){
			cont++;
		}
	});
	if(cont != arrayString.length){
		input.nextElementSibling.style.display = "block";
		input.nextElementSibling.innerText = "La primera Letra debe estar en mayuscula";
		return false;
	}else{
		input.nextElementSibling.innerText = "";
		input.nextElementSibling.classList.add("ocultar");
		return true;
	}
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
