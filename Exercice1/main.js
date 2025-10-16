"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var TroisPoint_1 = require("./TroisPoint");
//Objectif
//Implémenter une classe Point avec opérations géométriques (distance, milieu) et une classe TroisPoints 
//pour tester l’alignement et si le triangle est isocèl
// Points pour tests
var A = new Point_1.Point(0, 0);
var B = new Point_1.Point(2, 0);
var C = new Point_1.Point(4, 0);
console.log('Distance A->B:', A.calculerDistance(B));
console.log('Distance (statique) A->B:', Point_1.Point.distance(0, 0, 2, 0));
var milieuAB = A.calculerMilieu(B);
console.log('Milieu de A et B:', "(".concat(milieuAB.getAbs().toFixed(3), ", ").concat(milieuAB.getOrd().toFixed(3), ")"));
// Tester alignement
var trio1 = new TroisPoint_1.TroisPoints(A, B, C);
console.log('A, B, C alignés ?', trio1.testerAlignement());
console.log('A, B, C isocèle ?', trio1.estIsocele());
// Triangle équilatéral (donc aussi isocèle)
var E = new Point_1.Point(1, Math.sqrt(3)); // avec A(0,0) et B(2,0) donne triangle équilatéral de côté 2
var trio2 = new TroisPoint_1.TroisPoints(A, B, E);
console.log('A, B, E alignés ?', trio2.testerAlignement());
console.log('A, B, E isocèle ?', trio2.estIsocele());
trio2.premier = new Point_1.Point(-1, 0);
console.log('Nouveau premier:', "(".concat(trio2.premier.getAbs(), ", ").concat(trio2.premier.getOrd(), ")"));
