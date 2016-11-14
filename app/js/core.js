// Test functions

// Exists
$.fn.extend({
    exists : function() {
        return this.length>0;
    }
});

$(function(){
	$('#request-date').dtpicker().appendDtpicker({
		"inline": true,
		"dateFormat": "DD/MM/YY h:m",
		"futureOnly": true
	});
});