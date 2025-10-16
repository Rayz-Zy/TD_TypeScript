import { Stagiaire } from "./Stagiaire";
import { Formation } from "./Formation";

export class Main {
    public static run(): void {
        
        const stagiaire1 = new Stagiaire("Maxime", [12, 15, 18]);
        const stagiaire2 = new Stagiaire("Remy", [10, 11, 9]);
        const stagiaire3 = new Stagiaire("Rayane", [16, 17, 15]);

        const stagiaires: Stagiaire[]= [stagiaire1, stagiaire2, stagiaire3];
        const formation = new Formation("TypeScript", 5, stagiaires);
        console.log("la moyenne de la formation est : " + formation.calculerMoyenneFormation().toFixed(2));
        console.log("\n INFORMATION DE LA FORMATION \n");
   
        console.log(`Formation : ${formation.intitule}`);
        console.log(`Nombre de jours : ${formation.nbJours}`);
        console.log(`Nombre de stagiaires : ${formation.stagiaires.length}\n`);

        console.log("\n LISTE DES STAGIAIRES");
        console.log(formation.trouverMoyennePrNom("Remy"));


        formation.stagiaires.forEach((stagiaire, index) => {
            console.log(`Stagiaire ${index + 1}: ${stagiaire.nom}`);
            console.log(`Notes: ${stagiaire.notes.join(", ")}`);
            console.log(`Moyenne: ${stagiaire.calculerMoyenne().toFixed(2)}`);
            console.log(`Note Min: ${stagiaire.trouverMin()}`);
            console.log(`Note Max: ${stagiaire.trouverMax()}\n`);
            
        });
    }
}

Main.run();
