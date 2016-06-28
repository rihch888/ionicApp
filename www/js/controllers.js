angular.module('app.controllers', [])
  
.controller('menuInicioCtrl', function($scope, $state) {
	$scope.irRegistro = function(){
		$state.go('registro');
  	}

	$scope.irLogin = function(){
		$state.go('login');
	}
})

.controller('registroCtrl', function($scope, $state) {
	$scope.data = {};

	$scope.registrar = function(){
		var user = new CB.CloudUser();
		user.set('username', $scope.data.username);
		user.set('password', $scope.data.password);
		user.set('email', $scope.data.username);
		user.signUp({
				success: function(user) {
				//Registration successfull
				alert("Registro exitoso!!");
				$state.go('menuInicio');
			},
				error: function(err) {
				//Error in user registration.
				alert("Error!");
			}
		});
  }
}) 

.controller('loginCtrl', function($scope, $state) {
	$scope.data = {};
	$scope.loginEmail = function(){
		var user = new CB.CloudUser();
		user.set('username', $scope.data.username);
		user.set('password', $scope.data.password);
		user.logIn({
		success: function(user) {
			$state.go('menuSesion');
			//Login successfull
		},
		error: function(err) {
			//Error occured in user registration.
			alert("Usuario o contrasena incorrecta");
		}
	});

  }
  $scope.irRegistro = function(){
		$state.go('registro');
  	}
})

.controller('menuSesionCtrl', function($scope, $state) {
	$scope.data = {};
	$scope.irScore = function(){
		$state.go('score');
  }
})

.controller('scoreCtrl', function($scope, $state, Chats) {
	$scope.data = {};
	//$scope.verScore = function(){
		$scope.chats = Chats.all();
		
  	//}
})