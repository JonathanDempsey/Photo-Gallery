$(document).ready(function () {					//Executes when the page loads
	$('.form_error').hide();					//Hide the html class 'form_error'
	$("#registerBtn").click(function (evt) {	//Click event for register button
		evt.preventDefault();					//Prevents default action being triggered
		
		var username = $("#username").val();	//Gives variable username the value in the 'username' field in the html
		var email = $("#email").val();			//Gives variable email the value in the 'email' field in the html
		var password = $("#password").val();	//Gives variable password the value in the 'password' field in the html
		var cpassword = $("#cpassword").val();	//Gives variable cpassword the value in the 'cpassword' field in the html

		//Username Validation
		//If username is empty, show the html element after 'username'
		if(username == ''){
            $('#username').next().show();
            return false;
        }		
		//If the function IsUsername is false, show the html 'invalidUsername'
		if(IsUsername(username)==false){
            $('#invalidUsername').show();
            return false;
        }
		//else hide the html element after 'username'
		else{
			$('#username').next().hide();
		}
		
		//Email Validation
		//If email is empty, show the html element after 'email'
		if(email == ''){
            $('#email').next().show();
            return false;
        }
		//If the function IsEmail is false, show the html 'invalidEmail'
		if(IsEmail(email)==false){
            $('#invalidEmail').show();
            return false;
        }
		//else hide the html element after 'email'
		else{
			$('#email').next().hide();
		}
		
		//Password Validation
		//If password is empty, show the html element after 'password'
		if(password == ''){
            $('#password').next().show();
            return false;
        }
		//If the function IsPassword is false, show the html 'invalidPassword'
		if(IsPassword(password)==false){
            $('#invalidPassword').show();
            return false;
        }
		//else hide the html element after 'password'
		else{
			$('#password').next().hide();
		}
		
		//Confirm Password Validation
		//If cpassword is empty, show the html element after 'cpassword'
		if(cpassword == ''){
            $('#cpassword').next().show();
            return false;
        }
		//If the function IsCpassword is false, show the html 'invalidCpassword'
		if(IsCpassword(cpassword)==false){
            $('#invalidCpassword').show();
            return false;
        }
		//If password and confirm password dont match, show the html element 'invalidCpassword'
		if(password != cpassword){
			$('#invalidCpassword').show();
			return false;
		}
		
		$.ajax({
			type: "POST",																	//Load data from server using HTTP POST request
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryuser",			//The url where the data will be passed/retrieved 
			dataType: "json",																//Parse request returns JSON 
			data: JSON.stringify({username: username, email: email, password: password}),	//convert data to a JSON string
			contentType: "application/json",												//defines type of data being sent
			
			success: function (data, textStatus, jqXHR) {										//If function  is passed, return the data 		
				alert("Registration successful!");												//Display alert box
				location.href = "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/loginForm.php"	//Navigate to 'loginForm'
			},
			error: function(jqXHR, textStatus, errorThrown){			//Execute if data is not loaded correctly
				alert('error: ' + textStatus + ': ' + errorThrown);		//Display alert box
			}
		});		
	});
	
	//A function that ensures the value username is a regular expression
	function IsUsername(username) {
        var regex = /^[a-z0-9\\-]+$/i;
        if(!regex.test(username)) {
           return false;
        }else{
           return true;
        }
	}
	
	//A function that ensures the value email is a regular expression
	function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
	}
	
	//A function that ensures the value password is a regular expression
	function IsPassword(password) {
        var regex = /^[a-z0-9\\-]+$/i;
        if(!regex.test(password)) {
           return false;
        }else{
           return true;
        }
	}
	
	//A function that ensures the value cpassword is a regular expression
	function IsCpassword(cpassword) {
        var regex = /^[a-z0-9\\-]+$/i;
        if(!regex.test(cpassword)) {
           return false;
        }else{
           return true;
        }
	}
});