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
		console.log("Inside the Settimeout" );
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log("out: "+text);
}
// **************************************
function getFile(file) {
	console.log("Inside the getFile" );
	return new Promise(function(resolve){
		console.log("Inside the callBack Promise" );
		fakeAjax(file,resolve);
	});
}

// Request all files at once in
// "parallel" via `getFile(..)`.
var p1 = getFile("file1");
var p2 = getFile("file2");
var p3 = getFile("file3");

// Render as each one finishes,
// but only once previous rendering
// is done.
p1
.then(output)
.then(function(){
	console.log("Inside the firstThen" );
	return p2;
})
.then(output)
.then(function(){
	console.log("Inside the SecThen" );
	return p3;
})
.then(output)
.then(function(){
	output("Complete!");
});
