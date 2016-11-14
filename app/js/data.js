var HealthGovAu = {};

HealthGovAu.RequestData = (function () {
	var pub = {};

	var baseUrl = "https://api.everlive.com/v1/kykky4omulqg6532/Request/";

	pub.selectAll = function(){
		var deferred = jQuery.Deferred();

		$.ajax({
		    url: baseUrl,
		    type: "GET",
		    headers: {},
		    success: function(data){
    			deferred.resolve(data);		        
		    },
		    error: function(error){
				deferred.reject(JSON.stringify(error));				        
		    }
		});

		return deferred.promise();			
	};

	pub.select = function(itemId){
		var deferred = $.Deferred();
		var url = baseUrl + itemId;

		$.ajax({
		    url: url,
		    type: "GET",
		    headers: {},
		    success: function(data){
    			deferred.resolve(data);
		    },
		    error: function(error){
				deferred.reject(JSON.stringify(error));
		    }
		})

		return deferred.promise();
	}

	pub.insert = function(object){
		/*<Title>Getting to and entering museum</Title>
<TimeframeDateTime>2016-11-18T22:00:00.000Z</TimeframeDateTime>
<Status>Open</Status>
		var JSON = { "Title" : "This is a test by Andy", "TimeframeDateTime" : "2016-11-18T22:00:00.000Z", "Status" : "Open" };*/
		var deferred = $.Deferred();

		$.ajax({
		    type: "POST",
		    url: baseUrl,
		    headers: {},
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function(data) {
		        deferred.resolve(JSON.stringify(data));
		    },
		    error: function(error) {
		        deferred.reject(JSON.stringify(error));
		    }
		})		

		return deferred.promise();
	}

	return pub;
})();

$(function(){
	console.log("HealthGovAu.RequestData");
});