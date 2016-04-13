


MyApp.controller('chatCtrl', function($scope) {
    // scope de nom des users
$scope.nameuser=['amen allah','walid','ahmed','mohamed'];
    // fonction pour faire apparaître la chatbox

    $scope.toggle = function(p) {
        console.log(p);
        $scope.myVar = !$scope.myVar;
        $scope.nomU = p ;
    };

    $scope.chat = [{todoText:'', done:false}];

    $scope.msgAdd = function() {
        $scope.chat.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };


});