app.controller('header', function($scope, usuario) {
    $scope.home = 'active'
    $scope.about = ''
    $scope.userButton = 'Login'

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
        console.log('im here')
    }
})
