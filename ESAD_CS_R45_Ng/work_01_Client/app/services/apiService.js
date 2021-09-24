angular.module("vehicleApp")
    .factory('apiService', ($http) => {
        return {
            get: u => {
                return $http({
                    url: u,
                    method: 'GET'
                });
            },
            getById: (u, id) => {
                return $http({
                    url: `u${id}`,
                    method: 'GET'
                });
            },
            post: (u, d) => {
                return $http({
                    url: u,
                    method: 'POST',
                    data: d
                });
            },
            put: (u, d) => {
                return $http({
                    url: u,
                    method: 'PUT',
                    data: d
                });
            },
            delete: (u, id) => {
                console.log(`${u}${id}`);
                return $http({
                    url: `${u}${id}`,
                    method: 'DELETE'
                });
            },
        }
    });