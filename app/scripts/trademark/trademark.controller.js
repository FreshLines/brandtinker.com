'use strict';

/**
 * @ngdoc controller
 * @name brandTinkerApp.controller:TrademarkController
 * @description
 * # TrademarkController
 * Controller of the brandTinkerApp
 */


function TrademarkController($scope, trademarkFactory) {

  /**
   * Searches for a Trademark name
   * @param {String} name   name of a trademark
   * @scope trademark_info  contains information about a trademark
   */
  function searchTrademark(name) {
    trademarkFactory.searchName(name)
    .then(function(response){
      $scope.trademark_info = response;
    });
  }

  /**
   * Responds to Broadcast to search for an idea
   * Search for trademark name
   * @event searchBranding
   */
  $scope.$on('searchBranding', function() {
    searchTrademark($scope.idea);
  });

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
  .controller('TrademarkController', TrademarkController);