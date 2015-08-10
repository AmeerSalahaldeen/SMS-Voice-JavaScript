var url = 'http://api.otsdc.com/rest/',
	ACCOUNT='Account',
	MESSAGES='Messages',
	VOICE='Voice';

 url = 'http://localhost/otsdc-api-test/api.php/send';
    // appSid = 'cYWr62UeR6mbGZw6qHWUhiVX8z5ed';

// function createRequest() {
//   var result = null;
//   if (window.XMLHttpRequest) {
//     // FireFox, Safari, etc.
//     result = new XMLHttpRequest();
//     if (typeof result.overrideMimeType != 'undefined') {
//       result.overrideMimeType('text/xml'); // Or anything else
//     }
//   }
//   else if (window.ActiveXObject) {
//     // MSIE
//     result = new ActiveXObject("Microsoft.XMLHTTP");
//   } 
//   else {
//     // No known mechanism -- consider aborting the application
//   }
//   return result;
// }

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

function handlerResponse(req, callback){
	if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    if (req.readyState == 4){
    	// alert(req);
	    // Request successful, read the response
	    var resp = JSON.parse(req.responseText);
	    // var resp = req.responseText;
	    console.log(resp.data);
	    // alert(resp);
	    // ... and use it as needed by your app.
	     callback.apply(resp.data);
    }
    
}

//Account API
function getBalance(appSid, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/GetBalance'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function addSenderID(appSid, senderID, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/addSenderID'),
      params = 'AppSid=' + appSid+'&'+'SenderID='+senderID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getSenderIDStatus(appSid, senderID, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/getSenderIDStatus'),
      params = 'AppSid=' + appSid+'&'+'SenderID='+senderID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
 
  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getSenderIDs(appSid, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/getSenderIDs'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function deleteSenderID(appSid, senderID, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/DeleteSenderID'),
      params = 'AppSid=' + appSid+'&'+'SenderID='+senderID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getAppDefaultSenderID(appSid, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/GetAppDefaultSenderID'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function changeAppDefaultSenderID(appSid, senderID, callback){
   var req = createCORSRequest('POST',  url+ACCOUNT+'/changeAppDefaultSenderID'),
      params = 'AppSid=' + appSid+'&'+'SenderID='+senderID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}
//end Account API

//Messages API
function sendMessages(appSid, recipient, body, callback){
  var req = createCORSRequest('POST',  url+MESSAGES+'/Send'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient + '&' +
                'Body=' + body; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // //Create the callback:
  // req.onload = function() {
  //   var resp = JSON.parse(req.responseText);
	 //    // var resp = req.responseText;
	 //    console.log(resp.data);
	 //    // alert(resp);
	 //    // ... and use it as needed by your app.
	 //    return resp.data;
  // };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  // req.open("POST", url + '/Send', true);
  // req.setRequestHeader("Content-length", params.length);
  // req.setRequestHeader("Access-Control-Allow-Headers", "*");
  // req.setRequestHeader("Access-Control-Allow-Origin", "*");
  // req.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  req.setRequestHeader("Content-Type","application/json");
  // req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  // req.setRequestHeader("Connection", "close");
  req.send(params);
}

function sendBulk(appSid, recipient, body, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/SendBulk'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient.replace(' ','') + '&' +
                'Body=' + body; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessageIDStatus(appSid, messageID, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetMessageIDStatus'),
      params = 'AppSid=' + appSid + '&' +
                'MessageID=' + messageID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessagesReport(appSid, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetMessagesReport'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessagesDetails(appSid, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetMessagesDetails'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getScheduled(appSid, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetScheduled'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function stopScheduled(appSid, messageID, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/StopScheduled'),
      params = 'AppSid=' + appSid + '&' +
                'MessageID=' + messageID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}
//end Message API

//Voice API
function call(appSid, recipient, callType, timeScheduled, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/StopScheduled'),
      params = 'AppSid=' + appSid +
                '&Recipient=' + recipient;

    if(callType != undefined){
    	params = params + '&CallType=' + callType;
    }
    if(timeScheduled != undefined){
    	params = params + '&TimeScheduled=' +timeScheduled;
    }

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getCallIDStatus(appSid, callID, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/GetCallIDStatus'),
      params = 'AppSid=' + appSid +
                '&CallID=' + callID;

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getCallsDetails(appSid, callID, dateFrom, dateTo, status, country, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/GetCallsDetails'),
      params = 'AppSid=' + appSid;

    if(callID != undefined){
    	params = params + '&CallID=' + callID;
    }
    if(dateFrom != undefined){
    	params = params + '&DateFrom=' + dateFrom;
    }
    if(dateTo != undefined){
    	params = params + '&DateTo=' + dateTo;
    }
    if(status != undefined){
    	params = params + '&tatus=' + status;
    }
    if(country != undefined){
    	params = params + '&Country=' + country;
    }

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function TTSCall(appSid, recipient, content, language, callType, timeScheduled, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/TTSCall'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient + '&Content=' + content + '&Language=' + language;

    if(callType != undefined){
    	params = params + '&CallType=' + callType;
    }
    if(timeScheduled != undefined){
    	params = params + '&TimeScheduled=' + timeScheduled;
    }

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getScheduled(appSid, callID, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/GetScheduled'),
      params = 'AppSid=' + appSid;

    if(CallID != undefined){
    	params = params + '&CallID=' + callID;
    }

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function stopScheduled(appSid, callID, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/StopScheduled'),
      params = 'AppSid=' + appSid;

    if(CallID != undefined){
    	params = params + '&CallID=' + callID;
    }

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}
//end Voice API

function test(){
  var request = new XMLHttpRequest();

  request.open('POST', 'http://api.otsdc.com/rest/Account/GetBalance');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = "AppSid=Add Yor Own AppSid";

  request.send(body);
}