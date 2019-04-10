(function(global){

	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		f();
		var f = F;
	}

	function A() {
		console.log("A");
		B();
	}

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		}
	}

	var D = d;

	function d() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
	//	J();
	}

	B = function() {
		console.log("B");
		C();
	};

	var F = function() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split(""), fns = {};
	
	console.log('printing above for');
	
	for (var i=0; i<rest.length; i++) {
	
		(function(i){
			
			console.log('here inside for function')
			// define the current function
			fns[rest[i]] = function() {
			
				console.log(rest[i]+ " " + i);
			//	console.log('here below the printing')
				
				if (i < (rest.length-1)) {
					fns[rest[i+1]]();
					//console.log(rest[i+1])---added by pa149
				}
				
			};
			
		})(i);
	}

	var J = function() {
//		J = function() {--pa149
		 console.log('inside J after commenting one call to J()');	
		 console.log("J");
			fns.K();
	//	};
	};

	function C() {
		console.log("C");
		D();
	}

	return A;

})(window)();




/*
(funtion(global){	

function E(f) {
	console.log("E");
	f();
	var f = F;
}

 function A() {
	console.log("A");
	B();
}

function G() {
	console.log("G");
	H();

	function H() {
		console.log("H");
		I();
	}
}

var D = d;

function d() {
	console.log("D");
	E(F);
}

function I() {
	console.log("I");
	J();
	//J();
}

 function B() {
	console.log("B");
	C();
}

var F = function() {
	console.log("F");
	G();
}

var rest = "KLMNOPQRSTUVWXYZ".split("") ,fns = {};

for (var i=0; i<rest.length; i++) {
	
	(function(i){
		// define the current function
		fns[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				fns[rest[i+1]]();
			}	
		};
	})(i);
}

//var J = function() {
	function J() {
		console.log("J");
		K();
	}


 function C() {
	console.log("C");
	D();
}
  return A;
  
})(window)();
_*/