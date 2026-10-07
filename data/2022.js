/* Session 2022 (12-13 novembre 2022) */
EXAMS.push({
id:"cpt-2022", subject:"cpt", year:2022, session:"12-13 novembre 2022", title:"Comptabilité générale et analytique", date:"Samedi 12 novembre 2022", duration:300, pages:[346,352],
note:"Deux copies séparées : comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Dossier 1 : Questions de cours", pts:4, pages:[347,347], th:["cg-eval","cg-immo"],
ctx:`1. Rappeler les conditions nécessaires pour que les coûts de recherche et développement puissent être enregistrés à l'actif.
2. Rappeler les différentes méthodes d'enregistrement comptable des charges à répartir sur plusieurs exercices.
3. Quels types de réductions sont exclus du calcul de la valeur d'entrée d'une immobilisation acquise à titre onéreux ?
4. Indiquez les méthodes de valorisation des stocks autorisées par le CGNC.`,
questions:[
{pts:1, q:"1. Conditions d'inscription à l'actif des coûts de recherche et développement.",
model:`Selon le CGNC, les frais de recherche et de développement sont en principe des charges ; ils **peuvent** être inscrits à l'actif (compte 2210 « Immobilisations en recherche et développement ») si :
- ils se rapportent à des **projets nettement individualisés** ;
- ces projets ont de **sérieuses chances de réussite technique et de rentabilité commerciale** ;
- leur **coût** peut être **distinctement établi** (mesuré de façon fiable).
Ils sont alors amortis sur une durée maximale de **5 ans** ; en cas d'échec du projet, la valeur résiduelle est amortie immédiatement.`,
kp:["Projets nettement individualisés","Sérieuses chances de réussite technique et de rentabilité commerciale","Coût distinctement établi","Amortissement sur 5 ans maximum (2210)"]},
{pts:1, q:"2. Méthodes d'enregistrement des charges à répartir sur plusieurs exercices.",
model:`Deux méthodes (immobilisations en non-valeur, comptes 211 / 212) :
1. **Inscription directe à l'actif** : la dépense est portée dès l'origine au débit du compte d'immobilisation en non-valeur (ex. 2128 « Autres charges à répartir ») par le crédit du compte de tiers ou de trésorerie.
2. **Méthode du transfert de charges** (la plus courante) : la dépense est d'abord enregistrée en **charge par nature** (classe 6) ; à l'inventaire, elle est transférée à l'actif : débit 21.. / crédit **7197 « Transferts de charges d'exploitation »** (ou 7397 financières, 7597 non courantes).
Dans les deux cas, la charge est ensuite **amortie** sur au plus **5 ans** (6191 « DEA de l'immobilisation en non-valeur » / 28..).`,
kp:["Inscription directe en immobilisation en non-valeur","Enregistrement en charge par nature puis transfert de charges (719x)","Amortissement sur 5 ans au plus"]},
{pts:1, q:"3. Réductions exclues du calcul de la valeur d'entrée d'une immobilisation acquise à titre onéreux.",
model:`- Les **réductions commerciales** (remises, rabais, ristournes) obtenues sont **déduites** du prix d'achat : le coût d'acquisition est calculé « net » de ces réductions.
- Les **réductions financières** (**escomptes de règlement**) sont **exclues du calcul** : elles ne diminuent pas le coût de l'immobilisation et sont comptabilisées en **produits financiers** (7386 « Escomptes obtenus »).
- De même, la **TVA récupérable** est exclue du coût.`,
kp:["Remises, rabais, ristournes déduits du prix","Escomptes de règlement exclus : produits financiers (7386)","TVA récupérable exclue"]},
{pts:1, q:"4. Méthodes de valorisation des stocks autorisées par le CGNC.",
model:`- **Biens non interchangeables** (identifiables) : **coût réel** de chaque bien (identification spécifique).
- **Biens interchangeables** :
  - **coût moyen pondéré** (CMUP) calculé après chaque entrée ou sur une période (au plus la durée moyenne de stockage) ;
  - **PEPS / FIFO** (premier entré, premier sorti) ;
  - **DEPS / LIFO** (dernier entré, premier sorti).
La méthode retenue doit être appliquée de façon **permanente** ; tout changement est justifié dans l'ETIC.`,
kp:["Coût réel pour les biens identifiables","CMUP, PEPS (FIFO), DEPS (LIFO) pour les biens interchangeables","Permanence des méthodes"]}
]},
{title:"CG — Dossier 2 : Acquisition et amortissement d'un matériel importé (DELTA)", pts:8, pages:[347,347], th:["cg-immo","cg-amort","cg-devises"],
ctx:`La société DELTA a fait l'acquisition en N d'une nouvelle machine de production auprès d'un fournisseur allemand au prix de **55 000 euros**. La société reçoit le matériel ainsi que la facture F001 correspondante le **1er novembre N** : **35 000 euros** sont réglés le jour de la livraison par virement et le reste est à payer dans 3 mois.
Le transitaire adresse sa facture F456 à la société DELTA le **03 novembre**, réglée par chèque. Elle comprend les **droits de douane (17 %)** versés, la **TVA d'importation** sur le matériel (20 %) et la **commission du transitaire de 5 000 MAD HT** (TVA 20 %). Le cours de l'euro retenu par la douane est de **11 DH** pour 1 euro.
Informations complémentaires : cours de l'euro au 01/11/N : 11 MAD ; au 31/12/N : **10,8 MAD** ; la machine est amortie sur **5 ans** suivant le mode **dégressif (coefficient 2)**.
**Travail à faire** : 1. Présenter le plan d'amortissement dégressif de la machine sur 5 ans (arrondir à l'unité). 2. Enregistrer toutes les écritures nécessaires : a) à la date d'acquisition ; b) à la clôture de l'exercice (31/12/N).`,
questions:[
{pts:4, q:"1. Plan d'amortissement dégressif de la machine sur 5 ans.",
chk:[{l:"Coût d'acquisition de la machine",v:712850,u:"DH"},{l:"Dotation de l'exercice N",v:47523,u:"DH",tol:1},{l:"Dotation de N+1",v:266131,u:"DH",tol:2}],
model:`#### Coût d'acquisition
| Élément | Calcul | Montant |
|---|---|---|
| Prix d'achat | 55 000 € × 11 | 605 000 |
| Droits de douane | 605 000 × 17 % | 102 850 |
| Commission du transitaire (HT) | | 5 000 |
| **Coût d'acquisition** | | **712 850** |
(La TVA à l'importation, 20 % × 707 850 = 141 570, est récupérable : elle n'entre pas dans le coût.)
#### Plan dégressif : taux 20 % × 2 = 40 %, départ au 1er novembre N
| Exercice | Base | Calcul | Dotation | Cumul | VNC fin |
|---|---|---|---|---|---|
| N (2 mois) | 712 850 | × 40 % × 2/12 | 47 523 | 47 523 | 665 327 |
| N+1 | 665 327 | × 40 % | 266 131 | 313 654 | 399 196 |
| N+2 | 399 196 | × 40 % | 159 678 | 473 332 | 239 518 |
| N+3 | 239 518 | × 40 % | 95 807 | 569 139 | 143 711 |
| N+4 | 143 711 | linéaire : × 12/22 | 78 388 | 647 527 | 65 323 |
| N+5 (10 mois) | 143 711 | linéaire : × 10/22 | 65 323 | 712 850 | 0 |
Passage au linéaire au début de N+4 : il reste 22 mois, le taux linéaire (12/22 = 54,5 %) dépasse 40 %. (Au début de N+3, 12/34 = 35,3 % < 40 % : on reste en dégressif.)`,
kp:["Coût d'acquisition 712 850 (prix au cours de 11 + droits de douane + commission)","TVA à l'importation exclue (récupérable)","Taux dégressif 40 % et prorata de 2 mois en N","Passage au linéaire quand le taux linéaire résiduel dépasse 40 % (N+4)","Plan soldé à 0 fin N+5"]},
{pts:4, q:"2. Écritures à la date d'acquisition et à la clôture (31/12/N).",
chk:[{l:"Écart de conversion sur la dette (gain latent)",v:4000,u:"DH"}],
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **01/11/N** | **Réception de la machine — facture F001 (55 000 € × 11)** | | |
| 2332 | Matériel et outillage | 605 000 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 605 000 |
| **01/11/N** | **Virement de 35 000 € × 11** | | |
| 4481 | Dettes sur acquisitions d'immobilisations | 385 000 | |
| 5141 | Banques | | 385 000 |
| **03/11/N** | **Facture du transitaire F456, chèque** | | |
| 2332 | Matériel et outillage (droits de douane 102 850 + commission 5 000) | 107 850 | |
| 34551 | État — TVA récupérable sur immobilisations (141 570 + 1 000) | 142 570 | |
| 5141 | Banques | | 250 420 |
| **31/12/N** | **Dotation aux amortissements** | | |
| 6193 | DEA des immobilisations corporelles | 47 523 | |
| 2833 | Amortissements des installations techniques, matériel et outillage | | 47 523 |
| **31/12/N** | **Dette de 20 000 € : de 220 000 (× 11) à 216 000 (× 10,8)** | | |
| 4481 | Dettes sur acquisitions d'immobilisations | 4 000 | |
| 4702 | Écarts de conversion — passif (diminution des dettes circulantes) | | 4 000 |
Le **gain de change latent** (4 000) n'est pas comptabilisé en produit (prudence) : il reste au passif jusqu'au règlement ; aucune provision n'est nécessaire.`,
kp:["Dette en devises enregistrée au cours du jour (605 000)","Règlement partiel 385 000","Frais du transitaire : droits et commission à l'actif, TVA récupérable 142 570","Dotation 47 523 au 31/12","Écart de conversion passif 4 000 (4481 / 4702) sans produit"]}
]},
{title:"CG — Dossier 3 : Coût de production d'un bâtiment (ALPHA)", pts:2, pages:[348,348], th:["cg-immo","cg-eval"],
ctx:`L'entreprise ALPHA a entamé la construction d'un bâtiment en mars N-1 qu'elle compte utiliser pour ses propres besoins. La construction a été achevée et livrée le 30 décembre N. Coûts relatifs au bâtiment :
- Charges constatées en N-1 : total des charges transférées à l'actif en N-1 : 175 000 DH.
- Charges constatées en N : matières et fournitures 400 000 DH ; charges directes de production 250 000 DH ; charges indirectes de production 120 000 DH ; frais d'administration générale 50 000 DH ; intérêts de l'emprunt contracté pour le financement spécifique de la production : au cours de la production 20 000 DH, après la mise en service 15 000 DH.
1. Calculer le coût de production du bâtiment. 2. Enregistrer cette immobilisation au livre-journal à la date de la livraison (TVA 20 %).`,
questions:[
{pts:2, q:"Calculer le coût de production du bâtiment et l'enregistrer à la date de livraison (TVA 20 %).",
chk:[{l:"Coût de production du bâtiment",v:965000,u:"DH",alt:[945000]}],
model:`| Élément | Traitement | Montant |
|---|---|---|
| Charges de N-1 (immobilisation en cours) | Incluses | 175 000 |
| Matières et fournitures | Incluses | 400 000 |
| Charges directes de production | Incluses | 250 000 |
| Charges indirectes de production | Incluses | 120 000 |
| Frais d'administration générale | **Exclus** | — |
| Intérêts pendant la production (financement spécifique, fabrication de 22 mois) | **Inclus** (option) | 20 000 |
| Intérêts après la mise en service | **Exclus** (charge financière) | — |
| **Coût de production** | | **==965 000==** |
(Sans l'option d'incorporation des intérêts : 945 000.)
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2321 | Bâtiments | 965 000 | |
| 2392 | Immobilisations corporelles en cours (coûts de N-1) | | 175 000 |
| 7143 | Immobilisations corporelles produites | | 790 000 |
| 34551 | État — TVA récupérable sur immobilisations | 193 000 | |
| 4455 | État — TVA facturée (livraison à soi-même 20 %) | | 193 000 |
La livraison à soi-même d'une construction à usage professionnel est imposable à la TVA (sur le coût de revient, hors terrain) ; la TVA est simultanément collectée et déductible.`,
kp:["Inclusion matières, charges directes et indirectes de production","Exclusion des frais d'administration générale et des intérêts postérieurs à la mise en service","Intérêts pendant la production inclus (option) → 965 000","Solde de l'immobilisation en cours (175 000) et production immobilisée (790 000)","TVA sur livraison à soi-même collectée et déduite"]}
]},
{title:"CG — Dossier 4 : Écritures d'inventaire et de régularisation (OMEGA)", pts:6, pages:[348,348], th:["cg-inventaire","cg-amort"],
ctx:`La société OMEGA vous communique les informations suivantes au 31/12/N :
1. Les réparations effectuées au cours de l'exercice N au titre des **garanties** données aux clients sur les ventes de N-1 se sont finalement élevées à **54 000 DH**. Le montant de ces réparations est estimé chaque année à **5 % du chiffre d'affaires** (CA N-1 : 1 200 000 HT ; CA N : 1 300 000 DH HT).
2. État des créances clients douteux au 31/12/N :
| Clients | Créances TTC (TVA 20 %) | Provisions au 31/12/N-1 | Règlements en N | Observations |
|---|---|---|---|---|
| BALI | 294 720 | 122 800 | 99 000 | Perte probable : 50 % du solde |
| COKA | 46 800 | 13 000 | 0 | Le client a déposé le bilan sans possibilité de récupérer la créance |
3. Les ristournes sur ventes de marchandises à accorder aux clients s'élèvent à 25 500 DH HT (TVA 20 %).
4. Des marchandises relatives à une facture d'achat enregistrée le 15/12/N pour 70 800 DH TTC n'ont pas été réceptionnées (TVA 20 %).
5. Un emprunt de 100 000 DH a été obtenu le 01/03/N au taux d'intérêt annuel HT de 7,5 %. Les intérêts courent à cette date (TVA 10 %).
**Passer les écritures d'inventaire et de régularisation nécessaires au 31/12/N au journal de la société OMEGA.**`,
questions:[
{pts:6, q:"Passer les écritures d'inventaire et de régularisation au 31/12/N.",
chk:[{l:"Provision nécessaire sur BALI au 31/12/N",v:81550,u:"DH"},{l:"Reprise de provision sur BALI",v:41250,u:"DH"},{l:"Intérêts courus sur l'emprunt",v:6250,u:"DH"}],
model:`#### 1. Garanties clients
Provision au 31/12/N-1 : 5 % × 1 200 000 = 60 000 (couvre les réparations de N, comptabilisées en charges pour 54 000) → **reprise de 60 000** ; nouvelle provision : 5 % × 1 300 000 = **65 000**.
#### 2. Créances douteuses
- **BALI** : solde TTC 294 720 − 99 000 = 195 720 → HT 163 100 ; provision nécessaire 50 % = **81 550** ; provision existante 122 800 → **reprise 41 250**.
- **COKA** : créance irrécouvrable (dépôt de bilan, aucune récupération) : perte HT 39 000, TVA récupérée 7 800, reprise de la provision de 13 000.
#### 3 à 5. Ristournes, marchandises non reçues, intérêts courus
- Ristournes à accorder : 25 500 HT + TVA 5 100.
- Marchandises facturées non reçues : charges constatées d'avance 70 800 / 1,2 = **59 000**.
- Intérêts courus du 01/03 au 31/12 (10 mois) : 100 000 × 7,5 % × 10/12 = **6 250** (la TVA de 10 %, 625, sera déduite au paiement).
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 1512 | Provisions pour garanties données aux clients | 60 000 | |
| 7195 | Reprises sur provisions pour risques et charges | | 60 000 |
| 6195 | Dotations d'exploitation aux provisions pour risques et charges | 65 000 | |
| 1512 | Provisions pour garanties données aux clients | | 65 000 |
| 3942 | Provisions pour dépréciation des clients (BALI) | 41 250 | |
| 7196 | Reprises sur provisions pour dépréciation de l'actif circulant | | 41 250 |
| 6182 | Pertes sur créances irrécouvrables (COKA) | 39 000 | |
| 4455 | État — TVA facturée | 7 800 | |
| 3424 | Clients douteux ou litigieux | | 46 800 |
| 3942 | Provisions pour dépréciation des clients (COKA) | 13 000 | |
| 7196 | Reprises sur provisions pour dépréciation de l'actif circulant | | 13 000 |
| 7119 | RRR accordés par l'entreprise | 25 500 | |
| 4455 | État — TVA facturée | 5 100 | |
| 4427 | RRR à accorder — avoirs à établir | | 30 600 |
| 3491 | Charges constatées d'avance | 59 000 | |
| 6111 | Achats de marchandises | | 59 000 |
| 6311 | Intérêts des emprunts et dettes | 6 250 | |
| 4493 | Intérêts courus et non échus à payer | | 6 250 |`,
kp:["Garanties : reprise de 60 000 et nouvelle provision de 65 000","BALI : provision calculée sur le solde HT (81 550) → reprise 41 250","COKA : perte 6182 HT, récupération de TVA, reprise de la provision de 13 000","Ristournes à accorder : 7119 + 4455 / 4427","Marchandises non reçues : CCA 59 000 HT","Intérêts courus 10 mois = 6 250 (4493)"]}
]},
{title:"CA — Cas 1 : FILATEX (coût réel vs préétabli, analyse des écarts)", pts:10, pages:[349,350], th:["ca-ecarts"],
ctx:`À partir des documents de la société anonyme « FILATEX », on vous demande : 1/ de dresser le tableau comparatif du coût réel et du coût préétabli de la commande n° 617 (5 points) ; 2/ d'analyser les écarts globaux sur le coton, la main-d'œuvre directe et les frais de l'atelier bobinage (5 points).
**Doc. 1** — Commande n° 617 : 42 000 canettes (bobines), référence B.R 600Z, livrées en décembre 2020.
**Doc. 2** — Livraisons : 11 décembre 15 000 ; 21 décembre 15 000 ; 31 décembre 12 000 canettes. NB : production normale 50 000 canettes.
**Doc. 3** — Sorties de coton pour la commande : 840 kg (01/12), 890 kg (09/12), 850 kg (18/12), 780 kg (24/12) ; CMUP périodique de décembre : 1,20 DH/kg.
**Doc. 4** — Salaires et charges sociales de décembre relatifs à la commande : 8 400 heures ; 21 000 DH.
**Doc. 5** — Atelier bobinage : unité d'œuvre l'heure machine ; total des charges indirectes de décembre 31 500 DH ; 9 000 unités d'œuvre.
**Doc. 6** — Coût standard d'une canette B.R 600Z : coton 0,075 kg à 1,30 DH/kg ; main-d'œuvre directe 12,60 minutes à 2,64 DH/heure ; section bobinage 0,2 unité d'œuvre à 3,40 DH/UO (dont 1,25 DH de charges fixes).`,
questions:[
{pts:5, q:"1/ Tableau comparatif du coût réel et du coût préétabli de la commande n° 617.",
chk:[{l:"Coût réel total de la commande",v:56532,u:"DH",tol:1},{l:"Coût préétabli de la production réelle",v:55939.8,u:"DH",tol:1},{l:"Écart global (+ = défavorable)",v:592.2,u:"DH",tol:1}],
model:`Production réelle : 42 000 canettes. Coton consommé : 840 + 890 + 850 + 780 = 3 360 kg. Coût standard unitaire : 0,0975 + 0,5544 + 0,68 = **1,3319 DH**.
| Élément | Réel : Q | Réel : P | Réel : montant | Préétabli : Q | Préétabli : P | Préétabli : montant | Écart |
|---|---|---|---|---|---|---|---|
| Coton (kg) | 3 360 | 1,20 | 4 032,00 | 3 150 | 1,30 | 4 095,00 | − 63,00 (F) |
| MOD (h) | 8 400 | 2,50 | 21 000,00 | 8 820 | 2,64 | 23 284,80 | − 2 284,80 (F) |
| Bobinage (UO) | 9 000 | 3,50 | 31 500,00 | 8 400 | 3,40 | 28 560,00 | + 2 940,00 (D) |
| **Total** | | | **56 532,00** | | | **55 939,80** | **+ 592,20 (D)** |
Quantités préétablies pour 42 000 canettes : coton 42 000 × 0,075 = 3 150 kg ; MOD 42 000 × 0,21 h = 8 820 h ; bobinage 42 000 × 0,2 = 8 400 UO.`,
kp:["Consommation réelle de coton 3 360 kg à 1,20","Coût horaire réel 2,50 et coût de l'UO réel 3,50","Préétabli adapté à la production réelle (3 150 kg, 8 820 h, 8 400 UO)","Totaux 56 532 et 55 939,80 ; écart global + 592,20 défavorable"]},
{pts:5, q:"2/ Analyse des écarts globaux sur le coton, la MOD et l'atelier bobinage.",
chk:[{l:"Écart sur quantité de coton",v:273,u:"DH"},{l:"Écart sur taux de MOD",v:-1176,u:"DH"},{l:"Écart sur budget du bobinage",v:-350,u:"DH"},{l:"Écart d'activité du bobinage",v:1250,u:"DH"},{l:"Écart de rendement du bobinage",v:2040,u:"DH"}],
model:`#### Coton (écart global − 63, favorable)
- Écart sur quantité = (3 360 − 3 150) × 1,30 = **+ 273 (D)** : surconsommation de 210 kg (6,7 %).
- Écart sur prix = (1,20 − 1,30) × 3 360 = **− 336 (F)** : coton payé 0,10 DH/kg moins cher.
#### Main-d'œuvre directe (écart global − 2 284,80, favorable)
- Écart sur temps = (8 400 − 8 820) × 2,64 = **− 1 108,80 (F)** : 420 heures gagnées (productivité).
- Écart sur taux = (2,50 − 2,64) × 8 400 = **− 1 176 (F)** : heure payée moins cher que prévu.
#### Atelier bobinage (écart global + 2 940, défavorable)
Activité normale : 50 000 × 0,2 = 10 000 UO → charges fixes budgétées 10 000 × 1,25 = 12 500 ; coût variable 3,40 − 1,25 = 2,15 par UO.
Budget flexible pour l'activité réelle (9 000 UO) : 9 000 × 2,15 + 12 500 = 31 850.
- Écart sur budget (dépenses) = 31 500 − 31 850 = **− 350 (F)**
- Écart d'activité (imputation des charges fixes) = 31 850 − 9 000 × 3,40 = **+ 1 250 (D)** : sous-activité (9 000 UO au lieu de 10 000) → 1 000 × 1,25.
- Écart de rendement = (9 000 − 8 400) × 3,40 = **+ 2 040 (D)** : 600 heures machine de plus que la norme pour 42 000 canettes.
Contrôle : − 350 + 1 250 + 2 040 = 2 940.
**Synthèse** : les écarts favorables sur le coton et la MOD (− 2 347,80) sont absorbés par l'atelier bobinage (+ 2 940), essentiellement par un **mauvais rendement des machines** (réglages, pannes, coton de moindre qualité moins cher qui casse davantage ?) et la sous-activité.`,
kp:["Coton : écart quantité + 273 et écart prix − 336","MOD : écart temps − 1 108,80 et écart taux − 1 176","Bobinage : budget flexible (fixes 12 500, variable 2,15/UO)","Écart sur budget − 350, d'activité + 1 250, de rendement + 2 040","Interprétation et lien possible entre prix du coton et rendement"]}
]},
{title:"CA — Cas 2 : FES HUB AIR (coûts variables et coûts spécifiques)", pts:10, pages:[351,352], th:["ca-variable"],
ctx:`FES HUB AIR (FHA) exploite une flotte de **4 avions** basée à Fès, chacun affecté à une ligne : Fès-Casablanca, Fès-Séville, Fès-Malaga et Fès-Barcelone. Les avions effectuent **deux trajets aller-retour par jour, six jours par semaine, 52 semaines par an**. Prévisions 2022 (pour un aller simple) :
| Lignes | Casablanca | Séville | Malaga | Barcelone |
|---|---|---|---|---|
| Temps de vol (en heure) | 0,7 | 1,5 | 0,9 | 1,7 |
| Passagers classe affaires | 15 | 30 | 40 | 20 |
| Passagers classe touriste | 80 | 60 | 60 | 90 |
| Tarif aller simple affaires | 500 DH | 950 DH | 700 DH | 900 DH |
| Tarif aller simple touriste | 200 DH | 400 DH | 250 DH | 500 DH |
Carburant et entretien par heure de vol : 30 000 DH. Rémunération de l'équipage par avion et par jour de vol : 8 000 DH. Charges fixes annuelles par avion : 2 000 000 DH. Charges fixes annuelles d'administration générale : 30 000 000 DH.
1. Présenter (tableau de l'annexe 1 : CA affaires/touriste, coûts variables carburant/équipage, MCV, charges fixes spécifiques, marge sur coût spécifique, administration générale, résultat) le calcul des marges sur coûts variables et sur coûts spécifiques de chaque ligne et le résultat prévisible 2022. (2 pts)
2. Commenter ce tableau. Quels conseils donner à l'entreprise ? (2 pts)
3. La direction étudie une hausse du tarif sur Casablanca : affaires 600 DH et touriste 250 DH, entraînant une baisse du nombre de passagers de 10 % en affaires et de 25 % en touriste. Étudier les conséquences. Conseils ? (2 pts)
4. Rappeler les avantages et les limites de la méthode des coûts spécifiques. (2 pts)
5. Pourrait-on contester certaines hypothèses de répartition des coûts entre les lignes ? (2 pts)`,
questions:[
{pts:2, q:"1. Tableau des marges sur coûts variables et sur coûts spécifiques ; résultat 2022.",
chk:[{l:"MCV de la ligne Casablanca",v:624000,u:"DH",tol:5},{l:"Marge sur coût spécifique totale",v:29440000,u:"DH",tol:50},{l:"Résultat prévisionnel 2022",v:-560000,u:"DH",tol:50}],
model:`Nombre d'allers simples par ligne et par an : 2 allers-retours × 2 × 6 jours × 52 semaines = **1 248** ; jours de vol par avion : 6 × 52 = **312**.
| Lignes (en DH) | Fès-Casablanca | Fès-Malaga | Fès-Séville | Fès-Barcelone | Ensemble |
|---|---|---|---|---|---|
| CA affaires | 9 360 000 | 34 944 000 | 35 568 000 | 22 464 000 | 102 336 000 |
| CA touriste | 19 968 000 | 18 720 000 | 29 952 000 | 56 160 000 | 124 800 000 |
| **Total CA** | **29 328 000** | **53 664 000** | **65 520 000** | **78 624 000** | **227 136 000** |
| Carburant (h × 1 248 × 30 000) | 26 208 000 | 33 696 000 | 56 160 000 | 63 648 000 | 179 712 000 |
| Équipage (312 × 8 000) | 2 496 000 | 2 496 000 | 2 496 000 | 2 496 000 | 9 984 000 |
| **Total CV** | **28 704 000** | **36 192 000** | **58 656 000** | **66 144 000** | **189 696 000** |
| **MCV** | **624 000** | **17 472 000** | **6 864 000** | **12 480 000** | **37 440 000** |
| Taux de MCV | 2,1 % | 32,6 % | 10,5 % | 15,9 % | 16,5 % |
| Charges fixes spécifiques | 2 000 000 | 2 000 000 | 2 000 000 | 2 000 000 | 8 000 000 |
| **Marge sur coût spécifique** | **− 1 376 000** | **15 472 000** | **4 864 000** | **10 480 000** | **29 440 000** |
| Administration générale | | | | | 30 000 000 |
| **Résultat** | | | | | **==− 560 000==** |`,
kp:["1 248 allers simples et 312 jours de vol par an","CA par classe et par ligne","Carburant proportionnel aux heures de vol ; équipage par jour de vol","MCV par ligne (Casablanca 624 000 seulement)","Marges sur coûts spécifiques et résultat − 560 000"]},
{pts:2, q:"2. Commentaire du tableau et conseils.",
model:`- L'entreprise est **légèrement déficitaire** (− 560 000) : la marge sur coûts spécifiques (29,44 M) ne couvre pas les 30 M de frais d'administration.
- **Malaga** est la ligne la plus rentable (taux de MCV 32,6 %, grâce à 40 passagers affaires) ; **Barcelone** apporte la 2e contribution.
- **Casablanca** a une MCV quasi nulle (2,1 %) et une **marge sur coût spécifique négative (− 1,376 M)** : elle ne couvre pas ses propres charges fixes. Si l'avion et ses charges fixes pouvaient être supprimés (revente, location), le résultat s'améliorerait de 1,376 M (→ + 816 000).
- **Conseils** : ne pas supprimer Casablanca sans étudier son rôle stratégique (ligne d'apport vers le hub de Casablanca, image, obligations de desserte) ; agir sur le **remplissage** et le **prix** (yield management), réaffecter éventuellement l'avion à une seconde fréquence vers Malaga ou Barcelone ; réduire le poids des frais d'administration (30 M, soit 13 % du CA) ; négocier le coût du carburant/entretien, poste majeur (79 % du CA).`,
kp:["Résultat global légèrement négatif dû aux frais d'administration","Classement des lignes (Malaga meilleure)","Casablanca : marge spécifique négative → n'est pas « autofinancée »","Conseils nuancés (rôle stratégique, prix/remplissage, réaffectation, réduction des frais généraux)"]},
{pts:2, q:"3. Conséquences de la hausse de tarif sur Casablanca ; conseils.",
chk:[{l:"Variation du CA annuel de la ligne Casablanca",v:-499200,u:"DH",tol:5}],
model:`Nouveau CA par vol : affaires 15 × 0,9 = 13,5 passagers × 600 = 8 100 ; touriste 80 × 0,75 = 60 × 250 = 15 000 ⇒ 23 100 au lieu de 23 500 (− 400 par vol).
- CA annuel : 23 100 × 1 248 = 28 828 800 ⇒ **− 499 200 DH**.
- Les coûts variables (carburant à l'heure, équipage au jour) ne dépendent pas du nombre de passagers : ils sont inchangés. La MCV tombe à 124 800 et la marge spécifique à − 1 875 200 : **le projet dégrade le résultat de 499 200 DH**.
- La demande touriste est très **élastique** (− 25 % de passagers pour + 25 % de prix) : il ne faut pas augmenter ce tarif.
- En revanche, la hausse en **classe affaires seule** est intéressante : 13,5 × 600 = 8 100 contre 7 500 → + 600 par vol, soit **+ 748 800 DH par an** (demande peu élastique). **Conseil** : augmenter uniquement le tarif affaires (et étudier une tarification modulée selon les jours et horaires en touriste).`,
kp:["Nouveaux nombres de passagers (13,5 et 60) et nouveau CA par vol 23 100","Baisse du CA annuel de 499 200 ; coûts variables inchangés","Projet global à rejeter","Conseil : hausse de la seule classe affaires (+ 748 800)"]},
{pts:2, q:"4. Avantages et limites de la méthode des coûts spécifiques.",
model:`**Avantages**
- Montre la **contribution** de chaque segment (ligne, produit, client) à la couverture des **charges communes** et au résultat.
- Évite la répartition **arbitraire** des charges fixes communes (pas de clé contestable).
- Outil de **décision à court terme** : maintien ou abandon d'un segment (un segment à marge spécifique positive doit être conservé à court terme), choix d'investissement ou de prix plancher.
- Responsabilise les gestionnaires de chaque segment.
**Limites**
- La frontière entre charges **spécifiques** et **communes** est parfois délicate ; certaines charges spécifiques ne sont pas évitables à court terme (contrats de location d'avions, personnel).
- Ne donne pas de **coût complet** : insuffisant pour fixer des prix à long terme.
- Ignore les **interdépendances** entre segments (effet réseau, passagers en correspondance, image).
- Vision de court terme ; hypothèse de linéarité des coûts variables.`,
kp:["Contribution à la couverture des charges communes","Pas de répartition arbitraire des charges communes","Aide à la décision (maintien/abandon)","Limites : frontière spécifique/commun, pas de coût complet, interdépendances, court terme"]},
{pts:2, q:"5. Hypothèses de répartition des coûts contestables.",
model:`- **Équipage traité en charge variable** (par jour de vol) alors que les équipages sont salariés : c'est en réalité une charge **fixe spécifique** à chaque avion.
- **Carburant et entretien identiques par heure de vol** pour toutes les lignes : la consommation dépend du type d'avion et surtout des **cycles décollage/atterrissage** ; un vol court (Casablanca, 0,7 h) consomme proportionnellement plus par heure, et l'entretien dépend du nombre de cycles plus que des heures.
- **Charges fixes identiques par avion** (2 M) : les appareils peuvent différer (âge, taille, financement).
- **Charges liées aux passagers ignorées** : redevances aéroportuaires, taxes d'atterrissage (différentes au Maroc et en Espagne), assistance, restauration, commissions de distribution.
- **Hypothèses d'activité** : remplissage moyen constant toute l'année et 6 jours/7 sans saisonnalité ; pas de prise en compte des passagers en correspondance (recettes réparties entre lignes).
- L'**administration générale** non répartie est cohérente avec la méthode, mais une partie pourrait être spécifique (agences à Séville, Malaga, Barcelone).`,
kp:["Équipage plutôt fixe que variable","Carburant/entretien liés aux cycles plus qu'aux heures (lignes courtes pénalisées)","Coûts liés aux passagers et redevances aéroportuaires omis","Hypothèses de remplissage, saisonnalité et correspondances discutables"]}
]}
]});

