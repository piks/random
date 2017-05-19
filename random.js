//////////////////////
///File: random.js///
//Author: Dan Rel///
///////////////////
mod = {
	choice:function(list){
		if (typeof list != "object"){
			throw new Error("Needs to be an Object");
		}
		return list[Math.floor(Math.random()*list.length)];

	},
	randInt:function(start,finish){
		if (typeof start != "number"){
			throw "Starting number must be numeric";
		}
		if (!finish){
			finish = 100;
		}
		if (typeof finish != "number"){
			throw "finishing number must be numeric";
		}
		finish = finish+1;
		return Math.floor(start+(Math.random()*(finish-start)));
	},
	random:function(){//just uses Math.random
		return Math.random();
	},
	case: function(li){
		var ret = li;
		var r = [];
		for (var letter of li){
			try{
				r.push(this.choice([letter.toUpperCase(),letter.toLowerCase()]))
			}
			catch(e){
				console.log(e)
				r.push(letter);
			}
		}
		return r.join("")
	},
	sample: function(caseSensitive){
		caseSensitive = caseSensitive||false;
		var key = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789"
		if (!caseSensitive){
			var nk = ""
			for (var letter of key){
				if (letter == letter.toUpperCase()){
					continue
				}
				else{
					nk+=letter;
				}
			}
			key = nk;
		}
		return this.choice(key.split(""));
	},
	shuffle: function(li){
		if (typeof li == "object"){
			var lis = [];
			var lz = [];
			for (var letter of li){
				lz.push(letter);
			}
			while (lz.length != 0){
				var ch = this.choice(lz);
				lis.push(ch);
				lz.splice(lz.indexOf(ch),1);
			}
		}
		else if (typeof li == "string"){
			var lis = li.split("");
			for (var i = lis.length - 1; i > 0; i--){
				var n = Math.floor(0+(Math.random() * (li.length+1)));
				var t = lis[i];
				lis[i] = lis[n];
				lis[n] = t;
			}
			lis = lis.join("");
		}
		return lis
	}
}
module.exports = mod;
