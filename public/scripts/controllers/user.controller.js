myApp.controller('UserController', function ($window, $scope, $location) {
  const vm = this;

  vm.openurl = function (url) {
    window.open (url, '_blank','heigth=600,width=600');   // may alse try $window
  };
});
