/*
Name:  
	Query Service
	
Description:
	Provides a service for the Query functionality of the Inventory Management application.
	The service requests HTTP actions from server APIs to query for information from the mongoDB.
	
*/


angular.module('QueryService', []).factory('queryServiceFactory', ['$http', function($http) {
    return {
		edit : function(newPart) {
            return $http.put('/api/query/addQuantity/:partNumber', newPart);
        }
    }       
}]);