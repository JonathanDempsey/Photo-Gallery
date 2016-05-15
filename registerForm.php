<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Register Form</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/registerAction.js"></script>
	<link rel="stylesheet" href="css/mystyle.css" />
</head>

<body>
	<form id ="registerForm" method="post" action="#">   
		<label for="username">Username</label>
		<input id="username" type="text" name="username" required><span class="form_error" id="invalidUsername">Please enter valid username</span>
		
		<label for="email">Email</label>
		<input id="email" type="email" name="email" required><span class="form_error" id="invalidEmail">Please enter valid email</span>
		
		<label for="password">Password</label>
		<input id="password" type="password" name="password" required><span class="form_error" id="invalidPassword">Please enter valid password</span>
		
		<label for="cpassword"> Confirm Password</label>
		<input id="cpassword" type="password" name="cpassword" required><span class="form_error" id="invalidCpassword">Must be the same as password</span>
				 
		<button class="btn" id="registerBtn" type="submit" value="Register">Submit</button>
	</form>
	
</body>
</html>