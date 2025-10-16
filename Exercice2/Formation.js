"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(intitule, nbJours, stagiaires) {
        this._intitule = intitule;
        this._stagiaires = stagiaires;
        this._nbJours = nbJours;
    }
    Object.defineProperty(Formation.prototype, "intitule", {
        get: function () {
            return this._intitule;
        },
        set: function (value) {
            this._intitule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Formation.prototype, "stagiaires", {
        get: function () {
            return this._stagiaires;
        },
        set: function (value) {
            this._stagiaires = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Formation.prototype, "nbJours", {
        get: function () {
            return this._nbJours;
        },
        set: function (value) {
            this._nbJours = value;
        },
        enumerable: false,
        configurable: true
    });
    //moyenne de la formation
    Formation.prototype.calculerMoyenneFormation = function () {
        if (this._stagiaires.length === 0)
            return 0;
        var sommeMoyennes = this._stagiaires.reduce(function (acc, stagiaire) { return acc + stagiaire.calculerMoyenne(); }, 0);
        return sommeMoyennes / this._stagiaires.length;
    };
    //index du stagiaire avec la meilleure moyenne
    Formation.prototype.getIndexMax = function () {
        if (this._stagiaires.length === 0)
            return -1;
        var indexMax = 0;
        var maxMoyenne = this._stagiaires[0].calculerMoyenne();
        for (var i = 1; i < this._stagiaires.length; i++) {
            var moyenneActuelle = this._stagiaires[i].calculerMoyenne();
            if (moyenneActuelle > maxMoyenne) {
                indexMax = i;
                maxMoyenne = moyenneActuelle;
            }
        }
        return indexMax;
    };
    //affiche le nom du stagiaire avec la meilleure moyenne sinon message aucun stagiaire
    Formation.prototype.AfficherNomMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            console.log("Le meilleur stagiaire est : ".concat(this._stagiaires[indexMax].nom, " avec une moyenne de ").concat(this._stagiaires[indexMax].calculerMoyenne()));
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    //affiche MinMax
    Formation.prototype.afficheMinMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            var meilleurStagiaire = this._stagiaires[indexMax];
            var noteMin = meilleurStagiaire.trouverMin();
            console.log("La note minimal du meilleur stagiaire est : ".concat(meilleurStagiaire.nom, " est : ").concat(noteMin));
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    Formation.prototype.trouverMoyennePrNom = function (nom) {
        var stagiairesFiltres = this._stagiaires.filter(function (stagiaire) { return stagiaire.nom.toLowerCase() === nom.toLowerCase(); });
        if (stagiairesFiltres.length > 0) {
            var stagiaireTrouve = stagiairesFiltres[0];
            console.log("La moyenne de ".concat(nom, " est : ").concat(stagiaireTrouve.calculerMoyenne().toFixed(2)));
        }
        else {
            console.log("Stagiaire avec le nom ".concat(nom, " non trouv\u00E9"));
        }
    };
    return Formation;
}());
exports.Formation = Formation;
