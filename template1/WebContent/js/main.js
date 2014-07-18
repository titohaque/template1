var myTemplate=angular.module('myTemplate',[]);

myTemplate.directive('temp1', function() {
	    			
	    		  return {
	    			  restrict:"E",
	    			  templateUrl:"template/temp1.html",
	    		    	  };
	    		    	  
});
	    		
	
myTemplate.controller('myCntl2', function($scope) {
	$scope.beta=false;
	$scope.mybtn=function(){
		$scope.beta=true;
		$scope.alpha=true;
	};
	
});
