'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  // 'myApp.view1',
  // 'myApp.view2',
  'myApp.version'
]).
  config(function ($stateProvider, $locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    // $routeProvider.otherwise({ redirectTo: '/login' });
    // https://invimarefactory.desarrollodeprueba.com/admin/login
    // {"nit":"admin@tvip.com","email":"admin@tvip.com","password":"123456"}
    // $http({
    //   method: 'GET',
    //   url: '/someUrl'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

    var loginState = {
      name: 'login',
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: './sign-in/login.html',
      // resolve: {
      // authentication: async ($q, $http) => {
      // try {
      //     const a = $http({
      //       method: 'POST',
      //       url: 'https://invimarefactory.desarrollodeprueba.com/admin/login',
      //       data: {"nit":"admin@tvip.com","email":"admin@tvip.com","password":"123456"} 
      //     });
      //   console.log(a)
      // } catch (error) {
      //   console.log(error)
      // }
      // .then(function successCallback(response) {
      //     console.log(response);
      //     // this callback will be called asynchronously
      //     // when the response is available
      //   }, function errorCallback(error) {
      //     console.log(error)
      //     // called asynchronously if an error occurs
      //     // or server returns response with an error status.
      //   });
      //   var d = $q.defer();
      //   console.log(d)
      //   d.resolve(a)
      // d.reject();
      //   return d.promise;
      // }
      // }
    }

    var homeState = {
      name: 'home',
      url: '/home',
      templateUrl: './home/index.html'
    }

    $stateProvider.state(loginState);
    $stateProvider.state(homeState);
  });
