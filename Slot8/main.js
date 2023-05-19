var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope)
{
    $scope.contacts = [
        {
            id : 0,
            name: 'Pham Dy',
            email: 'phamdacdy@gmail.com',
            password: '123',
            phone: '0396312896'
        }
    ];

    var uid = 1;
    // Add new contact
    $scope.addContact = function() {
        if ($scope.newContact.id == null) {
            $scope.newContact.id = uid++;
            $scope.contacts.push($scope.newContact);
            $scope.myForm.$setPristine();
            alert("Successfully added, you can see the list by clicking User list");
        } else {
            for(i in $scope.contacts){
                if($scope.contacts[i].id == $scope.newContact.id) {
                    $scope.contacts[i] = $scope.newContact;
                }
            }
        }
        $scope.newContact = {};
      };

    // Delete contact
    $scope.delete = function(id) {
        for(i in $scope.contacts){
            if($scope.contacts[i].id == id){
                $scope.contacts.splice(i,1);
                $scope.newContact={};
            }
        }
    }

    // Edit contact
    $scope.edit = function(id) {
        for(i in $scope.contacts){
            if($scope.contacts[i].id == id){
                $scope.newContact = angular.copy($scope.contacts[i])
            }
        }
    }

    // Click show table
    $scope.showMe = false;
    $scope.show = function() {
        $scope.showMe = !$scope.showMe;
    }
});


