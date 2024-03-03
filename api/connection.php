<?php

$host="localhost";
$user="root";
$password="";
$db="fourthsemproject";

$conn=mysqli_connect($host,$user,$password,$db);
if(!$conn){
    die ('Error connecting to database');
}


?>