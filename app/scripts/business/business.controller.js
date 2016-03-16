'use strict';

/**
 * @ngdoc controller
 * @name brandTinkerApp.controller:BusinessController
 * @description
 * # BusinessController
 * Controller of the brandTinkerApp
 */

function BusinessController($scope, businessFactory) {

  /**
   * Search for a Business Name
   * @param  {String} name     Name of a desired business name
   * @param  {Boolean} use_dba Search for DBAs?
   * @scope  business_info     information containing business names
   */
  function searchBusiness(name, use_dba) {
    businessFactory.searchName(name, use_dba)
    .then(function(response){
      $scope.business_info = response;
    });
  }

  /**
   * Responds to Broadcast to search for an idea
   * Search for business name
   * @event searchBranding
   */
  $scope.$on('searchBranding', function() {
    searchBusiness($scope.idea, $scope.dba);
  });

  /**
   * Sets available or unavailable class
   * @param {String} response
   * @return {String} Available or Unavailable
   */
  $scope.set_business_name_availability_color = function setBusinessAvailableColor(response) {
    if($scope.is_active(response)) {
      return "unavailable";
    } else {
      return "available";
    }
  };

   /**
   * Checks if business is active
   * @param  {String}  response
   * @return {Boolean}
   */
  $scope.is_active = function isActive(response) {
    if(response === 'Active') {
      return true;
    } else {
      return false;
    }
  };

}

angular.module('brandTinkerControllers')
  .controller('BusinessController', BusinessController);