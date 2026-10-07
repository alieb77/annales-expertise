/* Session 2025 (25-26 octobre 2025) */
EXAMS.push({
id:"cpt-2025", subject:"cpt", year:2025, session:"25-26 octobre 2025", title:"Comptabilité générale et analytique", date:"Samedi 25 octobre 2025", duration:300, pages:[404,409],
note:"Deux copies séparées : comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Exercice 1 : Évaluation des immobilisations (CGNC)", pts:4, pages:[405,405], th:["cg-eval","cg-titres"],
questions:[
{pts:2, q:"Rappeler les méthodes d'évaluation, prévues par le CGNC, d'une immobilisation corporelle en cas d'achat et en cas de production de l'immobilisation par l'entreprise elle-même.",
model:`#### Acquisition à titre onéreux → coût d'acquisition
- **Prix d'achat** net des réductions commerciales (remises, rabais, ristournes) et hors TVA récupérable ;
- **+ frais accessoires** nécessaires à la mise en état d'utilisation : transport, manutention, droits de douane, installation, montage, essais…
- Les **frais d'acquisition** (droits d'enregistrement, honoraires, commissions, frais d'actes) peuvent être incorporés au coût **ou** portés en charges à répartir (compte 2121 « Frais d'acquisition des immobilisations »).
#### Production par l'entreprise elle-même → coût de production
- Coût d'acquisition des matières et fournitures consommées
- **+ charges directes** de production (main-d'œuvre, sous-traitance…)
- **+ quote-part raisonnable des charges indirectes** de production.
- Sont exclus : frais d'administration générale, frais commerciaux, coût de la sous-activité.
- Écriture : débit du compte d'immobilisation (23..) / crédit **7143 « Immobilisations corporelles produites »**.
> Rappel : apport → valeur d'apport ; acquisition à titre gratuit ou échange → valeur actuelle. À la clôture, la valeur actuelle (valeur d'usage) est comparée à la VNC : moins-value → provision pour dépréciation, plus-value non constatée (prudence).`,
kp:["Achat : coût d'acquisition = prix d'achat net de RRR et de TVA récupérable","+ frais accessoires de mise en état d'utilisation (transport, installation, douane…)","Frais d'acquisition : incorporés ou en charges à répartir (2121)","Production : coût de production = matières consommées + charges directes + quote-part des charges indirectes de production","Exclusion des frais généraux d'administration ; contrepartie 7143"]},
{pts:2, q:"Indiquez les valeurs actuelles des immobilisations financières et des titres et valeurs de placement, telles que prévues par le CGNC, à la date de clôture.",
model:`| Élément | Valeur actuelle retenue à la clôture |
|---|---|
| Titres de participation | **Valeur d'usage** : utilité de la participation pour l'entreprise (rentabilité, perspectives, quote-part des capitaux propres, cours moyen du dernier mois s'ils sont cotés, conjoncture) |
| Autres titres immobilisés cotés | Cours moyen du dernier mois |
| Autres titres immobilisés non cotés | Valeur probable de négociation |
| Prêts et créances immobilisées | Valeur probable de recouvrement |
| TVP cotés | **Cours moyen du dernier mois** |
| TVP non cotés | Valeur probable de négociation |
**Règles** : comparaison titre par titre avec la valeur d'entrée ; moins-value latente → **provision pour dépréciation** (29.. pour les immobilisations financières, 3950 pour les TVP) ; plus-value latente **non comptabilisée** ; pas de compensation entre plus et moins-values.`,
kp:["Titres de participation : valeur d'usage (utilité pour l'entreprise)","Titres cotés (autres titres immobilisés, TVP) : cours moyen du dernier mois","Non cotés : valeur probable de négociation","Moins-value → provision ; plus-value non comptabilisée, sans compensation"]}
]},
{title:"CG — Exercice 2 : Coût d'acquisition d'un stock de matières premières", pts:11, pages:[405,405], th:["cg-eval","ca-stocks"],
ctx:`Le stock de matières premières de l'entreprise MAT est évalué au 01/12/N à **234 000 MAD pour 1 200 unités**.
L'entreprise a acquis **1 000 unités** le 15 décembre. Les dépenses relatives à l'acquisition sont les suivantes :
- Prix d'achat : 200 000 MAD ;
- Remise de 5 % ;
- Frais de port : 20 000 MAD ;
- Frais de déchargement : 5 000 MAD ;
- Frais administratifs dédiés : 35 000 MAD.
Au 31/12/N, il reste **1 500 unités**.`,
questions:[
{pts:3, q:"Indiquer les modalités de calcul du coût d'acquisition d'un stock en précisant les éléments à exclure.",
model:`**Coût d'acquisition = prix d'achat + frais accessoires d'achat**
- Prix d'achat **net** des remises, rabais et ristournes obtenus, hors TVA récupérable (les droits de douane et taxes non récupérables sont inclus) ;
- Frais accessoires **directement attribuables** à l'acquisition et à l'acheminement du stock jusqu'à son lieu et dans l'état où il se trouve : transport, déchargement/manutention, assurance transport, commissions, frais de dédouanement, réception.
**Éléments à exclure** :
- la TVA récupérable ;
- les **escomptes de règlement** (produits financiers, non déduits du coût) ;
- les **frais d'administration générale** qui ne contribuent pas à amener le stock à l'endroit et dans l'état où il se trouve ;
- les frais de stockage postérieurs à la réception (sauf s'ils sont nécessaires au processus de production) ;
- les frais commerciaux et de distribution ;
- les pertes et gaspillages anormaux ;
- les **charges financières** (intérêts d'emprunt).`,
kp:["Prix d'achat net de remises/rabais/ristournes, hors TVA récupérable","+ frais accessoires directement attribuables (transport, déchargement, douane…)","Exclusion des frais administratifs généraux","Exclusion des escomptes de règlement, frais de stockage, frais de vente, pertes anormales","Exclusion des charges financières"]},
{pts:2, q:"Indiquer si le coût d'un emprunt contracté pour l'acquisition d'un stock peut être incorporé au coût d'entrée du stock. Justifier.",
model:`**Non.** Les intérêts rémunèrent le **financement** de l'achat, pas l'acquisition elle-même : ils ne contribuent pas à amener le stock à l'endroit et dans l'état où il se trouve. Ce sont des charges financières de l'exercice (6311 « Intérêts des emprunts et dettes »).
> Exception : pour des stocks dont la **production** exige une longue période (actifs dits « qualifiés » : vins et alcools vieillis, promotion immobilière, constructions longues…), les intérêts courus **pendant la période de production** peuvent être incorporés au coût de production. Ce n'est pas le cas d'un stock acheté prêt à l'emploi.`,
kp:["Réponse : non pour un stock acheté","Justification : le coût d'emprunt relève du financement, pas de l'acquisition → charge financière (6311)","Exception : stocks à cycle de production long (actifs qualifiés), intérêts de la période de production"]},
{pts:2, q:"Déterminer le coût d'entrée des matières acquises en décembre.",
chk:[{l:"Coût d'entrée total des 1 000 unités",v:215000,u:"DH"},{l:"Coût d'entrée unitaire",v:215,u:"DH"}],
model:`| Élément | Montant |
|---|---|
| Prix d'achat | 200 000 |
| Remise 5 % | − 10 000 |
| Prix d'achat net | 190 000 |
| Frais de port | 20 000 |
| Frais de déchargement | 5 000 |
| Frais administratifs dédiés | exclus |
| **Coût d'entrée (1 000 u)** | **215 000** |
Coût unitaire : ==215 DH==.
> Si l'on considère que les « frais administratifs dédiés » sont directement attribuables à l'achat (par ex. frais de dédouanement), on les inclut : 250 000 DH, soit 250 DH/u. Le corrigé retient l'exclusion, conformément à la règle générale.`,
kp:["Remise déduite du prix d'achat (190 000)","Frais de port et de déchargement inclus","Frais administratifs exclus (justification)"]},
{pts:4, q:"Citer les méthodes de valorisation des stocks de biens interchangeables autorisées par le CGNC et déterminer la valeur du stock selon la méthode du CUMP et selon la méthode PEPS.",
chk:[{l:"Stock final au 31/12 — CUMP",v:306136.36,u:"DH",tol:5,alt:[330000]},{l:"Stock final au 31/12 — PEPS",v:312500,u:"DH",tol:5,alt:[347500]}],
model:`**Méthodes admises par le CGNC** pour les biens interchangeables : le **coût moyen pondéré** (CMUP, calculé après chaque entrée ou sur la période), le **PEPS / FIFO** (premier entré, premier sorti) et le **DEPS / LIFO** (dernier entré, premier sorti). La méthode retenue doit être appliquée de façon permanente.
#### Mouvements de décembre
| | Quantité | Coût unitaire | Montant |
|---|---|---|---|
| Stock au 01/12 | 1 200 | 195 | 234 000 |
| Entrée du 15/12 | 1 000 | 215 | 215 000 |
| Total disponible | 2 200 | | 449 000 |
| Sorties (2 200 − 1 500) | 700 | | |
| Stock final | 1 500 | | |
#### CUMP
CUMP = 449 000 / 2 200 = 204,09 DH → stock final = 1 500 × 204,09 = ==306 136 DH== (sorties : 142 864).
#### PEPS
Les 700 unités sorties sont prélevées sur le stock le plus ancien (195 DH) :
| Lot restant | Quantité | Coût | Montant |
|---|---|---|---|
| Reste du stock initial | 500 | 195 | 97 500 |
| Entrée du 15/12 | 1 000 | 215 | 215 000 |
| **Stock final** | **1 500** | | **312 500** |
> Variante avec frais administratifs incorporés (250 DH/u) : CUMP = 484 000 / 2 200 = 220 → 330 000 ; PEPS = 97 500 + 250 000 = 347 500.`,
kp:["Méthodes : CMUP, PEPS (FIFO), DEPS (LIFO) — permanence des méthodes","Sorties de décembre = 700 unités","CUMP = 204,09 → stock final ≈ 306 136","PEPS : 500 u à 195 + 1 000 u à 215 = 312 500"]}
]},
{title:"CG — Exercice 3 : Évaluation des titres à la clôture", pts:5, pages:[406,406], th:["cg-titres","cg-inventaire"],
ctx:`La société CLOTUR dispose du portefeuille de titres suivant au 31/12/N :
| Titres | Date d'achat | Prix d'achat unitaire | Quantité | Cours 31/12/N |
|---|---|---|---|---|
| X | 10/12/N-1 | 200 | 100 | |
| X | 15/09/N | 190 | 200 | |
| Y | 01/03/N | 250 | 300 | 260 |
| Z | 01/07/N-1 | 103 % | 1 000 | 98 % |
Les actions X sont des **titres de participation** et les actions Y des **VMP**. Les titres Z sont des **obligations acquises dans un but spéculatif**, émises le 31/03/N-6, nominal 500 MAD, cotation 103 %, échéance 01/04, taux d'intérêt nominal 8 %.
Informations relatives aux actions X au 31/12/N :
| Titres | Valeur d'usage | Cours boursier au 31/12 | Cours moyen du dernier mois |
|---|---|---|---|
| Actions X | 170 | 155 | 169 |
Une dépréciation de **8 000 MAD** avait été constatée au 31/12/N-1 sur les actions X.`,
questions:[
{pts:2, q:"Rappeler les règles de valorisation à la clôture de l'exercice pour le portefeuille de titres.",
model:`- **Titres de participation (X)** : comparaison du coût d'entrée avec la **valeur d'usage** (ici 170) ; le cours boursier et le cours moyen sont seulement des indices.
- **TVP cotés (Y, Z)** : comparaison avec le **cours moyen du dernier mois** (à défaut, le cours au 31/12 fourni).
- Moins-value latente → **provision pour dépréciation** : 2951 / dotation 6392 pour les titres de participation, 3950 / dotation 6394 pour les TVP ; provision devenue excédentaire → reprise (7392 / 7394).
- Plus-value latente : **non comptabilisée** (prudence), sans compensation entre titres.
- **Obligations** : les intérêts courus non échus depuis la dernière échéance du coupon sont constatés en produits (3493 « Intérêts courus et non échus à percevoir »).`,
kp:["Titres de participation : valeur d'usage","TVP : cours (moyen du dernier mois)","Moins-value → provision (ajustement de la provision existante) ; plus-value ignorée","Obligations : intérêts courus non échus à constater"]},
{pts:3, q:"Présenter les écritures nécessaires au 31/12/N.",
chk:[{l:"Ajustement net de la provision sur actions X (+ dotation / − reprise)",v:-1000,u:"DH"},{l:"Provision sur obligations Z",v:25000,u:"DH"},{l:"Intérêts courus sur Z",v:30000,u:"DH"}],
model:`#### Actions X (titres de participation)
| Lot | Coût d'entrée | Valeur d'usage (170) | Moins-value |
|---|---|---|---|
| 100 × 200 | 20 000 | 17 000 | 3 000 |
| 200 × 190 | 38 000 | 34 000 | 4 000 |
| **Total** | **58 000** | **51 000** | **7 000** |
Provision nécessaire 7 000 − provision existante 8 000 ⇒ **reprise de 1 000**.
#### Actions Y (VMP)
Cours 260 > 250 : plus-value latente de 3 000 → **aucune écriture**.
#### Obligations Z (TVP)
- Dépréciation : (103 % − 98 %) × 500 × 1 000 = **25 000** (aucune provision antérieure mentionnée).
- Intérêts courus du 01/04/N au 31/12/N (9 mois) : 500 × 8 % × 1 000 × 9/12 = **30 000**.
#### Écritures au 31/12/N
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2951 | Provisions pour dépréciation des titres de participation | 1 000 | |
| 7392 | Reprises sur provisions pour dépréciation des immob. financières | | 1 000 |
| 6394 | Dotations aux provisions pour dépréciation des TVP | 25 000 | |
| 3950 | Provisions pour dépréciation des TVP | | 25 000 |
| 3493 | Intérêts courus et non échus à percevoir | 30 000 | |
| 7381 | Intérêts et produits assimilés | | 30 000 |
> Présentation détaillée admise : dotation 4 000 sur le lot acquis en N et reprise 5 000 sur le lot N-1 (provision ramenée de 8 000 à 3 000). L'effet net est identique (+1 000).`,
kp:["X : référence = valeur d'usage 170 (pas le cours)","X : provision requise 7 000 → reprise 1 000 (2951/7392)","Y : plus-value non constatée, pas d'écriture","Z : provision 25 000 (6394/3950)","Z : intérêts courus 9 mois = 30 000 (3493/738)"]}
]},
{title:"CA — Exercice 1 : SARL Tanger Textile (coûts complets et résultat analytique)", pts:6, pages:[407,407], th:["ca-couts"],
ctx:`La société TANGER TEXTILE fabrique des chemises homme (**CH**) et des chemisiers femme (**CF**). Les deux produits utilisent le même tissu et passent par les mêmes ateliers. Données de septembre N :
| Données | CH | CF |
|---|---|---|
| Production (unités) | 4 000 | 6 000 |
| Ventes (unités) | 3 600 | 5 400 |
| Prix de vente unitaire | 180 DH | 210 DH |
| Consommation de tissu par unité | 1,8 m | 2,4 m |
| Coût du tissu | 45 DH / m | |
| Main-d'œuvre directe par unité | 0,8 h | 1,2 h |
| Coût de la MOD | 50 DH / h | |
Charges indirectes de la période :
- Centre de production : 300 000 DH, clé de répartition = heures MOD ;
- Centre de distribution : 120 000 DH, clé de répartition = chiffre d'affaires.`,
questions:[
{pts:3, q:"Déterminer le coût de production unitaire des produits CH et CF.",
chk:[{l:"Coût de production unitaire CH",v:144.08,u:"DH",tol:0.05},{l:"Coût de production unitaire CF",v:202.62,u:"DH",tol:0.05}],
model:`Heures MOD : CH 4 000 × 0,8 = 3 200 h ; CF 6 000 × 1,2 = 7 200 h ; total 10 400 h.
Coût de l'unité d'œuvre du centre production : 300 000 / 10 400 = **28,846 DH/h**.
| | CH | CF |
|---|---|---|
| Tissu | 4 000 × 1,8 × 45 = 324 000 | 6 000 × 2,4 × 45 = 648 000 |
| MOD | 3 200 × 50 = 160 000 | 7 200 × 50 = 360 000 |
| Centre production | 3 200 × 28,846 = 92 308 | 7 200 × 28,846 = 207 692 |
| **Coût de production total** | **576 308** | **1 215 692** |
| Quantités produites | 4 000 | 6 000 |
| **Coût unitaire** | ==144,08== | ==202,62== |`,
kp:["Heures MOD totales 10 400 h et coût de l'UO 28,85 DH","Tissu et MOD directs correctement calculés","Coût de production unitaire CH ≈ 144,08 et CF ≈ 202,62"]},
{pts:2, q:"Calculer le coût de revient unitaire et le résultat analytique global du mois.",
chk:[{l:"Coût de revient unitaire CH",v:156.2,u:"DH",tol:0.05},{l:"Coût de revient unitaire CF",v:216.76,u:"DH",tol:0.05},{l:"Résultat analytique global",v:49200,u:"DH",tol:5}],
model:`Chiffre d'affaires : CH 3 600 × 180 = 648 000 ; CF 5 400 × 210 = 1 134 000 ; total 1 782 000.
Taux de frais de distribution : 120 000 / 1 782 000 = 6,734 % du CA.
| | CH | CF | Total |
|---|---|---|---|
| Coût de production des produits vendus | 3 600 × 144,08 = 518 677 | 5 400 × 202,62 = 1 094 123 | 1 612 800 |
| Distribution | 43 636 | 76 364 | 120 000 |
| **Coût de revient** | **562 313** | **1 170 487** | **1 732 800** |
| Coût de revient unitaire | ==156,20== | ==216,76== | |
| Chiffre d'affaires | 648 000 | 1 134 000 | 1 782 000 |
| **Résultat analytique** | **+ 85 687** | **− 36 487** | **==+ 49 200==** |
Contrôle : charges 972 000 + 520 000 + 300 000 + 120 000 = 1 912 000 ; stock final 400 × 144,08 + 600 × 202,62 = 179 200 ; résultat = 1 782 000 − 1 912 000 + 179 200 = 49 200.`,
kp:["Coût de production des seules unités vendues (3 600 et 5 400)","Distribution répartie au prorata du CA (6,73 %)","Résultats : CH ≈ +85 687, CF ≈ −36 487, global 49 200"]},
{pts:1, q:"Interpréter les résultats (produit le plus rentable ?).",
model:`- **CH est rentable** : +23,80 DH par unité (13,2 % du CA) ; **CF est déficitaire** : −6,76 DH par unité (−3,2 %).
- CF consomme plus de tissu (2,4 m) et de temps (1,2 h) et absorbe 69 % des frais du centre de production ; son prix (210 DH) ne couvre pas son coût complet (216,76 DH).
- **Prudence** : le coût complet dépend des clés de répartition. Avant tout abandon, raisonner en **marge sur coût variable** : si les charges indirectes sont fixes, CF dégage 210 − (108 + 60) = 42 DH par unité, soit 226 800 DH de contribution à la couverture des charges fixes. L'abandonner dégraderait le résultat.
- Pistes : revoir le prix de CF, réduire la consommation de tissu (patronage, chutes) et le temps de fabrication.`,
kp:["CH rentable, CF déficitaire (chiffres unitaires)","Explication par la consommation de ressources (tissu, MOD, frais du centre)","Limite du coût complet : raisonner en marge sur coût variable avant d'abandonner CF"]}
]},
{title:"CA — Exercice 2 : Agadir Agro (analyse des écarts sur coûts industriels)", pts:6, pages:[408,408], th:["ca-ecarts"],
ctx:`AGADIR AGRO S.A. fabrique un jus d'orange conditionné « SunnyMaroc ». Données d'août N :
**Normes** :
- Matière première : 3 kg d'oranges à 4,50 DH/kg pour 1 litre de jus fini ;
- Main-d'œuvre directe : 0,2 h par litre à 30 DH/h.
**Réalisations** :
- Production réelle : 12 000 litres ;
- Consommation réelle : 36 500 kg d'oranges à 4,20 DH/kg ;
- Main-d'œuvre réelle : 2 400 h à 31 DH/h.`,
questions:[
{pts:3, q:"Calculer les écarts sur consommation, sur prix des matières, et sur coût de main-d'œuvre.",
chk:[{l:"Écart sur quantité de matière (+ = défavorable)",v:2250,u:"DH"},{l:"Écart sur prix de matière",v:-10950,u:"DH"},{l:"Écart sur temps de MOD",v:0,u:"DH"},{l:"Écart sur taux de MOD",v:2400,u:"DH"}],
model:`Convention : écart = réel − préétabli adapté à la production réelle (12 000 L). Écart positif = **défavorable**.
| | Réel | Préétabli (12 000 L) | Écart global |
|---|---|---|---|
| Matière | 36 500 kg × 4,20 = 153 300 | 36 000 kg × 4,50 = 162 000 | − 8 700 (F) |
| MOD | 2 400 h × 31 = 74 400 | 2 400 h × 30 = 72 000 | + 2 400 (D) |
**Matière**
- Écart sur quantité = (36 500 − 36 000) × 4,50 = ==+ 2 250 (défavorable)==
- Écart sur prix = (4,20 − 4,50) × 36 500 = ==− 10 950 (favorable)==
- Vérification : 2 250 − 10 950 = − 8 700.
**Main-d'œuvre**
- Écart sur temps = (2 400 − 2 400) × 30 = ==0==
- Écart sur taux = (31 − 30) × 2 400 = ==+ 2 400 (défavorable)==
Écart total sur coûts directs : − 8 700 + 2 400 = **− 6 300 (favorable)**.`,
kp:["Préétabli adapté à la production réelle (36 000 kg, 2 400 h)","Écart quantité MP +2 250 D (valorisé au prix standard)","Écart prix MP −10 950 F (sur quantité réelle)","Écart temps 0 et écart taux +2 400 D"]},
{pts:2, q:"Interpréter les écarts obtenus (écarts favorables / défavorables).",
model:`- **Prix matière favorable (−10 950)** : oranges achetées 0,30 DH/kg moins cher (−6,7 %) — négociation, saisonnalité, changement de fournisseur… mais l'acheteur n'en est pas forcément le seul responsable.
- **Quantité matière défavorable (+2 250)** : surconsommation de 500 kg (+1,4 %) — rendement en jus plus faible, pertes au pressage, déchets. Les deux écarts peuvent être **liés** : des oranges moins chères peuvent être de moindre qualité (moins juteuses).
- **Temps MOD nul** : la productivité est conforme à la norme.
- **Taux MOD défavorable (+2 400)** : heure payée 31 DH au lieu de 30 — heures supplémentaires, revalorisation salariale (SMIG), personnel plus qualifié.
- Globalement, le gain sur les achats (−8 700) compense largement le surcoût salarial (+2 400) : écart net favorable de 6 300.`,
kp:["Prix favorable : achat moins cher (cause possible)","Quantité défavorable : rendement/pertes, lien possible avec la qualité des oranges","MOD : productivité conforme, surcoût dû au taux horaire (heures sup, hausse des salaires)"]},
{pts:1, q:"Donner deux propositions d'action correctrice.",
model:`1. **Matières** : contrôler la qualité et le rendement en jus des oranges à la réception, inscrire un rendement minimal dans les contrats d'achat ; suivre les pertes au pressage (maintenance, réglage des presses).
2. **Main-d'œuvre** : mieux planifier la production pour limiter les heures supplémentaires ; si la hausse du taux horaire est durable (revalorisation salariale), **réviser la norme** à 31 DH pour garder des standards réalistes.`,
kp:["Une action sur la qualité / le rendement de la matière","Une action sur le coût horaire (planification, révision du standard)"]}
]},
{title:"CA — Exercice 3 : Marrakech Métal Industrie (coût marginal et optimisation de la production)", pts:8, pages:[409,409], th:["ca-variable","g-prog"],
ctx:`MMI fabrique deux produits A et B dans un même atelier. Les capacités sont limitées par la main-d'œuvre disponible : **10 000 heures** pour le mois.
| Données | Produit A | Produit B |
|---|---|---|
| Prix de vente unitaire | 400 DH | 500 DH |
| Coût variable unitaire | 260 DH | 320 DH |
| Heures MOD nécessaires par unité | 2 h | 3 h |
| Charges fixes mensuelles totales | 360 000 DH | |`,
questions:[
{pts:2, q:"Déterminer la marge sur coût variable unitaire et la marge sur coût variable par heure pour chaque produit.",
chk:[{l:"MCV par heure — A",v:70,u:"DH/h"},{l:"MCV par heure — B",v:60,u:"DH/h"}],
model:`| | A | B |
|---|---|---|
| Prix de vente | 400 | 500 |
| Coût variable | 260 | 320 |
| **MCV unitaire** | **140** | **180** |
| Heures par unité | 2 | 3 |
| **MCV par heure (facteur rare)** | ==70== | ==60== |
B a la plus forte marge unitaire, mais **A rapporte plus par heure**, qui est la ressource rare.`,
kp:["MCV unitaires 140 et 180","MCV par heure 70 et 60","Identifier l'heure de MOD comme facteur rare"]},
{pts:2, q:"Indiquer la combinaison de production optimale dans la limite des 10 000 heures.",
chk:[{l:"Quantité de A",v:5000,u:"unités"},{l:"Quantité de B",v:0,u:"unités"}],
model:`On affecte les heures au produit qui dégage la plus forte **marge par unité de facteur rare** : A (70 DH/h).
Aucune contrainte de marché n'étant indiquée, toutes les heures vont à A : 10 000 / 2 = ==5 000 unités de A== et 0 unité de B.
> Si la demande de A était plafonnée, on produirait A jusqu'à sa demande, puis B avec les heures restantes.`,
kp:["Critère : MCV par heure de facteur rare","Tout sur A : 5 000 unités, B = 0 (pas de limite de marché)"]},
{pts:2, q:"Calculer le résultat prévisionnel mensuel correspondant à cette combinaison.",
chk:[{l:"Résultat mensuel",v:340000,u:"DH"}],
model:`MCV totale = 5 000 × 140 = 700 000 DH (= 10 000 h × 70).
Résultat = 700 000 − 360 000 = ==340 000 DH==.
(À comparer : tout en B → 3 333 u × 180 ≈ 600 000 − 360 000 = 240 000 DH.)`,
kp:["MCV totale 700 000","Résultat 340 000"]},
{pts:2, q:"Si l'entreprise peut augmenter sa capacité de 1 000 heures supplémentaires, faut-il le faire si le coût horaire supplémentaire est de 70 DH ? Justifiez votre réponse.",
chk:[{l:"Gain net procuré par les 1 000 h supplémentaires",v:0,u:"DH"}],
model:`Les 1 000 heures permettraient 500 unités de A en plus : MCV supplémentaire = 1 000 × 70 = 70 000 DH ; surcoût = 1 000 × 70 = 70 000 DH ⇒ **gain net nul**.
**Réponse : non, ce n'est pas intéressant** — l'entreprise est indifférente sur le plan financier et prendrait des risques (vendre 500 A de plus, fatigue, qualité) sans rémunération. L'opération ne devient intéressante que si le surcoût horaire est **inférieur à 70 DH** (la marge par heure de A = coût d'opportunité de l'heure).`,
kp:["Comparer la MCV par heure (70) au surcoût horaire (70)","Gain nul → pas intéressant / indifférent","Seuil : intéressant si le surcoût < 70 DH/h"]}
]}
]});

