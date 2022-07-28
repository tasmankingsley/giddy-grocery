<?php
$ID = intval($_GET['q']);
/*
session_start();



if (!isset($_SESSION['cart_memory']))
{
    $_SESSION['cart_memory'] = [];
}
if (!isset($_SESSION['cart_memory'][$ID]))
{
    $_SESSION['cart_memory'][$ID] = [
        'quantity' => 1
    ];
}

$_SESSION['cart_memory'][$ID]['quantity']++;
*/


$con = mysqli_connect('localhost','root','','productDB');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"productDB");
$sql="SELECT product_name, unit_price, amount FROM products WHERE product_id = '".$ID."'";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {

  echo "<tr  id=\"ID$ID\" class=\"CartRow\">";
  echo "<td class=\"ProductName\">" . $row['product_name'] . "</td>";
  echo "<td class=\"ProductPrice\" id=\"UP$ID\">" . $row['unit_price'] . "</td>";
  echo "<td class=\"CartAmount\" id=\"AM$ID\"></td>";
  echo "<td class=\"CartPrice\" id=\"TP$ID\">" . $row['unit_price'] . "</td>";
  echo "</tr>";
}

/*session_destroy();*/
mysqli_close($con);
?>
