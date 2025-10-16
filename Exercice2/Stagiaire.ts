export class Stagiaire {
    private _nom: string;
    private _notes: number[];

    constructor(nom: string, notes: number[]) {
        this._nom = nom;
        this._notes = notes;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(value: string) {
        this._nom = value;
    }

    public get notes(): number[] {
        return this._notes;
    }

    public set notes(value: number[]) {
        this._notes = value;
    }
    
    //trouver moyenne
    public calculerMoyenne(): number {
        if (this._notes.length === 0) return 0;
        const somme = this._notes.reduce((acc, note) => acc + note, 0);
        return somme / this._notes.length;
    }

    //trouver note max
    public trouverMax() : number {
        if (this._notes.length === 0) return 0;
        return Math.max(...this._notes);
    }

    //trouvber note min
    public trouverMin() : number {
        if (this._notes.length === 0) return 0;
        return Math.min(...this._notes);
    }

}
