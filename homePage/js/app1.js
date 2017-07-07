var app = angular.module('app',['ionic','ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home1');
	$stateProvider.state(
			'home1',{
				url:'/home1',
				templateUrl:'template/home1.html',
				controller:'homeController1'
			}
		)
	.state('detail1',{
		url:"/detail1/:name/:city/:country/:age",
		templateUrl:"template/detail1.html",
		controller:"detailController1"
	})
})