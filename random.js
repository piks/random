//////////////////////
///File: random.js///
////////////////////
mod = {
	choice:function(list){
		if (typeof list != "object"){
			throw "Needs to be an Object";
		}
		return list[Math.floor(Math.random()*list.length)];

	},
	randInt:function(start,finish){ //excludes finish number
		if (typeof start != "number"){
			throw "Starting number must be numeric";
		}
		if (!finish){
			finish = 101;
		}
		if (typeof finish != "number"){
			throw "finishing number must be numeric";
		}
		return Math.floor(start+(Math.random()*(finish-start)));
	}
}
module.exports = mod;