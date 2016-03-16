'use strict';

/**
 * @ngdoc controller
 * @name brandTinkerApp.controller:BrandCtrl
 * @description Broadcasts ideas to other search modules. Handles a search bar only.
 * @scope idea search idea
 * @scope dba  whether or not to search for dbas
 */

var app = angular.module('brandTinkerControllers',['brandtinker.domainFactory','brandtinker.businessFactory','brandtinker.trademarkFactory']);
function BrandCtrl($scope) {

  $scope.search = {
    "include_dba": false
  };

  /**
   * Search for an Idea and Broadcasts the event 'SearchBranding' to children search pages
   * @event searchBranding
   * @param  {String} new_idea  Idea that you want to search
   */
  $scope.searchIdea = function updateBrandIdea(new_idea) {
    $scope.idea = new_idea;
    $scope.dba = $scope.search.include_dba;
    $scope.$broadcast('searchBranding');
  };

}

app.controller('BrandCtrl', BrandCtrl);
