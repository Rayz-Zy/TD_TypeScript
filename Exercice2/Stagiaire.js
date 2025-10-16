"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, notes) {
        this._nom = nom;
        this._notes = notes;
    }
    Object.defineProperty(Stagiaire.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    //trouver moyenne
    Stagiaire.prototype.calculerMoyenne = function () {
        if (this._notes.length === 0)
            return 0;
        var somme = this._notes.reduce(function (acc, note) { return acc + note; }, 0);
        return somme / this._notes.length;
    };
    //trouver note max
    Stagiaire.prototype.trouverMax = function () {
        if (this._notes.length === 0)
            return 0;
        return Math.max.apply(Math, this._notes);
    };
    //trouvber note min
    Stagiaire.prototype.trouverMin = function () {
        if (this._notes.length === 0)
            return 0;
        return Math.min.apply(Math, this._notes);
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
