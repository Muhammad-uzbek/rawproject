<?php
// write codes to take data from the form and store it in the database

$servername = "localhost";
$username = "root";
$password = "mongozb2022";

$title = $_POST['title'];
$description = $_POST['description'];
$link = $_POST['link'];
$image = $_POST['image'];


$conn = new mysqli($servername, $username, $password);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
try{
    $sql = "CREATE DATABASE IF NOT EXISTS myDB";
    $conn->query($sql);
    $conn->select_db("myDB");
    $sql = "CREATE TABLE IF NOT EXISTS posts(
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        description VARCHAR(30) NOT NULL,
        link VARCHAR(30) NOT NULL,
        image VARCHAR(30) NOT NULL
    )";
    $conn->query($sql);
    $sql = "INSERT INTO posts(title, description, link, image)
    VALUES ('$title', '$description', '$link', '$image')";
    $conn->query($sql);
    echo "New record created successfully";
}
catch(Exception $e){
    echo "Error: " . $e->getMessage();
}


?>