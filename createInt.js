var randomInteger = function(val) {
	var ival = Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}

// main (this is where the functions gets called)
var rInt;
var count = 0;
var i;
for (i = 0; i < 65536; i++){
	rInt	= randomInteger();
	if (rInt == 13)count++; //notice no {}
	//console.log(rInt+",");
	process.stdout.write(rInt+" ");
}
process.stdout.write("\n\n\n13 hit "+count+" times.");
