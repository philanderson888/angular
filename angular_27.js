var app = angular.module('x',[]);
app.controller('y',function(){
	this.myObjects = [
		{a:"Item 1",b:2.10,image:"assets/images/Hopper-Cool.png",description:"Some description here item 1",moredetail:"And more detail here item 1",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 2",b:2.20,image:"assets/images/Hopper-Cool.png",description:"Some description here item 2",moredetail:"And more detail here item 2",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 3",b:2.30,image:"assets/images/Hopper-Cool.png",description:"Some description here item 3",moredetail:"And more detail here item 3",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 4",b:2.40,image:"assets/images/Hopper-Cool.png",description:"Some description here item 4",moredetail:"And more detail here item 4",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 5",b:2.50,image:"assets/images/Hopper-Cool.png",description:"Some description here item 5",moredetail:"And more detail here item 5",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 6",b:2.60,image:"assets/images/Hopper-Cool.png",description:"Some description here item 6",moredetail:"And more detail here item 6",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 7",b:2.70,image:"assets/images/Hopper-Cool.png",description:"Some description here item 7",moredetail:"And more detail here item 7",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"},
		{a:"Item 8",b:2.80,image:"assets/images/Hopper-Cool.png",description:"Some description here item 8",moredetail:"And more detail here item 8",reviewStars:5,reviewComments:"comment",reviewAuthor:"phil@phil.com"}
	]; 
});
app.controller("PanelController",function(){
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
});