<?php

//in deployment, change the connection details to match beanstalk server
// in index file, change the file you're linking to ajax
//for xampp to work, have your phpp files in your local server
// archive everything
// c9 terminal is holding the database? 
//use c9 terminal (envrionemtn) to connect to IDS server? 
//when you want to access mysql

//Procedural style
$connection = mysqli_connect("localhost","","","items");


$made_after = $_REQUEST['earliest_made'];
$made_before = $_REQUEST['latest_made'];

$query_string = "select * from items where (product_id>=$made_after and product_id <= $made_before)";

$result=mysqli_query($connection,$query_string);

$num_rows=mysqli_num_rows($result);
if ($num_rows > 0 ) {
    print "<table border='0'>";
	while ( $a_row = mysqli_fetch_array($result)){
         print "<tr>\n";
         foreach ($a_row as $field)
            print "\t<td>$field</td>\n";
         print "</tr>";
    }
    print "</table>";
}
mysqli_close($connection);

?>
