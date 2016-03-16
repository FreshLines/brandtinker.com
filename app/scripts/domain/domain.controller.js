'use strict';

/**
 * @ngdoc controller
 * @name brandTinkerApp.controller:DomainController
 * @description handles search of domains
 * Controller of the brandTinkerApp
 */

function DomainController($scope, domainFactory) {

  /**
   * Search for a Domain Name
   * @param  {String} name Name of a desired domain name
   * @scope  domain_info information containing domain names
   */
  function searchDomain(name) {
    domainFactory.searchName(name)
    .then(function(response){
      $scope.domain_info = response;
    });
  }

  /**
   * Responds to Broadcast to search for an idea
   * Search for business name
   * @event searchBranding
   */
  $scope.$on('searchBranding', function() {
    searchDomain($scope.idea);
  });


  /**
   * Sets available or unavailable class
   * @param {String} response
   * @return {String} Available or Unavailable
   */
  $scope.set_domain_availability_color = function detectAvailable(response) {
    if($scope.is_available(response)) {
      return "available";
    } else {
      return "unavailable";
    }
  };

  /**
   * Checks if field is available
   * @param  {String}  response
   * @return {Boolean}
   */
  $scope.is_available = function isAvailable(response) {
    if(response === 'Available') {
      return true;
    } else {
      return false;
    }
  };
}

angular.module('brandTinkerControllers')
  .controller('DomainController', DomainController);