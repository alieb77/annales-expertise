/* Session 2021 (épreuves passées les 8-9 janvier 2022) */
EXAMS.push({
id:"cpt-2021", subject:"cpt", year:2021, session:"8-9 janvier 2022", title:"Comptabilité générale et analytique", date:"Samedi 8 janvier 2022", duration:300, pages:[328,332],
note:"Comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Cas 1 : Questions de cours", pts:8, pages:[329,329], th:["cg-eval","cg-erreurs"],
ctx:`Répondre succinctement aux questions suivantes : 1. Quels sont les fondements de la comptabilité générale ? (2 pts) 2. En quoi consistent l'inventaire permanent et l'inventaire intermittent ? (2 pts) 3. Quelles sont les valeurs retenues par le plan comptable général lors de l'entrée des biens dans l'actif ? (2 pts) 4. Quelles sont les obligations pesant sur les entreprises en matière comptable ? (2 pts)`,
questions:[
{pts:2, q:"1. Quels sont les fondements de la comptabilité générale ?",
model:`- **Fondements juridiques et normatifs** : la **loi 9-88** relative aux obligations comptables des commerçants et le **Code général de normalisation comptable (CGNC)**, complétés par les avis du Conseil national de la comptabilité (CNC) ; des textes particuliers (loi 17-95 sur la SA, CGI) en tirent des conséquences.
- **Fondements techniques** : la **partie double** (tout flux a une origine et une destination : débit = crédit), le **bilan** (Actif = Capitaux propres + Dettes) et le **compte de produits et charges** ; le plan de comptes normalisé (classes 1 à 8).
- **Fondements conceptuels** : l'objectif d'**image fidèle** du patrimoine, de la situation financière et des résultats, atteint par l'application des **sept principes** (continuité d'exploitation, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, importance significative).
- **Fonctions** : instrument de **preuve** (entre commerçants et en justice), d'**information** des tiers (associés, prêteurs, État) et de **gestion** (base de la comptabilité analytique, de l'analyse financière et de la fiscalité).`,
kp:["Cadre légal : loi 9-88 et CGNC (avis du CNC)","Technique de la partie double, bilan et CPC","Image fidèle et 7 principes comptables","Fonctions : preuve, information, gestion"]},
{pts:2, q:"2. En quoi consistent l'inventaire permanent et l'inventaire intermittent ?",
model:`- **Inventaire permanent** : les comptes de stocks enregistrent **en continu** toutes les entrées et sorties (en quantités et en valeur, avec une méthode de valorisation : CMUP, PEPS…). Le stock final **théorique** est connu à tout moment ; il est comparé au moins une fois par an au stock **physique** (inventaire extra-comptable) : les écarts sont des différences d'inventaire (manquants, boni). C'est la méthode de la comptabilité analytique.
- **Inventaire intermittent** : les achats sont comptabilisés en charges (classe 6) et les comptes de stocks ne sont mouvementés **qu'à la clôture** : annulation du stock initial et constatation du stock final déterminé par **inventaire physique**, la différence passant en **variation de stocks** (6114, 6124, 7131…). C'est la méthode normalement utilisée en comptabilité générale au Maroc.
- Différence essentielle : connaissance permanente du stock et détection des écarts dans le premier cas ; simplicité mais information seulement annuelle dans le second.`,
kp:["Permanent : suivi continu des entrées/sorties, stock théorique connu à tout moment","Comparaison au stock physique et différences d'inventaire","Intermittent : stocks connus à la clôture par inventaire physique","Constatation par les comptes de variation de stocks (comptabilité générale)"]},
{pts:2, q:"3. Valeurs retenues par le plan comptable lors de l'entrée des biens dans l'actif.",
model:`| Mode d'entrée | Valeur d'entrée retenue |
|---|---|
| Acquisition à titre onéreux | **Coût d'acquisition** : prix d'achat net de remises, rabais, ristournes et de TVA récupérable + frais accessoires |
| Production par l'entreprise | **Coût de production** : matières consommées + charges directes + quote-part des charges indirectes de production |
| Apport en nature | **Valeur d'apport** fixée dans l'acte d'apport |
| Acquisition à titre gratuit | **Valeur actuelle** (valeur vénale) à la date d'entrée |
| Échange | **Valeur actuelle** du bien reçu |
| Titres | Prix d'achat **hors frais** d'acquisition |
| Créances et dettes | **Valeur nominale** (au cours du jour pour les devises) |`,
kp:["Coût d'acquisition (achat)","Coût de production (production propre)","Valeur d'apport (apports en nature)","Valeur actuelle (titre gratuit, échange)","Titres hors frais ; créances à la valeur nominale"]},
{pts:2, q:"4. Obligations pesant sur les entreprises en matière comptable.",
model:`Selon la **loi 9-88** :
1. Tenir une **comptabilité conforme au CGNC** (normes, plan de comptes, principes).
2. Enregistrer les opérations **chronologiquement**, opération par opération, sur la base de **pièces justificatives** datées et conservées.
3. Tenir les **livres obligatoires** : livre-journal, grand-livre, livre d'inventaire ; le journal et le livre d'inventaire sont **cotés et paraphés** par le greffe du tribunal ; pas de blancs ni d'altérations.
4. Procéder au moins une fois par an à l'**inventaire** des éléments d'actif et de passif.
5. Établir à la clôture les **états de synthèse** (bilan, CPC, ESG, tableau de financement, ETIC — modèle normal ou simplifié selon le chiffre d'affaires) dans les **3 mois** suivant la clôture.
6. **Conserver** les documents comptables et pièces justificatives pendant **10 ans**.
7. Respecter les **principes comptables** et la **permanence des méthodes** ; décrire l'organisation comptable (manuel) lorsque nécessaire.
8. Pour les sociétés : **dépôt** des états de synthèse au greffe et soumission au contrôle du commissaire aux comptes lorsqu'il est obligatoire.`,
kp:["Comptabilité conforme au CGNC, enregistrement chronologique avec pièces","Livres obligatoires cotés et paraphés","Inventaire annuel et états de synthèse dans les 3 mois","Conservation 10 ans","Dépôt au greffe / contrôle du CAC pour les sociétés"]}
]},
{title:"CG — Cas 2 : Écarts de conversion (S.A. AL KAWTAR)", pts:6, pages:[329,329], th:["cg-devises","cg-inventaire"],
ctx:`État des créances et dettes à plus d'un an de la S.A. « AL KAWTAR » au 31/12/N :
| Noms | Montant à la facturation | En DH à l'enregistrement |
|---|---|---|
| Créances immobilisées | 12 000 francs suisses | 110 520 DH |
| Créances financières diverses | 17 000 euros | 189 550 DH |
| Fournisseurs d'immobilisations | 1 500 000 yens | 145 800 DH |
| Dettes de financement diverses | 18 000 $ | 156 600 DH |
Cours à l'inventaire au 31/12/N : 1 euro = 11,10 DH ; 1 franc suisse = 9,26 DH ; 1 $ = 8,50 DH ; 100 yens japonais = 9,79 DH.
**TAF** : calculer les écarts de conversion et passer les écritures comptables correspondantes.`,
questions:[
{pts:6, q:"Calculer les écarts de conversion et passer les écritures correspondantes.",
chk:[{l:"Total des écarts de conversion — actif (pertes latentes)",v:1900,u:"DH"},{l:"Total des écarts de conversion — passif (gains latents)",v:4200,u:"DH"},{l:"Provision pour pertes de change",v:1900,u:"DH"}],
model:`| Élément | Valeur historique | Valeur au 31/12 | Variation | Nature |
|---|---|---|---|---|
| Créances immobilisées (12 000 CHF) | 110 520 | 12 000 × 9,26 = 111 120 | créance + 600 | **gain latent** → ECP (1710) |
| Créances financières diverses (17 000 €) | 189 550 | 17 000 × 11,10 = 188 700 | créance − 850 | **perte latente** → ECA (2710) |
| Fournisseurs d'immobilisations (1 500 000 ¥) | 145 800 | 15 000 × 9,79 = 146 850 | dette + 1 050 | **perte latente** → ECA (3702) |
| Dettes de financement diverses (18 000 $) | 156 600 | 18 000 × 8,50 = 153 000 | dette − 3 600 | **gain latent** → ECP (1720) |
Les **gains latents** ne sont pas comptabilisés en produits (prudence) ; les **pertes latentes** sont couvertes par une **provision pour pertes de change** (devises différentes : pas de compensation).
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2487 | Créances immobilisées | 600 | |
| 1710 | Écarts de conversion — passif : augmentation des créances immobilisées | | 600 |
| 2710 | Écarts de conversion — actif : diminution des créances immobilisées | 850 | |
| 2488 | Créances financières diverses | | 850 |
| 3702 | Écarts de conversion — actif : augmentation des dettes circulantes | 1 050 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 1 050 |
| 1488 | Dettes de financement diverses | 3 600 | |
| 1720 | Écarts de conversion — passif : diminution des dettes de financement | | 3 600 |
| 6393 | Dotations aux provisions pour risques et charges financiers | 1 900 | |
| 1516 | Provisions pour pertes de change | | 1 900 |
(La provision relative à la dette fournisseur, circulante, peut être isolée en 4506 « Provisions pour pertes de change » si le risque est à moins d'un an.) Les écarts sont **contre-passés** à l'ouverture de l'exercice suivant.`,
kp:["Calcul des 4 valeurs au cours de clôture (yen pour 100 unités)","Identification gains / pertes latents selon créance ou dette","Gains latents : ECP (1710, 1720) sans produit","Pertes latentes : ECA (2710, 3702)","Provision pour pertes de change de 1 900, pas de compensation entre devises"]}
]},
{title:"CG — Cas 3 : Augmentation de capital en numéraire", pts:6, pages:[330,330], th:["cg-capital"],
ctx:`Le 30 avril, les actionnaires d'une société anonyme réunis en assemblée générale extraordinaire ont approuvé à l'unanimité les mesures financières suivantes, proposées par le conseil d'administration : le capital social est augmenté de **640 000 DH à 800 000 DH** par émission de **800 actions nouvelles à 250 DH** chacune, à libérer en numéraire et **réservées aux anciens actionnaires à raison d'une action nouvelle pour quatre anciennes**. La valeur nominale des actions est de **200 DH** chacune.
**TAF** : passer les écritures comptables relatives à l'augmentation de capital.`,
questions:[
{pts:6, q:"Passer les écritures comptables relatives à l'augmentation de capital.",
chk:[{l:"Prime d'émission totale",v:40000,u:"DH"},{l:"Montant total des apports en numéraire",v:200000,u:"DH"}],
model:`#### Analyse
- Actions anciennes : 640 000 / 200 = **3 200** ; actions nouvelles : 800 (parité 1 pour 4 : 3 200 / 4 = 800 ✓).
- Augmentation du capital : 800 × 200 = **160 000** ; prime d'émission : 800 × (250 − 200) = **40 000** ; apport total : 800 × 250 = **200 000**.
- En SA, à la souscription, il faut libérer au moins **le quart du nominal** et **la totalité de la prime** ; l'énoncé ne précisant pas, on retient une **libération intégrale**.
#### Écritures
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **30/04** | **Souscription (promesses d'apport)** | | |
| 3461 | Associés — comptes d'apport en société | 200 000 | |
| 1111 | Capital social | | 160 000 |
| 1121 | Primes d'émission | | 40 000 |
| **Versement** | **Fonds déposés sur un compte bloqué** | | |
| 5141 | Banques (compte bloqué) | 200 000 | |
| 3461 | Associés — comptes d'apport en société | | 200 000 |
Les fonds deviennent disponibles après l'établissement du certificat du dépositaire et l'accomplissement des formalités (dépôt au greffe, modification des statuts). Les éventuels frais d'augmentation de capital s'imputent sur la prime d'émission ou sont portés en 2113 « Frais d'augmentation du capital ».
#### Variante : libération minimale (1/4 du nominal + prime)
À la souscription : 3461 pour 80 000 (800 × (50 + 50)) et 1119 « Actionnaires, capital souscrit non appelé » pour 120 000, crédit 1111 160 000 et 1121 40 000 ; versement de 80 000 ; les appels ultérieurs du solde passent par 3462 « Actionnaires — capital souscrit et appelé non versé ».`,
kp:["Nombre d'actions anciennes 3 200 et respect de la parité 1 pour 4","Capital + 160 000 et prime d'émission 40 000","Règle de libération (1/4 du nominal + totalité de la prime)","Écriture de souscription 3461 / 1111 et 1121","Versement 5141 / 3461 (compte bloqué)"]}
]},
{title:"CA — Cas 1 : MULTITEX (prestations réciproques, CMUP, résultats)", pts:10, pages:[331,331], th:["ca-couts","ca-stocks"],
ctx:`Une entreprise fabrique des costumes pour le cinéma : un blouson homme (**H**) et un blouson femme (**F**), à partir d'un même tissu. L'atelier utilise **3 mètres de tissu et 1,5 heure de MOD** pour un blouson F, et **2 mètres de tissu et 1 heure de MOD** pour un blouson H. L'heure de MOD coûte **57 DH**.
Au début de la période : 36 750 mètres de tissu à 45 DH le mètre ; 4 250 blousons H et 9 651 blousons F en stock à 170 DH et 240,32 DH le blouson. Achats de la période : 147 000 mètres de tissu à 44 DH le mètre.
**Répartition primaire et secondaire des charges indirectes**
| Éléments | Administration | Manutention | Approvisionnement | Atelier | Distribution |
|---|---|---|---|---|---|
| T.R.P. | 11 750,00 | 63 500,00 | 175 000,00 | 888 875,00 | 413 000,00 |
| Administration | ? | 10 % | 15 % | 50 % | 25 % |
| Manutention | 5 % | ? | 10 % | 75 % | 10 % |
Unités d'œuvre : approvisionnement : le mètre de tissu acheté ; atelier : le blouson produit ; distribution : le blouson vendu. Les stocks sont évalués au CMUP.
Production : 17 000 blousons H et 32 170 blousons F. Ventes : 19 000 H à 250 DH et 33 000 F à 320 DH.
**TAF** : compléter le tableau de répartition des charges indirectes (3 points) ; calculer les résultats analytiques pour H et F (7 points).`,
questions:[
{pts:3, q:"Compléter le tableau de répartition des charges indirectes.",
chk:[{l:"Total du centre Administration après prestations réciproques",v:15000,u:"DH"},{l:"Total du centre Manutention",v:65000,u:"DH"},{l:"Total secondaire de l'atelier",v:945125,u:"DH"}],
model:`**Prestations réciproques** : A = 11 750 + 0,05 M et M = 63 500 + 0,10 A
⇒ A = 11 750 + 0,05 (63 500 + 0,10 A) ⇒ 0,995 A = 14 925 ⇒ **A = 15 000** ; **M = 65 000**.
| | Administration | Manutention | Approvisionnement | Atelier | Distribution |
|---|---|---|---|---|---|
| Totaux primaires | 11 750 | 63 500 | 175 000 | 888 875 | 413 000 |
| Administration | − 15 000 | 1 500 | 2 250 | 7 500 | 3 750 |
| Manutention | 3 250 | − 65 000 | 6 500 | 48 750 | 6 500 |
| **Totaux secondaires** | **0** | **0** | **183 750** | **945 125** | **423 250** |
| Nature de l'UO | | | mètre acheté | blouson produit | blouson vendu |
| Nombre d'UO | | | 147 000 | 49 170 | 52 000 |
| **Coût de l'UO** | | | **1,25** | **19,22** | **8,14** |`,
kp:["Système des prestations réciproques (A = 15 000 ; M = 65 000)","Répartition secondaire correcte (totaux 183 750 / 945 125 / 423 250)","Nombre d'UO et coûts d'UO 1,25 ; 19,22 ; 8,14"]},
{pts:7, q:"Calculer les résultats analytiques pour H et F.",
chk:[{l:"CMUP du tissu",v:45.2,u:"DH/m",tol:0.01},{l:"Coût de production unitaire de F",v:240.32,u:"DH",tol:0.02},{l:"Résultat analytique de H",v:1416700,u:"DH",tol:200},{l:"Résultat analytique de F",v:2360800,u:"DH",tol:200}],
model:`#### Coût d'achat et stock de tissu
Coût d'achat = 147 000 × 44 + 183 750 = 6 651 750 (45,25 DH/m).
CMUP = (36 750 × 45 + 6 651 750) / (36 750 + 147 000) = 8 305 500 / 183 750 = **45,20 DH/m**.
Consommations : H = 17 000 × 2 = 34 000 m ; F = 32 170 × 3 = 96 510 m.
#### Coûts de production
| | H (17 000) | F (32 170) |
|---|---|---|
| Tissu (× 45,20) | 1 536 800 | 4 362 252 |
| MOD (× 57) | 17 000 h → 969 000 | 48 255 h → 2 750 535 |
| Atelier (× 19,2216) | 326 767 | 618 358 |
| **Coût de production** | **2 832 567** | **7 731 145** |
| **Coût unitaire** | **166,62** | **==240,32==** |
(On retrouve pour F le coût du stock initial : 240,32.)
#### Stocks de produits finis (CMUP)
- H : (4 250 × 170 + 2 832 567) / 21 250 = **167,30**
- F : (9 651 × 240,32 + 7 731 145) / 41 821 = **240,32**
#### Coûts de revient et résultats
| | H | F |
|---|---|---|
| Coût de production des produits vendus | 19 000 × 167,30 = 3 178 650 | 33 000 × 240,32 = 7 930 560 |
| Distribution (× 8,1394) | 154 649 | 268 601 |
| **Coût de revient** | **3 333 299** | **8 199 161** |
| Chiffre d'affaires | 19 000 × 250 = 4 750 000 | 33 000 × 320 = 10 560 000 |
| **Résultat analytique** | **≈ ==1 416 700==** | **≈ ==2 360 800==** |
Les deux produits sont rentables (marge de 29,8 % pour H et 22,4 % pour F).`,
kp:["Coût d'achat du tissu (147 000 × 44 + 183 750) et CMUP 45,20","Consommations de tissu et de MOD par produit","Coûts de production H ≈ 166,62 et F ≈ 240,32","CMUP des produits finis (H 167,30 ; F 240,32)","Coûts de revient avec distribution (8,14 par blouson vendu)","Résultats ≈ 1 416 700 (H) et ≈ 2 360 800 (F)"]}
]},
{title:"CA — Cas 2 : GOFFER (seuil de rentabilité et changement de structure)", pts:5, pages:[332,332], th:["ca-variable","g-rentabilite"],
ctx:`L'entreprise « Goffer » fabrique et vend exclusivement des articles K. Actuellement, le **taux de marge sur coût variable est de 30 %** et les **charges fixes de 198 000 DH**. Le **1er juin**, l'acquisition de nouvelles machines portera les **charges fixes à 528 000 DH** sans modification du taux de MCV. Ces investissements permettront un **chiffre d'affaires annuel de 2 640 000 DH**.
- Jusqu'au 1er juin : CA = 2 640 000 × 5/12 = 1 100 000 DH.
- Après le 1er juin : l'augmentation des charges fixes ne permet plus la rentabilité. Le chiffre d'affaires passe de 1 100 000 DH au 1er juin à 2 640 000 DH au 31 décembre.
1. Calculer le SR1 (avec les éléments donnés jusqu'au 1er juin) — 3 pts. 2. Calculer le SR2 (avec les modifications apparues après le 1er juin) — 2 pts.`,
questions:[
{pts:3, q:"1. SR1 (structure en vigueur jusqu'au 1er juin) et date d'atteinte.",
chk:[{l:"SR1",v:660000,u:"DH"}],
model:`SR1 = charges fixes / taux de MCV = 198 000 / 0,30 = **==660 000 DH==**.
CA mensuel : 2 640 000 / 12 = 220 000 DH ⇒ SR1 atteint après 660 000 / 220 000 = **3 mois**, soit le **31 mars**. Au 1er juin, l'entreprise a réalisé 1 100 000 DH de CA : elle est largement au-dessus de SR1 (marge de sécurité 440 000 DH).`,
kp:["Formule SR = CF / taux de MCV","SR1 = 660 000","Date : 3 mois de CA (220 000/mois) → 31 mars"]},
{pts:2, q:"2. SR2 (nouvelle structure après le 1er juin) et date d'atteinte.",
chk:[{l:"SR2",v:1760000,u:"DH"}],
model:`Avec la nouvelle structure : SR2 = 528 000 / 0,30 = **==1 760 000 DH==**.
Au 1er juin, le CA cumulé (1 100 000) est inférieur à SR2 : l'entreprise « repasse » sous son seuil — c'est le sens de « l'augmentation des charges fixes ne permet plus la rentabilité ». Il lui faut encore 1 760 000 − 1 100 000 = 660 000 DH de CA, soit 3 mois à 220 000 DH : SR2 est atteint le **31 août**.
Le CA annuel (2 640 000) restant supérieur à SR2, l'exercice reste bénéficiaire : marge de sécurité 880 000 DH (indice de sécurité 33 %).
> Approche par les charges fixes réellement supportées sur l'année (198 000 × 5/12 + 528 000 × 7/12 = 390 500) : seuil annuel 1 301 667 DH, atteint vers le 28 juin.`,
kp:["SR2 = 528 000 / 0,30 = 1 760 000","Raisonnement en CA cumulé : 660 000 de CA supplémentaires après le 1er juin","Date d'atteinte : 31 août","Commentaire : rentabilité annuelle maintenue (marge de sécurité)"]}
]},
{title:"CA — Cas 3 : SHEMS & Cie (charges incorporables, supplétives, non incorporables)", pts:5, pages:[332,332], th:["ca-couts","ca-concordance"],
ctx:`En vue de calculer le coût de revient de septembre N, la SNC « SHEMS et Compagnie » fournit :
- Les charges « dépensables » comptabilisées en septembre dans les journaux auxiliaires : **348 000 DH**.
- Un rappel de rémunération a été enregistré en septembre et concerne la fabrication d'août : **18 000 DH**.
- Un contrat d'entretien du matériel informatique a été enregistré en septembre (période couverte du 01/09/N au 28/02/N+1) : **3 600 DH**.
Les amortissements concernent : des immobilisations amorties linéairement en 10 ans, acquises pour **160 000 DH** ; des frais d'augmentation de capital amortissables en 3 ans : **12 000 DH** ; des immobilisations soumises à l'amortissement **dégressif** (justifié sur le plan économique), acquises début janvier N-1 (durée de vie 5 ans) : **500 000 DH**.
Sachant que : aucun investissement n'a été réalisé au cours de N : seul un véhicule de transport acquis pour 88 000 DH était complètement amorti à la fin de N-1 ; les capitaux propres s'élèvent à **1 200 000 DH** et le coût du capital est de l'ordre de **10 % l'an** ; le gérant non salarié pourrait espérer gagner mensuellement **15 000 DH** pour un travail comparable.
**Déterminer les charges incorporées dans le calcul du coût de revient du mois de septembre (5 points).**`,
questions:[
{pts:5, q:"Déterminer les charges incorporées dans le coût de revient de septembre.",
chk:[{l:"Charges incorporées de septembre",v:363333.33,u:"DH",tol:2}],
model:`| Élément | Calcul | Montant |
|---|---|---|
| Charges dépensables de septembre | | 348 000,00 |
| − Rappel de rémunération relatif à août | charge d'une autre période | − 18 000,00 |
| − Contrat d'entretien : part de N+1 et des mois suivants | 3 600 × 5/6 | − 3 000,00 |
| **Charges dépensables incorporables** | | **327 000,00** |
| + Amortissement linéaire | 160 000 / 10 / 12 | 1 333,33 |
| + Amortissement dégressif (taux 40 %) : N-1 = 200 000 ; N = 300 000 × 40 % = 120 000 | 120 000 / 12 | 10 000,00 |
| Frais d'augmentation de capital (non-valeur) | **non incorporables** | 0 |
| Véhicule totalement amorti | aucune dotation | 0 |
| **Charges calculées incorporées** | | **11 333,33** |
| + Rémunération des capitaux propres | 1 200 000 × 10 % / 12 | 10 000,00 |
| + Rémunération du gérant non salarié | | 15 000,00 |
| **Charges supplétives** | | **25 000,00** |
| **Total des charges incorporées** | | **==363 333,33==** |
Justifications : les charges d'autres périodes et la part du contrat d'entretien qui ne concerne pas septembre sont exclues (principe de rattachement à la période) ; l'amortissement des frais d'établissement est une charge non incorporable ; le dégressif, justifié économiquement, est retenu ; dans une SNC, le travail du gérant associé et les capitaux propres ne sont pas rémunérés en comptabilité générale : on les ajoute en charges supplétives pour obtenir un coût comparable à celui d'une entreprise ordinaire.`,
kp:["Exclusion du rappel d'août (18 000)","Contrat d'entretien : seulement 1/6 pour septembre (exclusion de 3 000)","Amortissement linéaire mensuel 1 333,33","Dégressif 40 % : 120 000 en N → 10 000/mois","Amortissement des frais d'augmentation de capital non incorporable","Charges supplétives : capitaux propres 10 000 et gérant 15 000","Total 363 333,33"]}
]}
]});

