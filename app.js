//function displayLarger(a, b){
//	if(a > b){
//		message = "a";
//		alert(message);
//	}
//	else{
//		message = "b";
//		alert(message);
//	}
//}
//
//largest = largest.sort((a, b, c, d, e) => (largest));
//	alert(largest);
//
//var entry;
//var row = "";
//var currentNumber = 0;
//
//function diamond(entry){
//	if(!entry){
//		entry = 5;
//	}
//	for(i = 1; i <= entry; i ++){
//		currentNumber ++;
//		row = row.concat(currentNumber);
//		console.log(row);
//	}
//
//	for(i = entry; i > 1; i --){
//		line --;
//		console.log(currentNumber);
//	}
//}
//
//var a = {};
//
//var person = {
//name: "Bob",
//age: 29,
//gender: "neutral",
//}
//
//var employee = {
//Name: "Steve",
//Title: "chief",
//IDnumber: 04,
//}


function currentDate () {
	var myDate = new Date (Date.now());
	var month = myDate.getMonth();
	var year = myDate.getFullYear();
	var day = myDate.getDate();
	console.log(month + "/" + day + "/" + year);
	return(month + "/" + day + "/" + year);
}


//
//function testForArrays() {
//	var myArray = [4,3,4,3,5];
//	return myArray;
//}


function mergesort (...entryArray) {

	var length = entryArray.length;
	var halfLength = Math.floor(length / 2);

	var firstHalf = entryArray.splice(0, halfLength);
	var secondHalf = entryArray;
	console.log(firstHalf, secondHalf);

	return "answer";
}


//var entry;
//var row = "";
//var currentNumber = 0;
//function diamond(entry){
//	if(!entry){
//		entry = 5;
//	}
//	for(i = 1; i <= entry; i ++){
//		currentNumber ++;
//		row = row.concat(currentNumber);
//		console.log(row);
//	}
//
//	for(i = entry; i > 1; i --){
//		line --;
//		console.log(currentNumber);
//	}
//}
