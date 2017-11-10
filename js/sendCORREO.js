function sendCORREO(){
	var connect, form, result, txtNOMBRE, txtCORREO,txtTELEFONO, txtCOMENTARIO;
	var exprCORREO = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	// var exprNUMERO = /^1[8-9]|[2-5]\d|60$/;
	// var exprNUMERO.numeric();
	txtNOMBRE = __('txtNOMBRE').value;
	txtCORREO = __('txtCORREO').value;
	txtTELEFONO = __('txtTELEFONO').value;
    txtCOMENTARIO = __('txtCOMENTARIO').value;

	if (txtNOMBRE != ''  && txtCORREO != '' && txtTELEFONO != '' && txtCOMENTARIO != ''){
		if(!exprCORREO.test(txtCORREO)){

			result = '<div class="alert alert-dismissible alert-danger">';
				result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
            	result +='<p><strong> Ingrese un correo CORRECTO</strong></p>';
        		result +='</div>';
        		__('_AJAX_PRE_').innerHTML = result;
		}

		// else if(!exprNUMERO.test(txtTELEFONO)){
		// result = '<div class="alert alert-dismissible alert-danger">';
		// 	result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		// 				result +='<p><strong> el campo Telefono, tiene que ser solo NUMERICO y ser CORRECTO</strong></p>';
		// 			result +='</div>';
		// 			__('_AJAX_PRE_').innerHTML = result;
		// }

		else
		{
			form = 'txtNOMBRE=' + txtNOMBRE + '&txtCORREO=' + txtCORREO + '&txtTELEFONO=' + txtTELEFONO +'&txtCOMENTARIO=' + txtCOMENTARIO;
			connect =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			connect.onreadystatechange = function(){
				if(connect.readyState == 4 && connect.status == 200){
					if (connect.responseText == 1){
					  	location.reload();

					}

					else{
						__('_AJAX_PRE_').innerHTML = connect.responseText;
					}
				}

				else if (connect.readyState != 4){
					LimpiarCampos();
				}
			}

			connect.open('POST','envia.php',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);
		}
	}

	else
	{
		result = '<div class="alert alert-dismissible alert-danger">';
				result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
            	result +='<p><strong> Todos los campos deben estar llenos</strong></p>';
        		result +='</div>';
        		__('_AJAX_PRE_').innerHTML = result;
	}

	setTimeout(function() {
        $('#_AJAX_PRE_').empty(800);
    },3000);
}


function LimpiarCampos()
{
    // __('user_pres').value = "";
    __('txtNOMBRE').value = "";
	__('txtCORREO').value ="";
	__('txtTELEFONO').value ="";
    __('txtCOMENTARIO').value ="";

}
