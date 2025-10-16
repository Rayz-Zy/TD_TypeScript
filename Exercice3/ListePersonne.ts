import {Personne} from './Personne';

export class ListePersonne {
    private _personnes: Personne[];
    constructor(personnes: Personne[] = []) {
        this._personnes = personnes.slice();
    }
    get personnes(): Personne[] {
        return this._personnes;
    }
    set personnes(personnes: Personne[]) {
        this._personnes = personnes;
    }

    public ajouterPersonne(personne: Personne): void {
        this._personnes.push(personne);
    }   
    public afficherPersonnes(): void {
        this._personnes.forEach(personne => {
            console.log(personne.getInfoComplete());
        });
    }

    public findByNom(nom: string): Personne | undefined {
        if (!nom || this._personnes.length===0) {
            return undefined;
        }
    }

}

