


MyApp.controller('chatCtrl', function($scope) {
    // scope de nom des users
$scope.nameuser=['amen allah','walid','ahmed','mohamed'];
    // fonction pour faire apparaître la chatbox

    $scope.toggle = function(p) {
        console.log(p);
        $scope.myVar = !$scope.myVar;
        $scope.nomU = p ;
    };

});