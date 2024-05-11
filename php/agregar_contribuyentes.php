<?php
include("../conexion/conexion.php");
$conexion=conexion();


	$tipo_usuario=$_POST['tipo_usuario'];
	$cedula=$_POST['cedula'];
	$nombre=$_POST['nombre'];
	$telefono=$_POST['telefono'];
	$correo=$_POST['correo'];
	$clave=$_POST['clave'];
	

		function generador($longitud,$letras_min,$letras_may,$numeros,$simbolos){
			
			$variacteres = $letras_min?'abdefghijklmnopqrstuvwxyz':'';
				//Hacemos lo mismo para letras mayúsculas,numeros y simbolos
			$variacteres .= $letras_may?'ABDCEFGHIJKLMNOPQRSTUVWXYZ':'';
				$variacteres .= $numeros?'0123456789':''; //NOTA: En el tutorial puse mal esta variable debe ser -numeros- y no -numero-.
				$variacteres .= $simbolos?'!#$%&/()?¡¿':'';

				//Inicializamos variable $i y $clv
				$i = 0;
				$clv = '';

				//repetimos el codigo segun la longitud
				while($i<$longitud)
				{
						//Generamos un numero aleatorio
					$numrad = rand(0,strlen($variacteres)-1);
						//Sacamos el la letra al azar
						//La función -substr()- se compone de substr($variable,posición_inicio,longitud de sub cadena);
					$clv .= substr($variacteres,$numrad,1);
						//Aumentamos a $i en 1 cada que entramos al while
					$i++;
				}

					//Mostramos la cadena generada por medio de -echo-
				return $clv;

		}

        $clv=generador(10,true,true,true,false);
		// $fecha= date('Y-m-d');
		if(empty($tipo_usuario) || empty($cedula) || empty($nombre) || empty($telefono) || empty($correo) || empty($clave) ){
			?>
			<script>
				alert("Faltan datos por llenar");
			</script>
			<?php
			return;
		}else{
			$sql="SELECT * FROM contribuyentes WHERE correo='$correo' and status!='2'";
			$query=mysqli_query($conexion,$sql);
			$fila=mysqli_fetch_array($query);
			if(is_countable($fila)>0){
				echo 0;
			}else{
				$sql2="INSERT INTO contribuyentes
					(tipo_usuario,cedula,nombre,telefono,correo,clave,status) 
						values
					('$tipo_usuario','$cedula','$nombre','$telefono','$correo','$clave',1)";
				$query2=mysqli_query($conexion,$sql2);
				if($query2){
				
				
					echo 1;

					ini_set( 'display_errors', 1 );
				    error_reporting( E_ALL );
				    $from = "yanfranblancosalas@gmail.com";
				    $to = "coffeecomputer75@gmail.com";
				    $subject = "Checking PHP mail";
				    $message = "PHP mail works just fine";
				    $headers = "From:" . $from;
				    @mail($to,$subject,$message, $headers);

					// $headers = "MIME-Version: 1.0\r\n"; 
					// $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
					// $contenido="Usuario: ".$correo."\nContraseña provisional: ".$clv."\nSi usted no realizo esta operación comuniquese con el administrador del sistema";
					// $asunto="Contraseña generada";

					// mail($correo,utf8_decode($asunto),utf8_decode($contenido));


					
					
				}else{
					echo 2;
				}
			}
		}
	
?>