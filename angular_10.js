var app = angular.module('x',[]);
app.controller('y',function(){
	this.myObject = [{a:1},{a:2}];      //array
	console.log(this.myObject);
});