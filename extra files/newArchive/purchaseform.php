<html>
	<head><title>purchaseform</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body class="purchaseform">
	<div>
		<h1>Purchase Form</h1>
		<!-- name, address, suburb, state, country and email address -->
		<form method="POST" action="purchaseform_submitted.php" onsubmit="return validate()" onsubmit="return emailIsValid()">
		<table>
		<tr>Please fill out the following information to complete your purchase.</tr>
		<tr><td></td></tr>
		<tr><td>Name<span style="color:red;font-weight:bold">*</span> :</td>
			<td><input type="text" id="uName" name="uName" ></tr></td>
		<tr><td>Address<span style="color:red;font-weight:bold">*</span> : </td>
			<td><input type="text" id="uAddress"></tr></td>
		<tr><td>Suburb<span style="color:red;font-weight:bold">*</span> : </td>
			<td><input type="text" id="uSuburb" ></tr></td>
		<tr><td>State<span style="color:red;font-weight:bold">*</span> : </td>
			<td><input type="text" id="uState"></tr></td>
		<tr><td>Country<span style="color:red;font-weight:bold">*</span> : </td>
			<td><input type="text" id="uCountry"></tr></td>
		<tr><td>Email<span style="color:red;font-weight:bold">*</span> : </td>
			<td><input type="email" id ="uEmail" name = "uEmail"  ></tr></td>

		<tr><td>
			<input type= "submit" name="goButton" value ="Purchase">	</tr></td>
		</table>
		</form>
		<script src="script.js"></script>
</div>

</html>
