/* Session 2020 (épreuves passées les 20-21 mars 2021) */
EXAMS.push({
id:"cpt-2020", subject:"cpt", year:2020, session:"20-21 mars 2021", title:"Comptabilité générale et analytique", date:"Samedi 20 mars 2021", duration:300, pages:[306,310],
note:"Comptabilité générale /20 (5 dossiers) et comptabilité analytique /20 (5 dossiers)",
sections:[
{title:"CG — Dossier 1 : Les normes IFRS", pts:4, pages:[307,307], th:["cg-eval","cg-conso"],
questions:[
{pts:4, q:"Quels sont les objectifs des normes IFRS, dans quels cas sont-elles utilisées au Maroc, et expliquez un principe comptable qui diverge entre les IFRS et le CGNC (10 lignes).",
model:`**Objectifs** : les IFRS (International Financial Reporting Standards, publiées par l'IASB) visent à produire une information financière **comparable** d'un pays à l'autre, **transparente** et **utile à la décision des investisseurs** (approche économique, primauté de la substance sur la forme, juste valeur), afin de faciliter l'accès aux marchés financiers internationaux.
**Utilisation au Maroc** :
- **obligatoire** pour les **comptes consolidés** des **établissements de crédit** (circulaire de Bank Al-Maghrib, depuis 2008) ;
- possible (option) pour les comptes consolidés des **sociétés cotées / faisant appel public à l'épargne** (circulaire de l'AMMC), qui peuvent choisir les IFRS ou les normes nationales de consolidation ;
- utilisées par les **filiales de groupes étrangers** pour le reporting à la maison mère.
Les **comptes sociaux** restent établis selon le **CGNC**.
**Exemple de divergence — le crédit-bail** : selon le CGNC, le bien pris en crédit-bail n'est **pas inscrit à l'actif** du preneur (la redevance est une charge, l'engagement figure dans l'ETIC) : primauté de la **forme juridique**. Selon IFRS 16, le preneur inscrit un **droit d'utilisation** à l'actif et une **dette locative** au passif, amortit le droit et comptabilise des intérêts : primauté de la **substance économique**.
(Autres exemples : évaluation à la juste valeur des instruments financiers selon IFRS 9 contre le coût historique et la prudence du CGNC ; frais d'établissement activables en CGNC mais en charges en IFRS.)`,
kp:["Objectifs : comparabilité, transparence, information des investisseurs (IASB)","Maroc : obligatoires pour les comptes consolidés des banques (BAM)","Option pour les consolidés des sociétés faisant appel public à l'épargne (AMMC) ; comptes sociaux en CGNC","Une divergence correctement expliquée (ex. crédit-bail IFRS 16 vs CGNC, juste valeur vs coût historique)"]}
]},
{title:"CG — Dossier 2 : Créances douteuses", pts:4, pages:[307,307], th:["cg-inventaire"],
ctx:`État des créances douteuses (TVA au taux normal de 20 %) :
| Clients | Créances TTC au 31/12/2019 | Provision au 31/12/2019 | Règlements 2020 | Observations |
|---|---|---|---|---|
| **Anciennes créances douteuses** | | | | |
| LSS | 120 000 | 25 % | 83 000 | Pour solde |
| GTX | 135 000 | 40 % | 50 000 | Porter la provision à 65 % du solde |
| ALEXY | 84 000 | 55 % | 15 000 | Porter la provision à 80 % du solde |
| **Nouvelles créances douteuses** | **Créances TTC 2020** | | | |
| KWT | 178 000 | — | — | On espère récupérer 70 % de la créance |
| HPZ | 144 000 | — | — | Créance irrécouvrable |
1. Précisez : les soldes des clients douteux et des provisions pour clients douteux au 31/12/2020 dans la balance avant inventaire ; le solde des clients douteux dans la balance après inventaire ; le montant des dotations et des reprises 2020 ; la provision pour dépréciation des clients au 31/12/2020 dans la balance après inventaire. 2. Passez au journal les écritures nécessaires au 31/12/2020.`,
questions:[
{pts:2, q:"1. Soldes avant et après inventaire, dotations, reprises et provision finale.",
chk:[{l:"Solde des clients douteux avant inventaire",v:191000,u:"DH"},{l:"Provisions avant inventaire",v:108500,u:"DH"},{l:"Clients douteux après inventaire",v:332000,u:"DH"},{l:"Dotations 2020",v:53041.67,u:"DH",tol:1},{l:"Reprises 2020",v:25000,u:"DH"},{l:"Provision après inventaire",v:136541.67,u:"DH",tol:1}],
model:`Les provisions se calculent sur le montant **hors taxes** de la créance (la TVA sera récupérée en cas de perte).
| Client | Solde TTC au 31/12/2020 | Solde HT | Provision nécessaire | Provision antérieure | Dotation | Reprise |
|---|---|---|---|---|---|---|
| LSS (soldé) | 0 (perte 37 000 TTC) | — | 0 | 25 000 (25 % × 100 000) | | 25 000 |
| GTX | 85 000 | 70 833,33 | 65 % → 46 041,67 | 45 000 (40 % × 112 500) | 1 041,67 | |
| ALEXY | 69 000 | 57 500 | 80 % → 46 000 | 38 500 (55 % × 70 000) | 7 500 | |
| KWT | 178 000 | 148 333,33 | 30 % → 44 500 | — | 44 500 | |
| HPZ | irrécouvrable : perte | — | — | — | | |
| **Total** | | | **136 541,67** | **108 500** | **53 041,67** | **25 000** |
- **Avant inventaire** : clients douteux = 37 000 + 85 000 + 69 000 = ==191 000== ; provisions = ==108 500==.
- **Après inventaire** : clients douteux = 85 000 + 69 000 + 178 000 = ==332 000== (LSS soldé, HPZ passé en perte).
- **Dotations** = ==53 041,67== ; **reprises** = ==25 000== ; **provision finale** = ==136 541,67==.`,
kp:["Provisions calculées sur le HT","Soldes avant inventaire 191 000 et 108 500","Clients douteux après inventaire 332 000 (KWT reclassé, LSS soldé, HPZ en perte)","Ajustements : GTX + 1 041,67 ; ALEXY + 7 500 ; KWT 44 500 ; reprise LSS 25 000","Provision finale 136 541,67"]},
{pts:2, q:"2. Écritures au 31/12/2020.",
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **LSS** | **Perte sur la partie non recouvrée (37 000 TTC)** | | |
| 6182 | Pertes sur créances irrécouvrables | 30 833,33 | |
| 4455 | État — TVA facturée | 6 166,67 | |
| 3424 | Clients douteux ou litigieux | | 37 000,00 |
| 3942 | Provisions pour dépréciation des clients | 25 000,00 | |
| 7196 | Reprises sur provisions pour dépréciation de l'actif circulant | | 25 000,00 |
| **GTX, ALEXY, KWT** | **Ajustements et nouvelle provision** | | |
| 3424 | Clients douteux ou litigieux (KWT) | 178 000,00 | |
| 3421 | Clients | | 178 000,00 |
| 6196 | Dotations d'exploitation aux provisions pour dépréciation de l'actif circulant | 53 041,67 | |
| 3942 | Provisions pour dépréciation des clients | | 53 041,67 |
| **HPZ** | **Créance irrécouvrable (144 000 TTC)** | | |
| 6182 | Pertes sur créances irrécouvrables | 120 000,00 | |
| 4455 | État — TVA facturée | 24 000,00 | |
| 3421 | Clients | | 144 000,00 |
(Détail de la dotation : GTX 1 041,67 ; ALEXY 7 500 ; KWT 44 500.)`,
kp:["Perte LSS (6182 HT + récupération de TVA) et reprise de 25 000","Reclassement de KWT en clients douteux","Dotation globale de 53 041,67","HPZ : perte directe avec récupération de la TVA (24 000)"]}
]},
{title:"CG — Dossier 3 : Subvention d'investissement et mise au rebut (ACTX)", pts:4, pages:[308,308], th:["cg-subv","cg-immo","cg-amort"],
ctx:`La société ACTX, spécialisée dans la fabrication de produits pharmaceutiques, avait acquis le **15 mars 2018** une machine qu'elle a mise en service le **1er avril 2018**, d'un montant de **1 000 000 DH HT** (TVA 20 %), **subventionnée à hauteur de 30 %** et amortissable sur **10 ans** selon le système linéaire. Le **30 septembre 2019**, cette machine tombe en panne et est **mise en rebut**.
1. Passez au journal les écritures au 31/12/2018. 2. Passez au journal les écritures au 31/12/2019.`,
questions:[
{pts:2, q:"1. Écritures au 31/12/2018.",
chk:[{l:"Dotation aux amortissements 2018",v:75000,u:"DH"},{l:"Reprise de subvention 2018",v:22500,u:"DH"}],
model:`Subvention : 30 % × 1 000 000 = **300 000** (bien amortissable → reprise au rythme de l'amortissement). Amortissement à partir de la mise en service (1er avril) : 9 mois en 2018.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 6193 | DEA des immobilisations corporelles | 75 000 | |
| 2833 | Amortissements des installations techniques, matériel et outillage | | 75 000 |
| 1319 | Subventions d'investissement inscrites au CPC | 22 500 | |
| 7577 | Reprises sur subventions d'investissement | | 22 500 |
Dotation = 1 000 000 × 10 % × 9/12 = 75 000 ; reprise = 300 000 × 10 % × 9/12 = 22 500. (Pour mémoire en cours d'année : acquisition 2332 + 34551 / 4481 et subvention 4481 ou 5141 / 1311.)`,
kp:["Subvention de 300 000 reprise au rythme de l'amortissement","Prorata de 9 mois (mise en service le 1er avril)","Dotation 75 000 et reprise 22 500 (1319 / 7577)"]},
{pts:2, q:"2. Écritures au 31/12/2019 (mise au rebut le 30/09/2019).",
chk:[{l:"VNC de la machine mise au rebut",v:850000,u:"DH"},{l:"Reprise de subvention totale en 2019",v:277500,u:"DH"}],
model:`- Dotation complémentaire 2019 (01/01 → 30/09, 9 mois) : 75 000 ⇒ cumul 150 000 ⇒ **VNC = 850 000**.
- Subvention : reprise normale de 2019 (9 mois) 22 500, puis reprise du **solde** (300 000 − 22 500 − 22 500 = 255 000) car le bien sort de l'actif ⇒ **reprise totale 2019 = 277 500**.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 6193 | DEA des immobilisations corporelles | 75 000 | |
| 2833 | Amortissements du matériel | | 75 000 |
| 6513 | VNA des immobilisations corporelles cédées (mise au rebut) | 850 000 | |
| 2833 | Amortissements du matériel | 150 000 | |
| 2332 | Matériel et outillage | | 1 000 000 |
| 1319 | Subventions d'investissement inscrites au CPC | 277 500 | |
| 7577 | Reprises sur subventions d'investissement | | 277 500 |
| 1311 | Subventions d'investissement reçues | 300 000 | |
| 1319 | Subventions d'investissement inscrites au CPC | | 300 000 |
La dernière écriture solde les deux comptes de subvention (1319 a été débité au total de 22 500 + 277 500 = 300 000). Impact net sur le résultat 2019 : − 75 000 − 850 000 + 277 500 = − 647 500.
> TVA : la question de la régularisation de la TVA déduite (bien sorti avant 5 ans) peut être évoquée ; une destruction accidentelle dûment justifiée n'est en principe pas assimilée à une cession.`,
kp:["Dotation complémentaire 75 000 (9 mois en 2019)","Sortie de l'actif : 6513 850 000 + 2833 150 000 / 2332","Reprise de subvention normale 22 500 + solde 255 000 = 277 500","Solde des comptes 1311 / 1319"]}
]},
{title:"CG — Dossier 4 : Écritures de fin d'exercice (LSS)", pts:4, pages:[308,308], th:["cg-inventaire","cg-amort","cg-capital"],
ctx:`La société LSS a relevé, au 31/12/2020, les faits suivants :
- L'entreprise est en litige avec un salarié ; l'indemnité est estimée à **67 000 DH** ;
- Le fonds commercial s'est déprécié d'un montant estimé à **500 000 DH** à la suite d'événements exceptionnels ;
- Les frais d'augmentation de capital réalisés le **1er juillet 2020** sont à répartir sur **3 ans** ;
- Une provision de **250 000 DH** avait été constituée à l'inventaire précédent pour **amende fiscale**. Elle a été payée en août 2020 pour un montant de **200 000 DH**.
Passez au journal les écritures nécessaires.`,
questions:[
{pts:4, q:"Passez au journal les écritures nécessaires au 31/12/2020.",
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **Litige salarié** | | | |
| 6195 | Dotations d'exploitation aux provisions pour risques et charges | 67 000 | |
| 1511 | Provisions pour litiges | | 67 000 |
| **Dépréciation exceptionnelle du fonds commercial** | | | |
| 6596 | Dotations non courantes aux provisions pour dépréciation | 500 000 | |
| 2920 | Provisions pour dépréciation des immobilisations incorporelles | | 500 000 |
| **Frais d'augmentation de capital (montant F)** | | | |
| 2113 | Frais d'augmentation du capital | F | |
| 7197 | Transferts de charges d'exploitation | | F |
| 6191 | DEA de l'immobilisation en non-valeur | F/3 | |
| 28113 | Amortissements des frais d'augmentation du capital | | F/3 |
| **Amende fiscale payée (200 000)** | | | |
| 1518 | Autres provisions pour risques | 250 000 | |
| 7595 | Reprises non courantes sur provisions pour risques | | 250 000 |
Commentaires :
- Le montant des frais d'augmentation de capital n'est pas donné : on les sort des charges par **transfert de charges** et on les amortit sur 3 ans (dotation annuelle F/3 ; le prorata de 6/12 est aussi admis). Ils peuvent aussi être **imputés sur la prime d'émission** si elle existe.
- L'amende (6583, 200 000) a été comptabilisée lors du paiement en août ; la provision de 250 000, devenue sans objet, est **reprise en totalité** (le trop provisionné de 50 000 apparaît donc en produit net).
- Fiscalement, la provision pour amende n'était pas déductible (réintégrée en 2019) : la reprise de 2020 est **déduite** extra-comptablement, et l'amende de 200 000 est **réintégrée**.`,
kp:["Provision pour litige salarié 67 000 (6195 / 1511)","Dépréciation exceptionnelle du fonds : 6596 / 2920 pour 500 000","Frais d'augmentation de capital : transfert à l'actif (2113 / 7197) et amortissement sur 3 ans","Reprise de la provision pour amende 250 000 (7595), l'amende payée étant en charge","Remarque fiscale (amende non déductible, reprise déduite)"]}
]},
{title:"CG — Dossier 5 : Utilité de l'ESG", pts:4, pages:[308,308], th:["cg-etats","g-analyse"],
questions:[
{pts:4, q:"Expliquez succinctement (en 10 lignes environ) l'utilité des informations financières contenues dans l'ESG.",
model:`L'**État des soldes de gestion (ESG)**, document du modèle normal du CGNC, comprend deux tableaux :
1. **Le tableau de formation des résultats (TFR)** : il décompose le résultat en **soldes intermédiaires** — marge brute sur ventes en l'état, production de l'exercice, consommation de l'exercice, **valeur ajoutée**, **excédent brut d'exploitation (EBE)**, résultat d'exploitation, résultat financier, résultat courant, résultat non courant, résultat net. Il permet de comprendre **comment** le résultat est obtenu : performance commerciale, efficacité productive, création de richesse (valeur ajoutée) et sa **répartition** (personnel, État, prêteurs, actionnaires), rentabilité économique indépendante des politiques de financement et d'amortissement (EBE).
2. **Le tableau de la capacité d'autofinancement (CAF) et de l'autofinancement** : il mesure les ressources internes dégagées par l'activité pour **financer** les investissements, rembourser les dettes et distribuer des dividendes.
**Utilité** : analyse de la **rentabilité** et de son évolution, **comparaisons** dans le temps et avec le secteur, calcul de ratios (taux de marge, VA / CA, EBE / CA, CAF / dettes), diagnostic de la capacité de remboursement pour les **banques**, base de la **prévision** et du pilotage pour les dirigeants.`,
kp:["Deux tableaux : TFR et CAF / autofinancement","Soldes intermédiaires (marge brute, VA, EBE, résultats courant et non courant)","Analyse de la formation et de la répartition de la valeur ajoutée","CAF : capacité de financement interne et de remboursement","Utilité pour dirigeants, banquiers, analystes (ratios, comparaisons)"]}
]},
{title:"CA — Dossier 1 : Répartition des charges fixes et résultats par produit", pts:4, pages:[309,309], th:["ca-couts","ca-variable"],
ctx:`Une société industrielle a, pendant une période, vendu **35 000 articles A** au prix unitaire de **80 DH** et **15 000 articles B** au prix unitaire de **160 DH**. Les charges fixes globales se sont élevées à **640 000 DH**. La part des charges variables unitaires est de **64 DH pour A** et de **128 DH pour B**.
Calculer le coût global, puis le coût unitaire de chacun des articles, dans chacun des trois cas suivants, la répartition des charges fixes étant faite : a) d'après le nombre des articles vendus ; b) proportionnellement au montant des ventes ; c) proportionnellement aux coûts variables globaux des produits vendus. Pour chaque cas, calculer le résultat net de la vente des articles A et de celle des articles B.`,
questions:[
{pts:4, q:"Coûts globaux, coûts unitaires et résultats de A et B selon les trois clés de répartition.",
chk:[{l:"Cas a) — résultat de A",v:112000,u:"DH"},{l:"Cas a) — résultat de B",v:288000,u:"DH"},{l:"Cas b) — résultat de A",v:215384.62,u:"DH",tol:2},{l:"Cas b) — résultat de B",v:184615.38,u:"DH",tol:2}],
model:`CA : A = 2 800 000 ; B = 2 400 000 ; total 5 200 000. CV : A = 2 240 000 ; B = 1 920 000 ; total 4 160 000. Résultat global = 5 200 000 − 4 160 000 − 640 000 = **400 000** (quelle que soit la clé).
| | Cas a) nombre d'articles | Cas b) chiffre d'affaires | Cas c) coûts variables |
|---|---|---|---|
| Clé A / B | 35 000 / 15 000 (70 % / 30 %) | 2,8 / 5,2 (53,85 %) | 2,24 / 4,16 (53,85 %) |
| CF imputées à A | 448 000 | 344 615,38 | 344 615,38 |
| CF imputées à B | 192 000 | 295 384,62 | 295 384,62 |
| Coût global A | 2 688 000 | 2 584 615,38 | 2 584 615,38 |
| Coût unitaire A | 76,80 | 73,85 | 73,85 |
| Coût global B | 2 112 000 | 2 215 384,62 | 2 215 384,62 |
| Coût unitaire B | 140,80 | 147,69 | 147,69 |
| **Résultat A** | **112 000** | **215 384,62** | **215 384,62** |
| **Résultat B** | **288 000** | **184 615,38** | **184 615,38** |
- Les cas b) et c) donnent le même résultat car le ratio CV / prix est identique (80 %) pour les deux produits.
- **Enseignement** : la répartition des charges fixes communes est **arbitraire** ; le classement des produits change selon la clé. Seule la **marge sur coût variable** (A : 560 000 ; B : 480 000, soit 16 et 32 DH par unité, 20 % du CA chacun) est objective pour décider.`,
kp:["Clé a) : 12,80 DH par article → A 448 000 / B 192 000","Clé b) et c) identiques (CV = 80 % du prix pour les deux)","Coûts unitaires et résultats corrects pour chaque cas","Résultat global constant 400 000","Commentaire sur l'arbitraire de la répartition des charges fixes"]}
]},
{title:"CA — Dossier 2 : Coût complet (absorption) et coût variable : valorisation des stocks", pts:4, pages:[309,309], th:["ca-variable","ca-stocks"],
ctx:`Dans la méthode des coûts variables, les charges fixes n'entrent pas dans le calcul du montant des stocks. Au début de la période, le stock de produits finis est nul. Pendant la période, il a été fabriqué **100 000 unités** ayant entraîné : matières premières 1 602 000 DH ; main-d'œuvre directe 1 198 000 DH ; charges de fabrication 772 000 DH (dont variables 648 000 DH et fixes 124 000 DH). Il a été vendu **90 000 unités**.
1) Par la méthode d'absorption des charges de fabrication, déterminer le coût des produits finis vendus et celui des stocks en fin de période. 2) Par la méthode des coûts variables, évaluer le coût des produits finis vendus et le montant du stock en fin de période.`,
questions:[
{pts:4, q:"Coût des produits vendus et stock final selon l'absorption puis selon les coûts variables.",
chk:[{l:"Absorption — coût des produits vendus",v:3214800,u:"DH"},{l:"Absorption — stock final",v:357200,u:"DH"},{l:"Coûts variables — coût des produits vendus",v:3103200,u:"DH"},{l:"Coûts variables — stock final",v:344800,u:"DH"}],
model:`| | Absorption (coût complet) | Coûts variables |
|---|---|---|
| Coût de production total | 1 602 000 + 1 198 000 + 772 000 = 3 572 000 | 1 602 000 + 1 198 000 + 648 000 = 3 448 000 |
| Coût unitaire | 35,72 | 34,48 |
| **Coût des produits vendus (90 000)** | **3 214 800** | **3 103 200** |
| **Stock final (10 000)** | **357 200** | **344 800** |
| Charges fixes de la période | incorporées | 124 000 en charges de la période |
- En coûts variables, les 124 000 de charges fixes de fabrication sont **entièrement** charges de la période ; en absorption, 10 % d'entre elles (12 400) sont **stockées**.
- Le résultat est donc supérieur de **12 400 DH** avec la méthode d'absorption (écart = variation du stock × charges fixes unitaires : 10 000 × 1,24).`,
kp:["Coût unitaire complet 35,72 et variable 34,48","Absorption : CPV 3 214 800 et stock 357 200","Coûts variables : CPV 3 103 200 et stock 344 800","Écart de résultat 12 400 expliqué par les charges fixes stockées"]}
]},
{title:"CA — Dossier 3 : Résultat et seuil de rentabilité (produit X)", pts:4, pages:[310,310], th:["ca-variable","g-rentabilite"],
ctx:`Une entreprise vend **1 000 unités** par an d'un produit X au prix de **2 000 MAD** l'unité. Les charges variables nécessaires à la production de ces 1 000 unités s'élèvent à **1 538 000 MAD**. Les charges fixes de l'exercice s'élèvent à **339 000 MAD**.
1. Quel est le résultat de la période ? 2. Quel est le nombre d'articles que l'entreprise doit fabriquer et vendre pour atteindre le seuil de rentabilité ?`,
questions:[
{pts:4, q:"Résultat de la période et seuil de rentabilité en quantité.",
chk:[{l:"Résultat",v:123000,u:"MAD"},{l:"Seuil de rentabilité (unités, arrondi supérieur)",v:734,u:"unités"}],
model:`| | Montant |
|---|---|
| Chiffre d'affaires (1 000 × 2 000) | 2 000 000 |
| Charges variables | 1 538 000 |
| **Marge sur coût variable** | **462 000** (23,1 %) |
| Charges fixes | 339 000 |
| **Résultat** | **==123 000==** |
MCV unitaire = 462 DH ⇒ **seuil = 339 000 / 462 = 733,77 ⇒ ==734 unités==** (soit un CA de 1 467 532 DH). Marge de sécurité : 266 unités (26,6 % des ventes).`,
kp:["MCV 462 000 (462 par unité, taux 23,1 %)","Résultat 123 000","SR = 339 000 / 462 ≈ 733,8 → 734 unités","Seuil en valeur ≈ 1 467 532"]}
]},
{title:"CA — Dossier 4 : Imputation rationnelle et coût de sous-activité (produit P)", pts:4, pages:[310,310], th:["ca-ir"],
ctx:`Une usine a été conçue pour produire le produit P. La capacité de production normale est fixée à **10 000 unités par an**. Les charges variables correspondantes sont de **1 000 000 MAD**. Les charges fixes annuelles s'élèvent à **500 000 MAD**. Au cours de l'exercice N, l'entreprise n'a produit que **8 000 unités**.
1. Déterminer le coût total réel des 8 000 unités. 2. Déterminer le coefficient d'imputation rationnelle. 3. Déterminer le coût global des 8 000 unités produites, déterminé par la comptabilité analytique (IR). 4. Quel est le coût de la sous-activité ?`,
questions:[
{pts:4, q:"Coût réel, coefficient d'IR, coût en IR et coût de sous-activité.",
chk:[{l:"Coût total réel des 8 000 unités",v:1300000,u:"MAD"},{l:"Coefficient d'imputation rationnelle",v:0.8,u:"",tol:0.001},{l:"Coût global en IR",v:1200000,u:"MAD"},{l:"Coût de sous-activité",v:100000,u:"MAD"}],
model:`Coût variable unitaire : 1 000 000 / 10 000 = 100 MAD.
1. Coût réel = 8 000 × 100 + 500 000 = ==1 300 000== (162,50 par unité).
2. Coefficient d'IR = activité réelle / activité normale = 8 000 / 10 000 = ==0,8==.
3. Coût en IR = 800 000 + 500 000 × 0,8 = ==1 200 000== (150 par unité, coût stable quel que soit le volume).
4. Coût de sous-activité = 500 000 × (1 − 0,8) = ==100 000== (= 1 300 000 − 1 200 000) : coût du chômage de 20 % de la capacité, imputé au résultat de la période et non aux produits.`,
kp:["Coût variable unitaire 100","Coût réel 1 300 000","Coefficient 0,8","Coût IR 1 200 000 et sous-activité 100 000"]}
]},
{title:"CA — Dossier 5 : Écarts sur matières et charges d'atelier (SIFAC)", pts:4, pages:[310,310], th:["ca-ecarts"],
ctx:`La Sifac fabrique des enceintes acoustiques. Coût standard d'un boîtier pour une activité normale mensuelle de **4 400 heures** de travail : consommation d'agglomérés **1,10 m² par boîtier à 10,80 DH** ; charges d'atelier **330 000 DH par mois, dont 132 000 DH de charges fixes** ; temps de travail par boîtier : **2 heures**.
En janvier : production de **2 192 boîtiers** grâce à **4 050 heures** de travail ; charges d'atelier **324 000 DH** ; consommation de **2 400 m²** d'agglomérés à **10,74 DH** le m².
1. Déterminez les écarts globaux relatifs à la production constatée sur la consommation de matières et sur les charges d'atelier. 2. Donnez les composantes de ces écarts.`,
questions:[
{pts:2, q:"1. Écarts globaux sur matières et sur charges d'atelier.",
chk:[{l:"Écart global sur matières (+ = défavorable)",v:-264.96,u:"DH",tol:0.1},{l:"Écart global sur charges d'atelier",v:-4800,u:"DH"}],
model:`Production réelle : 2 192 boîtiers ⇒ standards adaptés : 2 192 × 1,10 = 2 411,2 m² ; 2 192 × 2 = 4 384 h.
Coût standard de l'heure d'atelier : 330 000 / 4 400 = **75 DH** (dont variable 198 000 / 4 400 = 45 et fixe 132 000 / 4 400 = 30).
| | Réel | Standard (2 192 boîtiers) | Écart global |
|---|---|---|---|
| Matières | 2 400 × 10,74 = 25 776,00 | 2 411,2 × 10,80 = 26 040,96 | **− 264,96 (F)** |
| Charges d'atelier | 324 000 | 4 384 × 75 = 328 800 | **− 4 800 (F)** |`,
kp:["Standards adaptés à 2 192 boîtiers (2 411,2 m², 4 384 h)","Coût de l'heure standard 75 (45 variable + 30 fixe)","Écart matières − 264,96 F","Écart atelier − 4 800 F"]},
{pts:2, q:"2. Composantes des écarts.",
chk:[{l:"Écart sur quantité de matières",v:-120.96,u:"DH",tol:0.1},{l:"Écart sur prix de matières",v:-144,u:"DH"},{l:"Écart sur budget (atelier)",v:9750,u:"DH"},{l:"Écart d'activité (atelier)",v:10500,u:"DH"},{l:"Écart de rendement (atelier)",v:-25050,u:"DH"}],
model:`#### Matières
- Écart sur quantité = (2 400 − 2 411,2) × 10,80 = **− 120,96 (F)** : légère économie de matière.
- Écart sur prix = (10,74 − 10,80) × 2 400 = **− 144 (F)**.
#### Charges d'atelier (analyse en trois écarts)
Budget flexible de l'activité réelle (4 050 h) = 4 050 × 45 + 132 000 = 314 250.
- **Écart sur budget** = 324 000 − 314 250 = **+ 9 750 (D)** : dépenses supérieures au budget de l'activité réelle.
- **Écart d'activité** = 314 250 − 4 050 × 75 = **+ 10 500 (D)** : sous-activité (4 050 h au lieu de 4 400 : 350 h × 30 DH de charges fixes non absorbées).
- **Écart de rendement** = (4 050 − 4 384) × 75 = **− 25 050 (F)** : le personnel a produit 2 192 boîtiers en 4 050 h au lieu de 4 384 h (bonne productivité).
Vérification : 9 750 + 10 500 − 25 050 = − 4 800.`,
kp:["Matières : quantité − 120,96 et prix − 144","Budget flexible 314 250","Écart sur budget + 9 750","Écart d'activité + 10 500","Écart de rendement − 25 050 et vérification de la somme"]}
]}
]});

EXAMS.push({
id:"droit-2020", subject:"droit", year:2020, session:"20-21 mars 2021", title:"Droit des affaires et droit fiscal", date:"Samedi 20 mars 2021", duration:180, pages:[311,314],
note:"Deux copies séparées : droit des affaires /20 et droit fiscal /20",
sections:[
{title:"Droit des affaires — Questions", pts:20, pages:[312,312], th:["da-organes","da-transfo","da-difficultes","da-constitution"],
questions:[
{pts:3, q:"1. Quels sont les droits et les obligations d'un administrateur de société anonyme ?",
model:`#### Droits
- **Information** : recevoir tous les documents et informations nécessaires à l'accomplissement de sa mission, en particulier avant chaque réunion du conseil.
- **Participation et vote** aux délibérations du conseil ; convocation possible du conseil à la demande d'un tiers des administrateurs.
- **Rémunération** : jetons de présence (fixés par l'AG) et rémunérations exceptionnelles pour missions confiées.
- Possibilité de siéger aux **comités** spécialisés (audit, rémunérations).
#### Obligations
- **Diligence** et assiduité ; **loyauté** envers la société (pas de concurrence déloyale, déclaration des conflits d'intérêts).
- **Discrétion / confidentialité** sur les informations à caractère confidentiel.
- Respect de la procédure des **conventions réglementées** (ne pas prendre part au vote sur une convention qui le concerne).
- Interdiction de contracter des **emprunts** auprès de la société ou de se faire consentir découvert, caution ou aval (pour les personnes physiques).
- **Responsabilité** civile (individuelle ou solidaire) pour infractions aux lois et statuts et fautes de gestion ; responsabilité **pénale** (abus de biens sociaux, distribution de dividendes fictifs, présentation de comptes infidèles…).`,
kp:["Droit à l'information et au vote","Rémunération (jetons de présence)","Devoirs de diligence, loyauté, confidentialité","Conventions réglementées et interdiction des emprunts/cautions","Responsabilité civile et pénale"]},
{pts:4, q:"2. Quelles sont les conditions de transformation d'une SARL en SA ?",
model:`- La SARL doit avoir **établi et fait approuver les bilans de ses deux premiers exercices** (sinon, un commissaire à la transformation se prononce sur la valeur de l'actif net).
- Les **capitaux propres** doivent être **au moins égaux au capital social**, et le capital doit atteindre le **minimum légal** de la SA (300 000 DH ; 3 000 000 DH en cas d'appel public à l'épargne).
- Le nombre d'associés doit répondre aux exigences de la SA (au moins 5 actionnaires, sauf dispositions permettant l'associé unique).
- **Rapport d'un commissaire à la transformation** (désigné à l'unanimité ou par le président du tribunal) sur la valeur des biens et les avantages particuliers, attestant que l'actif net est au moins égal au capital.
- **Décision** des associés aux conditions de **modification des statuts** de la SARL (majorité des 3/4 du capital) ; adoption des nouveaux statuts, nomination des organes de la SA et d'un commissaire aux comptes.
- **Publicité** (journal d'annonces légales, greffe, registre du commerce).
La transformation régulière **ne crée pas une personne morale nouvelle**.`,
kp:["Bilans des deux premiers exercices approuvés","Capitaux propres ≥ capital et minimum légal de la SA","Rapport du commissaire à la transformation","Décision aux conditions de modification des statuts et nomination des organes/CAC","Publicité ; continuité de la personne morale"]},
{pts:3, q:"3. Quelles sont les conséquences d'une convention réglementée non autorisée par le conseil d'administration ?",
model:`- **Nullité** : la convention conclue **sans autorisation préalable** du conseil **peut être annulée** si elle a eu des **conséquences dommageables** pour la société.
- **Prescription** de l'action en nullité : 3 ans à compter de la conclusion de la convention ou, si elle a été dissimulée, de sa révélation.
- **Couverture** possible de la nullité par un **vote de l'assemblée générale** intervenant sur un **rapport spécial du commissaire aux comptes** exposant les circonstances pour lesquelles la procédure d'autorisation n'a pas été suivie (l'intéressé ne prenant pas part au vote).
- **Responsabilité** : même en l'absence de nullité, les conséquences préjudiciables pour la société peuvent être mises à la charge de l'administrateur intéressé et, éventuellement, des autres administrateurs.`,
kp:["Nullité possible si conséquences dommageables","Prescription de 3 ans (dissimulation)","Couverture par vote de l'AG sur rapport spécial du CAC","Responsabilité de l'intéressé et des administrateurs"]},
{pts:3, q:"4. Conditions de capital et de nombre d'associés pour créer une SCS.",
model:`La **société en commandite simple** (loi 5-96) comprend **deux catégories d'associés** :
- un ou plusieurs **commandités**, qui ont le statut des associés en nom collectif : **commerçants**, responsables **indéfiniment et solidairement** des dettes sociales ;
- un ou plusieurs **commanditaires**, responsables seulement **à concurrence de leurs apports** et qui ne peuvent faire aucun acte de gestion externe.
Il faut donc **au moins deux associés** (un commandité et un commanditaire).
**Capital** : la loi **n'impose aucun capital minimum** ; il est librement fixé par les statuts. Les commanditaires ne peuvent pas apporter leur industrie (leur responsabilité étant limitée à leurs apports).`,
kp:["Deux catégories : commandités (indéfiniment et solidairement responsables, commerçants) et commanditaires (responsables à hauteur des apports)","Au moins 2 associés","Pas de capital minimum légal","Interdiction de gestion externe pour les commanditaires"]},
{pts:3, q:"5. Qu'est-ce qu'une procédure d'alerte ?",
model:`C'est un dispositif de **prévention des difficultés** (livre V du Code de commerce) qui permet de **détecter tôt** les faits de nature à compromettre la **continuité de l'exploitation** et d'obliger les dirigeants à y remédier.
- **Déclenchement** par le **commissaire aux comptes** (ou par tout associé) qui relève de tels faits.
- **Étapes** : 1) le CAC informe le **chef d'entreprise** et l'invite à y remédier ; 2) à défaut de réponse ou de mesures satisfaisantes, il demande que le **conseil d'administration** (ou l'assemblée) délibère ; 3) si la continuité reste compromise, l'**assemblée générale** est saisie sur rapport spécial ; 4) en dernier lieu, le CAC informe le **président du tribunal de commerce**, qui peut convoquer les dirigeants, désigner un **mandataire spécial** ou ouvrir une **conciliation**.
Elle est **confidentielle** et vise à éviter la cessation des paiements.`,
kp:["Objectif : prévention, continuité de l'exploitation","Déclenchée par le CAC ou un associé","Étapes graduées : dirigeant → conseil → assemblée → président du tribunal","Débouchés : mandataire spécial, conciliation ; confidentialité"]},
{pts:4, q:"6. Quels sont les différents types de fusion ? Quelle est la différence entre un apport partiel d'actif et une scission ?",
model:`#### Types de fusion
- **Fusion-absorption** : une société absorbante reçoit tout le patrimoine d'une ou plusieurs sociétés absorbées, qui **disparaissent** sans liquidation ; leurs associés reçoivent des titres de l'absorbante.
- **Fusion par création d'une société nouvelle** (fusion-réunion) : deux ou plusieurs sociétés disparaissent au profit d'une société nouvelle.
- Variantes : fusion **simplifiée** (absorption d'une filiale à 100 %, sans échange de titres ni commissaire à la fusion), fusion **renonciation**, fusion **transfrontalière**.
Effets communs : **transmission universelle du patrimoine**, dissolution sans liquidation, échange de droits sociaux.
#### Apport partiel d'actif vs scission
| | Apport partiel d'actif | Scission |
|---|---|---|
| Objet | Apport d'une **branche d'activité** (ou d'éléments) | Apport de **tout le patrimoine** à plusieurs sociétés |
| Sort de la société apporteuse | **Survit** | **Disparaît** (dissolution sans liquidation) |
| Bénéficiaire des titres reçus | La **société apporteuse** elle-même (qui devient holding / associée) | Les **associés** de la société scindée |
| Régime juridique | Régime des apports en nature, ou option pour le régime des scissions | Régime des fusions / scissions |`,
kp:["Fusion-absorption et fusion par création de société nouvelle","Transmission universelle du patrimoine, dissolution sans liquidation","Apport partiel : la société apporteuse survit et reçoit les titres","Scission : la société disparaît, ses associés reçoivent les titres"]}
]},
{title:"Droit fiscal — TVA : questions de cours", pts:6, pages:[313,313], th:["df-tva"],
questions:[
{pts:2, q:"Question 1-a : Quel est le fait générateur de la TVA collectée ?",
model:`Le fait générateur est constitué par l'**encaissement total ou partiel du prix** des marchandises, des travaux ou des services (art. 95 CGI). Le contribuable peut **opter** pour le régime des **débits** : le fait générateur est alors la **facturation** ou l'inscription en comptabilité de la créance.
Cas particuliers : **livraisons à soi-même** → livraison ou première utilisation ; opérations de compensation ou d'échange → réalisation de l'opération (vaut encaissement) ; **importation** → dédouanement.`,
kp:["Principe : encaissement","Option : régime des débits (facturation)","Cas particuliers : LASM, échange/compensation, importation"]},
{pts:2, q:"Question 1-b : Quand le droit à déduction naît-il pour la TVA sur les achats locaux et pour la TVA payée à l'importation ?",
model:`- **Achats locaux** : le droit à déduction prend naissance à l'expiration du **mois du paiement** (total ou partiel) des achats, travaux ou services (la règle du décalage d'un mois a été supprimée en 2014).
- **Importations** : il naît le mois de l'établissement de la **quittance de douane** (paiement de la TVA à l'importation).
- Le droit doit être exercé dans un **délai d'un an** à compter du mois (ou trimestre) de sa naissance.`,
kp:["Achats locaux : mois du paiement","Importations : mois de la quittance de douane","Délai d'exercice d'un an"]},
{pts:2, q:"Question 2 : Définir l'exonération de TVA avec droit à déduction et celle sans droit à déduction.",
model:`- **Exonération sans droit à déduction** (art. 91) : l'opération n'est pas taxée, mais l'entreprise **ne peut pas récupérer** la TVA payée sur ses achats, qui devient une charge (ex. vente de pain, de lait, de sucre brut, de livres, opérations médicales, enseignement privé…). Si l'entreprise réalise aussi des opérations taxables, elle applique un **prorata** de déduction.
- **Exonération avec droit à déduction** (art. 92) : l'opération n'est pas taxée et l'entreprise **conserve le droit de déduire** la TVA payée en amont ; le crédit de TVA qui en résulte est **remboursable** (ex. **exportations**, biens d'investissement acquis par les entreprises, opérations réalisées sous le régime **suspensif** pour les exportateurs). C'est l'équivalent d'un « taux zéro ».`,
kp:["Sans droit à déduction : pas de TVA collectée ni de récupération (prorata si mixte)","Exemples sans droit (produits de base, médical, enseignement)","Avec droit à déduction : récupération de la TVA amont, remboursement du crédit","Exemples avec droit (exportations, régime suspensif)"]}
]},
{title:"Droit fiscal — IR : déclaration du revenu global (M. Ahmed, 2020)", pts:6, pages:[313,313], th:["df-ir"],
ctx:`**Question 1 (2 pts)** : quand le dépôt de la déclaration annuelle de revenu est-il obligatoire pour un salarié ?
**Question 2 (4 pts)** : préparer la déclaration annuelle du revenu global de M. Ahmed au titre de 2020 et calculer l'impôt correspondant :
- M. Ahmed est directeur financier dans la société XYZ. Il a reçu en 2020 un **salaire brut de 350 000 DH** dont une **indemnité de déplacement de 24 000 DH** et une **indemnité de représentation de 35 000 DH**. Il bénéficie d'une **assurance maladie au taux de 6 % dont 50 %** à la charge de la société et d'une **assurance retraite au taux de 10 % dont 50 %** à la charge de la société.
- M. Ahmed travaille par ailleurs à titre indépendant et a reçu une rémunération totale exceptionnelle de **140 000 DH net de la retenue à la source de 30 %**.
- Les cotisations à la CNSS supportées par M. Ahmed sont estimées à **3 226 DH**.
Barème IR 2020 : 0 à 30 000 : 0 % ; 30 001 à 50 000 : 10 % (3 000) ; 50 001 à 60 000 : 20 % (8 000) ; 60 001 à 80 000 : 30 % (14 000) ; 80 001 à 180 000 : 34 % (17 200) ; au-delà : 38 % (24 400).`,
questions:[
{pts:2, q:"1. Quand le dépôt de la déclaration annuelle de revenu est-il obligatoire pour un salarié ?",
model:`Le salarié est **dispensé** de déclaration lorsqu'il ne perçoit que des **salaires versés par un seul employeur** domicilié au Maroc, tenu d'opérer la retenue à la source (ainsi que des revenus soumis à des prélèvements libératoires).
La déclaration du revenu global (avant fin février de l'année suivante) est **obligatoire** lorsqu'il :
- perçoit des salaires de **plusieurs employeurs** ;
- dispose d'**autres revenus** à agréger (revenus professionnels, agricoles, rémunérations ayant subi une retenue non libératoire…) ;
- perçoit des salaires d'un employeur **non tenu d'opérer la retenue** (organisme international, employeur étranger) ;
- ou souhaite bénéficier de **déductions** non prises en compte par l'employeur (intérêts de prêt logement, primes d'assurance retraite) en vue d'une restitution.`,
kp:["Dispense : salaire d'un seul employeur avec retenue à la source","Obligation : plusieurs employeurs","Obligation : autres revenus à agréger","Obligation : employeur non tenu à la retenue / déductions à faire valoir"]},
{pts:4, q:"2. Revenu global imposable de M. Ahmed et IR correspondant.",
chk:[{l:"Salaire brut imposable",v:296900,u:"DH"},{l:"Revenu net imposable salarial",v:239922,u:"DH",tol:2},{l:"Revenu global imposable",v:439922,u:"DH",tol:2},{l:"IR sur le revenu global",v:142770.36,u:"DH",tol:5},{l:"Reliquat à payer",v:16000,u:"DH",tol:5}],
model:`#### Revenu salarial
| Élément | Montant |
|---|---|
| Salaire brut | 350 000 |
| Indemnité de déplacement (frais justifiés : exonérée) | − 24 000 |
| Indemnité de représentation : exonérée dans la limite de 10 % du salaire de base (291 000 × 10 % = 29 100) | − 29 100 |
| **Salaire brut imposable** | **296 900** |
| Frais professionnels 2020 : 20 % plafonnés à 30 000 | − 30 000 |
| CNSS (part salariale) | − 3 226 |
| Assurance maladie : part salariale 3 % × 296 900 | − 8 907 |
| Retraite : part salariale 5 % × 296 900 | − 14 845 |
| **Revenu net imposable salarial** | **239 922** |
#### Revenu de l'activité indépendante
Montant brut = 140 000 / (1 − 30 %) = **200 000** ; retenue à la source = 60 000 (non libératoire : imputable).
#### Revenu global et impôt
- Revenu global imposable = 239 922 + 200 000 = **439 922**
- IR = 439 922 × 38 % − 24 400 = **142 770,36**
- Imputations : IR retenu par l'employeur sur le salaire (239 922 × 38 % − 24 400 = 66 770,36) et retenue de 60 000 sur l'activité indépendante
- **Reliquat à payer = 142 770,36 − 66 770,36 − 60 000 = ==16 000 DH==** (= 200 000 × (38 % − 30 %) : le revenu indépendant est imposé au taux marginal de 38 % au lieu de 30 %).
(Les charges de famille ne sont pas indiquées ; la part patronale des cotisations n'est pas un revenu imposable dès lors qu'elle finance des régimes de prévoyance.)`,
kp:["Exonération des frais de déplacement justifiés et de la représentation (10 % du salaire de base)","SBI 296 900 et frais professionnels plafonnés à 30 000 (2020)","Déduction des parts salariales (CNSS, AMO 3 %, retraite 5 %)","Reconstitution du brut indépendant (200 000)","IR global ≈ 142 770 ; imputation des retenues ; reliquat 16 000"]}
]},
{title:"Droit fiscal — IS : règles et cas Alpha (2020)", pts:8, pages:[314,314], th:["df-is"],
ctx:`**Question 1 (4 pts)** : quelles sont les règles de déductibilité fiscale des amortissements et des provisions (2 pts) ? Quelles sont les modalités des reports déficitaires prévues par le CGI (2 pts) ?
**Question 2 (4 pts)** : déterminer le résultat fiscal, l'IS à payer au titre de 2020 et les acomptes à payer au titre de 2021 par la société Alpha :
- Chiffre d'affaires HT : 10 000 000 DH ; bénéfice comptable : 600 000 DH ;
- Parmi les charges comptabilisées : un don de 15 000 DH à la **Fondation Mohammed V pour la solidarité** ; une **provision pour créance douteuse** de 25 000 DH que la société estime ne pas pouvoir encaisser faute de pièces justificatives (l'avocat estime que la créance est irrécupérable et qu'il n'y a pas lieu d'introduire un recours judiciaire) ; un don de 100 000 DH au **fonds spécial pour la gestion de la pandémie de Covid-19** ; une **pénalité** de 1 000 DH pour paiement tardif de la taxe des services communaux ; un **rappel de 15 000 DH de taxe professionnelle de 2017** émis en 2020.
- Acomptes versés en 2020 : 110 000 DH.`,
questions:[
{pts:2, q:"1-a. Règles de déductibilité des amortissements et des provisions.",
model:`**Amortissements** (art. 10-I-F-1°) : déductibles s'ils portent sur des **immobilisations inscrites à l'actif** qui se déprécient par l'usage ou le temps ; calculés dans la **limite des taux d'usage** de chaque profession ; **effectivement comptabilisés** (un amortissement non constaté dans l'exercice est **définitivement perdu**) ; point de départ : premier jour du mois d'acquisition ; base = coût d'acquisition (hors TVA récupérable). **Véhicules de transport de personnes** : base plafonnée à **300 000 DH TTC**, taux de 20 % ; amortissement **dégressif** possible (coefficients 1,5 / 2 / 3) sauf pour ces véhicules et les constructions.
**Provisions** : déductibles si elles couvrent la dépréciation d'éléments d'actif ou des charges et pertes **nettement précisées** et **probables** ; **comptabilisées** et portées au tableau des provisions ; pour les **créances**, **recours judiciaire** dans les **12 mois** suivant la clôture ; reprises lorsqu'elles deviennent sans objet ; réintégration des provisions irrégulières dans l'exercice où elles ont été constituées.`,
kp:["Amortissements : biens à l'actif, taux d'usage, comptabilisation (sinon perdus)","Véhicules de tourisme : plafond 300 000 TTC ; dégressif possible","Provisions : perte précise et probable, comptabilisée","Créances : recours judiciaire dans les 12 mois ; reprise/réintégration"]},
{pts:2, q:"1-b. Modalités du report des déficits.",
model:`- Le **déficit d'un exercice** est déductible du bénéfice de l'exercice suivant ; à défaut, il est **reporté successivement** sur les exercices suivants **jusqu'au quatrième** exercice qui suit l'exercice déficitaire.
- La fraction du déficit correspondant aux **amortissements** régulièrement comptabilisés peut être reportée **sans limite de durée**.
- Il n'existe pas de report en arrière (*carry-back*).
- Le report est perdu en cas de changement d'activité ou d'opérations restructurantes hors régimes de faveur ; les déficits doivent figurer dans les déclarations.`,
kp:["Report sur 4 exercices pour le déficit ordinaire","Report illimité de la part due aux amortissements","Pas de carry-back"]},
{pts:4, q:"2. Résultat fiscal 2020, IS à payer et acomptes 2021 de la société Alpha.",
chk:[{l:"Résultat fiscal 2020",v:626000,u:"DH"},{l:"IS 2020",v:95200,u:"DH"},{l:"Excédent d'acomptes (versés − IS)",v:14800,u:"DH"},{l:"Montant de chaque acompte 2021",v:23800,u:"DH"}],
model:`| Élément | Réintégration | Justification |
|---|---|---|
| Bénéfice comptable | | 600 000 |
| Don à la Fondation Mohammed V pour la solidarité | 0 | Organisme expressément visé par le CGI : déductible sans limite |
| Provision pour créance douteuse sans recours judiciaire | 25 000 | Condition du recours judiciaire non remplie (et pas de justification de l'irrécouvrabilité) |
| Don au fonds spécial Covid-19 | 0 | Déductible (LF 2020 : dons au fonds spécial) |
| Pénalité pour retard de la TSC | 1 000 | Amendes et pénalités non déductibles |
| Rappel de taxe professionnelle 2017 émis en 2020 | 0 | Impôt déductible dans l'exercice où il est mis en recouvrement |
| **Résultat fiscal** | | **==626 000==** |
**IS 2020** (barème progressif) : 626 000 × 20 % − 30 000 = ==95 200 DH==.
**CM 2020** : 0,50 % × 10 000 000 = 50 000 < IS ⇒ impôt dû = 95 200.
**Régularisation** : acomptes versés 110 000 > 95 200 ⇒ **excédent de 14 800**, imputable sur les acomptes suivants (ou restituable).
**Acomptes 2021** : 25 % × 95 200 = ==23 800== chacun (31/03, 30/06, 30/09, 31/12/2021) ; le premier est ramené à 23 800 − 14 800 = **9 000** après imputation de l'excédent.`,
kp:["Dons Fondation Mohammed V et fonds Covid déductibles","Réintégration de la provision sans recours (25 000) et de la pénalité (1 000)","Rappel de TP déductible en 2020","Résultat fiscal 626 000 ; IS 95 200 (20 % − 30 000)","Excédent d'acomptes 14 800 imputé ; acomptes 2021 de 23 800"]}
]}
]});

EXAMS.push({
id:"gest-2020", subject:"gest", year:2020, session:"20-21 mars 2021", title:"Étude de cas de gestion", date:"Dimanche 21 mars 2021", duration:300, pages:[315,324],
note:"7 exercices — documents non autorisés, calculatrice autorisée",
sections:[
{title:"Exercice 1 : Investissement de remplacement (société ST)", pts:4, pages:[316,316], th:["g-invest"],
ctx:`La société ST étudie l'opportunité de remplacer une machine achetée il y a **7 ans à 1 400 000 MAD HT**, amortissable en **10 ans**, ayant une valeur actuelle de marché de **500 000 MAD HT** et une valeur estimée à **25 000 MAD HT** si elle est vendue après 3 années supplémentaires d'usage. Si l'investissement de remplacement n'est pas mis en œuvre, il n'y a pas de renouvellement à la date 3 et l'exploitation est arrêtée.
La nouvelle machine coûtant **1 750 000 MAD HT** est amortissable en **7 ans** ; il est attendu qu'elle soit cédée après amortissement total à **100 000 MAD**. Elle permettra des économies de coûts variables : le coût variable unitaire baisserait de **5 à 2,8 MAD**. Les coûts fixes passeraient de **175 000 à 150 000 MAD**. L'ancien matériel produisait **140 000 unités** annuelles et tourne à plein régime. L'équipement de remplacement accroîtra la capacité de production. La demande devrait atteindre **210 000 unités la première année et augmenterait de 10 % par an**. Il est très vraisemblable que le prix de vente unitaire passe sous peu, à cause de nouveaux concurrents étrangers, à **10,5 MAD** (prix actuel 14 MAD). Le BFR de chaque année est estimé à 10 % du chiffre d'affaires de la même année. L'entreprise prévoit, si elle investit, d'immobiliser 300 000 MAD en BFR ; elle avait prévu, dans le cadre de l'ancien projet, un BFR initial de 147 000 MAD. Taux d'IS : 30 %.
**Déterminez les flux nets d'exploitation liés à l'investissement de remplacement.**`,
questions:[
{pts:4, q:"Déterminez les flux nets d'exploitation différentiels liés au remplacement (années 1 à 7).",
chk:[{l:"FNE différentiel année 1",v:643400,u:"MAD",tol:5},{l:"FNE différentiel année 4",v:1476558.9,u:"MAD",tol:10},{l:"FNE différentiel année 7",v:1975229.9,u:"MAD",tol:10}],
model:`**Raisonnement différentiel** (avec remplacement − sans remplacement), prix de 10,5 dans les deux hypothèses, horizon de 7 ans (durée de la nouvelle machine).
- **Sans remplacement** : 140 000 unités pendant 3 ans puis arrêt ; EBE = 140 000 × (10,5 − 5) − 175 000 = **595 000** ; dotation 140 000 (VNC résiduelle 420 000 sur 3 ans).
- **Avec remplacement** : production = demande (210 000 × 1,1ᵗ⁻¹) ; EBE = Q × (10,5 − 2,8) − 150 000 ; dotation 1 750 000 / 7 = 250 000.
FNE différentiel = ΔEBE × (1 − 30 %) + 30 % × ΔDotations.
| Année | Quantité | EBE avec | EBE sans | ΔEBE | ΔDotations | **FNE différentiel** |
|---|---|---|---|---|---|---|
| 1 | 210 000 | 1 467 000 | 595 000 | 872 000 | 110 000 | **643 400** |
| 2 | 231 000 | 1 628 700 | 595 000 | 1 033 700 | 110 000 | **756 590** |
| 3 | 254 100 | 1 806 570 | 595 000 | 1 211 570 | 110 000 | **881 099** |
| 4 | 279 510 | 2 002 227 | 0 | 2 002 227 | 250 000 | **1 476 558,90** |
| 5 | 307 461 | 2 217 450 | 0 | 2 217 450 | 250 000 | **1 627 214,79** |
| 6 | 338 207 | 2 454 195 | 0 | 2 454 195 | 250 000 | **1 792 936,27** |
| 7 | 372 028 | 2 714 614 | 0 | 2 714 614 | 250 000 | **1 975 229,90** |
**Flux hors exploitation à prendre en compte ensuite** (pour la VAN) :
- Date 0 : − 1 750 000 + cession de l'ancienne machine 500 000 − IS sur plus-value (500 000 − 420 000) × 30 % = 24 000 ⇒ **− 1 274 000** ; BFR différentiel : − (300 000 − 147 000) = − 153 000.
- Date 3 : manque à gagner de la revente de l'ancienne machine (25 000 × 0,7 = 17 500 net, flux perdu).
- Date 7 : cession de la nouvelle machine 100 000 × 0,7 = 70 000 ; récupération du BFR différentiel ; variations annuelles du BFR (10 % du CA).`,
kp:["Approche différentielle et horizon de 7 ans","Prix de 10,5 dans les deux hypothèses ; arrêt de l'ancien matériel après 3 ans","Quantités : demande croissante de 10 % (nouvelle machine)","ΔEBE et économie d'impôt sur Δdotations (110 000 puis 250 000)","FNE : 643 400 ; 756 590 ; 881 099 ; puis ≈ 1,48 M à 1,98 M","Flux hors exploitation identifiés (cession ancienne machine nette d'IS, BFR, valeurs résiduelles)"]}
]},
{title:"Exercice 2 : Budget de trésorerie, compte de résultat et bilan prévisionnels (SITRA)", pts:4, pages:[317,319], th:["g-tresorerie","g-budget"],
ctx:`Élaborer les documents prévisionnels du prochain trimestre (mai, juin, juillet N) pour la société SITRA (exercice clos le 30 avril).
**Bilan au 30/04/N (DH)**
| Actif | Brut | Amort. | Net | Passif | Montant |
|---|---|---|---|---|---|
| Fonds commercial | 145 400 | — | 145 400 | Capital | 1 200 000 |
| Terrain | 153 300 | — | 153 300 | Réserve légale | 120 000 |
| Construction | 930 000 | 440 000 | 490 000 | Résultat de l'exercice | 234 450 |
| Installations techniques | 448 000 | 213 500 | 234 500 | Emprunts auprès des établissements de crédit | 440 434 |
| Autres immobilisations | 64 200 | 18 900 | 45 300 | Dettes fournisseurs | 355 000 |
| Stocks de marchandises | 910 000 | — | 910 000 | Dettes fiscales | 226 583 |
| Créances clients | 455 000 | — | 455 000 | Autres dettes | 100 000 |
| État (TVA récupérable) | 59 167 | — | 59 167 | | |
| Autres créances | 48 800 | — | 48 800 | | |
| Charges constatées d'avance | 31 950 | — | 31 950 | | |
| Disponibilités | 103 050 | — | 103 050 | | |
| **Total** | 3 348 867 | 672 400 | **2 676 467** | **Total** | **2 676 467** |
1. Les « autres créances » sont encaissables en mai (charges hors champ de la TVA).
2. Les « dettes fiscales » comprennent : la TVA due au titre d'avril, à décaisser en mai ; la TVA facturée non encore encaissée : 75 833 ; le reliquat d'IS de l'exercice clos le 30 avril N (IS déduction faite des acomptes). Le résultat fiscal de l'exercice clos le 30/04/N-1 était de 140 000 DH, taux d'IS 30 % ; l'IS dû au titre de l'exercice clos le 30/04/N s'élève à 98 700 DH ; l'impôt est payé le plus tard possible.
3. L'emprunt a été contracté le 01/05/N-1, remboursable in fine après 10 ans, sans intérêts pendant les deux premières années.
4. Les autres dettes ne donneront lieu à aucun remboursement en mai, juin et juillet.
5. L'assurance incendie (prime annuelle 42 600) a été réglée d'avance le 01/02/N.
6. Amortissement linéaire ; aucune acquisition ni cession. Taux : construction 5 %, installations techniques 10 %, autres immobilisations 15 %.
**Prévisions** : CA HT mai 957 600, juin 806 600, juillet 1 109 400 (TVA 20 %) ; marge sur prix d'achat 30 % du prix de vente ; clients : 50 % au comptant, 50 % à 30 jours fin de mois ; achats de marchandises TTC : mai 763 400, juin 756 300, juillet 655 500, réglés 40 % au comptant et 60 % à 30 jours fin de mois ; « charges diverses » : 80 000 TTC par mois (dont 5 000 de TVA déductible), réglées au comptant. Régime de TVA : encaissement.
**Questions** : 1. Budget de trésorerie mois par mois (budget des encaissements ; budget des décaissements précédé du budget de TVA). 2. Compte de résultat prévisionnel du trimestre. 3. Bilan prévisionnel en fin de trimestre. Calculs au dirham près.`,
questions:[
{pts:2, q:"1. Budgets des encaissements, de TVA, des décaissements et de trésorerie (mai à juillet).",
chk:[{l:"TVA due au titre d'avril (payée en mai)",v:94050,u:"DH"},{l:"Encaissements de mai",v:1078360,u:"DH"},{l:"TVA due au titre de mai",v:56533,u:"DH",tol:1},{l:"Trésorerie fin juillet",v:736012,u:"DH",tol:2}],
model:`**Dettes fiscales** : reliquat d'IS = 98 700 − acomptes de l'exercice (30 % × 140 000 = 42 000) = **56 700**, payé au plus tard le 31 juillet ; TVA d'avril = 226 583 − 75 833 − 56 700 = **94 050** (payée en mai). Acomptes du nouvel exercice : 98 700 / 4 = **24 675**, le premier au plus tard fin juillet.
#### Budget des encaissements
| | Mai | Juin | Juillet |
|---|---|---|---|
| Clients au 30/04 | 455 000 | | |
| Autres créances | 48 800 | | |
| Ventes de mai (1 149 120 TTC) | 574 560 | 574 560 | |
| Ventes de juin (967 920 TTC) | | 483 960 | 483 960 |
| Ventes de juillet (1 331 280 TTC) | | | 665 640 |
| **Total** | **1 078 360** | **1 058 520** | **1 149 600** |
#### Budget de TVA (régime de l'encaissement)
| | Mai | Juin | Juillet |
|---|---|---|---|
| TVA collectée (encaissements clients × 20/120) | 171 593 | 176 420 | 191 600 |
| TVA déductible sur achats payés (× 20/120) | − 110 060 | − 126 760 | − 119 330 |
| TVA déductible sur charges diverses | − 5 000 | − 5 000 | − 5 000 |
| **TVA due** | **56 533** | **44 660** | **67 270** |
| Payée en | juin | juillet | août |
#### Budget des décaissements
| | Mai | Juin | Juillet |
|---|---|---|---|
| Fournisseurs au 30/04 | 355 000 | | |
| Achats de mai (763 400) | 305 360 | 458 040 | |
| Achats de juin (756 300) | | 302 520 | 453 780 |
| Achats de juillet (655 500) | | | 262 200 |
| Charges diverses | 80 000 | 80 000 | 80 000 |
| TVA à décaisser | 94 050 | 56 533 | 44 660 |
| Reliquat d'IS | | | 56 700 |
| Premier acompte d'IS | | | 24 675 |
| **Total** | **834 410** | **897 093** | **922 015** |
#### Budget de trésorerie
| | Mai | Juin | Juillet |
|---|---|---|---|
| Trésorerie initiale | 103 050 | 347 000 | 508 427 |
| Encaissements | 1 078 360 | 1 058 520 | 1 149 600 |
| Décaissements | 834 410 | 897 093 | 922 015 |
| **Trésorerie finale** | **347 000** | **508 427** | **==736 012==** |`,
kp:["Décomposition des dettes fiscales (TVA d'avril 94 050, reliquat d'IS 56 700)","Encaissements clients 50 % / 50 % et autres créances","TVA collectée et déductible au rythme des encaissements/paiements","Décaissements fournisseurs 40 % / 60 %, charges diverses, TVA, IS et acompte","Trésorerie finale ≈ 736 012"]},
{pts:1, q:"2. Compte de résultat prévisionnel du trimestre.",
chk:[{l:"Résultat avant impôt du trimestre",v:601197.5,u:"DH",tol:2}],
model:`| Charges | Montant | Produits | Montant |
|---|---|---|---|
| Achats de marchandises HT (2 175 200 / 1,2) | 1 812 667 | Ventes HT | 2 873 600 |
| Variation de stock (910 000 − 711 147) | 198 853 | | |
| = Coût d'achat des marchandises vendues (70 % du CA) | 2 011 520 | | |
| Charges diverses HT (3 × 75 000) | 225 000 | | |
| Assurance (42 600 × 3/12) | 10 650 | | |
| Dotations aux amortissements | 25 233 | | |
| **Résultat avant impôt** | **==601 198==** | | |
| **Total** | **2 873 600** | **Total** | **2 873 600** |
Dotations trimestrielles : construction 930 000 × 5 % / 4 = 11 625 ; installations 448 000 × 10 % / 4 = 11 200 ; autres 64 200 × 15 % / 4 = 2 407,50. Stock final = 910 000 + 1 812 667 − 2 011 520 = **711 147**. Pas de charges d'intérêts (emprunt sans intérêts les deux premières années). (IS estimé à 30 % : ≈ 180 359.)`,
kp:["Coût d'achat des marchandises vendues = 70 % du CA (2 011 520)","Stock final 711 147 par différence","Charges diverses HT 225 000 et assurance 10 650","Dotations 25 232,50","Résultat ≈ 601 198"]},
{pts:1, q:"3. Bilan prévisionnel au 31 juillet N.",
model:`| Actif | Net | Passif | Montant |
|---|---|---|---|
| Fonds commercial | 145 400 | Capital | 1 200 000 |
| Terrain | 153 300 | Réserve légale | 120 000 |
| Construction (490 000 − 11 625) | 478 375 | Résultat N (en instance d'affectation) | 234 450 |
| Installations techniques (234 500 − 11 200) | 223 300 | Résultat du trimestre (avant IS) | 601 198 |
| Autres immobilisations (45 300 − 2 408) | 42 892 | Emprunts | 440 434 |
| Stocks de marchandises | 711 147 | Fournisseurs (60 % des achats de juillet) | 393 300 |
| Clients (50 % des ventes de juillet TTC) | 665 640 | Dettes fiscales : TVA due de juillet 67 270 + TVA facturée non encaissée 110 940 | 178 210 |
| État — TVA récupérable (393 300 / 6) | 65 550 | Autres dettes | 100 000 |
| État — acompte d'IS | 24 675 | | |
| Charges constatées d'avance (assurance août → janvier) | 21 300 | | |
| Disponibilités | 736 012 | | |
| **Total** | **3 267 591** | **Total** | **3 267 592** |
(L'écart d'un dirham provient des arrondis du bilan d'ouverture : 75 833 et 59 167.)`,
kp:["Immobilisations nettes des dotations du trimestre","Clients 665 640 et fournisseurs 393 300","TVA : récupérable 65 550, due 67 270, facturée non encaissée 110 940","Acompte d'IS à l'actif et CCA 21 300","Bilan équilibré (≈ 3 267 591)"]}
]},
{title:"Exercice 3 : Emprunts et épargne-logement", pts:2, pages:[319,319], th:["g-mathfi"],
ctx:`**Cas 1** : une société a emprunté le 1er juin 2000 **1 000 000 DH**, remboursables par annuités constantes, la première le 1er juin 2001 et la dernière le 1er juin 2004, au taux de **14 %**. 1. Montant de l'annuité. 2. Tableau d'amortissement. 3. Immédiatement après l'échéance du 1er juin 2002, la société décide de régler le capital restant dû par **mensualités constantes de 50 530 DH**, la première le 1er juillet 2002, au taux mensuel de **1,1 %**. À quelle date la dette sera-t-elle entièrement amortie ?
**Cas 2** : M. ALAMI, titulaire d'un compte d'épargne-logement rémunéré à **3 %** l'an, sur lequel il verse **50 000 DH à la fin de chaque année depuis 5 ans**, souhaite acquérir un appartement avec son épargne complétée par un prêt bancaire remboursable sur **10 ans** au maximum et dont l'échéance mensuelle ne devrait pas dépasser **9 000 DH**. 1. Montant de l'épargne constituée ? 2. Prix maximum de l'appartement ?`,
questions:[
{pts:1, q:"Cas 1 : annuité, tableau d'amortissement et date d'extinction de la dette renégociée.",
chk:[{l:"Annuité",v:343204.78,u:"DH",tol:2},{l:"Capital restant dû au 01/06/2002",v:565141.76,u:"DH",tol:3},{l:"Nombre de mensualités",v:12,u:""}],
model:`a = 1 000 000 × 0,14 / (1 − 1,14⁻⁴) = **343 204,78**
| Échéance | Capital début | Intérêts 14 % | Amortissement | Annuité | Capital fin |
|---|---|---|---|---|---|
| 01/06/2001 | 1 000 000,00 | 140 000,00 | 203 204,78 | 343 204,78 | 796 795,22 |
| 01/06/2002 | 796 795,22 | 111 551,33 | 231 653,45 | 343 204,78 | 565 141,76 |
| 01/06/2003 | 565 141,76 | 79 119,85 | 264 084,94 | 343 204,78 | 301 056,83 |
| 01/06/2004 | 301 056,83 | 42 147,96 | 301 056,83 | 343 204,78 | 0 |
Renégociation : 565 141,76 = 50 530 × (1 − 1,011⁻ⁿ) / 0,011 ⇒ 1,011⁻ⁿ = 1 − 565 141,76 × 0,011 / 50 530 = 0,87697 ⇒ n = 12.
**12 mensualités** du 1er juillet 2002 au **1er juin 2003** : la dette est éteinte le **1er juin 2003**.`,
kp:["Annuité ≈ 343 204,78","Tableau correct (amortissements en progression de 14 %)","Capital restant dû 565 141,76","n = 12 mensualités → dernière le 1er juin 2003"]},
{pts:1, q:"Cas 2 : épargne constituée et prix maximum de l'appartement.",
chk:[{l:"Épargne constituée",v:265456.79,u:"DH",tol:2},{l:"Prix maximum (prêt au taux mensuel équivalent à 3 %)",v:1199318,u:"DH",tol:2000,alt:[1197513]}],
model:`1. Épargne = 50 000 × (1,03⁵ − 1) / 0,03 = 50 000 × 5,30914 = **265 456,79 DH**.
2. Le taux du prêt n'étant pas donné, on retient le taux du compte d'épargne-logement, **3 % l'an**, soit un taux mensuel équivalent i = 1,03^(1/12) − 1 = 0,2466 %. Capital empruntable = 9 000 × (1 − 1,002466⁻¹²⁰) / 0,002466 ≈ **933 862**.
**Prix maximum ≈ 265 457 + 933 862 = 1 199 319 DH** (avec le taux mensuel proportionnel 0,25 % : 932 056 → 1 197 513 DH).`,
kp:["Valeur acquise d'annuités de fin de période (5,30914)","Épargne 265 456,79","Hypothèse explicite sur le taux du prêt","Capital empruntable = valeur actuelle de 120 mensualités de 9 000","Prix max ≈ 1,2 M DH"]}
]},
{title:"Exercice 4 : Programmation linéaire (PRIMA)", pts:3, pages:[320,321], th:["g-prog","ca-variable"],
ctx:`La société PRIMA produit trois appareils P1, P2 et P3. Elle estime pouvoir vendre pour l'année **50 000 P1 à 200 DH HT**, **84 000 P2 à 100 DH HT** et **84 000 P3 à 156 DH HT**, mais doit livrer au minimum **45 000 P1**.
| | P1 | P2 | P3 | Prix unitaire |
|---|---|---|---|---|
| Matières premières (kg) | 30 | 10 | 20 | 2 DH le kg |
| MOD usinage (mn) | 27 | 18 | 21 | 60 DH l'heure |
| MOD montage (mn) | 50 | 25 | 35 | 60 DH l'heure |
| Distribution | 10 % de commissions sur les ventes | | | |
Charges indirectes pour une activité annuelle normale de 48 000 P1, 96 000 P2 et 72 000 P3 :
| | Centre usinage | Centre montage |
|---|---|---|
| Charges fixes | 540 000 DH | 720 000 DH |
| Charges variables | 1 536 000 DH | 1 756 800 DH |
| Unité d'œuvre | kg de matière | heure de main-d'œuvre directe |
Contraintes : le centre usinage ne peut traiter plus de **3 840 000 kg** de matière par an ; le centre montage ne peut fonctionner plus de **122 000 heures** par an.
1. Montrer que l'entreprise ne peut pas fabriquer tout ce qu'elle est capable de vendre. 2. Écrire le modèle de programmation linéaire (justifier la fonction économique et les contraintes). 3.a) Déterminer, par la méthode du simplexe, le programme optimal. 3.b) Indiquer si le centre usinage pourra traiter de la matière supplémentaire et s'il y aura plein emploi du centre montage ; donner le résultat d'exploitation (en tenant compte uniquement des charges fixes des deux centres).`,
questions:[
{pts:1.5, q:"1-2. Insuffisance des capacités et modèle de programmation linéaire.",
chk:[{l:"MCV unitaire de P1",v:19,u:"DH"},{l:"MCV unitaire de P2",v:17,u:"DH"},{l:"MCV unitaire de P3",v:28,u:"DH"}],
model:`**1. Besoins pour satisfaire toute la demande**
- Usinage : 50 000 × 30 + 84 000 × 10 + 84 000 × 20 = **4 020 000 kg** > 3 840 000
- Montage : (50 000 × 50 + 84 000 × 25 + 84 000 × 35) / 60 = **125 667 h** > 122 000
⇒ impossible de tout produire.
**2. Coûts variables unitaires** (CV usinage = 1 536 000 / 3 840 000 kg = 0,40 DH/kg ; CV montage = 1 756 800 / 122 000 h = 14,40 DH/h — activité normale de 3 840 000 kg et 122 000 h)
| | P1 | P2 | P3 |
|---|---|---|---|
| Matières | 60 | 20 | 40 |
| MOD usinage | 27 | 18 | 21 |
| MOD montage | 50 | 25 | 35 |
| CV usinage (kg × 0,40) | 12 | 4 | 8 |
| CV montage (h × 14,40) | 12 | 6 | 8,40 |
| Commissions 10 % | 20 | 10 | 15,60 |
| **Coût variable** | **181** | **83** | **128** |
| Prix | 200 | 100 | 156 |
| **MCV unitaire** | **19** | **17** | **28** |
Les charges fixes étant indépendantes du programme, maximiser le résultat revient à maximiser la MCV :
**Max Z = 19 x₁ + 17 x₂ + 28 x₃**
- Usinage (contrainte technique) : 30 x₁ + 10 x₂ + 20 x₃ ≤ 3 840 000
- Montage (contrainte technique) : 50 x₁ + 25 x₂ + 35 x₃ ≤ 7 320 000 (minutes)
- Marché (contraintes commerciales) : 45 000 ≤ x₁ ≤ 50 000 ; x₂ ≤ 84 000 ; x₃ ≤ 84 000
- x₂, x₃ ≥ 0`,
kp:["Démonstration de l'insuffisance (4 020 000 kg ; 125 667 h)","Coûts variables des centres : 0,40/kg et 14,40/h","MCV unitaires 19 ; 17 ; 28","Fonction économique = MCV (charges fixes indépendantes)","Contraintes techniques (usinage, montage) et commerciales (min 45 000 P1, plafonds)"]},
{pts:1.5, q:"3. Programme optimal, saturation des centres et résultat d'exploitation.",
chk:[{l:"Quantité de P1",v:45000,u:""},{l:"Quantité de P2",v:84000,u:""},{l:"Quantité de P3",v:82500,u:""},{l:"Résultat d'exploitation",v:3333000,u:"DH"}],
model:`**Démarche du simplexe** : on pose x₁ = 45 000 + y₁ (contrainte de livraison minimale) et on ajoute des variables d'écart. La matière d'usinage est la ressource rare : la MCV par kg est de 1,70 (P2), 1,40 (P3) et 0,63 (P1). L'algorithme fait entrer P3 (plus forte MCV unitaire), puis P2, et bute sur la capacité d'usinage ; P1 reste à son minimum.
**Programme optimal : x₁ = 45 000 ; x₂ = 84 000 ; x₃ = 82 500**
- MCV totale = 45 000 × 19 + 84 000 × 17 + 82 500 × 28 = 855 000 + 1 428 000 + 2 310 000 = **4 593 000**
- Usinage : 1 350 000 + 840 000 + 1 650 000 = **3 840 000 kg → saturé** : impossible de traiter de la matière supplémentaire (valeur marginale du kg : 1,40 DH).
- Montage : (2 250 000 + 2 100 000 + 2 887 500) / 60 = **120 625 h** sur 122 000 → **pas de plein emploi** (1 375 h disponibles).
- **Résultat d'exploitation** = 4 593 000 − (540 000 + 720 000) = ==3 333 000 DH==.`,
kp:["Changement de variable pour le minimum de P1 et variables d'écart","Programme : 45 000 P1, 84 000 P2, 82 500 P3","MCV totale 4 593 000","Usinage saturé ; montage 120 625 h (1 375 h libres)","Résultat 3 333 000"]}
]},
{title:"Exercice 5 : Salaires d'artisans (moyenne, effectif manquant, écart type)", pts:2, pages:[321,321], th:["g-stats"],
ctx:`Salaires mensuels nets de salariés de l'artisanat à Marrakech :
| Salaire mensuel | Nombre d'ouvriers |
|---|---|
| [3 000 ; 3 600[ | 10 |
| [3 600 ; 4 200[ | 8 |
| [4 200 ; 5 400[ | 4 |
| [5 400 ; 6 000[ | n₄ |
| Total | N |
1) Calculer l'étendue. 2) Sachant que le salaire moyen est de 3 950 DH, déterminer n₄ et N. 3) Déterminer l'écart type. 4) Comparer l'étendue et l'écart type : que peut-on conclure ?`,
questions:[
{pts:2, q:"Étendue, n₄ et N, écart type, comparaison.",
chk:[{l:"Étendue",v:3000,u:"DH"},{l:"n₄",v:2,u:""},{l:"N",v:24,u:""},{l:"Écart type",v:743.3,u:"DH",tol:0.5}],
model:`1) Étendue = 6 000 − 3 000 = **3 000 DH**.
2) Centres : 3 300 ; 3 900 ; 4 800 ; 5 700. (33 000 + 31 200 + 19 200 + 5 700 n₄) / (22 + n₄) = 3 950 ⇒ 83 400 + 5 700 n₄ = 86 900 + 3 950 n₄ ⇒ 1 750 n₄ = 3 500 ⇒ **n₄ = 2 ; N = 24**.
3) Σ nᵢ cᵢ² / N = (108 900 000 + 121 680 000 + 92 160 000 + 64 980 000) / 24 = 16 155 000 ; V = 16 155 000 − 3 950² = 552 500 ⇒ **σ ≈ 743,30 DH**.
4) L'étendue (3 000) vaut environ **4 fois l'écart type** : elle est gonflée par les valeurs extrêmes (2 salariés seulement au-delà de 5 400). L'écart type, qui tient compte de toutes les observations, montre une dispersion modérée autour de la moyenne (coefficient de variation 18,8 %) ; 75 % des ouvriers gagnent moins de 4 200 DH.`,
kp:["Étendue 3 000","Équation de la moyenne → n₄ = 2, N = 24","Variance 552 500 et σ ≈ 743","Comparaison : étendue sensible aux extrêmes, σ plus représentatif"]}
]},
{title:"Exercice 6 : Probabilités (standard téléphonique) et loi binomiale", pts:2, pages:[322,322], th:["g-probas"],
ctx:`Un standard d'un service après-vente reçoit des appels concernant le **petit électroménager** (E) ou les **appareils audio-vidéo** (A). Lors d'un appel, le problème est soit résolu par téléphone (T), soit il nécessite un technicien.
(H₁) Le standard reçoit 20 % d'appels E et 80 % d'appels A. (H₂) Pour un appel E, la probabilité d'une résolution par téléphone est 0,5. (H₃) Pour un appel A, elle est de 0,375. Appels indépendants.
1) a) Traduire (H₁), (H₂), (H₃). b) Calculer P(T). c) Sachant que le problème a été résolu par téléphone, probabilité qu'il concerne le petit électroménager ?
2) Un standardiste reçoit 10 appels dans l'heure ; X = nombre d'appels concernant le petit électroménager. a) Loi de X. b) Espérance et variance.`,
questions:[
{pts:1, q:"1) Traduction, P(T) et P(E | T).",
chk:[{l:"P(T)",v:0.4,u:"",tol:0.0005},{l:"P(E | T)",v:0.25,u:"",tol:0.0005}],
model:`a) P(E) = 0,2 ; P(A) = 0,8 ; P(T | E) = 0,5 ; P(T | A) = 0,375.
b) Probabilités totales : P(T) = 0,2 × 0,5 + 0,8 × 0,375 = 0,1 + 0,3 = **0,4**.
c) Bayes : P(E | T) = 0,1 / 0,4 = **0,25**.`,
kp:["Traduction des hypothèses en probabilités conditionnelles","P(T) = 0,4","P(E|T) = 0,25"]},
{pts:1, q:"2) Loi de X, espérance et variance.",
chk:[{l:"E(X)",v:2,u:""},{l:"V(X)",v:1.6,u:"",tol:0.001}],
model:`a) 10 appels indépendants, chacun concernant E avec la probabilité 0,2 : **X ~ B(10 ; 0,2)**, X ∈ {0, 1, …, 10}, P(X = k) = C(10, k) × 0,2ᵏ × 0,8¹⁰⁻ᵏ.
| k | 0 | 1 | 2 | 3 | 4 | 5 | 6 à 10 |
|---|---|---|---|---|---|---|---|
| P(X = k) | 0,1074 | 0,2684 | 0,3020 | 0,2013 | 0,0881 | 0,0264 | 0,0064 au total |
b) **E(X) = 10 × 0,2 = 2** ; **V(X) = 10 × 0,2 × 0,8 = 1,6** (σ ≈ 1,26).`,
kp:["Loi binomiale B(10 ; 0,2) justifiée","Probabilités P(X = k)","E(X) = 2 et V(X) = 1,6"]}
]},
{title:"Exercice 7 : QCM de management et de stratégie", pts:3, pages:[323,324], th:["g-strategie"],
ctx:`Répondez aux questions en cochant la bonne réponse. Une bonne réponse rapporte 0,25 point ; une mauvaise réponse ou l'absence de réponse, 0 point.`,
questions:[
{pts:0.25, q:"Q1 : Qu'est-ce qu'une décision tactique ?", o:["Elle traduit sur le terrain les buts et les objectifs de l'entreprise","Elle participe au pilotage de l'entreprise par les cadres","Elle est prise au plus haut niveau institutionnel et engage l'entreprise sur le long terme","Elle est relative à l'exécution opérationnelle des projets","Autre"], a:1,
model:"Selon la typologie d'Ansoff, les décisions **tactiques** (ou de gestion / administratives) sont prises par l'encadrement intermédiaire, à moyen terme, pour piloter l'allocation des ressources et mettre en œuvre la stratégie. C : décision stratégique ; D : décision opérationnelle."},
{pts:0.25, q:"Q2 : Durant quelle phase du cycle de vie du produit l'entreprise investit-elle le plus ?", o:["Le lancement","La croissance","La maturité","Le déclin","Autre"], a:[0,1],
model:"Les deux réponses sont défendues dans les manuels : au **lancement**, les dépenses (R&D, communication, mise en place de la distribution) sont très élevées par rapport aux ventes ; en **croissance**, l'entreprise investit massivement en capacités de production et en BFR pour suivre le marché (produits « vedettes » de la matrice BCG). La réponse la plus fréquente dans les QCM est la croissance (montant absolu) ; les deux sont acceptées ici."},
{pts:0.25, q:"Q3 : Quel est l'outil utilisé dans le diagnostic externe ?", o:["Le PESTEL(E)","Le SWOT","La valorisation financière","Le bilan","Autre"], a:0,
model:"Le **PESTEL** analyse le macro-environnement (Politique, Économique, Socioculturel, Technologique, Écologique, Légal). Le SWOT combine diagnostic interne (forces/faiblesses) et externe (opportunités/menaces)."},
{pts:0.25, q:"Q4 : La structure de marché avec un seul acheteur et plusieurs vendeurs correspond à :", o:["L'oligopole","Le monopsone","L'oligopsone","Le monopole","Autre"], a:1,
model:"**Monopsone** : un seul demandeur face à de nombreux offreurs (l'inverse du monopole). Oligopsone : quelques acheteurs."},
{pts:0.25, q:"Q5 : Les ressources intangibles de l'entreprise sont :", o:["Les titres de propriété","Les ressources humaines","Les sources de liquidités et de financement","Les brevets, les marques et le savoir-faire","Autre"], a:3,
model:"Les ressources **intangibles** (immatérielles) : brevets, marques, savoir-faire, réputation, culture, bases de données. Les ressources humaines sont généralement classées à part (ressources humaines), même si leurs compétences sont immatérielles."},
{pts:0.25, q:"Q6 : Comment se manifeste la culture d'entreprise ? (plusieurs réponses)", o:["Rites","Valeurs (idées et croyances)","Respect des dirigeants","Us et coutumes","Autre"], a:[0,1,3], multi:true,
model:"La culture d'entreprise se manifeste par ses **valeurs** (croyances partagées), ses **rites** et rituels (cérémonies, séminaires), ses **us et coutumes** (normes de comportement), ainsi que ses mythes, symboles et son langage. Le « respect des dirigeants » n'en est pas une composante en soi."},
{pts:0.25, q:"Q7 : L'économie d'échelle fait référence à :", o:["La croissance interne de l'entreprise","La croissance externe de l'entreprise","L'augmentation de production qui diminue le coût unitaire du produit","L'expérience des dirigeants nouvellement recrutés","Autre"], a:2,
model:"Les **économies d'échelle** : baisse du coût unitaire grâce à l'augmentation des volumes (étalement des charges fixes, pouvoir de négociation). À distinguer de l'effet d'expérience (baisse liée à la production cumulée)."},
{pts:0.25, q:"Q8 : La stratégie de focalisation vise à :", o:["Obtenir un avantage concurrentiel en proposant un produit/service à faible coût à une cible stratégique large","Obtenir un avantage concurrentiel en proposant un produit ou service à haute valeur ajoutée à une cible particulière","Obtenir un avantage concurrentiel en proposant un produit à une cible stratégique restreinte, en adoptant une chaîne de valeur « sur mesure » par rapport à leurs attentes","Obtenir un avantage concurrentiel en adoptant une stratégie d'internationalisation","Autre"], a:2,
model:"Chez Porter, la **focalisation (concentration)** consiste à servir une **cible restreinte** (segment, région, clientèle) avec une chaîne de valeur adaptée, par les coûts ou par la différenciation. B ne décrit qu'une variante (focalisation-différenciation) ; A décrit la domination par les coûts."},
{pts:0.25, q:"Q9 : Le « greenwashing » correspond à :", o:["Avoir accès à des ressources naturelles biologiques","Transformer les déchets toxiques en produits écologiques","Faire du recyclage des produits utilisés","Utiliser un procédé pour se donner une image de responsabilité écologique trompeuse","Autre"], a:3,
model:"Le **greenwashing** (écoblanchiment) : communication trompeuse donnant une image écologique non fondée sur des actions réelles."},
{pts:0.25, q:"Q10 : Les licornes représentent :", o:["Des entreprises industrielles","Des entreprises écologiques","Des start-up valorisées à plus d'un milliard de $","Des entreprises en conglomérat opérant dans plusieurs DAS","Autre"], a:2,
model:"Une **licorne** est une start-up non cotée valorisée à plus d'un milliard de dollars (terme d'Aileen Lee, 2013)."},
{pts:0.25, q:"Q11 : Le groupement d'intérêt économique est une stratégie de :", o:["Croissance externe","Croissance interne","Croissance interne et externe","Croissance collaborative","Autre"], a:3,
model:"Le **GIE** permet à des entreprises indépendantes de mettre en commun des moyens pour faciliter leur activité : c'est une forme de **croissance conjointe / contractuelle (collaborative)**, comme les alliances et les joint-ventures."},
{pts:0.25, q:"Q12 : La stratégie d'intégration verticale est une stratégie de :", o:["Croissance en diversifiant des activités complémentaires au sein d'un secteur d'activité","Croissance en maîtrisant les différents organes : approvisionnement, production et distribution","Ajout des métiers nouveaux aux activités actuelles de l'entreprise","Maintien de l'entreprise dans un seul DAS pour y développer et exploiter des compétences spécifiques","Autre"], a:1,
model:"L'**intégration verticale** (amont ou aval) consiste à prendre le contrôle des étapes successives de la filière : approvisionnement, production, distribution. C : diversification ; D : spécialisation."}
]}
]});

EXAMS.push({
id:"tec-2020", subject:"tec", year:2020, session:"20-21 mars 2021", title:"Techniques d'expression et de communication (culture générale)", date:"Dimanche 21 mars 2021", duration:120, pages:[325,326],
sections:[
{title:"Texte : « Pour un nouvel urbanisme » (Le Monde diplomatique)", pts:20, pages:[326,326], th:["tec-dissertation","tec-questions"],
ctx:`**Pour un nouvel urbanisme**
Jamais une telle proportion de l'humanité n'aura vécu dans des villes, et dans ce paysage urbain en constante expansion les métropoles tiennent une place de choix. Bien qu'elles représentent moins d'un quart de la main-d'œuvre de la planète, les trois cents plus grandes d'entre elles génèrent près de la moitié du produit intérieur brut (PIB) mondial et elles contribuent à hauteur de 67 % à sa croissance. Un poids économique considérable, qui explique la force d'attraction des grandes villes sur les flux migratoires nationaux et internationaux.
La croissance démographique des grands centres urbains a pris une telle ampleur que même le terme de métropole (du grec ancien *metropolis*, « ville mère ») est considéré par certains analystes comme restrictif. Ainsi, on parle de plus en plus souvent de « mégalopoles » (un mot utilisé pour les 33 agglomérations qui dépassent aujourd'hui 10 millions d'habitants), voire, pour des réalités formées par plusieurs métropoles, tels que les couloirs entre Boston et Washington ou entre San Francisco et San Diego, de « région métropolitaine ».
Aucun continent n'échappe au mouvement de métropolisation de la planète. Les mégalopoles et métropoles organisent les flux économiques, financiers, productifs et commerciaux du capitalisme mondialisé et charrient avec eux leur lot d'inégalités. Mais comment administrer ces entités démesurées ? La pandémie de Covid-19 a mis en évidence tant leur fragilité que leur capacité à peser sur les gouvernements.
Toujours plus peuplées, toujours plus démesurées… Les villes hébergent depuis une douzaine d'années plus de la moitié de l'humanité. Désormais incontournables, agissant en réseau, les grandes métropoles structurent le capitalisme mondialisé et s'unissent pour orienter les politiques publiques à leur profit. Socialement, elles deviennent aussi le creuset d'inégalités toujours plus fortes. Une revanche des campagnes ? Pas si sûr. L'espoir d'une vie saine est surtout à la portée de ceux qui en ont les moyens.
La métropolisation du monde entraîne avec elle son lot de ruptures et de désorganisations. Elle est taillée pour les plus riches et les plus diplômés, qui captent l'espace urbain au détriment des ménages à revenus modestes. À l'échelle des pays, elle se nourrit de la mobilité à grande vitesse — des personnes, des marchandises, des capitaux —, abandonnant des pans de territoire et concentrant les maux.
Écologiques, durables, innovantes, intelligentes… Les villes cherchent par bien des moyens à soigner leur habitabilité. Les commerces se réinventent. Les projets utopiques fleurissent. Et les populations, parfois, résistent. À la faveur de la pandémie de Covid-19, le désir d'un retour à la campagne alimente l'espoir d'une vie plus saine. Surtout chez ceux qui en ont les moyens.
— *Le Monde diplomatique*
**Question** : en vous appuyant sur le texte, analysez l'affirmation suivante : « À la faveur de la pandémie de Covid-19, le désir d'un retour à la campagne alimente l'espoir d'une vie plus saine. Surtout chez ceux qui en ont les moyens ».`,
questions:[
{pts:20, q:"En vous appuyant sur le texte, analysez : « À la faveur de la pandémie de Covid-19, le désir d'un retour à la campagne alimente l'espoir d'une vie plus saine. Surtout chez ceux qui en ont les moyens ».",
model:`#### Introduction
- **Accroche** : plus de la moitié de l'humanité vit en ville ; les 300 plus grandes métropoles produisent près de la moitié du PIB mondial.
- **Explication** : les confinements ont révélé la **fragilité** des métropoles (densité, logements exigus, pollution, contagion) et ravivé le **désir de campagne** (espace, nature, calme). Mais l'auteur nuance : ce retour est un **privilège** réservé à ceux qui peuvent se le permettre.
- **Problématique** : l'exode urbain post-Covid traduit-il une vraie « revanche des campagnes » ou un nouveau marqueur d'**inégalités** ?
- **Plan** : les raisons du désir de campagne (I), une possibilité socialement sélective (II), vers un nouvel équilibre ville-campagne (III).
#### I. La pandémie, révélateur des limites de la métropole
1. **Fragilité sanitaire** : densité, transports saturés, diffusion rapide du virus ; confinement vécu difficilement dans des logements petits et sans espaces verts.
2. **Qualité de vie** : pollution, bruit, stress, coût du logement ; la campagne apparaît comme synonyme d'air pur, d'espace, de lien avec la nature et d'alimentation locale.
3. **Un nouveau rapport au travail** : le **télétravail** a montré qu'on pouvait travailler loin du bureau ; les outils numériques rendent possible une installation dans des villes moyennes ou à la campagne.
#### II. « Surtout chez ceux qui en ont les moyens » : un retour sélectif
1. **Le télétravail est réservé** aux cadres et professions intellectuelles ; les ouvriers, soignants, livreurs, commerçants (« travailleurs essentiels ») doivent rester sur place.
2. **Le coût** : résidence secondaire, achat d'une maison, véhicule, connexion internet de qualité — autant de moyens dont disposent surtout les plus riches et les plus diplômés, déjà favorisés par la métropolisation selon le texte.
3. **Des effets pervers** : hausse des prix de l'immobilier rural (gentrification), éviction des habitants locaux ; les campagnes réelles souffrent souvent d'un manque de services publics (santé, écoles, transports) et d'emplois.
4. **Le cas marocain** : forte attractivité de Casablanca, Rabat, Tanger ; l'exode rural reste dominant ; le « retour à la campagne » concerne surtout des ménages aisés (résidences secondaires), tandis que le monde rural reste marqué par la pauvreté et le manque d'infrastructures.
#### III. Vers un nouvel équilibre territorial ?
1. **Rendre les villes plus habitables** : villes « durables, intelligentes », espaces verts, « ville du quart d'heure », logement abordable.
2. **Revitaliser les territoires** : villes moyennes, services publics, couverture numérique, régionalisation avancée et développement rural (au Maroc, programmes de réduction des disparités territoriales, Génération Green).
3. **Réduire les inégalités** d'accès à une vie saine : politique du logement, droit au télétravail, santé publique.
#### Conclusion
- **Bilan** : la pandémie a transformé l'aspiration à une vie plus saine en désir de campagne, mais ce choix reste un luxe ; la vraie question est celle de la répartition équitable de la qualité de vie entre villes et campagnes, entre riches et modestes.
- **Ouverture** : le développement du travail à distance (y compris dans les métiers de l'audit et de l'expertise comptable) pourrait-il durablement rééquilibrer les territoires ?`,
kp:["Introduction : chiffres du texte, explication de la phrase, problématique, plan","Raisons du désir de campagne : fragilité sanitaire, qualité de vie, télétravail","Analyse de « surtout chez ceux qui en ont les moyens » : inégalités face au télétravail et au logement","Effets pervers (gentrification rurale, manque de services publics)","Exemple marocain pertinent","Pistes : villes plus habitables, revitalisation des territoires","Conclusion avec ouverture","Expression : plan apparent, transitions, orthographe"]}
]}
]});
