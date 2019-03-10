"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function degTorad(deg) {
    return deg * (Math.PI / 180);
}
exports.kmFromCoordinates = function (lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = degTorad(lat2 - lat1); // deg2rad below
    var dLon = degTorad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(degTorad(lat1)) * Math.cos(degTorad(lat2))
            * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
};
exports.distanceBetween = function (a, b) { return exports.kmFromCoordinates(a.latitude, a.longitude, b.latitude, b.longitude); };
