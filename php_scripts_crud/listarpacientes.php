<?php

/*
Desarrollado Por: Luis Reales
Fecha: Mayo 16/2020

*/

header("Access-Control-Allow-Origin: *");
require 'connectdb.php';
error_reporting(E_ERROR);
$pacientes = [];
$sql = "select * from tblPaciente";

if($result = mysqli_query($con,$sql)){
    $id = 0;
    while($row = mysqli_fetch_assoc($result)){
        $pacientes[$id]['id'] = $row['id'];
        $pacientes[$id]['nombre'] = $row['nombre'];
        $pacientes[$id]['direccion'] = $row['direccion'];
        $pacientes[$id]['telfono'] = $row['telfono'];
        $pacientes[$id]['EPS'] = $row['EPS'];
        $id++;
    }

    header('Content-type: application/json');
    echo json_encode($pacientes);

}else{
    http_response_code(400);
}

?>