EXAMS.push({
id:"droit-2025", subject:"droit", year:2025, session:"25-26 octobre 2025", title:"Droit des affaires et droit fiscal", date:"Samedi 25 octobre 2025", duration:180, pages:[410,414],
note:"Deux copies séparées : droit des affaires /20 et droit fiscal /20",
sections:[
{title:"Droit des affaires — Questions de cours", pts:20, pages:[411,411], th:["da-constitution","da-capital","da-fonds"],
ctx:`On vous demande de répondre de manière synthétique et précise aux questions suivantes. **Notation : 4 points par question.**`,
questions:[
{pts:4, q:"Quelles sont les conditions pour faire un apport en nature et en industrie dans le capital d'une SARL ? Quelles sont les règles d'évaluation de ces deux types d'apports ?",
model:`#### Apport en nature (loi 5-96)
- Les parts correspondant à un apport en nature doivent être **souscrites en totalité et intégralement libérées** dès la constitution (transfert de propriété ou de jouissance du bien).
- **Évaluation** : les statuts doivent contenir l'évaluation de chaque apport en nature, au vu d'un **rapport d'un commissaire aux apports** annexé aux statuts, désigné à l'unanimité des futurs associés ou, à défaut, par ordonnance du président du tribunal à la demande d'un fondateur.
- **Responsabilité** : lorsque l'évaluation retenue diffère de celle du commissaire (ou en cas de dispense légale de commissaire), les associés sont **solidairement responsables pendant 5 ans** envers les tiers de la valeur attribuée aux apports.
#### Apport en industrie
- C'est l'apport de travail, de savoir-faire, de compétences. Il **ne concourt pas à la formation du capital social** (il n'est ni saisissable ni cessible et ne constitue pas un gage pour les créanciers).
- Il n'est admis que **si les statuts le prévoient** ; l'apporteur reçoit des **parts d'industrie** (incessibles, non représentatives du capital) qui lui donnent droit au partage des bénéfices et de l'actif net et à la participation aux décisions.
- **Évaluation** : les statuts fixent la valeur de l'apport et les droits qu'il confère ; à défaut, règle de droit commun : la part de l'apporteur en industrie dans les bénéfices et les pertes est égale à celle de l'associé qui a le moins apporté.
- L'apporteur doit à la société tous les gains réalisés par l'activité apportée (obligation de non-concurrence).
> À vérifier dans la version en vigueur de la loi 5-96 (modifiée en 2019 et 2021) avant l'épreuve.`,
kp:["Apport en nature : parts intégralement libérées dès la souscription","Évaluation par commissaire aux apports (unanimité ou président du tribunal), rapport annexé aux statuts","Responsabilité solidaire des associés pendant 5 ans si valeur différente","Apport en industrie : ne concourt pas au capital, prévu par les statuts, parts d'industrie incessibles","Évaluation de l'industrie fixée par les statuts ; à défaut part = celle de l'associé ayant le moins apporté"]},
{pts:4, q:"Est-ce que l'apport en industrie est autorisé dans une société par actions simplifiée (SAS) ? Dans l'affirmative, quel est son intérêt et comment procède-t-on à son évaluation ?",
model:`**Oui.** Les statuts d'une SAS peuvent prévoir l'émission d'**actions inaliénables résultant d'apports en industrie**.
**Intérêt**
- Associer au capital (droit de vote, dividendes) une personne qui apporte son **savoir-faire, ses compétences, son réseau** sans apport d'argent : ingénieur, fondateur de start-up, dirigeant clé…
- Grande souplesse statutaire de la SAS (liberté d'organisation, clauses d'agrément, d'inaliénabilité, d'exclusion) qui permet d'encadrer cette situation et de fidéliser le talent.
**Régime et évaluation**
- Les actions d'industrie sont **inaliénables** (incessibles) et ne concourent pas à la formation du capital social.
- Les **statuts déterminent** les modalités de souscription et de répartition de ces actions.
- Ils fixent aussi le **délai au terme duquel, après leur émission, ces actions font l'objet d'une évaluation** par un **commissaire aux apports** (l'apport en industrie se réalise dans la durée, on l'évalue donc a posteriori).`,
kp:["Oui : actions inaliénables d'industrie prévues par les statuts","Intérêt : associer un apporteur de compétences/savoir-faire sans apport financier","Ces actions ne concourent pas au capital et sont incessibles","Statuts fixent modalités de souscription/répartition et le délai d'évaluation","Évaluation par un commissaire aux apports"]},
{pts:4, q:"Quelles sont les motifs de réduction de capital dans une société anonyme et selon quelles procédures ces réductions de capital peuvent-elles prendre forme ?",
model:`#### Motifs
1. **Réduction motivée par des pertes** (assainissement) : imputer des pertes sur le capital pour ajuster le capital à l'actif net réel. Elle devient **obligatoire** lorsque les capitaux propres sont devenus inférieurs au quart du capital et que la dissolution anticipée n'a pas été prononcée : la société doit réduire son capital d'un montant au moins égal aux pertes non imputées sur les réserves (dans le délai légal), sauf reconstitution des capitaux propres.
2. **Réduction non motivée par des pertes** : capital devenu excédentaire → **remboursement** d'apports aux actionnaires ; **rachat de ses propres actions** par la société en vue de leur annulation (sortie d'actionnaires, relution).
#### Procédure
- Décision de l'**AGE** (qui peut déléguer au conseil d'administration / directoire les pouvoirs de la réaliser), sur **rapport du commissaire aux comptes** relatif aux causes et conditions de la réduction.
- **Égalité des actionnaires** obligatoire.
- La réduction ne peut ramener le capital **sous le minimum légal** (300 000 DH ; 3 000 000 DH pour une société faisant appel public à l'épargne) que sous condition suspensive d'une **augmentation** ultérieure le ramenant au moins à ce minimum (« coup d'accordéon ») ou d'une transformation.
- Réduction non motivée par des pertes : les **créanciers** antérieurs peuvent **former opposition** devant le tribunal dans le délai légal suivant le dépôt du PV au greffe ; le tribunal rejette l'opposition ou ordonne le remboursement / des garanties ; les opérations ne peuvent commencer pendant ce délai.
- Formalités : dépôt au greffe, publicité légale, modification des statuts.
#### Formes
- **Diminution de la valeur nominale** des actions ;
- **Diminution du nombre** d'actions (regroupement, annulation) ;
- **Rachat** d'actions par la société suivi de leur annulation (offre faite à tous les actionnaires).`,
kp:["Motif 1 : pertes (assainissement), obligatoire si capitaux propres < 1/4 du capital sans dissolution","Motif 2 : capital excédentaire → remboursement ou rachat/annulation d'actions","Décision de l'AGE sur rapport du CAC, égalité des actionnaires","Minimum légal (300 000 / 3 000 000 DH) : coup d'accordéon","Opposition des créanciers si non motivée par des pertes","Formes : baisse du nominal, baisse du nombre d'actions, rachat"]},
{pts:4, q:"Quelles sont les mentions obligatoires du contrat de cession de fonds de commerce ?",
model:`Selon le Code de commerce (art. 81), l'acte de vente doit énoncer :
1. le **nom du précédent vendeur**, la **date et la nature de son acte d'acquisition** et le **prix** de cette acquisition, en distinguant le prix des **éléments incorporels**, des **marchandises** et du **matériel** ;
2. l'**état des privilèges et nantissements** grevant le fonds ;
3. le **chiffre d'affaires** réalisé au cours de chacune des **trois dernières années** d'exploitation (ou depuis l'acquisition si elle date de moins de trois ans) ;
4. les **résultats d'exploitation** réalisés pendant la même période ;
5. le **bail** : sa date, sa durée, le nom et l'adresse du bailleur ;
6. l'**origine de propriété** du fonds.
**Sanctions** : l'omission d'une mention peut entraîner, à la demande de l'acquéreur, la **nullité** de la vente (action enfermée dans un bref délai) ; une énonciation inexacte engage la **garantie** du vendeur (réduction du prix, dommages-intérêts).
**Forme** : acte écrit (authentique ou sous seing privé), enregistré, déposé au greffe et publié (Bulletin officiel et journal d'annonces légales), le prix étant consigné pendant le délai d'opposition des créanciers.`,
kp:["Précédent vendeur, date/nature de son acte, prix ventilé (incorporels, marchandises, matériel)","État des privilèges et nantissements","CA des 3 dernières années","Résultats d'exploitation de la même période","Bail (date, durée, bailleur) et origine de propriété","Sanction : nullité à la demande de l'acquéreur / garantie en cas d'inexactitude"]},
{pts:4, q:"Dans le cadre d'une cession de fonds de commerce que signifie droit de suite et droit de préférence ?",
model:`Ces deux droits appartiennent aux **créanciers inscrits** sur le fonds : **vendeur non payé** (privilège du vendeur) et **créanciers nantis**, à condition que leur privilège / nantissement ait été **inscrit au registre du commerce** dans le délai légal.
- **Droit de préférence** : en cas de vente (amiable ou forcée) du fonds, le créancier inscrit est **payé sur le prix par priorité** aux créanciers chirographaires, selon le **rang de son inscription**. Le privilège du vendeur porte distinctement sur les éléments énumérés dans l'acte et l'inscription (incorporels, matériel, marchandises).
- **Droit de suite** : le créancier inscrit peut **suivre le fonds en quelque main qu'il passe** : si le fonds est cédé, il peut exercer ses droits contre l'**acquéreur** (tiers détenteur), exiger le paiement ou faire vendre le fonds ; il bénéficie aussi de la faculté de **surenchère** lorsque le prix de cession lui paraît insuffisant.
> Ces droits protègent le créancier contre une cession du fonds à vil prix ou à son insu ; s'y ajoute pour le vendeur l'**action résolutoire** (si elle a été réservée et inscrite).`,
kp:["Titulaires : vendeur non payé et créanciers nantis inscrits au RC","Droit de préférence : payé en priorité sur le prix selon le rang d'inscription","Droit de suite : poursuivre le fonds entre les mains de l'acquéreur","Surenchère / action résolutoire du vendeur"]}
]},
{title:"Droit fiscal — Cas général : provisions irrégulières (art. 10 CGI)", pts:2, pages:[412,412], th:["df-is","df-procedures"],
ctx:`Commentez les dispositions de cet extrait de l'article 10 du CGI :
« Toute provision irrégulièrement constituée, constatée dans les écritures d'un exercice comptable non prescrit doit, quelle que soit la date de sa constitution, être réintégrée dans le résultat de l'exercice au cours duquel elle a été portée à tort en comptabilité. »`,
questions:[
{pts:2, q:"Commentez cet extrait de l'article 10 du CGI.",
model:`**1. Les conditions de déductibilité des provisions (art. 10-I-F-2°)** : une provision n'est déductible que si elle est constituée en vue de faire face à la dépréciation d'éléments d'actif ou à des charges et pertes **nettement précisées**, que des événements en cours rendent **probables**, et si elle est **effectivement constatée en comptabilité** et figure au tableau des provisions. Pour les créances litigieuses, un **recours judiciaire** doit être engagé dans les 12 mois suivant la clôture de l'exercice de constitution. Sont donc irrégulières : les provisions **forfaitaires** ou globales, non justifiées, sans recours en justice, ou **devenues sans objet** et non reprises.
**2. La sanction** : la provision irrégulière est **réintégrée** au résultat fiscal de l'exercice où elle a été comptabilisée à tort.
**3. La portée de la règle « quelle que soit la date de sa constitution »** : tant que la provision **figure encore dans les écritures d'un exercice non prescrit**, l'administration peut la remettre en cause même si elle a été dotée au cours d'un exercice **prescrit**. C'est une **dérogation au délai de prescription** de 4 ans : on ne peut pas « blanchir » une provision irrégulière en la laissant vieillir au bilan.`,
kp:["Conditions de déductibilité : charge/perte nettement précisée, probable, comptabilisée","Exemples d'irrégularités : provision forfaitaire, sans recours judiciaire dans les 12 mois, devenue sans objet","Sanction : réintégration","Dérogation à la prescription : provision dotée sur exercice prescrit mais encore au bilan d'un exercice non prescrit"]}
]},
{title:"Droit fiscal — IS : société ABC (exercice 2024)", pts:7, pages:[412,412], th:["df-is"],
ctx:`Au titre de l'exercice 2024, la société ABC a réalisé :
- Résultat comptable (perte) : **− 350 000 DH**
- Chiffre d'affaires : **10 000 000 DH (HT)**
Le capital de la société s'élève à **4 000 000 DH** entièrement libéré.
Dans les charges et produits de la société figurent les opérations suivantes :
1. Amortissement 2023 non comptabilisé par la société : 250 000 DH
2. Dons à l'association sportive du quartier : 30 000 DH
3. Intérêts compte courant d'associé : avance de 3 500 000 DH effectuée le 1er février 2024, avec des intérêts au taux admis fiscalement en 2024, à savoir 3,19 %
4. Dividendes reçus d'une filiale en France : 100 000 DH
5. Provision forfaitaire pour dépréciation des créances clients : 500 000 DH
6. Provision pour litige au tribunal avec un fournisseur : 45 000 DH
7. Pertes diverses sur des créances anciennes sur la filiale en France : 80 000 DH
**Questions**
- Calculer l'IS dû au titre de 2024 sachant que : la société a débuté son exploitation en janvier 2021 ; la société a enregistré un déficit fiscal de 100 000 DH en 2023 et un chiffre d'affaires HT de 8 000 000 DH.
- Calculer l'IS à payer (reliquat à payer) / l'excédent d'acomptes.
- Calculer les acomptes de 2025.`,
questions:[
{pts:4, q:"Calculer l'IS dû au titre de 2024.",
chk:[{l:"Résultat fiscal 2024 (avant imputation du déficit)",v:510000,u:"DH"},{l:"Base imposable après imputation du déficit 2023",v:410000,u:"DH"},{l:"IS dû 2024",v:82000,u:"DH"}],
model:`#### Passage du résultat comptable au résultat fiscal
| Élément | Réintégration | Déduction | Justification |
|---|---|---|---|
| Résultat comptable | | | − 350 000 |
| 1. Amortissement 2023 passé en 2024 | 250 000 | | Un amortissement non constaté dans l'exercice auquel il se rapporte est **définitivement perdu** |
| 2. Don à une association de quartier | 30 000 | | Non déductible : l'association n'est pas reconnue d'utilité publique ni dans la liste de l'art. 10 |
| 3. Intérêts du compte courant | 0 | | Capital libéré, avances (3,5 M) ≤ capital (4 M), taux = taux admis 3,19 % → déductibles (102 342 DH) |
| 4. Dividendes de la filiale française | 0 | 0 | Pas d'abattement de 100 % (réservé aux dividendes de sociétés marocaines soumises à l'IS) : produit imposable, déjà dans le résultat |
| 5. Provision forfaitaire sur créances | 500 000 | | Provision globale non individualisée → non déductible |
| 6. Provision pour litige en justice | 0 | | Risque précis et probable (procès en cours) → déductible |
| 7. Pertes sur créances de la filiale | 80 000 | | Pas de preuve d'irrécouvrabilité (abandon de créance déguisé à une filiale) |
| **Total** | **860 000** | **0** | |
Résultat fiscal = − 350 000 + 860 000 = ==510 000 DH==.
Imputation du déficit 2023 (reportable sur 4 ans) : 510 000 − 100 000 = ==410 000 DH==.
#### IS et cotisation minimale
- **IS** : taux proportionnel 2024 pour un bénéfice compris entre 300 001 et 1 000 000 DH = **20 %** → 410 000 × 20 % = **82 000 DH**.
- **Cotisation minimale** : l'exonération de CM pendant les **36 premiers mois** d'exploitation (janvier 2021 → décembre 2023) a expiré ; CM 2024 = 10 000 000 × 0,25 % = **25 000 DH** (≥ 3 000 DH). Si l'on ajoute à la base les produits financiers non exonérés (dividendes étrangers) : 10 100 000 × 0,25 % = 25 250 DH.
- IS dû = max (IS ; CM) = ==82 000 DH==.`,
kp:["Réintégration de l'amortissement 2023 (droit perdu)","Réintégration du don (association non reconnue d'utilité publique)","Intérêts du compte courant déductibles (conditions vérifiées)","Dividendes étrangers : pas d'abattement, pas de déduction","Réintégration de la provision forfaitaire (500 000) et des pertes sur créances filiale (80 000) ; provision pour litige déductible","Résultat fiscal 510 000 ; déficit 2023 imputé → 410 000","IS 20 % = 82 000 ; CM 0,25 % = 25 000 (fin de l'exonération de 36 mois) ; IS dû = 82 000"]},
{pts:2, q:"Calculer l'IS à payer (reliquat à payer) / l'excédent d'acomptes.",
chk:[{l:"Acomptes versés en 2024",v:0,u:"DH"},{l:"Reliquat d'IS à payer",v:82000,u:"DH"}],
model:`Les acomptes 2024 sont calculés sur l'impôt dû au titre de **2023** (exercice de référence).
- 2023 : résultat **déficitaire** → pas d'IS ;
- 2023 est encore dans les **36 premiers mois** d'exploitation → **exonération de cotisation minimale**.
Impôt dû 2023 = 0 ⇒ **aucun acompte** en 2024 (le CA 2023 de 8 000 000 DH est un piège : il ne sert pas car la CM n'était pas due).
Reliquat = 82 000 − 0 = ==82 000 DH==, à verser spontanément dans les **3 mois** suivant la clôture (avant le 31/03/2025), avec la déclaration du résultat fiscal. Pas d'excédent d'acomptes.`,
kp:["Acomptes 2024 basés sur l'impôt 2023","2023 : déficit + exonération de CM (36 mois) → impôt 0 → acomptes 0","Reliquat 82 000 à payer avant le 31/03/2025"]},
{pts:1, q:"Calculer les acomptes de 2025.",
chk:[{l:"Montant de chaque acompte 2025",v:20500,u:"DH"}],
model:`Base : impôt dû au titre de 2024 = 82 000 DH.
4 acomptes de 25 % : 82 000 × 25 % = ==20 500 DH== chacun, à verser avant l'expiration des 3e, 6e, 9e et 12e mois de l'exercice : **31/03, 30/06, 30/09 et 31/12/2025**.`,
kp:["Base = IS 2024 (82 000)","4 acomptes de 20 500 aux échéances 31/03, 30/06, 30/09, 31/12"]}
]},
{title:"Droit fiscal — IR : M. Farid (revenus 2025)", pts:5, pages:[413,413], th:["df-ir"],
ctx:`M. Farid est marié et père de deux enfants âgés de 18 et 21 ans. Rémunération de l'année 2025 :
| Élément | Montant (DH) |
|---|---|
| Salaire de base | 250 000 |
| Prime d'ancienneté | 12 500 |
| Prime de rendement | 11 200 |
| Frais de déplacement (justifiés) | 20 600 |
| Allocations familiales | 1 800 |
| Prime de logement | 24 400 |
Il règle une mensualité de **8 600 DH (dont 3 600 d'intérêts)** à une banque au titre d'un emprunt contracté pour l'acquisition de son **logement principal**.
**Barème IR (2025)**
| De | À | Taux | Somme à déduire |
|---|---|---|---|
| 0 | 40 000 | 0 % | — |
| 40 001 | 60 000 | 10 % | 4 000 |
| 60 001 | 80 000 | 20 % | 10 000 |
| 80 001 | 100 000 | 30 % | 18 000 |
| 100 001 | 180 000 | 34 % | 22 000 |
| Au-delà de 180 000 | | 37 % | 27 400 |`,
questions:[
{pts:3, q:"Calculer le montant de l'IR retenu à la source par l'employeur au titre de 2025, sans tenir compte des charges sociales.",
chk:[{l:"Salaire brut imposable",v:298100,u:"DH"},{l:"Revenu net imposable",v:236790,u:"DH"},{l:"IR retenu à la source",v:58712.3,u:"DH",tol:2}],
model:`| Élément | Montant |
|---|---|
| Salaire de base | 250 000 |
| Prime d'ancienneté | 12 500 |
| Prime de rendement | 11 200 |
| Prime de logement (indemnité en argent, imposable) | 24 400 |
| Frais de déplacement justifiés | exonérés |
| Allocations familiales | exonérées |
| **Salaire brut imposable (SBI)** | **298 100** |
| Frais professionnels : 25 % × 298 100 = 74 525, **plafonnés à 35 000** | − 35 000 |
| Revenu net avant intérêts | 263 100 |
| Intérêts du prêt logement principal : 3 600 × 12 = 43 200, limités à **10 % du revenu global imposable** (10 % × 263 100) | − 26 310 |
| **Revenu net imposable (RNI)** | **236 790** |
IR brut = 236 790 × 37 % − 27 400 = 60 212,30
Réduction pour charges de famille : épouse + 2 enfants (moins de 27 ans) = 3 × 500 = − 1 500 (plafond 3 000)
**IR retenu à la source = ==58 712,30 DH==**`,
kp:["Exonération des frais justifiés et des allocations familiales ; prime de logement imposable","SBI 298 100","Frais professionnels 25 % plafonnés à 35 000","Intérêts déductibles limités à 10 % du revenu (26 310)","RNI 236 790 ; IR brut 60 212,30","Charges de famille 3 × 500 = 1 500 → IR 58 712,30"]},
{pts:2, q:"Sachant que M. Farid a encaissé en 2025 le montant de 35 000 DH au titre de la location d'un appartement nu, calculer l'IR dû sur son revenu global ainsi que le montant de l'IR à payer le cas échéant.",
chk:[{l:"IR sur les revenus fonciers (à payer)",v:3500,u:"DH",alt:[6993]}],
model:`Depuis 2019, les **revenus fonciers** ne sont plus agrégés au revenu global : ils supportent l'IR au **taux libératoire de 10 %** lorsque le montant brut annuel est inférieur à 120 000 DH (15 % au-delà), après exonération des loyers bruts n'excédant pas 30 000 DH par an.
- Loyers bruts 35 000 DH > 30 000 DH → imposables ; 35 000 < 120 000 → taux de 10 %.
- IR foncier = 35 000 × 10 % = ==3 500 DH== : le locataire étant un particulier (pas de retenue à la source), M. Farid le verse spontanément (déclaration avant fin février 2026).
**IR total de M. Farid au titre de 2025** = 58 712,30 (salaires, déjà retenus) + 3 500 (fonciers) = **62 212,30 DH** ; **IR restant à payer : 3 500 DH**.
> Ancien régime (agrégation avec abattement de 40 %) : RNI = 263 100 + 21 000 − 28 410 = 255 690 → IR = 255 690 × 37 % − 27 400 − 1 500 = 65 705,30 → complément à payer ≈ 6 993 DH. Accepté si l'on suppose que l'énoncé attend l'agrégation au revenu global.`,
kp:["Loyers > 30 000 DH : imposables","Taux libératoire 10 % (montant < 120 000) = 3 500","Non agrégés au revenu global ; versement spontané par le bailleur","IR total 62 212,30 et reste à payer 3 500"]}
]},
{title:"Droit fiscal — TVA : société SBS (mars 2025)", pts:6, pages:[414,414], th:["df-tva"],
ctx:`La société SBS a enregistré au cours du mois de mars 2025 les opérations suivantes :
- CA encaissé au titre des opérations exonérées avec droit à déduction : 3 600 000 DH
- CA encaissé au titre des opérations exonérées sans droit à déduction : 400 000 DH
- CA encaissé au titre des opérations taxables : 960 000 DH TTC (taux de 20 %)
- CA encaissé au titre des opérations hors champ d'application de la TVA : 200 000 DH
- Facture IAM d'un montant de 7 200 DH payée par virement daté du 28/02/2025 et débité au niveau du relevé bancaire du mois de mars 2025
- Importation payée le 13 février 2025, débitée sur le relevé bancaire du mois d'avril 2025, dont la quittance de paiement des droits de douane est datée de mars 2025. Le montant de la TVA s'élève à 60 000 DH.
- Achat de matière première pour 24 000 DH TTC payé par traite acceptée le 12/12/2024 à échéance le 28/02/2025. Cette traite a été débitée au niveau du relevé bancaire le 2 mars 2025.
**Informations supplémentaires** — déclarations de TVA 2024 :
| Opérations 2024 | Montant (DH) |
|---|---|
| Ventes HT soumises à TVA de 20 % | 12 000 000 |
| Ventes effectuées sous le régime suspensif | 3 000 000 |
| Ventes exonérées sans droit à déduction | 1 000 000 |
| Ventes exonérées avec droit à déduction | 3 500 000 |`,
questions:[
{pts:6, q:"Préparer la déclaration TVA du mois de mars 2025.",
chk:[{l:"Prorata de déduction (en %)",v:95.43,u:"%",tol:0.6,alt:[94.87]},{l:"TVA collectée",v:160000,u:"DH"},{l:"TVA déductible après prorata",v:62223,u:"DH",tol:400},{l:"TVA due au titre de mars",v:97777,u:"DH",tol:400}],
model:`#### 1. Régime et prorata
- CA 2024 > 1 000 000 DH → **déclaration mensuelle** ; la société réalise des opérations sans droit à déduction → c'est un **assujetti partiel** : la TVA déductible est affectée d'un **prorata**.
- En cours d'année, on applique le **prorata de l'année précédente** (régularisé en fin d'année sur le prorata définitif 2025).
| Prorata 2024 | Numérateur | Dénominateur |
|---|---|---|
| Ventes taxables TTC (12 000 000 × 1,2) | 14 400 000 | 14 400 000 |
| Régime suspensif | 3 000 000 | 3 000 000 |
| Exonérées avec droit à déduction | 3 500 000 | 3 500 000 |
| Exonérées sans droit à déduction | | 1 000 000 |
| **Total** | **20 900 000** | **21 900 000** |
Prorata = 20 900 000 / 21 900 000 = ==95,43 %== (le numérateur se calcule **TVA comprise** ; calculé HT : 94,87 %).
#### 2. TVA collectée (régime de l'encaissement)
- Opérations taxables : 960 000 × 20/120 = **160 000 DH**
- Exonérées (avec ou sans droit) et hors champ : pas de TVA.
#### 3. TVA déductible de mars
Le droit à déduction naît le **mois du paiement** de la facture ou le **mois de la quittance de douane** pour les importations.
| Opération | TVA | Mois de déduction |
|---|---|---|
| Facture IAM 7 200 TTC (20 %) | 1 200 | Mars : paiement effectif (débit bancaire) en mars |
| Importation | 60 000 | Mars : quittance de douane datée de mars (peu importe le débit d'avril) |
| Matières 24 000 TTC payées par traite | 4 000 | Mars : traite effectivement payée (débitée) le 2 mars |
| **Total avant prorata** | **65 200** | |
TVA déductible = 65 200 × 95,43 % = **62 223 DH**
#### 4. Déclaration de mars 2025 (à déposer avant fin avril 2025)
| | Montant |
|---|---|
| TVA collectée | 160 000 |
| TVA déductible (prorata 95,43 %) | − 62 223 |
| **TVA due** | **==97 777==** |
> Si l'on retient la date du virement (28/02) et l'échéance de la traite (28/02) comme dates de paiement, IAM et matières relèvent de la déclaration de **février** : déductible de mars = 60 000 × 95,43 % = 57 258 → TVA due 102 742 DH. Le corrigé retient la date du débit effectif, qui matérialise le paiement.`,
kp:["Régime mensuel et assujetti partiel → prorata","Prorata provisoire = prorata 2024 : numérateur TTC 20 900 000 / dénominateur 21 900 000 ≈ 95,43 %","Hors champ et exonérations sans droit : pas de TVA collectée","TVA collectée 160 000","Import : déduction le mois de la quittance de douane (mars)","IAM et traite : déduction au mois du paiement effectif","TVA déductible 65 200 × prorata ≈ 62 223 ; TVA due ≈ 97 777"]}
]}
]});

