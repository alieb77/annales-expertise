/* Session 2019 (21-22 septembre 2019) */
EXAMS.push({
id:"cpt-2019", subject:"cpt", year:2019, session:"21-22 septembre 2019", title:"Comptabilité générale et analytique", date:"Samedi 21 septembre 2019", duration:300, pages:[286,292],
note:"Comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Dossier 1 : Comptabiliser et évaluer des stocks (PEPS)", pts:5, pages:[287,287], th:["ca-stocks","cg-courant","cg-inventaire"],
ctx:`Stocks au 1er janvier N : matières premières **1 000 kg à 500 DH** le kilo ; produits finis **400 produits** au coût de production unitaire de **900 DH**.
Achats de matières premières de l'année (ordre chronologique) : 100 kg à 550 DH ; 300 kg à 520 DH ; 800 kg à 540 DH.
Ventes de produits finis (ordre chronologique) : 1 000 produits à 920 DH ; 500 produits à 1 000 DH.
Stocks de fin d'année : matières premières (volume et valeur à déterminer) ; **300 produits finis** (valeur à déterminer).
L'entreprise utilise la méthode **PEPS**. Le coût de production a augmenté de **5 %** entre les deux années et il faut **1 kilo de matière première pour un produit fini**. Il n'est pas tenu compte de la TVA.
**Enregistrer les écritures d'achats, de ventes et de variations de stocks pour l'année N.**`,
questions:[
{pts:5, q:"Enregistrer les écritures d'achats, de ventes et de variations de stocks de l'année N.",
chk:[{l:"Stock final de matières premières (valeur)",v:432000,u:"DH"},{l:"Stock final de produits finis (valeur)",v:283500,u:"DH"},{l:"Variation de stock de matières (débit 6124)",v:68000,u:"DH"},{l:"Variation de stock de produits finis (7132)",v:-76500,u:"DH"}],
model:`#### Calcul des stocks finaux
- Production de l'année = ventes + SF − SI = 1 500 + 300 − 400 = **1 400 produits** ⇒ consommation de **1 400 kg** de matière.
- Matières : 1 000 + 1 200 − 1 400 = **800 kg** en stock. En **PEPS**, les sorties épuisent d'abord le stock initial (1 000 kg), puis 100 kg à 550 et 300 kg à 520 ; il reste les **800 kg à 540** ⇒ SF = **432 000**.
- Produits finis : en PEPS, les 300 produits restants sont les derniers fabriqués, au coût de N : 900 × 1,05 = 945 ⇒ SF = **283 500**.
#### Écritures (inventaire intermittent)
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **Au fil de l'année** | **Achats de matières (55 000 + 156 000 + 432 000)** | | |
| 6121 | Achats de matières premières | 643 000 | |
| 4411 | Fournisseurs | | 643 000 |
| **Au fil de l'année** | **Ventes (920 000 + 500 000)** | | |
| 3421 | Clients | 1 420 000 | |
| 7121 | Ventes de biens produits | | 1 420 000 |
| **31/12/N** | **Annulation des stocks initiaux** | | |
| 6124 | Variation des stocks de matières premières | 500 000 | |
| 3121 | Matières premières | | 500 000 |
| 7132 | Variation des stocks de produits finis | 360 000 | |
| 3151 | Produits finis | | 360 000 |
| **31/12/N** | **Constatation des stocks finaux** | | |
| 3121 | Matières premières | 432 000 | |
| 6124 | Variation des stocks de matières premières | | 432 000 |
| 3151 | Produits finis | 283 500 | |
| 7132 | Variation des stocks de produits finis | | 283 500 |
Soldes : 6124 débiteur de **68 000** (achats consommés = 643 000 + 68 000 = 711 000) ; 7132 débiteur de **76 500** (variation négative de la production stockée).`,
kp:["Production = 1 400 produits et consommation de 1 400 kg","Stock de matières : 800 kg à 540 (PEPS) = 432 000","Stock de produits finis : 300 × 945 = 283 500","Écritures d'achats (6121) et de ventes (7121)","Annulation des SI et constatation des SF (6124, 7132)","Soldes des variations : + 68 000 et − 76 500"]}
]},
{title:"CG — Dossier 2 : Amortissements dérogatoires", pts:5, pages:[288,288], th:["cg-amort"],
ctx:`Le **10 septembre N**, une entreprise acquiert une machine pour **350 000 DH HT**, mise en service le **16 octobre**. Durée de vie **5 ans** ; l'amortissement **linéaire** est économiquement justifié, mais l'administration fiscale autorise le **dégressif (coefficient 2)**.
Le **1er octobre N**, l'entreprise acquiert un **logiciel** pour **80 000 DH HT**, mis en service immédiatement. Durée de vie **3 ans**, linéaire économiquement justifié ; l'administration fiscale autorise son amortissement **sur un an**.
L'entreprise souhaite utiliser tous les avantages fiscaux qui lui sont offerts.
a. Établir les tableaux d'amortissement des deux immobilisations en distinguant les amortissements dérogatoires. b. Enregistrer au journal les écritures pour les amortissements de N, N+1 et N+2. c. L'amortissement traduit-il la véritable dépréciation d'un bien ? Sinon, comment y remédier ?`,
questions:[
{pts:2.5, q:"a. Tableaux d'amortissement et amortissements dérogatoires.",
chk:[{l:"Machine — dotation dérogatoire de N",v:32083.33,u:"DH",tol:250},{l:"Machine — dotation dérogatoire de N+1",v:51333.33,u:"DH",tol:2},{l:"Logiciel — dotation dérogatoire de N",v:13333.33,u:"DH",tol:2}],
model:`**Hypothèses** : l'amortissement économique (linéaire) court à partir de la **mise en service** ; l'amortissement fiscal dégressif court à partir du **premier jour du mois d'acquisition**.
#### Machine (linéaire 20 % / dégressif 40 %)
| Exercice | Linéaire (économique) | Dégressif (fiscal) | Dotation dérogatoire | Reprise |
|---|---|---|---|---|
| N | 350 000 × 20 % × 2,5/12 = 14 583,33 | 350 000 × 40 % × 4/12 = 46 666,67 | 32 083,34 | |
| N+1 | 70 000 | 303 333,33 × 40 % = 121 333,33 | 51 333,33 | |
| N+2 | 70 000 | 182 000 × 40 % = 72 800 | 2 800 | |
| N+3 | 70 000 | 109 200 × 40 % = 43 680 | | 26 320 |
| N+4 | 70 000 | linéaire sur 20 mois : 65 520 × 12/20 = 39 312 | | 30 688 |
| N+5 | 55 416,67 | 26 208 | | 29 208,67 |
| **Total** | **350 000** | **350 000** | **86 216,67** | **86 216,67** |
Passage au linéaire fiscal au début de N+4 (12/20 = 60 % > 40 %).
#### Logiciel (linéaire 3 ans / fiscal 1 an)
| Exercice | Linéaire (économique) | Fiscal | Dotation dérogatoire | Reprise |
|---|---|---|---|---|
| N | 80 000 / 3 × 3/12 = 6 666,67 | 80 000 × 3/12 = 20 000 | 13 333,33 | |
| N+1 | 26 666,67 | 60 000 | 33 333,33 | |
| N+2 | 26 666,67 | 0 | | 26 666,67 |
| N+3 | 20 000 | 0 | | 20 000 |
> Si l'on fait partir le linéaire du 1er octobre (3 mois) : machine 17 500 en N, dérogatoire 29 166,67.`,
kp:["Distinction amortissement économique (linéaire, depuis la mise en service) / fiscal (dégressif, depuis le mois d'acquisition)","Taux dégressif 40 % et passage au linéaire en N+4","Dérogatoires de la machine : dotations N, N+1, N+2 puis reprises","Logiciel : fiscal sur 1 an → dotations dérogatoires puis reprises","Totaux des dotations = totaux des reprises"]},
{pts:1.5, q:"b. Écritures des amortissements de N, N+1 et N+2.",
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **31/12/N** | | | |
| 6193 | DEA des immobilisations corporelles (machine) | 14 583,33 | |
| 2833 | Amortissements du matériel | | 14 583,33 |
| 6192 | DEA des immobilisations incorporelles (logiciel) | 6 666,67 | |
| 2822 | Amortissements des brevets, marques, droits et valeurs similaires | | 6 666,67 |
| 6594 | Dotations non courantes aux amortissements dérogatoires (32 083,34 + 13 333,33) | 45 416,67 | |
| 1351 | Provisions pour amortissements dérogatoires | | 45 416,67 |
| **31/12/N+1** | | | |
| 6193 / 2833 | Machine | 70 000,00 | 70 000,00 |
| 6192 / 2822 | Logiciel | 26 666,67 | 26 666,67 |
| 6594 / 1351 | Dérogatoires (51 333,33 + 33 333,33) | 84 666,66 | 84 666,66 |
| **31/12/N+2** | | | |
| 6193 / 2833 | Machine | 70 000,00 | 70 000,00 |
| 6192 / 2822 | Logiciel | 26 666,67 | 26 666,67 |
| 6594 / 1351 | Dérogatoire de la machine | 2 800,00 | 2 800,00 |
| 1351 / 7594 | Reprise de dérogatoire du logiciel (reprises non courantes sur amortissements dérogatoires) | 26 666,67 | 26 666,67 |
(On peut aussi compenser en N+2 : reprise nette de 23 866,67, mais la présentation brute est préférable.)`,
kp:["Amortissements économiques en 6193/2833 et 6192/2822","Dérogatoires en 6594/1351 (non courant)","Reprise en 7594 en N+2 pour le logiciel","Montants corrects pour N, N+1, N+2"]},
{pts:1, q:"c. L'amortissement traduit-il la véritable dépréciation d'un bien ? Sinon, comment y remédier ?",
model:`**Pas toujours.** L'amortissement est une **répartition conventionnelle** du coût du bien sur sa durée probable d'utilisation, selon un plan fixé à l'avance ; il ne mesure pas la valeur de marché. De plus, des règles **fiscales** (dégressif, durées courtes) peuvent s'en écarter.
**Remèdes** :
- isoler la part fiscale dans les **amortissements dérogatoires** (capitaux propres assimilés), afin que l'amortissement comptable reste économique ;
- **réviser le plan** d'amortissement si la durée d'utilisation ou le rythme de consommation change ;
- constater une **provision pour dépréciation** (ou un amortissement exceptionnel) lorsque la valeur actuelle devient inférieure à la VNC (obsolescence, sinistre, baisse de marché).`,
kp:["Amortissement = répartition conventionnelle, pas une évaluation","Influence des règles fiscales","Remèdes : dérogatoires, révision du plan, provision pour dépréciation / amortissement exceptionnel"]}
]},
{title:"CG — Dossier 3 : Emprunt obligataire (CONC19)", pts:6, pages:[288,289], th:["cg-emprunt"],
ctx:`La société CONC19 a émis le 01/01/N un emprunt obligataire : **3 000 obligations** de nominal **2 000 DH** au taux de **10 %** ; prix d'émission **1 980 DH** ; durée **5 ans**. Toutes les obligations ont été souscrites. Les commissions prélevées par la banque sont de **1,5 %**. La société décide d'amortir les frais relatifs à cet emprunt **au prorata des intérêts servis**.
Présenter le tableau d'amortissement de l'emprunt obligataire ; les tableaux d'amortissement des frais relatifs à cet emprunt ; les écritures au 01/01/N, au 31/12/N et au 31/12/N+4.`,
questions:[
{pts:2, q:"Tableau d'amortissement de l'emprunt et des frais (prime de remboursement et frais d'émission).",
chk:[{l:"Prime de remboursement totale",v:60000,u:"DH"},{l:"Frais d'émission (commission 1,5 % du prix d'émission)",v:89100,u:"DH",alt:[90000]},{l:"Dotation de N pour la prime",v:20000,u:"DH"}],
model:`**Hypothèse** (mode non précisé) : remboursement **au pair** par **séries égales** de 600 obligations par an (amortissement constant de 1 200 000), ce qui justifie l'étalement des frais au prorata des intérêts.
- Nominal 6 000 000 ; fonds reçus 3 000 × 1 980 = 5 940 000 ⇒ **prime de remboursement 60 000**.
- Commission bancaire : 1,5 % × 5 940 000 = **89 100** (HT ; TVA récupérable 10 % = 8 910).
| Année | Capital début | Intérêts 10 % | Amortissement | Annuité | Clé (intérêts / 1 800 000) | Prime (60 000) | Frais (89 100) |
|---|---|---|---|---|---|---|---|
| N | 6 000 000 | 600 000 | 1 200 000 | 1 800 000 | 1/3 | 20 000 | 29 700 |
| N+1 | 4 800 000 | 480 000 | 1 200 000 | 1 680 000 | 4/15 | 16 000 | 23 760 |
| N+2 | 3 600 000 | 360 000 | 1 200 000 | 1 560 000 | 1/5 | 12 000 | 17 820 |
| N+3 | 2 400 000 | 240 000 | 1 200 000 | 1 440 000 | 2/15 | 8 000 | 11 880 |
| N+4 | 1 200 000 | 120 000 | 1 200 000 | 1 320 000 | 1/15 | 4 000 | 5 940 |
| **Total** | | **1 800 000** | **6 000 000** | | 1 | **60 000** | **89 100** |
> Si l'emprunt était remboursable *in fine*, les intérêts seraient constants et l'étalement « au prorata des intérêts » reviendrait à un étalement linéaire (12 000 et 17 820 par an).`,
kp:["Prime de remboursement 60 000 (2 000 − 1 980)","Frais d'émission (1,5 %) = 89 100","Tableau de l'emprunt (hypothèse explicite, intérêts décroissants)","Répartition de la prime et des frais au prorata des intérêts (1/3, 4/15, 1/5, 2/15, 1/15)"]},
{pts:4, q:"Écritures au 01/01/N, au 31/12/N et au 31/12/N+4.",
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **01/01/N** | **Émission** | | |
| 3488 | Divers débiteurs (obligataires) | 5 940 000 | |
| 2130 | Primes de remboursement des obligations | 60 000 | |
| 1410 | Emprunts obligataires | | 6 000 000 |
| **01/01/N** | **Encaissement net des commissions** | | |
| 5141 | Banques | 5 841 990 | |
| 6147 | Services bancaires | 89 100 | |
| 34552 | État — TVA récupérable sur charges | 8 910 | |
| 3488 | Divers débiteurs (obligataires) | | 5 940 000 |
| **01/01/N (ou à l'inventaire)** | **Transfert des frais d'émission à l'actif** | | |
| 2125 | Frais d'émission des emprunts | 89 100 | |
| 7397 | Transferts de charges financières | | 89 100 |
| **31/12/N** | **Intérêts et remboursement de la 1re série** | | |
| 6311 | Intérêts des emprunts et dettes | 600 000 | |
| 1410 | Emprunts obligataires | 1 200 000 | |
| 5141 | Banques | | 1 800 000 |
| **31/12/N** | **Amortissement de la prime et des frais** | | |
| 6391 | Dotations aux amortissements des primes de remboursement des obligations | 20 000 | |
| 2813 | Amortissements des primes de remboursement des obligations | | 20 000 |
| 6191 | DEA de l'immobilisation en non-valeur | 29 700 | |
| 2812 | Amortissements des charges à répartir | | 29 700 |
| **31/12/N+4** | **Dernière annuité** | | |
| 6311 | Intérêts des emprunts et dettes | 120 000 | |
| 1410 | Emprunts obligataires | 1 200 000 | |
| 5141 | Banques | | 1 320 000 |
| 6391 / 2813 | Dernière dotation sur la prime | 4 000 | 4 000 |
| 6191 / 2812 | Dernière dotation sur les frais | 5 940 | 5 940 |
| **31/12/N+4** | **Sortie des non-valeurs totalement amorties** | | |
| 2813 | Amortissements des primes de remboursement | 60 000 | |
| 2130 | Primes de remboursement des obligations | | 60 000 |
| 2812 | Amortissements des charges à répartir | 89 100 | |
| 2125 | Frais d'émission des emprunts | | 89 100 |
(La retenue à la source sur les intérêts versés aux obligataires, si elle s'applique, est portée en 4452 « État, impôts, taxes et assimilés ».)`,
kp:["Émission : 3488 + 2130 / 1410","Encaissement net des commissions (TVA récupérable) et transfert des frais en 2125","Intérêts 6311 et remboursement 1410","Dotations : 6391 / 2813 (prime) et 6191 / 2812 (frais)","Solde des non-valeurs totalement amorties en N+4"]}
]},
{title:"CG — Dossier 4 : Principes comptables", pts:4, pages:[289,289], th:["cg-eval","cg-erreurs"],
ctx:`Les situations décrites ci-dessous constituent-elles une entorse à l'un des principes comptables préconisés par le CGNC ? Si oui, lequel ?
1) Une détérioration des articles en stock non prise en compte dans la valorisation des stocks à la clôture.
2) Un chiffre d'affaires comptabilisé au titre de l'exercice N concernant une prestation chevauchant les exercices N et N+1.
3) Des titres de participation ont été comptabilisés en tant que titres de placement.
4) Au 30/11/N, la société X a décidé d'arrêter l'une de ses activités. Au 31/12/N, le matériel de production lié à cette activité est toujours évalué à la valeur comptable nette.
5) Suite à un contrôle fiscal, la société a reçu la première lettre de notification au 30/11/N, contenant des redressements ayant un impact direct sur le résultat de l'exercice clos au 31/12/N ; aucune provision n'a été constituée.`,
questions:[
{pts:4, q:"Identifier, pour chaque situation, le principe comptable enfreint.",
model:`| Situation | Entorse ? | Principe enfreint | Correction |
|---|---|---|---|
| 1. Détérioration du stock ignorée | Oui | **Prudence** (et image fidèle) : les pertes probables doivent être constatées | Provision pour dépréciation des stocks |
| 2. Totalité du CA d'une prestation à cheval sur N et N+1 en N | Oui | **Spécialisation des exercices** (indépendance) | Produits constatés d'avance pour la part de N+1 (ou CA à l'avancement) |
| 3. Titres de participation classés en TVP | Oui | **Clarté** (classement correct, pas de compensation) et image fidèle | Reclassement en 2510 (immobilisations financières) |
| 4. Matériel d'une activité arrêtée gardé à la VNC | Oui | **Continuité d'exploitation** (pour cette activité, les biens s'évaluent à leur valeur de réalisation) et **prudence** | Provision / amortissement exceptionnel ramenant à la valeur probable de cession |
| 5. Redressement fiscal notifié non provisionné | Oui | **Prudence** (risque né et connu avant la clôture) | Provision pour risques (impôts) ou charge à payer |`,
kp:["1 : prudence","2 : spécialisation des exercices","3 : clarté (classement des postes)","4 : continuité d'exploitation (valeur liquidative de l'activité arrêtée) / prudence","5 : prudence (provision pour risque fiscal)"]}
]},
{title:"CA — Dossier 1 : Résultat de la comptabilité générale et de la comptabilité analytique", pts:4, pages:[290,290], th:["ca-concordance"],
ctx:`Une entreprise fabrique un produit unique. Dépenses de février : MP 3 000 kg à 100 DH/kg ; MO 250 h à 50 DH/h. Autres charges : la comptabilité générale donne, outre la MOD et les achats, **210 000 DH** de charges **dont 10 000 DH de provisions non incorporables** (« provisions incorporables » dans l'énoncé). Il faut tenir compte de **6 000 DH de charges supplétives**. La production est de **4 000 unités vendues à 150 DH** l'unité.
1. Déterminer le résultat de la comptabilité générale. 2. Déterminer le résultat de la comptabilité analytique. 3. Retrouver le résultat de la comptabilité générale à partir du résultat analytique.`,
questions:[
{pts:4, q:"Résultats de la comptabilité générale et analytique ; concordance.",
chk:[{l:"Résultat de la comptabilité générale",v:77500,u:"DH"},{l:"Résultat analytique",v:81500,u:"DH",alt:[71500]}],
model:`1. **Comptabilité générale** : produits 4 000 × 150 = 600 000 ; charges = 300 000 (MP) + 12 500 (MO) + 210 000 = 522 500 ⇒ **résultat = 77 500**.
2. **Comptabilité analytique** : charges incorporées = 522 500 − 10 000 (charges non incorporables) + 6 000 (supplétives) = 518 500 ⇒ **résultat analytique = 81 500**.
3. **Concordance** :
| | Montant |
|---|---|
| Résultat analytique | 81 500 |
| + Charges supplétives (non enregistrées en CG) | + 6 000 |
| − Charges non incorporables (enregistrées en CG seulement) | − 10 000 |
| **= Résultat de la comptabilité générale** | **77 500** |
> Si les 10 000 de provisions sont bien **incorporables** (lecture littérale), le résultat analytique est 600 000 − 528 500 = 71 500, et 71 500 + 6 000 = 77 500.`,
kp:["Résultat CG 77 500","Charges incorporées = charges CG − non incorporables + supplétives","Résultat analytique 81 500 (ou 71 500 selon l'interprétation)","Concordance : RA + supplétives − non incorporables = RCG"]}
]},
{title:"CA — Dossier 2 : CONCOURS18 (réajustements, coûts d'achat, de production et de revient)", pts:10, pages:[290,291], th:["ca-couts","ca-concordance"],
ctx:`La société CONCOURS18 fabrique un appareil **A** à partir de deux composants : **5 unités C1 et 2 unités C2** par appareil.
| Éléments | Montant | ADM (1) | FIN (2) | APPR (3) | FAB (4) | DIST (5) |
|---|---|---|---|---|---|---|
| Répartition primaire préalable | 668 800 | 72 000 | 85 000 | 135 440 | 210 240 | 166 120 |
| ADM | | | 10 % | 30 % | 50 % | 10 % |
| FIN | | | | 20 % | 50 % | 30 % |
| Unité d'œuvre | | | | 100 DH de composants achetés | 100 unités de composants consommés | nombre de produits vendus |
En septembre : **charges supplétives** de 20 000 DH affectant ADM 20 %, APPR 20 %, FAB 50 %, DIST 10 % ; **charges non incorporables** de 10 000 DH comprises dans les totaux primaires préalables à raison de 50 % FIN, 30 % PROD (fabrication) et 20 % DIST ; achats de composants C1 (32 000 unités à 20 DH) et C2 (18 000 unités à 12 DH) ; fabrication de **6 000 appareils A** (9 000 h de MOD à 10 DH/h) ; vente de **5 000 appareils** avec un bénéfice de **17,70 % du coût de revient**.
Travail : tableau de répartition après réajustements ; coûts d'achat de C1 et C2 ; coût de production de A ; coût de revient de A ; prix de vente de A et résultat analytique des ventes du mois.`,
questions:[
{pts:4, q:"Tableau de répartition des charges indirectes après réajustements.",
chk:[{l:"Total secondaire APPR",v:179760,u:"DH"},{l:"Total secondaire FAB",v:299040,u:"DH"},{l:"Total secondaire DIST",v:200000,u:"DH"},{l:"Coût de l'UO de FAB",v:712,u:"DH"}],
model:`| | ADM | FIN | APPR | FAB | DIST |
|---|---|---|---|---|---|
| Répartition primaire préalable | 72 000 | 85 000 | 135 440 | 210 240 | 166 120 |
| + Charges supplétives (20 000) | 4 000 | | 4 000 | 10 000 | 2 000 |
| − Charges non incorporables (10 000) | | − 5 000 | | − 3 000 | − 2 000 |
| **Répartition primaire ajustée** | **76 000** | **80 000** | **139 440** | **217 240** | **166 120** |
| ADM | − 76 000 | 7 600 | 22 800 | 38 000 | 7 600 |
| FIN | | − 87 600 | 17 520 | 43 800 | 26 280 |
| **Totaux secondaires** | 0 | 0 | **179 760** | **299 040** | **200 000** |
| Nombre d'UO | | | 8 560 (856 000 DH achetés / 100) | 420 (42 000 composants / 100) | 5 000 |
| **Coût de l'UO** | | | **21** | **712** | **40** |`,
kp:["Ajout des supplétives et retrait des non incorporables avant répartition secondaire","Répartition en cascade ADM puis FIN","Nombre d'UO : 8 560 ; 420 ; 5 000","Coûts d'UO 21 ; 712 ; 40"]},
{pts:6, q:"Coûts d'achat de C1 et C2, coût de production et coût de revient de A, prix de vente et résultat analytique.",
chk:[{l:"Coût d'achat unitaire de C1",v:24.2,u:"DH",tol:0.005},{l:"Coût d'achat unitaire de C2",v:14.52,u:"DH",tol:0.005},{l:"Coût de production unitaire de A",v:214.88,u:"DH",tol:0.01},{l:"Coût de revient unitaire de A",v:254.88,u:"DH",tol:0.01},{l:"Prix de vente de A",v:300,u:"DH",tol:0.1},{l:"Résultat analytique",v:225600,u:"DH",tol:40}],
model:`#### Coûts d'achat (APPR : 21 DH par 100 DH achetés, soit 21 %)
| | C1 (32 000) | C2 (18 000) |
|---|---|---|
| Prix d'achat | 640 000 | 216 000 |
| Centre APPR (21 %) | 134 400 | 45 360 |
| **Coût d'achat** | **774 400** | **261 360** |
| **Coût unitaire** | **24,20** | **14,52** |
#### Coût de production de 6 000 A (consommation : 30 000 C1 et 12 000 C2)
| Élément | Montant |
|---|---|
| C1 : 30 000 × 24,20 | 726 000 |
| C2 : 12 000 × 14,52 | 174 240 |
| MOD : 9 000 h × 10 | 90 000 |
| Centre FAB : 420 UO × 712 | 299 040 |
| **Coût de production** | **1 289 280** |
| **Coût unitaire** | **214,88** |
#### Coût de revient des 5 000 A vendus
5 000 × 214,88 + 5 000 × 40 = 1 074 400 + 200 000 = **1 274 400** ⇒ **254,88 par appareil**.
#### Prix de vente et résultat
Prix = 254,88 × 1,177 = 299,99 ≈ **300 DH** ; CA = 1 500 000 ; **résultat analytique = 1 500 000 − 1 274 400 = 225 600** (≈ 17,70 % de 1 274 400 = 225 569).
Stocks fin de mois : 2 000 C1 (48 400), 6 000 C2 (87 120) et 1 000 A (214 880).`,
kp:["Coûts d'achat C1 24,20 et C2 14,52","Consommations de composants pour 6 000 A (30 000 et 12 000)","Coût de production 1 289 280, soit 214,88","Coût de revient unitaire 254,88","Prix ≈ 300 et résultat ≈ 225 600"]}
]},
{title:"CA — Dossier 3 : Coût complet, imputation rationnelle et coût standard (A et B)", pts:6, pages:[291,292], th:["ca-ecarts","ca-ir"],
ctx:`Coûts standards unitaires :
| | A | B | Prix unitaire |
|---|---|---|---|
| MP | 2 kg | 3 kg | 24 |
| MOD | 1 h | 0,5 h | 102 |
| Atelier | 0,1 h | 0,3 h | 270 |
Frais fixes de l'atelier : **372 000 DH par mois**. Activité normale : **4 000 A et 9 100 B**.
En février, production : **3 800 A et 9 100 B**. Consommations : 35 000 kg de MP pour 861 000 DH ; 8 300 h de MOD pour 871 500 DH ; 3 200 h machines pour 852 000 DH dont 375 000 DH de frais fixes.
Calculer : 1) le coût complet de production ; 2) le coût d'imputation rationnelle ; 3) le coût standard et l'écart global.`,
questions:[
{pts:2, q:"1) Coût complet réel de production ; 2) coût en imputation rationnelle.",
chk:[{l:"Coût complet réel",v:2584500,u:"DH"},{l:"Coefficient d'imputation rationnelle (heures machines)",v:1.0224,u:"",tol:0.001},{l:"Coût en imputation rationnelle",v:2592886.58,u:"DH",tol:30}],
model:`1) **Coût complet réel** = 861 000 + 871 500 + 852 000 = **2 584 500 DH** (pour 3 800 A et 9 100 B).
2) **Imputation rationnelle** : activité normale de l'atelier = 4 000 × 0,1 + 9 100 × 0,3 = **3 130 h machines** ; activité réelle = 3 200 h ⇒ coefficient = 3 200 / 3 130 = **1,0224** (suractivité).
Charges fixes imputées = 375 000 × 1,0224 = 383 386,58 ⇒ **boni de suractivité de 8 386,58**.
Coût IR = 861 000 + 871 500 + (852 000 − 375 000) + 383 386,58 = **2 592 886,58 DH**.
> En mesurant l'activité par la production en heures standards (3 800 × 0,1 + 9 100 × 0,3 = 3 110 h), le coefficient serait 0,9936 (légère sous-activité) : la mesure de l'activité doit être précisée.`,
kp:["Coût réel 2 584 500","Activité normale 3 130 h machines","Coefficient 3 200 / 3 130 ≈ 1,022","Charges fixes imputées 383 387 et boni ≈ 8 387","Coût IR ≈ 2 592 887"]},
{pts:4, q:"3) Coût standard de la production réelle et écart global (décomposé par élément).",
chk:[{l:"Coût standard unitaire de A",v:177,u:"DH"},{l:"Coût standard unitaire de B",v:204,u:"DH"},{l:"Coût standard de la production réelle",v:2529000,u:"DH"},{l:"Écart global (+ = défavorable)",v:55500,u:"DH"}],
model:`Coûts standards unitaires : **A** = 2 × 24 + 1 × 102 + 0,1 × 270 = **177** ; **B** = 3 × 24 + 0,5 × 102 + 0,3 × 270 = **204**.
Coût standard de la production réelle = 3 800 × 177 + 9 100 × 204 = 672 600 + 1 856 400 = **2 529 000**.
| Élément | Réel | Standard (production réelle) | Écart |
|---|---|---|---|
| MP | 861 000 (35 000 kg à 24,60) | 34 900 kg × 24 = 837 600 | + 23 400 (D) |
| MOD | 871 500 (8 300 h à 105) | 8 350 h × 102 = 851 700 | + 19 800 (D) |
| Atelier | 852 000 (3 200 h) | 3 110 h × 270 = 839 700 | + 12 300 (D) |
| **Total** | **2 584 500** | **2 529 000** | **+ 55 500 (D)** |
Analyse rapide : MP — quantité (35 000 − 34 900) × 24 = + 2 400, prix (24,60 − 24) × 35 000 = + 21 000 ; MOD — temps (8 300 − 8 350) × 102 = − 5 100 (F), taux (105 − 102) × 8 300 = + 24 900 ; atelier — rendement (3 200 − 3 110) × 270 = + 24 300 (D), compensé en partie par l'écart sur budget et d'activité (− 12 000).`,
kp:["Coûts standards 177 et 204","Coût standard 2 529 000","Standards adaptés à la production réelle (34 900 kg, 8 350 h, 3 110 h)","Écart global + 55 500 défavorable et répartition par élément"]}
]}
]});

EXAMS.push({
id:"droit-2019", subject:"droit", year:2019, session:"21-22 septembre 2019", title:"Droit des affaires et droit fiscal", date:"Samedi 21 septembre 2019", duration:180, pages:[293,297],
note:"Droit fiscal /20 (IS 8, TVA 8, IR 4) et droit des affaires /20 (5 points par question retenus)",
sections:[
{title:"Droit fiscal — Cas IS : société de transport (prévisionnel 2019)", pts:8, pages:[294,294], th:["df-is"],
ctx:`Dans le cadre de la préparation du résultat prévisionnel 2019, calculer l'IS dû au titre de 2019 ainsi que les acomptes de 2020 :
| Activité | Transport routier de marchandises au Maroc |
|---|---|
| Date de création | 31/05/2000 |
| Résultat comptable prévisionnel 2019 | (900 000,00) |
| Déficit fiscal de 2018 | (60 000,00) |
| Cotisation minimale payée en 2018 | 75 000,00 |
| CA TTC prévisionnel | 11 240 400,00 |
Le résultat comptable prévisionnel tient compte des opérations suivantes :
1) Provision pour dépréciation des créances clients inscrites au compte « Divers clients » ; ce compte n'est pas analysé depuis plusieurs années : 268 400.
2) Provision pour dépréciation de la créance du client AGRO d'un montant TTC de 228 000 ; le recours judiciaire sera introduit en mars 2020.
3) Provision pour dépréciation des titres de participation détenus dans la société ALFA (filiale à 55 %) : coût d'acquisition 750 000 ; la valorisation financière de cette filiale est estimée à 1 200 000.
4) Provision pour risque de change (écart de conversion actif) : 66 000.
5) Provision pour dépréciation des avances accordées à la filiale ALFA : 250 000.
6) Provision pour risques et charges destinée à couvrir les licenciements qui seront opérés en 2020 : 344 000.
7) Provision destinée à couvrir le crédit de TVA structurel dont dispose la société : 864 000.
8) Provision destinée à couvrir le risque de réclamation par les clients au titre des opérations de transport réalisées en 2019 : 164 000.
9) Provision destinée à couvrir les contentieux en cours chez la filiale ALFA (recours introduits par les fournisseurs de la société ALFA) : 170 000.
10) Provision destinée à couvrir la baisse du cours des titres et valeurs de placement : 5 000 titres, coût de revient unitaire 100, cours moyen 95.
11) La société compte acheter en leasing une voiture de fonction pour le directeur commercial : prix TTC 650 000 ; redevance mensuelle 12 000 ; durée 60 mois ; date du contrat 01/10/2019.`,
questions:[
{pts:6, q:"Déterminer le résultat fiscal 2019 (réintégrations et justifications).",
chk:[{l:"Total des réintégrations",v:2105900,u:"DH"},{l:"Résultat fiscal 2019",v:1205900,u:"DH"},{l:"Base imposable après déficit 2018",v:1145900,u:"DH"}],
model:`| N° | Élément | Traitement | Réintégration |
|---|---|---|---|
| 1 | Provision globale sur « divers clients » non analysés | Créances non individualisées, pas de recours : non déductible | 268 400 |
| 2 | Provision AGRO 228 000 TTC | Recours dans les 12 mois de la clôture (mars 2020) : déductible, mais sur le **HT** (transport : TVA 14 %) : 228 000 / 1,14 = 200 000 | 28 000 |
| 3 | Titres de participation ALFA | Quote-part de la valeur : 55 % × 1 200 000 = 660 000 < 750 000 ⇒ dépréciation justifiée de 90 000 : déductible | 0 |
| 4 | Provision pour perte de change (ECA) | Perte latente certaine dans son principe : déductible | 0 |
| 5 | Avances à la filiale ALFA | Filiale valorisée positivement, aucune perte probable (et avance à une filiale) : non déductible | 250 000 |
| 6 | Licenciements prévus en 2020 | Charge future, pas engagée à la clôture : non déductible | 344 000 |
| 7 | Crédit de TVA structurel | Créance sur l'État (imputable / remboursable), pas une perte : non déductible | 864 000 |
| 8 | Risque général de réclamations clients | Risque non individualisé : non déductible | 164 000 |
| 9 | Contentieux de la filiale ALFA | Risque d'une autre personne morale : non déductible | 170 000 |
| 10 | Dépréciation des TVP : 5 000 × (100 − 95) = 25 000 | Moins-value latente justifiée : déductible | 0 |
| 11 | Leasing de la voiture de fonction (3 redevances en 2019) | Part correspondant à l'amortissement au-delà de 300 000 TTC : (650 000 − 300 000) × 20 % × 3/12 | 17 500 |
| | **Total** | | **2 105 900** |
Résultat fiscal = − 900 000 + 2 105 900 = **==1 205 900==** ; après imputation du déficit 2018 : **==1 145 900==**.`,
kp:["Provision globale « divers clients » réintégrée","AGRO : déductible sur le HT (TVA 14 %) → réintégration 28 000","Titres ALFA : dépréciation justifiée (55 % × 1,2 M = 660 000)","Écart de conversion actif et TVP (25 000) déductibles","Réintégrations : avances filiale, licenciements futurs, crédit de TVA, risque général, contentieux de la filiale","Leasing : quote-part au-delà de 300 000 TTC (17 500)","Résultat fiscal 1 205 900 puis 1 145 900 après déficit"]},
{pts:2, q:"Calculer l'IS 2019, le reliquat et les acomptes de 2020.",
chk:[{l:"IS 2019",v:197729,u:"DH"},{l:"Cotisation minimale 2019",v:73950,u:"DH"},{l:"Reliquat d'IS 2019",v:122729,u:"DH"},{l:"Acompte 2020",v:49432.25,u:"DH",tol:1}],
model:`- **IS 2019** (barème progressif : 10 % jusqu'à 300 000 ; 17,5 % de 300 001 à 1 000 000 ; 31 % au-delà) : 30 000 + 122 500 + (1 145 900 − 1 000 000) × 31 % = **197 729 DH**.
- **CM 2019** : CA HT = 11 240 400 / 1,14 = 9 860 000 ; × 0,75 % = **73 950** < IS ⇒ impôt dû **197 729**.
- La CM de 2018 n'est **plus imputable** (CM définitive depuis 2016).
- Acomptes versés en 2019 (sur l'impôt de 2018 = CM 75 000) : 4 × 18 750 = 75 000 ⇒ **reliquat = 122 729**, à verser avant le 31/03/2020.
- **Acomptes 2020** : 197 729 × 25 % = **49 432,25** chacun.`,
kp:["Barème progressif 2019 (10 % / 17,5 % / 31 %)","IS = 197 729","CM 0,75 % du CA HT (TVA 14 %) = 73 950","CM 2018 non imputable ; acomptes 2019 = 75 000 → reliquat 122 729","Acomptes 2020 = 49 432,25"]}
]},
{title:"Droit fiscal — Cas TVA : prorata de déduction (TAUTIMA)", pts:8, pages:[295,295], th:["df-tva"],
ctx:`L'entreprise TAUTIMA a réalisé les opérations suivantes (HT) :
**Produits d'exploitation** : ventes de produits finis au Maroc 5 000 000 ; ventes de produits finis en Italie 1 500 000 ; ventes de produits finis en Belgique 1 000 000 ; locations d'immeubles nus 500 000 ; subvention d'exploitation 500 000 ; vente de déchets provenant de ses ateliers 900 000 ; vente de déchets ne provenant pas de ses ateliers 1 900 000 ; livraison à soi-même d'immobilisations 400 000 ; livraison à soi-même d'autres biens et services 200 000.
**Produits financiers** : dividendes 300 000. **Produits exceptionnels** : cessions d'immobilisations 600 000 ; subvention d'équipement 400 000.
1. Quelles sont les règles fiscales régissant le prorata de déduction (définition, calcul, déclaration, régularisations…) ? 2. Déterminer le prorata applicable à TAUTIMA. 3. Calculer la TVA déductible relative aux acquisitions d'immobilisations de 1 200 000 DH TTC.`,
questions:[
{pts:3, q:"1. Règles du prorata de déduction.",
model:`- **Champ** : les assujettis qui réalisent à la fois des opérations **taxables** (ou exonérées avec droit à déduction) et des opérations **exonérées sans droit à déduction** ou **hors champ** ne déduisent la TVA d'amont qu'à proportion d'un **prorata** (assujettis partiels).
- **Calcul** (art. 104 CGI) :
  - **Numérateur** : chiffre d'affaires taxable **TTC** + chiffre d'affaires exonéré ou en suspension **avec droit à déduction** (exportations…) ;
  - **Dénominateur** : numérateur + chiffre d'affaires exonéré **sans droit à déduction** + chiffre d'affaires **hors champ** de la TVA ;
  - sont exclus les éléments qui ne constituent pas un chiffre d'affaires (cessions d'immobilisations, subventions d'équipement, livraisons à soi-même, produits non liés à l'activité).
- **Application** : en cours d'année, on utilise le **prorata de l'année précédente** (provisoire) ; il est **déclaré** dans la déclaration de **mars** (ou du 1er trimestre).
- **Régularisation** : en fin d'année, calcul du **prorata définitif** ; si l'écart avec le prorata provisoire dépasse **5 %** (pour les immobilisations), on régularise : reversement (prorata en baisse) ou déduction complémentaire (en hausse). Les immobilisations font aussi l'objet d'une régularisation en cas de **variation** du prorata sur 5 ans et en cas de cession avant 5 ans.
- Les dépenses **affectées exclusivement** à des opérations taxables (ou non taxables) peuvent être déduites en totalité (ou pas du tout) par **affectation** directe.`,
kp:["Assujettis partiels : coexistence d'opérations taxables et non taxables","Numérateur (taxable TTC + exonéré avec droit) / dénominateur (+ exonéré sans droit + hors champ)","Exclusions (cessions d'immobilisations, subventions d'équipement, LASM…)","Prorata provisoire = celui de N-1, déclaré en mars","Prorata définitif et régularisation si écart > 5 %"]},
{pts:3, q:"2. Prorata applicable à TAUTIMA.",
chk:[{l:"Prorata de déduction",v:76.76,u:"%",tol:0.6}],
model:`| Opération | Traitement | Numérateur | Dénominateur |
|---|---|---|---|
| Ventes au Maroc 5 000 000 | Taxable 20 % : TTC | 6 000 000 | 6 000 000 |
| Exportations Italie et Belgique 2 500 000 | Exonérées avec droit | 2 500 000 | 2 500 000 |
| Locations d'immeubles nus 500 000 | Hors champ | | 500 000 |
| Subvention d'exploitation 500 000 | Hors champ, liée à l'activité | | 500 000 |
| Déchets provenant des ateliers 900 000 | Taxable 20 % : TTC | 1 080 000 | 1 080 000 |
| Déchets ne provenant pas des ateliers 1 900 000 | Opération hors champ / exonérée (récupération) | | 1 900 000 |
| Livraisons à soi-même (400 000 et 200 000) | Exclues | | |
| Dividendes 300 000 | Exclus (produits financiers non liés à l'activité) | | |
| Cessions d'immobilisations 600 000 | Exclues | | |
| Subvention d'équipement 400 000 | Exclue | | |
| **Total** | | **9 580 000** | **12 480 000** |
**Prorata = 9 580 000 / 12 480 000 = ==76,76 %==** (≈ 77 %).
> Le traitement des déchets « ne provenant pas des ateliers », des dividendes et de la subvention d'exploitation dépend de leur lien avec l'activité : la réponse doit justifier chaque choix.`,
kp:["Ventes locales et déchets d'ateliers au numérateur TTC","Exportations au numérateur (exonération avec droit)","Locations nues, subvention d'exploitation, déchets achetés au dénominateur","Exclusions : LASM, cessions, subvention d'équipement, dividendes","Prorata ≈ 76,8 %"]},
{pts:2, q:"3. TVA déductible sur les acquisitions d'immobilisations (1 200 000 TTC).",
chk:[{l:"TVA déductible",v:153525.64,u:"DH",tol:1300}],
model:`TVA d'amont = 1 200 000 × 20/120 = 200 000.
TVA déductible = 200 000 × 76,76 % = **≈ 153 526 DH** (153 846 avec un prorata arrondi à 77 %).
La différence (≈ 46 474) est une charge incorporée au coût des immobilisations (non récupérable) ; elle fera l'objet de régularisations si le prorata varie de plus de 5 % au cours des 5 années suivantes.`,
kp:["TVA d'amont 200 000","× prorata ≈ 153 526","Part non déductible incorporée au coût / régularisations ultérieures"]}
]},
{title:"Droit fiscal — Cas IR : éléments imposables ou exonérés", pts:4, pages:[296,296], th:["df-ir"],
ctx:`Indiquez si chaque élément de rémunération est **imposable** ou **exonéré** de l'IR.`,
questions:[
{pts:0.5, q:"Indemnité de représentation de 2 000 DH par mois accordée à un responsable informatique (salaire de base 25 000 DH).", o:["Imposable","Exonéré"], a:0,
model:"L'exonération de l'indemnité de représentation (dans la limite de 10 % du salaire de base) est réservée aux **dirigeants** (directeur général, directeur, secrétaire général…) chargés de fonctions de représentation. Un responsable informatique n'en bénéficie pas : **imposable** (même si 2 000 < 10 % × 25 000)."},
{pts:0.5, q:"Indemnité d'éloignement de 600 DH par mois accordée à un responsable technique travaillant dans une zone lointaine.", o:["Imposable","Exonéré"], a:0,
model:"Elle ne rembourse pas des frais engagés dans l'exercice de l'emploi : c'est un **complément de salaire**, **imposable** (contrairement à l'indemnité de transport ou de déplacement justifiée)."},
{pts:0.5, q:"Indemnité de transport de 500 DH par mois accordée à un technicien travaillant en zone urbaine.", o:["Imposable","Exonéré"], a:1,
model:"Exonérée dans la limite de **500 DH par mois** en périmètre urbain (750 DH hors périmètre urbain) : **exonérée**."},
{pts:0.5, q:"Indemnité de déplacement forfaitaire de 4 000 DH accordée à un directeur commercial (salaire de base 20 000 DH).", o:["Imposable","Exonéré"], a:[1,0],
model:"Selon l'art. 57-1° du CGI, les indemnités destinées à couvrir des frais engagés dans l'exercice de la fonction sont exonérées **dans la mesure où elles sont justifiées**, « qu'elles soient remboursées sur états ou attribuées forfaitairement ». **Exonérée** si elle correspond à des déplacements réels (ordres de mission) ; à défaut de justification, **imposable**. Les deux réponses justifiées sont acceptées."},
{pts:0.5, q:"Indemnité kilométrique de 5 DH par kilomètre accordée à un responsable commercial pour couvrir des frais professionnels.", o:["Imposable","Exonéré"], a:1,
model:"Indemnité destinée à couvrir des frais professionnels réels (kilométrage parcouru pour l'entreprise) : **exonérée** dans la mesure où elle est justifiée et raisonnable (l'excédent sur un barème normal serait imposable)."},
{pts:0.5, q:"Prime de qualification de 800 DH par mois accordée à un chef d'atelier.", o:["Imposable","Exonéré"], a:0,
model:"Rémunère la qualification du salarié : élément du salaire, **imposable**."},
{pts:0.5, q:"Prime de mariage de 2 000 DH accordée à un jeune salarié (salaire de base 3 000 DH).", o:["Imposable","Exonéré"], a:1,
model:"Gratification sociale à caractère exceptionnel : **exonérée** (les gratifications sociales — naissance, mariage, décès… — sont exonérées dans la limite prévue par le CGI, 5 000 DH par an depuis 2016)."},
{pts:0.5, q:"Prime de pèlerinage à La Mecque de 18 000 DH accordée à un salarié proche de la retraite, couvrant uniquement le billet d'avion.", o:["Imposable","Exonéré"], a:[1,0],
model:"La doctrine administrative admet l'exonération de la prise en charge des **frais de pèlerinage** (une fois, limitée au coût du voyage) ; si l'on applique le plafond des gratifications sociales (5 000 DH/an), l'excédent est imposable. Les deux réponses justifiées sont acceptées — à vérifier selon la législation en vigueur."}
]},
{title:"Droit des affaires — Questions", pts:20, pages:[297,297], th:["da-cac","da-transfo","da-difficultes","da-contrats"],
questions:[
{pts:5, q:"1. Quelles sont les obligations d'un commissaire aux comptes dans le cadre de la mission de certification des comptes ?",
model:`- **Certifier** que les états de synthèse sont **réguliers et sincères** et donnent une **image fidèle** du résultat, de la situation financière et du patrimoine (rapport général à l'AGO) ; opinion sans réserve, avec réserves, refus de certifier ou impossibilité.
- **Vérifier** les valeurs et documents comptables, la conformité de la comptabilité aux règles en vigueur, la **sincérité** et la concordance avec les états de synthèse des informations du **rapport de gestion** et des documents adressés aux actionnaires.
- Établir un **rapport spécial** sur les **conventions réglementées**.
- Veiller à l'**égalité** entre actionnaires.
- Signaler à la plus prochaine assemblée les **irrégularités et inexactitudes** relevées ; **révéler au procureur du Roi** les faits délictueux dont il a connaissance.
- Mettre en œuvre la **procédure d'alerte** en cas de faits compromettant la continuité de l'exploitation.
- Respecter le **secret professionnel**, l'**indépendance** et les incompatibilités ; appliquer les **normes professionnelles** de l'Ordre des experts-comptables (diligences, dossier de travail).
- **Responsabilité** civile pour fautes et négligences, et pénale (informations mensongères, non-révélation).`,
kp:["Certification de la régularité, de la sincérité et de l'image fidèle (rapport général)","Vérifications spécifiques (rapport de gestion, documents aux actionnaires)","Rapport spécial sur les conventions réglementées","Signalement des irrégularités et révélation des faits délictueux","Procédure d'alerte","Indépendance, secret professionnel, normes et responsabilité"]},
{pts:5, q:"2. Quelles sont les conditions de transformation d'une SARL en SA ?",
model:`- La SARL doit avoir **établi et fait approuver les bilans de ses deux premiers exercices**.
- Ses **capitaux propres** doivent être **au moins égaux au capital** et le capital doit atteindre le **minimum légal** de la SA (300 000 DH ; 3 000 000 DH en cas d'appel public à l'épargne) ; nombre d'actionnaires conforme à la SA.
- **Rapport d'un commissaire à la transformation** (désigné à l'unanimité des associés ou par le président du tribunal) sur la valeur des biens composant l'actif et les avantages particuliers, attestant que l'actif net est au moins égal au capital.
- **Décision** des associés aux conditions de **modification des statuts** (majorité des 3/4 du capital) ; adoption des statuts de SA, nomination des organes (conseil d'administration ou directoire et conseil de surveillance) et d'un **commissaire aux comptes**.
- **Publicité** : journal d'annonces légales, dépôt au greffe, inscription modificative au registre du commerce.
- **Effet** : pas de création d'une personne morale nouvelle (continuité des contrats, du patrimoine, du numéro de RC).`,
kp:["Deux premiers bilans approuvés","Capitaux propres ≥ capital et minimum légal de la SA","Commissaire à la transformation","Décision aux conditions de modification des statuts ; nomination des organes et du CAC","Publicité ; continuité de la personne morale"]},
{pts:5, q:"3. Quel est le rôle de l'expert-comptable dans le traitement des difficultés des entreprises ?",
model:`L'expert-comptable (loi 15-89 et livre V du Code de commerce) intervient à plusieurs niveaux :
- **Prévention** : par sa mission comptable et de conseil, il détecte les **signaux de difficultés** (baisse de la CAF, tensions de trésorerie, capitaux propres < 1/4 du capital) et alerte le dirigeant ; il élabore **tableaux de bord, budgets, plans de trésorerie**.
- En tant que **commissaire aux comptes**, il déclenche la **procédure d'alerte**.
- **Accompagnement des procédures amiables** : il prépare les documents demandés par le **président du tribunal** (situation financière, prévisions), assiste le dirigeant dans la **conciliation** et la négociation avec les créanciers, peut être désigné **mandataire spécial**, **conciliateur** ou **expert**.
- **Procédures judiciaires** (sauvegarde, redressement) : établissement du **bilan économique et social**, du **plan de continuation ou de cession**, du **plan de financement** ; il peut être désigné **syndic** ou expert par le tribunal ; il évalue l'entreprise en cas de cession.
- **Après la procédure** : suivi de l'exécution du plan et des tableaux de bord.
Il est tenu au secret professionnel et à l'indépendance lorsqu'il est mandaté par la justice.`,
kp:["Détection précoce des difficultés et conseil au dirigeant","Procédure d'alerte en tant que CAC","Assistance en prévention externe (président du tribunal, conciliation, mandataire spécial)","Rôle dans les procédures judiciaires (bilan économique et social, plans, expertise, syndic)","Déontologie (secret, indépendance)"]},
{pts:5, q:"4. Le contrôle du GIE par un commissaire aux comptes est-il obligatoire ? Justifiez votre réponse.",
model:`**En principe, non.** Selon la loi 13-97 relative aux groupements d'intérêt économique, le **contrat de groupement** organise librement le contrôle de la gestion et le contrôle des états de synthèse.
**Exception — oui** lorsque le GIE **émet des obligations** (ce que la loi permet s'il est composé exclusivement de sociétés pouvant elles-mêmes en émettre) : le contrôle de la gestion est alors exercé par une ou plusieurs personnes physiques désignées par l'assemblée, et le **contrôle des états de synthèse** doit obligatoirement être confié à un ou plusieurs **commissaires aux comptes** désignés par l'assemblée pour 3 exercices.
**Justification** : le GIE n'a pas de capital obligatoire et ses membres répondent **indéfiniment et solidairement** de ses dettes, ce qui protège les tiers ; le législateur ne rend donc le CAC obligatoire que lorsque le GIE fait appel à des investisseurs (obligataires), dont il faut protéger l'information.`,
kp:["Principe : contrôle organisé par le contrat (pas de CAC obligatoire)","Exception : émission d'obligations → CAC obligatoire","Justification : responsabilité indéfinie et solidaire des membres / protection des obligataires","Référence à la loi 13-97"]}
]}
]});

(function(){
  const src=EXAMS.find(e=>e.id==="gest-2024");
  const ht=src?JSON.parse(JSON.stringify(src.sections[0].questions)):[];
  if(ht.length){ht[0].pts=2; ht[1].pts=1;}
  EXAMS.push({
  id:"gest-2019", subject:"gest", year:2019, session:"21-22 septembre 2019", title:"Étude de cas de gestion", date:"Dimanche 22 septembre 2019", duration:300, pages:[298,302],
  note:"6 exercices — documents non autorisés, calculatrice autorisée",
  sections:[
  {title:"Exercice 1 : VAN (High Tech Casablanca) et emprunt indivis", pts:5, pages:[299,299], th:["g-invest","g-mathfi"],
  ctx:`**Exercice 1.1** : l'entreprise High Tech Casablanca envisage un investissement en matériels de **200 millions de DH**, amortissable linéairement sur **10 ans** (durée du projet : 10 ans). Accroissement du BFR : **20 millions**. Capacité : **100 000 unités par an**, demande très forte ; prix de vente indéterminé dans la fourchette **[1 900 ; 2 100] DH** ; coûts variables **1 000 DH** par produit ; charges fixes décaissables **50 millions**. Valeur de marché du matériel en fin de projet : **50 millions** ; coût du capital **12 %** ; IS **30 %**. 1. Étudiez la faisabilité du projet selon la VAN. 2. Déterminez le prix à partir duquel le projet devient rentable.
**Exercice 1.2** : un emprunt indivis de **1 million de DH**, taux **7 %**, échéance **6 ans**. Construisez le tableau d'amortissement par **annuités constantes**.`,
  questions:[...ht,
  {pts:2, q:"Exercice 1.2 : tableau d'amortissement de l'emprunt (1 000 000, 7 %, 6 ans, annuités constantes).",
  chk:[{l:"Annuité constante",v:209795.8,u:"DH",tol:1}],
  model:`a = 1 000 000 × 0,07 / (1 − 1,07⁻⁶) = **209 795,80 DH**
| Année | Capital début | Intérêts 7 % | Amortissement | Annuité | Capital fin |
|---|---|---|---|---|---|
| 1 | 1 000 000,00 | 70 000,00 | 139 795,80 | 209 795,80 | 860 204,20 |
| 2 | 860 204,20 | 60 214,29 | 149 581,51 | 209 795,80 | 710 622,69 |
| 3 | 710 622,69 | 49 743,59 | 160 052,21 | 209 795,80 | 550 570,48 |
| 4 | 550 570,48 | 38 539,93 | 171 255,87 | 209 795,80 | 379 314,62 |
| 5 | 379 314,62 | 26 552,02 | 183 243,78 | 209 795,80 | 196 070,84 |
| 6 | 196 070,84 | 13 724,96 | 196 070,84 | 209 795,80 | 0 |`,
  kp:["Formule de l'annuité constante","a ≈ 209 795,80","Tableau complet, amortissements en progression de 7 %, solde nul"]}
  ]},
  {title:"Exercice 2 : Coût réel, coût préétabli et écarts (Jouet en bois)", pts:4, pages:[300,300], th:["ca-ecarts","ca-couts"],
  ctx:`L'entreprise « Jouet en bois » fabrique un produit unique à partir de panneaux de bois. Cinq centres : Entretien, Gestion du personnel, Approvisionnement, Coupage et Finition.
| | Entretien | Gestion du personnel | Approvisionnement | Coupage | Finition |
|---|---|---|---|---|---|
| Répartition primaire | 50 000 | 88 000 | 15 000 | 150 000 | 352 000 |
| Centre Entretien | | 20 % | 10 % | 20 % | 50 % |
| Section gestion du personnel | 10 % | | 5 % | 35 % | 50 % |
| Nature de l'UO | | | nombre de panneaux achetés | nombre de panneaux coupés | heure de MOD |
Janvier : stock fin décembre 50 panneaux évalués 24 000 DH ; 200 panneaux achetés début janvier à 500 DH l'un ; sorties au CMUP. Production du mois : **10 000 pièces « p »** ; utilisation de **197 panneaux** ; MOD de l'atelier finition : **1 080 heures à 30 DH**.
1. Achever le tableau de répartition. 2. Présenter le tableau de comparaison entre le coût réel et le coût préétabli, sachant que les prévisions ont été faites sur une activité normale de **9 500 pièces** avec les standards : pour 50 pièces, 1 panneau et 5 heures de MOD ; coût d'achat d'un panneau 597 DH ; heure de MOD 30 DH ; budget du centre coupage 186 200 DH dont 66 500 DH de charges variables ; budget du centre finition 408 500 DH dont 142 500 DH de charges fixes. 3. Calculer et analyser les écarts sur matières premières, sur les charges du centre coupage et de l'atelier finition.`,
  questions:[
  {pts:1, q:"1. Tableau de répartition des charges indirectes.",
  chk:[{l:"Total du centre Entretien après prestations réciproques",v:60000,u:"DH"},{l:"Coût de l'UO Coupage",v:1000,u:"DH"},{l:"Coût de l'UO Finition",v:400,u:"DH"}],
  model:`Prestations réciproques : E = 50 000 + 0,10 G et G = 88 000 + 0,20 E ⇒ 0,98 E = 58 800 ⇒ **E = 60 000 ; G = 100 000**.
| | Entretien | Gestion du personnel | Approvisionnement | Coupage | Finition |
|---|---|---|---|---|---|
| Répartition primaire | 50 000 | 88 000 | 15 000 | 150 000 | 352 000 |
| Entretien | − 60 000 | 12 000 | 6 000 | 12 000 | 30 000 |
| Gestion du personnel | 10 000 | − 100 000 | 5 000 | 35 000 | 50 000 |
| **Totaux secondaires** | 0 | 0 | **26 000** | **197 000** | **432 000** |
| Nombre d'UO | | | 200 | 197 | 1 080 |
| **Coût de l'UO** | | | **130** | **1 000** | **400** |`,
  kp:["Prestations réciproques résolues (60 000 et 100 000)","Totaux 26 000 ; 197 000 ; 432 000","Coûts d'UO 130 ; 1 000 ; 400"]},
  {pts:1.5, q:"2. Tableau comparatif coût réel / coût préétabli de 10 000 pièces.",
  chk:[{l:"CMUP du panneau",v:600,u:"DH"},{l:"Coût réel total",v:779600,u:"DH"},{l:"Coût préétabli de la production réelle",v:775400,u:"DH"}],
  model:`Coût d'achat des 200 panneaux = 100 000 + 26 000 = 126 000 ; CMUP = (24 000 + 126 000) / 250 = **600 DH**.
Standards : coupage = 186 200 / 190 panneaux (9 500 / 50) = **980 DH** par panneau (variable 350 ; fixe 630) ; finition = 408 500 / 950 h = **430 DH/h** (variable 280 ; fixe 150).
| Élément | Réel : Q | P | Montant | Préétabli : Q | P | Montant | Écart |
|---|---|---|---|---|---|---|---|
| Panneaux | 197 | 600 | 118 200 | 200 | 597 | 119 400 | − 1 200 (F) |
| MOD | 1 080 | 30 | 32 400 | 1 000 | 30 | 30 000 | + 2 400 (D) |
| Coupage | 197 | 1 000 | 197 000 | 200 | 980 | 196 000 | + 1 000 (D) |
| Finition | 1 080 | 400 | 432 000 | 1 000 | 430 | 430 000 | + 2 000 (D) |
| **Total** | | | **779 600** | | | **775 400** | **+ 4 200 (D)** |`,
  kp:["CMUP 600","Standards adaptés à 10 000 pièces (200 panneaux, 1 000 h)","Coûts standards des centres (980 par panneau ; 430 par heure)","Totaux 779 600 et 775 400 ; écart + 4 200"]},
  {pts:1.5, q:"3. Analyse des écarts (matières, coupage, finition).",
  chk:[{l:"Écart sur quantité de panneaux",v:-1791,u:"DH"},{l:"Coupage — écart sur budget",v:8350,u:"DH"},{l:"Finition — écart de rendement",v:34400,u:"DH"}],
  model:`**Matières** : quantité (197 − 200) × 597 = **− 1 791 (F)** ; prix (600 − 597) × 197 = **+ 591 (D)**.
**Coupage** (activité réelle 197 panneaux ; budget flexible = 197 × 350 + 119 700 = 188 650) :
- écart sur budget = 197 000 − 188 650 = **+ 8 350 (D)** ;
- écart d'activité = 188 650 − 197 × 980 = **− 4 410 (F)** (suractivité : 197 au lieu de 190) ;
- écart de rendement = (197 − 200) × 980 = **− 2 940 (F)**. Total + 1 000.
**Finition** (activité réelle 1 080 h ; budget flexible = 1 080 × 280 + 142 500 = 444 900) :
- écart sur budget = 432 000 − 444 900 = **− 12 900 (F)** ;
- écart d'activité = 444 900 − 1 080 × 430 = **− 19 500 (F)** ;
- écart de rendement = (1 080 − 1 000) × 430 = **+ 34 400 (D)**. Total + 2 000.
**Analyse** : bonne utilisation de la matière (3 panneaux économisés) malgré un prix d'achat un peu plus élevé ; en finition, la **productivité** est mauvaise (80 h de trop, + 8 %), ce qui pèse aussi sur l'écart de MOD (+ 2 400) ; les dépenses du coupage dépassent le budget.`,
  kp:["Matières : quantité − 1 791 et prix + 591","Coupage : budget + 8 350, activité − 4 410, rendement − 2 940","Finition : budget − 12 900, activité − 19 500, rendement + 34 400","Analyse (productivité de la finition)"]}
  ]},
  {title:"Exercice 3 : Taux d'intérêt d'un crédit et échéance moyenne", pts:3, pages:[301,301], th:["g-mathfi"],
  ctx:`**3.1** Pour acheter à crédit un appareil électroménager coûtant **1 700 DH**, on peut s'adresser à deux magasins : le premier propose **12 mensualités de 152 DH** ; le second, un règlement unique de **1 960 DH** à la fin de l'année. 1) Déterminer les taux d'intérêt pratiqués par les deux magasins. 2) Quel magasin propose le meilleur mode de paiement ?
**3.2** Le 1er mars 1995, vous achetez un fonds de commerce pour **400 000 DH** ; le vendeur demande : 70 000 DH immédiatement ; 180 000 DH dans 120 jours ; le reste dans 5 mois. 1) Vous préféreriez payer le montant global en une seule fois : à quelle date régler les 400 000 DH pour que les deux propositions soient équivalentes ? 2) Vous préférez payer en 3 versements égaux de 100 000 DH : quelle sera l'échéance du 3e effet si le 1er est payable immédiatement et le second dans 2 mois ? (Taux d'escompte : 10 %.)`,
  questions:[
  {pts:1.5, q:"3.1 Taux des deux magasins et meilleur choix.",
  chk:[{l:"Taux mensuel du magasin 1",v:1.1,u:"%",tol:0.01},{l:"Taux annuel du magasin 2",v:15.29,u:"%",tol:0.02}],
  model:`**Magasin 1** : 1 700 = 152 × [1 − (1 + i)⁻¹²] / i ⇒ (1 − (1 + i)⁻¹²) / i = 11,1842 ⇒ par interpolation (tables) **i = 1,1 % par mois**, soit un taux annuel équivalent de 1,011¹² − 1 = **14,03 %** (13,2 % en taux proportionnel).
**Magasin 2** : 1 960 = 1 700 (1 + r) ⇒ **r = 15,29 %** par an.
**Conclusion** : le **magasin 1** est le moins cher (14,03 % < 15,29 %), et il permet d'étaler les paiements.`,
  kp:["Équation de valeur actuelle des 12 mensualités","i = 1,1 % par mois (≈ 14 % l'an)","Magasin 2 : 15,29 %","Choix du magasin 1"]},
  {pts:1.5, q:"3.2 Échéance de paiement unique ; échéance du 3e effet.",
  chk:[{l:"Échéance du paiement unique (jours après le 1er mars)",v:110.25,u:"jours",tol:1.5}],
  model:`1) **Échéance moyenne** (la somme des nominaux est égale à 400 000) : x = (0 × 70 000 + 120 × 180 000 + 150 × 150 000) / 400 000 = **110,25 jours** ⇒ vers le **19-20 juin 1995**.
Vérification par l'escompte commercial à 10 % : valeur actuelle de l'échéancier = 70 000 + 180 000 (1 − 0,1 × 120/360) + 150 000 (1 − 0,1 × 150/360) = 70 000 + 174 000 + 143 750 = **387 750** ; 400 000 (1 − 0,1 × x/360) = 387 750 ⇒ x = 110,25 jours.
2) **Trois effets de 100 000** (total 300 000) ne peuvent pas être équivalents à une dette dont la valeur actuelle est de 387 750 : la question est **incohérente** telle qu'elle est posée. Avec trois effets **égaux de 400 000 / 3 = 133 333,33** : 133 333,33 + 133 333,33 (1 − 60/3 600) + 133 333,33 (1 − y/3 600) = 387 750 ⇒ **y ≈ 271 jours**, soit fin novembre 1995.`,
  kp:["Échéance moyenne = moyenne des échéances pondérée par les nominaux","110,25 jours ≈ 19-20 juin","Vérification par l'escompte commercial (387 750)","Repérer l'incohérence des 3 × 100 000 et proposer une résolution"]}
  ]},
  {title:"Exercice 4 : Gestion des stocks — modèle de Wilson (BOUCHENAG)", pts:4, pages:[301,302], th:["g-stocks"],
  ctx:`La société BOUCHENAG vend le produit S50 : demande annuelle **500 unités** ; coût de lancement d'une commande **625 DH** ; valeur d'une unité **5 000 DH**. Coût de détention : magasinage **100 DH par unité et par an**, assurance **4 %** de la valeur en stock, coût des fonds immobilisés **14 %** de la valeur en stock.
1. Sans rupture, calculer la quantité économique et le coût total de stockage correspondant. 2. Si l'on ne peut commander que par dizaines d'unités, nouvelle quantité optimale et hausse du coût total ? 3. Si la demande baisse de 36 %, variation en % de la quantité économique et du coût total (par rapport au 1). 4. Si l'on garde la quantité du 1 malgré la baisse, variation en % du coût total par rapport à l'optimum du 3.`,
  questions:[
  {pts:4, q:"Quantité économique, coût total et analyses de sensibilité.",
  chk:[{l:"Quantité économique (Q*)",v:25,u:"unités"},{l:"Coût total de stockage à l'optimum",v:25000,u:"DH"},{l:"Hausse du coût en commandant par dizaines",v:416.67,u:"DH",tol:0.5},{l:"Coût total après baisse de la demande (optimum)",v:20000,u:"DH"},{l:"Hausse du coût en gardant Q = 25 (en %)",v:2.5,u:"%",tol:0.01}],
  model:`Coût de possession unitaire annuel : 100 + (4 % + 14 %) × 5 000 = **1 000 DH** (sur le stock moyen Q/2).
1) Q* = √(2 × 500 × 625 / 1 000) = √625 = **25 unités** ; coût total = (500/25) × 625 + (25/2) × 1 000 = 12 500 + 12 500 = **25 000 DH** (hors prix d'achat).
2) Par dizaines : Q = 20 → 15 625 + 10 000 = 25 625 ; Q = 30 → 10 416,67 + 15 000 = **25 416,67** ⇒ on commande **30 unités** ; hausse de **416,67 DH** (+ 1,67 %).
3) D = 320 : Q* = √(2 × 320 × 625 / 1 000) = **20** (− 20 %) ; coût = 2 × (320/20) × 625 = **20 000** (− 20 %). (Q* et le coût varient comme √D : √0,64 = 0,8.)
4) Q = 25 avec D = 320 : (320/25) × 625 + 12,5 × 1 000 = 8 000 + 12 500 = **20 500** ⇒ **+ 2,5 %** seulement par rapport à l'optimum : la fonction de coût est « plate » autour de l'optimum (robustesse du modèle de Wilson).`,
  kp:["Coût de possession 1 000 DH par unité et par an","Q* = 25 et coût 25 000 (égalité lancement/possession)","Contrainte des dizaines : Q = 30, + 416,67","Baisse de 36 % : Q* et coût − 20 % (√0,64)","Q non réajustée : + 2,5 % (robustesse)"]}
  ]},
  {title:"Exercice 5 : Salaires horaires (borne manquante et médiane)", pts:2, pages:[302,302], th:["g-stats"],
  ctx:`Salaires horaires des ouvriers de l'entreprise GLISS : [X ; 50[ : 30 ouvriers ; [50 ; 100[ : 40 ; [100 ; 200[ : 20 ; [200 ; 300[ : 10.
1) Déterminez la borne inférieure X sachant que le salaire horaire moyen est de 94 DH. 2) Déterminez le salaire horaire médian et interprétez.`,
  questions:[
  {pts:2, q:"Borne X et médiane.",
  chk:[{l:"Borne X",v:10,u:"DH"},{l:"Médiane",v:75,u:"DH"}],
  model:`1) N = 100 ; centres : (X + 50)/2 ; 75 ; 150 ; 250.
x̄ = [30 (X + 50)/2 + 40 × 75 + 20 × 150 + 10 × 250] / 100 = (15 X + 750 + 3 000 + 3 000 + 2 500) / 100 = 94 ⇒ 15 X = 150 ⇒ **X = 10 DH**.
2) Rang 50 ; effectifs cumulés : 30 (à 50), 70 (à 100) ⇒ classe médiane [50 ; 100[ : Me = 50 + (50 − 30) / 40 × 50 = **75 DH** : la moitié des ouvriers gagne moins de 75 DH de l'heure. La moyenne (94) est supérieure à la médiane : distribution étirée vers les hauts salaires (quelques salaires élevés tirent la moyenne vers le haut).`,
  kp:["Équation de la moyenne → X = 10","Classe médiane [50 ; 100[","Me = 75 par interpolation","Interprétation (moyenne > médiane : asymétrie à droite)"]}
  ]},
  {title:"Exercice 6 : Loi binomiale (chômage) et probabilités conditionnelles", pts:2, pages:[302,302], th:["g-probas"],
  ctx:`Dans une ville africaine, le taux de chômage est de **15 %**. 1) X = nombre de personnes au chômage parmi 10 personnes choisies au hasard : a) loi de X, E(X) et V(X) ; b) probabilité qu'aucune personne ne soit au chômage ; c) probabilité qu'au moins 2 personnes soient au chômage. 2) Les femmes représentent **30 % des chômeurs** et **45 % de la population**. Probabilité qu'une femme soit au chômage ?`,
  questions:[
  {pts:2, q:"Loi binomiale et probabilité conditionnelle.",
  chk:[{l:"E(X)",v:1.5,u:"",tol:0.001},{l:"V(X)",v:1.275,u:"",tol:0.001},{l:"P(X = 0)",v:0.1969,u:"",tol:0.0005},{l:"P(X ≥ 2)",v:0.4557,u:"",tol:0.0005},{l:"P(chômage | femme)",v:0.1,u:"",tol:0.0005}],
  model:`1) a) **X ~ B(10 ; 0,15)** (10 tirages indépendants, population grande) : E(X) = **1,5** ; V(X) = 10 × 0,15 × 0,85 = **1,275**.
b) P(X = 0) = 0,85¹⁰ = **0,1969**.
c) P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) = 1 − 0,1969 − 10 × 0,15 × 0,85⁹ (0,3474) = **0,4557**.
2) Bayes : P(C | F) = P(F | C) × P(C) / P(F) = 0,30 × 0,15 / 0,45 = **0,10** : une femme a 10 % de risque d'être au chômage (contre 15 % en moyenne).`,
  kp:["B(10 ; 0,15), E = 1,5, V = 1,275","P(X = 0) ≈ 0,197","P(X ≥ 2) ≈ 0,456","Bayes : P(C|F) = 0,10"]}
  ]}
  ]});
})();

EXAMS.push({
id:"tec-2019", subject:"tec", year:2019, session:"21-22 septembre 2019", title:"Techniques d'expression et de communication", date:"Dimanche 22 septembre 2019", duration:120, pages:[303,304],
sections:[
{title:"Texte : « Innovation : pourquoi le Maroc doit-il se mettre dans la course ? »", pts:20, pages:[304,304], th:["tec-dissertation","tec-questions"],
ctx:`**Innovation : pourquoi le Maroc doit-il se mettre dans la course ?** (texte de presse, extraits)
Pour s'affirmer dans la mondialisation et construire une économie pérenne, le Maroc doit miser sur l'innovation. Trois piliers sont essentiels à un système innovant, générateur d'emplois et compétitif : **l'entrepreneuriat, la recherche et l'éducation**. La recherche suppose formation et compétences, et débouche sur des brevets cruciaux pour la compétitivité des entreprises marocaines.
Aujourd'hui, le Maroc est **à la traîne** dans ces trois domaines : faible nombre de brevets, investissement limité en R&D, production scientifique modeste. Le quantitatif ne doit pas être l'unique critère : la recherche doit avoir un intérêt innovant et un impact sur la production nationale.
Il faudra **cibler les efforts** en identifiant les domaines dans lesquels le Maroc pourra présenter un **avantage compétitif compte tenu de ses ressources, de sa population (les MRE notamment) et des marchés présentant un fort potentiel futur**, puis attribuer les moyens adéquats à la recherche (laboratoires, financement d'équipes, réductions d'impôts pour la R&D, bourses de thèse) et à l'éducation (parcours de spécialisation, formation professionnelle et technique).
Une **structure d'analyse et de stratégie** permettrait de rendre ces efforts plus fructueux, d'identifier les secteurs où la **diaspora** marocaine est active et d'en faire un relais avec les milieux d'innovation au Maroc ; elle travaillerait avec les institutions d'enseignement, de formation et de recherche ; les grandes entreprises pourraient aider les start-up. Pour engager la recherche sur la scène internationale, l'auteur évoque l'attraction de chercheurs de pointe, comme le font les États-Unis.
Dans le secteur privé, les entreprises doivent investir dans la R&D, même non rentable à court terme, pour accéder à de nouveaux marchés ou acquérir un avantage compétitif. L'écosystème entrepreneurial reste insuffisant : malgré la simplification de la création d'entreprise, manquent les initiatives favorisant les start-up universitaires, les incubateurs et les rencontres avec les investisseurs.
**Question** : en vous appuyant sur le texte, expliquer comment le Maroc peut « présenter un avantage compétitif compte tenu de ses ressources, de sa population (les MRE notamment) et des marchés présentant un fort potentiel ».`,
questions:[
{pts:20, q:"Expliquer comment le Maroc peut « présenter un avantage compétitif compte tenu de ses ressources, de sa population (les MRE notamment) et des marchés présentant un fort potentiel ».",
model:`#### Introduction
- **Accroche** : dans l'économie de la connaissance, la compétitivité repose moins sur les coûts que sur l'innovation.
- **Constat du texte** : le Maroc est en retard (brevets, R&D, publications) et doit **cibler** ses efforts plutôt que tout faire.
- **Problématique** : sur quels atouts spécifiques le Maroc peut-il bâtir un avantage compétitif durable fondé sur l'innovation ?
- **Plan** : ses ressources (I), sa population et sa diaspora (II), les marchés porteurs (III) — avec les conditions de réussite.
#### I. Valoriser les ressources naturelles et la position géographique
1. **Phosphates** (premières réserves mondiales) : passer de l'extraction à l'innovation (engrais adaptés aux sols africains, chimie verte) — exemple de l'OCP et de l'université Mohammed VI Polytechnique.
2. **Énergies renouvelables** (ensoleillement, vent) : solaire (Noor), éolien, **hydrogène vert** ; recherche appliquée (IRESEN).
3. **Position géographique** : carrefour Europe-Afrique, port Tanger Med, zones franches ; intégration aux chaînes de valeur (automobile, aéronautique) avec montée en gamme (ingénierie, R&D locale).
#### II. Miser sur le capital humain et la diaspora (MRE)
1. **Une population jeune** : former massivement (ingénieurs, techniciens, formation professionnelle), développer la culture entrepreneuriale dès l'université.
2. **Les MRE, un capital de compétences** : chercheurs, ingénieurs et entrepreneurs installés à l'étranger peuvent transférer savoir-faire, réseaux et capitaux ; d'où l'idée du texte d'une **structure** qui cartographie la diaspora et la relie aux laboratoires et aux start-up marocains (programmes de mentorat, double affiliation, incitations au retour, investissements de la diaspora).
3. **Attirer et retenir les talents** : bourses de thèse, statut du chercheur, laboratoires équipés, partenariats internationaux.
#### III. Se positionner sur des marchés à fort potentiel
1. **L'Afrique** : banques, assurances, télécoms, BTP, agro-industrie marocains y sont déjà présents ; innovations adaptées (fintech, paiement mobile, agriculture intelligente).
2. **Les secteurs d'avenir** : économie verte, numérique (offshoring à plus forte valeur ajoutée, intelligence artificielle), santé et industrie pharmaceutique, tourisme durable.
3. **Les conditions** : incitations fiscales à la R&D, financement en capital-risque, incubateurs, liens université-entreprise, protection de la propriété industrielle (OMPIC), stabilité et gouvernance.
#### Conclusion
- **Bilan** : l'avantage compétitif ne se décrète pas ; il naît de la rencontre entre des atouts réels (ressources, jeunesse, diaspora, position) et une **stratégie ciblée** soutenue par l'éducation, la recherche et l'entrepreneuriat.
- **Ouverture** : le Nouveau modèle de développement (2021) reprend ces orientations ; la profession comptable peut y contribuer (évaluation des actifs immatériels, crédit d'impôt recherche, accompagnement des start-up).`,
kp:["Introduction : contexte, constat du texte (retard), problématique, plan","Ressources : phosphates, énergies renouvelables, position géographique (exemples précis)","Population : jeunesse et formation","Diaspora / MRE : transfert de compétences, réseaux, structure de liaison proposée par le texte","Marchés porteurs : Afrique, économie verte, numérique","Conditions de réussite : R&D, incitations, écosystème start-up, université-entreprise","Conclusion avec ouverture","Expression : plan apparent, transitions, orthographe"]}
]}
]});
