<?php  

/*
Desarrollado Por: Luis Reales
Fecha: Mayo 16/2020

*/

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require 'connectdb.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
   
    $contents = file_get_contents("php://input");   
    $request = json_decode($contents,true);  
    $input_name = $request["nombre"];
    $input_address = $request["direccion"];
    
    // verifica que no esten vacio los campos
    if(!empty($input_name) && !empty($input_address)){
        // Prepare an insert statement
        $sql = "INSERT INTO tblpaciente (nombre, direccion) VALUES (?, ?)";
         
        if($stmt = mysqli_prepare($con, $sql)){
            // asignar parametros
            mysqli_stmt_bind_param($stmt, "ss", $param_name, $param_address);
            
            //asignar valor a los parametros
            $param_name = $input_name;
            $param_address = $input_address;
        
            
            // ejecutar sentencia
            if(mysqli_stmt_execute($stmt)){
                
                http_response_code(200);
            } else{
                http_response_code(400);
            }

           
        }
         // cerrar sentencia 
         mysqli_stmt_close($stmt);
         
        
    }
    
    // cerrar la conexion
    mysqli_close($con);

    class Result {}

    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos creados';

    header('Content-Type: application/json');
    echo json_encode($response);  


}else{
    echo "no fue posible realizar la creacion";
}

?>

