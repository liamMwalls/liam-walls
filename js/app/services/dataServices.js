angular.module('data.services', [])
.service('data', function ($http) {
    /// <summary>
    /// Service to provide web service requests for data handling
    /// </summary>
    /// <param name="$http">Angular $http module</param>
    this.get = function (url, callback, callBackArgs, expectedReturn) {
        /// <summary>
        /// GET method to request data
        /// </summary>
        /// <param name="url" type="string">URL to request for data</param>
        /// <param name="callback" type="function">Function to pass the resulting data to</param>
        /// <param name="callBackArgs" type="object">Argument/s to be passed to the callback function</param>
        /// <param name="expectedReturn" type="string">Expected typeof data to be returned</param>
        $http({ method: 'GET', url: url, cache: true }).
        success(function (data, status, headers, config) {
            // This callback will be called asynchronously when the response is available.
            if (typeof (data) != expectedReturn) {
                throw "Data from " + url + " is either corrupt or of an unexpected type";
            }
            callback(data, callBackArgs);
        }).
        error(function (data, status, headers, config) {
            // Talled asynchronously if an error occurs or server returns response with an error status.
            throw "No data returned from " + url;
        });
    };
    this.post = function (url, callback, callBackArgs, obj, expectedReturn) {
        /// <summary>
        /// POST method to pass object to service with a response
        /// </summary>
        /// <param name="url" type="string">URL to request for data</param>
        /// <param name="callback" type="function">Function to pass the resulting data to</param>
        /// <param name="callBackArgs" type="object">Argument/s to be passed to the callback function</param>
        /// <param name="obj" type="json">User defined object to pass to service</param>
        /// <param name="expectedReturn" type="string">Expected typeof data to be returned</param>
        $http({ method: 'POST', url: url, data: obj }).
        success(function (data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            if (typeof (data) != expectedReturn) {
                throw "Data from " + url + " is either corrupt or of an unexpected type";
            }
            callback(data, callBackArgs);
        }).
        error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            throw "No data returned from " + url;
        });
    };
    this.postWithErrorHandling = function (url, obj, successCallback, errorCallback) {
        $http({ method: 'POST', url: url, data: obj }).
        success(function (data, status, headers, config) {
            successCallback(data);
        }).
        error(function (data, status, headers, config) {
            errorCallback(data, status);
        });
    };
    this.putWithErrorHandling = function (url, obj, successCallback, errorCallback) {
        $http({ method: 'PUT', url: url, data: obj }).
        success(function (data, status, headers, config) {
            successCallback(data);
        }).
        error(function (data, status, headers, config) {
            errorCallback(data, status);
        });
    };
    this.remove = function (url, callback, callBackArgs, obj, expectedReturn) {
        /// <summary>
        /// DELETE method to pass object to service with a response
        /// </summary>
        /// <param name="url" type="string">URL to request for data</param>
        /// <param name="callback" type="function">Function to pass the resulting data to</param>
        /// <param name="callBackArgs" type="object">Argument/s to be passed to the callback function</param>
        /// <param name="obj" type="json">User defined object to pass to service</param>
        /// <param name="expectedReturn" type="string">Expected typeof data to be returned</param>
        $http({ method: 'DELETE', url: url, data: obj }).
        success(function (data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            if (typeof (data) != expectedReturn) {
                throw "Data from " + url + " is either corrupt or of an unexpected type";
            }
            callback(data, callBackArgs);
        }).
        error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            throw "No data returned from " + url;
        });
    };
});
