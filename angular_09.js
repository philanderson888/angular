var app = angular.module('x',[]);
app.controller('y',function(){
	console.log(this);
	this.myObject={a:1,b:true,c:false};
});