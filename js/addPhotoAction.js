$(document).ready(function () {				//Executes when the page loads
	$("#submitBtn").click(function (evt) {	//Click event for submit button
		evt.preventDefault();				//Prevents default action being triggered
		
		var photoTitle = $("#photoTitle").val();		//Gives variable photoTitle the value in the 'photoTitle' field in the html
		var photoCaption = $("#photoCaption").val();	//Gives variable photoCaption the value in the 'photoCaption' field in the html
		var userImage = $("#userImage").val();			//Gives variable userImage the value in the 'userImage' field in the html
		var userId = sessionStorage.userId;				//Gives variable userId the value in the 'userId' in session storage

		//Photo Title Validation
		//If photoTitle is empty, show the html element after 'photoTitle'
		if(photoTitle == ''){
            $('#photoTitleEmpty').show();
			$('#invalidPhotoTitle').empty();
            return false;
        }		
		//If the function IsPhotoTitle is false, show the html 'invalidPhotoTitle'
		if(IsPhotoTitle(photoTitle)==false){
            $('#invalidPhotoTitle').show();
			$('#photoTitleEmpty').empty();
            return false;
        }
		//else hide the html element after 'photoTitle'
		else{
			$('#photoTitleEmpty').hide();
			$('#invalidPhotoTitle').hide();
		}
		
		//Photo Caption Validation
		//If photoCaption is empty, show the html element after 'photoCaption'
		if(photoCaption == ''){
            $('#photoCaptionEmpty').show();
			$('#invalidPhotoCaption').hide();
            return false;
        }		
		//If the function IsPhotoCaption is false, show the html 'invalidPhotoCaption'
		if(IsPhotoCaption(photoCaption)==false){
            $('#invalidPhotoCaption').show();
			$('#photoCaptionEmpty').hide();
            return false;
        }
		//else hide the html element after 'photoCaption'
		else{
			$('#photoCaptionEmpty').hide();
			$('#invalidPhotoCaption').hide();
		}
		
		//Image Validation
		//If userImage is empty, show the html element after 'userImage'
		if(userImage == ''){
            $('#userImageEmpty').show();
            return false;
        }
		
		$.ajax({
			type: "POST",															//Load data from server using HTTP POST request
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto",	//The url where the data will be passed/retrieved		
			dataType: "json",														//Parse request returns JSON
																					//convert data to a JSON string
			data: JSON.stringify({photoTitle: photoTitle, photoCaption: photoCaption, userImage: userImage, userId: userId}),
			contentType: "application/json",										//defines type of data being sent
			
			success: function(data, textStatus, jqXHR){											//If function  is passed, return the data 
				location.href = "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/gallery.php";	//Navigate to 'gallery'
			},
			error: function(jqXHR, textStatus, errorThrown){		//Execute if data is not loaded correctly
				alert('error: ' + textStatus + ': ' + errorThrown);	//Display alert box
			}	        
		});
	});
	
	//A function that ensures the value photo title is a regular expression
	function IsPhotoTitle(photoTitle) {
        var regex = /^[a-z0-9\-\s]+$/i;
        if(!regex.test(photoTitle)) {
           return false;
        }else{
           return true;
        }
	}
	//A function that ensures the value photo title is a regular expression
	function IsPhotoCaption(photoCaption) {
        var regex = /^[a-z0-9\-\s]+$/i;
        if(!regex.test(photoCaption)) {
           return false;
        }else{
           return true;
        }
	}
});	