EXAMS.push({
id:"droit-2022", subject:"droit", year:2022, session:"12-13 novembre 2022", title:"Droit des affaires et droit fiscal", date:"Samedi 12 novembre 2022", duration:180, pages:[353,357],
note:"Deux copies séparées : droit des affaires /20 (4 points par question retenus) et droit fiscal /20",
sections:[
{title:"Droit des affaires — Questions", pts:20, pages:[354,354], th:["da-organes","da-difficultes","da-fonds","da-constitution"],
ctx:`Répondez aux questions suivantes. Vos réponses doivent être argumentées, précises et concises. Évitez de faire des développements inutiles et hors sujet.
1. Quelles sont les conditions de nomination d'un administrateur indépendant, ses droits et ses obligations ?
2. Quelles sont les dispositions prévues par la loi sur la SA pour protéger les actionnaires minoritaires ?
3. Quels sont les apports de la loi n° 73-17 portant réforme du livre V du Code de commerce ?
4. Quelles sont les principales caractéristiques de la société par actions simplifiée et quel est l'apport de cette nouvelle forme de société ?
5. Le privilège du vendeur est une garantie prévue en matière de cession de fonds de commerce. Dans quelles conditions cette garantie est-elle mise en œuvre ?`,
questions:[
{pts:4, q:"1. Conditions de nomination d'un administrateur indépendant, ses droits et ses obligations.",
model:`Introduit dans la loi 17-95 par la **loi 20-19 (2019)** pour renforcer la gouvernance, en particulier des sociétés **faisant appel public à l'épargne**, qui doivent en compter un ou plusieurs (leur nombre est encadré par la loi par rapport à l'effectif du conseil).
#### Conditions (critères d'indépendance)
L'administrateur indépendant ne doit entretenir **aucune relation** avec la société, son groupe ou sa direction susceptible de compromettre sa liberté de jugement. Notamment, il ne doit pas :
- être ou avoir été, au cours des dernières années, **salarié ou dirigeant** de la société ou d'une société du groupe ;
- être **client, fournisseur ou banquier significatif** de la société ;
- avoir de **lien familial proche** avec un dirigeant ou un actionnaire de référence ;
- avoir été **commissaire aux comptes** de la société au cours des dernières années, ni administrateur depuis une durée excessive ;
- représenter un actionnaire significatif.
Il est nommé par l'**assemblée générale ordinaire**, sur proposition du conseil (souvent après appel à candidatures / comité des nominations).
#### Droits
Mêmes droits que tout administrateur : **information** complète et préalable, participation et **vote** aux délibérations, accès aux documents, possibilité de **présider ou siéger aux comités** (audit, rémunérations) ; rémunération limitée aux **jetons de présence** (pas d'autre lien financier).
#### Obligations
Devoir de **diligence** et d'assiduité, **loyauté** et **confidentialité**, déclaration de tout **conflit d'intérêts** (et perte de la qualité d'indépendant si les critères ne sont plus remplis), responsabilité civile et pénale d'administrateur.`,
kp:["Origine : loi 20-19, obligation pour les sociétés faisant appel public à l'épargne","Critères d'indépendance (pas de lien salarial, commercial, familial, de contrôle)","Nomination par l'AGO","Droits : information, vote, comités, jetons de présence","Obligations : diligence, loyauté, confidentialité, conflits d'intérêts, responsabilité"]},
{pts:4, q:"2. Dispositions de la loi sur la SA protégeant les actionnaires minoritaires.",
model:`- **Droit à l'information** : communication permanente des documents sociaux (comptes, rapports, PV des AG des 3 derniers exercices) et avant chaque AG ; **questions écrites** auxquelles le conseil doit répondre en assemblée.
- **Inscription de projets de résolutions** à l'ordre du jour par un ou plusieurs actionnaires détenant une fraction du capital fixée par la loi.
- **Convocation de l'AG** par un mandataire désigné en justice à la demande d'actionnaires détenant au moins 10 % du capital.
- **Expertise de gestion** : des actionnaires représentant au moins 10 % du capital peuvent demander au président du tribunal la désignation d'un expert chargé d'un rapport sur une ou plusieurs opérations de gestion.
- **Récusation / révocation du commissaire aux comptes** pour juste motif à la demande d'actionnaires minoritaires.
- **Conventions réglementées** : autorisation préalable du conseil, rapport spécial du CAC, approbation de l'AG sans vote de l'intéressé.
- **Droit préférentiel de souscription** lors des augmentations de capital (suppression encadrée).
- **Minorité de blocage** : les décisions extraordinaires exigent les **2/3** des voix ; un tiers des voix suffit à bloquer.
- **Actions en responsabilité** contre les dirigeants (action sociale *ut singuli* exercée par un ou plusieurs actionnaires) ; nullité des décisions prises en **abus de majorité**.
- Pour les sociétés cotées : administrateurs indépendants, comité d'audit, offres publiques de retrait (loi 26-03).`,
kp:["Information permanente et questions écrites","Inscription de résolutions et convocation de l'AG par mandataire de justice","Expertise de gestion (10 %)","Conventions réglementées et récusation du CAC","DPS, minorité de blocage (1/3), action ut singuli, abus de majorité"]},
{pts:4, q:"3. Apports de la loi n° 73-17 réformant le livre V du Code de commerce (entreprises en difficulté).",
model:`La loi 73-17 (2018) a refondu le livre V pour mieux **prévenir** et **sauver** les entreprises et **protéger les créanciers** :
1. **Prévention renforcée** : prévention interne (procédure d'alerte du commissaire aux comptes et des associés) et externe (président du tribunal : convocation des dirigeants, **mandataire spécial**, **conciliation** avec accord amiable homologué ou non).
2. **Création de la procédure de sauvegarde** : ouverte à la demande du chef d'entreprise **avant la cessation des paiements**, lorsqu'il rencontre des difficultés qu'il ne peut surmonter ; plan de sauvegarde arrêté par le tribunal.
3. **Place des créanciers** : institution d'une **assemblée des créanciers** consultée sur le projet de plan ; rôle des créanciers contrôleurs ; meilleure organisation de la déclaration et de la vérification des créances.
4. **Redressement et liquidation** modernisés : délais, rôle et contrôle du **syndic**, cession de l'entreprise, sort des contrats en cours ; protection des apporteurs de financements nouveaux.
5. **Insolvabilité transfrontalière** : règles nouvelles pour les procédures ouvertes au Maroc et à l'étranger (reconnaissance, coopération).
6. **Sanctions des dirigeants** maintenues et précisées (comblement du passif, extension de la procédure, déchéance commerciale).`,
kp:["Prévention : alerte, mandataire spécial, conciliation","Nouvelle procédure de sauvegarde avant cessation des paiements","Assemblée des créanciers / meilleure place des créanciers","Modernisation du redressement et de la liquidation (syndic, cession)","Insolvabilité transfrontalière ; responsabilité des dirigeants"]},
{pts:4, q:"4. Principales caractéristiques de la SAS et apport de cette forme de société.",
model:`#### Caractéristiques
- Société **commerciale par actions**, régie par la loi 17-95 (introduite en 2008, assouplie en 2019 : ouverture aux personnes physiques, SAS à associé unique).
- **Responsabilité limitée** aux apports ; **interdiction de l'appel public à l'épargne**.
- **Liberté statutaire** : les statuts fixent l'organisation de la direction et les règles de prise de décision ; seules certaines décisions (approbation des comptes, modification du capital, fusion, dissolution…) relèvent obligatoirement de la **collectivité des associés**.
- **Président** obligatoire (personne physique ou morale) qui représente la société avec les pouvoirs les plus étendus ; possibilité de DG / DG délégués.
- **Clauses statutaires** possibles : inaliénabilité des actions (10 ans maximum), agrément, préemption, **exclusion** d'un associé, changement de contrôle ; actions de préférence et actions d'industrie.
- Commissaire aux comptes et règles de la SA applicables sauf dérogations.
#### Apport
Une forme **souple et contractuelle**, adaptée aux **filiales de groupes**, aux **joint-ventures**, aux **start-up** et à l'entrée d'**investisseurs** : elle permet de dissocier capital et pouvoir, d'organiser librement la gouvernance et de verrouiller l'actionnariat, ce qui la rend attractive pour l'investissement (notamment étranger).`,
kp:["Société par actions sans appel public à l'épargne, responsabilité limitée","Liberté statutaire d'organisation ; décisions collectives obligatoires","Président obligatoire, pouvoirs étendus","Clauses d'inaliénabilité, agrément, exclusion…","Apport : souplesse pour groupes, JV, start-up, investisseurs"]},
{pts:4, q:"5. Conditions de mise en œuvre du privilège du vendeur de fonds de commerce.",
model:`Le privilège garantit au vendeur le **paiement du prix restant dû**. Conditions :
1. **Acte de vente écrit** (authentique ou sous seing privé), enregistré, mentionnant **distinctement** le prix des éléments incorporels, du matériel et des marchandises.
2. **Inscription** du privilège au **registre du commerce** (greffe du tribunal du lieu d'exploitation) dans le **délai de 15 jours** à compter de l'acte, à peine de **nullité** (le privilège prend rang à sa date).
3. Le privilège ne porte que sur les **éléments énumérés** dans l'acte et l'inscription ; les paiements partiels s'imputent d'abord sur les marchandises, puis sur le matériel, enfin sur les éléments incorporels.
4. **Effets** : **droit de préférence** (paiement prioritaire sur le prix en cas de revente) et **droit de suite** (exercice des droits contre le sous-acquéreur) ; le vendeur peut aussi exercer l'**action résolutoire** si elle a été réservée et mentionnée dans l'inscription.
5. **Mise en œuvre** : à défaut de paiement à l'échéance, le vendeur fait procéder à la **vente forcée** du fonds ou exerce l'action résolutoire ; il doit être informé (notification) en cas de résiliation du bail ou de déplacement du fonds. L'inscription a une durée limitée et doit être **renouvelée**.`,
kp:["Acte écrit avec prix ventilé","Inscription au RC dans les 15 jours à peine de nullité","Assiette : éléments énumérés ; ordre d'imputation des paiements","Droits de préférence et de suite ; action résolutoire réservée","Mise en œuvre : vente forcée en cas de non-paiement"]}
]},
{title:"Droit fiscal — Partie I : cadre de la réglementation fiscale", pts:3, pages:[355,355], th:["df-is","df-tva","df-procedures"],
ctx:`1. Quelles sont les conditions de déductibilité des provisions ?
2. Quel est le délai légal pour la récupération de la TVA sur les charges et sur les immobilisations ?
3. Quels sont les impôts et taxes régis par le Code général des impôts ?`,
questions:[
{pts:1, q:"1. Conditions de déductibilité des provisions.",
model:`- **Conditions de fond** : constituée pour faire face à la **dépréciation d'éléments d'actif** ou à des **charges ou pertes nettement précisées** (nature et montant estimé), que des **événements en cours rendent probables** ; elle ne doit pas couvrir un risque général ou futur.
- **Conditions de forme** : **effectivement comptabilisée** à la clôture et inscrite au **tableau des provisions** joint à la déclaration.
- **Créances** : la provision n'est déductible que si un **recours judiciaire** est engagé dans les **12 mois** suivant la clôture de l'exercice de constitution.
- Les provisions **sans objet** doivent être **reprises** ; les provisions irrégulières sont **réintégrées**.`,
kp:["Perte/charge nettement précisée et probable","Comptabilisation et tableau des provisions","Créances : recours judiciaire dans les 12 mois","Reprise des provisions sans objet / réintégration des provisions irrégulières"]},
{pts:1, q:"2. Délai légal de récupération de la TVA sur les charges et les immobilisations.",
model:`- Le droit à déduction **naît** le mois du **paiement** (partiel ou total) de la facture, ou le mois de l'établissement de la **quittance de douane** pour les importations ; il s'exerce dans la déclaration de ce mois (la règle du « décalage d'un mois » a été supprimée).
- Il doit être exercé dans un **délai d'un an** à compter du mois (ou trimestre) de sa naissance, pour les **charges** comme pour les **immobilisations** ; au-delà, il est perdu.
- Pour les **immobilisations**, le crédit de TVA qui en résulte peut faire l'objet d'un **remboursement** dans les conditions de l'article 103 du CGI.`,
kp:["Naissance au mois du paiement / de la quittance de douane","Délai d'un an pour exercer le droit (charges et immobilisations)","Remboursement possible du crédit sur immobilisations"]},
{pts:1, q:"3. Impôts et taxes régis par le Code général des impôts.",
model:`Le CGI (depuis 2007) regroupe :
- l'**impôt sur les sociétés** (IS) ;
- l'**impôt sur le revenu** (IR) ;
- la **taxe sur la valeur ajoutée** (TVA) ;
- les **droits d'enregistrement** ;
- les **droits de timbre** ;
- la **taxe spéciale annuelle sur les véhicules automobiles** (TSAVA) ;
- ainsi que des contributions plus récentes (contribution sociale de solidarité sur les bénéfices et revenus, taxe sur les contrats d'assurances).
Il contient aussi les **règles d'assiette, de recouvrement, de contrôle, de contentieux et de sanctions** (procédures fiscales). La **fiscalité locale** (taxe professionnelle, taxe d'habitation, taxe de services communaux) relève de la loi 47-06, et non du CGI.`,
kp:["IS, IR, TVA","Droits d'enregistrement et de timbre, TSAVA","Procédures fiscales intégrées ; fiscalité locale hors CGI (loi 47-06)"]}
]},
{title:"Droit fiscal — Partie II : IS (traitement de diverses opérations)", pts:4, pages:[355,355], th:["df-is"],
ctx:`Quel est le traitement fiscal au regard de l'IS des opérations suivantes :
1) La société ABC dispose d'une voiture de tourisme mise à la disposition de son directeur, acquise par voie de **crédit-bail en janvier 2019**. Le loyer mensuel s'élève à 20 000 DH HT. La valeur d'acquisition du véhicule figurant dans le contrat de crédit-bail s'élève à **940 000 DH TTC**. Le contrat est conclu pour une durée de 5 ans.
2) La société ABC a enregistré les dépenses engagées dans le cadre d'une grande campagne publicitaire dans le compte charges à répartir. Le montant engagé s'élève à **800 000 DH**. Le directeur a décidé de répartir ce montant sur **4 ans**.
3) La société disposant d'un **crédit de TVA structurel** important a pris la décision de comptabiliser les charges suivantes pour leurs montants **TVA comprise** : facture d'achat d'une machine d'occasion pour 150 000 DH TTC ; facture de l'agence de voyage relative aux frais de séjour à l'étranger des administrateurs : 60 000 TTC ; facture de location d'un autocar pour le transport du personnel : 14 000 DH TTC.`,
questions:[
{pts:4, q:"Traitement fiscal au regard de l'IS des opérations 1 à 3.",
chk:[{l:"Réintégration annuelle — crédit-bail de la voiture",v:128000,u:"DH"},{l:"Réintégration annuelle — campagne publicitaire (années 1 à 4)",v:40000,u:"DH"}],
model:`#### 1) Voiture de tourisme en crédit-bail
La déduction de l'amortissement des véhicules de transport de personnes est limitée à une base de **300 000 DH TTC** (taux de 20 % par an). En cas de **crédit-bail ou de location**, la part de la redevance correspondant à l'amortissement de la fraction excédentaire n'est pas déductible :
réintégration annuelle = (940 000 − 300 000) × 20 % = **128 000 DH** (au prorata pour une année incomplète). Le reste du loyer (240 000 HT + TVA non récupérable) est déductible.
#### 2) Campagne publicitaire étalée sur 4 ans
Fiscalement, les immobilisations en non-valeur (charges à répartir) doivent être amorties à **taux constant sur 5 ans** à compter du premier exercice. Dotation comptable 800 000 / 4 = 200 000 ; dotation fiscale 800 000 / 5 = 160 000 ⇒ **réintégration de 40 000 DH** par an pendant 4 ans, puis **déduction de 160 000** la 5e année. (L'entreprise aurait aussi pu déduire la totalité en charge l'année de la dépense.)
#### 3) Charges comptabilisées TVA comprise
La TVA **récupérable** est une créance sur l'État, pas une charge : le choix de ne pas la déduire (même pour limiter un crédit structurel) ne la rend pas déductible du résultat fiscal ; l'entreprise peut demander le remboursement de son crédit dans les cas prévus par la loi.
- **Machine d'occasion** (TVA 25 000) : la base amortissable fiscale est 125 000 HT ; l'amortissement calculé sur la TVA est **réintégré** chaque année.
- **Frais de séjour des administrateurs** à l'étranger : déductibles s'ils sont engagés dans l'intérêt de la société et justifiés (sinon libéralité réintégrée en totalité) ; la TVA récupérable facturée par l'agence (sur sa prestation) est réintégrée.
- **Location d'un autocar pour le personnel** : charge sociale déductible ; la TVA sur le transport collectif du personnel est récupérable → la TVA (2 333,33 à 20 %) comptabilisée en charge est **réintégrée**.`,
kp:["Véhicule de tourisme : base plafonnée à 300 000 TTC, réintégration de 128 000 par an","Non-valeurs : amortissement fiscal sur 5 ans à taux constant → réintégration 40 000/an puis déduction en 5e année","TVA récupérable comptabilisée en charge : non déductible (réintégration)","Machine : amortissement sur la base HT","Frais de séjour : déductibles si dans l'intérêt de l'entreprise ; autocar : charge sociale déductible, TVA récupérable réintégrée"]}
]},
{title:"Droit fiscal — Partie III : IR (salaire d'un chef comptable, profit de cession de parts)", pts:7, pages:[356,356], th:["df-ir","df-ras"],
ctx:`**1 — Impôt sur les revenus salariaux (5 points)** : dans le cadre du recrutement d'un chef comptable, calculer le **salaire net mensuel** sur la base des éléments suivants (le candidat est marié et père de 3 enfants) :
| Éléments du salaire mensuel | Montant en DH |
|---|---|
| Salaire de base | 20 000,00 |
| Indemnité de logement | 2 000,00 |
| Prime de panier | 700,00 |
| Prime de transport | 500,00 |
| Indemnité de représentation | 2 500,00 |
| **Salaire brut** | **25 700,00** |
| Part salariale CNSS | 4,29 % |
| Part salariale assurance maladie obligatoire | 2 % |
| Part salariale retraite | 6 % |
Barème IR annuel : 0 à 30 000 exonéré ; 30 001 à 50 000 : 10 % (3 000) ; 50 001 à 60 000 : 20 % (8 000) ; 60 001 à 80 000 : 30 % (14 000) ; 80 001 à 180 000 : 34 % (17 200) ; 180 001 et plus : 38 % (24 400).
**2 — Impôt sur les revenus et profits de capitaux mobiliers (2 points)** : dans le cadre d'une prise de participation dans le capital d'une PME, calculer l'impôt sur le revenu dû lors de la cession des parts sociales souscrites, prévue dans 5 ans : nombre de parts à souscrire 10 000 ; prix de souscription à l'augmentation du capital : 150 DH par part dont 50 DH de prime d'émission ; prix de cession estimé à l'horizon de 5 ans : 180 DH par part.`,
questions:[
{pts:5, q:"1. Salaire net mensuel du chef comptable.",
chk:[{l:"Salaire brut imposable mensuel",v:22500,u:"DH"},{l:"Revenu net imposable mensuel",v:17942.6,u:"DH",tol:2},{l:"IR mensuel",v:4664.85,u:"DH",tol:3},{l:"Salaire net mensuel",v:18977.75,u:"DH",tol:5}],
model:`#### Salaire brut imposable (règles 2022)
| Élément | Brut | Exonéré | Imposable |
|---|---|---|---|
| Salaire de base | 20 000 | | 20 000 |
| Indemnité de logement (avantage en argent) | 2 000 | | 2 000 |
| Prime de panier (exonérée dans la limite de 2 SMIG horaires par jour) | 700 | 700 | 0 |
| Prime de transport (exonérée dans la limite de 500 DH/mois) | 500 | 500 | 0 |
| Indemnité de représentation (exonérée à 10 % du salaire de base) | 2 500 | 2 000 | 500 |
| **Total** | **25 700** | **3 200** | **22 500** |
#### Revenu net imposable mensuel
| | Montant |
|---|---|
| Salaire brut imposable | 22 500,00 |
| Frais professionnels : 20 % × (22 500 − 2 000 d'avantage) = 4 100, plafonnés à 2 500/mois (30 000/an) | − 2 500,00 |
| CNSS : 4,29 % × 6 000 (plafond) | − 257,40 |
| AMO : 2 % × 22 500 | − 450,00 |
| Retraite : 6 % × 22 500 | − 1 350,00 |
| **Revenu net imposable** | **17 942,60** |
#### IR mensuel (barème annuel / 12)
IR brut = 17 942,60 × 38 % − 2 033,33 = 4 784,86 ; charges de famille : 4 × 30 = − 120 ⇒ **IR = 4 664,86 DH**.
#### Salaire net
25 700 − 257,40 − 450 − 1 350 − 4 664,86 = **==18 977,74 DH==** par mois.
> Depuis 2023, les frais professionnels passent à 25 % plafonnés à 35 000 DH/an et la déduction pour charges de famille à 500 DH par personne (2025) : refaire le calcul avec le barème en vigueur.`,
kp:["Exonération de la prime de panier et de la prime de transport (limites)","Indemnité de représentation exonérée à 10 % du salaire de base","Frais professionnels 20 % plafonnés à 2 500/mois (2022)","Cotisations : CNSS plafonnée, AMO, retraite","IR mensuel ≈ 4 664,86 après charges de famille","Net ≈ 18 977,74"]},
{pts:2, q:"2. IR dû lors de la cession des parts sociales dans 5 ans.",
chk:[{l:"Profit net de cession",v:300000,u:"DH"},{l:"IR sur le profit",v:60000,u:"DH"}],
model:`Le profit de cession de **titres de capital non cotés** (parts sociales) relève des **revenus et profits de capitaux mobiliers**, imposés au taux de **20 %** (taux proportionnel libératoire).
- Prix d'acquisition = prix de souscription, **prime d'émission comprise** : 150 DH par part.
- Profit net = (180 − 150) × 10 000 = **300 000 DH** (diminué des frais de cession justifiés, le cas échéant).
- **IR = 300 000 × 20 % = ==60 000 DH==**, à déclarer et verser spontanément dans les 30 jours suivant la cession (pas d'exonération : le seuil annuel de cessions de 30 000 DH est dépassé).`,
kp:["Profit de cession de titres non cotés : taux de 20 %","Coût d'acquisition incluant la prime d'émission (150)","Profit 300 000 et IR 60 000","Déclaration et paiement spontanés"]}
]},
{title:"Droit fiscal — Partie IV : TVA de septembre 2022 (société HNEGOCE)", pts:6, pages:[357,357], th:["df-tva"],
ctx:`Au titre de septembre 2022, la société HNEGOCE, spécialisée dans la distribution des produits textiles, a réalisé les opérations suivantes :
| Encaissements | Montant encaissé (DH) |
|---|---|
| Encaissements sur chiffre d'affaires taxable | 1 200 000,00 |
| Encaissements sur chiffre d'affaires export | 3 000 000,00 |
| Encaissement du produit de cession de deux voitures de direction | 250 000,00 |
| Encaissements sur produit de cession d'un camion utilisé pour le transport des marchandises | 300 000,00 |
| Encaissement du prix de vente de déchets | 10 000,00 |
- Livraison à soi-même / articles distribués gratuitement aux salariés : coût d'achat 20 000 DH HT ; prix de vente normal 30 000 DH HT.
- Paiement d'une facture d'achat d'emballage pour 12 000 DH, par virement daté du 30/09/2022 et débité au niveau du relevé bancaire du mois d'octobre 2022.
- Paiement en date du 26/10/2022 de la facture du transitaire comportant les droits de douane de 200 000 DH et la TVA de 45 000 DH, sur une importation ; date de quittance de paiement des droits de douane : août 2022.
- Achat de fournitures de bureau pour 15 000 DH TTC (TVA 20 %) payé par traite acceptée le 12/09/2022 à échéance le 30/11/2022.
- Facture d'électricité de 5 000 DH TTC payée le 30 septembre 2022 en espèces.
- Factures de leasing de la voiture du président (15 000 DH TTC) et du camion (25 000 TTC) payées par prélèvement bancaire le 01/09/2022.
- Achat du gasoil pour le camion pour 5 000 DH TTC payé en espèces le 15/09/2022.
- Le 10/09/2022, compensation des créances et dettes réciproques vis-à-vis d'un client qui est en même temps fournisseur : montant de la créance compensée 250 000 DH TTC.
**Travail à faire** : 1. TVA collectée de septembre 2022 ; 2. TVA déductible (prorata 100 %) ; 3. TVA due.`,
questions:[
{pts:6, q:"Calculer la TVA collectée, la TVA déductible et la TVA due de septembre 2022.",
chk:[{l:"TVA collectée",v:297333.33,u:"DH",tol:5},{l:"TVA déductible",v:45833.33,u:"DH",tol:5},{l:"TVA due",v:251500,u:"DH",tol:5}],
model:`#### 1. TVA collectée (régime de l'encaissement, taux 20 %)
| Opération | Traitement | TVA |
|---|---|---|
| CA taxable encaissé (1 200 000 TTC) | 1 200 000 × 20/120 | 200 000,00 |
| CA export | Exonéré avec droit à déduction | 0 |
| Cession de deux voitures de direction | Véhicules de tourisme dont la TVA n'a pas été déduite : cession non taxable | 0 |
| Cession du camion (300 000 TTC) | Bien d'investissement ayant ouvert droit à déduction : cession taxable | 50 000,00 |
| Vente de déchets (10 000 TTC) | Taxable | 1 666,67 |
| Articles distribués gratuitement aux salariés | Livraison à soi-même taxable sur le coût d'achat (20 000 × 20 %) | 4 000,00 |
| Créance compensée (250 000 TTC) | La compensation vaut **encaissement** | 41 666,67 |
| **Total** | | **297 333,33** |
#### 2. TVA déductible de septembre
| Opération | Traitement | TVA |
|---|---|---|
| Emballages (virement du 30/09 débité en octobre) | Paiement effectif en octobre → déclaration d'octobre | 0 |
| TVA à l'importation (quittance d'août) | Déductible en **août** (mois de la quittance), pas en septembre | 0 |
| Fournitures de bureau (traite à échéance 30/11) | Déductibles en novembre | 0 |
| Électricité 5 000 TTC payée en espèces | Paiement en espèces d'un montant **égal ou supérieur à 5 000 DH** : TVA non déductible | 0 |
| Leasing de la voiture du président | Véhicule de transport de personnes : exclu | 0 |
| Leasing du camion (25 000 TTC) | Véhicule utilitaire : déductible | 4 166,67 |
| Gasoil payé en espèces (5 000) | Exclu (paiement en espèces ≥ 5 000 DH) | 0 |
| Dette compensée (250 000 TTC) | La compensation vaut **paiement** | 41 666,67 |
| **Total** | | **45 833,33** |
#### 3. TVA due de septembre 2022
297 333,33 − 45 833,33 = **==251 500 DH==**
> Si l'on retient la date du virement (30/09) pour les emballages, on déduit en plus 2 000 → 249 500. Si la LASM est valorisée au prix de vente normal (30 000), la TVA collectée augmente de 2 000.`,
kp:["CA taxable : 200 000 ; export exonéré","Cession des voitures de tourisme non taxable ; cession du camion taxable (50 000)","Déchets taxables ; LASM des articles offerts (4 000)","Compensation = encaissement et paiement (41 666,67 de part et d'autre)","Import déductible au mois de la quittance (août) ; traite à l'échéance ; virement débité en octobre","Paiements en espèces ≥ 5 000 DH et véhicule de tourisme exclus","TVA due 251 500"]}
]}
]});

