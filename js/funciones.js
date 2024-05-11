$(document).ready(function(){
	$("#RegistoContribuyentes").on('submit', function(e){
		e.preventDefault(); 
		console.log("ok");

		var formData = new FormData();
		formData.append("tipo_usuario", $("#txttipousuario").val());
		formData.append("cedula", $("#txtcedula").val());
		formData.append("nombre", $("#txtnombre").val());
		formData.append("telefono", $("#txttelefono").val());
		formData.append("correo", $("#txtcorreo").val());
		formData.append("clave", $("#txtcontra").val());

		// for (var pair of formData.entries()) {
  //             console.log(pair[0]+ ' - ' + pair[1]);
  //     	}


		$.ajax({
			url: './php/agregar_contribuyentes.php',
			type: 'POST',
			dataType: 'html',
			data: formData,
			cache: false,
	        contentType: false,
	        processData: false
		}).done(function (res) {
			if (res==0) {
				alert("El correo ya se encuetra registrado");
			} else if (res==1){
				// alert("Datos registrado exitosamente!");

				Toastify({
				  text: "Datos agregados satisfactoriamente",
				  duration: 3000,
				  newWindow: true,
				  close: true,
				  gravity: "top", // `top` or `bottom`
				  position: "right", // `left`, `center` or `right`
				  stopOnFocus: true, // Prevents dismissing of toast on hover
				  style: {
				    background: "linear-gradient(to right, #00b09b, #96c93d)",
				  },
				  onClick: function(){} // Callback after click
				}).showToast();

				$(".registro").css("display","none");
				$(".login").css("display","block");

				// Toastify({
				//   text: "This is a toast",
				//   className: "info",
				//   style: {
				//     background: "linear-gradient(to right, #00b09b, #96c93d)",
				//   }
				// }).showToast();
			} else if (res==2){
				alert("Ocurrio un error inesperadio, vuelva a intentar.")
			}
		});


	});
});