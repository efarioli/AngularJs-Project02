 (function() {

 	"use strict";
 	
 	angular
 	  .module("ngClassifieds")
 	  .factory("classifiedsFactory", function($http, $firebaseArray) {

 	  	 // Initialize Firebase
 	  	 var config = {
 	  	 	apiKey: "AIzaSyBnakBgzkZGr3r0Bl3IClCqYTIcwM_R-Bg",
 	  	 	authDomain: "ng-classifieds-3c0d0.firebaseapp.com",
 	  	 	databaseURL: "https://ng-classifieds-3c0d0.firebaseio.com",
 	  	 	storageBucket: "ng-classifieds-3c0d0.appspot.com",
 	  	 	messagingSenderId: "281019304177"
 	  	 };
 	  	 firebase.initializeApp(config);






 	  	var rootRef = firebase.database().ref();

 	  	return {
 	  		ref: $firebaseArray(rootRef)

 	  	}

 	  });

 })();