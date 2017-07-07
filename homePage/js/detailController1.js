app.controller('detailController1',function($scope,$stateParams){
	$scope.obj = {
		Name:$stateParams.name,
		City:$stateParams.city,
		Country:$stateParams.country,
		Age:$stateParams.age
	}

	$scope.goBack = function(){
		window.history.back();
	}
})