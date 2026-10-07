/* Session 2024 (19-20 octobre 2024) */
EXAMS.push({
id:"cpt-2024", subject:"cpt", year:2024, session:"19-20 octobre 2024", title:"Comptabilité générale et analytique", date:"Samedi 19 octobre 2024", duration:300, pages:[388,391],
note:"Deux copies séparées : comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Cas 1 : Cession d'un matériel amorti en dégressif (ADALE)", pts:6, pages:[389,389], th:["cg-immo","cg-amort"],
ctx:`Au 30/06/N, l'entreprise ADALE cède un matériel industriel au prix de **100 000 DH**, règlement par virement bancaire. Il s'agit d'une machine dont la valeur d'origine est de **550 000 DH HT, TVA 20 %**, acquise le **02/04/N-3**, durée de vie **10 ans**, amortie selon le mode **dégressif**.
**TAF** : Présentez les écritures comptables relatives à la cession du matériel industriel.`,
questions:[
{pts:6, q:"Présentez les écritures comptables relatives à la cession du matériel industriel.",
chk:[{l:"Dotation complémentaire de N (01/01 → 30/06)",v:31329.38,u:"DH",tol:2},{l:"VNC à la date de cession",v:177533.12,u:"DH",tol:3},{l:"Résultat de cession (produit − VNC)",v:-77533.12,u:"DH",tol:3}],
model:`#### 1. Plan d'amortissement dégressif
Durée 10 ans → taux linéaire 10 % × coefficient **3** (durée > 6 ans) = **taux dégressif 30 %**. Point de départ : le 1er jour du mois d'acquisition (avril N-3 → 9 mois la première année).
| Exercice | Base (VNC début) | Calcul | Dotation | VNC fin |
|---|---|---|---|---|
| N-3 (9 mois) | 550 000,00 | × 30 % × 9/12 | 123 750,00 | 426 250,00 |
| N-2 | 426 250,00 | × 30 % | 127 875,00 | 298 375,00 |
| N-1 | 298 375,00 | × 30 % | 89 512,50 | 208 862,50 |
| N (6 mois) | 208 862,50 | × 30 % × 6/12 | 31 329,38 | ==177 533,12== |
(Le taux linéaire sur la durée restante — 1/6,25 = 16 % en N — reste inférieur à 30 % : pas de passage au linéaire.)
Cumul des amortissements au 30/06/N : 550 000 − 177 533,12 = **372 466,88**.
#### 2. TVA sur la cession
Le matériel a ouvert droit à déduction lors de son acquisition : sa cession est **soumise à la TVA** (20 %) sur le prix de cession → 100 000 HT + 20 000 TVA = 120 000 encaissés. Dans ce cas, il n'y a pas de régularisation de la TVA initialement déduite.
#### 3. Écritures au 30/06/N
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 6193 | DEA des immobilisations corporelles | 31 329,38 | |
| 2833 | Amortissements des installations techniques, matériel et outillage | | 31 329,38 |
| 5141 | Banques | 120 000,00 | |
| 7513 | Produits des cessions des immobilisations corporelles | | 100 000,00 |
| 4455 | État — TVA facturée | | 20 000,00 |
| 6513 | VNA des immobilisations corporelles cédées | 177 533,12 | |
| 2833 | Amortissements des installations techniques, matériel et outillage | 372 466,88 | |
| 2332 | Matériel et outillage | | 550 000,00 |
Résultat de cession : 100 000 − 177 533,12 = **− 77 533,12** (moins-value).
> Variante : si la cession n'était pas soumise à la TVA, la TVA déduite à l'origine (110 000) devrait être **reversée** car le bien est cédé avant 5 ans, diminuée d'un cinquième par année ou fraction d'année écoulée (N-3 à N = 4 années) : 110 000 × 1/5 = 22 000 (6588 / 4456). On peut aussi passer par 3481 « Créances sur cessions d'immobilisations » avant l'encaissement.`,
kp:["Taux dégressif 30 % (coefficient 3) et départ au 1er jour du mois d'acquisition (9/12 en N-3)","Dotations N-3 à N-1 correctes (123 750 ; 127 875 ; 89 512,50)","Dotation complémentaire de N pour 6 mois (31 329,38)","Écriture de cession 5141 / 7513 (100 000 HT) et TVA facturée 20 000","Sortie du bien : 6513 + 2833 / 2332 (VNA 177 533,12)","Traitement de la TVA justifié (cession taxable, ou à défaut reversement de 22 000)"]}
]},
{title:"CG — Cas 2 : Subvention d'investissement (ALIDAR)", pts:9, pages:[389,389], th:["cg-subv","cg-immo"],
ctx:`L'entreprise « ALIDAR » envisage d'investir dans un ensemble industriel comprenant :
- un terrain d'une valeur de 1 800 000 DH ;
- un équipement valant 700 000 DH HT amortissable en mode linéaire sur 5 ans.
Les dirigeants de l'entreprise ont déposé un dossier de demande de subvention auprès d'une collectivité locale. Ils sont informés le **31/12/N-1** de l'octroi d'une subvention d'un montant de **1 000 000 DH pour l'ensemble de l'opération sans qu'aucune clause d'inaliénabilité ne soit stipulée**.
Le **04/01/N**, l'entreprise reçoit un avis de crédit bancaire correspondant au montant de ladite subvention.
Le terrain et l'équipement sont acquis le **12/01/N**. La machine est mise en service le **02/02/N**. Avis de débit bancaire n° TT1100.
Les dirigeants ont décidé que la reprise de la subvention par virement d'une quote-part au résultat se fera selon les solutions fiscales les plus favorables pour l'entreprise.
**TAF** : Présentez les écritures comptables relatives aux opérations ci-dessus.`,
questions:[
{pts:9, q:"Présentez les écritures comptables relatives aux opérations ci-dessus (N-1 et N).",
chk:[{l:"Quote-part de subvention affectée au terrain",v:720000,u:"DH"},{l:"Dotation aux amortissements N de l'équipement",v:128333.33,u:"DH",tol:2,alt:[140000]},{l:"Reprise de subvention au 31/12/N",v:123333.33,u:"DH",tol:2,alt:[128000]}],
model:`#### Ventilation de la subvention
La subvention finance l'ensemble (2 500 000 DH) : on la répartit au prorata du coût des biens.
- Terrain : 1 000 000 × 1 800 000 / 2 500 000 = **720 000**
- Équipement : 1 000 000 × 700 000 / 2 500 000 = **280 000**
#### Reprise au résultat : solution fiscale la plus favorable (étalement)
- Bien **amortissable** : la quote-part est reprise au **rythme des amortissements**, soit 1/5 par an au prorata temporis. Amortissement à partir de la mise en service (02/02/N → 11 mois) : dotation N = 700 000 × 20 % × 11/12 = **128 333,33** ; reprise N = 280 000 × 20 % × 11/12 = **51 333,33**.
- Bien **non amortissable** (terrain) **sans clause d'inaliénabilité** : étalement sur **10 ans** → 720 000 / 10 = **72 000** par an.
- Reprise totale de N = 51 333,33 + 72 000 = ==123 333,33==.
#### Écritures
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **31/12/N-1** | **Notification de l'octroi** | | |
| 3458 | État — autres comptes débiteurs | 1 000 000 | |
| 1311 | Subventions d'investissement reçues | | 1 000 000 |
| **04/01/N** | **Encaissement de la subvention** | | |
| 5141 | Banques | 1 000 000 | |
| 3458 | État — autres comptes débiteurs | | 1 000 000 |
| **12/01/N** | **Acquisitions (avis de débit TT1100)** | | |
| 2310 | Terrains | 1 800 000 | |
| 2332 | Matériel et outillage | 700 000 | |
| 34552 | État — TVA récupérable sur immobilisations | 140 000 | |
| 5141 | Banques | | 2 640 000 |
| **31/12/N** | **Amortissement et reprise de subvention** | | |
| 6193 | DEA des immobilisations corporelles | 128 333,33 | |
| 2833 | Amortissements du matériel et outillage | | 128 333,33 |
| 1319 | Subventions d'investissement inscrites au CPC | 123 333,33 | |
| 7577 | Reprises sur subventions d'investissement | | 123 333,33 |
Au bilan du 31/12/N : subvention nette 1 000 000 − 123 333,33 = 876 666,67 en capitaux propres assimilés.
> Si l'on fait partir l'amortissement du mois d'acquisition (janvier, 12 mois) : dotation 140 000 et reprise 56 000 + 72 000 = 128 000.`,
kp:["Constatation de la créance de subvention dès la notification (N-1) : 3458 / 1311","Encaissement le 04/01/N et acquisitions (terrain sans TVA, TVA récupérable sur l'équipement)","Ventilation 720 000 terrain / 280 000 équipement","Équipement : reprise au rythme de l'amortissement (11 mois) ≈ 51 333","Terrain sans clause d'inaliénabilité : étalement sur 10 ans (72 000)","Écriture de reprise 1319 / 7577 ≈ 123 333 et dotation 6193 / 2833"]}
]},
{title:"CG — Cas 3 : Création d'un site internet (S.A. IMANOL)", pts:5, pages:[389,390], th:["cg-immo","cg-eval"],
ctx:`La S.A. « IMANOL » décide de créer un site internet qui aurait pour objet de présenter les produits de l'entreprise et de réaliser des ventes en ligne. Début avril N, après des études ayant montré que le projet avait de sérieuses chances de réussite technique et de rentabilité commerciale, les dirigeants ont décidé de créer ce site. Après réalisation des travaux de conception, le site a été mis en service le **01/09/N**. Les premiers mois d'utilisation ont confirmé l'hypothèse de réussite. Toutes les dépenses engagées au cours de N ont été comptabilisées en **compte d'attente** :
| Dépenses | Période | Montant HT |
|---|---|---|
| Étude de faisabilité | Janvier – Février | 50 000 |
| Détermination des objectifs et des fonctionnalités du site | Mars | 30 000 |
| Identification des matériels et sélection des fournisseurs de biens et services | Mars | 20 000 |
| Obtention et immatriculation du nom de domaine | Avril | 24 000 |
| Développement de différents logiciels indispensables à la mise en fonctionnalité du site | Avril – Mai | 86 000 |
| Conception graphique des pages du site | Avril à Août | 40 000 |
| Mise en place du contenu du site | Avril à Août | 24 000 |
| Travaux de mise à jour des graphiques du site | Décembre | 17 000 |
La société estime à 4 ans la durée d'utilisation de ce site.
**TAF** : Présentez les écritures comptables du 31/12/N sachant que les dirigeants ont choisi l'option fiscale la plus avantageuse.`,
questions:[
{pts:5, q:"Présentez les écritures comptables du 31/12/N (option fiscale la plus avantageuse).",
chk:[{l:"Coût immobilisé du site",v:174000,u:"DH"},{l:"Dépenses maintenues en charges",v:117000,u:"DH"},{l:"Dotation aux amortissements de N",v:14500,u:"DH"}],
model:`#### Tri des dépenses selon les phases du projet
| Phase | Dépenses | Traitement | Montant |
|---|---|---|---|
| Recherche préalable / planification (avant la décision d'avril) | Étude de faisabilité, objectifs et fonctionnalités, sélection des fournisseurs | **Charges** (aucune certitude sur l'actif à ce stade) | 100 000 |
| Développement (après la décision, jusqu'à la mise en service) | Nom de domaine, logiciels, conception graphique, mise en place du contenu | **Immobilisation incorporelle** : faisabilité technique, intention et capacité d'utilisation, avantages économiques futurs (ventes en ligne), coût mesurable | 174 000 |
| Exploitation (après la mise en service) | Mise à jour des graphiques | **Charge** d'entretien (ne crée pas de nouvelle fonctionnalité) | 17 000 |
L'option fiscale la plus avantageuse consiste à **déduire immédiatement** tout ce qui peut l'être (phase préalable et mise à jour) et à amortir le site dès sa mise en service, sur sa durée d'utilisation (4 ans, linéaire, 25 %).
Dotation N = 174 000 × 25 % × 4/12 (septembre → décembre) = **14 500**.
#### Écritures au 31/12/N
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2285 | Autres immobilisations incorporelles (site internet) | 174 000 | |
| 6136 | Rémunérations d'intermédiaires et honoraires (études) | 100 000 | |
| 6133 | Entretien et réparations (mise à jour) | 17 000 | |
| 3498 | Comptes transitoires ou d'attente — débit | | 291 000 |
| 6192 | DEA des immobilisations incorporelles | 14 500 | |
| 2828 | Amortissements des autres immobilisations incorporelles | | 14 500 |
> On peut aussi passer par les comptes de charges par nature puis la production immobilisée (2285 / 7142 « Immobilisations incorporelles produites »).`,
kp:["Distinction des 3 phases : préalable / développement / exploitation","Charges : études, objectifs, sélection fournisseurs (100 000) + mise à jour (17 000)","Immobilisation : domaine, logiciels, graphisme, contenu = 174 000 (critères d'activation)","Amortissement linéaire 4 ans à partir du 01/09 : 14 500","Solde du compte d'attente (291 000) et écritures correctes"]}
]},
{title:"CA — Entreprise X : coûts réels et imputation rationnelle (travail sur commandes)", pts:20, pages:[391,391], th:["ca-couts","ca-ir","ca-encours"],
ctx:`L'entreprise X, créée le 1er janvier, **sans stocks initiaux**, travaille sur commandes en transformant une matière première unique. **100 tonnes** de matières premières ont été achetées au prix unitaire de **1 000 DH**. Les seuls frais directs du mois de janvier sont : la force motrice des ateliers, soit **5 000 DH** ; la main-d'œuvre directe de production, soit **20 000 DH pour 2 000 heures**.
Les charges indirectes sont réparties entre les sections : 920 administration, 921 approvisionnement, 922 production, 923 distribution. Avant répartition de la section 920 :
| | 920 | 921 | 922 | 923 |
|---|---|---|---|---|
| Totaux | 10 000 | 5 000 | 50 000 | 20 000 |
| Charges fixes | 10 000 | 2 000 | 40 000 | 10 000 |
| Charges variables | — | 3 000 | 10 000 | 10 000 |
| Unité d'œuvre | — | 1 tonne achetée | 1 heure de MOD | 100 DH de CA HT |
| Coefficients d'activité | 1 | 1 | 0,9 | 1,2 |
| Clé de sous-répartition | | 10 % | 60 % | 30 % |
Les charges indirectes ne comprennent que des frais et dotations, à l'exclusion de tout élément supplétif. En janvier, les ateliers ont travaillé sur les commandes suivantes :
| | Commande 1 | Commande 2 |
|---|---|---|
| Matières premières utilisées | 70 tonnes | 20 tonnes |
| MOD | 1 500 heures | 500 heures |
| Force motrice | 3 000 DH | 2 000 DH |
| Avancement | Terminée et livrée | En cours |
| Prix de vente HT | 150 000 DH | non facturé |
**Travail à faire**
1) Après avoir, dans les deux cas, achevé le tableau de répartition, déterminer les différents coûts et prix de revient des deux commandes, l'état des stocks et le résultat sur la commande 1 : par la méthode des coûts réels (8 points) ; par la méthode de l'imputation rationnelle des charges fixes (10 points).
2) Rapprocher et commenter brièvement les résultats obtenus (2 points).`,
questions:[
{pts:8, q:"1-a) Méthode des coûts réels : tableau de répartition, coûts des commandes, stocks et résultat de la commande 1.",
chk:[{l:"Coût d'achat de la tonne de matière",v:1060,u:"DH"},{l:"Coût de production de la commande 1",v:134200,u:"DH"},{l:"En-cours de la commande 2",v:42200,u:"DH"},{l:"Résultat sur la commande 1",v:-7200,u:"DH"}],
model:`#### Tableau de répartition (coûts réels)
| | 920 | 921 | 922 | 923 |
|---|---|---|---|---|
| Totaux primaires | 10 000 | 5 000 | 50 000 | 20 000 |
| Répartition de 920 | − 10 000 | 1 000 | 6 000 | 3 000 |
| **Totaux secondaires** | 0 | **6 000** | **56 000** | **23 000** |
| Nombre d'UO | | 100 t | 2 000 h | 1 500 (150 000 / 100) |
| **Coût de l'UO** | | **60** | **28** | **15,33** |
#### Coût d'achat de la matière
100 t × 1 000 + 100 × 60 = 106 000 → **1 060 DH/t**.
Stock final de matière : 100 − 90 = 10 t × 1 060 = **10 600**.
#### Coûts de production
| | Commande 1 | Commande 2 (en cours) |
|---|---|---|
| Matière | 70 × 1 060 = 74 200 | 20 × 1 060 = 21 200 |
| MOD (10 DH/h) | 1 500 × 10 = 15 000 | 500 × 10 = 5 000 |
| Force motrice | 3 000 | 2 000 |
| Section production | 1 500 × 28 = 42 000 | 500 × 28 = 14 000 |
| **Total** | **134 200** | **42 200** (en-cours) |
#### Coût de revient et résultat de la commande 1
Coût de revient = 134 200 + distribution 1 500 × 15,33 = 23 000 → **157 200**.
Résultat = 150 000 − 157 200 = ==− 7 200==.
**État des stocks** : matières 10 600 ; en-cours (commande 2) 42 200.`,
kp:["Sous-répartition de 920 (1 000 / 6 000 / 3 000)","Coûts d'UO : 60 ; 28 ; 15,33","Coût d'achat 1 060 DH/t et stock de matière 10 600","Coût de production C1 = 134 200 ; en-cours C2 = 42 200","Coût de revient C1 157 200 et résultat − 7 200"]},
{pts:10, q:"1-b) Méthode de l'imputation rationnelle : tableau de répartition, coûts des commandes, stocks, résultat de la commande 1 et différences d'imputation.",
chk:[{l:"Coût de l'UO de la section production (IR)",v:26,u:"DH"},{l:"Coût de production de la commande 1 (IR)",v:131200,u:"DH"},{l:"En-cours de la commande 2 (IR)",v:41200,u:"DH"},{l:"Résultat sur la commande 1 (IR)",v:-6200,u:"DH"}],
model:`Charges fixes imputées = charges fixes × coefficient d'activité ; charges variables imputées en totalité. La section 920 (coefficient 1) est imputée rationnellement puis sous-répartie.
#### Tableau de répartition (IR)
| | 920 | 921 | 922 | 923 |
|---|---|---|---|---|
| Charges fixes réelles | 10 000 | 2 000 | 40 000 | 10 000 |
| Coefficient d'activité | 1 | 1 | 0,9 | 1,2 |
| Charges fixes imputées | 10 000 | 2 000 | 36 000 | 12 000 |
| Charges variables | — | 3 000 | 10 000 | 10 000 |
| Total primaire imputé | 10 000 | 5 000 | 46 000 | 22 000 |
| Répartition de 920 | − 10 000 | 1 000 | 6 000 | 3 000 |
| **Total secondaire imputé** | 0 | **6 000** | **52 000** | **25 000** |
| **Coût de l'UO** | | **60** | **26** | **16,67** |
| **Différence d'imputation** | 0 | 0 | **− 4 000** (coût de sous-activité) | **+ 2 000** (boni de suractivité) |
#### Coûts
- Coût d'achat de la matière : inchangé (921 coefficient 1) → 1 060 DH/t ; stock de matière **10 600**.
| | Commande 1 | Commande 2 (en cours) |
|---|---|---|
| Matière | 74 200 | 21 200 |
| MOD | 15 000 | 5 000 |
| Force motrice | 3 000 | 2 000 |
| Section production (26 DH/h) | 39 000 | 13 000 |
| **Total** | **131 200** | **41 200** |
Coût de revient C1 = 131 200 + 1 500 × 16,67 = 131 200 + 25 000 = **156 200** → résultat = 150 000 − 156 200 = ==− 6 200==.
#### Concordance
| | Montant |
|---|---|
| Résultat analytique de la commande 1 (IR) | − 6 200 |
| Coût de sous-activité de la production | − 4 000 |
| Boni de suractivité de la distribution | + 2 000 |
| **Résultat de la période (stocks valorisés en IR)** | **− 8 200** |
Écart avec les coûts réels (− 7 200) : 1 000 = surévaluation de l'en-cours en coûts réels (42 200 − 41 200), qui « stocke » une part du coût de sous-activité.
> Variante admise : appliquer aussi les coefficients des sections principales aux charges fixes reçues de 920 ; elle modifie légèrement les coûts d'UO (922 : 51 400 → 25,70 DH/h ; 923 : 25 600).`,
kp:["Charges fixes imputées = CF × coefficient (36 000 en 922, 12 000 en 923)","Coûts d'UO IR : 60 ; 26 ; 16,67","Coût de production C1 131 200 et en-cours C2 41 200","Coût de revient C1 156 200, résultat − 6 200","Différences d'imputation : sous-activité − 4 000, boni + 2 000","Concordance avec le résultat (− 8 200 / − 7 200, écart sur l'en-cours)"]},
{pts:2, q:"2) Rapprocher et commenter brièvement les résultats obtenus.",
model:`| | Coûts réels | Imputation rationnelle |
|---|---|---|
| Coût de revient C1 | 157 200 | 156 200 |
| Résultat C1 | − 7 200 | − 6 200 |
| En-cours C2 | 42 200 | 41 200 |
| Différences d'imputation | — | − 2 000 net |
**Commentaire**
- En coûts réels, la commande 1 supporte la **sous-activité** de l'atelier (90 % de l'activité normale : 4 000 de charges fixes non « utilisées ») et profite de la suractivité de la distribution ; ses coûts dépendent donc du niveau d'activité du mois.
- L'imputation rationnelle **neutralise l'effet du volume** : le coût obtenu (156 200) est celui d'une activité normale ; il montre que la commande 1 est **structurellement déficitaire** (− 6 200) : le prix de 150 000 DH est insuffisant, indépendamment du niveau d'activité.
- Les différences d'imputation isolent le **coût du chômage** (− 4 000 en production) et le **boni de suractivité** (+ 2 000 en distribution) : information utile pour le pilotage (capacité inutilisée de l'atelier).
- L'IR évite d'inclure le coût de sous-activité dans les **stocks** (en-cours de 41 200 au lieu de 42 200), conformément au principe selon lequel la sous-activité est exclue de l'évaluation des stocks.`,
kp:["Tableau comparatif des résultats","Coûts réels : dépendent du niveau d'activité (sous-activité supportée par la commande)","IR : coût de référence à activité normale → commande 1 structurellement déficitaire","Différences d'imputation = coût de sous-activité / boni ; incidence sur l'évaluation des stocks"]}
]}
]});

