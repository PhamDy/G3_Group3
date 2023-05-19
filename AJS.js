var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider 
        .when('/userlist', {
            templateUrl: 'views/tableContact.html'
        })    
});

app.controller("myCtrl", function($scope, $http)
{
    $scope.contacts = [];
    $scope.newContact = {};

    $scope.addContact = function() {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
        $scope.myForm.$setPristine();
        alert("Successfully added, you can see the list by clicking User list");
      };
});
