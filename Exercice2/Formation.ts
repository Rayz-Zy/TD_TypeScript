import {Stagiaire} from "./Stagiaire";

export class Formation {
    private _intitule: string;
    private _nbJours: number;
    private _stagiaires: Stagiaire[];

    constructor(intitule: string, nbJours: number, stagiaires: Stagiaire[]) {
        this._intitule = intitule;
        this._stagiaires = stagiaires;
        this._nbJours = nbJours;
    }

    public get intitule(): string {
        return this._intitule;
    }
    public set intitule(value: string) {
        this._intitule = value;
    }
    public get stagiaires(): Stagiaire[] {
        return this._stagiaires;
    }  
    public set stagiaires(value: Stagiaire[]) {
        this._stagiaires = value;
    }
    public get nbJours(): number {
        return this._nbJours;
    }
    public set nbJours(value: number) {
        this._nbJours = value;
    }

    //moyenne de la formation
    public calculerMoyenneFormation(): number {
        if (this._stagiaires.length === 0) return 0;
        const sommeMoyennes = this._stagiaires.reduce((acc, stagiaire) => acc + stagiaire.calculerMoyenne(), 0);
        return sommeMoyennes / this._stagiaires.length;
    }

    //index du stagiaire avec la meilleure moyenne
    public getIndexMax(): number {
        if (this._stagiaires.length === 0) return -1;
        let indexMax = 0;
        let maxMoyenne = this._stagiaires[0].calculerMoyenne();
        for (let i = 1; i < this._stagiaires.length; i++) {
            const moyenneActuelle = this._stagiaires[i].calculerMoyenne();
            if (moyenneActuelle > maxMoyenne) {
                indexMax = i;
                maxMoyenne = moyenneActuelle;
            }
        }
        return indexMax;
    }

    //affiche le nom du stagiaire avec la meilleure moyenne sinon message aucun stagiaire
    public AfficherNomMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1){
            console.log(`Le meilleur stagiaire est : ${this._stagiaires[indexMax].nom} avec une moyenne de ${this._stagiaires[indexMax].calculerMoyenne()}`);
        } else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }

    //affiche MinMax
    afficheMinMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1){
            const meilleurStagiaire= this._stagiaires[indexMax];
            const noteMin = meilleurStagiaire.trouverMin();
            console.log(`La note minimal du meilleur stagiaire est : ${meilleurStagiaire.nom} est : ${noteMin}`);
        } else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }

    public trouverMoyennePrNom(nom: string): void{
        const stagiairesFiltres = this._stagiaires.filter(stagiaire => stagiaire.nom.toLowerCase() === nom.toLowerCase());
        if (stagiairesFiltres.length > 0){
            const stagiaireTrouve = stagiairesFiltres[0];
            console.log(`La moyenne de ${nom} est : ${stagiaireTrouve.calculerMoyenne().toFixed(2)}`);
        } else {
            console.log(`Stagiaire avec le nom ${nom} non trouvé`);   
        }
    }
}