EXAMS.push({
id:"droit-2024", subject:"droit", year:2024, session:"19-20 octobre 2024", title:"Droit des affaires et droit fiscal", date:"Samedi 19 octobre 2024", duration:180, pages:[392,395],
note:"Deux copies séparées : droit fiscal /20 et droit des affaires /20",
sections:[
{title:"Droit fiscal — IS : société CERMED (exercice 2023)", pts:8, pages:[393,393], th:["df-is"],
ctx:`La société « CERMED », spécialisée dans la distribution du matériel industriel, a réalisé en 2023 un chiffre d'affaires hors taxes de **47 530 000 DH**. Créée en 2000, son capital est divisé en **10 000 actions de 100 DH** entièrement libérées. Renseignements extraits de la balance provisoire :
1. Le bénéfice comptable pour l'exercice 2023 est de **+ 530 000 DH**.
2. Trois principaux actionnaires disposent d'un compte courant d'associés de **7 000 000 DH** depuis le 30/11/2021. Ce compte courant est rémunéré au taux de **5 %**. Le taux admis fiscalement en 2023 est de **1,89 %**.
3. La société Transmed SARLAU, appartenant à 100 % au PDG de la société CERMED, a consenti le 10/07/2023 un prêt à cette dernière pour un montant de 2 000 000 DH avec une rémunération au taux de 6 %.
4. Rappel en matière d'impôt sur les sociétés de 2021 d'un montant de 15 500 DH.
5. Taxe de services communaux de 2021 reçue en 2023 : 18 000 DH.
6. Taxe d'habitation de 2023 d'un montant de 10 700 DH. Cette taxe concerne le logement de fonction appartenant à la société et habité par un salarié de la société CERMED.
7. Majorations pour paiement tardif de la taxe d'enseigne de 2022 : 9 000 DH.
8. Frais d'entretien d'une voiture automobile appartenant à la société et affectée au directeur financier : 24 000 DH TTC.
9. Dons de 15 000 DH à une association reconnue d'utilité publique.
10. Cotisation professionnelle de 2022 payée à l'Association des distributeurs du matériel médical pour un montant de 10 000 DH.
11. Dotation aux provisions pour créances douteuses calculée en fonction des statistiques de recouvrement des trois dernières années : 260 000 DH.
12. Dotation aux provisions pour garantie donnée aux clients sur le matériel distribué : 86 000 DH.
13. Dividendes distribués par une filiale de la société implantée au Gabon : 300 000 DH enregistrés en produits financiers de 2023.
**Travail à faire** : calculer le résultat fiscal en opérant toutes les rectifications qui s'imposent, sachant que le déficit de 2022 était de 120 000 DH et la cotisation minimale payée en 2022 était de 120 000 DH ; calculer l'IS dû en 2023.`,
questions:[
{pts:6, q:"Calculer le résultat fiscal 2023 en opérant toutes les rectifications qui s'imposent.",
chk:[{l:"Total des réintégrations",v:625600,u:"DH"},{l:"Résultat fiscal avant imputation du déficit",v:1155600,u:"DH"},{l:"Base imposable après déficit 2022",v:1035600,u:"DH"}],
model:`| N° | Élément | Réintégration | Justification |
|---|---|---|---|
| | Résultat comptable | 530 000 | |
| 2 | Intérêts du compte courant | **331 100** | Comptabilisés : 7 000 000 × 5 % = 350 000. Déductibles seulement sur une avance ≤ capital (1 000 000) et au taux de 1,89 % : 18 900 |
| 3 | Intérêts du prêt Transmed | 0 | Le prêteur n'est pas associé : pas de plafonnement ; taux de 6 % de marché (entreprise liée : vérifier le prix de pleine concurrence) ; joindre l'état des prêteurs |
| 4 | Rappel d'IS 2021 | **15 500** | L'IS n'est jamais déductible de sa propre base |
| 5 | TSC 2021 reçue en 2023 | 0 | Impôt local déductible ; la dette n'est devenue certaine qu'à l'émission du rôle en 2023 |
| 6 | Taxe d'habitation du logement de fonction | 0 | Charge liée à un avantage accordé au salarié pour l'exploitation (à intégrer à son salaire) |
| 7 | Majorations de retard (taxe d'enseigne) | **9 000** | Amendes, pénalités et majorations non déductibles |
| 8 | Entretien de la voiture du DAF | 0 | Véhicule de l'entreprise utilisé pour l'exploitation (le plafond de 300 000 DH ne vise que l'amortissement) |
| 9 | Don à une association reconnue d'utilité publique | 0 | Organisme éligible ; 15 000 < 2 ‰ du CA (95 060) |
| 10 | Cotisation 2022 à une association du matériel médical | **10 000** | Charge d'un exercice antérieur et sans lien avec l'activité (matériel industriel) |
| 11 | Provision statistique pour créances douteuses | **260 000** | Provision globale non individualisée, sans recours judiciaire → non déductible |
| 12 | Provision pour garantie clients | 0 | Obligation contractuelle, charge précise et probable → déductible |
| 13 | Dividendes de la filiale gabonaise | 0 | Pas d'abattement de 100 % pour les dividendes étrangers : produit imposable, déjà inclus (crédit d'impôt conventionnel éventuel) |
| | **Total des réintégrations** | **625 600** | |
Résultat fiscal = 530 000 + 625 600 = ==1 155 600 DH==.
Imputation du déficit 2022 : 1 155 600 − 120 000 = ==1 035 600 DH==.
> La **cotisation minimale** payée en 2022 n'est **pas imputable** sur l'IS (CM définitive depuis 2016) : c'est un piège.`,
kp:["Intérêts CCA : avance plafonnée au capital (1 M) et taux 1,89 % → réintégration 331 100","Rappel d'IS et majorations de retard réintégrés (15 500 + 9 000)","Cotisation 2022 sans lien avec l'activité réintégrée (10 000)","Provision statistique pour créances réintégrée (260 000) ; provision pour garantie admise","Charges admises justifiées : TSC, taxe d'habitation, entretien du véhicule, don (≤ 2 ‰), prêt Transmed","Dividendes étrangers : pas d'abattement","Résultat fiscal 1 155 600 ; après déficit 1 035 600 ; CM 2022 non imputable"]},
{pts:2, q:"Calculer l'IS dû en 2023.",
chk:[{l:"IS dû 2023",v:292557,u:"DH",tol:30}],
model:`- **IS** (taux proportionnel 2023 pour un bénéfice compris entre 1 000 001 et 100 000 000 DH : **28,25 %**) : 1 035 600 × 28,25 % = **292 557 DH**.
- **Cotisation minimale 2023** (taux 0,25 %) : 47 530 000 × 0,25 % = 118 825 DH (119 575 en ajoutant les produits financiers imposables).
- IS dû = max (IS ; CM) = ==292 557 DH==, diminué des acomptes versés en 2023 (calculés sur la CM 2022 de 120 000 → 4 × 30 000), soit un reliquat de 172 557 DH à verser avant le 31/03/2024.`,
kp:["Taux 2023 de 28,25 % (bénéfice > 1 M DH)","IS = 292 557","Comparaison avec la CM (0,25 % du CA = 118 825)","Acomptes 2023 = 120 000 → reliquat 172 557"]}
]},
{title:"Droit fiscal — TVA : société ABC (mars 2023)", pts:5, pages:[393,394], th:["df-tva"],
ctx:`La société ABC, ayant pour activité la vente de produits textiles, a enregistré au cours du mois de mars 2023 les opérations suivantes :
- CA encaissé au titre des opérations exonérées avec droit à déduction : 1 600 000 DH
- CA encaissé au titre des opérations taxables : 10 600 000 DH TTC
- Livraison à soi-même d'un dépôt de stockage : coût de revient 1 500 000 DH HT dont prix d'achat du terrain 400 000 DH
- Encaissement des intérêts sur avance de trésorerie à une société du groupe résidente au Maroc : 25 000 TTC
- Paiement du fournisseur étranger au titre d'une importation de matériel : 750 000 euros (contrevaleur 8 025 000 DH)
- Paiement, par effet à échéance le 02 avril 2023, de la facture du transitaire : 450 000 DH détaillée comme suit : TVA/douane justifiée par une quittance de douane datée du 12 mars 2023 : 1 645 125 DH ; honoraires du transitaire : 12 000 TTC.
**Travail à faire** : préparer la déclaration de la TVA du mois de mars 2023.`,
questions:[
{pts:5, q:"Préparer la déclaration de TVA du mois de mars 2023.",
chk:[{l:"TVA collectée totale",v:1988939.4,u:"DH",tol:5},{l:"TVA déductible",v:1865125,u:"DH",tol:5},{l:"TVA due au titre de mars",v:123814.4,u:"DH",tol:5}],
model:`Le CA exonéré l'est **avec** droit à déduction : pas d'opération sans droit à déduction → **prorata = 100 %**.
#### TVA collectée
| Opération | Base | Taux | TVA |
|---|---|---|---|
| Ventes taxables encaissées (10 600 000 TTC) | 8 833 333,33 | 20 % | 1 766 666,67 |
| Livraison à soi-même du dépôt (coût de revient **hors terrain** : 1 500 000 − 400 000) | 1 100 000 | 20 % | 220 000,00 |
| Intérêts sur avance au groupe (opération de crédit, 25 000 TTC) | 22 727,27 | 10 % | 2 272,73 |
| Ventes exonérées avec droit à déduction | 1 600 000 | — | 0 |
| **Total** | | | **1 988 939,40** |
#### TVA déductible
| Opération | TVA | Mois de déduction |
|---|---|---|
| TVA à l'importation (quittance de douane du 12 mars) | 1 645 125 | **Mars** : droit né le mois de la quittance |
| TVA sur la livraison à soi-même (immobilisation) | 220 000 | **Mars** : collectée et déduite simultanément |
| Honoraires du transitaire (12 000 TTC → 2 000) | 2 000 | **Avril** : paiement par effet échu le 02/04 |
| Paiement du fournisseur étranger (8 025 000) | — | Aucune TVA : la TVA est réglée en douane |
| **Total déductible en mars** | **1 865 125** | |
#### Déclaration de mars 2023 (dépôt avant fin avril)
| | Montant |
|---|---|
| TVA collectée | 1 988 939,40 |
| TVA déductible | − 1 865 125,00 |
| **TVA due** | **==123 814,40==** |`,
kp:["Prorata 100 % (exonérations avec droit à déduction)","TVA sur ventes : 10 600 000 / 6 = 1 766 666,67","LASM : base hors terrain 1 100 000 → 220 000 collectée et déductible","Intérêts intra-groupe : TVA 10 % (2 272,73)","Import : déduction de 1 645 125 au mois de la quittance (mars)","Honoraires du transitaire déductibles en avril (paiement par effet échu le 02/04)","TVA due ≈ 123 814,40"]}
]},
{title:"Droit fiscal — IR : directeur général de CERMED (2023)", pts:7, pages:[394,394], th:["df-ir","df-ras"],
ctx:`Le directeur général (résident au Maroc, marié avec 2 enfants à charge) de la société CERMED dispose des revenus suivants au titre de 2023 :
- Salaire brut imposable de 750 000,00 ;
- Loyer brut d'un appartement durant l'année 2023 : montant du loyer 150 000,00 sachant que le montant encaissé n'est que de 90 000 DH ;
- Dividendes reçus en 2023 d'une société cotée à la bourse de Casablanca : montant net reçu 50 000 DH.
NB : les salariés de la société cotisent uniquement pour la CNSS et l'AMO.
**Barème IR 2023**
| Tranches (DH) | Taux | Somme à déduire |
|---|---|---|
| 0 à 30 000 | exonéré | — |
| 30 001 à 50 000 | 10 % | 3 000 |
| 50 001 à 60 000 | 20 % | 8 000 |
| 60 001 à 80 000 | 30 % | 14 000 |
| 80 001 à 180 000 | 34 % | 17 200 |
| 180 001 et plus | 38 % | 24 400 |
**Travail à faire** : 1. Le directeur général est-il obligé de faire une déclaration de revenu global pour 2023 ? 2. Calculer l'IR sur le revenu global au titre de l'exercice 2023, ainsi que l'IR à payer.`,
questions:[
{pts:2, q:"1. Le directeur général est-il obligé de faire une déclaration de revenu global pour 2023 ?",
model:`**Non**, en principe. Sont dispensés de la déclaration du revenu global les contribuables qui disposent uniquement de revenus imposés à la source ou à titre libératoire :
- **salaires** versés par un **seul employeur** établi au Maroc, qui opère la retenue à la source ;
- **dividendes** : retenue à la source **libératoire** opérée par la société distributrice ;
- **revenus fonciers** : depuis 2019 ils sont soumis à un **taux libératoire** (10 % / 15 %) et ne s'ajoutent plus au revenu global.
En revanche, il doit **déclarer et verser spontanément l'IR sur ses revenus fonciers** avant la fin février 2024 (déclaration des revenus fonciers), si le locataire ne l'a pas retenu à la source.`,
kp:["Réponse : pas de déclaration du revenu global","Salaires d'un seul employeur avec retenue à la source","Dividendes et revenus fonciers imposés à titre libératoire","Mais obligation de déclarer/verser l'IR foncier avant fin février"]},
{pts:5, q:"2. Calculer l'IR sur le revenu global 2023 ainsi que l'IR à payer.",
chk:[{l:"Revenu net imposable salarial",v:694824.4,u:"DH",tol:5},{l:"IR sur salaires (après charges de famille)",v:238553.27,u:"DH",tol:5},{l:"IR foncier à verser",v:9000,u:"DH"}],
model:`#### Revenus salariaux (seul revenu « global »)
| Élément | Montant |
|---|---|
| Salaire brut imposable | 750 000,00 |
| Frais professionnels : 25 %, **plafonnés à 35 000** | − 35 000,00 |
| CNSS (4,48 % plafonnée à 6 000 DH/mois → 72 000/an) | − 3 225,60 |
| AMO (2,26 % sans plafond) | − 16 950,00 |
| **Revenu net imposable** | **694 824,40** |
IR brut = 694 824,40 × 38 % − 24 400 = 239 633,27
Charges de famille 2023 : 3 personnes × 360 = − 1 080
**IR sur le revenu global (salaires) = ==238 553,27 DH==**, intégralement retenu à la source par CERMED → **rien à payer** à ce titre.
#### Revenus fonciers (taux libératoire)
Base = loyers **encaissés** : 90 000 DH (les 60 000 impayés ne sont pas imposables tant qu'ils ne sont pas encaissés) ; 90 000 < 120 000 → taux de **10 %** → ==9 000 DH== à verser spontanément.
#### Dividendes (retenue libératoire)
Net 50 000 = brut × (1 − 13,75 %) → brut 57 971 ; retenue de 7 971 déjà opérée par la société distributrice. Rien à payer.
**IR à payer par le contribuable : 9 000 DH** (revenus fonciers). Charge fiscale totale 2023 ≈ 238 553 + 9 000 + 7 971 = 255 524 DH.`,
kp:["Frais professionnels plafonnés à 35 000","Cotisations CNSS (plafonnée) et AMO déduites","RNI ≈ 694 824 et IR = RNI × 38 % − 24 400","Charges de famille 3 × 360","Fonciers imposés sur les loyers encaissés (90 000) au taux de 10 % = 9 000","Dividendes : retenue libératoire déjà opérée","IR à payer = 9 000"]}
]},
{title:"Droit des affaires — Questions de cours", pts:20, pages:[395,395], th:["da-cac","da-capital","da-transfo","da-organes","da-fonds"],
ctx:`On vous demande de répondre de manière synthétique et précise aux questions suivantes. **Notation : 4 points par question.**`,
questions:[
{pts:4, q:"Quel est le rôle du commissaire aux comptes dans le cas d'une augmentation de capital d'une société anonyme par compensation de créances du compte courant d'associés ?",
model:`L'augmentation de capital par **compensation** consiste à libérer les actions nouvelles avec des créances **certaines, liquides et exigibles** détenues sur la société (ici les comptes courants d'associés). Le CAC intervient à deux niveaux :
1. **Certification de l'arrêté de compte** : le conseil d'administration (ou le directoire) établit un **arrêté de compte** des créances ; le CAC le **certifie exact**. Ce **certificat du commissaire aux comptes tient lieu de certificat du dépositaire** des fonds (aucun versement en numéraire n'ayant lieu) et constate la libération des actions.
2. **Rapport sur la suppression du droit préférentiel de souscription** : l'augmentation étant **réservée** aux titulaires des créances, l'AGE doit supprimer le DPS au profit des bénéficiaires désignés, sur rapport du conseil d'administration et **rapport du CAC** (avis sur les bases de calcul du prix d'émission, le choix des bénéficiaires et l'incidence sur la situation des actionnaires).
Plus largement, il veille au respect de l'égalité des actionnaires et signale à l'assemblée les irrégularités éventuelles.`,
kp:["Compensation avec des créances certaines, liquides et exigibles","Arrêté de compte établi par le CA et certifié exact par le CAC","Le certificat du CAC remplace le certificat du dépositaire","Rapport du CAC à l'AGE sur la suppression du DPS (augmentation réservée)"]},
{pts:4, q:"Dans quelles conditions et quelle est la procédure à suivre pour transformer une SARL en une société anonyme ?",
model:`#### Conditions
- La SARL doit avoir **établi et fait approuver** par les associés les **bilans de ses deux premiers exercices** (à défaut, un commissaire à la transformation doit se prononcer sur la valeur de l'actif).
- Le capital doit atteindre le **minimum de la SA** (300 000 DH ; 3 000 000 DH en cas d'appel public à l'épargne) et les **capitaux propres** doivent être au moins égaux au capital social.
- La SA doit compter au moins **5 actionnaires** (sauf SA à associé unique si la loi en vigueur le permet).
#### Procédure
1. Désignation d'un ou plusieurs **commissaires à la transformation** (à l'unanimité des associés ou, à défaut, par le président du tribunal) : ils apprécient sous leur responsabilité la **valeur des biens** composant l'actif et les **avantages particuliers**, et attestent que les capitaux propres sont au moins égaux au capital.
2. Dépôt du rapport au siège social à la disposition des associés.
3. Décision des associés en **assemblée extraordinaire**, aux conditions de majorité requises pour la **modification des statuts** de la SARL ; adoption des statuts de SA ; nomination des premiers organes (conseil d'administration ou directoire/conseil de surveillance) et du **commissaire aux comptes**.
4. **Publicité** : journal d'annonces légales, dépôt au greffe et inscription modificative au **registre du commerce**.
#### Effet
La transformation régulière **n'entraîne pas la création d'une personne morale nouvelle** : continuité de la personnalité juridique, des contrats et du patrimoine.`,
kp:["Bilans des deux premiers exercices approuvés","Capital ≥ minimum légal de la SA et capitaux propres ≥ capital ; nombre minimal d'actionnaires","Commissaire à la transformation : évaluation des biens et attestation","Décision en AGE aux conditions de modification des statuts, nomination des organes et du CAC","Publicité et inscription au RC ; pas de nouvelle personne morale"]},
{pts:4, q:"Quelles sont les attributions du Président dans les sociétés par actions simplifiées (SAS) ?",
model:`- **Organe légal obligatoire** : la SAS est représentée à l'égard des tiers par un **président** désigné dans les conditions prévues par les **statuts** (personne physique ou morale, associé ou non).
- **Pouvoirs externes** : il est investi des **pouvoirs les plus étendus** pour agir en toute circonstance au nom de la société, dans la limite de l'objet social. La société est engagée même par les actes ne relevant pas de l'objet social, sauf si elle prouve que le tiers le savait. Les **limitations statutaires** de ses pouvoirs sont **inopposables aux tiers**.
- **Délégation** : les statuts peuvent prévoir qu'une ou plusieurs autres personnes (directeur général, directeur général délégué) exercent les mêmes pouvoirs.
- **Pouvoirs internes** : les statuts organisent librement la direction ; le président assure la gestion courante, convoque et organise les **décisions collectives** des associés (approbation des comptes, modification du capital, fusion, dissolution…), qui restent de leur compétence exclusive.
- **Conventions réglementées** : il présente aux associés un rapport (ou le CAC) sur les conventions conclues entre la société et son président/dirigeants ou associés significatifs.
- **Responsabilité** : il répond civilement et pénalement de sa gestion comme les administrateurs de SA.`,
kp:["Désigné selon les statuts ; représente la société vis-à-vis des tiers","Pouvoirs les plus étendus dans la limite de l'objet ; limitations statutaires inopposables aux tiers","Possibilité de DG / DG délégués prévus par les statuts","Liberté statutaire pour l'organisation interne ; décisions collectives réservées aux associés","Conventions réglementées et responsabilité du président"]},
{pts:4, q:"Dans une SARL, lorsque les parts sociales sont vendues à un tiers, quelle est la procédure à suivre pour l'agrément de la cession des parts sociales ?",
model:`1. **Principe** : les parts ne peuvent être cédées à des **tiers étrangers** à la société qu'avec le **consentement de la majorité des associés représentant au moins les trois quarts du capital** (les statuts peuvent prévoir une majorité plus forte).
2. **Notification** du projet de cession (identité du cessionnaire, nombre de parts, prix) à la **société** et à **chacun des associés** (lettre recommandée ou acte extrajudiciaire).
3. **Décision** : la société doit faire connaître sa décision dans le **délai légal** suivant la dernière notification ; à défaut de réponse, **l'agrément est réputé acquis**.
4. **En cas de refus** : les associés doivent, dans le délai légal, **acquérir ou faire acquérir** les parts à un prix fixé d'un commun accord ou, à défaut, par un **expert** désigné par le président du tribunal ; la société peut aussi, avec l'accord du cédant, **racheter les parts et réduire son capital**. Si aucune solution n'intervient dans le délai, le cédant peut **réaliser la cession initialement prévue**.
5. **Formalités** : la cession est constatée par écrit, rendue **opposable à la société** par signification ou dépôt d'un original au siège, et aux **tiers** après dépôt au greffe (modification des statuts).
> Les cessions entre associés, conjoints, ascendants et descendants sont en principe libres, sauf clause statutaire contraire.`,
kp:["Agrément : majorité des associés représentant au moins 3/4 du capital","Notification du projet à la société et à chaque associé","Silence de la société dans le délai = agrément réputé acquis","Refus : rachat par les associés ou un tiers à dire d'expert, ou rachat par la société avec réduction de capital","Cession libre à défaut de solution dans le délai ; formalités d'opposabilité"]},
{pts:4, q:"Quelles sont les principales règles de fonctionnement d'un contrat de gérance libre d'un fonds de commerce ?",
model:`La gérance libre (location-gérance) est le contrat par lequel le propriétaire du fonds (**loueur**) en concède l'exploitation à un **gérant** qui l'exploite **à ses risques et périls** moyennant une **redevance**.
#### Conditions
- Le loueur doit en principe avoir été **commerçant pendant au moins 2 ans** ou avoir **exploité le fonds pendant 2 ans** (dispense possible par le président du tribunal).
- **Publicité** : le contrat est publié par extrait au Bulletin officiel et dans un journal d'annonces légales dans les **15 jours** de sa conclusion ; mention au registre du commerce.
#### Obligations et statut des parties
- **Gérant** : a la qualité de **commerçant**, s'immatricule au RC, indique sur ses documents sa qualité de gérant libre ; exploite le fonds personnellement et en bon père de famille, maintient la clientèle et l'enseigne, paie la redevance ; il **n'a pas droit au renouvellement du bail** commercial (le bail reste au loueur).
- **Loueur** : garantit la jouissance paisible du fonds ; perd la qualité de commerçant pour ce fonds mais reste propriétaire.
#### Protection des créanciers
- **Solidarité** : jusqu'à la publication du contrat et pendant **6 mois** après, le loueur est **solidairement responsable** avec le gérant des dettes contractées par celui-ci pour l'exploitation du fonds.
- Les dettes du loueur afférentes au fonds peuvent être déclarées **immédiatement exigibles** par le tribunal si la mise en gérance met leur recouvrement en péril.
- À l'expiration du contrat, les dettes du gérant relatives à l'exploitation deviennent **immédiatement exigibles**.`,
kp:["Définition : exploitation aux risques du gérant moyennant redevance","Conditions du loueur (2 ans de commerce/exploitation, dispense possible)","Publicité dans les 15 jours (BO, journal d'annonces légales, RC)","Gérant commerçant, immatriculé, sans droit au renouvellement du bail","Solidarité du loueur jusqu'à 6 mois après publication ; exigibilité des dettes"]}
]}
]});

