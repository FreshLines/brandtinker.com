'use strict';

/**
 * @ngdoc factory
 * @name brandTinkerApp.domainFactory::DomainFactory
 * @description Search using Mashape's API to find your place of business
 */

var app = angular.module('brandtinker.domainFactory',['config']);

function DomainFactory($http, $q,ENV) {
  var domainSearch = {};
  var _headers = ENV.domain.headers;
  var _url = ENV.domain.url;
  domainSearch._headers = _headers;
  domainSearch._url = _url;
  /**
   * Prepares the URL for search
   * @param  {String} name search name parameters
   * @return {String}      prepared url
   */
  domainSearch.makeUrl = function makeUrl(name) {
    return _url + name;
  };

  /**
   * Searches for domain urls by a  name
   * @param  {String} name       Name of a desired URL
   * @return {Deferred Promise}  Promise containing response from url search
   */
  domainSearch.searchName = function searchName(name) {
    var deferred = $q.defer();

    $http({
      method: "GET",
      url : domainSearch.makeUrl(name),
      headers: domainSearch._headers
    }).success(function(response) {
      deferred.resolve(response);
    }).error(function() {
      deferred.reject('There was an error in the request!');
    });
    return deferred.promise;
  };

  return domainSearch;
}

app.factory('domainFactory', DomainFactory);
