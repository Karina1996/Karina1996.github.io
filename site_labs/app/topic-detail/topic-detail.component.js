angular.
    module('designApp').
    component('topicDetail', {
        templateUrl: 'app/topic-detail/topic-detail.template.html',
        controller: function TopicDetailController($scope, $window, $routeParams, Topic) {
            $scope.topic = Topic.get({ topicId: $routeParams.topicId });
            $scope.back = function () {
                $window.history.back();
            }
        }
    });