<!-- <?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', '123456');
   define('DB_DATABASE', 'xyz_crmdb');
   $db = mysqlnd_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>

<?php
phpinfo();
?> -->

<?php

$serverName = "localhost";
$username = "root";
$password = "";
$dbName = "xyz_crmdb";

try{
   $con = new PDO("mysql:host= $serverName; dbname=$dbName",$username, $password);

   $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
   echo "connection success";
}
catch (PDOException $e){
   echo "Error in connection". $e->getMessage();
}
?>