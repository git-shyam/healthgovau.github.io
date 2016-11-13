var HealthGovAu = {};

HealthGovAu.RequestData = (function () {
	var pub = {};

	var baseUrl = "https://api.everlive.com/v1/kykky4omulqg6532/Request/";

	pub.selectAll = function(){
		var deferred = jQuery.Deferred();

		$.ajax({
		    url: 'http://api.everlive.com/v1/kykky4omulqg6532/Request/',
		    type: "GET",
		    headers: {},
		    success: function(data){
		        console.log(JSON.stringify(data));
    			deferred.resolve(data);		        
		    },
		    error: function(error){
		        console.log(JSON.stringify(error));
				deferred.reject(JSON.stringify(error));				        
		    }
		});

		return deferred.promise();			
	};

	pub.select = function(itemId){
		var deferred = $.Deferred();
		var url = "https://api.everlive.com/v1/kykky4omulqg6532/Request/" + itemId;

		$.ajax({
		    url: url,
		    type: "GET",
		    headers: {
		        "Authorization" : "Bearer your-access-token"
		    },
		    success: function(data){
		        console.log(JSON.stringify(data));
    			deferred.resolve(data);
		    },
		    error: function(error){
		        console.log(JSON.stringify(error));
				deferred.reject(JSON.stringify(error));
		    }
		})

		return deferred.promise();
	}

	pub.insert = function(JSON){
		var deferred = $.Deferred();

		$.ajax({
		    type: "POST",
		    url: 'https://api.everlive.com/v1/your-app-id/type-name',
		    headers: { "Authorization" : "Bearer your-access-token" },
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function(data) {
		        alert(JSON.stringify(data));
		    },
		    error: function(error) {
		        alert(JSON.stringify(error));
		    }
		})		

		return deferred.promise();
	}

	return pub;
})();

$(function(){
	console.log("data loaded");
});