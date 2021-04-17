angular.
  module('designApp').
  factory('Topic', ['$resource',
    function($resource) {
      return $resource('topics/:topicId.json', {}, {
        query: {
          method: 'GET',
          params: {topicId: 'topics'},
          isArray: true
        }
      });
    }
  ]);