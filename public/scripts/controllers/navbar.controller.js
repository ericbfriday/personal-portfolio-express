angular.module('NavBar', ['ngMaterial'])
  .controller('NavCtrl', function ($location) {
    const vm = this;

    vm.currentNavItem = $location.path();
  });
