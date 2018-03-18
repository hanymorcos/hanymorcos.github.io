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

<form action="#">
<div>
<textarea id="stix2" rows="4" cols="50" style="margin: 0px; width: 366px; height: 92px;"></textarea>
</div>

 <input type="button" onclick="submitStix2()" value="Send Request">
</form>


<script>

function submitStix2(){
	jQuery.ajax({
	    type: "POST",
	    url: " https://s4gb976bx0.execute-api.us-east-1.amazonaws.com/dev/stix2",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: jQuery("textarea#stix2").val(),
	    async: false,
	    contentType: "application/text; charset=utf-8",
	    dataType: "text",
	    success: function(data){alert(data);},
	    failure: function(errMsg) {
	        alert(errMsg);
	    }
	});
}
</script>

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
