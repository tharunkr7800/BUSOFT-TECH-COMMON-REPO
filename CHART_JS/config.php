<?php
    $servername = 'localhost';
    $username = 'root';
    $port = 3308;
    $password = "";
    $dbname = "Busoft_tech";
    
    $conn =  new mysqli($servername, $username, $password, $dbname, $port);

    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

   
