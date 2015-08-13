var url = 'http://api.otsdc.com/rest/',
	ACCOUNT='Account',
	MESSAGES='Messages',
	VOICE='Voice', 
	EMAIL='Email',
	VERIFY = 'Verify',
	CHECKER='Checker';



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
   
    if (req.readyState == 4){
      var resp = JSON.parse(req.response);
      
    	if (req.status == 200) {
        var res = resp.data;
        Object.defineProperty(res, 'isSuccess', {
          get: function() {
            return isSuccess;
          },
          set: function(value) {
            isSuccess = value;
          }
        });
	      res.isSuccess = true;
		    // console.log(res);
		    
		    // ... and use it as needed by your app.
		    callback.apply(res);
		  }else {
        // pass the error to the callback function
        Object.defineProperty(resp, 'isSuccess', {
          get: function() {
            return isSuccess;
          },
          set: function(value) {
            isSuccess = value;
          }
        });
        resp.isSuccess = false;
        // console.log(resp);
        callback.apply(resp);
        // console.log(req);
      }
    	// alert(req);
	    // Request successful, read the response
	    
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//end Account API

//Messages API
function sendMessages(appSid, recipient, body, senderID, priority, callback){
  
  var req = createCORSRequest('POST',  url+MESSAGES+'/Send'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient + '&' +
                'Body=' + encodeURIComponent(body); // defined above

  if(senderID != undefined) params = params + "&SenderID="+senderID;
  if(priority != undefined) params = params + "&Priority="+priority;
  if (!req) {
    alert('CORS not supported');
    return;
  }
  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};
  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function sendBulk(appSid, recipient, body, senderID, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/SendBulk'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient.replace(' ','') + '&' +
                'Body=' + encodeURIComponent(body); // defined above
  if(senderID != undefined) params = params + "&SenderID="+senderID;
  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function getMessagesReport(appSid, dateFrom, dateTo, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetMessagesReport'),
      params = 'AppSid=' + appSid; // defined above

  if(dateFrom != undefined){
    	params = params + '&DateFrom=' + dateFrom;
    }
  if(dateTo != undefined){
    	params = params + '&DateTo=' + dateTo;
    }
  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function getMessagesDetails(appSid, messageID, status, senderID, dateFrom, dateTo, limit, page, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetMessagesDetails'),
      params = 'AppSid=' + appSid; // defined above

   if(messageID != undefined) params = params + '&MessageID=' + messageID;
   if(status != undefined) params = params + '&status=' + status;
   if(senderID != undefined) params = params + '&SenderID=' + senderID;
   if(dateFrom != undefined) params = params + '&DateFrom=' + dateFrom;
   if(dateTo != undefined) params = params + '&DateTo=' + dateTo;
   if(limit != undefined) params = params + '&limit=' + limit;
   if(page != undefined) params = params + '&page=' + page;
  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function getScheduled(appSid, messageID, callback){
   var req = createCORSRequest('POST',  url+MESSAGES+'/GetScheduled'),
      params = 'AppSid=' + appSid; // defined above

  if(messageID != undefined) params = params + '&MessageID=' + messageID;
  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//end Message API

//Voice API
function call(appSid, recipient, content, callType, timeScheduled, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/Call'),
      params = 'AppSid=' + appSid +
                '&Recipient=' + recipient +
                '&Content=' + encodeURIComponent(content);

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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function TTSCall(appSid, recipient, content, language, callType, timeScheduled, callback){
   var req = createCORSRequest('POST',  url+VOICE+'/TTSCall'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient + '&Content=' + encodeURIComponent(content) + '&Language=' + language;

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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
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

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//end Voice API

//Email API
function sendEmail(appSid, recipient, from, body, callback){
   var req = createCORSRequest('POST',  url+EMAIL+'/Send'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient + '&From=' + from + '&Body=' + encodeURIComponent(body);

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function getEmailsReport(appSid, callback){
   var req = createCORSRequest('POST',  url+EMAIL+'/GetEmailsReport'),
      params = 'AppSid=' + appSid;

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//Verify API
function getCode(appSid, recipient, body, callback){
   var req = createCORSRequest('POST',  url+VERIFY+'/GetCode'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient + '&Body=' + encodeURIComponent(body);

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}

function verifyNumber(appSid, recipient, passCode, callback){
   var req = createCORSRequest('POST',  url+VERIFY+'/VerifyNumber'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient + '&PassCode=' + passCode;

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//

//Checker API
function checkNumber(appSid, recipient, callback){
   var req = createCORSRequest('POST',  url+CHECKER+'/CheckNumber'),
      params = 'AppSid=' + appSid + '&Recipient=' + recipient;

  if (!req) {
    alert('CORS not supported');
    return;
  }

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {handlerResponse(req, callback);};

  req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  req.send(params);
}
//