(function(){
  /* L'exercice MEDCOM (budget de trésorerie) est identique en 2024 et 2025 : on réutilise le corrigé. */
  const src=EXAMS.find(e=>e.id==="gest-2025");
  const med=src?JSON.parse(JSON.stringify(src.sections[1])):null;
  if(med){med.pages=[397,398];}
  EXAMS.push({
  id:"gest-2024", subject:"gest", year:2024, session:"19-20 octobre 2024", title:"Étude de cas de gestion", date:"Dimanche 20 octobre 2024", duration:300, pages:[396,400],
  note:"6 exercices — tables financières et calculatrice non programmable autorisées",
  sections:[
  {title:"Exercice 1 : Choix d'investissement (High Tech Casablanca)", pts:5, pages:[397,397], th:["g-invest"],
  ctx:`L'entreprise High Tech Casablanca envisage la production et la commercialisation d'un nouveau produit. L'investissement en matériels se monte à **200 millions de DH**, amortissable linéairement sur **10 ans**. La durée du projet est estimée à 10 ans également. L'accroissement du **BFR**, dû à l'activité additionnelle, est de **20 millions de DH**. La capacité de production des nouvelles installations est de **100 000 unités par an**. La demande est très forte. En revanche, en raison de la concurrence, le prix de vente reste indéterminé à l'intérieur de la fourchette **1 900 DH – 2 100 DH**. Les coûts variables sont de **1 000 DH** par produit. Les charges fixes décaissables sont estimées à **50 millions de DH**. À l'issue du projet, la valeur de marché du matériel est de **50 millions de DH**, le coût du capital de l'entreprise de **12 %** et le taux d'imposition des bénéfices de **30 %**.
1. Étudiez la faisabilité du projet selon le critère de la VAN.
2. Déterminez le prix du marché à partir duquel le projet d'investissement devient rentable.`,
  questions:[
  {pts:3, q:"1. Étudiez la faisabilité du projet selon le critère de la VAN.",
  chk:[{l:"VAN au prix de 1 900 DH",v:-10.18,u:"M DH",tol:0.15,alt:[-5.35]},{l:"VAN au prix de 2 100 DH",v:68.92,u:"M DH",tol:0.15,alt:[73.75]}],
  model:`Comme le prix est incertain, on calcule la VAN aux bornes (et au centre) de la fourchette. En millions de DH :
| | p = 1 900 | p = 2 000 | p = 2 100 |
|---|---|---|---|
| Chiffre d'affaires (100 000 × p) | 190 | 200 | 210 |
| Coûts variables | − 100 | − 100 | − 100 |
| Charges fixes décaissables | − 50 | − 50 | − 50 |
| EBE | 40 | 50 | 60 |
| Dotation (200 / 10) | − 20 | − 20 | − 20 |
| Résultat avant impôt | 20 | 30 | 40 |
| IS 30 % | − 6 | − 9 | − 12 |
| **CAF** (résultat net + dotation) | **34** | **41** | **48** |
Flux de l'année 10 : récupération du BFR **20** + valeur de cession nette d'impôt **50 × 0,7 = 35** (bien totalement amorti → plus-value imposable).
Facteurs à 12 % : annuité 10 ans = 5,650223 ; 1,12⁻¹⁰ = 0,321973.
VAN = − (200 + 20) + CAF × 5,650223 + 55 × 0,321973
| | p = 1 900 | p = 2 000 | p = 2 100 |
|---|---|---|---|
| **VAN** | ==− 10,18== | **+ 29,37** | ==+ 68,92== |
**Conclusion** : le projet n'est pas rentable si le prix tombe au bas de la fourchette ; il l'est dès que le prix dépasse un seuil proche de 1 926 DH (question 2). Compte tenu d'une demande très forte, le risque porte surtout sur le prix : le projet est faisable si l'entreprise peut obtenir un prix d'au moins ~1 930 DH.
> Sans fiscaliser la valeur résiduelle : VAN = − 5,35 / + 34,20 / + 73,75.`,
  kp:["Investissement initial 220 M (matériel + BFR)","CAF = 0,07 × (p − 1 000) − 29 (34 / 41 / 48 M)","Récupération du BFR et valeur résiduelle nette d'IS en année 10","VAN négative à 1 900 et positive à 2 100","Conclusion nuancée selon le prix"]},
  {pts:2, q:"2. Déterminez le prix du marché à partir duquel le projet devient rentable.",
  chk:[{l:"Prix seuil (VAN = 0)",v:1925.75,u:"DH",tol:2,alt:[1913.54]}],
  model:`VAN = 0 ⇒ CAF × 5,650223 = 220 − 17,7085 ⇒ CAF = 35,802 M
0,07 × (p − 1 000) − 29 = 35,802 ⇒ p − 1 000 = 925,75 ⇒ **p ≈ ==1 925,75 DH==**
Au-delà de ce prix, la VAN est positive. Marge de sécurité par rapport au milieu de fourchette (2 000) : environ 3,7 % seulement.`,
  kp:["Exprimer la VAN en fonction du prix","Résoudre VAN = 0","Prix seuil ≈ 1 926 DH"]}
  ]},
  med||{title:"Exercice 2 : Budget de trésorerie (MEDCOM)",pts:4,questions:[{pts:4,q:"Voir l'épreuve 2025 (même exercice).",model:"Même exercice qu'en 2025."}]},
  {title:"Exercice 3 : Capitalisation annuelle, continue et mensuelle (banques X, Y, Z)", pts:3, pages:[398,398], th:["g-mathfi"],
  ctx:`Les banques X, Y et Z affichent toutes le même taux d'intérêt pour la rémunération des dépôts, soit **9,38 % l'an**.
1. Quelle sera la valeur d'un dépôt de 10 000 au bout de 4 ans à la banque X où la capitalisation est annuelle ?
2. À la banque Y, le taux indiqué est un taux continu. Si l'on considère le même dépôt et la même durée que précédemment, quel est le taux à composition annuelle équivalent à 9,38 % si ce dernier est un taux continu ?
3. La banque Z, où la capitalisation est mensuelle, propose à ses clients un dépôt initial D et des versements mensuels constants de 460 pendant 4 ans. Au terme de cette période, le disponible (capital et intérêts) serait de 40 971,30.
a. Quelle est la valeur du dépôt D, si les versements mensuels sont effectués en début de période ?
b. Quelle part de 40 971,30 correspond à des intérêts ?`,
  questions:[
  {pts:0.5, q:"1. Valeur d'un dépôt de 10 000 au bout de 4 ans à la banque X (capitalisation annuelle).",
  chk:[{l:"Valeur acquise",v:14313.69,u:"",tol:1}],
  model:`C₄ = 10 000 × 1,0938⁴ = ==14 313,69==`,
  kp:["Formule des intérêts composés C₀(1 + i)ⁿ","14 313,69"]},
  {pts:1, q:"2. Taux à composition annuelle équivalent au taux continu de 9,38 % (banque Y).",
  chk:[{l:"Taux annuel équivalent",v:9.834,u:"%",tol:0.01}],
  model:`Avec un taux continu δ, 1 + i = e^δ ⇒ i = e^0,0938 − 1 = ==9,834 %==.
Le même dépôt vaudrait 10 000 × e^(0,0938 × 4) = 10 000 × 1,09834⁴ = 14 552,82 au bout de 4 ans (plus que chez X).`,
  kp:["Relation 1 + i = e^δ","i ≈ 9,834 % ; valeur acquise ≈ 14 552,82"]},
  {pts:1.5, q:"3. Banque Z : a) valeur du dépôt initial D (versements en début de mois) ; b) part des intérêts dans 40 971,30.",
  chk:[{l:"Dépôt initial D",v:10000,u:"",tol:2},{l:"Part des intérêts",v:8891.3,u:"",tol:2}],
  model:`Taux mensuel **équivalent** : (1,0938)^(1/12) − 1 = **0,75 %** (1,0075¹² = 1,0938).
Sur 48 mois : 1,0075⁴⁸ = 1,0938⁴ = 1,431369.
- Valeur acquise des 48 versements en début de période : 460 × [(1,0075⁴⁸ − 1) / 0,0075] × 1,0075 = 460 × 57,5207 × 1,0075 = 26 658,40
- D × 1,431369 = 40 971,30 − 26 658,40 = 14 312,90 ⇒ **D = ==10 000==**
b) Sommes versées : 10 000 + 48 × 460 = 32 080 → **intérêts = 40 971,30 − 32 080 = ==8 891,30==**.
> Avec le taux proportionnel (9,38 % / 12) on trouverait D ≈ 9 699,51 : le résultat « rond » confirme que la banque applique le taux mensuel équivalent.`,
  kp:["Taux mensuel équivalent 0,75 %","Valeur acquise d'une suite de versements en début de période (× 1,0075)","D = 10 000","Intérêts = 40 971,30 − 32 080 = 8 891,30"]}
  ]},
  {title:"Exercice 4 : Ajustement linéaire, prix et coûts (MICRELEC)", pts:3, pages:[399,399], th:["g-stats","g-rentabilite"],
  ctx:`L'entreprise MICRELEC se base sur les ventes réalisées dans différents points de vente pour l'un de ses composants électroniques :
| Points de vente | Prix (P) | Quantités (Q) | Coût (C) |
|---|---|---|---|
| 1 | 10 | 360 | 600 |
| 2 | 8 | 560 | 640 |
| 3 | 9 | 460 | 620 |
| 4 | 7 | 640 | 664 |
| 5 | 5 | 860 | 688 |
| 6 | 6 | 760 | 672 |
| Total | 45 | 3 640 | 3 884 |
| Somme des carrés | 355 | 2 381 600 | 2 519 824 |
P = prix du produit en dirhams ; Q = quantités espérées en vente à ce prix ; C = coût total estimé.
1. Donner une estimation de la fonction de prix P = f(Q) et de la fonction de coûts C = g(Q) par la méthode des moindres carrés, en supposant ces deux fonctions affines. On donne : ΣQP = 25 560 ; ΣQC = 2 386 960. (1 point)
2. On suppose que les prix moyens pratiqués par la concurrence sont en moyenne de 7,50 DH. Indiquer si MICRELEC pourra s'aligner en termes de prix sur la concurrence. (1 point)
3. Déterminer le prix optimal, c'est-à-dire celui qui maximise le bénéfice, en se basant sur les fonctions trouvées en 1. (1 point)`,
  questions:[
  {pts:1, q:"1. Estimer P = f(Q) et C = g(Q) par les moindres carrés.",
  chk:[{l:"Pente de P = f(Q)",v:-0.01004,u:"",tol:0.0001},{l:"Constante de P = f(Q)",v:13.59,u:"",tol:0.02},{l:"Pente de C = g(Q)",v:0.1769,u:"",tol:0.001},{l:"Constante de C = g(Q)",v:540,u:"",tol:0.5}],
  model:`n = 6 ; Q̄ = 3 640 / 6 = 606,67 ; P̄ = 7,5 ; C̄ = 647,33.
V(Q) = 2 381 600 / 6 − 606,67² = 396 933,33 − 368 044,44 = 28 888,89
Cov(Q, P) = 25 560 / 6 − 606,67 × 7,5 = 4 260 − 4 550 = − 290
Cov(Q, C) = 2 386 960 / 6 − 606,67 × 647,33 = 397 826,67 − 392 715,56 = 5 111,11
- a = − 290 / 28 888,89 = − 0,01004 ; b = 7,5 + 0,01004 × 606,67 = 13,59 → **P = − 0,01004 Q + 13,59**
- a' = 5 111,11 / 28 888,89 = 0,1769 ; b' = 647,33 − 0,1769 × 606,67 = 540 → **C = 0,1769 Q + 540**`,
  kp:["Moyennes, variance de Q et covariances","P = − 0,01004 Q + 13,59","C = 0,1769 Q + 540"]},
  {pts:1, q:"2. MICRELEC peut-elle s'aligner sur un prix de 7,50 DH ?",
  model:`À P = 7,50 : Q = (13,59 − 7,50) / 0,01004 ≈ **607 unités** (le point moyen).
Recette = 7,50 × 606,67 = 4 550 ; coût = 0,1769 × 606,67 + 540 = 647,33 ⇒ **bénéfice ≈ 3 903 DH > 0**.
Le coût moyen unitaire (≈ 1,07 DH) est bien inférieur à 7,50 : **oui, MICRELEC peut s'aligner** sur la concurrence en restant bénéficiaire.`,
  kp:["Quantité correspondante ≈ 607","Comparaison recette / coût (bénéfice ≈ 3 903 > 0)","Conclusion : alignement possible"]},
  {pts:1, q:"3. Déterminer le prix optimal (qui maximise le bénéfice).",
  chk:[{l:"Prix optimal",v:6.88,u:"DH",tol:0.02},{l:"Quantité optimale",v:668,u:"",tol:2}],
  model:`B(Q) = P × Q − C = (13,59 − 0,01004 Q) Q − 0,1769 Q − 540
B'(Q) = 13,59 − 0,02008 Q − 0,1769 = 0 ⇒ **Q* ≈ 668** (B'' < 0 : maximum)
**P* = 13,59 − 0,01004 × 668 ≈ ==6,88 DH==** ; bénéfice maximal ≈ 3 941 DH.
(Condition Rm = Cm : la recette marginale 13,59 − 0,02008 Q égale le coût marginal 0,1769.)`,
  kp:["Fonction de bénéfice B(Q)","Dérivée nulle (Rm = Cm) → Q ≈ 668","Prix optimal ≈ 6,88 DH"]}
  ]},
  {title:"Exercice 5 : Moyennes et salaires", pts:3, pages:[400,400], th:["g-stats"],
  ctx:`Dans une entreprise de 360 employés, les cadres gagnent en moyenne 2 000 dirhams et les ouvriers 1 200 dirhams. L'ensemble des employés gagne en moyenne 1 400 dirhams.
1) Quel est le nombre de cadres ? (1 point)
2) Si on augmente tous les ouvriers de 5 % : a) Quelle est la nouvelle moyenne des salaires ? (1 point) b) L'étendue des salaires augmente-t-elle ? Justifiez (0,5 point) c) Le salaire médian augmente-t-il ? Justifiez (0,5 point)`,
  questions:[
  {pts:1, q:"1) Nombre de cadres.",
  chk:[{l:"Nombre de cadres",v:90,u:""}],
  model:`Soit x le nombre de cadres : 2 000 x + 1 200 (360 − x) = 1 400 × 360 ⇒ 800 x = 72 000 ⇒ **x = ==90 cadres==** (et 270 ouvriers).`,
  kp:["Moyenne pondérée","90 cadres, 270 ouvriers"]},
  {pts:2, q:"2) Augmentation de 5 % des ouvriers : a) nouvelle moyenne ; b) l'étendue augmente-t-elle ? c) la médiane augmente-t-elle ?",
  chk:[{l:"Nouvelle moyenne",v:1445,u:"DH"}],
  model:`a) Nouveau salaire moyen des ouvriers : 1 260. Moyenne = (90 × 2 000 + 270 × 1 260) / 360 = (180 000 + 340 200) / 360 = ==1 445 DH== (soit 1 400 + 75 % × 60).
b) **Non** : l'étendue = salaire maximum − salaire minimum. Le plus haut salaire est (vraisemblablement) celui d'un cadre, inchangé ; le plus bas est celui d'un ouvrier, qui augmente de 5 %. L'étendue **diminue** (elle ne pourrait augmenter que si le salaire maximum était celui d'un ouvrier).
c) **Oui** : les ouvriers représentent 270 / 360 = 75 % de l'effectif et occupent le bas de la distribution ; la médiane (entre le 180e et le 181e salaire) est donc un **salaire d'ouvrier**, qui augmente de 5 %.`,
  kp:["Nouvelle moyenne 1 445","Étendue : le max (cadre) est inchangé, le min (ouvrier) augmente → diminue","Médiane : salaire d'ouvrier (75 % de l'effectif) → augmente de 5 %"]}
  ]},
  {title:"Exercice 6 : Variable aléatoire discrète (agence LOCAZUR)", pts:2, pages:[400,400], th:["g-probas"],
  ctx:`La petite agence LOCAZUR loue des voitures à la journée. Elle dispose d'un parc de 16 voitures. Neuf véhicules sont systématiquement loués à des clients réguliers. Loi du nombre de voitures louées par jour X :
| xᵢ | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|---|---|---|---|---|---|---|---|
| P(X = xᵢ) | 0,05 | 0,10 | 0,37 | 0,27 | 0,17 | 0,03 | 0,01 |
1) Probabilité : a) de louer moins de 13 véhicules ; b) de louer au moins 14 véhicules.
2) Déterminer : a) l'espérance ; b) l'écart type du nombre de véhicules loués.
3) La location d'un véhicule rapporte en moyenne 400 DH par jour de marge sur coûts variables. Les frais fixes s'élèvent à 2 750 DH par jour. On appelle B le bénéfice quotidien. a) Exprimer B en fonction de X. b) En déduire le bénéfice quotidien moyen espéré. c) Déterminer l'écart type du bénéfice. d) Quel est le seuil de rentabilité ? Est-il possible que l'agence soit déficitaire ?`,
  questions:[
  {pts:0.5, q:"1) P(X < 13) et P(X ≥ 14).",
  chk:[{l:"P(X < 13)",v:0.52,u:"",tol:0.001},{l:"P(X ≥ 14)",v:0.21,u:"",tol:0.001}],
  model:`a) P(X < 13) = 0,05 + 0,10 + 0,37 = ==0,52==
b) P(X ≥ 14) = 0,17 + 0,03 + 0,01 = ==0,21==`,
  kp:["0,52","0,21"]},
  {pts:0.5, q:"2) Espérance et écart type de X.",
  chk:[{l:"E(X)",v:12.54,u:"",tol:0.005},{l:"σ(X)",v:1.178,u:"",tol:0.003}],
  model:`E(X) = Σ xᵢ pᵢ = 0,5 + 1,1 + 4,44 + 3,51 + 2,38 + 0,45 + 0,16 = ==12,54== véhicules
E(X²) = 5 + 12,1 + 53,28 + 45,63 + 33,32 + 6,75 + 2,56 = 158,64
V(X) = 158,64 − 12,54² = 1,3884 ⇒ σ(X) = ==1,178==`,
  kp:["E(X) = 12,54","V(X) = E(X²) − E(X)² = 1,3884 ; σ ≈ 1,178"]},
  {pts:1, q:"3) Bénéfice quotidien B : expression, moyenne, écart type, seuil de rentabilité et risque de déficit.",
  chk:[{l:"Bénéfice moyen espéré",v:2266,u:"DH"},{l:"Écart type du bénéfice",v:471.32,u:"DH",tol:1}],
  model:`a) **B = 400 X − 2 750**
b) E(B) = 400 × 12,54 − 2 750 = ==2 266 DH== par jour
c) σ(B) = 400 × σ(X) = 400 × 1,178 = ==471,32 DH==
d) Seuil : 400 X = 2 750 ⇒ X = 6,875 → il faut louer au moins **7 véhicules** par jour. Or X ≥ 10 dans tous les cas (9 véhicules sont toujours loués et la loi commence à 10) : **P(B < 0) = 0, l'agence ne peut pas être déficitaire** (bénéfice minimum : 400 × 10 − 2 750 = 1 250 DH).`,
  kp:["B = 400X − 2 750","E(B) = 2 266","σ(B) = 400 σ(X) ≈ 471","Seuil 6,875 → 7 véhicules ; X ≥ 10 donc jamais déficitaire"]}
  ]}
  ]});
})();

