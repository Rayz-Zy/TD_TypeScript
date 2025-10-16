"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = void 0;
var TroisPoints = /** @class */ (function () {
    //Classe représentant trois points du plan.
    //Fournit des accesseurs (get/set) et des méthodes pour tester l'alignement et si le triangle formé est isocèle.
    function TroisPoints(_premier, _deuxieme, _troisieme) {
        this._premier = _premier;
        this._deuxieme = _deuxieme;
        this._troisieme = _troisieme;
    }
    Object.defineProperty(TroisPoints.prototype, "premier", {
        get: function () { return this._premier; },
        set: function (value) { this._premier = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "deuxieme", {
        get: function () { return this._deuxieme; },
        set: function (value) { this._deuxieme = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "troisieme", {
        get: function () { return this._troisieme; },
        set: function (value) { this._troisieme = value; },
        enumerable: false,
        configurable: true
    });
    //testerAlignement() retourne true si les trois points sont alignés.
    TroisPoints.prototype.testerAlignement = function () {
        var AB = this._premier.calculerDistance(this._deuxieme);
        var AC = this._premier.calculerDistance(this._troisieme);
        var BC = this._deuxieme.calculerDistance(this._troisieme);
        return Math.abs(AB - (AC + BC)) < 0.001 || Math.abs(AC - (AB + BC)) < 0.001 || Math.abs(BC - (AB + AC)) < 0.001;
    };
    //estIsocele()retourne true si le triangle formé par les trois points est isocèle.
    TroisPoints.prototype.estIsocele = function () {
        var AB = this._premier.calculerDistance(this._deuxieme);
        var AC = this._premier.calculerDistance(this._troisieme);
        var BC = this._deuxieme.calculerDistance(this._troisieme);
        return Math.abs(AB - AC) < 0.001 || Math.abs(AB - BC) < 0.001 || Math.abs(AC - BC) < 0.001;
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