(function(){
  const src=EXAMS.find(e=>e.id==="gest-2024");
  const ht=src?JSON.parse(JSON.stringify(src.sections[0])):null;
  if(ht){ht.pages=[359,359];}
  EXAMS.push({
  id:"gest-2022", subject:"gest", year:2022, session:"12-13 novembre 2022", title:"Étude de cas de gestion", date:"Dimanche 13 novembre 2022", duration:300, pages:[358,361],
  note:"6 exercices — tables financières et calculatrice non programmable autorisées",
  sections:[
  ht||{title:"Exercice 1 : Choix d'investissement (High Tech Casablanca)",pts:5,th:["g-invest"],questions:[{pts:5,q:"Voir l'épreuve 2024 (même exercice).",model:"Même exercice qu'en 2024."}]},
  {title:"Exercice 2 : Seuil de rentabilité (Restaubus)", pts:4, pages:[359,359], th:["g-rentabilite","ca-variable"],
  ctx:`La société Restaubus fabrique, conditionne et distribue des sandwichs. Elle fournit gratuitement à ses clients (cafetiers) le four nécessaire pour réchauffer les sandwichs. Elle travaille de façon continue toute l'année (52 semaines).
- Prix de vente d'un sandwich : **22 DH**
- Pain : 45 DH le pain de 50 tranches (2 tranches par sandwich)
- Jambon : 184 DH le kg (35 g par sandwich)
- Fromage : 200 DH le kg (12 g par sandwich)
- Sachets : 300 DH le mille (1 sachet par sandwich)
- Main-d'œuvre : sandwichs préparés et ensachés à la main au rythme de 100 sandwichs à l'heure ; salaires et charges sociales 150 DH l'heure
- Frais fixes de livraison : 2 livraisons hebdomadaires toute l'année, coût moyen d'une livraison 100 DH
- Prix d'achat d'un four : 4 600 DH (amortissement en 5 ans)
- Autres frais fixes : 1 900 DH par an et par client cafetier
1. Coût variable par sandwich et marge sur coût variable. 2. Pourcentage de marge sur coût variable. 3. Seuil de rentabilité par client cafetier. 4. Combien ce chiffre représente-t-il de sandwichs à chaque livraison (arrondir à l'unité supérieure) ?`,
  questions:[
  {pts:1.5, q:"1-2. Coût variable par sandwich, MCV et taux de MCV.",
  chk:[{l:"Coût variable unitaire",v:12.44,u:"DH",tol:0.005},{l:"Taux de MCV",v:43.45,u:"%",tol:0.05}],
  model:`| Élément | Calcul | DH |
|---|---|---|
| Pain | 45 / 50 × 2 | 1,80 |
| Jambon | 184 × 0,035 | 6,44 |
| Fromage | 200 × 0,012 | 2,40 |
| Sachet | 300 / 1 000 | 0,30 |
| Main-d'œuvre | 150 / 100 | 1,50 |
| **Coût variable** | | **12,44** |
| Prix de vente | | 22,00 |
| **MCV unitaire** | | **9,56** |
Taux de MCV = 9,56 / 22 = **==43,45 %==**.`,
  kp:["Coût variable 12,44 (dont MOD 1,50)","MCV 9,56","Taux 43,45 %"]},
  {pts:1.5, q:"3. Seuil de rentabilité par client cafetier.",
  chk:[{l:"Charges fixes annuelles par client",v:13220,u:"DH"},{l:"Seuil en nombre de sandwichs par an",v:1383,u:"",tol:1}],
  model:`Charges fixes annuelles par client : livraisons 2 × 52 × 100 = 10 400 ; four 4 600 / 5 = 920 ; autres 1 900 ⇒ **13 220 DH**.
Seuil = 13 220 / 9,56 = 1 382,8 ⇒ **1 383 sandwichs par an**, soit un CA de 13 220 / 43,45 % ≈ **30 423 DH** par client.`,
  kp:["Charges fixes par client 13 220","SR = CF / MCV unitaire ≈ 1 383 sandwichs","SR en valeur ≈ 30 423 DH"]},
  {pts:1, q:"4. Nombre de sandwichs par livraison au seuil.",
  chk:[{l:"Sandwichs par livraison",v:14,u:""}],
  model:`Nombre de livraisons par an : 2 × 52 = 104. 1 382,8 / 104 = 13,3 ⇒ **==14 sandwichs par livraison==** (arrondi à l'unité supérieure). Un cafetier qui commande moins de 14 sandwichs par livraison n'est pas rentable pour Restaubus.`,
  kp:["104 livraisons par an","13,3 arrondi à 14 sandwichs"]}
  ]},
  {title:"Exercice 3 : Emprunt indivis — retrouver i, m₁, m₁₂, a et D₀", pts:3, pages:[360,360], th:["g-mathfi"],
  ctx:`Un capital doit être remboursé au moyen de **12 annuités constantes**. Supposons que **m₁ + m₂ = 13 515,22** et que **m₂ + m₃ = 14 528,86**. Calculer le taux d'intérêt i, l'amortissement m₁, l'amortissement m₁₂, l'annuité a et le capital initial D₀. NB : calculatrices non programmables et tables financières autorisées.`,
  questions:[
  {pts:3, q:"Calculer i, m₁, m₁₂, a et D₀.",
  chk:[{l:"Taux i",v:7.5,u:"%",tol:0.01},{l:"Premier amortissement m₁",v:6513.36,u:"",tol:0.5},{l:"Dernier amortissement m₁₂",v:14431.04,u:"",tol:1},{l:"Annuité a",v:15513.37,u:"",tol:1},{l:"Capital D₀",v:120000,u:"",tol:5}],
  model:`Avec des annuités constantes, les amortissements forment une **suite géométrique de raison (1 + i)** : m₂ = m₁(1 + i), m₃ = m₁(1 + i)².
- (m₂ + m₃) / (m₁ + m₂) = 1 + i = 14 528,86 / 13 515,22 = 1,075 ⇒ **i = ==7,5 %==**
- m₁ (1 + 1,075) = 13 515,22 ⇒ **m₁ = ==6 513,36==**
- m₁₂ = m₁ × 1,075¹¹ = 6 513,36 × 2,21560 = **==14 431,04==**
- D₀ = somme des amortissements = m₁ × (1,075¹² − 1) / 0,075 = 6 513,36 × 18,42381 = **==120 000==**
- a = D₀ × i + m₁ = 9 000 + 6 513,36 = **==15 513,36==** (contrôle : a = m₁₂ × 1,075 = 15 513,37).`,
  kp:["Amortissements en progression géométrique de raison 1 + i","i = 7,5 %","m₁ ≈ 6 513,36 et m₁₂ ≈ 14 431,04","D₀ = 120 000 et a ≈ 15 513,36"]}
  ]},
  {title:"Exercice 4 : Programme d'achat au moindre coût et dualité (PESCAEX)", pts:3, pages:[360,360], th:["g-prog"],
  ctx:`La société PESCAEX veut offrir à ses cadres des smartphones et des tablettes. La société TOILEX lui propose :
- des lots à 54 000 DH l'un comprenant 5 smartphones et 2 tablettes ;
- des lots à 35 000 DH l'un comprenant 3 smartphones et 2 tablettes ;
- des smartphones à 11 000 DH l'unité ;
- des tablettes à 3 250 DH l'unité.
1. Donner **toutes les solutions possibles** d'achat pour s'équiper au moindre coût sachant qu'il faut au moins 40 smartphones et 20 tablettes. (1,5 point)
2. La société MESNAOUI SA décide de concurrencer TOILEX en proposant des smartphones et tablettes équivalents. À combien doit-elle les proposer à PESCAEX pour réaliser un chiffre d'affaires maximal ? (1,5 point)`,
  questions:[
  {pts:1.5, q:"1. Solutions d'achat au moindre coût (au moins 40 smartphones et 20 tablettes).",
  chk:[{l:"Coût minimal",v:445000,u:"DH"}],
  model:`Variables : x lots A (54 000 : 5 S + 2 T), y lots B (35 000 : 3 S + 2 T), s smartphones et t tablettes à l'unité.
**Min C = 54 000 x + 35 000 y + 11 000 s + 3 250 t** sous 5x + 3y + s ≥ 40 ; 2x + 2y + t ≥ 20 ; variables entières ≥ 0.
Les lots sont moins chers que les unités équivalentes (A vaut 61 500 au détail, B 39 500) ; on compare les combinaisons de lots, complétées à l'unité :
| Solution | Smartphones | Tablettes | Coût |
|---|---|---|---|
| **5 lots A + 5 lots B** | 25 + 15 = 40 | 10 + 10 = 20 | 270 000 + 175 000 = **445 000** |
| **8 lots A + 4 tablettes** | 40 | 16 + 4 = 20 | 432 000 + 13 000 = **445 000** |
| 7 lots A + 2 lots B + 2 tablettes | 41 | 20 | 454 500 |
| 6 lots A + 4 lots B | 42 | 20 | 464 000 |
| 0 lot A + 14 lots B | 42 | 28 | 490 000 |
**Deux solutions optimales** au coût minimal de ==445 000 DH== : (5 A + 5 B) ou (8 A + 4 tablettes à l'unité).`,
  kp:["Modèle de minimisation avec contraintes de couverture","Intérêt des lots par rapport aux unités","Deux solutions optimales : 5A + 5B et 8A + 4T","Coût minimal 445 000"]},
  {pts:1.5, q:"2. Prix que MESNAOUI doit proposer pour maximiser son chiffre d'affaires.",
  chk:[{l:"Prix d'un smartphone",v:9500,u:"DH"},{l:"Prix d'une tablette",v:3250,u:"DH"},{l:"Chiffre d'affaires maximal",v:445000,u:"DH"}],
  model:`C'est le **problème dual** : MESNAOUI fixe des prix pₛ et pₜ tels qu'aucune offre de TOILEX ne soit moins chère que l'équivalent chez elle, et maximise son CA sur 40 smartphones et 20 tablettes :
**Max CA = 40 pₛ + 20 pₜ** sous :
- 5 pₛ + 2 pₜ ≤ 54 000 (lot A)
- 3 pₛ + 2 pₜ ≤ 35 000 (lot B)
- pₛ ≤ 11 000 ; pₜ ≤ 3 250 ; pₛ, pₜ ≥ 0
Intersection des contraintes des deux lots : 2 pₛ = 19 000 ⇒ **pₛ = 9 500** ; pₜ = (35 000 − 28 500) / 2 = **3 250** (contrainte des tablettes aussi saturée).
**CA maximal = 40 × 9 500 + 20 × 3 250 = ==445 000 DH==** — égal au coût minimal du primal (théorème de dualité). Autres sommets : pₛ = 10 800, pₜ = 0 → 432 000 (moins bon).`,
  kp:["Formulation du dual (prix pₛ, pₜ ≤ coût des offres TOILEX)","Résolution : pₛ = 9 500 et pₜ = 3 250","CA maximal 445 000 = coût minimal du primal (dualité)"]}
  ]},
  {title:"Exercice 5 : Statistique — distribution groupée, bornes manquantes", pts:3, pages:[361,361], th:["g-stats"],
  ctx:`Une étude sur le budget consacré aux vacances d'été auprès de ménages a donné les résultats suivants :
| Budget X (en milliers de dirhams) | Fréquence cumulée |
|---|---|
| [800 ; 1 000[ | 0,08 |
| [1 000 ; 1 400[ | 0,18 |
| [1 400 ; 1 600[ | 0,34 |
| [1 600 ; a[ | 0,64 |
| [a ; 2 400[ | 0,73 |
| [2 400 ; b[ | 1 |
1) Calculer la borne manquante b sachant que l'étendue de la série est égale à 3 200. (0,5 pt)
2) Calculer les fréquences. (0,5 pt)
3) Calculer la borne manquante a : a) si le budget moyen est égal à 1 995 (1 pt) ; b) si le budget médian est égal à 1 920 (1 pt).`,
  questions:[
  {pts:1, q:"1-2) Borne b et fréquences.",
  chk:[{l:"Borne b",v:4000,u:""}],
  model:`1) Étendue = b − 800 = 3 200 ⇒ **b = ==4 000==**.
2) Fréquences (différences des fréquences cumulées) :
| Classe | [800 ; 1 000[ | [1 000 ; 1 400[ | [1 400 ; 1 600[ | [1 600 ; a[ | [a ; 2 400[ | [2 400 ; 4 000[ |
|---|---|---|---|---|---|---|
| fᵢ | 0,08 | 0,10 | 0,16 | 0,30 | 0,09 | 0,27 |`,
  kp:["b = 4 000","Fréquences 0,08 ; 0,10 ; 0,16 ; 0,30 ; 0,09 ; 0,27"]},
  {pts:2, q:"3) Borne a : a) si la moyenne vaut 1 995 ; b) si la médiane vaut 1 920.",
  chk:[{l:"a (moyenne = 1 995)",v:1800,u:""},{l:"a (médiane = 1 920)",v:2200,u:""}],
  model:`a) Centres de classes : 900 ; 1 200 ; 1 500 ; (1 600 + a)/2 ; (a + 2 400)/2 ; 3 200.
x̄ = 0,08 × 900 + 0,10 × 1 200 + 0,16 × 1 500 + 0,30 × (1 600 + a)/2 + 0,09 × (a + 2 400)/2 + 0,27 × 3 200
= 72 + 120 + 240 + 240 + 0,15 a + 0,045 a + 108 + 864 = 1 644 + 0,195 a = 1 995 ⇒ **a = ==1 800==**.
b) La médiane (F = 0,5) est dans la classe [1 600 ; a[ (F passe de 0,34 à 0,64). Interpolation linéaire :
Me = 1 600 + (0,5 − 0,34) / 0,30 × (a − 1 600) = 1 920 ⇒ (a − 1 600) × 0,5333 = 320 ⇒ **a = ==2 200==**.`,
  kp:["Moyenne avec centres de classes fonction de a → a = 1 800","Classe médiane [1 600 ; a[","Interpolation linéaire → a = 2 200"]}
  ]},
  {title:"Exercice 6 : Probabilités — défauts de fabrication et loi binomiale", pts:2, pages:[361,361], th:["g-probas"],
  ctx:`Une usine produit des sacs pouvant présenter deux défauts a et b ; un sac est défectueux s'il présente au moins l'un des deux.
1) (décimales exactes) On note A « le sac présente le défaut a » et B « le sac présente le défaut b » ; p(A) = 0,02 et p(B) = 0,01, A et B indépendants. a) P(C) : « le sac présente a et b » ; b) P(D) : « le sac est défectueux » ; c) P(E) : « le sac ne présente aucun défaut » ; d) sachant que le sac présente le défaut a, probabilité qu'il présente aussi b ?
2) On suppose que la probabilité (arrondie au centième) qu'un sac soit défectueux est 0,03. On prélève 100 sacs (tirage assimilé avec remise). X = nombre de sacs défectueux. a) Loi de X ? b) Probabilité d'avoir au moins un sac défectueux (au centième), interprétation. c) Espérance de X, interprétation.`,
  questions:[
  {pts:1, q:"1) P(C), P(D), P(E) et P(B | A).",
  chk:[{l:"P(C)",v:0.0002,u:"",tol:0.00001},{l:"P(D)",v:0.0298,u:"",tol:0.00001},{l:"P(E)",v:0.9702,u:"",tol:0.00001},{l:"P(B | A)",v:0.01,u:"",tol:0.00001}],
  model:`a) Indépendance : P(C) = P(A ∩ B) = 0,02 × 0,01 = **0,0002**
b) P(D) = P(A ∪ B) = 0,02 + 0,01 − 0,0002 = **0,0298**
c) P(E) = 1 − P(D) = **0,9702** (= 0,98 × 0,99)
d) P(B | A) = P(A ∩ B) / P(A) = 0,0002 / 0,02 = **0,01** = P(B) (indépendance).`,
  kp:["P(A ∩ B) = produit (indépendance)","P(A ∪ B) = 0,0298","P(E) = 0,9702","P(B|A) = P(B) = 0,01"]},
  {pts:1, q:"2) Loi de X, P(X ≥ 1) et E(X).",
  chk:[{l:"P(X ≥ 1)",v:0.95,u:"",tol:0.005},{l:"E(X)",v:3,u:""}],
  model:`a) 100 épreuves de Bernoulli indépendantes de même paramètre p = 0,03 : **X ~ B(100 ; 0,03)**.
b) P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,97¹⁰⁰ = 1 − 0,0476 ≈ **0,95** : dans 95 % des échantillons de 100 sacs, on trouvera au moins un sac défectueux.
c) E(X) = n p = 100 × 0,03 = **3** : en moyenne, un échantillon de 100 sacs contient 3 sacs défectueux.`,
  kp:["X ~ B(100 ; 0,03)","P(X ≥ 1) = 1 − 0,97¹⁰⁰ ≈ 0,95 et interprétation","E(X) = 3 et interprétation"]}
  ]}
  ]});
})();

