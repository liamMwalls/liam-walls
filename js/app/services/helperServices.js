angular.module('helper.services', [])
.service('helper', function () {
    this.getParam = function (name) {
        /// <summary>
        /// Returns the value of a given parameter from window.location
        /// </summary>
        /// <param name="name"></param>
        /// <returns type="string"></returns>
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    this.setStorage = function (name, data, expiry, useCookie) {
        /// <summary>
        /// Set given data in storage with either cookies or localStorage
        /// </summary>
        /// <param name="name" type="name"></param>
        /// <param name="data" type="string"></param>
        /// <param name="expiry" type="number">Number of days before expiry</param>
        /// <param name="useCookie" type="boolean"></param>
        if (useCookie) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiry);
            var c_value = escape(data) + ((expiry == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = name + "=" + c_value + ";path=/";
        }
        else {
            if ('localStorage' in window && window['localStorage'] !== null) {
                window['localStorage'].setItem(name, data);
            }
            else {
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + expiry);
                var c_value = escape(data) + ((expiry == null) ? "" : "; expires=" + exdate.toUTCString());
                document.cookie = name + "=" + c_value + ";path=/";
            }
        }
    }
    this.getStorage = function (name, useCookie) {
        /// <summary>
        /// Gets requested data from either cookies or localStorage
        /// </summary>
        /// <param name="name" type="name"></param>
        /// <param name="useCookie" type="boolean"></param>
        /// <returns type="string"></returns>
        if (useCookie) {
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == name) {
                    return unescape(y);
                }
            }
        }
        else {
            if ('localStorage' in window && window['localStorage'] !== null) {
                return window['localStorage'].getItem(name);
            }
            else {
                var i, x, y, ARRcookies = document.cookie.split(";");
                for (i = 0; i < ARRcookies.length; i++) {
                    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                    x = x.replace(/^\s+|\s+$/g, "");
                    if (x == name) {
                        return unescape(y);
                    }
                }
            }
        }
    }
    this.clearStorage = function (name, useCookie) {
        /// <summary>
        /// Removes requested data from  either cookies or localStorage
        /// </summary>
        /// <param name="name" type="name"></param>
        /// <param name="useCookie" type="boolean"></param>
        if (useCookie) {
            this.setStorage(name, "", -1, true);
        }
        else {
            if ('localStorage' in window && window['localStorage'] !== null) {
                window['localStorage'].removeItem(name);
            }
            else {
                this.setStorage(name, "", -1, true);
            }
        }
    }
    this.log = function (message, useAlert) {
        /// <summary>
        /// Run safe console logging for debugging
        /// </summary>
        /// <param name="message" type="string/element">message you want to appear in console log</param>
        /// <param name="useAlert" type="boolean">True if you want to run alert if console is unavailable</param>
        if (typeof console == "object") {
            console.log(message);
        } else if (useAlert) {
            alert(message);
        }
    }
});