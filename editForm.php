<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Gallery</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/editPhotoAction.js"></script>
	<link rel="stylesheet" href="css/mystyle.css" />
</head>

<body>

	<form id="editForm" method="post" action="#">

		<label for="photoTitle">Title</label>
		<input id="photoTitle" type="text" name="photoTitle" required>
		
		<label for="photoCaption">Caption</label>
		<input id="photoCaption" type="photoCaption" name="photoCaption" required>		
		
		<input type="submit" value="Submit" id="submitBtn" />
		
	</form>	
</body>
</html>