<?php

define("DB_NAME", "covalent");
define("DB_USER", "root");
define("DB_PASSWORD", "hackillinois");
define("DB_HOST", "localhost");

$dbconn = pg_connect("host=localhost dbname=covalent user=postgres password=hackillinois")
     or die('Could not connect: ' . pg_last_error());


$query = 'SELECT * FROM authors';
$result = pg_query($query) or die('Query failed: ' . pg_last_error());

if($_POST['action'] == "remove_assignment") {
 $user1 = $_POST['user1'];
 $user2 = $_POST['user2'];

 $sql = "SELECT partnershipId FROM partnerships WHERE user1name = user1 AND user2name = user2";
 $partId = $pg_query($sql);
 $sql = "DELETE * FROM partnerships WHERE partnershipId = $partId"
 if($pg_query($sql) === TRUE) {
   echo $id;
 } else {
   echo "failure";
 }
}

pg_close($dbconn);
