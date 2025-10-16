"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    Adresse.prototype.getRue = function () {
        return this.rue;
    };
    Adresse.prototype.getVille = function () {
        return this.ville;
    };
    Adresse.prototype.getCodePostal = function () {
        return this.codePostal;
    };
    Adresse.prototype.setRue = function (rue) {
        this.rue = rue;
    };
    Adresse.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Adresse.prototype.setCodePostal = function (codePostal) {
        this.codePostal = codePostal;
    };
    return Adresse;
}());
exports.Adresse = Adresse;
