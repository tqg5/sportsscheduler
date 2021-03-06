'use strict';

//Groups service used to communicate Groups REST endpoints
angular.module('groups').factory('Groups', ['$resource',
	function($resource) {
		return $resource('/api/users/groups/:groupId', { groupId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
            query:{method:'GET',isArray:true}
		});
	}
]).
factory('Search', ['$http', function($http){
        return {
            getUsers:function(val) {
                return $http.get('/api/users/', {
                    params: {
                        username: val
                    }
                }).then(function(response){
                    return response.data;
                });
            }
        };
    }]);
