'use strict';

/**
 * @ngdoc function
 * @name brandTinkerApp.controller:BrandCtrl
 * @description
 * # Trademark Factory
 * Factory for trademarks of the brandClashApp
 */


var app = angular.module('brandtinker.trademarkFactory',['config']);

function TrademarkFactory($http, $q, ENV) {
  var trademarkSearch = {};
  var _headers = {};
  var _url = ENV.trademark.url;
  trademarkSearch._headers = _headers;
  trademarkSearch._url = _url;
  trademarkSearch.makeUrl = function makeUrl(name) {
    return _url + name;
  };

  trademarkSearch.searchName = function searchName(name) {
    var deferred = $q.defer();

    $http({
      method: "GET",
      url : trademarkSearch.makeUrl(name),
      headers: trademarkSearch._headers
    }).success(function(response) {
      deferred.resolve(response);
    }).error(function() {
      deferred.reject('There was an error in the request!');
    });
    return deferred.promise;
  };

  return trademarkSearch;
}

app.factory('trademarkFactory', TrademarkFactory);
