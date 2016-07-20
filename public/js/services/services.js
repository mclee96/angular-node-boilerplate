angular.module('services', [])

.factory('myService', function($http) {
	this.getSessionId = getSessionId;

	function getSessionId() {
		return $http.get('https://api-qa.zumigo.com/zumigo/device_session_registration.jsp?username=zumigotest&password=Z$2015$');
	}

	return this;
	/*
	return {
		get : function() {
			return $http.get('/api/todos');
		},
		create : function(todoData) {
			return $http.post('/api/todos', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/todos/' + id);
		}
	}
	*/
});
