<?php

	//estructurada
	function suma($a, $b){
		return $a + $b;
	}

	$resultado = suma(3, 4);

	print $resultado;

	//POO
	class Persona{
		public $nombre = "";

		function prints() {
			print 'Nombre: ' . $this->nombre;
		}
	}

	