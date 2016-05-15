$(document).ready(function () {	//Executes when the page loads
	$.ajax({					
        type: "GET",															//Load data from server using HTTP GET request
        url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto",	//The url where the data will be passed/retrieved
        dataType:"json", 														//Parse request returns JSON
 
		success: function(data){            										//If function  is passed, return the data
			if (data){																//Execute if data has a value
				var username = sessionStorage.getItem('username') + "'s Gallery";	//Get the value of username from session storage with a string and pass to variable username
				$("#galleryTitle").append(username);								//Appened variable username to the html element 'galleryTitle
                var length = data.length;											//pass the length of data into variable length
                var text = "";														//pass an empty string into variable text
                if(length > 0){														//Execute if length is greater than zero
                    for (var i = 0; i < length; i++){								//Execute the amount of times if is the length variable
					
						//Dynamically fill the 'galleryPictures' table with data where photoTitle isn't empty
						//and the userId in galleryphoto DB table matches the logged in user's Id
                        if (data[i].photoTitle && data[i].userId === sessionStorage.userId){
							console.log("I work!");
                            text += "<tr class=details" 
								+ data[i].photoId + "></td><td class=photoId>" 
								+ data[i].photoId + "</td><td>"
								+ data[i].photoTitle + "</td><td>"
								+ data[i].photoCaption + "</td><td><img src="
								+ data[i].userImage + " class=image></td><td><a href= http://avaya/~N00112462/4thYear/AdJavaScriptCA1/editForm.php> Edit </a></td><td><input type=button value=Delete class=deleteBtn></input></td></tr>";
                        }
                    }
					
					//If variable text is not empty, append var text to the html element 'galleryPictures'
					//and remove the class 'hidden'
                    if (text != ""){
                        $("#galleryPictures").append(text).removeClass("hidden");
                    }
                }
            }
        },
		
        error: function(jqXHR, textStatus, errorThrown){		//Execute if data is not loaded correctly
            alert('error: ' + textStatus + ': ' + errorThrown);	//Display alert box
        }
    });
    return false;
});