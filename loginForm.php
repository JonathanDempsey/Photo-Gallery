<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Login Form</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/loginAction.js"></script>
	<link rel="stylesheet" href="css/mystyle.css" />
</head>

<body>
	<p id ="invalid" class ="hidden">Invalid username or password</p>
	<p id ="empty" class ="hidden">Please fill in the username and password fields</p>
	
	<form id ="loginForm" method="post" action="#">   
		<label for="username">Username</label>
		<input id="username" type="text" name="username" required>
		
		<label for="password">Password</label>
		<input id="password" type="password" name="password" required>
				 
		<button class="btn" id="loginBtn" type="submit" value="Log In">Submit</button>
	</form>
	<button class="btn" id="regBtn" type="submit" value="reg">Register</button>
	
</body>
</html>