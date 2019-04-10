function fakeAjax(url,cb) {
	console.log("Inside the fakeAjax" );
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		console.log("Inside the setTimeout" );
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log("Output:"+text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	console.log("Inside the getFile" );
	fakeAjax(file,function(text){
		console.log("Inside the callBackFuction" );
		fileReceived(file,text);
		console.log("Inside the fileRecieved calling done" );
		});
}

function fileReceived(file,text) {
	// haven't received this text yet?
	console.log("Inside the fileRecieved" );
	if (!responses[file]) {
		responses[file] = text;
		console.log("Inside the IF" );
	}

	var files = ["file1","file2","file3"];

	// loop through responses in order for rendering
	for (var i=0; i<files.length; i++) {
		console.log("Inside the for" );
		// response received?
		if (files[i] in responses) {
			// response needs to be rendered?
			if (responses[files[i]] !== true) {
				output(responses[files[i]]);
				responses[files[i]] = true;
			}
		}
		// can't render yet
		else {
			// not complete!
			console.log("Inside the else" );
			return false;
		}
	}

	output("Complete!");
}

// hold responses in whatever order they come back
var responses = {};

// request all files at once in "parallel"
console.log(" firstCall " );
getFile("file1");
console.log(" secCall " );
getFile("file2");
console.log(" thirdCall " );
getFile("file3");