EXAMS.push({
id:"droit-2021", subject:"droit", year:2021, session:"8-9 janvier 2022", title:"Droit des affaires et droit fiscal", date:"Samedi 8 janvier 2022", duration:180, pages:[333,337],
note:"Droit des affaires (1 h 30) et droit fiscal (1 h 30) — deux copies séparées",
sections:[
{title:"Droit des affaires — Questions de cours", pts:10, pages:[334,334], th:["da-organes","da-cac","da-capital","da-transfo"],
ctx:`1. Quel est l'intérêt pour la société et pour les tiers de faire appel à un commissaire aux apports lors d'une augmentation de capital par apports en nature ? (1 pt)
2. Quelles sont les principales attributions d'un comité d'audit prévues par la loi sur la SA ? (1 pt)
3. Une question qui n'a pas été insérée dans l'ordre du jour peut-elle être traitée par l'assemblée générale ordinaire, et dans quels cas ? (1 pt)
4. Quelle est la conséquence pour la société quand la situation nette devient inférieure au quart du capital social ? (1 pt)
5. Quel est l'objectif recherché à travers un pacte d'actionnaires ? (1 pt)
6. Citez les principales conditions requises pour être administrateur d'une société anonyme. (1 pt)
7. Quelles sont les principales attributions d'un conseil de surveillance ? (2 pts)
8. Peut-on révoquer un commissaire aux comptes et dans quels cas ? (1 pt)
9. Quelle est la principale caractéristique d'une société de fait ? (1 pt)`,
questions:[
{pts:1, q:"1. Intérêt du commissaire aux apports lors d'une augmentation de capital par apports en nature.",
model:`- **Pour les tiers (créanciers)** : le capital est leur **gage** ; l'évaluation indépendante évite un capital **fictif** (surévaluation des biens apportés).
- **Pour la société et les autres actionnaires** : garantir l'**égalité** entre apporteurs en nature et souscripteurs en numéraire et éviter la **dilution** injustifiée.
- Le commissaire apprécie **sous sa responsabilité** la valeur des apports et les avantages particuliers ; son rapport, déposé au siège et au greffe, éclaire le vote de l'AGE, qui ne peut retenir une valeur supérieure sans engager la responsabilité des intéressés.`,
kp:["Protection des créanciers : capital réel (gage)","Égalité entre actionnaires, éviter la dilution","Évaluation indépendante sous responsabilité, rapport à l'AGE"]},
{pts:1, q:"2. Principales attributions du comité d'audit.",
model:`Obligatoire dans les sociétés faisant **appel public à l'épargne**, il agit sous la responsabilité du conseil d'administration (ou de surveillance) et assure le **suivi** :
- du processus d'élaboration de l'**information financière** ;
- de l'efficacité des systèmes de **contrôle interne**, d'**audit interne** et de **gestion des risques** ;
- du **contrôle légal** des comptes annuels et consolidés par les commissaires aux comptes ;
- de l'**indépendance** des commissaires aux comptes ; il émet une **recommandation** sur leur désignation.
Il **rend compte** régulièrement au conseil et l'informe sans délai de toute difficulté.`,
kp:["Suivi de l'information financière","Contrôle interne et gestion des risques","Suivi du contrôle légal et de l'indépendance du CAC (recommandation sur sa nomination)","Compte rendu au conseil"]},
{pts:1, q:"3. Une question non inscrite à l'ordre du jour peut-elle être traitée par l'AGO ?",
model:`**Principe de la fixité de l'ordre du jour** : l'assemblée ne peut délibérer sur une question qui n'est pas inscrite à son ordre du jour (protection des actionnaires absents) ; la délibération serait annulable.
**Exception** : l'assemblée peut **en toutes circonstances révoquer un ou plusieurs administrateurs** (ou membres du conseil de surveillance) et **pourvoir à leur remplacement**, même si la question ne figure pas à l'ordre du jour (incident de séance). Les « questions diverses » ne peuvent donner lieu à aucun vote.`,
kp:["Principe : pas de délibération hors ordre du jour","Exception : révocation (et remplacement) des administrateurs à tout moment"]},
{pts:1, q:"4. Conséquence lorsque la situation nette devient inférieure au quart du capital social.",
model:`- Dans les **3 mois** suivant l'approbation des comptes ayant fait apparaître ces pertes, le conseil d'administration (ou le directoire) doit **convoquer l'AGE** pour décider s'il y a lieu à **dissolution anticipée**.
- Si la dissolution n'est pas prononcée, la société doit, au plus tard à la clôture du **deuxième exercice suivant**, **réduire son capital** d'un montant au moins égal aux pertes non imputées sur les réserves, sauf si les capitaux propres ont été **reconstitués** à au moins le quart du capital.
- La décision est **publiée** ; à défaut de réunion de l'AGE ou de régularisation dans les délais, **tout intéressé** peut demander au tribunal la **dissolution** de la société.`,
kp:["Convocation de l'AGE dans les 3 mois pour statuer sur la dissolution","À défaut de dissolution : réduction du capital ou reconstitution avant la fin du 2e exercice suivant","Publicité ; dissolution judiciaire à défaut"]},
{pts:1, q:"5. Objectif d'un pacte d'actionnaires.",
model:`Le pacte est une **convention extra-statutaire**, souvent **confidentielle**, entre tout ou partie des actionnaires, qui organise leurs relations au-delà des statuts :
- **Stabilité et contrôle du capital** : préemption, agrément, inaliénabilité temporaire, plafonnement des participations.
- **Gouvernance** : répartition des sièges au conseil, majorités renforcées, droits de veto, information privilégiée.
- **Sortie et liquidité** : clauses de sortie conjointe (*tag along*), de sortie forcée (*drag along*), promesses d'achat ou de vente, clause de rendez-vous.
- **Prévention des conflits** : non-concurrence, exclusivité, résolution des blocages.
Il n'engage que ses signataires (effet relatif) : sa violation se résout en principe par des dommages-intérêts.`,
kp:["Convention extra-statutaire, souple et confidentielle","Stabilité de l'actionnariat (préemption, agrément, inaliénabilité)","Gouvernance et contrôle (sièges, veto)","Organisation de la sortie (tag/drag along, promesses)"]},
{pts:1, q:"6. Principales conditions pour être administrateur d'une SA.",
model:`- Être une **personne physique** capable, ou une **personne morale** (qui désigne alors un **représentant permanent** soumis aux mêmes conditions et responsabilités).
- Ne pas être frappé d'une **interdiction, incompatibilité ou déchéance** (condamnations pour infractions économiques, déchéance commerciale, fonctions incompatibles).
- Respecter la **limite de cumul** des mandats d'administrateur dans des SA ayant leur siège au Maroc et, le cas échéant, la **limite d'âge** prévue par les statuts.
- Être **actionnaire** si les statuts l'exigent (actions de garantie).
- Les administrateurs **salariés** ne peuvent dépasser une fraction du conseil (1/3) ; le conseil compte 3 à 12 membres (15 pour les sociétés cotées).
- Nomination par l'assemblée générale (ou les statuts pour les premiers), pour une durée limitée (6 ans au plus ; 3 ans pour les premiers nommés par les statuts).`,
kp:["Personne physique capable ou personne morale avec représentant permanent","Absence d'incompatibilité, d'interdiction ou de déchéance","Limites de cumul des mandats et d'âge","Conditions statutaires (actions de garantie), limite des administrateurs salariés"]},
{pts:2, q:"7. Principales attributions d'un conseil de surveillance.",
model:`Dans la SA à directoire, le conseil de surveillance est un **organe de contrôle**, pas de gestion :
- **Nomination** des membres du **directoire** et désignation de son **président** ; fixation de leur rémunération (et, selon les statuts, révocation ou proposition de révocation à l'AG).
- **Contrôle permanent** de la gestion du directoire : il peut opérer à toute époque les **vérifications** et contrôles qu'il juge opportuns et se faire communiquer tout document.
- Réception d'un **rapport trimestriel** du directoire ; examen des **comptes annuels** arrêtés par le directoire.
- **Autorisations préalables** imposées par la loi ou les statuts : cession d'immeubles, cession de participations, constitution de sûretés, cautions, avals et garanties, **conventions réglementées**.
- Présentation à l'assemblée de ses **observations** sur le rapport du directoire et sur les comptes.
- Convocation de l'assemblée en cas de besoin.
Il ne peut pas s'immiscer dans la gestion.`,
kp:["Organe de contrôle (pas de gestion)","Nomination du directoire et de son président","Contrôle permanent, vérifications, rapport trimestriel","Autorisations préalables (sûretés, cessions, conventions réglementées)","Observations à l'AG sur le rapport et les comptes"]},
{pts:1, q:"8. Peut-on révoquer un commissaire aux comptes et dans quels cas ?",
model:`**Oui, mais pas librement** (garantie d'indépendance) : le CAC ne peut être révoqué par l'assemblée **ad nutum**.
- **Relèvement de fonctions** par le **tribunal**, en cas de **faute** ou d'**empêchement**, à la demande du conseil d'administration (ou du directoire), d'un ou plusieurs actionnaires représentant au moins **10 % du capital**, de l'assemblée générale ou du ministère public (et de l'AMMC pour les sociétés faisant appel public à l'épargne).
- Distinct de la **récusation** pour **juste motif** demandée au tribunal peu après la nomination.`,
kp:["Pas de révocation ad nutum par l'AG","Relèvement par le tribunal pour faute ou empêchement","Titulaires de l'action (conseil, 10 % du capital, AG, ministère public, AMMC)"]},
{pts:1, q:"9. Principale caractéristique d'une société de fait.",
model:`Une société de fait est un groupement qui **fonctionne comme une société** (apports, partage des bénéfices et des pertes, *affectio societatis*) mais **sans avoir été régulièrement constitué ou immatriculé** (ou dont la constitution a été annulée). Sa caractéristique principale : **elle n'a pas la personnalité morale**. Les associés sont tenus **indéfiniment et solidairement** des dettes envers les tiers (comme dans une SNC), et chacun peut à tout moment demander la liquidation, qui suit les règles du contrat de société.`,
kp:["Groupement agissant comme une société sans constitution régulière","Pas de personnalité morale","Responsabilité indéfinie et solidaire des associés"]}
]},
{title:"Droit des affaires — Cas pratique : convocation et visioconférence", pts:10, pages:[334,334], th:["da-organes"],
ctx:`M. A vient de recevoir une convocation à l'assemblée générale ordinaire de la SA dont il est associé. La date de la réunion est fixée dans **6 jours**. Ce délai lui paraissant trop court, il se demande s'il est envisageable de **faire annuler les résolutions** qui seront adoptées, car il estime que l'assemblée a été irrégulièrement convoquée. M. A s'interroge également sur la possibilité de **participer à l'assemblée par des moyens de visioconférence**. Qu'en pensez-vous ? Vous réfléchirez aux problèmes juridiques soulevés et essayerez d'y apporter une réponse fondée sur des arguments juridiques.`,
questions:[
{pts:6, q:"Problème 1 : l'assemblée convoquée 6 jours à l'avance est-elle régulière ? M. A peut-il faire annuler les résolutions ?",
model:`**Faits** : convocation reçue 6 jours avant une AGO de SA.
**Problème** : le délai de convocation est-il respecté ? Quelle est la sanction d'une convocation irrégulière ?
**Règles** (loi 17-95)
- L'assemblée est convoquée par un avis inséré dans un **journal d'annonces légales** (et, pour les sociétés faisant appel public à l'épargne, au Bulletin officiel), ou par lettre recommandée si les statuts le prévoient. Le délai entre la convocation et la réunion est d'au moins **15 jours sur première convocation** (plus long pour les sociétés faisant appel public à l'épargne) et d'un délai plus court sur **seconde convocation** (lorsque le quorum n'a pas été atteint).
- **Sanction** : toute assemblée **irrégulièrement convoquée peut être annulée** ; la nullité est **facultative** (le juge apprécie). Toutefois, l'action en nullité **n'est pas recevable lorsque tous les actionnaires étaient présents ou représentés**.
**Application**
- S'il s'agit d'une **première convocation**, le délai de 6 jours est **insuffisant** : l'assemblée est irrégulièrement convoquée.
- S'il s'agit d'une **seconde convocation** (la première AGO n'ayant pas réuni le quorum), il faut vérifier le délai minimal applicable et le respect des mentions obligatoires.
**Conclusion** : M. A peut agir en **nullité des délibérations** devant le tribunal de commerce, à condition que tous les actionnaires ne soient pas présents ou représentés : il a intérêt à **ne pas participer** (ou à faire consigner ses réserves au procès-verbal), car sa présence avec l'ensemble des actionnaires couvrirait l'irrégularité. Il peut aussi demander le report de l'assemblée au conseil.`,
kp:["Qualification : convocation d'une AGO de SA, délai de 6 jours","Règle : délai minimal de 15 jours sur 1re convocation (délai plus court sur 2e convocation)","Mode de convocation (journal d'annonces légales / lettre recommandée)","Sanction : nullité facultative de l'assemblée irrégulièrement convoquée","Irrecevabilité si tous les actionnaires sont présents ou représentés","Conseil pratique : ne pas couvrir l'irrégularité par sa présence, émettre des réserves"]},
{pts:4, q:"Problème 2 : M. A peut-il participer à l'assemblée par visioconférence ?",
model:`**Règle** : depuis la réforme de la loi 17-95 (loi 20-19), les **statuts** peuvent prévoir que sont **réputés présents**, pour le calcul du **quorum** et de la **majorité**, les actionnaires qui participent à l'assemblée par **visioconférence** ou par des moyens de télécommunication permettant leur **identification** et garantissant leur **participation effective** (retransmission continue et simultanée des débats). Des dispositions exceptionnelles l'ont aussi permis pendant la crise sanitaire.
**Application** : M. A doit vérifier les **statuts** (et l'avis de convocation, qui précise les modalités techniques). Si les statuts le prévoient, il peut participer et voter à distance ; sinon, il peut **voter par correspondance** ou se faire **représenter** par un mandataire (autre actionnaire, conjoint) selon les règles statutaires.
**Conclusion** : possible si une clause statutaire le prévoit et si le dispositif technique garantit l'identification et la participation effective ; à défaut, pouvoir ou vote par correspondance.`,
kp:["Possibilité prévue par la loi si les statuts le prévoient","Conditions : identification et participation effective","Réputé présent pour quorum et majorité","Alternatives : vote par correspondance, représentation"]}
]},
{title:"Droit fiscal — Cas CIMATEX : TVA du 4e trimestre 2020, résultat fiscal, CM, IS et acomptes", pts:20, pages:[336,337], th:["df-tva","df-is"],
ctx:`Au cours du 4e trimestre 2020, la société « CIMATEX » (textile), qui adopte le **régime des débits** en matière de TVA, a effectué les opérations suivantes. (*) : date d'émission (effet) ; de réception (espèces) ; d'encaissement (chèque).
**A. Dépenses et charges diverses**
| Nature | Montant TTC | Date facture | Date inscription | Règlement | Mode | Date (*) | Échéance |
|---|---|---|---|---|---|---|---|
| Achat matière première 1 | 120 000 | 10-11 | 20-11 | 20 000 | Effet | 31-10 | 30-11 |
| Achat matière première 2 | 30 000 | 05-10 | 05-10 | 30 000 | Effet | 05-11 | 10-12 |
| Achat matière première 3 | 50 000 | 05-12 | 10-12 | 20 000 / 30 000 | Effet / Chèque | 30-11 / 20-10 | 31-12 |
| Achat d'une voiture | 180 000 | 30-11 | 10-12 | 170 000 / 10 000 | Effet / Chèque | 20-12 / 10-01-N+1 | 10-01-N+1 |
| Gasoil pour voiture | 9 500 | 31-12 | 31-12 | 9 500 | Espèces | 30-11 | |
| Transport du personnel | 9 000 | 30-11 | 10-12 | 9 000 | Espèces | 30-11 | |
| Note de téléphone | 7 000 | 30-11 | 10-12 | 7 000 | Chèque | 20-12 | |
| Achat d'une LOGAN (pour les courses de la société) | 100 000 | 10-11 | 20-11 | 50 000 / 50 000 | Effet / Chèque | 20-11 / 20-12 | 31-12 |
| Note de restaurant | 5 000 | 05-10 | 20-11 | 5 000 | Espèces | 20-11 | |
| Note d'électricité | 6 000 | 20-10 | 10-11 | 2 000 / 2 000 / 2 000 | Chèque / Chèque / Espèces | 20-11 / 20-12 / 20-10 | |
| Loyer | 30 000 | 30-12 | 30-12 | 3 × 10 000 | Chèque | 30-10 / 30-11 / 31-12 | |
| Cadeaux aux clients (5 unités) | 10 000 | 10-11 | 10-11 | 10 000 | Espèces | 30-11 | |
| Mobilier pour villa du DG | 40 000 | 01-10 | 01-11 | 30 000 / 10 000 | Chèque / Espèces | 10-10 / 10-11 | |
| Dividendes aux associés | 30 000 | 30-11 | 30-11 | 30 000 | Inscription en comptes courants | | |
**B. Chiffre d'affaires et produits divers**
| Nature | Montant TTC | Date facture | Date inscription | Règlement | Mode | Date (*) | Échéance |
|---|---|---|---|---|---|---|---|
| Travaux à façon sur tissu local | 100 000 | 05-11 | 20-10 | 80 000 / 20 000 | Effet / Espèces | 20-11 / 20-12 | 31-12 |
| Travaux à façon pour le marché local sur tissu importé | 80 000 | 20-11 | 20-11 | 80 000 | Chèque | 30-10 | |
| Travaux à façon sur tissu importé en admission temporaire | 200 000 | 05-12 | 31-12 | 200 000 | Effet | 05-12 | 10-01-N+1 |
| Ventes locales de déchets | 20 000 | 20-11 | 10-12 | 20 000 | Espèces | 20-12 | |
| Revenus de titres de participation | 20 000 | 30-10 | 10-11 | 20 000 | Inscription en comptes courants | | |
| Export de chemises | 220 000 | 20-11 | 30-11 | 220 000 | Virement | 10-12 | |
Par ailleurs, le DG et le directeur financier s'occupent en parallèle de la gestion d'une autre société ; ces prestations font l'objet d'une facturation régulière (**30 000 HT par mois**).
**Informations complémentaires** : 1. L'exercice coïncide avec l'année civile. 2. Le résultat de la période du 01/01/N au 31/12/N fait ressortir un **déficit de − 242 380 DH** avec un chiffre d'affaires de **480 370 DH** réalisé à fin septembre 2020. 3. Au 31/12/N, un stock de MP1 s'avère défectueux : quantités représentant 40 % de la facture fournisseur. 4. Résultats fiscaux déclarés :
| Année | Résultat fiscal | Part amortissement | dont amortissement en non-valeur |
|---|---|---|---|
| N-1 | − 125 000 | − 75 000 | − 15 000 |
| N-2 | − 232 600 | − 110 200 | − 24 200 |
| N-3 | + 142 900 | | |
| N-4 | + 96 800 | | |
5. Un avis reçu du Trésor le 01-11-N fait état d'un remboursement de TVA au titre de N-1 : 50 000 DH. Sur ce montant, la perception a procédé à une compensation avec un arriéré : TVA (12/N-2) : principal 8 000, pénalité 2 000, intérêts de retard 1 800, intérêts de recouvrement 400 ; patente (N) : principal 5 000, intérêts de recouvrement 100. 6. La société adopte le régime des débits en matière de TVA.
**Travail à faire** : déterminer la TVA due ou le crédit de TVA du 4e trimestre 2020 (12 points) ; calculer le résultat fiscal N (5 points) ; calculer les acomptes provisionnels dus au titre de N+1 (1 point) ; sachant que la société a toujours réalisé un résultat courant hors amortissement positif, calculer la cotisation minimale et l'IS (2 points).`,
questions:[
{pts:12, q:"Déterminer la TVA due (ou le crédit de TVA) du 4e trimestre 2020.",
chk:[{l:"TVA collectée du trimestre",v:51333.33,u:"DH",tol:5},{l:"TVA déductible du trimestre",v:18570.18,u:"DH",tol:10},{l:"TVA due du trimestre",v:32763.15,u:"DH",tol:15}],
model:`**Principes** : régime des **débits** → la TVA collectée est exigible à la **facturation** (ou à l'inscription en compte) ; le droit à **déduction** naît au mois du **paiement** (effet : à l'**échéance** ; chèque : à l'encaissement ; espèces : à la date du paiement), à condition que la dépense soit admise et, au-delà de 5 000 DH, réglée autrement qu'en espèces. Les opérations exonérées le sont avec droit à déduction : prorata de 100 %.
#### TVA collectée (factures du trimestre)
| Opération | Traitement | TVA |
|---|---|---|
| Façon sur tissu local (100 000 TTC) | Taxable 20 % | 16 666,67 |
| Façon pour le marché local sur tissu importé (80 000) | Taxable 20 % | 13 333,33 |
| Façon sur tissu en admission temporaire (200 000) | Régime suspensif / destiné à l'export : exonéré avec droit à déduction | 0 |
| Ventes locales de déchets (20 000) | Taxable 20 % | 3 333,33 |
| Revenus de titres de participation | Hors champ | 0 |
| Export de chemises | Exonéré avec droit à déduction | 0 |
| Prestations de gestion : 3 mois × 30 000 HT | Taxable 20 % | 18 000,00 |
| **Total** | | **51 333,33** |
#### TVA déductible (paiements du trimestre)
| Dépense | Traitement | TVA |
|---|---|---|
| MP1 : seuls 20 000 payés (effet échu le 30-11) | 20 000 × 20/120 | 3 333,33 |
| MP2 : effet échu le 10-12 | 30 000 × 20/120 | 5 000,00 |
| MP3 : chèque 20-10 (avance) + effet échu le 31-12 | 50 000 × 20/120 | 8 333,33 |
| Voiture (tourisme) | Exclue ; de plus payée en N+1 | 0 |
| Gasoil pour la voiture (espèces 9 500) | Exclu (véhicule de tourisme, espèces ≥ 5 000) | 0 |
| Transport du personnel (espèces 9 000) | Paiement en espèces ≥ 5 000 : exclu | 0 |
| Téléphone (chèque 20-12) | 7 000 × 20/120 | 1 166,67 |
| LOGAN (voiture de tourisme) | Exclue | 0 |
| Restaurant (espèces 5 000) | Paiement en espèces ≥ 5 000 : exclu | 0 |
| Électricité (6 000 payés au trimestre, taux 14 %) | 6 000 × 14/114 | 736,84 |
| Loyer de locaux nus | Hors champ (pas de TVA facturée) | 0 |
| Cadeaux clients (2 000 l'unité, espèces) | Exclus | 0 |
| Mobilier de la villa du DG | Dépense personnelle, étrangère à l'exploitation : exclue | 0 |
| Dividendes | Pas une dépense soumise à TVA | 0 |
| **Total** | | **18 570,17** |
#### TVA due du 4e trimestre 2020
51 333,33 − 18 570,17 = **==32 763,16 DH==** (à verser avant fin janvier N+1). Le remboursement de TVA de N-1 (compensé par le Trésor) n'entre pas dans cette déclaration.`,
kp:["Régime des débits : TVA collectée à la facturation","Façon locale et déchets taxables, prestations de gestion 3 × 30 000 HT","Admission temporaire et export exonérés avec droit à déduction ; dividendes hors champ","Déduction au paiement : échéance des effets, encaissement des chèques","Exclusions : véhicules de tourisme et leur carburant, cadeaux, dépenses personnelles","Exclusion des paiements en espèces ≥ 5 000 DH","Électricité au taux de 14 %","TVA due ≈ 32 763"]},
{pts:5, q:"Calculer le résultat fiscal de l'exercice N.",
chk:[{l:"Résultat fiscal N (déficit)",v:-174580,u:"DH",tol:200}],
model:`On suppose les opérations comptabilisées dans le résultat de − 242 380 DH.
| Correction | Réintégration | Déduction | Justification |
|---|---|---|---|
| Gasoil payé en espèces (9 500) | 4 500 | | Dépenses en espèces déductibles dans la limite de 5 000 DH par jour et par fournisseur |
| Transport du personnel en espèces (9 000) | 4 000 | | idem |
| Cadeaux clients en espèces (10 000) | 5 000 | | idem (et cadeaux d'une valeur unitaire élevée) |
| Mobilier de la villa du DG (40 000) | 40 000 | | Dépense personnelle du dirigeant (à défaut, avantage en nature imposable à l'IR) |
| Dividendes versés aux associés (30 000) | 30 000 | | Répartition du bénéfice, pas une charge |
| Pénalités, intérêts de retard et de recouvrement (2 000 + 1 800 + 400 + 100) | 4 300 | | Sanctions non déductibles ; la patente (5 000) est déductible |
| Dividendes de titres de participation (20 000) | | 20 000 | Abattement de 100 % (société marocaine soumise à l'IS) |
| **Total** | **87 800** | **20 000** | |
Résultat fiscal N = − 242 380 + 87 800 − 20 000 = **==− 174 580 DH==** (déficit).
La provision pour dépréciation du stock défectueux (40 % de 100 000 HT = 40 000) est déductible si elle est **comptabilisée** ; elle ne peut pas être déduite extra-comptablement.
**Déficits reportables** à fin N : N-2 : 232 600 (dont 110 200 d'amortissements, reportables sans limite ; le reste jusqu'en N+2) ; N-1 : 125 000 (dont 75 000 d'amortissements ; reste jusqu'en N+3) ; N : 174 580. (Les bénéfices de N-3 et N-4 n'interviennent pas : pas de report en arrière.)`,
kp:["Plafonnement des dépenses payées en espèces (5 000 DH/jour/fournisseur)","Réintégration des dépenses personnelles du DG et des dividendes distribués","Pénalités et intérêts de retard non déductibles ; patente déductible","Déduction des dividendes reçus (abattement 100 %)","Résultat fiscal ≈ − 174 580","Suivi des déficits reportables (amortissements sans limite)"]},
{pts:1, q:"Calculer les acomptes provisionnels dus au titre de N+1.",
chk:[{l:"Montant de chaque acompte de N+1",v:1446.3,u:"DH",tol:30}],
model:`Les acomptes de N+1 sont calculés sur l'**impôt dû au titre de N**. N étant déficitaire, l'impôt dû est la **cotisation minimale** (question suivante : ≈ 5 785 DH).
Chaque acompte = 25 % × 5 785,18 ≈ **==1 446,30 DH==**, à verser avant la fin des 3e, 6e, 9e et 12e mois de N+1.`,
kp:["Base : impôt dû de N (ici la CM)","4 acomptes de 25 % ≈ 1 446"]},
{pts:2, q:"Calculer la cotisation minimale et l'IS (résultat courant hors amortissement toujours positif).",
chk:[{l:"Cotisation minimale N",v:5785.18,u:"DH",tol:20}],
model:`- **IS** : résultat fiscal déficitaire ⇒ IS = 0.
- **Cotisation minimale** : la société ayant toujours dégagé un **résultat courant hors amortissement positif**, elle bénéficie du **taux de 0,50 %** (au lieu du taux majoré prévu pour les entreprises durablement déficitaires).
- Base : chiffre d'affaires HT de l'année (+ produits accessoires et financiers hors dividendes) : 480 370 (janvier-septembre) + CA HT du 4e trimestre (83 333 + 66 667 + 200 000 + 16 667 + 220 000 + 90 000 = 676 667) = 1 157 037 DH.
- CM = 1 157 037 × 0,50 % = **==5 785 DH==** (supérieure au minimum de 3 000 DH) : c'est l'impôt dû au titre de N.
> Si l'on retient seulement le CA de 480 370 DH : 2 402 DH, porté au minimum de 3 000 DH.`,
kp:["IS nul (déficit)","Taux de CM de 0,50 % grâce au résultat courant hors amortissement positif","Base : CA HT annuel (y compris le 4e trimestre)","CM ≈ 5 785 (minimum 3 000)"]}
]}
]});

