app.controller('header', function($scope, usuario) {
    $scope.home = 'active'
    $scope.about = ''
    $scope.userButtonText = 'Logar'
    $scope.showLoginAlert = false


    $scope.$on('$routeChangeSuccess', function(_, {$$route}) {
        if ($$route.activeTab == 'home') {
            $scope.home = 'active'
            $scope.about = ''
        } else if ($$route.activeTab == 'about') {
            $scope.home = ''
            $scope.about = 'active'
        } else {
            $scope.home = ''
            $scope.about = ''
        }
    })

    $scope.userButtonAction = function() {
    	if ($scope.userButtonText == 'Logar') {
        	$('#userLoginModal').modal()
        	$scope.clearTexts()
        	$scope.showLoginAlert = false
    	} else {
    		$scope.userDeslogar()
    	}
    }

    $scope.userLogar = function() {
    	usuario.logar($scope.loginEmail, $scope.loginSenha, resp => {
    		if (resp) {
    			$scope.userButtonText = 'Deslogar'
    			$('#userLoginModal').modal('hide')
    			$scope.$apply()
    		} else {
    			$scope.showLoginAlert = true
    			$scope.$apply()
    		}
    	})
    }

    $scope.userDeslogar = function() {
    	usuario.deslogar()
    	$scope.userButtonText = 'Logar'
    }

    $scope.clearTexts = function() {
    	$scope.loginEmail = $scope.loginSenha = ''
    }

    $scope.closeLoginAlert = function() {
    	$scope.showLoginAlert = false
    }
    global = $scope
})
