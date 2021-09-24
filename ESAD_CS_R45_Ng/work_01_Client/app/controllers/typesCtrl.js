angular.module("vehicleApp")
    .controller("typeCtrl", ($scope, $http, apiUrl, apiService, $location) => {

        //for create
        $scope.createType = f => {
            console.log(f);
            apiService.post(`${apiUrl}VehicleTypes`, $scope.typeObject)
                .then(r => {
                    $scope.model.types.push(r.data);
                    $scope.typeObject = {};
                    $scope.apiMessage = "Data inserted successfully!!";
                    f.$setPristine();
                    f.$setUntouched();
                }, err => {
                    $scope.apiMessage = "Data insert failed!!";
                });
        }
        //for edit
        $scope.editType = t => {
            angular.copy(t, $scope.typeObject);
            console.log($scope.typeObject);
            $location.path("/editType/:" + t.vehicleTypeId);
        }
        //for update
        $scope.updateType = f => {
            apiService.put(`${apiUrl}VehicleTypes/${$scope.typeObject.vehicleTypeId}`, $scope.typeObject)
                .then(r => {
                    var i = $scope.model.types.findIndex(t => t.vehicleTypeId == $scope.typeObject.vehicleTypeId);
                    angular.copy($scope.typeObject, $scope.model.types[i]);
                    console.log($scope.model.types[i]);
                    $scope.apiMessage = "Data Updated successfully!!";
                    f.$setPristine();
                    f.$setUntouched();
                }, err => {
                    $scope.apiMessage = "Data update failed!!";
                });
        }
        $scope.delModal = null;
        $scope.confirmDelete = (t) => {
            $scope.delModal = new bootstrap.Modal(document.getElementById('delModal'), {});
            $scope.typeObject = t;
            $scope.delModal.show();
        }
        $scope.cancelDeleteType = () => {
            $scope.typeObject = {};
            $scope.delModal.hide();
        }
        $scope.doDeleteType = () => {
            console.log("del");
            console.log($scope.typeObject);
            apiService.delete(`${apiUrl}VehicleTypes/`, $scope.typeObject.vehicleTypeId)
                .then(r => {
                    var i = $scope.model.types.findIndex(t => t.vehicleTypeId == $scope.typeObject.vehicleTypeId);
                    $scope.model.types.splice(i, 1);
                    $scope.apiMessage = "Data Deleted!!";
                },
                err => {
                        $scope.apiMessage = "Data delete failed!!";
                    })
                .finally(() => {
                    $scope.delModal.hide();
                })
        }
    })