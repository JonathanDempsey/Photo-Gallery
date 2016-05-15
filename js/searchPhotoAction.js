$(document).ready(function () {				//Executes when the page loads		
	$("#searchBtn").click(function (evt) {	//Click event for search button		
		evt.preventDefault();				//Prevents default action being triggered
				
		var searchPhoto = $("#searchPhoto").val();	//Gives variable searchPhoto the value in the 'searchPhoto' field in the html

		//SearchPhoto Validation
		//If searchPhoto is empty, show the html 'empty' and hide 'invalid'
		if(searchPhoto == ''){
            $('#empty').show();
			$('#invalid').hide();
            return false;
        }		
		//If the function IsSearchPhoto is false, show the html 'invalid' and hide 'empty'
		if(IsSearchPhoto(searchPhoto)==false){
            $('#invalid').show();
			$('#empty').hide();
            return false;
        }
		//else hide the html elements 'empty' and 'invalid'
		else{
			$('#empty').hide();
			$('#invalid').hide();
		}		
		
		$.ajax({
			type: "GET",															//Load data from server using HTTP GET request
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto",	//The url where the data will be passed/retrieved
			dataType:"json",														//Parse request returns JSON
			success: function(data){            									//If function  is passed, return the data 
				if (data){															//Execute if data has a value
					var length = data.length;										//pass the length of data into variable length
					if(length > 0){													//Execute if length is greater than zero											 
						for (var i = 0; i < length; i++){							//Loop the amount of times as the value length
						
							//Dynamically fill the 'galleryPictures' table with data where photoTitle isn't empty
							//and the userId in galleryphoto DB table matches the logged in user's Id.
							//If photoTitle doesn't match searchPhoto, hide the 'details00' class.
							if (data[i].photoTitle && data[i].userId === sessionStorage.userId){
								console.log("I work!");
								if(data[i].photoTitle != searchPhoto){
									$(".details" + data[i].photoId).hide();
								}
							}
						}
					}
				}
			},

			error: function(jqXHR, textStatus, errorThrown){		//Execute if data is not loaded correctly
				alert('error: ' + textStatus + ': ' + errorThrown);	//Display alert box
			}
		});
	});

	//A function that ensures the value searchPhoto is a regular expression
	function IsSearchPhoto(searchPhoto) {
        var regex = /^[a-z0-9\-\s]+$/i;
        if(!regex.test(searchPhoto)) {
           return false;
        }else{
           return true;
        }
	}
	
	$("#resetSearchBtn").click(function (evt) {										//Click event for reset search button
		$('#empty').hide();															//Hide 'empty'
		$('#invalid').hide();														//Hide 'Invalid'
		$.ajax({																	//
			type: "GET",															//Load data from server using HTTP GET request
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto",	//The url where the data will be passed/retrieved
			dataType:"json",														//Parse request returns JSON
			success: function(data){            									//If function  is passed, return the data 
				if (data){															//Execute if data has a value
					var length = data.length;										//pass the length of data into variable length
					if(length > 0){													//Loop the amount of times as the value length
					
						//Dynamically fill the 'galleryPictures' table with data where photoTitle isn't empty
						//and the userId in galleryphoto DB table matches the logged in user's Id.
						//Show all 'details00' classes.
						for (var i = 0; i < length; i++){
							if (data[i].photoTitle && data[i].userId === sessionStorage.userId){
								console.log("I work!");
									$(".details" + data[i].photoId).show();
							}
						}
					}
				}
			},
			error: function(jqXHR, textStatus, errorThrown){		//Execute if data is not loaded correctly
				alert('error: ' + textStatus + ': ' + errorThrown);	//Display alert box
			}
		});
	});	
});