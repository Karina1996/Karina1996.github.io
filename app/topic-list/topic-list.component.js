angular.
  module('designApp').
  component('topicList', {
    templateUrl: 'app/topic-list/topic-list.template.html',
    controller: function TopicListController(Topic, $scope) {
      $scope.topics = Topic.query();
    }
  });