# REST API for JavaScript
A simple HTTP based RESTful API library will enable your apps to send text messages and make phone calls through [Unifonic Cloud Communication Platform] (http://www.unifonic.com)

## Installation

If you want to use it yourself, here's the source:
```
$ git clone https://github.com/otsdc/SMS-Voice-JavaScript.git
```
## Example
Here is the example to Use Message API
```
<script type="text/javascript">
	

	function send_msg(){
		var response;

		sendMessages('your appSid', '962789xxxxxx', 'Send Message', null, null, function() {
			response = this;
			console.log(response);
			if(response.isSuccess){
				alert("MessageID: " + response.MessageID);
			} else{
				alert("Error: " + response.message);
			}
			
  		});
	}

	function send_bulk(){
		sendBulk('your appSid', ['962789xxxxxx','962738xxxxxx'], 'Send Message', null, function() {
			response = this;
			console.log(response);
			if(response.isSuccess){
				alert("MessageID: " + response.MessageID);
			} else{
				alert("Error: " + response.message);
			}
  		});
	}

	function get_messageID_status(){
		getMessageIDStatus('your appSid', '65432', function() {
			response = this;
			console.log(response);
			if(response.isSuccess){
				alert("MessageID: " + response.Status);
			} else{
				alert("Error: " + response.message);
			}
  		});
	}

	function get_message_report(){
		getMessagesReport('your appSid', null, null, function() {
			response = this;
			console.log(response);
			if(response.isSuccess){
				alert("MessageID: " + response.Status);
			} else{
				alert("Error: " + response.message);
			}
  		});
	}
</script>
```
