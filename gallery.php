<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Gallery</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/photoAction.js"></script>
	<script type="text/javascript" src="js/searchPhotoAction.js"></script>
	<script type="text/javascript" src="js/deletePhotoAction.js"></script>
	<link rel="stylesheet" href="css/mystyle.css" />
</head>

<body>
	<h2 id="galleryTitle"></h2>
	
	<p id ="invalid" class ="hidden">Invalid characters</p>
	<p id ="empty" class ="hidden">Please fill in the title of a photo you'd like to find</p>
	<label for="searchPhoto">Search</label>
	<input id="searchPhoto" type="text" name="searchPhoto"><input type="submit" value="Submit" id="searchBtn" /><input type="submit" value="Reset" id="resetSearchBtn" />
		
	<h3> Add Photo: </h3>
	<a href="http://avaya/~N00112462/4thYear/AdJavaScriptCA1/addPhoto.php">Add Photo</a>
	<table id="galleryPictures" class="hidden">
		<tr>
		</tr>
	</table>
</body>
</html>