$(document).ready(function () {					
	$('table#galleryPictures').on("click", '.deleteBtn', function () {
		$.ajax({
			type: "GET",
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto",
			dataType:"json",
			success: function (data) {
				sessionStorage.photoId = data[0].photoId;
			},
			error: function (data) {
				}
		});
		console.log('delete');
		$.ajax({
			type: 'DELETE',
			url: "http://avaya/~N00112462/4thYear/AdJavaScriptCA1/db/galleryphoto/:" + sessionStorage.photoId,
			success: function(data, textStatus, jqXHR){
				alert('photo deleted successfully');
			},
			error: function(jqXHR, textStatus, errorThrown){
				alert('deletePhoto error');
			}
		});
});
});	
	