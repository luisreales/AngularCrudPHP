<?php

/*
Desarrollado Por: Luis Reales
Fecha: Mayo 16/2020

*/


header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'connectdb.php';

$pacientes = [];
$id_paciente = $_GET["id"];

$id = strval($id_paciente);
$sql = "select * from tblPaciente where id=".$id;

if($result = mysqli_query($con,$sql)){
    
    
    
    //obtiene y verifica que exista al menos 1 registro
    if(mysqli_num_rows($result) == 1){
        //recorre el resultado y lo convierte en un array
        $row = mysqli_fetch_array($result);
        
        // Retrieve individual field value
        $nombre = $row["nombre"];
        $direccion = $row["direccion"];
        $id = $row["id"];

        
        class Result {}

        $response = new Result();
        $response->nombre = $nombre;
        $response->direccion =  $direccion;
        $response->id = $id;
      
        
        header('Content-Type: application/json');
        echo json_encode($response);   


    } else{
        http_response_code(400);
    }

}else{
    http_response_code(400);
}

?>