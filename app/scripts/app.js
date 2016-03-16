'use strict';

/**
 * @ngdoc overview
 * @name brandTinkerApp
 * @description
 * # brandTinkerApp
 *
 * Main module of the application.
 */
angular
  .module('brandTinkerApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'brandtinker.domain',
    'brandtinker.trademark',
    'brandtinker.business',
    'brandTinkerControllers',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/search");
    $stateProvider
      .state('search', {
        url: "/search",
        templateUrl: 'scripts/layout/main.html',
        controller: 'BrandCtrl'
      });
  });