EXAMS.push({
id:"gest-2025", subject:"gest", year:2025, session:"25-26 octobre 2025", title:"Étude de cas de gestion", date:"Dimanche 26 octobre 2025", duration:300, pages:[415,418],
sections:[
{title:"Exercice 1 : Choix d'investissement (VAN) et emprunt indivis", pts:5, pages:[416,416], th:["g-invest","g-mathfi"],
ctx:`Une entreprise envisage un projet nécessitant un **investissement initial de 120 millions de DH**, amortissable linéairement sur **8 ans**. Le **BFR** supplémentaire est de **10 millions de DH**. La production annuelle est de **100 000 unités**. Les coûts variables sont de **600 DH/unité** et les charges fixes décaissables de **30 millions de DH** annuels. Le prix de vente est estimé à **1 400 DH**. La **valeur résiduelle** des équipements dans 8 ans est de **20 millions de DH**. Le coût du capital est de **9 %** et le taux d'IS de **30 %**.
1. Calculez la VAN du projet et concluez sur sa faisabilité.
2. Déterminez le prix de vente minimum pour que le projet soit acceptable.
Un **emprunt indivis** porte sur un montant nominal de **800 000 DH**. Le taux d'intérêt nominal est de **6 %** et l'échéance est de **5 ans**. Construisez le tableau d'amortissement complet de cet emprunt, en retenant la méthode d'amortissement par **annuités constantes**.`,
questions:[
{pts:2, q:"Calculez la VAN du projet et concluez sur sa faisabilité.",
chk:[{l:"CAF annuelle",v:39.5,u:"M DH",tol:0.05},{l:"VAN",v:100.67,u:"M DH",tol:0.3,alt:[103.68]}],
model:`#### Flux annuels (en millions de DH)
| | Montant |
|---|---|
| Chiffre d'affaires : 100 000 × 1 400 | 140 |
| Coûts variables : 100 000 × 600 | − 60 |
| Charges fixes décaissables | − 30 |
| EBE | 50 |
| Dotation aux amortissements : 120 / 8 | − 15 |
| Résultat avant impôt | 35 |
| IS 30 % | − 10,5 |
| Résultat net | 24,5 |
| **CAF = résultat net + dotations** | **39,5** |
#### Flux de fin de projet (année 8)
- Récupération du BFR : + 10
- Valeur résiduelle nette d'impôt : le bien est totalement amorti, la cession dégage une plus-value imposable de 20 → 20 × (1 − 30 %) = **14**
#### VAN à 9 %
- Facteur d'actualisation d'une annuité de 8 ans : (1 − 1,09⁻⁸) / 0,09 = 5,53482 ; 1,09⁻⁸ = 0,50187
- VAN = − (120 + 10) + 39,5 × 5,53482 + (10 + 14) × 0,50187
- VAN = − 130 + 218,63 + 12,04 = ==+ 100,67 M DH==
**Conclusion** : VAN largement positive → le projet crée de la valeur au taux de 9 %, il est **rentable et réalisable** (sous réserve du financement et de la fiabilité des prévisions de prix et de volumes).
> Si l'on ne fiscalise pas la valeur résiduelle : VAN = − 130 + 218,63 + 30 × 0,50187 = 103,68 M DH.`,
kp:["Investissement initial = 120 + BFR 10","CAF annuelle = 39,5 M (résultat net 24,5 + dotation 15)","Récupération du BFR et valeur résiduelle nette d'IS en année 8","Actualisation correcte à 9 % sur 8 ans","VAN ≈ 100,7 M > 0 → projet rentable"]},
{pts:1, q:"Déterminez le prix de vente minimum pour que le projet soit acceptable.",
chk:[{l:"Prix de vente minimum",v:1140.16,u:"DH",tol:1.5,alt:[1132.39]}],
model:`Le prix minimum annule la VAN. Avec p le prix unitaire (en M DH) :
- CAF(p) = [0,1 × (p − 600) − 30 − 15] × 0,7 + 15 = 0,07 × (p − 600) − 16,5
- VAN = − 130 + 5,53482 × CAF + 12,04 = 0 ⇒ CAF = 117,955 / 5,53482 = 21,311 M
- 0,07 × (p − 600) = 21,311 + 16,5 = 37,811 ⇒ p − 600 = 540,16
- **Prix minimum ≈ ==1 140 DH==** (soit une marge de sécurité de 18,6 % par rapport au prix prévu de 1 400 DH).`,
kp:["Écrire la CAF en fonction du prix","Résoudre VAN = 0","Prix minimum ≈ 1 140 DH"]},
{pts:2, q:"Construisez le tableau d'amortissement complet de l'emprunt indivis (800 000 DH, 6 %, 5 ans, annuités constantes).",
chk:[{l:"Annuité constante",v:189917.12,u:"DH",tol:1}],
model:`Annuité : a = C × i / (1 − (1 + i)⁻ⁿ) = 800 000 × 0,06 / (1 − 1,06⁻⁵) = 48 000 / 0,252742 = ==189 917,12 DH==
| Année | Capital dû début | Intérêts (6 %) | Amortissement | Annuité | Capital dû fin |
|---|---|---|---|---|---|
| 1 | 800 000,00 | 48 000,00 | 141 917,12 | 189 917,12 | 658 082,88 |
| 2 | 658 082,88 | 39 484,97 | 150 432,15 | 189 917,12 | 507 650,73 |
| 3 | 507 650,73 | 30 459,04 | 159 458,08 | 189 917,12 | 348 192,66 |
| 4 | 348 192,66 | 20 891,56 | 169 025,56 | 189 917,12 | 179 167,09 |
| 5 | 179 167,09 | 10 750,03 | 179 167,09 | 189 917,12 | 0,00 |
| **Total** | | **149 585,60** | **800 000,00** | **949 585,60** | |
Contrôle : les amortissements forment une suite géométrique de raison 1,06 (141 917,12 × 1,06 = 150 432,15).`,
kp:["Formule de l'annuité constante","Annuité ≈ 189 917 DH","Intérêts sur capital restant dû, amortissement = annuité − intérêts","Dernier amortissement = capital restant dû (solde nul)"]}
]},
{title:"Exercice 2 : Budget de trésorerie (société MEDCOM)", pts:4, pages:[416,417], th:["g-tresorerie","g-budget"],
ctx:`Prévisions de la société MEDCOM pour les trois premiers mois de l'exercice N :
| | Janvier | Février | Mars |
|---|---|---|---|
| CA HT | 1 000 | 900 | 1 200 |
| Achats TTC | 400 | 600 | 500 |
| Salaires | 500 | 500 | 530 |
| Charges sociales | 200 | 200 | 212 |
| Autres charges HT soumises à la TVA | 20 | 20 | 20 |
| Autres charges HT non soumises à la TVA | 10 | 10 | 12 |
| Investissements HT | — | 200 | — |
| Cessions d'éléments d'actif HT | 50 | — | — |
- Les clients règlent à 30 jours fin de mois ;
- Les fournisseurs sont réglés 50 % au comptant et 50 % à 30 jours ;
- Taux de TVA de 20 %, réglable le mois suivant ;
- Les autres charges et les investissements sont réglés au comptant ;
- Postes du bilan au 31 décembre N-1 : créances clients 1 200 ; dettes fournisseurs 720 ; dettes fiscales et sociales 1 480 (dont TVA à payer 800 et charges sociales 680) ; trésorerie 80.
**Travail à faire** : établir le budget de trésorerie du premier trimestre N ; présenter les données bilantielles au 31 mars N.`,
questions:[
{pts:3, q:"Établir le budget de trésorerie relatif au premier trimestre N.",
chk:[{l:"TVA due au titre de janvier (payée en février)",v:139.33,u:"",tol:0.5},{l:"Trésorerie fin mars (hypothèses du corrigé)",v:-2279.33,u:"",tol:2}],
model:`**Hypothèses** : salaires payés le mois même, charges sociales le mois suivant (comme celles de décembre) ; la cession est soumise à la TVA et encaissée au comptant ; TVA due = collectée du mois − déductible du mois (achats, charges, investissements), payée le mois suivant.
#### Budget de TVA
| | Janvier | Février | Mars |
|---|---|---|---|
| TVA collectée sur ventes (20 %) | 200 | 180 | 240 |
| TVA collectée sur cession | 10 | | |
| TVA déductible sur achats (TTC × 20/120) | − 66,67 | − 100 | − 83,33 |
| TVA déductible sur autres charges | − 4 | − 4 | − 4 |
| TVA déductible sur investissement | | − 40 | |
| **TVA due** | **139,33** | **36** | **152,67** |
| Payée en | février | mars | avril (bilan) |
#### Budget de trésorerie
| | Janvier | Février | Mars |
|---|---|---|---|
| Créances clients N-1 | 1 200 | | |
| Ventes de janvier (1 200 TTC) | | 1 200 | |
| Ventes de février (1 080 TTC) | | | 1 080 |
| Cession d'actif (60 TTC) | 60 | | |
| **Total encaissements** | **1 260** | **1 200** | **1 080** |
| Dettes fournisseurs N-1 | 720 | | |
| Achats de janvier (400) | 200 | 200 | |
| Achats de février (600) | | 300 | 300 |
| Achats de mars (500) | | | 250 |
| Salaires | 500 | 500 | 530 |
| Charges sociales (du mois précédent) | 680 | 200 | 200 |
| Autres charges soumises à TVA (TTC) | 24 | 24 | 24 |
| Autres charges non soumises | 10 | 10 | 12 |
| Investissement (TTC) | | 240 | |
| TVA à payer | 800 | 139,33 | 36 |
| **Total décaissements** | **2 934** | **1 613,33** | **1 352** |
| Trésorerie début de mois | 80 | − 1 594 | − 2 007,33 |
| **Trésorerie fin de mois** | **− 1 594** | **− 2 007,33** | **==− 2 279,33==** |
**Commentaire** : la trésorerie est structurellement négative (décaissement de toutes les dettes N-1 en janvier, délai clients d'un mois) → négocier des concours bancaires (facilités de caisse, escompte, affacturage) ou réduire le délai clients.`,
kp:["Encaissements clients décalés d'un mois (30 j fin de mois)","Fournisseurs 50/50 et règlement des dettes N-1 en janvier","Budget de TVA (collectée − déductible), payée le mois suivant","Charges sociales payées le mois suivant","Soldes de trésorerie cumulés cohérents"]},
{pts:1, q:"Présenter les données bilantielles au 31 mars N.",
model:`| Actif (extrait) | | Passif (extrait) | |
|---|---|---|---|
| Créances clients (ventes de mars TTC) | 1 440 | Dettes fournisseurs (50 % des achats de mars) | 250 |
| Immobilisations : + 200 (investissement HT) | | État — TVA due de mars | 152,67 |
| | | Organismes sociaux (charges de mars) | 212 |
| | | Trésorerie passif (concours bancaires) | 2 279,33 |`,
kp:["Clients = ventes de mars TTC 1 440","Fournisseurs 250 ; TVA due 152,67 ; charges sociales 212","Trésorerie négative au passif (2 279,33)"]}
]},
{title:"Exercice 3 : Plan d'épargne logement", pts:3, pages:[417,417], th:["g-mathfi"],
ctx:`Vous disposez d'un capital initial de 50 000 et envisagez de souscrire à un plan d'épargne sur 5 ans afin de bénéficier, au terme de cette période, d'un prêt à taux réduit. Votre objectif consiste à réunir, au bout de 5 ans, une somme de **350 000** afin d'acquérir un logement.
| Caractéristiques du plan | |
|---|---|
| Dépôt à l'ouverture du livret | 50 000 |
| Versements mensuels (début de période) | m |
| Taux d'intérêt annuel | 5,158 % |
| Durée | 5 ans |
| Prime (à la clôture du plan) | 5/11 des intérêts acquis |
| Emprunt (à la clôture du plan) | 11,99 fois les intérêts acquis |
Quel doit être le versement m pour obtenir, au terme des 5 ans, la somme nécessaire à votre investissement immobilier de 350 000 ?`,
questions:[
{pts:3, q:"Calculer le versement mensuel m.",
chk:[{l:"Versement mensuel m",v:625.22,u:"",tol:1}],
model:`**Taux mensuel équivalent** : (1,05158)^(1/12) − 1 = **0,42 %** (le taux annuel a été choisi pour cela : 1,0042¹² = 1,05158).
Sur 60 mois : 1,0042⁶⁰ = 1,05158⁵ = 1,285917.
**Valeur acquise au bout de 5 ans**
- Dépôt initial : 50 000 × 1,285917 = 64 295,86 → intérêts 14 295,86
- Versements en début de mois : m × [(1,0042⁶⁰ − 1) / 0,0042] × 1,0042 = 68,3615 m → intérêts 8,3615 m
**Intérêts acquis** I = 14 295,86 + 8,3615 m
**Somme disponible** = versements + intérêts + prime + prêt = 50 000 + 60 m + I × (1 + 5/11 + 11,99)
Avec 1 + 5/11 + 11,99 = 13,4445 :
50 000 + 60 m + 13,4445 × (14 295,86 + 8,3615 m) = 350 000
50 000 + 192 199,6 + (60 + 112,416) m = 350 000 ⇒ 172,416 m = 107 800,4
**m ≈ ==625,22==**
Vérification : intérêts acquis ≈ 19 524 ; capital du livret ≈ 107 038 ; prime ≈ 8 874 ; prêt ≈ 234 087 ; total = 350 000.`,
kp:["Taux mensuel équivalent 0,42 % (taux proportionnel refusé)","Valeur acquise du dépôt initial et d'une suite de versements en début de période","Intérêts acquis = valeur acquise − sommes versées","Équation : versements + intérêts + prime 5/11 I + prêt 11,99 I = 350 000","m ≈ 625 par mois"]}
]},
{title:"Exercice 4 : Gestion de l'encaisse (Financia Express — modèle de Baumol)", pts:3, pages:[417,418], th:["g-stocks","g-tresorerie"],
ctx:`L'entreprise Financia Express, spécialisée dans les microcrédits, reçoit régulièrement des fonds de sa banque partenaire. Elle prévoit un besoin total de **7 200 000 MAD** pour l'année à venir. Chaque transfert de fonds coûte **800 MAD**, incluant les frais de sécurité et de traitement. Le coût d'opportunité lié à la détention de liquidités non utilisées est estimé à **12 % par an**.
a) Déterminez le montant optimal à transférer à chaque commande.
b) Calculez le coût total annuel associé à cette politique de commande optimale (coût de commande + coût de détention).
c) Si Financia Express est ouverte 300 jours par an, combien de jours en moyenne une commande permet-elle de couvrir ?`,
questions:[
{pts:1, q:"a) Montant optimal à transférer à chaque commande.",
chk:[{l:"Montant optimal C*",v:309838.67,u:"MAD",tol:50}],
model:`Modèle de **Baumol** (transposition de Wilson à la trésorerie) :
C* = √(2 × T × b / i) = √(2 × 7 200 000 × 800 / 0,12) = √96 000 000 000 ≈ ==309 839 MAD==
Nombre de transferts : 7 200 000 / 309 839 ≈ 23,24 par an.`,
kp:["Formule de Baumol C* = √(2Tb/i)","C* ≈ 309 839 MAD"]},
{pts:1, q:"b) Coût total annuel de la politique optimale.",
chk:[{l:"Coût total annuel",v:37180.64,u:"MAD",tol:20}],
model:`- Coût de commande : (T / C*) × b = 23,238 × 800 = 18 590,32
- Coût de détention : (C* / 2) × i = 154 919,33 × 12 % = 18 590,32
- **Coût total = ==37 180,64 MAD==** (à l'optimum, les deux coûts sont égaux).`,
kp:["Coût de commande ≈ 18 590","Coût de détention sur l'encaisse moyenne C*/2 ≈ 18 590","Total ≈ 37 181 ; égalité des deux coûts à l'optimum"]},
{pts:1, q:"c) Nombre moyen de jours couverts par une commande (300 jours d'ouverture).",
chk:[{l:"Jours couverts par un transfert",v:12.91,u:"jours",tol:0.15}],
model:`300 / 23,238 ≈ ==12,9 jours== (environ 13 jours) — ou 309 839 / (7 200 000 / 300) = 309 839 / 24 000 = 12,9 jours.`,
kp:["Durée = 300 / nombre de transferts ≈ 12,9 jours"]}
]},
{title:"Exercice 5 : Statistique descriptive (accidents par jour)", pts:3, pages:[418,418], th:["g-stats"],
ctx:`Dans une grande entreprise produisant du matériel de cuisine pour grande restauration, on a enregistré le nombre d'accidents par jour pendant **50 jours** :
| | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|
| 0 | 1 | 1 | 0 | 3 | 1 | 0 | 0 | 1 | 0 |
| 0 | 4 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 1 |
| 3 | 0 | 2 | 0 | 2 | 1 | 0 | 1 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 | 2 | 2 | 0 | 0 |
| 2 | 1 | 0 | 1 | 2 | 1 | 0 | 1 | 3 | 1 |`,
questions:[
{pts:0.5, q:"1) Quelle est la nature de la variable statistique étudiée ?",
model:`Le nombre d'accidents par jour est une **variable quantitative discrète** (elle ne prend que des valeurs entières isolées : 0, 1, 2, 3, 4). Population : les 50 jours observés ; individu : un jour.`,
kp:["Variable quantitative discrète"]},
{pts:0.5, q:"2) Dresser un tableau résumant les modalités de la série avec les effectifs correspondants.",
model:`| Nombre d'accidents xᵢ | 0 | 1 | 2 | 3 | 4 | Total |
|---|---|---|---|---|---|---|
| Effectif nᵢ | 21 | 18 | 7 | 3 | 1 | 50 |
| Fréquence | 42 % | 36 % | 14 % | 6 % | 2 % | 100 % |
| nᵢ xᵢ | 0 | 18 | 14 | 9 | 4 | 45 |
| nᵢ xᵢ² | 0 | 18 | 28 | 27 | 16 | 89 |`,
kp:["Effectifs 21 / 18 / 7 / 3 / 1 (total 50)"]},
{pts:2, q:"3) Déterminer : a) la moyenne ; b) l'étendue (interpréter) ; c) l'écart type (interpréter).",
chk:[{l:"Moyenne",v:0.9,u:"accident/jour",tol:0.005},{l:"Étendue",v:4,u:""},{l:"Écart type",v:0.985,u:"",tol:0.006}],
model:`a) **Moyenne** : x̄ = 45 / 50 = ==0,9 accident par jour==.
b) **Étendue** = 4 − 0 = ==4== : le nombre d'accidents varie de 0 à 4 par jour. Indicateur simple mais sensible aux valeurs extrêmes (un seul jour à 4 accidents).
c) **Variance** = Σnᵢxᵢ² / N − x̄² = 89 / 50 − 0,81 = 1,78 − 0,81 = 0,97 ; **écart type** = √0,97 ≈ ==0,985==.
Interprétation : en moyenne, le nombre quotidien d'accidents s'écarte d'environ 1 accident de la moyenne de 0,9. La dispersion est forte relativement à la moyenne (coefficient de variation ≈ 109 %) : la sécurité est irrégulière d'un jour à l'autre, avec 42 % de jours sans accident mais 20 % de jours à 2 accidents ou plus. (Moyenne ≈ variance : profil proche d'une loi de Poisson, accidents rares et indépendants.)`,
kp:["Moyenne 0,9","Étendue 4 et interprétation (sensibilité aux extrêmes)","Variance 0,97 par la formule de König","Écart type ≈ 0,985 et interprétation de la dispersion"]}
]},
{title:"Exercice 6 : Loi binomiale et approximation (sinistres)", pts:2, pages:[418,418], th:["g-probas"],
ctx:`Une compagnie d'assurance constate que chaque année **0,4 %** de ses assurés déclarent un sinistre nécessitant un dédommagement. Posons X le nombre de sinistres à payer au cours d'une année dans laquelle la compagnie gère **100 000 dossiers**.
1. Déterminez la loi exacte de la variable aléatoire X et déduisez la probabilité pour que la compagnie n'ait pas de sinistre à payer. (1 point)
2. En utilisant une approximation adéquate, déterminez la probabilité que la compagnie payera plus de 440 sinistres. (1 point)`,
questions:[
{pts:1, q:"1. Loi exacte de X et probabilité de n'avoir aucun sinistre.",
model:`Chaque dossier est une épreuve de Bernoulli (sinistre avec p = 0,004), les dossiers étant supposés indépendants : **X ~ B(n = 100 000 ; p = 0,004)**.
P(X = 0) = (1 − 0,004)^100 000 = 0,996^100 000 = e^(100 000 × ln 0,996) ≈ e^(−400,8) ≈ **10⁻¹⁷⁴ ≈ 0** : il est pratiquement certain que la compagnie aura des sinistres à payer.`,
kp:["X suit une loi binomiale B(100 000 ; 0,004)","P(X = 0) = 0,996^100 000 ≈ 0"]},
{pts:1, q:"2. Probabilité de payer plus de 440 sinistres (approximation).",
chk:[{l:"P(X > 440)",v:0.0212,u:"",tol:0.0015,alt:[0.0225]}],
model:`n grand, np = 400 > 20 (et npq = 398,4) → **approximation par la loi normale** N(μ = 400 ; σ = √398,4 = 19,96).
Avec correction de continuité : P(X > 440) = P(X ≥ 441) ≈ P(Z > (440,5 − 400) / 19,96) = P(Z > 2,03) = 1 − 0,9788 ≈ ==0,021== (2,1 %).
Sans correction : P(Z > 2,00) ≈ 0,0228.
> La loi de Poisson P(400) est aussi une approximation possible (n grand, p petit), mais avec λ = 400 on l'approche à son tour par la loi normale N(400 ; 20).`,
kp:["Choix justifié de l'approximation normale (np et npq grands)","μ = 400 et σ ≈ 19,96","P(X > 440) ≈ 0,02"]}
]}
]});

