(function() {
    "use strict";

    angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var vm = this;

      vm.openSidebar = openSidebar;
      vm.closeSidebar = closeSidebar;
      vm.saveClassified = saveClassified;
      vm.editClassified = editClassified;
      vm.saveEdit = saveEdit;
      vm.deleteClassified = deleteClassified

      vm.classifieds;
      vm.categories;
      vm.classified;
      vm.editing;

      classifiedsFactory.getClassifieds().then(function(classifieds){      	
      	vm.classifieds = classifieds.data;
      	vm.categories = getCategories(vm.classifieds);
      	//console.log($scope.categories);


      });

      var contact = {
      	name: "Leo Messi",
      	phone: "074556665452",
      	email: "leo@messi.com"
      }

      
      function openSidebar () {
            vm.classified ={};
      	$mdSidenav('left').open();
            //classified.title = "aaaaa";

      }

      function closeSidebar() {
      	$mdSidenav('left').close();

      }
     
	function saveClassified(classified) {
		if(classified){
			classified.contact = contact;
			vm.classifieds.push(classified);
			vm.classified = {};
			closeSidebar();
			showToast("Classified saved!!!");
			
		}
	}

	function editClassified(classified) {
            console.log(classified);

		vm.editing = true;
		
            openSidebar();
            vm.classified = classified;
		
	}

	function saveEdit () {

		vm.editing = false;
		vm.classified = {};
		closeSidebar();
		showToast("Edit saved!!!");
	}

	function deleteClassified (event, classified) {
		var confirm = $mdDialog.confirm()
		  .title('Are you sure you want to delete ' +  classified.title + '?')
		  .ok('Yes')
		  .cancel('No')
		  .targetEvent(event);
		$mdDialog.show(confirm).then(function() {
			var index = vm.classifieds.indexOf(classified);
		    vm.classifieds.splice(index, 1);

		}, function() {

		});


      		

      	}

      	function showToast(message) {
      		$mdToast.show(
      			$mdToast.simple()
      			  .content(message)
      			  .position('top, right')
      			  .hideDelay(3000)

      		);

      	}

      	function getCategories(classifieds) {
      		var categories = [];
      		angular.forEach(classifieds, function(item) {
      			angular.forEach(item.categories, function(category) {
      				categories.push(category);
      			});
      		});

      		return _.uniq(categories);
      	};

    });

})();