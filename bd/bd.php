<?php
/*  La base de datos se debe llamar GAME-REVIEWS debe tener la sigientes columnas:
    ID= PRIMARY, AUTOINCREMENTAL:TRUE ;
    IMG= TIPO:LONGBLOB;
    NAME= TIPO:VARCHAR LONG:50;
    THEMATIC= TIPO:VARCHAR LONG:30;
    MECHANICAL= TIPO:VARCHAR LONG:30;
    TIME= TIPO:INT LONG:10;
    ZIZE= TIPO:INT LONG:10;
    LEVELS= TIPO:INT LONG:5;
    GAMBLERS= TIPO:INT LONG:10;
    PUBLISHER= TIPO:VARCHAR LONG:50;
    DESCRIPTION= TIPO:TEXT LONG:300;

/*  coneccion a base de datos */
$mysql = mysqli_connect(//conecion a la base 
    'localhost',
    'root',
    '',
    'LUDOTECA');

 /*
  esto lo usamos para verificar que la base funciona 
 if(isset($com)){
     echo 'db conect';
 }*/
 ?> 