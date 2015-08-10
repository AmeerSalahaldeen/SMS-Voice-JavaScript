var url = 'http://api.otsdc.com/rest/Messages';
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

function sendMessages(appSid, recipient, body){
  var req = createCORSRequest('POST',  url+'/Send'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient + '&' +
                'Body=' + body; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    // alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
    var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    // ... and use it as needed by your app.
    return resp.data;
  }

  // req.open("POST", url + '/Send', true);
  req.setRequestHeader("Content-length", params.length);
  // req.setRequestHeader("Access-Control-Allow-Headers", "*");
  // req.setRequestHeader("Access-Control-Allow-Origin", "*");
  // req.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  req.setRequestHeader("Content-Type","application/json");
  // req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  // req.setRequestHeader("Connection", "close");
  req.send(params);
}

function sendBulk(appSid, recipient, body){
   var req = createCORSRequest('POST',  url+'/SendBulk'),
      params = 'AppSid=' + appSid + '&' +
                'Recipient=' + recipient.replace(' ','') + '&' +
                'Body=' + body; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessageIDStatus(appSid, messageID){
   var req = createCORSRequest('POST',  url+'/GetMessageIDStatus'),
      params = 'AppSid=' + appSid + '&' +
                'MessageID=' + messageID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessagesReport(appSid){
   var req = createCORSRequest('POST',  url+'/GetMessagesReport'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getMessagesDetails(appSid){
   var req = createCORSRequest('POST',  url+'/GetMessagesDetails'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function getScheduled(appSid){
   var req = createCORSRequest('POST',  url+'/GetScheduled'),
      params = 'AppSid=' + appSid; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

function stopScheduled(appSid, messageID){
   var req = createCORSRequest('POST',  url+'/StopScheduled'),
      params = 'AppSid=' + appSid + '&' +
                'MessageID=' + messageID; // defined above

  if (!req) {
    alert('CORS not supported');
    return;
  }
  // Create the callback:
  req.onload = function() {
    var text = req.responseText;
    // var title = getTitle(text);
    console.log(text);
    alert('Response from CORS request to ' + url + ': ' + text);

  };

  req.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
      console.log('fail');
      return;
    }
    // Request successful, read the response
     var resp = JSON.parse(req);
    // var resp = req.responseText;
    console.log(resp);
    return resp.data;
  }

  req.setRequestHeader("Content-length", params.length);
  req.setRequestHeader("Content-Type","application/json");
  req.send(params);
}

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