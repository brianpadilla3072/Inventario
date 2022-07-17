<?php
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
$mysql = mysqli_connect(//conecion a la base 
    'localhost',
    'root',
    '',
    'LUDOTECA');


$search = $_POST['search'];

if(!empty($search)){//si el valor search no esta vacio
    $query = "SELECT * FROM GAME_REVIEWS WHERE NAME LIKE '$search%' ";//consulta
    consultar($mysql,$query);

}else{ // si el valordela consultaes empty
    $query = "SELECT * FROM GAME_REVIEWS ";//sobrescribimos la variable con una consulta general consulta
    consultar($mysql,$query);
    
}

?>