EXAMS.push({
id:"tec-2025", subject:"tec", year:2025, session:"25-26 octobre 2025", title:"Techniques d'expression et de communication", date:"Dimanche 26 octobre 2025", duration:120, pages:[419,420],
sections:[
{title:"Texte : « Et si votre carrière devait se gérer comme une startup ! »", pts:20, pages:[420,420], th:["tec-questions","tec-dissertation","tec-com"],
ctx:`**Et si votre carrière devait se gérer comme une startup !**
Dans « The Start-Up of You », Reid Hoffman et Ben Casnocha proposent une approche innovante pour façonner sa carrière en s'inspirant des principes qui régissent le monde des startups. Selon les auteurs, chacun doit désormais envisager son parcours professionnel comme une entreprise en devenir, où l'adaptabilité, la prise de risque calculée et l'innovation permanente sont essentielles pour réussir.
L'ouvrage souligne l'importance d'adopter une mentalité entrepreneuriale, en identifiant ses atouts distinctifs et en saisissant les opportunités avec agilité. Le développement d'un réseau relationnel solide et diversifié y est présenté comme un levier crucial pour accéder à des ressources et des opportunités. De plus, les auteurs encouragent une stratégie d'adaptation constante, invitant le lecteur à rester ouvert aux changements et à pivoter si nécessaire, tout en investissant continuellement en soi-même par l'apprentissage et la construction d'une marque personnelle.
Destiné aux jeunes professionnels, aux étudiants et à toute personne souhaitant repenser sa carrière dans un environnement économique incertain, « The Start-Up of You » invite à une démarche proactive et stratégique, empruntant l'état d'esprit et les méthodes qui ont propulsé les startups technologiques vers le succès.
**Barème** : question 1 : 5 points ; question 2 : 5 points ; question 3 : 10 points.`,
questions:[
{pts:5, q:"1. Qu'est-ce qu'une marque personnelle ?",
model:`**Définition** : la marque personnelle (*personal branding*) est l'**image professionnelle singulière** qu'une personne construit et projette auprès de ses publics (employeurs, clients, pairs) : l'ensemble de ses compétences, de ses valeurs, de sa personnalité et de sa réputation, tel qu'il est **perçu** par les autres. On la résume souvent par la formule : « ce que les gens disent de vous quand vous n'êtes pas dans la pièce ».
**Ses composantes**
- **Identité** : savoir-faire, expertise, valeurs, traits de personnalité ;
- **Positionnement** : ce qui distingue la personne, sa **proposition de valeur** (« pourquoi faire appel à moi plutôt qu'à un autre ? ») ;
- **Visibilité** : présence en ligne (LinkedIn, publications) et hors ligne (événements, associations, conférences) ;
- **Crédibilité et cohérence** : réalisations, recommandations, constance entre le discours et les actes.
**Enjeu** : dans un marché du travail incertain, la marque personnelle joue le rôle de la marque d'un produit : elle crée de la **confiance**, de la **notoriété** et attire les opportunités. Elle doit rester **authentique** : une image fabriquée et non fondée sur une compétence réelle finit par se retourner contre son auteur.`,
kp:["Définition : image/réputation professionnelle construite et perçue par les autres","Composantes : identité (compétences, valeurs), positionnement / proposition de valeur","Visibilité et réseau, crédibilité et cohérence","Analogie avec la marque commerciale et exigence d'authenticité"]},
{pts:5, q:"2. Comment peut-on la créer ?",
model:`Une démarche en cinq temps, comparable au lancement d'une marque :
1. **Se connaître (diagnostic)** : faire l'inventaire de ses compétences, réalisations, valeurs et passions ; bilan type SWOT personnel ; recueillir l'avis de son entourage professionnel.
2. **Se positionner** : choisir ses cibles (secteur, métier, recruteurs) et formuler sa **proposition de valeur** en une phrase (*pitch*) : par exemple, « futur expert-comptable spécialisé dans l'accompagnement financier des PME exportatrices ».
3. **Construire des supports cohérents** : CV, profil LinkedIn complet (photo, titre, résumé), signature, tenue, discours ; même message partout.
4. **Se rendre visible et prouver sa valeur** : partager son expertise (articles, publications, interventions), s'engager dans des associations professionnelles ou d'anciens élèves, obtenir des recommandations, réaliser des projets concrets.
5. **Entretenir et faire évoluer** : développer et animer son **réseau** (mentors, pairs), se former en continu (certifications), surveiller son e-réputation, ajuster son positionnement selon les retours.
> Règles d'or : **authenticité**, **cohérence** et **régularité** ; la marque se construit sur des preuves, pas sur des slogans.`,
kp:["Diagnostic de soi (compétences, valeurs, SWOT)","Positionnement : cible et proposition de valeur / pitch","Supports cohérents (CV, LinkedIn…)","Visibilité : contenus, réseau, engagement associatif, recommandations","Entretien : formation continue, e-réputation, authenticité et cohérence"]},
{pts:10, q:"3. Citez les points de similitude entre la gestion de startup et la gestion de carrière.",
model:`**Introduction** — Hoffman et Casnocha (*The Start-Up of You*, 2012) partent d'un constat : l'emploi à vie et les carrières linéaires ont disparu ; dans un environnement incertain, chacun doit piloter sa carrière comme un entrepreneur pilote sa startup. **En quoi la gestion d'une carrière ressemble-t-elle à celle d'une startup ?** Les similitudes portent sur la stratégie (I), sur les ressources (II) et sur la manière de gérer l'incertitude (III).
#### I. Une même démarche stratégique
- **Avantage concurrentiel** : une startup se différencie par une proposition de valeur unique ; un professionnel combine ses **atouts** (compétences), ses **aspirations** et les **réalités du marché** pour se distinguer.
- **Vision et plan** : la startup a une vision mais un plan évolutif ; les auteurs proposent le **plan ABZ** : plan A (la voie actuelle), plan B (le pivot vers un domaine proche), plan Z (le repli de sécurité).
- **Marque** : la startup construit sa marque, l'individu sa **marque personnelle**.
#### II. Une même logique de ressources
- **Réseau = capital** : une startup s'appuie sur des investisseurs, partenaires, mentors ; une carrière progresse grâce au réseau relationnel (« les opportunités viennent des personnes »), aux alliances professionnelles et à la réputation.
- **Investissement continu (R&D)** : la startup investit dans l'innovation ; le professionnel investit **en lui-même** par l'apprentissage permanent (diplômes, certifications, langues, numérique).
- **Ressources rares et agilité** : peu de moyens, beaucoup de débrouillardise ; il faut prioriser et saisir vite les opportunités.
#### III. Une même gestion de l'incertitude
- **Prise de risque calculée** : expérimenter à petite échelle (projet parallèle, mission, mobilité) comme un produit minimum viable, en limitant la perte possible.
- **Pivot** : changer de cap à partir des retours du marché, comme la startup qui réoriente son modèle.
- **« Bêta permanente »** : ne jamais se considérer comme un produit fini ; mesurer, recueillir les retours, s'améliorer en continu.
#### Limites de l'analogie
Une personne n'est pas une entreprise : la carrière engage aussi des **valeurs**, l'équilibre de vie, la santé, les liens sociaux ; tout le monde n'a pas le même accès au réseau ni la même tolérance au risque ; la logique de « marque » peut pousser à l'**auto-promotion** au détriment du fond. Le modèle startup est un **outil** de pilotage, pas une fin.
**Conclusion** — Penser sa carrière comme une startup, c'est adopter un état d'esprit proactif : se différencier, s'appuyer sur son réseau, apprendre en continu et oser pivoter. Pour un futur expert-comptable, cela signifie par exemple développer une spécialité (audit, fiscalité, conseil numérique), cultiver son réseau professionnel et se former tout au long de sa carrière.`,
kp:["Introduction avec contexte (fin des carrières linéaires), problématique et plan annoncé","Stratégie : avantage concurrentiel (atouts + aspirations + marché), vision","Plan ABZ / capacité à pivoter","Réseau comme capital (investisseurs ↔ mentors, alliances)","Investissement en soi = R&D : apprentissage continu","Prise de risque calculée, expérimentation, « bêta permanente »","Marque personnelle ↔ marque de la startup","Limites de l'analogie (valeurs, équilibre, inégalités, risque d'auto-promotion)","Conclusion ouverte (application à la profession comptable)","Expression : plan clair, transitions, orthographe et vocabulaire précis"]}
]}
]});
