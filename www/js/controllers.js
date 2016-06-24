angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $state) {
	$scope.data = {};
	$scope.loginEmail = function(){

		alert("El usuario es: " + $scope.data.username);
		/*var usuarios = Parse.Object.extend("User");
		var query = new Parse.Query(usuarios);
		query.equalTo("username", "rihch888@gmail.com");
		query.find({
		  success: function(results) {
		    
		    // Do something with the returned Parse.Object values
		    for (var i = 0; i < results.length; i++) {
		      var object = results[i];
		      alert(object.id + ' - ' + object.get('username'));
		    }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});*/



		Parse.User.logIn($scope.data.username, $scope.data.password, {
    		success: function(user) {
      		// Do stuff after successful login.
      		console.log(user);
      		alert("success!");
      		$state.go('menuSesion');
    	},
    	error: function(user, error) {
      		// The login failed. Check error to see why.
      		alert("error!");
    }
  });
  };
})
 