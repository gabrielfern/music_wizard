app.controller('header', function($scope, usuario) {
    $scope.home = 'active'
    $scope.about = ''
    $scope.userButtonText = 'Logar'
    $scope.showLoginAlert = false
    $scope.showUserLogado = false
    $scope.userName = ''
    $scope.showCadastroFalhaAlert = false
    $scope.showCadastroSucessoAlert = false


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
            $scope.clearLoginTexts()
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
                usuario.getUserName(name => {
                    $scope.userName = name
                      $scope.showUserLogado = true
                      $scope.$apply()
                })
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
        $scope.showUserLogado = false
    }

    $scope.clearLoginTexts = function() {
        $scope.loginEmail = $scope.loginSenha = ''
    }

    $scope.closeLoginAlert = function() {
        $scope.showLoginAlert = false
    }

    $scope.closeCadastroAlert = function() {
        $scope.showCadastroFalhaAlert = false
        $scope.showCadastroSucessoAlert = false
    }

    $scope.clearCadastroTexts = function() {
        $scope.cadastroNome = $scope.cadastroEmail = $scope.cadastroSenha = ''
    }

    $scope.userCadastroAction = function() {
        $('#userCadastroModal').modal()
        $scope.clearCadastroTexts()
        $scope.showCadastroFalhaAlert = false
        $scope.showCadastroSucessoAlert = false
    }

    $scope.userCadastrar = function() {
        usuario.addUser($scope.cadastroNome, $scope.cadastroEmail, $scope.cadastroSenha, resp => {
            if (resp) {
                $scope.clearCadastroTexts()
                $scope.showCadastroFalhaAlert = false
                $scope.showCadastroSucessoAlert = true
                $scope.$apply()
            } else {
                $scope.showCadastroSucessoAlert = false
                $scope.showCadastroFalhaAlert = true
                $scope.$apply()
            }
        })
    }
})
