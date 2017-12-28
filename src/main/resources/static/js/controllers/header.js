app.controller('header', function($scope) {
    $scope.home = 'active'
    $scope.about = ''

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
})
