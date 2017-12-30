app.controller('header', function($scope, usuario) {
    $scope.home = 'active'
    $scope.about = ''
    $scope.userButton = 'Logar'
    $scope.userLoginModalShowAlert = false


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

    $scope.userButtonLogin = function() {
        let headers = {
            'Content-Type': 'application/json'
        },
        body = {
            email: $scope.loginEmail,
            senha: $scope.loginSenha
        }
        console.log($scope.loginEmail, $scope.loginEmail)
        fetch('/api/autentica', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers
        }).then(resp => resp.json().then(obj => {
            if (obj.message == 'ok') {
                usuario.logado = true
                $scope.userLoginModalShowAlert = true
                $scope.userLoginModalAlertType = 'success'
                $scope.userLoginModalAlertMsg = 'Logado com sucesso'
            } else {
                $scope.userLoginModalShowAlert = true
                $scope.userLoginModalAlertType = 'danger'
                $scope.userLoginModalAlertMsg = 'Email ou Senha não combinam'
            }
        }))
    }
    $scope.clearTexts = function() {
        $scope.loginEmail = $scope.loginSenha = ''
    }
    $scope.closeLoginAlert = function() {
        $scope.userLoginModalShowAlert = false
    }
    global = usuario
})
