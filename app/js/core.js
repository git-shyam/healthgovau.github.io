// Test functions

// Exists
$.fn.extend({
    exists : function() {
        return this.length>0;
    }
});

$(function(){

	// Test of client-side AJAX request to Telerik
	$.ajax({
	    url: 'https://api.everlive.com/v1/zn1chd0owd2709tp/Activities',
	    type: "GET",
	    headers: {},
	    success: function(data){
	        console.log(JSON.stringify(data));
	    },
	    error: function(error){
	        alert(JSON.stringify(error));
	    }
	})


});