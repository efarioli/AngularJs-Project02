(function() {
    "use strict";

    angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {
      
      classifiedsFactory.getClassifieds().then(function(classifieds){      	
      	$scope.classifieds = classifieds.data;

      });

      var contact = {
      	name: "Leo Messi",
      	phone: "074556665452",
      	email: "leo@messi.com"
      }

      $scope.openSidebar = function(){
      	$mdSidenav('left').open();

      }

      $scope.closeSidebar = function(){
      	$mdSidenav('left').close();

      }

     
      	$scope.saveClassified = function(classified){
      		if(classified){
      			classified.contact = contact;
      			$scope.classifieds.push(classified);
      			$scope.classified = {};
      			$scope.closeSidebar();
      			$mdToast.show(
      				$mdToast.simple()
      				  .content("Classified Save!!!")
      				  .position('top, right')
      				  .hideDelay(3000)

      			);
      		}
      	}
      

       

    });

})();