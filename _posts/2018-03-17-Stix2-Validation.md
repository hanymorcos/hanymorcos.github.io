---
layout: post
title:  "Stix 2.0 validation"
date:   2018-03-17 15:40:56
categories: jekyll update
---

Structured Threat Information Expression (STIX 2.0 )

STIX is a JSON format to capture details for a specific cyber threat intelligence. The following is a simple
form to validate your STIX is valid or invalid.  

<!-- Expandable Textfield -->

<style>
  .error {
    border-style: solid;
    border-width: wide;
    border-color: red;
  }

  .correct {
    border-style: solid;
    border-width: wide;
    border-color: green;
  }
</style>

<form action="#">
<textarea id="stix2" rows="4" cols="50" style="margin: 0px; width: 366px; height: 92px;"></textarea>

 <input type="button" onclick="submitStix2()" value="Send Request">
</form>


<script>

function submitStix2(){

	jQuery("textarea#stix2").removeClass("correct");
	jQuery("textarea#stix2").removeClass("error");
	
	jQuery.ajax({
	    type: "POST",
	    url: " https://api.executionsteps.com/stix2",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: jQuery("textarea#stix2").val(),
	    async: false,
	    contentType: "text/plain",
	    success: function(data){

	    	packet = JSON.parse(data);

	    	if(packet.message == "valid bundle")
	    	{

                jQuery("textarea#stix2").addClass("correct");
	    	}

	    	if(packet.message == "invalid bundle")
	    	{
                jQuery("textarea#stix2").addClass("error");
	    	}


	    },
	    failure: function(errMsg) {
	        alert(errMsg);
	    }
	});
}
</script>

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
