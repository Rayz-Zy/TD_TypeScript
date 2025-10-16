import {Point} from './Point';
export class TroisPoints {

    //Classe représentant trois points du plan.
    //Fournit des accesseurs (get/set) et des méthodes pour tester l'alignement et si le triangle formé est isocèle.
        
    constructor(private _premier: Point, private _deuxieme: Point, private _troisieme: Point){}

    get premier(): Point { return this._premier; }
    set premier(value: Point){ this._premier = value; }

    get deuxieme(): Point { return this._deuxieme; }
    set deuxieme(value: Point){ this._deuxieme = value; }

    get troisieme(): Point { return this._troisieme; }
    set troisieme(value: Point){ this._troisieme = value; }
    
    //testerAlignement() retourne true si les trois points sont alignés.
    testerAlignement(): boolean{
        const AB = this._premier.calculerDistance(this._deuxieme);
        const AC = this._premier.calculerDistance(this._troisieme);
        const BC = this._deuxieme.calculerDistance(this._troisieme);
        return Math.abs(AB - (AC + BC)) < 0.001 || Math.abs(AC - (AB + BC)) < 0.001 || Math.abs(BC - (AB + AC)) < 0.001;
    }

    //estIsocele()retourne true si le triangle formé par les trois points est isocèle.
    estIsocele(): boolean{
        const AB = this._premier.calculerDistance(this._deuxieme);
        const AC = this._premier.calculerDistance(this._troisieme);
        const BC = this._deuxieme.calculerDistance(this._troisieme);
        return Math.abs(AB - AC) < 0.001 || Math.abs(AB - BC) < 0.001 || Math.abs(AC - BC) < 0.001;
    }

}