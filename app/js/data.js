var HealthGovAu = {};

HealthGovAu.RequestData = (function () {
	var pub = {};

	pub.selectAll = fucntion(){
		jQuery.ajax({
		    url: 'http://api.everlive.com/v1/kykky4omulqg6532/Request/',
		    type: "GET",
		    headers: {},
		    success: function(data){
		        console.log(JSON.stringify(data));
		    },
		    error: function(error){
		        alert(JSON.stringify(error));
		    }
		});		
	}


	return pub;
})();

$(function(){
	console.log("data loaded");
});