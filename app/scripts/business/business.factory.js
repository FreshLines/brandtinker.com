'use strict';

/**
 * @ngdoc factory
 * @name brandTinkerApp.businessFactories::BusinessFactory
 * @description Search using Fresh Lines API to find your place of business
 * # Business Factory
 * Factory for trademarks of the brandClashApp
 */


var app = angular.module('brandtinker.businessFactory',['config']);

function BusinessFactory($http, $q, ENV) {
  var businessSearch = {};
  var _headers = {};
  var _url = ENV.business.url;
  businessSearch._headers = _headers;
  businessSearch._url = _url;

  /**
   * Prepares the URL for search
   * @param  {String} name search name parameters
   * @param  {String} dba  use a dba instead?
   * @return {String}      prepared url
   */
  businessSearch.makeUrl = function makeUrl(name, dba) {
    if (dba) {
      name = name + "?include_dba=true";
    }
    return _url + name;
  };

  /**
   * Searches for Businesses by a name
   * @param  {String} name       Name of a desired Business
   * @param  {Boolean} dba       Boolean field
   * @return {Deferred Promise}  Promise containing response from Business search
   */
  businessSearch.searchName = function searchName(name, dba) {
    var deferred = $q.defer();

    $http({
      method: "GET",
      url : businessSearch.makeUrl(name,dba),
      headers: businessSearch._headers
    }).success(function(response) {
      deferred.resolve(response);
    }).error(function() {
      deferred.reject('There was an error in the request!');
    });

    return deferred.promise;
  };

  return businessSearch;
}

app.factory('businessFactory', BusinessFactory);
