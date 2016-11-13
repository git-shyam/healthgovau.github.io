var HealthGovAu = {};

HealthGovAu.RequestData = (function () {
	var pub = {};

	pub.selectAll = fucntion(){
		var deferred = jQuery.Deferred();

		jQuery.ajax({
		    url: 'http://api.everlive.com/v1/kykky4omulqg6532/Request/',
		    type: "GET",
		    headers: {},
		    success: function(data){
		        console.log(JSON.stringify(data));
    			deferred.resolve(data);		        
		    },
		    error: function(error){
		        console.log(JSON.stringify(error));
				deferred.reject(JSON.stringify(error);				        
		    }
		});

		return deferred.promise();			
	}

	return pub;
})();

$(function(){
	console.log("data loaded");
});