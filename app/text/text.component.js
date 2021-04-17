angular.
    module('designApp').
    component('text', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/text/text.template.html',
        controller: function TextController() {
            
        }
    });