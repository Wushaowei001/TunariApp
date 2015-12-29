'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('tunariApp', [
    'ngAnimate',
    'ngRoute',
    'angular-carousel',
    'restangular',
    'ngAudio',
    'nya.bootstrap.select',
    'siyfion.sfTypeahead',
    'angularUtils.directives.dirPagination',
    'cgNotify',
    'ui.bootstrap',
    'scrollable-table'
  ])
  .config(['$routeProvider', 'RestangularProvider', 'Config', 
    function ($routeProvider, RestangularProvider, Config) {
    
    // Restangular global configurations
    RestangularProvider.setBaseUrl(Config.serverOptions.host + ":" + Config.serverOptions.port + '/api');

    RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
            if (operation === "getList") {
                _.each(response,function(element){
                    element.id = element._id
                });
            }
            else{
                if(response._id){                    
                    response.id = response._id;
                }
            }
            
            return response;
        });

    // Moment.js global configuration
    moment.locale('es', {
         months : "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
         weekdays : "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"), 
    });

    
    $routeProvider
      .when('/', {
        templateUrl: 'views/productSearch.html',
        controller: 'ProductSearcherCtrl',
        controllerAs: 'ProductSearcher'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/productSearch', {
        templateUrl: 'views/productSearch.html',
        controller: 'ProductSearcherCtrl',
        controllerAs: 'ProductSearcher'
      })
      .when('/products/:productId', {
        templateUrl: 'views/editProduct.html',
        controller: 'EditProductCtrl',
        controllerAs: 'editProduct'
      })
      .when('/newProduct', {
        templateUrl: 'views/newProduct.html',
        controller: 'NewProductCtrl',
        controllerAs: 'newProduct'
      })
      .when('/clientSearch', {
        templateUrl: 'views/clientSearch.html',
        controller: 'ClientSearchCtrl',
        controllerAs: 'clientSearch'
      })
      .when('/clientSamples/:clientId', {
        templateUrl: 'views/clientSamples.html',
        controller: 'ClientSamplesCtrl',
        controllerAs: 'clientSamples'
      })
      .when('/newClient', {
        templateUrl: 'views/newClient.html',
        controller: 'NewClientCtrl',
        controllerAs: 'newClient'
      })
      .when('/clients/:clientId', {
        templateUrl: 'views/editClient.html',
        controller: 'EditClientCtrl',
        controllerAs: 'editClient'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl',
        controllerAs: 'statistics'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

