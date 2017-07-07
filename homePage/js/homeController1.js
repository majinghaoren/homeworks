app.controller("homeController1",function($scope,$http,$state){
	$scope.imgList = [
		'images/1.jpg',
		'images/2.jpg',
		'images/3.jpg'
	];

	$scope.dataList = [];

	function getData(){
		$http({
			url:'data/data.php?type=list&pageNo='+page+"&num="+"count"
		}).then(function(data){

			if (page==1) {
				$scope.dataList = data.data.records;
				$scope.$broadcast('scroll.refreshComplete')
			}else{
				$scope.dataList = $scope.dataList.concat(data.data.records);
				if (data.data.records.length==0) {
					$scope.haveMore = false;
				}
				$scope.$broadcast('scroll.infiniteScrollComplete')
			}	
		},function(err){
			console.log(err);
			if (page==1) {
				$scope.$broadcast('scroll.refreshComplete')
			}else{
				$scope.$broadcast('scroll.infiniteScrollComplete')
			}
		});
	}
	
	var page=1;
	var count=10;
	$scope.haveMore = true;
	getData(page);

	$scope.doRefresh = function(){
		page=1;
		getData(page);
	}
	
	$scope.loadMore = function(){
		page++;
		getData(page)
	}
	$scope.gotoDetail = function(obj){
		$state.go('detail1',{name:obj.Name,city:obj.City,country:obj.Country,age:obj.age});
	}
})
