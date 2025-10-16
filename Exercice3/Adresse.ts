export class Adresse {
    private rue: string;
    private ville: string;
    private codePostal: string;

    constructor(rue: string, ville: string, codePostal: string) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }

    getRue(): string {
        return this.rue;
    }

    getVille(): string {
        return this.ville;
    }

    getCodePostal(): string {
        return this.codePostal;
    }

    setRue(rue: string): void {
        this.rue = rue;
    }

    setVille(ville: string): void {
        this.ville = ville;
    }

    setCodePostal(codePostal: string): void {
        this.codePostal = codePostal;
    }

    get adresseComplete(): string {
        return `${this.rue}, ${this.codePostal} ${this.ville}`;
    }
}
