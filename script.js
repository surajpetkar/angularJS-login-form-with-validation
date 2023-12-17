var loginApp = angular.module('loginApp', []);
loginApp.controller('loginCtrl', ($scope) => {
    $scope.btnText = 'Sign-In';
    $scope.create = false;
    $scope.createAcc = () => {
        $scope.create = true;
        $scope.login = false;
        $scope.btnText = 'Sign-Up';
        $scope.user.username = '';
        $scope.user.password = '';
    }
    $scope.login = true;
    $scope.loginAcc = () => {
        $scope.login = true;
        $scope.create = false;
        $scope.btnText = 'Sign-In';
        $scope.user.username = '';
        $scope.user.password = '';
    }
    $scope.isConfirmPass = () => {
        if ($scope.user.password == $scope.user.cpassword)
            return false;
        else
            return true;
    }
    

    var modal = document.getElementById("termsBlock");
    var changePasswordPage = document.getElementById("changePasswordPage");

    // When the user clicks on the button, open the modal
    $scope.showTerms = function() {
    modal.style.display = "block";
    }
    $scope.changePasswordPage = function(){
        changePasswordPage.style.display = "block";
        $scope.user.otp = '';
    }

    // When the user clicks on <span> (x), close the modal
    $scope.closeTerms = function() {
    modal.style.display = "none";
    document.getElementById("termsAndCondition").click();
    }
    $scope.closeChangePasswordPage = function() {
        changePasswordPage.style.display = "none";
        document.getElementById("termsAndCondition").click();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == changePasswordPage) {
            changePasswordPage.style.display = "none";
        }
    }

    $scope.isEmailValid = false;
    $scope.validateEmail = function(){
        if($scope.user.email === "srp@gmail.com"){
            $scope.isEmailValid =  true;
        }
        else{
            alert('Email is not registered with the system');
            $scope.isEmailValid =  false;
        }
    }

    $scope.changePassword = function(){
        alert('Password has been changed successfully!');
    }

    });