EXAMS.push({
id:"tec-2022", subject:"tec", year:2022, session:"12-13 novembre 2022", title:"Techniques d'expression et de communication (culture générale)", date:"Dimanche 13 novembre 2022", duration:120, pages:[362,363],
sections:[
{title:"Texte : croissance, décroissance et capacité d'agir face aux dérèglements", pts:20, pages:[363,363], th:["tec-dissertation","tec-questions"],
ctx:`La plate-forme internationale de débats féconds s'anime aujourd'hui autour de la notion de **décroissance**. Pour des raisons environnementales évidentes, la possibilité d'une croissance infinie dans un monde fini ne peut plus faire illusion. Dans une société inégalitaire, productiviste et consumériste, le « toujours plus » atteint ses limites. La décroissance ouvre, selon ses partisans, des perspectives de justice sociale, d'émancipation et de joie de vivre.
La croissance telle qu'elle est mesurée aujourd'hui par l'augmentation annuelle de la valeur ajoutée constitue une aberration physique, car elle est directement corrélée à la production et à la consommation. Qu'elle soit rouge, verte ou noire, soutenable ou inclusive, sa quête perpétuelle leur paraît absurde : 3 % de croissance par an conduit à doubler notre production (et notre consommation) tous les vingt-quatre ans. À ce rythme, dans un siècle, nous produirions dix-huit fois plus qu'actuellement. Le bon sens voudrait que nous sortions de cette quête qui a épuisé les bénéfices d'hier en termes de bien-être social. Car qui peut prétendre que nous sommes globalement trois fois plus heureux qu'il y a cinquante ans ?
Un mouvement en sens inverse serait tout aussi absurde. L'enjeu n'est pas de décroître, mais de « décroire », de sortir de la religion de la croissance et de passer d'une approche étroitement quantitative, qui perd de vue les finalités de l'économie, à une réflexion qualitative sur le sens de nos activités et de nos vies. D'expérimenter et de mettre en place d'autres manières de questionner. De répondre à nos besoins fondamentaux de manière soutenable, bien sûr, mais aussi conviviale et juste.
Malgré tout, cette religion de la croissance reste très présente, même chez nombre d'écologistes. Pour répondre à l'urgence climatique, le dogme s'appuie désormais sur le pari du découplage : continuer à accroître notre production de biens et de services, tout en préservant l'environnement.
Pour une partie des écologistes, la crise environnementale a atteint un tel niveau qu'une seule solution s'impose désormais : la décroissance. Selon eux, le dérèglement climatique ne provient pas d'un mode de production guidé par le marché, et donc irrationnel. Il découle directement de la croissance, qui gonfle la demande énergétique et entrave l'objectif de décarboner l'économie. Puisqu'une réduction de la production de biens produirait l'effet inverse, il conviendrait d'amputer l'activité. Cette analyse soulève plusieurs difficultés.
**On oublie parfois que les humains ne sont pas toujours impuissants face aux dérèglements qu'ils engendrent.** La menace écologique s'incarnait dans le « trou de la couche d'ozone », ce gaz qui nous protège des rayons ultraviolets (UV) nocifs provenant du soleil, dont la présence se réduisait dans l'atmosphère. Annonciateur de cancers de la peau, d'épidémies d'immunodéficience, d'une dégradation des réserves d'eau, d'une perturbation des cycles biochimiques et d'une baisse de la production agricole, le phénomène ne menaçait pas moins l'humanité que le changement climatique. Là aussi, les coupables étaient les émissions anthropogéniques.
Depuis le protocole de Montréal, signé en 1987 et entré en vigueur le 1er janvier 1989, ces émissions ont fondu de 98 %. Le phénomène de destruction de l'ozone s'est inversé dans les années 2000, et on s'attend à ce que la couche atmosphérique de gaz retrouve son état initial d'ici à 2075.
**Question** : expliquer et développer l'affirmation suivante du texte : « On oublie parfois que les humains ne sont pas toujours impuissants face aux dérèglements qu'ils engendrent ».`,
questions:[
{pts:20, q:"Expliquer et développer : « On oublie parfois que les humains ne sont pas toujours impuissants face aux dérèglements qu'ils engendrent ».",
model:`#### Introduction
- **Accroche** : face à l'urgence climatique, le débat oppose les partisans de la **décroissance** à ceux de la **croissance verte** (découplage).
- **Explication de la phrase** : les dérèglements (climat, ozone, pollution) sont **anthropiques** — causés par l'homme — mais l'homme dispose aussi des moyens de les **corriger** : la fatalité n'est pas de mise, ni le renoncement à toute activité.
- **Problématique** : l'exemple de la couche d'ozone prouve-t-il que l'humanité peut résoudre la crise climatique sans « amputer » l'activité ?
- **Annonce du plan** : la preuve par l'ozone (I) ; les leviers de l'action humaine (II) ; les limites de l'analogie (III).
#### I. L'homme, cause et remède : la leçon de la couche d'ozone
1. Un dérèglement d'origine humaine : les CFC (aérosols, réfrigération) détruisaient l'ozone stratosphérique ; menace sanitaire et agricole majeure.
2. Une réponse collective efficace : le **protocole de Montréal** (1987) a programmé l'interdiction des substances destructrices ; émissions réduites de **98 %** ; la couche d'ozone se reconstitue (retour attendu vers 2075).
3. Les conditions du succès : **consensus scientifique**, **accord international contraignant**, **substituts technologiques** disponibles, aide aux pays en développement.
*Transition* : cette réussite montre que l'action humaine peut inverser une tendance destructrice ; quels sont ses leviers aujourd'hui ?
#### II. Les leviers d'action face aux dérèglements actuels
1. **Le droit et la coopération internationale** : accord de Paris (2015), objectifs de neutralité carbone, normes et quotas.
2. **L'innovation et la transition énergétique** : énergies renouvelables, efficacité énergétique, électrification. Exemple marocain : complexe solaire **Noor Ouarzazate**, objectif d'une part majoritaire des énergies renouvelables dans la capacité électrique installée, hydrogène vert.
3. **L'économie et la finance** : prix du carbone, finance verte (obligations vertes), reporting extra-financier (ESG) et taxonomie — un champ nouveau pour l'expert-comptable et l'auditeur.
4. **Les comportements** : sobriété, économie circulaire, consommation responsable — la « décroyance » du texte : sortir du culte quantitatif sans tout arrêter.
*Transition* : il serait pourtant naïf de croire que tout dérèglement trouve sa solution technique.
#### III. Les limites : un optimisme à nuancer
1. **Le climat n'est pas l'ozone** : quelques gaz industriels faciles à remplacer d'un côté ; de l'autre, les énergies fossiles au cœur de toute l'économie (transport, industrie, agriculture).
2. **L'effet rebond** et la difficulté du **découplage absolu** : les gains d'efficacité sont souvent annulés par la hausse de la consommation.
3. **Les inégalités** : coût de la transition pour les pays du Sud ; justice climatique ; coordination de près de 200 États.
4. **Le temps** : l'inertie du climat impose d'agir vite, alors que l'ozone a demandé près d'un siècle pour se reconstituer.
#### Conclusion
- **Bilan** : l'exemple de l'ozone réfute le fatalisme — l'humanité sait agir lorsqu'elle conjugue science, droit et innovation — mais le défi climatique exige une mobilisation d'une tout autre ampleur, mêlant technologie et changement des modes de vie.
- **Ouverture** : la question n'est peut-être pas « croissance ou décroissance », mais **quelle** croissance et pour quelles finalités, comme le suggère l'idée de « décroire ».`,
kp:["Introduction : contexte (débat croissance/décroissance), explication de la phrase, problématique, plan","Exemple de l'ozone : CFC, protocole de Montréal, − 98 %, reconstitution vers 2075","Conditions du succès (science, accord contraignant, substituts)","Leviers actuels : accords internationaux, innovation/renouvelables (exemple marocain)","Leviers économiques (prix du carbone, finance verte, ESG) et comportementaux (sobriété)","Limites : climat ≠ ozone, effet rebond, inégalités, inertie","Conclusion nuancée avec ouverture","Expression : plan apparent, transitions, orthographe"]}
]}
]});
