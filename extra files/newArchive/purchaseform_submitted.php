<html>
	<head><title> My submitted page</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body class="purchaseform">
		<div>
		<h1>Thank you.</h1>
		Hi <span style="font-weight:bold"><?php echo $_POST['uName'];?></span>, your purchase has been made.</br>
	 	Please find your order confirmation at <span style="font-weight:bold"><?php echo $_POST['uEmail'];?></span>. 
		</div>
		<script src="script.js"></script>
	</body>
</html>	
