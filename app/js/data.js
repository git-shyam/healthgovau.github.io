var HealthGovAu = {};

HealthGovAu.NotificationsData = (function () {
	var pub = {};

	var baseUrl = "https://api.everlive.com/v1/kykky4omulqg6532/Notifications/";

	pub.selectByUserName = function(userName){
		var deferred = $.Deferred();

		var filter = { "DestinationUserName" : userName, "HasBeenRead": false };

		//Ajax request using jQuery
		$.ajax({
		    url: baseUrl,
		    type: "GET",
		    headers: {"X-Everlive-Filter" : JSON.stringify(filter) },
		    success: function(data){
		        deferred.resolve(data);
		    },
		    error: function(error){
		        deferred.reject(error);
		    }
		});

		return deferred.promise();		
	}

	pub.markAsRead = function(itemId){
		var deferred = $.Deferred();

		var filter = {"Id": itemId};
		var object = {"HasBeenRead": true};

		$.ajax({
		    type: "PUT",
		    url: baseUrl,
		    headers: {
		        "X-Everlive-Filter":JSON.stringify(filter)
		    },
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function (data) {
		        deferred.resolve(data);
		    },
		    error: function (error) {
		        deferred.reject(error);
		    }
		})
		return deferred.promise();	
	}

	pub.insert = function(object){
		var deferred = $.Deferred();

		$.ajax({
		    type: "POST",
		    url: baseUrl,
		    headers: {},
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function(data) {
		        deferred.resolve(data);
		    },
		    error: function(error) {
		        deferred.reject(error);
		    }
		})		

		return deferred.promise();		
	}

	return pub;
})();

HealthGovAu.CustomUsersData = (function () {
	var pub = {};

	var baseUrl = "http://api.everlive.com/v1/kykky4omulqg6532/CustomUsers/";

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
				deferred.reject(error);				        
		    }
		});

		return deferred.promise();			
	};	

	pub.selectByUserName = function(userName){
		var deferred = $.Deferred();

		var filter = { "UserName" : userName };

		//Ajax request using jQuery
		$.ajax({
		    url: baseUrl,
		    type: "GET",
		    headers: {"X-Everlive-Filter" : JSON.stringify(filter) },
		    success: function(data){
		        deferred.resolve(data);
		    },
		    error: function(error){
		        deferred.reject(error);
		    }
		});

		return deferred.promise();
	}	

	return pub;
})();

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
				deferred.reject(error);				        
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
				deferred.reject(error);
		    }
		})

		return deferred.promise();
	}

	pub.insert = function(object){
		/*var object = { "Title" : "This is a test by Andy", "TimeframeDateTime" : "2016-11-18T22:00:00.000Z", "Status" : "Open", "Location":{"longitude":151.20914600000003,"latitude":-33.860423} };*/
		var deferred = $.Deferred();

		$.ajax({
		    type: "POST",
		    url: baseUrl,
		    headers: {},
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function(data) {
		        deferred.resolve(data);
		    },
		    error: function(error) {
		        deferred.reject(error);
		    }
		})		

		return deferred.promise();
	}

	pub.update = function(object){
		//var object = "{"Title":"This is a test by Andy","TimeframeDateTime":"2016-11-18T22:00:00.000Z","Status":"Open","Location":{"longitude":151.20914600000003,"latitude":-33.860423},"CreatedAt":"2016-11-14T01:14:12.972Z","ModifiedAt":"2016-11-14T01:14:12.972Z","CreatedBy":"00000000-0000-0000-0000-000000000000","ModifiedBy":"00000000-0000-0000-0000-000000000000","Owner":"00000000-0000-0000-0000-000000000000","Id":"a74d1ac0-aa07-11e6-af66-abf94594410c","Meta":{"Permissions":{"CanRead":true,"CanUpdate":true,"CanDelete":true}}}"
		var deferred = $.Deferred();

		$.ajax({
		    type: "PUT",
		    url: baseUrl + object.Id,
		    headers: {},
		    contentType: "application/json",
		    data: JSON.stringify(object),
		    success: function(data){
		        deferred.resolve(data);
		    },
		    error: function(error){
		        deferred.reject(error);
		    }
		})		


		return deferred.promise();
	}

	return pub;
})();

$(function(){
	console.log("HealthGovAu.RequestData");
});