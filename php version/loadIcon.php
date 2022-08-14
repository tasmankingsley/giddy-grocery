<?php
$ID = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','productDB');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"productDB");
$sql="SELECT img_src FROM products WHERE product_id = '".$ID."'";
$result = mysqli_query($con,$sql);

while($source = mysqli_fetch_array($result)) {
  echo $source['img_src'];
}

mysqli_close($con);
?>
