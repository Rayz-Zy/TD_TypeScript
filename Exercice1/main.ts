import { Point } from './Point';
import { TroisPoints } from './TroisPoint';

//Objectif
//Implémenter une classe Point avec opérations géométriques (distance, milieu) et une classe TroisPoints 
//pour tester l’alignement et si le triangle est isocèl

// Points pour tests
const A = new Point(0, 0);
const B = new Point(2, 0);
const C = new Point(4, 0);

console.log('Distance A->B:', A.calculerDistance(B));
console.log('Distance (statique) A->B:', Point.distance(0, 0, 2, 0));

const milieuAB = A.calculerMilieu(B);
console.log('Milieu de A et B:', `(${milieuAB.getAbs().toFixed(3)}, ${milieuAB.getOrd().toFixed(3)})`);

// Tester alignement
const trio1 = new TroisPoints(A, B, C);
console.log('A, B, C alignés ?', trio1.testerAlignement());
console.log('A, B, C isocèle ?', trio1.estIsocele());

// Triangle équilatéral (donc aussi isocèle)
const E = new Point(1, Math.sqrt(3)); // avec A(0,0) et B(2,0) donne triangle équilatéral de côté 2
const trio2 = new TroisPoints(A, B, E);
console.log('A, B, E alignés ?', trio2.testerAlignement());
console.log('A, B, E isocèle ?', trio2.estIsocele());

trio2.premier = new Point(-1, 0);
console.log('Nouveau premier:', `(${trio2.premier.getAbs()}, ${trio2.premier.getOrd()})`);