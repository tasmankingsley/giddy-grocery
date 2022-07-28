<?php
$ID = intval($_GET['q']);

$con = mysqli_connect('aa1anwkspy8s3zl.clv3zkevftwu.us-east-1.rds.amazonaws.com','tasman','namsat410','productDB', 3306);
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}


mysqli_select_db($con,"productDB");
$sql="SELECT * FROM products WHERE product_id = '".$ID."'";
$result = mysqli_query($con,$sql);



while($row = mysqli_fetch_array($result)) {
  echo "<table>
  <tr>
  <th>Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Stock</th>
  <th>ID</th>
  <th>Add</th>
  </tr>";
  echo "<tr>";
  echo "<td>" . $row['product_name'] . "</td>";
  echo "<td>" . "$" . $row['unit_price'] . "</td>";
  echo "<td>" . $row['unit_quantity'] . "</td>";
  echo "<td>" . $row['in_stock'] . "</td>";
  echo "<td>" . $row['product_id'] . "</td>";
  echo "<td><input type=\"number\" min=\"1\" max=\"20\"
  value=\"1\" id=\"amountVal\" style=\"width: 60px;\"></td>";
  echo "</tr>";
  echo "</table><br>";
  echo "<img class=\"icon\" src=\"" . $row['img_src'] . "\">";
  echo "<img class=\"cartIcon\" src=\"images/icons/add_cart.png\">";
}
mysqli_close($con);
?>
