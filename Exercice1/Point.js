"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    Point.prototype.setAbs = function (abs) {
        this.abs = abs;
    };
    Point.prototype.setOrd = function (ord) {
        this.ord = ord;
    };
    Point.prototype.calculerDistance = function (p) {
        //calcule la distance entre le point courant et le point p
        var distance = Math.sqrt(Math.pow((p.getAbs() - this.abs), 2) + Math.pow((p.getOrd() - this.ord), 2));
        return distance; //retourne la distance entre le point courant et le point p
    };
    Point.distance = function (x1, y1, x2, y2) {
        //calcule la distance entre les points (x1, y1) et (x2, y2)
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        //retourne la distance entre les points (x1, y1) et (x2, y2)
    };
    Point.prototype.calculerMilieu = function (p) {
        //calcule le milieu entre le point courant et le point p
        var milieuAbs = (this.abs + p.getAbs()) / 2;
        var milieuOrd = (this.ord + p.getOrd()) / 2;
        //retourne le point milieu entre le point courant et le point p
        return new Point(milieuAbs, milieuOrd);
    };
    return Point;
}());
exports.Point = Point;
