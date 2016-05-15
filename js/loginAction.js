$(document).ready(function () {					//Executes when the page loads
	$("#loginBtn").click(function (evt) {		//Click event for login button
		evt.preventDefault();					//Prevents default action being triggered
				
		var username = $("#username").val();	//Gives variable username the value in the 'username' field in the html
		var password = $("#password").val();	//Gives variable passwordthe value in the 'password' field in the html

		$.ajax({
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryuser/search/" + username + "/" + password,
			dataType: "json",								//Parse request returns JSON 
			success: function (data) {						//If function  is passed, return the data 
				if (data == ""){							//Execute if data is empty
					console.log("invalid info");			//
					$("#invalid").removeClass("hidden");	//Remove 'hidden' class from 'invalid' in the html
					$("#empty").addClass("hidden");			//Add 'hidden' class to 'empty' in the html
				}
				else if (data.constructor === Array && data.length >= 1) {	//Execute if data is an array and its length is greater than or equal to 1
					console.log("success!");								//
					//console.log(data);									//
					if(typeof(Storage) !== "undefined") {					//Checks browser support for storage
						sessionStorage.username = username;					//save username to session storage
						sessionStorage.userId = data[0].userId;				//save the users id to session storage
					}				
					location.href = "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/gallery.php"	//Navigate to 'gallery.php'
				}
			},
			error: function (data) {				//Execute if data is not loaded correctly
				console.log("Failed Login");		//
				$("#empty").removeClass("hidden");	//Remove 'hidden' class from 'empty' in the html
				$("#invalid").addClass("hidden");	////Add 'hidden' class to 'invalid' in the html
			}
		});	
	});
	
	$("#regBtn").click(function (evt) {														//Click event for register button
		evt.preventDefault();																//Prevents default action being triggered									
		location.href = "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/registerForm.php"	//Navigate to 'registerForm.php'
	});
});