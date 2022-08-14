<?php
$ID = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','productDB');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"productDB");
$sql="SELECT * FROM products WHERE product_id = '".$ID."'";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['product_name'] . "</td>";
  echo "<td>" . "$" . $row['unit_price'] . "</td>";
  echo "<td>" . $row['unit_quantity'] . "</td>";
  echo "<td>" . $row['in_stock'] . "</td>";
  echo "<td>" . $row['product_id'] . "</td>";
  echo "<td><input type=\"number\" min=\"1\" max=\"20\"
  value=\"1\" id=\"amountVal\" style=\"width: 60px;\"></td>";
  echo "</tr>";
}

mysqli_close($con);
?>
