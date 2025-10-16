"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var Stagiaire_1 = require("./Stagiaire");
var Formation_1 = require("./Formation");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.run = function () {
        var stagiaire1 = new Stagiaire_1.Stagiaire("Maxime", [12, 15, 18]);
        var stagiaire2 = new Stagiaire_1.Stagiaire("Remy", [10, 11, 9]);
        var stagiaire3 = new Stagiaire_1.Stagiaire("Rayane", [16, 17, 15]);
        var stagiaires = [stagiaire1, stagiaire2, stagiaire3];
        var formation = new Formation_1.Formation("TypeScript", 5, stagiaires);
        console.log("la moyenne de la formation est : " + formation.calculerMoyenneFormation().toFixed(2));
        console.log("\n INFORMATION DE LA FORMATION \n");
        console.log("Formation : ".concat(formation.intitule));
        console.log("Nombre de jours : ".concat(formation.nbJours));
        console.log("Nombre de stagiaires : ".concat(formation.stagiaires.length, "\n"));
        console.log("\n LISTE DES STAGIAIRES");
        console.log(formation.trouverMoyennePrNom("Remy"));
        formation.stagiaires.forEach(function (stagiaire, index) {
            console.log("Stagiaire ".concat(index + 1, ": ").concat(stagiaire.nom));
            console.log("Notes: ".concat(stagiaire.notes.join(", ")));
            console.log("Moyenne: ".concat(stagiaire.calculerMoyenne().toFixed(2)));
            console.log("Note Min: ".concat(stagiaire.trouverMin()));
            console.log("Note Max: ".concat(stagiaire.trouverMax(), "\n"));
        });
    };
    return Main;
}());
exports.Main = Main;
Main.run();
