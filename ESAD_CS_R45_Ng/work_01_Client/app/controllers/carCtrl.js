angular.module("vehicleApp")
    .controller("carCtrl", ($scope, $routeParams, apiUrl, apiService) => {
        $scope.$emit('selectedTypeChange', $routeParams.id);
    })