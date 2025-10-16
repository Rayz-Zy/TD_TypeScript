import { Adresse } from './Adresse';

export class Personne {

    private nom: string;
    private sexe: string;
    private adresses: Adresse[];

    constructor(nom: string, sexe: string, adresses: Adresse[] = []) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses.slice();
    }

    getNom(): string {
        return this.nom;
    }
    getSexe(): string {
        return this.sexe;
    }   
    getAdresses(): Adresse[] {
        return this.adresses.slice();
    }

    setNom(nom: string): void {
        this.nom = nom;
    }  
    setSexe(sexe: string) {
        if(sexe !== 'M' && sexe !== 'F') {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this.sexe = sexe;
    }

    setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses.slice();
    }

    public ajouterAdresse(adresse: Adresse): void {
        this.adresses.push(adresse);
    }

    getInfoComplete(): string {
        const adresseStr = this.adresses.map(adresse=>adresse.getAdresseComplete()).join(' | ');
        return `Nom: ${this.nom}, Sexe: ${this.sexe}, Adresses: [${adresseStr}]`;
    }

    

    
}