EXAMS.push({
id:"gest-2021", subject:"gest", year:2021, session:"8-9 janvier 2022", title:"Étude de cas de gestion", date:"Dimanche 9 janvier 2022", duration:300, pages:[338,342],
note:"6 exercices — tables financières et calculatrice non programmable autorisées",
sections:[
{title:"Exercice 1 : Projets incompatibles — VAN, IP, TIR et taux de Fisher", pts:5, pages:[339,339], th:["g-invest"],
ctx:`Le holding Oujda Détentions pense à deux nouvelles opportunités d'investissement **incompatibles** 1 et 2, d'une dépense initiale de **175 000 MAD** chacune, d'une durée de vie de **6 ans**, d'un coût du capital de **12 %** :
| Année | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| FNE du projet 1 | 73 500 | 87 500 | 52 500 | 35 000 | 17 500 | 8 750 |
| FNE du projet 2 | 34 125 | 52 500 | 70 000 | 115 500 | 26 250 | 5 250 |
1. Décidez de la faisabilité des deux projets par le calcul de la VAN, de l'indice de profitabilité et du TIR. 2. Donnez une représentation graphique de l'évolution des VAN en fonction du taux d'actualisation ; positions graphiques des TIR. 3. Déterminez la solution analytique du taux d'indifférence entre les deux projets. 4. En l'absence d'information sur le taux d'actualisation, analysez graphiquement la faisabilité des projets à l'instar des critères VAN et TIR.`,
questions:[
{pts:2, q:"1. VAN, indice de profitabilité et TIR des deux projets.",
chk:[{l:"VAN du projet 1 (12 %)",v:34354,u:"MAD",tol:30},{l:"VAN du projet 2 (12 %)",v:38103,u:"MAD",tol:30},{l:"TIR du projet 1",v:21.32,u:"%",tol:0.1},{l:"TIR du projet 2",v:19.63,u:"%",tol:0.1}],
model:`| | Projet 1 | Projet 2 |
|---|---|---|
| Valeur actuelle des FNE à 12 % | 209 354 | 213 103 |
| **VAN** | **+ 34 354** | **+ 38 103** |
| **IP** = VA / I | **1,196** | **1,218** |
| **TIR** | **21,32 %** | **19,63 %** |
| VAN à taux nul (Σ FNE − I) | 99 750 | 128 625 |
Les deux projets sont **rentables** (VAN > 0, IP > 1, TIR > 12 %). Mais les critères **divergent** : la VAN et l'IP classent le projet 2 en tête, le TIR classe le projet 1. Projets incompatibles de même investissement et même durée → on retient la **VAN** au coût du capital : **projet 2**.`,
kp:["VAN 1 ≈ 34 354 et VAN 2 ≈ 38 103","IP ≈ 1,196 et 1,218","TIR ≈ 21,3 % et 19,6 % (interpolation)","Conflit de classement et choix par la VAN : projet 2"]},
{pts:1, q:"2. Représentation graphique des VAN en fonction du taux ; position des TIR.",
model:`Profils de VAN (décroissants et convexes) :
| Taux | 0 % | 10 % | 12 % | 14,74 % | 18 % | 19,63 % | 21,32 % |
|---|---|---|---|---|---|---|---|
| VAN projet 1 | 99 750 | 43 287 | 34 354 | 23 103 | 11 026 | 5 461 | 0 |
| VAN projet 2 | 128 625 | 50 154 | 38 103 | 23 097 | 7 221 | 0 | − 7 052 |
- La courbe du projet 2 part plus haut (128 625 à taux nul) mais décroît plus vite (flux plus tardifs, sensibles à l'actualisation).
- Les **TIR** sont les points d'intersection des courbes avec l'axe des abscisses : 19,63 % (projet 2) et 21,32 % (projet 1).
- Les deux courbes se **croisent** au taux de Fisher (≈ 14,74 %).`,
kp:["Courbes décroissantes VAN = f(taux)","Points de départ (VAN à 0 %) 99 750 et 128 625","TIR = intersections avec l'axe horizontal","Croisement des courbes (taux d'indifférence)"]},
{pts:1, q:"3. Taux d'indifférence (taux de Fisher).",
chk:[{l:"Taux d'indifférence",v:14.74,u:"%",tol:0.1}],
model:`On cherche r tel que VAN₁(r) = VAN₂(r), soit l'annulation de la VAN des flux différentiels (projet 1 − projet 2) :
| Année | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| FNE₁ − FNE₂ | 39 375 | 35 000 | − 17 500 | − 80 500 | − 8 750 | 3 500 |
Σ (FNE₁ − FNE₂) / (1 + r)ᵗ = 0 ⇒ par interpolation : **r ≈ ==14,74 %==** (VAN commune ≈ 23 100 MAD).`,
kp:["Égalisation des VAN / VAN des flux différentiels nulle","Taux de Fisher ≈ 14,7 %"]},
{pts:1, q:"4. Analyse graphique de la faisabilité sans connaître le taux d'actualisation.",
model:`- **r < 14,74 %** : VAN₂ > VAN₁ > 0 → préférer le **projet 2**.
- **14,74 % < r < 19,63 %** : VAN₁ > VAN₂ > 0 → préférer le **projet 1**.
- **19,63 % < r < 21,32 %** : seul le projet 1 a une VAN positive → **projet 1**.
- **r > 21,32 %** : aucun projet n'est rentable.
Le critère du TIR (21,32 % > 19,63 %) privilégie toujours le projet 1 ; il ne coïncide avec la VAN qu'au-delà du taux de Fisher. Au coût du capital de 12 %, la VAN tranche en faveur du projet 2.`,
kp:["Zones de décision délimitées par 14,74 %, 19,63 % et 21,32 %","Divergence VAN / TIR en dessous du taux de Fisher","Conclusion au coût du capital de 12 %"]}
]},
{title:"Exercice 2 : Compte de résultat différentiel, seuil et point mort (BOX)", pts:4, pages:[339,339], th:["g-rentabilite","ca-variable"],
ctx:`L'entreprise BOX fabrique et distribue des verres de contact. Chiffre d'affaires net HT : **5 000 000 DH** ; charges fixes : **420 000 DH** ; taux de charges variables : **40 %**.
1. Établissez le compte de résultat différentiel. 2. Calculez le seuil de rentabilité. 3. Déterminez le point mort.`,
questions:[
{pts:1.5, q:"1. Compte de résultat différentiel.",
chk:[{l:"Résultat",v:2580000,u:"DH"}],
model:`| | Montant | % du CA |
|---|---|---|
| Chiffre d'affaires | 5 000 000 | 100 % |
| Charges variables | 2 000 000 | 40 % |
| **Marge sur coût variable** | **3 000 000** | **60 %** |
| Charges fixes | 420 000 | 8,4 % |
| **Résultat** | **==2 580 000==** | 51,6 % |`,
kp:["CV = 40 % du CA","MCV 3 000 000 (60 %)","Résultat 2 580 000"]},
{pts:1.5, q:"2. Seuil de rentabilité.",
chk:[{l:"Seuil de rentabilité",v:700000,u:"DH"}],
model:`SR = CF / taux de MCV = 420 000 / 0,60 = **==700 000 DH==**.
Marge de sécurité = 5 000 000 − 700 000 = 4 300 000 DH (indice de sécurité 86 %) ; levier opérationnel = MCV / résultat = 3 000 000 / 2 580 000 ≈ 1,16.`,
kp:["SR = 420 000 / 60 % = 700 000","Marge et indice de sécurité"]},
{pts:1, q:"3. Point mort (date d'atteinte du seuil).",
model:`En supposant un CA régulier sur l'année : point mort = SR / CA × 12 = 700 000 / 5 000 000 × 12 = **1,68 mois** (ou × 360 = **50,4 jours**), soit environ le **20-21 février**. Dès le début de l'année, l'activité couvre très vite ses charges fixes.`,
kp:["Point mort = SR / CA × 12 mois (ou 360 jours)","≈ 1,68 mois / 50,4 jours → vers le 20 février"]}
]},
{title:"Exercice 3 : Régime de retraite (mensualités et cotisations équivalentes)", pts:3, pages:[340,340], th:["g-mathfi"],
ctx:`Un régime complémentaire de retraite propose à ses adhérents deux options : le paiement d'un **capital de 420 000 à 65 ans**, ou une **mensualité pendant 10 ans**. On prendra un taux d'intérêt annuel de **10,034 %** pour toutes les opérations.
a. Quelle est la mensualité constante de début de période équivalente à la première option ?
b. Quelle cotisation semestrielle de début de période est-il nécessaire de verser depuis l'âge de 30 ans pour bénéficier à 65 ans de l'une des deux options proposées ?`,
questions:[
{pts:1.5, q:"a. Mensualité constante de début de période équivalente au capital de 420 000.",
chk:[{l:"Mensualité",v:5414.4,u:"",tol:2}],
model:`Taux mensuel équivalent : 1,10034^(1/12) − 1 = **0,8 %** (1,008¹² = 1,10034).
420 000 = m × [1 − 1,008⁻¹²⁰] / 0,008 × 1,008 (120 mensualités en début de période)
[1 − 1,008⁻¹²⁰] / 0,008 = 76,9552 ⇒ × 1,008 = 77,5709
**m = 420 000 / 77,5709 ≈ ==5 414,40==** par mois.`,
kp:["Taux mensuel équivalent 0,8 %","Valeur actuelle d'une suite de 120 versements en début de période","m ≈ 5 414,40"]},
{pts:1.5, q:"b. Cotisation semestrielle de début de période versée de 30 à 65 ans.",
chk:[{l:"Cotisation semestrielle",v:715.42,u:"",tol:1}],
model:`Taux semestriel équivalent : 1,008⁶ − 1 = **4,897 %**. De 30 à 65 ans : 35 ans = **70 semestres**.
Les deux options valant 420 000 à 65 ans, il faut une valeur acquise de 420 000 :
420 000 = c × [(1,04897⁷⁰ − 1) / 0,04897] × 1,04897
(1,04897⁷⁰ = 1,10034³⁵ ≈ 28,408) ⇒ facteur ≈ 559,66 × 1,04897 ≈ 587,07
**c ≈ ==715,42==** par semestre.`,
kp:["Taux semestriel équivalent ≈ 4,897 %","70 versements en début de période (valeur acquise × (1 + i))","Égalité avec 420 000 à 65 ans","c ≈ 715"]}
]},
{title:"Exercice 4 : Point mort, publicité et ajustement (SMIROU)", pts:3, pages:[340,341], th:["g-rentabilite","g-stats"],
ctx:`L'entreprise SMARA fabrique le SMIROU : prix de vente unitaire **250 DH** ; coût unitaire variable **150 DH** ; charges fixes annuelles hors publicité **3 000 000 DH**.
1. Seuil de rentabilité en quantité en l'absence de toute publicité (0,25 pt).
2. Historique des charges publicitaires :
| Charges publicitaires annuelles en kDH (X) | Nombre annuel d'unités vendues (Q) |
|---|---|
| 100 | 30 000 |
| 200 | 36 000 |
| 300 | 41 000 |
| 400 | 46 000 |
| 1 000 | 67 000 |
2.a. L'entreprise peut-elle se passer de la publicité ? (0,25 pt) 2.b. Représenter le nuage des points (X, Y = Q²/1000) et commenter (0,5 pt). 2.c. Calculer par les moindres carrés la droite Y = BX + A (0,5 pt) ; on donne ΣX = 2 000 ; ΣY = 10 482 ; ΣX² = 1 300 000 ; ΣXY = 6 188 900. 2.d. Résultat d'exploitation moyen en l'absence de publicité (0,25 pt). 2.e. Pourquoi l'entreprise n'a-t-elle pas intérêt à une publicité excessive ? (0,25 pt) 2.f. En arrondissant A et B aux entiers les plus proches, calculer le montant optimal de publicité, le nombre d'unités vendues et le résultat d'exploitation correspondant (1 pt).`,
questions:[
{pts:1, q:"1 et 2.a-2.b. Point mort sans publicité ; peut-on se passer de publicité ? Nuage de points.",
chk:[{l:"Seuil de rentabilité en quantité (sans publicité)",v:30000,u:"unités"}],
model:`1. MCV unitaire = 250 − 150 = 100 ⇒ **point mort = 3 000 000 / 100 = 30 000 unités**.
2.a. **Non** : avec seulement 100 kDH de publicité, l'entreprise vend 30 000 unités, juste le seuil sans publicité ; en dessous de cet effort, ses ventes ne couvrent même pas les charges fixes. Sans publicité, elle serait déficitaire.
2.b. Avec Q en milliers (cohérent avec ΣY = 10 482) : Y = Q² → points (100 ; 900), (200 ; 1 296), (300 ; 1 681), (400 ; 2 116), (1 000 ; 4 489). Les points sont **presque alignés** : Q² est une fonction affine de X, donc **Q croît comme la racine carrée** de la publicité → **rendements décroissants** de la publicité.`,
kp:["Point mort 30 000 unités","Publicité indispensable (ventes insuffisantes sans elle)","Nuage quasi linéaire en (X, Q²) → rendements décroissants"]},
{pts:2, q:"2.c à 2.f. Droite des moindres carrés, résultat sans publicité, publicité excessive et publicité optimale.",
chk:[{l:"B (pente)",v:3.9922,u:"",tol:0.001},{l:"A (ordonnée à l'origine)",v:499.52,u:"",tol:0.1},{l:"Publicité optimale",v:9875,u:"kDH",tol:1},{l:"Résultat d'exploitation optimal",v:7125000,u:"DH",tol:500}],
model:`**2.c** X̄ = 400 ; Ȳ = 2 096,4 ; V(X) = 1 300 000 / 5 − 400² = 100 000 ; Cov(X, Y) = 6 188 900 / 5 − 400 × 2 096,4 = 399 220.
B = 399 220 / 100 000 = **3,9922** ; A = 2 096,4 − 3,9922 × 400 = **499,52** ⇒ **Y = 3,9922 X + 499,52** (≈ 4X + 500).
**2.d** Sans publicité : Q² = 500 (Q en milliers) ⇒ Q ≈ 22,36 milliers = **22 361 unités** ⇒ résultat = 22 361 × 100 − 3 000 000 ≈ **− 763 932 DH** (perte).
**2.e** Q = √(4X + 500) : chaque kDH supplémentaire de publicité rapporte de **moins en moins** d'unités (dérivée décroissante) ; au-delà d'un certain niveau, la marge supplémentaire est inférieure au coût de la publicité : le résultat diminue.
**2.f** Résultat (en DH) : R(X) = 100 × 1 000 √(4X + 500) − 1 000 X − 3 000 000
R'(X) = 200 000 / √(4X + 500) − 1 000 = 0 ⇒ √(4X + 500) = 200 ⇒ 4X + 500 = 40 000 ⇒ **X = ==9 875 kDH==**
Q = 200 milliers = **200 000 unités** ; R = 200 000 × 100 − 9 875 000 − 3 000 000 = **==7 125 000 DH==**.
(Résultat très au-delà des données observées : extrapolation à manier avec prudence.)`,
kp:["Moyennes, variance et covariance","B ≈ 3,99 et A ≈ 499,5 (arrondis 4 et 500)","Sans publicité : ≈ 22 361 unités, perte ≈ − 764 000","Rendements décroissants (racine carrée)","Optimisation : R'(X) = 0 → X = 9 875 kDH, Q = 200 000, R = 7 125 000"]}
]},
{title:"Exercice 5 : Distribution des salaires (tableau à compléter, médiane, moyenne, écart type)", pts:3, pages:[341,341], th:["g-stats"],
ctx:`La répartition des salaires des employés d'une entreprise est donnée dans le tableau suivant (précision 10⁻²) :
| Salaire en dirhams | Centre | Effectif | Fréquence (%) | Effectif cumulé |
|---|---|---|---|---|
| [6 000 ; 7 600[ | | | 5 | |
| [7 600 ; 8 400[ | | | 8,5 | |
| [8 400 ; 9 200[ | | | 23,75 | |
| [9 200 ; …[ | | | 25 | |
| [… ; …[ | 10 800 | | | |
| [11 600 ; 14 000[ | | | 6,75 | 400 |
1) Compléter le tableau (1 pt). 2) Calculer la médiane et l'interpréter (1 pt). 3) Calculer le salaire moyen et l'écart type (1 pt).`,
questions:[
{pts:1, q:"1) Compléter le tableau.",
model:`La 5e classe a pour centre 10 800 et se termine à 11 600 (début de la dernière) ⇒ elle commence à 10 000 : **[10 000 ; 11 600[** ; la 4e classe est donc **[9 200 ; 10 000[**. Effectif total = 400 ; fréquence manquante = 100 − (5 + 8,5 + 23,75 + 25 + 6,75) = **31 %**.
| Classe | Centre | Effectif | Fréquence (%) | Effectif cumulé |
|---|---|---|---|---|
| [6 000 ; 7 600[ | 6 800 | 20 | 5 | 20 |
| [7 600 ; 8 400[ | 8 000 | 34 | 8,5 | 54 |
| [8 400 ; 9 200[ | 8 800 | 95 | 23,75 | 149 |
| [9 200 ; 10 000[ | 9 600 | 100 | 25 | 249 |
| [10 000 ; 11 600[ | 10 800 | 124 | 31 | 373 |
| [11 600 ; 14 000[ | 12 800 | 27 | 6,75 | 400 |`,
kp:["Bornes déduites du centre : [10 000 ; 11 600[ et [9 200 ; 10 000[","Fréquence manquante 31 %","Effectifs (N = 400) et effectifs cumulés"]},
{pts:2, q:"2-3) Médiane, salaire moyen et écart type.",
chk:[{l:"Médiane",v:9608,u:"DH",tol:1},{l:"Salaire moyen",v:9722,u:"DH",tol:1},{l:"Écart type",v:1372.7,u:"DH",tol:1}],
model:`**Médiane** : rang N/2 = 200, dans la classe [9 200 ; 10 000[ (cumuls 149 → 249).
Me = 9 200 + (200 − 149) / 100 × 800 = **==9 608 DH==** : la moitié des salariés gagne moins de 9 608 DH, l'autre moitié plus.
**Moyenne** : x̄ = Σ fᵢ cᵢ = 0,05 × 6 800 + 0,085 × 8 000 + 0,2375 × 8 800 + 0,25 × 9 600 + 0,31 × 10 800 + 0,0675 × 12 800 = **==9 722 DH==**.
**Variance** : Σ fᵢ cᵢ² − x̄² = 96 401 600 − 94 517 284 = 1 884 316 ⇒ **σ ≈ ==1 372,70 DH==**.
Moyenne légèrement supérieure à la médiane : distribution un peu étirée vers les hauts salaires ; coefficient de variation ≈ 14 %.`,
kp:["Classe médiane et interpolation → 9 608","Moyenne pondérée par les centres = 9 722","Variance par König et σ ≈ 1 372,70","Interprétation"]}
]},
{title:"Exercice 6 : Couple de variables aléatoires (mode de paiement)", pts:2, pages:[342,342], th:["g-probas"],
ctx:`L'étude du mode de paiement en fonction du montant des achats dans un grand magasin de Casablanca donne : p[(S = 0) ∩ (U = 0)] = 0,4 ; p[(S = 0) ∩ (U = 1)] = 0,3 ; p[(S = 1) ∩ (U = 0)] = 0,2 ; p[(S = 1) ∩ (U = 1)] = 0,1 ; où S vaut 0 si le montant des achats est inférieur ou égal à 1 000 DH et 1 sinon, et U vaut 0 si la somme est réglée par chèque et 1 sinon.
1) Loi conjointe sous forme de tableau. 2) Probabilité que le client règle par chèque. 3) Coefficient de corrélation de S et U. 4) S et U sont-elles indépendantes ? 5) Probabilité que la somme réglée soit supérieure strictement à 1 000 DH sachant que le client utilise un autre moyen de paiement que le chèque.`,
questions:[
{pts:2, q:"Loi conjointe, P(chèque), corrélation, indépendance et probabilité conditionnelle.",
chk:[{l:"P(U = 0)",v:0.6,u:"",tol:0.001},{l:"Coefficient de corrélation",v:-0.0891,u:"",tol:0.001},{l:"P(S = 1 | U = 1)",v:0.25,u:"",tol:0.001}],
model:`1) **Loi conjointe**
| | U = 0 (chèque) | U = 1 | Loi de S |
|---|---|---|---|
| S = 0 (≤ 1 000) | 0,4 | 0,3 | 0,7 |
| S = 1 (> 1 000) | 0,2 | 0,1 | 0,3 |
| Loi de U | 0,6 | 0,4 | 1 |
2) P(chèque) = P(U = 0) = **0,6**.
3) E(S) = 0,3 ; E(U) = 0,4 ; E(SU) = P(S = 1, U = 1) = 0,1 ⇒ Cov = 0,1 − 0,12 = − 0,02 ; V(S) = 0,3 × 0,7 = 0,21 ; V(U) = 0,4 × 0,6 = 0,24 ⇒ **ρ = − 0,02 / √(0,0504) ≈ − 0,089** (corrélation très faible et négative).
4) **Non indépendantes** : P(S = 0, U = 0) = 0,4 ≠ P(S = 0) × P(U = 0) = 0,42 (et Cov ≠ 0).
5) P(S = 1 | U = 1) = 0,1 / 0,4 = **0,25**.`,
kp:["Tableau avec lois marginales","P(U = 0) = 0,6","Cov = − 0,02 et ρ ≈ − 0,089","Pas d'indépendance (0,4 ≠ 0,42)","P(S = 1 | U = 1) = 0,25"]}
]}
]});

