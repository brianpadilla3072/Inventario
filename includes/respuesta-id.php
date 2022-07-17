<?php
$mysql = mysqli_connect(//conecion a la base 
    'localhost',
    'root',
    '',
    'LUDOTECA');
function consultar($a,$b) {//pasamos consulta y resibimos un strig tipo texto
    $mysql= $a;
    $query = $b;
    $res = mysqli_query($mysql,$query);
    $json = array();// declaramos un array
    while($row = mysqli_fetch_array($res)){
        $json[] = array( // recorremos el array con los datos
            'ID'=> $row['ID'],
            'NAME' => $row['NAME'],
            'DESCRIPTION' => $row['DESCRIPTION'],
            'GAMBLERS' => $row['GAMBLERS'],
            'TIME' => $row['TIME']
        );
    }
    $jsonString = json_encode($json); // convierte en una variable de texto
    echo $jsonString;//devolvemos el resultado de  la consulta como un string

}

$id = $_POST["id"];
if(!empty($id)){
    $query = "SELECT * FROM GAME_REVIEWS WHERE ID LIKE '$id%' ";//consulta
    consultar($mysql,$query);

}
?>