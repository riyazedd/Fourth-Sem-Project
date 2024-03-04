<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


require_once "connection.php";



$server=$_SERVER['REQUEST_METHOD'];

function getUser()
{
    $sql = "SELECT * FROM students";
    $result = mysqli_query($GLOBALS['conn'], $sql);
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);   
    echo json_encode($users);
}

if($server=="GET"){
    getUser();
}else if($server=="POST"){
    $data= json_decode(file_get_contents('php://input'),true);
    $name=$data['name'];
    $email=$data['email'];
    $address=$data['address'];
    $sql="INSERT INTO students (name,email,address) VALUES ('$name','$email','$address')";
    if(mysqli_query($conn,$sql)){
        echo "Data Added Succesfully";
    }else{
        echo "Error adding data";
    }
}else if($server=="DELETE"){
    $myEntireBody= file_get_contents('php://input');
    $myBody= json_decode($myEntireBody);
    $id=$myBody->id;
    $sql="DELETE FROM students WHERE id=$id";
    if(mysqli_query($conn,$sql)){
        echo "User deleted succesfully";
    }else{
        echo "Error: data not deleted";
    }
}else if($server=="PUT"){
    $myEntireBody=file_get_contents('php://input');
    $myBody= json_decode($myEntireBody);
    $id=$myBody->id;
    $name=$myBody->name;
    $address=$myBody->address;
    $sql="UPDATE students SET name='$name', address='$address' WHERE id=$id";
    if(mysqli_query($conn,$sql)){
        echo "Updated Succesfully";
    }else{
        echo "Error: Data not Updated";
    }
    
}else{
    echo "Invalid request";
}