EXAMS.push({
id:"tec-2021", subject:"tec", year:2021, session:"8-9 janvier 2022", title:"Techniques d'expression et de communication (culture générale)", date:"Dimanche 9 janvier 2022", duration:120, pages:[343,344],
sections:[
{title:"Texte : « Vérités et mensonges au nom de la science » (Ph. Descamps, 2021)", pts:20, pages:[344,344], th:["tec-dissertation","tec-questions"],
ctx:`**Vérités et mensonges au nom de la science**
Après un an et demi de pandémie, la défiance populaire née des incohérences des politiques sanitaires n'épargne plus les faiseurs de science. Car celle-ci est de plus en plus soupçonnée de conflits d'intérêts avec les marchands, de collusion avec les gouvernants. Au risque d'alimenter un périlleux déni de science.
Raison d'État ou folie des marchés orientent le travail des chercheurs ou biaisent leurs résultats. La force d'attraction de l'innovation industrielle arrache à la puissance publique des moyens toujours plus importants, qui font défaut à la recherche fondamentale comme aux études d'intérêt général. **Dans un monde où le profit dicte sa loi, l'indépendance de la production du savoir demeure une ambition insatisfaite.**
En fondant l'argumentation sur des faits, des données probantes, des expériences reproductibles, la démarche scientifique accompagne la marche de la civilisation. L'élargissement infini des connaissances humaines sur des bases rationnelles permet de comprendre toujours plus finement l'Univers et le vivant. Il jette également la lumière sur les menaces nées des applications funestes de nombreuses découvertes.
En parant leurs élucubrations des atours de la science, les charlatans modernes touchent un nouveau public, curieux, en rupture, se disant parfois progressiste. Les nouveaux maîtres à penser orientent l'attention vers ce qui ne bouscule ni les préjugés ni les intérêts les mieux installés. Nourri par un sens critique asymétrique et le repli sur soi, ce nouvel obscurantisme fait diversion en éclipsant la question sociale.
Dans un contexte de forte incertitude scientifique, deux munitions principales nourrissaient le feu : des études difficiles à déchiffrer pour le profane et des accusations de conflits d'intérêts, à tout le moins de liens financiers avec l'industrie.
La méfiance engendrée par l'incurie doublée d'autoritarisme des pouvoirs publics rend plus ardue encore la sortie d'une crise profonde, qui touche à tous les domaines de la vie. Le doute n'épargne plus l'expertise médicale, soupçonnée de succomber à des influences politiques, médiatiques et surtout économiques.
— Ph. Descamps, 2021
**Question** : expliquer et développer l'affirmation suivante du texte : « Dans un monde où le profit dicte sa loi, l'indépendance de la production du savoir demeure une ambition insatisfaite ».`,
questions:[
{pts:20, q:"Expliquer et développer : « Dans un monde où le profit dicte sa loi, l'indépendance de la production du savoir demeure une ambition insatisfaite ».",
model:`#### Introduction
- **Accroche** : la pandémie de Covid-19 a placé la science au centre du débat public… et l'a exposée à une défiance inédite.
- **Explication** : l'auteur affirme que la recherche n'est pas pleinement **indépendante** : son financement et son orientation dépendent d'intérêts **économiques** (profit) et **politiques** (raison d'État), ce qui biaise les sujets étudiés et parfois les résultats.
- **Problématique** : la logique du profit compromet-elle nécessairement l'indépendance du savoir, et comment la préserver ?
- **Plan** : les mécanismes de dépendance (I), leurs conséquences (II), les garde-fous possibles (III).
#### I. Une production du savoir sous influence
1. **Le financement oriente la recherche** : la recherche appliquée et industrielle attire les fonds (brevets, marchés), au détriment de la recherche **fondamentale** et des études d'**intérêt général** (maladies négligées, environnement), comme le souligne le texte.
2. **Les conflits d'intérêts** : essais cliniques financés par les laboratoires, experts liés à l'industrie, publication sélective des résultats favorables (biais de publication) ; exemples historiques : tabac, sucre, pesticides, médicaments retirés tardivement.
3. **La pression politique** : la « raison d'État » peut infléchir l'expertise (gestion de crise, communication sanitaire), faisant de la science un instrument de légitimation.
#### II. Des conséquences graves pour la société
1. **La défiance** envers les scientifiques et les institutions, que le texte relie aux « incohérences des politiques sanitaires ».
2. **Le terrain laissé aux charlatans** et au « nouvel obscurantisme » : désinformation, théories du complot amplifiées par les réseaux sociaux.
3. **De mauvaises décisions publiques** fondées sur une expertise biaisée, et un affaiblissement du débat démocratique.
#### III. Des garde-fous pour une science plus indépendante
1. **Financement public** stable de la recherche fondamentale et des agences d'expertise indépendantes.
2. **Transparence** : déclaration publique des liens d'intérêts, registres des essais cliniques, accès ouvert aux données (*open science*), reproductibilité.
3. **Pluralité et contradiction** : évaluation par les pairs, expertise collégiale, intégrité scientifique, protection des lanceurs d'alerte.
4. **Éducation** à l'esprit critique et à la culture scientifique des citoyens et des décideurs.
5. **Nuance** : le financement privé n'est pas illégitime (innovation, vaccins développés en un temps record) ; l'enjeu est d'en **encadrer** les effets.
#### Conclusion
- **Bilan** : la dépendance de la recherche à l'égard du profit et du pouvoir est réelle ; elle nourrit la défiance qui menace la science elle-même.
- **Ouverture** : comme l'**indépendance de l'auditeur** garantit la confiance dans les comptes, l'indépendance du chercheur conditionne la confiance dans le savoir — un parallèle qui concerne directement le futur expert-comptable.`,
kp:["Introduction : contexte (pandémie, défiance), explication de la phrase, problématique, plan","Mécanismes : financement orienté vers l'innovation rentable au détriment de la recherche fondamentale","Conflits d'intérêts et biais (exemples précis)","Pression politique (raison d'État)","Conséquences : défiance, obscurantisme, mauvaises décisions","Garde-fous : financement public, transparence, intégrité, esprit critique","Nuance sur le rôle du financement privé","Conclusion avec ouverture (indépendance de l'auditeur)","Expression : plan apparent, transitions, orthographe"]}
]}
]});
