$(document).ready(function () {
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
});