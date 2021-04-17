angular.
    module('designApp').
    component('list', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/list/list.template.html',
        controller: function ListController() {
            
        }
    });