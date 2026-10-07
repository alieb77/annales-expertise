/* Session 2018 (septembre 2018) */
EXAMS.push({
id:"cpt-2018", subject:"cpt", year:2018, session:"Septembre 2018", title:"Comptabilité générale et analytique", date:"Septembre 2018", duration:300, pages:[265,269],
note:"Comptabilité générale /20 (5 dossiers) et comptabilité analytique /20 (2 dossiers)",
sections:[
{title:"CG — Dossier 1 : Comptabilisation des stocks (menuiserie Alami)", pts:4, pages:[266,266], th:["cg-inventaire","cg-courant"],
ctx:`Valeur des stocks de la menuiserie Alami, qui arrête ses comptes le 31 décembre (montants en milliers de DH) :
| Nature des stocks | 31/12/2016 | 31/12/2017 |
|---|---|---|
| Meubles fabriqués | 127 | 145 |
| Meubles achetés pour revente en l'état | 35 | 22 |
| Meubles en cours de fabrication | 178 | 143 |
| Travaux en cours sur chantiers | 280 | 325 |
| Bois pour fabrication des meubles | 72 | 88 |
| Gasoil en citerne | 42 | 40 |
| Fournitures de bureau | 5 | 4 |
Passer les écritures au titre de l'exercice 2017.`,
questions:[
{pts:4, q:"Passer les écritures de stocks au titre de l'exercice 2017 (en KDH).",
chk:[{l:"Variation des stocks de marchandises (6114, + = charge)",v:13,u:"KDH"},{l:"Variation des stocks de matières et fournitures (6124, + = charge)",v:-13,u:"KDH"},{l:"Variation des stocks de produits (713, + = produit)",v:28,u:"KDH"}],
model:`Inventaire intermittent : on **annule les stocks initiaux** et on **constate les stocks finaux** par les comptes de variation.
| Stock | Compte de stock | Compte de variation | SI | SF | Variation |
|---|---|---|---|---|---|
| Meubles fabriqués | 3151 Produits finis | 7132 | 127 | 145 | + 18 (produit) |
| Meubles achetés pour revente | 3111 Marchandises | 6114 | 35 | 22 | 13 (charge) |
| Meubles en cours de fabrication | 3131 Biens en cours | 7131 | 178 | 143 | − 35 (produit négatif) |
| Travaux en cours sur chantiers | 3134 Travaux en cours | 7134 | 280 | 325 | + 45 (produit) |
| Bois | 3121 Matières premières | 6124 | 72 | 88 | − 16 (charge négative) |
| Gasoil | 3122 Matières et fournitures consommables | 6124 | 42 | 40 | 2 (charge) |
| Fournitures de bureau | 3122 Matières et fournitures consommables | 6124 | 5 | 4 | 1 (charge) |
#### Écritures
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **31/12/2017** | **Annulation des stocks initiaux** | | |
| 6114 | Variation des stocks de marchandises | 35 | |
| 6124 | Variation des stocks de matières et fournitures (72 + 42 + 5) | 119 | |
| 7131 | Variation des stocks de produits en cours (178) | 178 | |
| 7134 | Variation des stocks de travaux en cours (280) | 280 | |
| 7132 | Variation des stocks de produits finis | 127 | |
| 3111 / 3121 / 3122 / 3131 / 3134 / 3151 | Stocks | | 739 |
| **31/12/2017** | **Constatation des stocks finaux** | | |
| 3111 Marchandises | | 22 | |
| 3121 Matières premières | | 88 | |
| 3122 Matières et fournitures consommables | | 44 | |
| 3131 Biens en cours | | 143 | |
| 3134 Travaux en cours | | 325 | |
| 3151 Produits finis | | 145 | |
| 6114 / 6124 / 7131 / 7134 / 7132 | Variations | | 767 |
Soldes : 6114 = 13 (D) ; 6124 = 119 − 132 = − 13 ; 713 = − 585 + 613 = **+ 28** (production stockée positive).
(Les fournitures de bureau peuvent aussi être traitées en achats non stockés 6125 si l'entreprise ne les suit pas en stock.)`,
kp:["Méthode de l'inventaire intermittent (annulation des SI, constatation des SF)","Bons comptes de stocks (3111, 3121, 3122, 3131/3134, 3151)","Bons comptes de variation (6114, 6124 en charges ; 713x en produits)","Variations correctes : marchandises 13, matières − 13, produits + 28"]}
]},
{title:"CG — Dossier 2 : Crédit-bail immobilier (S.A. Color)", pts:4, pages:[266,266], th:["cg-leasing","cg-immo"],
ctx:`Le 1er janvier N, la SA Color a signé un contrat de crédit-bail immobilier, entré en vigueur immédiatement : valeur du terrain **480 000 DH** ; valeur des constructions **2 200 000 DH** ; durée du contrat **13 ans** ; durée d'amortissement du bien **22 ans** ; loyer annuel payable à terme échu le 31 décembre : **300 000 DH HT** ; prix de levée d'option : **600 000 DH**.
1. Passer les écritures relatives à l'année N sachant que Color lèvera sûrement l'option. 2. Donner l'équation qui permet de retrouver le taux actuariel du contrat (sans calcul). 3. Passer les écritures de la levée d'option au 31/12/N+12. 4. Passer les écritures au 31/12/N+13, la durée résiduelle de vie de la construction étant estimée à 10 ans. 5. Color revend cet ensemble immobilier le 31/12/N+15 pour 850 000 DH : écritures de cession.`,
questions:[
{pts:1.5, q:"1-2. Écritures de l'année N ; équation du taux actuariel.",
chk:[{l:"Taux actuariel (calculé à titre de contrôle)",v:7.45,u:"%",tol:0.05}],
model:`**CGNC** : le bien pris en crédit-bail **n'est pas inscrit à l'actif** du preneur, même si la levée d'option est certaine : les redevances sont des **charges** (6132) et l'engagement est mentionné dans l'**ETIC** (tableau des biens en crédit-bail).
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **31/12/N** | **Redevance annuelle** | | |
| 6132 | Redevances de crédit-bail | 300 000 | |
| 34552 | État — TVA récupérable sur charges (20 %) | 60 000 | |
| 5141 | Banques | | 360 000 |
**Équation du taux actuariel i** (égalité entre la valeur du bien financé et la valeur actuelle des décaissements) :
**2 680 000 = 300 000 × [1 − (1 + i)⁻¹³] / i + 600 000 × (1 + i)⁻¹³**
(À titre de contrôle : i ≈ 7,45 %.) Le taux sert en IFRS (IFRS 16) à séparer charge d'intérêts et remboursement de la dette, ou à comparer le crédit-bail à un emprunt.`,
kp:["Pas d'inscription à l'actif en CGNC ; redevance en 6132 (+ TVA récupérable)","Mention de l'engagement dans l'ETIC","Équation : 2 680 000 = VA des 13 loyers + VA de l'option"]},
{pts:2.5, q:"3-5. Levée d'option (N+12), amortissement (N+13) et cession (N+15).",
chk:[{l:"Valeur d'entrée de la construction (option ventilée au prorata)",v:492537.31,u:"DH",tol:2,alt:[120000]},{l:"Dotation annuelle à partir de N+13",v:49253.73,u:"DH",tol:1,alt:[12000]},{l:"Plus-value de cession en N+15",v:397761.19,u:"DH",tol:5,alt:[286000]}],
model:`**Levée d'option (31/12/N+12)** : le bien entre à l'actif pour le **prix d'option (600 000)**, ventilé entre terrain et construction au prorata des valeurs d'origine : terrain 600 000 × 480 / 2 680 = **107 462,69** ; construction 600 000 × 2 200 / 2 680 = **492 537,31**.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **31/12/N+12** | **Levée d'option** | | |
| 2311 | Terrains nus | 107 462,69 | |
| 2321 | Bâtiments | 492 537,31 | |
| 34551 | État — TVA récupérable sur immobilisations | 120 000,00 | |
| 5141 | Banques | | 720 000,00 |
| **31/12/N+13** | **Amortissement sur la durée résiduelle (10 ans)** | | |
| 6193 | DEA des immobilisations corporelles | 49 253,73 | |
| 28321 | Amortissements des bâtiments | | 49 253,73 |
| **31/12/N+15** | **Dotation de N+15 (puis N+14 identique) et cession** | | |
| 6193 / 28321 | Dotation de l'exercice | 49 253,73 | 49 253,73 |
| 5141 | Banques (ou 3481) | 850 000,00 | |
| 7513 | Produits des cessions des immobilisations corporelles | | 850 000,00 |
| 6513 | VNA des immobilisations corporelles cédées | 452 238,81 | |
| 28321 | Amortissements des bâtiments (3 × 49 253,73) | 147 761,19 | |
| 2311 | Terrains nus | | 107 462,69 |
| 2321 | Bâtiments | | 492 537,31 |
Plus-value = 850 000 − 452 238,81 = **397 761,19**. (La cession d'un immeuble peut aussi entraîner une régularisation de TVA si elle intervient dans les 10 ans suivant l'acquisition.)
> Variante admise : terrain retenu à sa valeur d'origine (480 000) et construction pour le solde (120 000), amortie 12 000 par an ; VNC de cession 564 000 et plus-value 286 000.`,
kp:["Inscription à l'actif lors de la levée pour le prix d'option (600 000)","Ventilation terrain / construction justifiée","TVA récupérable sur la levée","Amortissement de la construction sur 10 ans à partir de N+13","Cession : 7513, sortie par 6513 + amortissements cumulés, plus-value"]}
]},
{title:"CG — Dossier 3 : Normalisation comptable (principe de continuité d'exploitation)", pts:4, pages:[267,267], th:["cg-eval"],
questions:[
{pts:4, q:"Après avoir énuméré les principes comptables fondamentaux retenus par le CGNC, définir et commenter le principe de continuité d'exploitation (10 lignes environ).",
model:`**Les sept principes du CGNC** : continuité d'exploitation, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, importance significative. Leur application doit aboutir à l'**image fidèle**.
**Continuité d'exploitation** : l'entreprise est présumée **poursuivre normalement ses activités** dans un avenir prévisible, sans intention ni nécessité de les cesser ou de les réduire sensiblement.
**Commentaire** :
- C'est le principe **fondateur** des autres : il justifie l'évaluation au **coût historique**, l'étalement des charges par l'**amortissement**, l'inscription de charges à répartir et la permanence des méthodes ; les actifs sont évalués selon leur **valeur d'utilité** et non leur valeur de liquidation.
- Lorsque la continuité est **compromise** (pertes répétées, capitaux propres < 1/4 du capital, perte d'un marché majeur, cessation d'une activité), les comptes doivent être établis selon des **valeurs liquidatives** pour les éléments concernés, et l'ETIC doit le mentionner.
- Les dirigeants doivent apprécier ce principe à chaque clôture ; le **commissaire aux comptes** le vérifie et peut déclencher la **procédure d'alerte**.`,
kp:["Énumération des 7 principes","Définition : poursuite de l'activité dans un avenir prévisible","Conséquences : coût historique, amortissements, valeur d'utilité","Remise en cause : valeurs liquidatives, information dans l'ETIC","Rôle du CAC / procédure d'alerte"]}
]},
{title:"CG — Dossier 4 : Créance en devises (Belkadi S.A.)", pts:4, pages:[267,267], th:["cg-devises"],
ctx:`La société Belkadi S.A. vend à crédit à son client installé aux États-Unis des marchandises pour **100 000 $**, le **25 novembre N**, paiement **60 jours fin de mois**. L'entreprise n'a pas couvert le risque de change. Cours du dollar : 25/11/N : 8,95 DH ; 31/12/N : 8,50 DH ; 31/01/N+1 : 7,85 DH. Il n'y a pas d'incident de règlement. Présentez les écritures relatives à cette vente.`,
questions:[
{pts:4, q:"Écritures de la vente, de l'inventaire, de la réouverture et du règlement.",
chk:[{l:"Écart de conversion actif au 31/12/N",v:45000,u:"DH"},{l:"Perte de change réalisée au règlement",v:110000,u:"DH"}],
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **25/11/N** | **Vente à l'export (100 000 $ × 8,95, exonérée de TVA)** | | |
| 3421 | Clients | 895 000 | |
| 7111 | Ventes de marchandises au Maroc / à l'étranger | | 895 000 |
| **31/12/N** | **Conversion au cours de clôture (8,50) : perte latente** | | |
| 3701 | Écarts de conversion — actif : diminution des créances circulantes | 45 000 | |
| 3421 | Clients | | 45 000 |
| 6393 | Dotations aux provisions pour risques et charges financiers | 45 000 | |
| 4506 | Provisions pour pertes de change | | 45 000 |
| **01/01/N+1** | **Contre-passation de l'écart** | | |
| 3421 | Clients | 45 000 | |
| 3701 | Écarts de conversion — actif | | 45 000 |
| **31/01/N+1** | **Encaissement (60 jours fin de mois) : 100 000 × 7,85** | | |
| 5141 | Banques | 785 000 | |
| 6331 | Pertes de change | 110 000 | |
| 3421 | Clients | | 895 000 |
| 4506 | Provisions pour pertes de change | 45 000 | |
| 7393 | Reprises sur provisions pour risques et charges financiers | | 45 000 |
Échéance : 25/11 + 60 jours = 24 janvier, fin de mois ⇒ **31 janvier N+1**. Perte totale : 895 000 − 785 000 = 110 000 (dont 45 000 déjà provisionnés en N).`,
kp:["Créance enregistrée au cours du jour (895 000)","Écart de conversion actif 45 000 (3701) et provision pour perte de change (6393 / 4506)","Contre-passation à l'ouverture","Échéance au 31/01/N+1 ; perte de change réalisée 110 000 (6331)","Reprise de la provision (7393)"]}
]},
{title:"CG — Dossier 5 : Fonctionnement des comptes", pts:4, pages:[267,267], th:["cg-capital","cg-emprunt"],
questions:[
{pts:4, q:"Présenter succinctement (environ 5 lignes par compte) le contenu et le fonctionnement des comptes 1121 Prime d'émission, 1123 Prime d'apport, 2130 Prime de remboursement des obligations, 2813 Amortissement des primes de remboursement des obligations.",
model:`- **1121 Primes d'émission** (capitaux propres) : excédent du prix d'émission des actions ou parts nouvelles sur leur valeur nominale lors d'une augmentation de capital en **numéraire**. **Crédité** à la souscription (par 3461) ; **débité** en cas d'incorporation au capital (1111), d'imputation des frais d'augmentation de capital, de distribution aux actionnaires ou d'imputation de pertes.
- **1123 Primes d'apport** : même logique pour une augmentation de capital par **apports en nature** : différence entre la valeur des apports et la valeur nominale des titres remis. Crédité lors de l'apport ; débité en cas d'incorporation, d'imputation de frais ou de pertes.
- **2130 Primes de remboursement des obligations** (immobilisation en non-valeur) : différence entre le **prix de remboursement** des obligations et leur **prix d'émission**. **Débité** à l'émission (avec 3488 / crédit 1410) ; **crédité** lorsqu'elle est totalement amortie (par le débit de 2813) ou lors du remboursement anticipé.
- **2813 Amortissements des primes de remboursement des obligations** : cumule les dotations (au prorata des intérêts ou linéairement sur la durée de l'emprunt). **Crédité** par le débit du 6391 « Dotations aux amortissements des primes de remboursement des obligations » ; **débité** pour solder le 2130 quand la prime est totalement amortie.`,
kp:["1121 : excédent du prix d'émission sur le nominal (numéraire) ; crédit / débit","1123 : excédent de la valeur d'apport sur le nominal (nature)","2130 : prix de remboursement − prix d'émission, immobilisation en non-valeur","2813 : amortissement de la prime via 6391 ; solde du 2130"]}
]},
{title:"CA — Dossier 1 : Société SIPM (prestations réciproques, CMUP, résultats)", pts:12, pages:[268,269], th:["ca-couts","ca-stocks"],
ctx:`La société SIPM produit P1 et P2 à partir de la matière M (méthode des centres d'analyse, stocks au CMUP). Cinq centres : 2 auxiliaires (Administration, Entretien) et 3 principaux (Transformation, Montage, Distribution). Mars N :
1) Stocks initiaux : M 1 000 kg à 360 DH/kg ; P1 5 000 unités à 200 DH/u ; P2 nul.
2) Achats de M : 4 000 kg à 400 DH/kg.
3) MOD : P1 25 000 h à 10 DH/h ; P2 12 500 h à 12 DH/h.
4) Production : 25 000 P1 et 25 000 P2.
5) Consommation de M : 3 000 kg pour P1 et 1 500 kg pour P2.
6) Ventes : 29 000 P1 à 300 DH et 25 000 P2 à 200 DH.
7) Charges indirectes :
| Éléments | Administration | Entretien | Transformation | Montage | Distribution |
|---|---|---|---|---|---|
| Totaux primaires | 1 000 000 | 200 000 | 2 250 000 | 1 980 000 | 1 340 000 |
| Administration | — | 5 % | 25 % | 30 % | 40 % |
| Entretien | 10 % | — | 35 % | 35 % | 20 % |
| Unités d'œuvre | | | 1 kg de matière consommée | 1 heure de MOD | 1 000 DH de CA |
1) Établir le tableau de répartition. 2) Calculer les résultats analytiques de P1 et P2 (toutes les étapes intermédiaires).`,
questions:[
{pts:4, q:"1) Tableau de répartition des charges indirectes.",
chk:[{l:"Total Administration (prestations réciproques)",v:1025125.63,u:"DH",tol:2},{l:"Coût de l'UO Transformation",v:576.49,u:"DH",tol:0.02},{l:"Coût de l'UO Montage",v:63.35,u:"DH",tol:0.01},{l:"Coût de l'UO Distribution",v:131.41,u:"DH",tol:0.01}],
model:`A = 1 000 000 + 0,10 E ; E = 200 000 + 0,05 A ⇒ 0,995 A = 1 020 000 ⇒ **A = 1 025 125,63** ; **E = 251 256,28**.
| | Administration | Entretien | Transformation | Montage | Distribution |
|---|---|---|---|---|---|
| Totaux primaires | 1 000 000,00 | 200 000,00 | 2 250 000,00 | 1 980 000,00 | 1 340 000,00 |
| Administration | − 1 025 125,63 | 51 256,28 | 256 281,41 | 307 537,69 | 410 050,25 |
| Entretien | 25 125,63 | − 251 256,28 | 87 939,70 | 87 939,70 | 50 251,26 |
| **Totaux secondaires** | 0 | 0 | **2 594 221,11** | **2 375 477,39** | **1 800 301,51** |
| Nombre d'UO | | | 4 500 kg | 37 500 h | 13 700 (13 700 000 / 1 000) |
| **Coût de l'UO** | | | **576,49** | **63,35** | **131,41** |`,
kp:["Résolution des prestations réciproques (A ≈ 1 025 126 ; E ≈ 251 256)","Totaux secondaires (total 6 770 000 conservé)","UO : 4 500 kg ; 37 500 h ; 13 700 (CA 13 700 000)","Coûts d'UO ≈ 576,49 ; 63,35 ; 131,41"]},
{pts:8, q:"2) Coûts et résultats analytiques de P1 et P2.",
chk:[{l:"CMUP de la matière M",v:392,u:"DH/kg"},{l:"Coût de production unitaire de P1",v:189.57,u:"DH",tol:0.02},{l:"Coût de production unitaire de P2",v:95.78,u:"DH",tol:0.02},{l:"Résultat analytique de P1",v:2008915,u:"DH",tol:300},{l:"Résultat analytique de P2",v:1948389,u:"DH",tol:300}],
model:`**Matière M** (pas de centre approvisionnement : coût d'achat = prix d'achat) : CMUP = (360 000 + 1 600 000) / 5 000 = **392 DH/kg** ; stock final 500 kg = 196 000.
#### Coûts de production
| | P1 (25 000) | P2 (25 000) |
|---|---|---|
| Matière M | 3 000 × 392 = 1 176 000,00 | 1 500 × 392 = 588 000,00 |
| MOD | 250 000,00 | 150 000,00 |
| Transformation (× 576,49) | 1 729 480,74 | 864 740,37 |
| Montage (× 63,35) | 1 583 651,59 | 791 825,80 |
| **Total** | **4 739 132,33** | **2 394 566,17** |
| **Coût unitaire** | **189,57** | **95,78** |
#### Stocks de produits (CMUP)
P1 : (5 000 × 200 + 4 739 132,33) / 30 000 = **191,30** ; stock final 1 000 P1. P2 : 95,78 (tout est vendu).
#### Coûts de revient et résultats
| | P1 | P2 |
|---|---|---|
| Coût de production des produits vendus | 29 000 × 191,30 = 5 547 828 | 2 394 566 |
| Distribution (CA / 1 000 × 131,41) | 8 700 × 131,41 = 1 143 257 | 5 000 × 131,41 = 657 044 |
| **Coût de revient** | **6 691 085** | **3 051 611** |
| Chiffre d'affaires | 8 700 000 | 5 000 000 |
| **Résultat analytique** | **≈ 2 008 915** | **≈ 1 948 389** |
Résultat analytique global ≈ 3 957 304 DH.`,
kp:["CMUP de M = 392","Coûts de production P1 ≈ 4 739 132 (189,57) et P2 ≈ 2 394 566 (95,78)","CMUP du stock de P1 ≈ 191,30","Distribution sur la base du CA (UO de 1 000 DH)","Résultats ≈ 2 008 915 (P1) et ≈ 1 948 389 (P2)"]}
]},
{title:"CA — Dossier 2 : Société AXEL (seuils de rentabilité global et spécifiques)", pts:8, pages:[269,269], th:["ca-variable","g-rentabilite"],
ctx:`La société AXEL fabrique et vend P1 et P2. P1 : ventes 80 000 unités ; prix 300 DH ; MCV unitaire 120 DH. P2 : ventes 20 000 unités ; prix 200 DH ; MCV unitaire 70 DH. Frais fixes : **8 500 000 DH**, dont **650 000** spécifiques à P1 et **750 000** à P2, le reste étant commun. Déterminer le seuil de rentabilité global et le seuil de rentabilité spécifique à chaque produit.`,
questions:[
{pts:8, q:"Seuil de rentabilité global et seuils spécifiques.",
chk:[{l:"SR global (en DH de CA)",v:21636363.64,u:"DH",tol:500},{l:"SR spécifique de P1 (unités)",v:5416.67,u:"unités",tol:1},{l:"SR spécifique de P2 (unités)",v:10714.29,u:"unités",tol:1}],
model:`| | P1 | P2 | Total |
|---|---|---|---|
| CA | 24 000 000 | 4 000 000 | 28 000 000 |
| MCV | 9 600 000 (40 %) | 1 400 000 (35 %) | 11 000 000 (39,29 %) |
| Frais fixes spécifiques | 650 000 | 750 000 | 1 400 000 |
| **Marge sur coût spécifique** | **8 950 000** | **650 000** | 9 600 000 |
| Frais fixes communs | | | 7 100 000 |
| **Résultat** | | | **2 500 000** |
**SR global** (structure de ventes constante) = 8 500 000 / 39,2857 % = **21 636 364 DH** de CA ; en volume : un « lot » de 4 P1 + 1 P2 dégage 4 × 120 + 70 = 550 DH ⇒ 8 500 000 / 550 = 15 454,5 lots, soit **61 818 P1 et 15 455 P2**. Marge de sécurité : 6 363 636 DH (22,7 % du CA).
**Seuils spécifiques** (niveau où la MCV couvre les charges fixes propres au produit) :
- P1 : 650 000 / 120 = **5 417 unités** (CA 1 625 000) ;
- P2 : 750 000 / 70 = **10 715 unités** (CA 2 142 857).
**Commentaire** : P2 n'a qu'une faible marge de sécurité sur ses frais spécifiques (20 000 vendus pour un seuil de 10 715) et ne contribue que pour 650 000 à la couverture des frais communs ; P1 porte l'essentiel de la rentabilité.`,
kp:["MCV par produit et taux global 39,29 %","SR global = CF totales / taux de MCV ≈ 21,64 M (structure constante)","Traduction en quantités (lots 4:1)","SR spécifiques : 5 417 P1 et 10 715 P2","Marges sur coûts spécifiques et commentaire"]}
]}
]});

EXAMS.push({
id:"droit-2018", subject:"droit", year:2018, session:"Septembre 2018", title:"Droit des affaires et droit fiscal", date:"Septembre 2018", duration:180, pages:[270,275],
note:"Droit des affaires /20 (barème non précisé : 12 + 8 retenus) et droit fiscal /20",
sections:[
{title:"Droit des affaires — Question 1 : augmentation de capital d'une SARL par incorporation de comptes courants", pts:12, pages:[271,271], th:["da-capital"],
ctx:`Une SARL de droit marocain souhaite procéder à une augmentation de son capital social par incorporation de comptes courants d'associés.`,
questions:[
{pts:3, q:"1. Quels sont les différents actes juridiques à formaliser ?",
model:`L'opération est une augmentation de capital **par compensation** avec des créances certaines, liquides et exigibles (comptes courants d'associés). Actes :
1. **Arrêté des comptes courants** par le gérant (montant certain, liquide et exigible), le cas échéant certifié par le commissaire aux comptes s'il existe.
2. **Rapport de la gérance** aux associés sur l'opération (motifs, montant, conditions, nombre de parts créées).
3. **Procès-verbal de l'assemblée générale extraordinaire** décidant l'augmentation, l'émission des parts nouvelles, leur souscription par compensation et la **modification corrélative des statuts** (articles « apports » et « capital »).
4. **Bulletins de souscription** / déclaration de souscription et de libération par compensation ; s'il y a renonciation d'autres associés à leur souscription proportionnelle, actes de renonciation.
5. **Statuts mis à jour**.
6. **Formalités de publicité** : enregistrement du PV, avis dans un journal d'annonces légales, **dépôt au greffe** et **inscription modificative au registre du commerce** (formulaire modèle 3).`,
kp:["Arrêté des comptes courants (créance certaine, liquide, exigible)","Rapport du gérant","PV de l'AGE (décision, modification des statuts)","Souscription par compensation","Statuts mis à jour et formalités (enregistrement, annonce, greffe, RC)"]},
{pts:3, q:"2. Quels sont les délais légaux à respecter ?",
model:`- **Convocation** de l'assemblée par lettre recommandée au moins **15 jours** avant la réunion, avec communication du texte des résolutions et du rapport de la gérance.
- **Majorité** : décision des associés représentant au moins les **3/4 du capital** (modification des statuts).
- **Enregistrement** du procès-verbal dans le délai d'**un mois** (droits d'enregistrement).
- **Publicité** : avis dans un journal d'annonces légales, puis **dépôt au greffe** et **inscription modificative au RC** dans le délai d'**un mois** suivant la décision (délais de la loi 5-96 et du Code de commerce).
- L'augmentation de capital doit être **réalisée** (souscription et libération) dans le délai fixé par l'assemblée ; à défaut, la décision devient caduque.
(Les délais précis sont à vérifier dans la version en vigueur de la loi 5-96.)`,
kp:["Convocation 15 jours avant","Majorité des 3/4 du capital","Enregistrement dans le mois","Publicité et dépôt au greffe / RC dans le mois"]},
{pts:3, q:"3. Quelles sont les implications fiscales ?",
model:`- **Droits d'enregistrement** : les augmentations de capital (constitution et augmentation des sociétés) sont **exonérées** de droits d'enregistrement depuis 2010 (sous réserve des règles applicables aux apports immobiliers) ; l'acte doit néanmoins être enregistré.
- **IS** : opération neutre pour la société (pas de produit) ; les **intérêts** courus sur les comptes courants jusqu'à la date de l'incorporation restent déductibles dans les limites légales (capital libéré, montant ≤ capital, taux plafond).
- **Associés** : la conversion de la créance en parts n'est pas un revenu ; les intérêts éventuellement versés supportent la **retenue à la source** (produits de placement à revenu fixe).
- **Droits de timbre** et frais d'actes ; les frais d'augmentation de capital sont **déductibles** (ou amortis comme frais préliminaires).`,
kp:["Exonération des droits d'enregistrement sur les augmentations de capital (enregistrement obligatoire)","Neutralité pour l'IS ; intérêts des comptes courants dans les limites légales","Retenue à la source sur les intérêts aux associés","Frais d'augmentation de capital déductibles / amortissables"]},
{pts:3, q:"4. Quelles sont les autres formes d'augmentation de capital ?",
model:`1. **Apports nouveaux en numéraire** (avec éventuellement prime d'émission ; droit préférentiel de souscription en SA).
2. **Apports en nature** (évaluation par un commissaire aux apports).
3. **Incorporation de réserves, bénéfices ou primes** : augmentation du nominal ou attribution gratuite de parts/actions.
4. **Compensation de créances** (comptes courants, dettes fournisseurs…).
5. Pour les SA : **conversion d'obligations** en actions, exercice de **bons de souscription**, **fusion / apport partiel d'actif** (augmentation de capital de la société bénéficiaire), émission d'actions au profit des salariés (stock-options), paiement du dividende en actions.`,
kp:["Numéraire","Apport en nature","Incorporation de réserves/bénéfices/primes","Compensation de créances","Conversion d'obligations, fusion, autres (SA)"]}
]},
{title:"Droit des affaires — Question 2 : le statut de l'auto-entrepreneur", pts:8, pages:[271,271], th:["da-commercant"],
questions:[
{pts:4, q:"Le statut de l'auto-entrepreneur.",
model:`Institué par la **loi 114-13** (2015), il vise à formaliser les petites activités et à favoriser l'entrepreneuriat :
- **Bénéficiaires** : personnes physiques exerçant à titre individuel une activité **industrielle, commerciale, artisanale** ou une prestation de services, avec un **chiffre d'affaires annuel plafonné** (500 000 DH pour le commerce, l'industrie et l'artisanat ; 200 000 DH pour les services) ; certaines professions sont exclues.
- **Formalités allégées** : inscription au **Registre national de l'auto-entrepreneur** (via Barid Al-Maghrib), **dispense d'immatriculation au registre du commerce**, carte d'auto-entrepreneur.
- **Régime fiscal** : IR libératoire sur le **chiffre d'affaires encaissé** (0,5 % pour les activités commerciales, industrielles et artisanales ; 1 % pour les services), déclaration et paiement trimestriels ; exonération de TVA.
- **Comptabilité** simplifiée : registre des recettes et des achats.
- **Protection sociale** : affiliation à l'AMO des indépendants ; **insaisissabilité** du local d'habitation principale par les créanciers professionnels.
- Perte du statut en cas de dépassement du plafond deux années consécutives.`,
kp:["Loi 114-13, personne physique, plafonds de CA","Inscription au registre national, dispense de RC","Fiscalité : IR libératoire sur le CA encaissé (0,5 % / 1 %)","Comptabilité simplifiée et protection sociale","Insaisissabilité de la résidence principale"]},
{pts:4, q:"L'auto-entrepreneur a-t-il la qualité de commerçant ? Argumentez.",
model:`**Position nuancée.**
- **Arguments pour** : la qualité de commerçant s'acquiert par l'exercice **habituel ou professionnel** d'**actes de commerce** (art. 6 et s. du Code de commerce). L'auto-entrepreneur qui achète pour revendre, fabrique ou exploite une activité commerciale accomplit des actes de commerce de manière habituelle : il est commerçant **de fait**, soumis au droit commercial (preuve libre, compétence des tribunaux de commerce, procédures collectives).
- **Arguments contre** : la loi 114-13 le **dispense d'immatriculation au registre du commerce** ; or l'immatriculation crée une présomption de commercialité. De plus, l'activité peut être artisanale ou de services non commerciaux, et le régime vise des personnes en marge de l'économie formelle.
- **Conclusion** : la dispense d'immatriculation ne fait pas obstacle à la qualité de commerçant, qui dépend de la **nature de l'activité exercée** ; l'auto-entrepreneur qui réalise des actes de commerce à titre habituel est commerçant (avec un régime fiscal et administratif dérogatoire), celui qui exerce une activité artisanale ou libérale ne l'est pas.`,
kp:["Critère légal : exercice habituel d'actes de commerce (Code de commerce)","Dispense d'immatriculation au RC (présomption non applicable)","Distinction selon la nature de l'activité (commerciale vs artisanale/services)","Conclusion argumentée"]}
]},
{title:"Droit fiscal — Partie I : cadre de la réglementation fiscale", pts:2, pages:[273,273], th:["df-is","df-procedures"],
questions:[
{pts:1, q:"1. Quelles sont les sources du droit fiscal ? Analysez leur interdépendance.",
model:`- **Constitution** (2011) : principe de légalité de l'impôt (art. 39 : chacun supporte les charges publiques selon ses capacités ; art. 71 : le régime fiscal relève du domaine de la **loi**).
- **Conventions fiscales internationales** (non double imposition) : supérieures à la loi interne.
- **Lois** : le **CGI** et ses modifications annuelles par la **loi de finances** ; lois spécifiques (fiscalité locale 47-06).
- **Règlements** : décrets et arrêtés d'application (taux d'intérêt des comptes courants, modèles de déclarations).
- **Doctrine administrative** : notes circulaires de la DGI (interprétation ; opposable à l'administration).
- **Jurisprudence** (tribunaux administratifs, Cour de cassation) et avis de la **Commission nationale de recours fiscal**.
**Interdépendance** : hiérarchie des normes (Constitution > conventions > loi > règlement > doctrine) ; les lois de finances modifient le CGI chaque année, les décrets précisent ses modalités, la doctrine et la jurisprudence l'interprètent et contribuent à son évolution (le législateur codifie souvent les solutions jurisprudentielles).`,
kp:["Constitution (légalité de l'impôt)","Conventions internationales","CGI et lois de finances","Règlements, doctrine (notes circulaires), jurisprudence","Hiérarchie et interactions"]},
{pts:1, q:"2. Commentez l'article 8 du CGI (résultat fiscal = produits − charges selon la comptabilité, modifié par la réglementation fiscale).",
model:`L'article 8 pose le principe de la **connexion** entre comptabilité et fiscalité :
- Le **point de départ** du résultat fiscal est le **résultat comptable** établi selon la loi 9-88 et le CGNC : produits et charges de l'**exercice** (principe de spécialisation, droits constatés).
- Les charges ne sont retenues que si elles sont **engagées ou supportées pour les besoins de l'activité imposable** (intérêt de l'entreprise, justification, régularité).
- Ce résultat est **corrigé extra-comptablement** par des **réintégrations** (charges non déductibles : amendes, IS, provisions irrégulières, excédents d'amortissement…) et des **déductions** (produits exonérés ou déjà taxés : dividendes, reprises de provisions réintégrées…), conformément à la législation fiscale.
- Conséquence : la qualité de la comptabilité conditionne la déduction (une charge non comptabilisée — ex. amortissement — est perdue), et l'administration peut rejeter une comptabilité non probante.`,
kp:["Résultat comptable comme base (connexion)","Charges engagées pour les besoins de l'activité imposable","Corrections extra-comptables : réintégrations et déductions","Conséquences (charges non comptabilisées perdues, comptabilité probante)"]}
]},
{title:"Droit fiscal — Partie II : IS (société GLORIAN)", pts:4, pages:[273,273], th:["df-is","cg-devises"],
ctx:`Traitement fiscal au regard de l'IS des opérations suivantes :
- Une voiture **BMW** mise à disposition du directeur général, acquise par **crédit-bail en janvier 2017** : loyer mensuel **19 200 DH TTC** ; valeur d'acquisition figurant au contrat **840 000 DH TTC** ; durée 5 ans.
- Créances et dettes en devises au 31 décembre (cours de clôture : euro 10,30 DH ; dollar 9,60 DH) :
| Tiers | Nature | Solde en devise | Devise | Solde en DH |
|---|---|---|---|---|
| SOCOMA | Client | 45 600 | Euro | 480 000 |
| IBANEX | Client | 33 800 | Dollar | 300 000 |
| FURANA | Fournisseur | 135 000 | Euro | 1 400 000 |
| DATAFIVE | Fournisseur | 26 400 | Dollar | 270 000 |`,
questions:[
{pts:4, q:"Traitement fiscal du crédit-bail de la BMW et des écarts de conversion.",
chk:[{l:"Réintégration annuelle — crédit-bail BMW",v:108000,u:"DH"},{l:"Perte latente (provision déductible) — SOCOMA",v:10320,u:"DH"},{l:"Total des gains latents imposables",v:50540,u:"DH"}],
model:`#### Crédit-bail de la BMW
Véhicule de transport de personnes : la part de la redevance correspondant à l'amortissement au-delà de **300 000 DH TTC** (taux 20 %) n'est pas déductible : (840 000 − 300 000) × 20 % = **108 000 DH réintégrés** chaque année (loyers annuels 230 400, dont 122 400 déductibles).
#### Écarts de conversion
| Tiers | Valeur historique | Valeur au cours de clôture | Écart | Nature | Traitement fiscal |
|---|---|---|---|---|---|
| SOCOMA (client, €) | 480 000 | 45 600 × 10,30 = 469 680 | − 10 320 | Perte latente (ECA) | Provision pour perte de change **déductible** |
| IBANEX (client, $) | 300 000 | 33 800 × 9,60 = 324 480 | + 24 480 | Gain latent (ECP) | **Imposable** : réintégré |
| FURANA (fournisseur, €) | 1 400 000 | 135 000 × 10,30 = 1 390 500 | dette − 9 500 | Gain latent (ECP) | **Imposable** : réintégré |
| DATAFIVE (fournisseur, $) | 270 000 | 26 400 × 9,60 = 253 440 | dette − 16 560 | Gain latent (ECP) | **Imposable** : réintégré |
Le CGI impose les **gains de change latents** (écarts de conversion passif) dans l'exercice de leur constatation et admet la **déduction de la provision** pour pertes latentes : réintégration totale de **50 540 DH** ; ces montants seront **déduits** l'année suivante lors de leur réalisation (contre-passation) pour éviter une double imposition.`,
kp:["BMW : base plafonnée à 300 000 TTC → réintégration de 108 000 par an","Calcul des 4 écarts au cours de clôture","SOCOMA : perte latente → provision déductible (10 320)","Gains latents IBANEX, FURANA, DATAFIVE imposables (50 540)","Déduction l'année suivante (pas de double imposition)"]}
]},
{title:"Droit fiscal — Partie III : IR (revenus fonciers, profit foncier, salaire)", pts:7, pages:[274,274], th:["df-ir"],
ctx:`**1. Impôt sur les revenus fonciers (3 points)**
1) Un propriétaire célibataire loue en 2017 une maison et un terrain hors du périmètre urbain : maison louée **6 000 DH par mois** ; terrain loué pour un loyer annuel forfaitaire de **18 000 DH**. Calculer l'IR annuel dû sur ces loyers.
2) Le terrain sera cédé en 2018 au prix de **1 000 000 DH** : date d'achat 1998 ; coefficient de réévaluation de 1998 : **1,2** ; prix d'achat **400 000 DH**. Calculer l'IR dû.
**2. Impôt sur les revenus salariaux (4 points)** — attestation de salaire 2017 de M. Kamal (marié, père de 2 enfants) : salaire de base 250 000 ; prime annuelle 53 000 ; prime de transport 5 000 ; prime de l'Aïd Al Adha 3 000 ; prime de logement 7 000 ; cotisations sociales retenues 16 000. Calculer l'IR prélevé par l'employeur au titre de 2017.
Barème : 0 à 30 000 exonéré ; 30 001 à 50 000 : 10 % (3 000) ; 50 001 à 60 000 : 20 % (8 000) ; 60 001 à 80 000 : 30 % (14 000) ; 80 001 à 180 000 : 34 % (17 200) ; au-delà : 38 % (24 400).`,
questions:[
{pts:1.5, q:"1-1) IR sur les revenus fonciers de 2017.",
chk:[{l:"Revenu foncier net imposable",v:54000,u:"DH"},{l:"IR dû",v:2800,u:"DH",alt:[9000]}],
model:`**Régime de 2017** (avant la réforme de 2019) : les revenus fonciers sont retenus pour leur montant brut diminué d'un **abattement de 40 %** et ajoutés au revenu global soumis au barème.
- Loyers bruts : 6 000 × 12 + 18 000 = **90 000 DH**
- Revenu net foncier : 90 000 × 60 % = **54 000 DH** (seul revenu du contribuable)
- IR = 54 000 × 20 % − 8 000 = **2 800 DH** (célibataire : pas de réduction pour charges de famille).
> Depuis 2019, les revenus fonciers sont imposés à un taux libératoire de 10 % (brut < 120 000) après exonération des loyers ≤ 30 000 : ici 90 000 × 10 % = 9 000 DH. Les loyers de terrains à usage agricole peuvent relever des revenus agricoles.`,
kp:["Loyers bruts 90 000","Abattement de 40 % (régime 2017) → 54 000","IR au barème = 2 800","Mention du régime libératoire depuis 2019"]},
{pts:1.5, q:"1-2) IR sur le profit foncier de la cession du terrain en 2018.",
chk:[{l:"Prix d'acquisition réévalué",v:552000,u:"DH"},{l:"Profit foncier",v:448000,u:"DH"},{l:"IR sur le profit foncier",v:89600,u:"DH"}],
model:`- Prix d'acquisition majoré des **frais d'acquisition** (forfait de 15 % à défaut de justification) : 400 000 × 1,15 = 460 000
- Réévaluation (coefficient 1,2) : 460 000 × 1,2 = **552 000**
- Profit = 1 000 000 − 552 000 = **448 000**
- IR = 448 000 × **20 %** = **89 600 DH**, supérieur au minimum de **3 % du prix de cession** (30 000) ⇒ impôt dû **89 600**, à déclarer et payer dans les 30 jours de la cession (les frais de cession justifiés seraient déductibles du prix).`,
kp:["Frais d'acquisition forfaitaires 15 %","Réévaluation par le coefficient 1,2 → 552 000","Profit 448 000 ; taux 20 %","Comparaison au minimum de 3 % du prix (30 000)"]},
{pts:4, q:"2) IR prélevé par l'employeur sur le salaire 2017 de M. Kamal.",
chk:[{l:"Salaire brut imposable",v:313000,u:"DH"},{l:"Revenu net imposable",v:267000,u:"DH"},{l:"IR annuel",v:75980,u:"DH"}],
model:`| Élément | Montant |
|---|---|
| Salaire de base | 250 000 |
| Prime annuelle | 53 000 |
| Prime de transport (exonérée : ≤ 500 DH/mois en périmètre urbain) | 0 |
| Prime de l'Aïd | 3 000 |
| Prime de logement | 7 000 |
| **Salaire brut imposable** | **313 000** |
| Frais professionnels 2017 : 20 % plafonnés à 30 000 | − 30 000 |
| Cotisations sociales retenues | − 16 000 |
| **Revenu net imposable** | **267 000** |
IR brut = 267 000 × 38 % − 24 400 = 77 060 ; charges de famille 3 × 360 = − 1 080 ⇒ **IR = 75 980 DH** (≈ 6 331,67 DH par mois).`,
kp:["Exonération de la prime de transport","Primes d'Aïd et de logement imposables","SBI 313 000 ; frais professionnels plafonnés à 30 000","RNI 267 000","IR 77 060 − 1 080 = 75 980"]}
]},
{title:"Droit fiscal — Partie IV : TVA de juin 2018 (MK Capital)", pts:7, pages:[275,275], th:["df-tva"],
ctx:`Au titre de juin 2018, MK Capital a réalisé : CA encaissé au titre des opérations exonérées avec droit à déduction : 200 000 ; CA encaissé au titre des opérations taxables à 20 % : 800 000 ; CA encaissé au titre des opérations hors champ : 10 000 ; livraison à soi-même d'une immobilisation : coût de revient 60 000 ; facture IAM (TVA 1 200) payée par virement daté du 30/06/2018 et débité en juillet 2018 ; TVA de 130 000 sur une importation de machine payée le 13 juillet 2018, quittance des droits de douane de juin 2018 ; achat de matière première 22 000 TTC (20 %) payé par traite acceptée le 12/02/2018 à échéance le 30/06/2018 ; agios bancaires débités le 01/06/2018 : 8 500 TTC ; entretien de la voiture de direction 3 600 (dont TVA 600) payé en juin ; billet d'avion payé en espèces le 10 juin : 15 000 TTC ; achats en espèces de matières consommables : 15 000 TTC (20 %).
1. TVA collectée de juin 2018 ; 2. TVA déductible (prorata 100 %) ; 3. TVA due.`,
questions:[
{pts:7, q:"TVA collectée, déductible et due (ou crédit) de juin 2018.",
chk:[{l:"TVA collectée",v:145333.33,u:"DH",tol:5,alt:[172000]},{l:"TVA déductible",v:146439.39,u:"DH",tol:5,alt:[147039.39]},{l:"TVA due (− = crédit de TVA)",v:-1106.06,u:"DH",tol:5,alt:[25560.61]}],
model:`#### TVA collectée (encaissement)
| Opération | TVA |
|---|---|
| CA exonéré avec droit à déduction | 0 |
| CA taxable encaissé 800 000 (montant encaissé = TTC) : 800 000 / 6 | 133 333,33 |
| CA hors champ | 0 |
| Livraison à soi-même d'une immobilisation : 60 000 × 20 % | 12 000,00 |
| **Total** | **145 333,33** |
#### TVA déductible de juin
| Opération | Traitement | TVA |
|---|---|---|
| LASM de l'immobilisation | Collectée et déduite simultanément | 12 000,00 |
| Facture IAM (débit en juillet) | Paiement effectif en juillet → déclaration de juillet | 0 |
| Importation : quittance de juin | Déductible le mois de la quittance | 130 000,00 |
| Matières payées par traite échue le 30/06 | Paiement en juin | 3 666,67 |
| Agios bancaires 8 500 TTC (10 %) | 8 500 × 10/110 | 772,73 |
| Entretien de la voiture de direction | Véhicule de tourisme : exclusion (vérifier : l'exclusion vise le véhicule et les frais y afférents) | 0 |
| Billet d'avion en espèces | Transport de personnes exclu + paiement en espèces ≥ 5 000 | 0 |
| Matières consommables en espèces 15 000 | Paiement en espèces ≥ 5 000 DH : exclu | 0 |
| **Total** | | **146 439,39** |
**TVA due = 145 333,33 − 146 439,39 = − 1 106,06** ⇒ **crédit de TVA de 1 106,06 DH**, reportable sur juillet.
> Si l'on considère les 800 000 comme un CA **hors taxe** : TVA collectée 172 000 et TVA due 25 560,61. Si l'on admet la TVA sur l'entretien (600) : déductible 147 039,39.`,
kp:["CA taxable : TVA sur le montant encaissé","LASM : 12 000 collectée et déduite","IAM au mois du débit effectif (juillet)","Importation déduite au mois de la quittance (juin)","Traite échue en juin ; agios à 10 %","Exclusions : véhicule de tourisme, transport de personnes, espèces ≥ 5 000","Résultat : crédit ≈ 1 106 (ou TVA due 25 561 si CA HT)"]}
]}
]});

(function(){
  const src=EXAMS.find(e=>e.id==="gest-2021");
  const oujda=src?JSON.parse(JSON.stringify(src.sections[0])):null;
  if(oujda) oujda.pages=[277,277];
  EXAMS.push({
  id:"gest-2018", subject:"gest", year:2018, session:"Septembre 2018", title:"Étude de cas de gestion", date:"Septembre 2018", duration:300, pages:[276,282],
  note:"6 exercices — documents non autorisés, calculatrice autorisée",
  sections:[
  oujda||{title:"Exercice 1 : Projets incompatibles (Holding Oujda Détentions)",pts:5,th:["g-invest"],questions:[{pts:5,q:"Voir l'épreuve 2021 (même exercice).",model:"Même exercice qu'en 2021."}]},
  {title:"Exercice 2 : Chikélégance — contraintes, coût standard, budgets flexibles et prévision des ventes", pts:4, pages:[277,279], th:["ca-ecarts","ca-budget","g-budget"],
  ctx:`La société Chikélégance (Marrakech) produit des caftans haut de gamme (**CHG**) et moyen de gamme (**CMG**). Atelier 1 : découpe et broderie ; atelier 2 : assemblage et finition. Unité d'œuvre : l'heure machine. Capacités : **atelier 1 : 93 000 HM ; atelier 2 : 44 520 HM**. Un CMG nécessite 3 HM (atelier 1) et 1,5 HM (atelier 2) ; un CHG 6 HM (atelier 1) et 2,64 HM (atelier 2). Pas de limite pour la matière et la MOD.
1. Présenter les contraintes de production. 2. Déterminer les productions qui assurent le plein emploi des 2 ateliers.
La production normale trimestrielle correspond à la capacité déterminée en 2. Suivi de la production **CHG** : matière : 4 mètres de tissu à 1 000 DH le mètre et diverses fournitures pour 1 200 DH par CHG ; MOD : atelier 1 : 71 500 h à 25 DH ; atelier 2 : 35 750 h à 30 DH ; charges indirectes : atelier 1 : 33 000 HM, variables 165 000, fixes 49 500 ; atelier 2 : 14 520 HM, variables 116 160, fixes 29 040.
1. Établir les budgets flexibles de chaque centre pour 25 000, 33 000, 36 000 HM (atelier 1) et 12 000, 14 520, 15 600 HM (atelier 2). 2. Présenter la fiche de coût standard d'un CHG. 3. Calculer le coût préétabli de la production normale. 4. Production réelle prévue au 4e trimestre 2018 : 2 000 CHG : coût de production préétabli détaillé.
**Dossier 2 — prévision des ventes** (ventes trimestrielles de CHG) :
| Années | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| 2016 | 1 800 | 4 000 | 4 900 | 1 600 | 12 300 |
| 2017 | 1 900 | 4 200 | 5 000 | 1 700 | 12 800 |
| 2018 | 2 100 | 4 500 | 5 500 | 2 000 | 14 100 |
Faire les prévisions des ventes des 4 trimestres de 2019 avec la méthode des totaux mobiles.`,
  questions:[
  {pts:1, q:"Contraintes et productions assurant le plein emploi des deux ateliers.",
  chk:[{l:"Nombre de CMG",v:20000,u:""},{l:"Nombre de CHG",v:5500,u:""}],
  model:`Avec x = CMG et y = CHG :
- Atelier 1 : 3x + 6y ≤ 93 000
- Atelier 2 : 1,5x + 2,64y ≤ 44 520
- x, y ≥ 0
Plein emploi : 3x + 6y = 93 000 ⇒ x = 31 000 − 2y ; 1,5 (31 000 − 2y) + 2,64y = 44 520 ⇒ − 0,36 y = − 1 980 ⇒ **y = 5 500 CHG** ; **x = 20 000 CMG**.
Vérification : CHG consomment 5 500 × 6 = 33 000 HM en atelier 1 et 5 500 × 2,64 = 14 520 HM en atelier 2 (données de l'énoncé).`,
  kp:["Deux contraintes de capacité","Résolution du système en égalités","20 000 CMG et 5 500 CHG"]},
  {pts:1.5, q:"Budgets flexibles, fiche de coût standard d'un CHG, coût préétabli de la production normale et de 2 000 CHG.",
  chk:[{l:"Coût standard d'un CHG",v:5785.4,u:"DH",tol:0.05},{l:"Coût préétabli de la production normale (5 500 CHG)",v:31819700,u:"DH",tol:10},{l:"Coût préétabli de 2 000 CHG",v:11570800,u:"DH",tol:10}],
  model:`#### Budgets flexibles (coût variable par HM : atelier 1 = 165 000 / 33 000 = 5 ; atelier 2 = 116 160 / 14 520 = 8)
| Atelier 1 | 25 000 HM | 33 000 HM | 36 000 HM |
|---|---|---|---|
| Charges variables (× 5) | 125 000 | 165 000 | 180 000 |
| Charges fixes | 49 500 | 49 500 | 49 500 |
| **Total** | **174 500** | **214 500** | **229 500** |
| Coût de l'HM | 6,98 | 6,50 | 6,375 |
| **Atelier 2** | **12 000 HM** | **14 520 HM** | **15 600 HM** |
| Charges variables (× 8) | 96 000 | 116 160 | 124 800 |
| Charges fixes | 29 040 | 29 040 | 29 040 |
| **Total** | **125 040** | **145 200** | **153 840** |
| Coût de l'HM | 10,42 | 10,00 | 9,86 |
#### Fiche de coût standard d'un CHG (activité normale : 5 500 CHG)
| Élément | Quantité | Coût unitaire | Montant |
|---|---|---|---|
| Tissu | 4 m | 1 000 | 4 000,00 |
| Fournitures | | | 1 200,00 |
| MOD atelier 1 (71 500 / 5 500) | 13 h | 25 | 325,00 |
| MOD atelier 2 (35 750 / 5 500) | 6,5 h | 30 | 195,00 |
| Atelier 1 (dont fixe 1,50) | 6 HM | 6,50 | 39,00 |
| Atelier 2 (dont fixe 2,00) | 2,64 HM | 10,00 | 26,40 |
| **Coût standard** | | | **5 785,40** |
**Coût préétabli de la production normale** : 5 500 × 5 785,40 = **31 819 700 DH**.
**Coût préétabli de 2 000 CHG** : tissu 8 000 000 ; fournitures 2 400 000 ; MOD 26 000 h × 25 = 650 000 et 13 000 h × 30 = 390 000 ; atelier 1 : 12 000 HM × 6,50 = 78 000 ; atelier 2 : 5 280 HM × 10 = 52 800 ⇒ **11 570 800 DH**.`,
  kp:["Séparation variable / fixe (5 et 8 DH par HM)","Budgets flexibles aux trois niveaux d'activité","Fiche de coût standard d'un CHG = 5 785,40","Production normale : 31 819 700","2 000 CHG : coût détaillé = 11 570 800"]},
  {pts:1.5, q:"Prévision des ventes 2019 par les totaux mobiles.",
  chk:[{l:"Prévision T1 2019",v:2092,u:"",tol:15},{l:"Prévision T3 2019",v:5718,u:"",tol:15},{l:"Total prévu 2019",v:14747,u:"",tol:30}],
  model:`**Totaux mobiles** (somme des 4 derniers trimestres), du T4 2016 au T4 2018 :
| Rang t | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Trimestre | T4 16 | T1 17 | T2 17 | T3 17 | T4 17 | T1 18 | T2 18 | T3 18 | T4 18 |
| Total mobile | 12 300 | 12 400 | 12 600 | 12 700 | 12 800 | 13 000 | 13 300 | 13 800 | 14 100 |
Ajustement linéaire (moindres carrés) des totaux mobiles : **TM = 218,33 t + 11 908,33**.
Totaux mobiles prévus : t = 10 : 14 091,7 ; t = 11 : 14 310,0 ; t = 12 : 14 528,3 ; t = 13 : 14 746,7.
Ventes d'un trimestre = ventes du même trimestre de l'année précédente + variation du total mobile :
| 2019 | Calcul | Prévision |
|---|---|---|
| T1 | 2 100 + (14 091,7 − 14 100) | **≈ 2 092** |
| T2 | 4 500 + (14 310,0 − 14 091,7) | **≈ 4 718** |
| T3 | 5 500 + (14 528,3 − 14 310,0) | **≈ 5 718** |
| T4 | 2 000 + (14 746,7 − 14 528,3) | **≈ 2 218** |
| **Total** | | **≈ 14 747** |`,
  kp:["Calcul des 9 totaux mobiles","Ajustement linéaire TM = 218,33 t + 11 908,33","Totaux mobiles prévus pour t = 10 à 13","Ventes = même trimestre N-1 + variation du TM","Prévisions ≈ 2 092 ; 4 718 ; 5 718 ; 2 218"]}
  ]},
  {title:"Exercice 3 : Emprunt à annuités constantes et renégociation (EPITAXI)", pts:3, pages:[279,280], th:["g-mathfi"],
  ctx:`La société EPITAXI a emprunté le 1er janvier N une somme remboursable par **annuités constantes de 70 000 DH**, la première exigible le 31 décembre N. Premier amortissement **M1 = 35 250 DH** ; 5e amortissement **M5 = 49 500 DH**.
1. Calculer le taux de l'emprunt, son montant et sa durée. 2. Calculer le capital restant dû après le paiement de la 5e annuité. 3. Au terme de la 5e année, EPITAXI propose de liquider le solde par **8 termes annuels constants** ; la banque accepterait moyennant des annuités de **50 000 DH**. Quel est le nouveau taux ? Commentaire.`,
  questions:[
  {pts:3, q:"Taux, montant, durée, capital restant dû et taux de la renégociation.",
  chk:[{l:"Taux de l'emprunt",v:9,u:"%",tol:0.2},{l:"Montant emprunté",v:386111,u:"DH",tol:7000},{l:"Durée",v:8,u:"ans"},{l:"Nouveau taux après renégociation",v:23.2,u:"%",tol:1.5}],
  model:`**1.** Les amortissements progressent au taux i : M5 = M1 (1 + i)⁴ ⇒ (1 + i)⁴ = 49 500 / 35 250 = 1,40426 ⇒ 1 + i = 1,0886 : **i ≈ 8,86 %**, soit **9 %** avec les tables (les données sont arrondies).
Intérêts de la 1re année = 70 000 − 35 250 = 34 750 = C₀ × i ⇒ **C₀ = 34 750 / 0,09 ≈ 386 111 DH** (392 212 avec i = 8,86 %).
Durée : 70 000 × [1 − 1,09⁻ⁿ] / 0,09 = 386 111 ⇒ 1,09⁻ⁿ = 0,50357 ⇒ **n ≈ 8 ans**.
**2.** Après la 5e annuité, il reste 3 annuités : C₅ = 70 000 × (1 − 1,09⁻³) / 0,09 ≈ **177 190 DH** (≈ 175 150 avec les valeurs non arrondies).
**3.** C₅ = 50 000 × [1 − (1 + t)⁻⁸] / t ⇒ facteur ≈ 3,54 ⇒ **t ≈ 23 %**.
**Commentaire** : la renégociation est **très coûteuse** : l'entreprise remplacerait 3 annuités de 70 000 (210 000) par 8 annuités de 50 000 (400 000) ; le taux implicite (≈ 23 %) est sans commune mesure avec le taux initial (9 %). Elle ne se justifie qu'en cas de grave tension de trésorerie ; il faudrait négocier un taux proche du marché ou un rééchelonnement plus court.`,
  kp:["Relation M5 = M1 (1 + i)⁴ → i ≈ 9 %","C₀ = intérêts de la 1re année / i ≈ 386 000","Durée ≈ 8 ans","Capital restant dû = VA des 3 dernières annuités ≈ 177 000","Taux de la renégociation ≈ 23 % et commentaire critique"]}
  ]},
  {title:"Exercice 4 : Programmation linéaire à deux produits (méthode graphique)", pts:4, pages:[280,280], th:["g-prog"],
  ctx:`Une entreprise fabrique A et B dans trois ateliers :
| | Atelier I | Atelier II | Atelier III |
|---|---|---|---|
| Produit A | 3 h | 2 h | 2 h |
| Produit B | 5 h | 4 h | 2 h |
| Capacité par jour | 4 500 h | 3 600 h | 2 400 h |
MCV unitaires : A 800 DH ; B 1 000 DH. Charges fixes : 75 000 DH par jour. Marchés : B ≤ 750 unités par jour ; A ≤ 900 unités par jour.
1. Formuler toutes les contraintes et les représenter graphiquement (zone des solutions admissibles). 2. Déterminer graphiquement le programme optimal journalier. 3. Bénéfice journalier ; marges des contraintes non saturées ; plein emploi des ateliers ? 4. La MCV de A reste 800 DH, celle de B vaut m > 0 : entre quelles valeurs m doit-il varier pour que le programme reste optimal ?`,
  questions:[
  {pts:4, q:"Modèle, programme optimal, bénéfice, contraintes non saturées et analyse de sensibilité.",
  chk:[{l:"Quantité de A",v:750,u:""},{l:"Quantité de B",v:450,u:""},{l:"Bénéfice journalier",v:975000,u:"DH"},{l:"Borne inférieure de m",v:800,u:"DH"},{l:"Borne supérieure de m",v:1333.33,u:"DH",tol:0.5}],
  model:`**Modèle** : Max Z = 800 x + 1 000 y sous : 3x + 5y ≤ 4 500 (I) ; 2x + 4y ≤ 3 600 (II) ; 2x + 2y ≤ 2 400 ⇔ x + y ≤ 1 200 (III) ; x ≤ 900 ; y ≤ 750 ; x, y ≥ 0.
**Sommets** du domaine admissible :
| Sommet | x | y | Z |
|---|---|---|---|
| (0 ; 0) | 0 | 0 | 0 |
| y = 750 ∩ (I) | 250 | 750 | 950 000 |
| (I) ∩ (III) | **750** | **450** | **1 050 000** |
| (III) ∩ x = 900 | 900 | 300 | 1 020 000 |
| x = 900 ∩ axe | 900 | 0 | 720 000 |
(La contrainte II n'est jamais saturée dans la zone utile : y = 750 ∩ (II) donnerait x = 300, mais (I) est plus restrictive.)
**Optimum : 750 A et 450 B** ; MCV = 1 050 000 ⇒ **bénéfice journalier = 1 050 000 − 75 000 = 975 000 DH**.
**Contraintes** : ateliers I (4 500 h) et III (2 400 h) **saturés** ; atelier II : 3 300 h utilisées, **300 h disponibles** (pas de plein emploi) ; marché de A : 150 unités non servies ; marché de B : 300 unités non servies.
**Sensibilité** : l'optimum reste au point (I) ∩ (III) tant que la pente de la droite d'iso-marge, − 800 / m, reste comprise entre celles de (III) (− 1) et de (I) (− 3/5) : 3/5 ≤ 800 / m ≤ 1 ⇒ **800 ≤ m ≤ 1 333,33 DH**.`,
  kp:["Formulation complète (3 ateliers + 2 marchés)","Sommets et comparaison des MCV","Optimum 750 A / 450 B, bénéfice 975 000","Ateliers I et III saturés ; 300 h libres en II ; marges de marché","Sensibilité : 800 ≤ m ≤ 1 333,33"]}
  ]},
  {title:"Exercice 5 : Distribution conditionnelle et indépendance (chômage × âge)", pts:2, pages:[281,281], th:["g-stats"],
  ctx:`Données sur le chômage X (en mois) et l'âge Y (en années) de jeunes diplômés des écoles de commerce :
| X \\ Y | [20 ; 25[ | [25 ; 30[ | [30 ; 35[ |
|---|---|---|---|
| [0 ; 6[ | 10 | 8 | 5 |
| [6 ; 12[ | 8 | 9 | 4 |
| [12 ; 18[ | 15 | 11 | 9 |
| [18 ; 24[ | 3 | 6 | 2 |
1. Déterminez la distribution de X conditionnelle à Y = [25 ; 30[ ; calculez sa moyenne et son écart type ; interprétez. 2. Les variables « chômage » et « âge » sont-elles indépendantes ? Justifiez.`,
  questions:[
  {pts:2, q:"Distribution conditionnelle, moyenne, écart type et indépendance.",
  chk:[{l:"Moyenne conditionnelle",v:11.65,u:"mois",tol:0.02},{l:"Écart type conditionnel",v:6.21,u:"mois",tol:0.02}],
  model:`**1.** X | Y ∈ [25 ; 30[ : effectifs 8 ; 9 ; 11 ; 6 (n = 34), fréquences 23,5 % ; 26,5 % ; 32,4 % ; 17,6 %.
Centres 3 ; 9 ; 15 ; 21 ⇒ moyenne = (24 + 81 + 165 + 126) / 34 = **11,65 mois** ; variance = (72 + 729 + 2 475 + 2 646) / 34 − 11,65² = 174,18 − 135,66 = 38,52 ⇒ **σ ≈ 6,21 mois**.
Interprétation : les diplômés de 25 à 30 ans restent en moyenne près d'un an au chômage, avec une forte dispersion (coefficient de variation ≈ 53 %).
**2.** N = 90 ; marges de X : 23, 21, 35, 11 ; marges de Y : 36, 34, 20. Sous l'indépendance, on aurait nᵢⱼ = nᵢ. × n.ⱼ / N ; par exemple n₁₁ théorique = 23 × 36 / 90 = 9,2 ≠ 10. Les distributions conditionnelles diffèrent (moyennes conditionnelles : 10,83 ; 11,65 ; 11,40 mois selon l'âge). **Les variables ne sont pas strictement indépendantes**, même si la liaison paraît faible (un test du khi-deux le confirmerait).`,
  kp:["Distribution conditionnelle (8, 9, 11, 6)","Moyenne ≈ 11,65 mois","Écart type ≈ 6,21","Critère d'indépendance nᵢⱼ = nᵢ. n.ⱼ / N non vérifié","Conclusion : liaison faible mais pas d'indépendance stricte"]}
  ]},
  {title:"Exercice 6 : Absentéisme (récurrence) et loi binomiale", pts:2, pages:[281,282], th:["g-probas"],
  ctx:`**Partie A** : un salarié malade est absent ; la première semaine, le salarié n'est pas malade ; s'il n'est pas malade la semaine n, il tombe malade la semaine n+1 avec la probabilité 0,04 ; s'il est malade la semaine n, il le reste la semaine n+1 avec la probabilité 0,24. Eₙ : « absent pour maladie la n-ième semaine », pₙ = P(Eₙ) ; p₁ = 0. 1) Calculer p₃. 2) Sachant qu'il a été absent la 3e semaine, probabilité qu'il l'ait été la 2e. 3) Relation de récurrence entre pₙ et pₙ₊₁.
**Partie B** : l'entreprise emploie 220 salariés ; la probabilité qu'un salarié soit malade une semaine donnée est p = 0,05 ; indépendance entre salariés. X = nombre de salariés malades une semaine donnée. 1) Loi de X. 2) Espérance et variance.`,
  questions:[
  {pts:1, q:"Partie A : p₃, probabilité conditionnelle et récurrence.",
  chk:[{l:"p₃",v:0.048,u:"",tol:0.0005},{l:"P(E₂ | E₃)",v:0.2,u:"",tol:0.0005}],
  model:`p₂ = 0,04 × (1 − p₁) + 0,24 × p₁ = 0,04.
1) **p₃** = 0,24 × 0,04 + 0,04 × 0,96 = 0,0096 + 0,0384 = **0,048**.
2) P(E₂ | E₃) = P(E₂ ∩ E₃) / P(E₃) = 0,04 × 0,24 / 0,048 = **0,2**.
3) pₙ₊₁ = 0,24 pₙ + 0,04 (1 − pₙ) ⇒ **pₙ₊₁ = 0,2 pₙ + 0,04** (suite arithmético-géométrique convergeant vers 0,05).`,
  kp:["p₂ = 0,04 et p₃ = 0,048","Bayes : P(E₂|E₃) = 0,2","Récurrence pₙ₊₁ = 0,2 pₙ + 0,04"]},
  {pts:1, q:"Partie B : loi de X, espérance et variance.",
  chk:[{l:"E(X)",v:11,u:""},{l:"V(X)",v:10.45,u:"",tol:0.005}],
  model:`220 épreuves de Bernoulli indépendantes de paramètre 0,05 : **X ~ B(220 ; 0,05)**.
**E(X) = 220 × 0,05 = 11** salariés malades en moyenne par semaine ; **V(X) = 220 × 0,05 × 0,95 = 10,45** (σ ≈ 3,23). (Approximation possible par la loi de Poisson P(11).)`,
  kp:["B(220 ; 0,05) justifiée","E(X) = 11","V(X) = 10,45"]}
  ]}
  ]});
})();

EXAMS.push({
id:"tec-2018", subject:"tec", year:2018, session:"Septembre 2018", title:"Techniques d'expression et de communication (culture générale)", date:"Septembre 2018", duration:120, pages:[283,284],
sections:[
{title:"Texte : « Pionniers de l'égalité ? » (A. Fairise, Alternatives économiques, 2018)", pts:20, pages:[284,284], th:["tec-dissertation","tec-com"],
ctx:`**Pionniers de l'égalité ?** (extraits)
Alors que les écarts entre les deux sexes persistent, des entreprises prennent des mesures pour les réduire. En matière d'égalité professionnelle, quelques entreprises ont une longueur d'avance : alors que le gouvernement veut faire de l'égalité salariale, à travail de valeur égale, une obligation de résultat en 2022, certaines réduisent déjà les écarts en agissant sur le recrutement, la formation, les promotions, l'articulation des temps de vie.
Si les sociétés du CAC 40 comptent à peine 14,7 % de femmes dans leur comité exécutif, elles représentent 40 % de celui du groupe Up (ex-Chèque Déjeuner), qui a signé dès 2013 un accord sur l'égalité professionnelle. L'état des lieux n'a pas montré d'inégalité de traitement dans l'accès aux promotions et à la formation, mais il a révélé, comme partout, une moindre proportion de femmes cadres dès la montée en hiérarchie et un temps partiel majoritairement féminin — d'où un travail de sensibilisation de tous (« comité exécutif, managers, élus du personnel compris ») aux stéréotypes de genre qui freinent les carrières des femmes.
Le groupe a choisi de revoir la classification des emplois pour la fonder sur des critères objectifs (autonomie, responsabilité, nature des tâches, capacités issues de l'expérience, au même poids que le diplôme) et envisage d'affecter une enveloppe salariale spécifique à la résorption des écarts — mesure encore exceptionnelle, les entreprises privilégiant surtout des corrections en cas de réclamation. Les débats portent sur les bons indicateurs (diplôme, âge, ancienneté, expérience), le taux d'écart acceptable (5 % ou 10 %) ou le choix du salaire médian plutôt que moyen.
— Anne Fairise, *Alternatives économiques*, 2018
**Question** : en vous appuyant sur le texte et sur vos connaissances, faites une analyse du contexte en expliquant les facteurs qui ont favorisé les inégalités, puis proposez d'autres mesures pour briser le « plafond de verre » (faciliter l'évolution de carrière des femmes).`,
questions:[
{pts:20, q:"Analyse du contexte, facteurs des inégalités femmes-hommes et mesures pour briser le plafond de verre.",
model:`#### Introduction
- **Accroche** : 14,7 % de femmes dans les comités exécutifs du CAC 40 ; au Maroc, le taux d'activité des femmes reste inférieur à 25 % et elles sont rares dans les conseils d'administration.
- **Définition** : le **plafond de verre** désigne l'ensemble des obstacles invisibles qui empêchent les femmes d'accéder aux postes de direction malgré des compétences égales.
- **Problématique** : pourquoi les inégalités persistent-elles malgré les lois, et comment les réduire durablement ?
- **Plan** : contexte et facteurs (I), mesures (II).
#### I. Des inégalités persistantes aux causes multiples
1. **Contexte** : progrès du droit (égalité salariale, lois sur l'égalité professionnelle ; au Maroc : Constitution de 2011 art. 19 et principe de parité, Code du travail interdisant la discrimination, loi 19-20 imposant une représentation des femmes dans les conseils des sociétés cotées) mais écarts réels persistants (salaires, postes, temps partiel).
2. **Facteurs culturels** : **stéréotypes** de genre (leadership associé au masculin), autocensure, orientation scolaire genrée, faible présence de modèles féminins.
3. **Facteurs organisationnels** : culture du **présentéisme** et de la disponibilité totale, réunions tardives, critères d'évaluation subjectifs, réseaux de cooptation masculins, classifications d'emplois valorisant certains diplômes (texte).
4. **Facteurs familiaux et sociaux** : inégal partage des tâches domestiques et parentales, maternité pénalisante (« pénalité maternelle »), **temps partiel** majoritairement féminin (texte), insuffisance des modes de garde.
#### II. Briser le plafond de verre : des mesures complémentaires
1. **Mesurer et rendre transparent** : index d'égalité salariale, indicateurs publiés (écarts par poste, promotions, augmentations), audits réguliers ; enveloppes de rattrapage salarial (texte).
2. **Objectiver les processus RH** : grilles de classification fondées sur des critères objectifs (texte), comités de promotion mixtes, CV anonymes, objectifs chiffrés de mixité dans les viviers de talents.
3. **Accompagner les carrières** : mentorat et parrainage, réseaux de femmes, formation au leadership, entretiens de retour de congé maternité, plans de succession incluant des femmes.
4. **Articuler vie professionnelle et vie personnelle** : flexibilité et télétravail, congé paternité plus long, crèches d'entreprise, organisation des réunions en journée ; ne pas pénaliser le temps partiel dans l'évaluation.
5. **Engager la gouvernance** : quotas ou objectifs de représentation dans les conseils et comités exécutifs, rémunération variable des dirigeants liée aux objectifs de mixité, sensibilisation de tous aux biais inconscients (texte).
6. **Rôle de l'État et de l'école** : orientation non stéréotypée, contrôle et sanctions, reporting extra-financier (ESG) — un champ où l'auditeur et l'expert-comptable interviennent.
#### Conclusion
- **Bilan** : les inégalités résultent d'un système de causes culturelles, organisationnelles et sociales ; seules des politiques globales, mesurées et portées par la direction peuvent les réduire.
- **Ouverture** : la mixité n'est pas qu'une question de justice ; c'est aussi un levier de performance et d'innovation pour les entreprises.`,
kp:["Introduction : chiffres, définition du plafond de verre, problématique, plan","Contexte juridique (France / Maroc) et persistance des écarts","Facteurs culturels (stéréotypes, autocensure)","Facteurs organisationnels (présentéisme, critères subjectifs, cooptation)","Facteurs familiaux (tâches domestiques, temps partiel, maternité)","Mesures : transparence et indicateurs, objectivation des processus RH","Mesures : mentorat, conciliation des temps, quotas / gouvernance","Conclusion avec ouverture","Expression : plan apparent, transitions, orthographe"]}
]}
]});
