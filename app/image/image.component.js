angular.
    module('designApp').
    component('imageContainer', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/image/image.template.html',
        controller: function ImageController() {
            
        }
    });