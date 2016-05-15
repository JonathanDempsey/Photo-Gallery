<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Gallery</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/addPhotoAction.js"></script>
	<link rel="stylesheet" href="css/mystyle.css" />
</head>

<body>

	<form id="uploadForm" method="post" action="#">

		<label for="photoTitle">Title</label>		
		<input id="photoTitle" type="text" name="photoTitle" required>
		<span id ="photoTitleEmpty" class ="hidden">Title can't be empty</span>
		<span id ="invalidPhotoTitle" class ="hidden">Invalid characters in Title</span>
		
		<label for="photoCaption">Caption</label>
		<input id="photoCaption" type="photoCaption" name="photoCaption" required>
		<span id ="photoCaptionEmpty" class ="hidden">Caption can't be empty</span>
		<span id ="invalidPhotoCaption" class ="hidden">Invalid characters in Caption</span>
		
		<label>Upload Image File:</label><br/>
		<input id="userImage" type="userImage "name="userImage" required/>
		<span id ="userImageEmpty" class ="hidden">User Image can't be empty</span>
		
		<input type="submit" value="Submit" id="submitBtn" />
	</form>	
	
</body>
</html>