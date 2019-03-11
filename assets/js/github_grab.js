
$.get({
    url: "https://cors-anywhere.herokuapp.com/github.com/chrisvander",
    xhrFields: {
        withCredentials: false
    },
    success: function (response) {
        // handle the response
        $('#github-info').html(
        	$(response)
        		.find("#js-pjax-container > div > div > div > div:nth-child(1) > div > ol")
        );
        $('#github-info').find('*').removeClass();
        $('#github-info a').each(function() {
        	this.href = this.href.replace(/http:\/\/[^\/]*\//, 
         "http://github.com/");
        });
    },
    error: function (xhr, status) {
        // handle errors
        console.log(status)
        console.log(xhr)
    }
});