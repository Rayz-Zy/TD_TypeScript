"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, genre, adresses) {
        if (adresses === void 0) { adresses = []; }
        this.nom = nom;
        this.genre = genre;
        this.adresses = adresses.slice();
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getGenre = function () {
        return this.genre;
    };
    Personne.prototype.getAdresses = function () {
        return this.adresses.slice();
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Personne.prototype.setAdresses = function (adresses) {
        this.adresses = adresses.slice();
    };
    Personne.prototype.addAdresse = function (adresse) {
        this.adresses.push(adresse);
    };
    Personne.prototype.removeAdresse = function (index) {
        if (index < 0 || index >= this.adresses.length) {
            throw new Error('Index d\'adresse hors limites.');
        }
        this.adresses.splice(index, 1);
    };
    Personne.prototype.toString = function () {
        var genreLabel = this.genre || 'non précisé';
        var adrs = this.adresses.length > 0 ? this.adresses.map(function (a) { return a.toString(); }).join(' ; ') : 'Aucune adresse';
        return "".concat(this.nom, " (").concat(genreLabel, ") - ").concat(adrs);
    };
    return Personne;
}());
exports.Personne = Personne;