EXAMS.push({
id:"tec-2024", subject:"tec", year:2024, session:"19-20 octobre 2024", title:"Techniques d'expression et de communication (culture générale)", date:"Dimanche 20 octobre 2024", duration:120, pages:[401,402],
sections:[
{title:"Texte : « Quelle diversité ? » (Dominique Hoppe)", pts:20, pages:[402,402], th:["tec-dissertation","tec-questions"],
ctx:`**Quelle diversité ?**
Généraliser l'usage de l'anglais dans les organisations internationales permettrait de réaliser de conséquentes économies. L'étude des chiffres relativise cette assertion, qui repose sur une vision partielle et partiale. L'imposition d'une langue unique génère des injustices et des erreurs, alors que la diversité linguistique favorise l'exercice des droits et la vitalité démocratique.
Au sein des organisations internationales, la politique linguistique fait l'objet de débats intenses. Bien que les règles statutaires définissent des langues officielles et des langues de travail (six aux Nations unies, vingt-quatre dans l'Union européenne), un monolinguisme de fait s'impose peu à peu. On évoque, presque sans complexes, une nouvelle langue de communication : l'*English lingua franca* (ELF). Longtemps présentée comme le résultat regrettable mais inévitable de contraintes budgétaires, cette évolution semble aujourd'hui assumée. Les cultures professionnelles des organisations internationales intègrent désormais la domination de l'anglais, et ses défenseurs affirment même qu'il s'est internationalisé : affranchi des pratiques et représentations des locuteurs natifs, il ne constituerait plus une menace pour la diversité linguistique ou l'équité.
Souvent adeptes de la doctrine de la « nouvelle gestion publique », ceux qui défendent l'ELF insistent sur le fait que son usage serait le meilleur moyen d'empêcher une insoutenable explosion des coûts… Les réductions de coûts évoquées pour justifier l'ELF reposent généralement sur les rapports budgétaires des organisations concernées. Celles-ci se réfèrent exclusivement aux coûts primaires directs (traductions, interprétariat) et indirects (frais généraux associés aux services linguistiques) imputés aux institutions elles-mêmes. Sur ces seuls critères, on peut faussement « démontrer » que le monolinguisme est moins cher.
— Dominique Hoppe
**Question** : En vous basant sur le texte, vous expliquerez et développerez « Comment la diversité linguistique favorise l'exercice des droits et la vitalité démocratique ».`,
questions:[
{pts:20, q:"En vous basant sur le texte, expliquez et développez : « Comment la diversité linguistique favorise l'exercice des droits et la vitalité démocratique ».",
model:`#### Introduction
- **Accroche** : dans les organisations internationales, l'anglais s'impose comme *lingua franca* au nom des économies budgétaires.
- **Présentation du texte** : D. Hoppe conteste ce raisonnement : il ne compte que les coûts directs supportés par les institutions et ignore ce que le monolinguisme fait perdre aux citoyens et aux États.
- **Problématique** : en quoi la pluralité des langues est-elle une condition de l'égalité des droits et de la qualité du débat démocratique, et pas un simple coût ?
- **Annonce du plan** : la diversité linguistique garantit d'abord l'accès effectif aux droits (I), elle nourrit ensuite la vie démocratique (II) ; son coût doit enfin être évalué honnêtement (III).
#### I. La diversité linguistique, condition d'un exercice effectif des droits
1. **Le droit de comprendre** : une norme n'est légitime que si ses destinataires peuvent la lire. Les règlements européens s'appliquent directement aux citoyens des 27 États : publiés dans une seule langue, ils deviendraient inaccessibles à la majorité (« nul n'est censé ignorer la loi » suppose une loi intelligible).
2. **L'égalité entre citoyens et entre États** : imposer une langue crée une **rente** au profit des locuteurs natifs (avantage dans les négociations, les recrutements, les appels d'offres) et un coût caché pour les autres (apprentissage, traductions privées, erreurs). Le monolinguisme est une **injustice** au sens du texte.
3. **La sécurité juridique** : les concepts juridiques sont liés à des langues et à des traditions (droit civil / common law) ; travailler dans une langue mal maîtrisée multiplie les **erreurs** d'interprétation que relève l'auteur.
*Transition* : au-delà des droits individuels, c'est la qualité du débat collectif qui est en jeu.
#### II. La diversité linguistique, moteur de la vitalité démocratique
1. **La participation** : élus, syndicats, associations, journalistes doivent pouvoir suivre et contester les décisions ; une langue unique réserve le débat à une élite multilingue et éloigne les citoyens des institutions.
2. **Le pluralisme des idées** : chaque langue porte une manière de penser ; la diversité élargit l'éventail des solutions et évite la « pensée unique » technocratique.
3. **La légitimité et la confiance** : une institution qui parle la langue des citoyens est perçue comme la leur. Exemple marocain : la Constitution de 2011 consacre l'arabe et l'amazighe comme langues officielles et encourage la maîtrise des langues étrangères ; une administration et une justice accessibles dans une langue comprise renforcent la confiance.
*Transition* : reste l'argument économique, central chez les défenseurs de l'ELF.
#### III. Un coût à évaluer honnêtement
1. **Un calcul partiel** : les budgets ne retiennent que les coûts imputés aux institutions ; ils ignorent les coûts reportés sur les États, les entreprises et les citoyens, ainsi que le coût des erreurs et de l'exclusion.
2. **Un coût en réalité modeste** : pour l'Union européenne, la traduction et l'interprétation sont généralement estimées à moins de 1 % du budget, soit quelques euros par citoyen et par an, prix raisonnable de l'égalité démocratique.
3. **Des solutions** : plurilinguisme raisonné (langues de travail + traduction des textes qui engagent les citoyens), intercompréhension entre langues voisines, traduction automatique contrôlée par des professionnels.
#### Conclusion
- **Bilan** : la diversité linguistique conditionne l'égalité devant la règle et la vitalité du débat ; le monolinguisme n'est économique qu'en apparence.
- **Ouverture** : pour un expert-comptable, la question se pose aussi à propos des normes (IFRS rédigées en anglais, traduites et adaptées dans le CGNC).`,
kp:["Introduction : contexte (ELF), présentation de la thèse de l'auteur, problématique, plan annoncé","Exploitation du texte : coûts directs/indirects ne prenant en compte que les institutions (« vision partielle et partiale »)","Droits : accès à la règle dans sa langue, intelligibilité de la loi","Égalité : rente des locuteurs natifs, injustice et discrimination","Sécurité juridique : erreurs de traduction et d'interprétation","Démocratie : participation des citoyens, des élus et de la société civile","Pluralisme des idées et légitimité des institutions (exemple marocain)","Discussion du coût réel et solutions (plurilinguisme raisonné, traduction)","Conclusion avec bilan et ouverture","Qualité de l'expression : plan apparent, transitions, orthographe"]}
]}
]});
