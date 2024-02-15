<?php

require_once "connection.php";

function getUser()
{
    $sql = "SELECT * FROM students";
    $result = mysqli_query($GLOBALS['conn'], $sql);
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($users);
}

getUser();