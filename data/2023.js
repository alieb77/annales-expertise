/* Session 2023 (14-15 octobre 2023) */
EXAMS.push({
id:"cpt-2023", subject:"cpt", year:2023, session:"14-15 octobre 2023", title:"Comptabilité générale et analytique", date:"Samedi 14 octobre 2023", duration:300, pages:[365,372],
note:"Deux copies séparées : comptabilité générale /20 et comptabilité analytique /20",
sections:[
{title:"CG — Dossier 1 : Définitions et questions", pts:5, pages:[366,366], th:["cg-eval","cg-subv"],
ctx:`**Définir succinctement les notions suivantes** : le dispositif de fond et le dispositif de forme prévus par la loi comptable ; la règle d'intangibilité du bilan ; la subvention d'équilibre.
**Répondre succinctement aux questions suivantes** : dans quel cas les charges financières engagées sont-elles incluses dans le coût d'une immobilisation produite par l'entreprise elle-même ? Quelle est la différence entre la valeur actuelle et la valeur nette comptable ?`,
questions:[
{pts:1, q:"Le dispositif de fond et le dispositif de forme prévus par la loi comptable.",
model:`La **loi 9-88** relative aux obligations comptables des commerçants et le CGNC imposent :
- un **dispositif de forme** (comment tenir la comptabilité) : tenue d'un **livre-journal**, d'un **grand-livre** et d'un **livre d'inventaire** ; enregistrement chronologique, opération par opération, sur la base de **pièces justificatives** datées ; journal et livre d'inventaire **cotés et paraphés** par le greffe du tribunal ; écritures sans blanc ni altération ; **conservation** des documents et pièces pendant 10 ans ; inventaire annuel.
- un **dispositif de fond** (ce que la comptabilité doit traduire) : respect des **principes comptables fondamentaux** (continuité d'exploitation, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, importance significative), **règles d'évaluation** et établissement des **états de synthèse** (bilan, CPC, ESG, TF, ETIC) donnant une **image fidèle** du patrimoine, de la situation financière et des résultats.`,
kp:["Forme : livres obligatoires (journal, grand-livre, inventaire), cotés/paraphés, pièces justificatives, conservation 10 ans","Fond : principes comptables fondamentaux et règles d'évaluation","États de synthèse donnant une image fidèle"]},
{pts:1, q:"La règle d'intangibilité du bilan.",
model:`Le **bilan d'ouverture** d'un exercice doit correspondre **exactement au bilan de clôture** de l'exercice précédent (après affectation du résultat). On ne peut pas modifier directement les capitaux propres d'ouverture pour corriger une erreur ou changer de méthode : les corrections passent par le **CPC** de l'exercice (charges ou produits sur exercices antérieurs, en non courant) et sont expliquées dans l'**ETIC**. Cette règle assure la continuité et la comparabilité des comptes d'un exercice à l'autre.`,
kp:["Bilan d'ouverture N = bilan de clôture N-1","Corrections par le CPC (non courant) et information dans l'ETIC, pas de modification directe des capitaux propres"]},
{pts:1, q:"La subvention d'équilibre.",
model:`Subvention accordée à l'entreprise (par l'État, une collectivité ou la société mère) pour **compenser globalement une perte** ou un déficit d'exploitation, sans être affectée à une charge ou un investissement précis. Elle est enregistrée en **produit non courant** (compte 756 « Subventions d'équilibre ») de l'exercice au titre duquel elle est accordée, et elle est imposable l'année de son obtention. À distinguer de la subvention d'exploitation (716, liée à des produits ou charges d'exploitation) et de la subvention d'investissement (131, liée à l'acquisition d'immobilisations).`,
kp:["Compense un déficit global (pas une charge précise)","Produit non courant (756)","Distinction avec subventions d'exploitation et d'investissement"]},
{pts:1, q:"Dans quel cas les charges financières engagées sont-elles incluses dans le coût d'une immobilisation produite par l'entreprise elle-même ?",
model:`En principe, le coût de production n'inclut pas les charges financières. Elles **peuvent** y être incluses (option) lorsque :
- elles concernent des **capitaux empruntés pour financer la fabrication** de l'immobilisation ;
- elles sont **courues pendant la période de fabrication** (jusqu'à la mise en service) ;
- la fabrication s'étend sur une **longue période** (cycle de production généralement supérieur à 12 mois / à la durée de l'exercice).
L'option doit être appliquée de façon permanente et mentionnée dans l'ETIC.`,
kp:["Principe : exclusion ; inclusion possible (option)","Emprunts finançant la production et intérêts courus pendant la fabrication","Période de fabrication longue ; mention dans l'ETIC"]},
{pts:1, q:"Quelle est la différence entre la valeur actuelle et la valeur nette comptable ?",
model:`- **Valeur nette comptable (VNC)** : valeur inscrite au bilan = valeur d'entrée − amortissements − provisions pour dépréciation. C'est une valeur **historique**.
- **Valeur actuelle** : valeur estimée à la date d'inventaire en fonction du **marché** et de l'**utilité** du bien pour l'entreprise (valeur d'usage, cours moyen du dernier mois, valeur probable de réalisation…).
- À la clôture on **compare** les deux : si la valeur actuelle est inférieure à la VNC, on constate une **dépréciation** (provision, ou amortissement exceptionnel) ; si elle est supérieure, la plus-value n'est **pas comptabilisée** (prudence, coût historique).`,
kp:["VNC = valeur d'entrée − amortissements − provisions","Valeur actuelle = valeur de marché / d'usage à l'inventaire","Comparaison : moins-value → provision ; plus-value non constatée"]}
]},
{title:"CG — Dossier 2 : Renouvellement d'un effet de commerce", pts:4, pages:[366,366], th:["cg-courant"],
ctx:`Le 12 octobre, l'entreprise Omega est avisée par la société Gama de son incapacité à payer le B.O n° 89 à l'échéance du 20 octobre, d'une valeur nominale de **100 000 DH**. Elle demande l'annulation et la création d'une nouvelle traite au **1er décembre**. La société accepte sur la base d'une majoration à un taux d'intérêt annuel de **9,25 %**. La nouvelle traite n° 92 est transmise le 17 octobre.
**Enregistrer les écritures comptables relatives à ces opérations (arrondir à l'unité près).**`,
questions:[
{pts:4, q:"Enregistrer les écritures comptables relatives à ces opérations (arrondir à l'unité près).",
chk:[{l:"Intérêts de retard",v:1079,u:"DH",tol:1},{l:"Nominal de la nouvelle traite n° 92 (TVA 10 % sur intérêts)",v:101187,u:"DH",tol:2,alt:[101079]}],
model:`Le billet à ordre n° 89 est dans le portefeuille d'Omega (3425). On l'annule, on facture des intérêts pour le report d'échéance et on crée un nouvel effet.
- Durée du report : du 20 octobre au 1er décembre = 11 + 30 + 1 = **42 jours**.
- Intérêts : 100 000 × 9,25 % × 42 / 360 = 1 079,17 → **1 079 DH**.
- TVA sur intérêts (opération de crédit, taux de 10 %) : **108 DH**.
- Nouveau nominal : 100 000 + 1 079 + 108 = **101 187 DH**.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **12/10** | **Annulation du B.O n° 89** | | |
| 3421 | Clients (Gama) | 100 000 | |
| 3425 | Clients — effets à recevoir | | 100 000 |
| **12/10** | **Facturation des intérêts de retard** | | |
| 3421 | Clients (Gama) | 1 187 | |
| 7381 | Intérêts et produits assimilés | | 1 079 |
| 4455 | État — TVA facturée | | 108 |
| **17/10** | **Réception de la traite n° 92 (échéance 01/12)** | | |
| 3425 | Clients — effets à recevoir | 101 187 | |
| 3421 | Clients (Gama) | | 101 187 |
> Si l'on ne soumet pas les intérêts à la TVA, le nouvel effet est de 101 079 DH. Si l'effet n° 89 avait été remis à l'escompte, il faudrait aussi constater son retour impayé (3421 / 5141) avant l'annulation.`,
kp:["Durée de 42 jours (20/10 → 01/12)","Intérêts 1 079 (arrondi) et TVA 10 % sur intérêts","Annulation de l'ancien effet : 3421 / 3425","Intérêts : 3421 / 7381 et 4455","Nouvel effet : 3425 / 3421 pour 101 187"]}
]},
{title:"CG — Dossier 3 : Portefeuille de titres SIGMA (CMUP)", pts:5, pages:[367,367], th:["cg-titres"],
ctx:`La société ALPHA met à votre disposition les informations suivantes relatives à son portefeuille de titres :
- 01 juillet 2020 : acquisition de 1 250 actions SIGMA au prix de 500 DH ;
- 01 mars 2021 : cession de 300 actions SIGMA au prix de 555 DH l'action ;
- 01 mai 2021 : acquisition de 600 actions SIGMA au prix de 525 DH ;
- 01 juillet 2022 : acquisition de 420 actions SIGMA au prix de 540 DH.
Cours moyens de l'action SIGMA en décembre :
| déc-20 | déc-21 | déc-22 |
|---|---|---|
| 530 | 540 | 500 |
NB : la méthode choisie par l'entreprise pour l'évaluation est le **CMUP**. La commission bancaire pour l'achat ou la vente est de **1 % hors taxe** et le taux de TVA est de **10 %**.
**Travail à faire** : 1. Quelle est la valeur comptable nette du portefeuille au 31/12/2021 et au 31/12/2022 ? 2. Enregistrer la cession des titres en mars 2021 (2 pts).`,
questions:[
{pts:3, q:"1. Valeur comptable nette du portefeuille au 31/12/2021 et au 31/12/2022.",
chk:[{l:"VNC au 31/12/2021",v:790000,u:"DH"},{l:"Provision au 31/12/2022",v:31800,u:"DH"},{l:"VNC au 31/12/2022",v:985000,u:"DH"}],
model:`Les titres sont enregistrés au **prix d'achat hors frais** (les commissions sont des charges, 6147) ; ils sont traités ici comme des TVP.
| Date | Opération | Quantité | Coût unitaire | Valeur | Stock (qté / valeur) | CMUP |
|---|---|---|---|---|---|---|
| 01/07/2020 | Achat | 1 250 | 500 | 625 000 | 1 250 / 625 000 | 500 |
| 31/12/2020 | Cours 530 > 500 | | | | pas de provision | |
| 01/03/2021 | Cession | 300 | 500 | 150 000 | 950 / 475 000 | 500 |
| 01/05/2021 | Achat | 600 | 525 | 315 000 | 1 550 / 790 000 | 509,68 |
| 31/12/2021 | Cours 540 > 509,68 | | | | pas de provision | |
| 01/07/2022 | Achat | 420 | 540 | 226 800 | 1 970 / 1 016 800 | 516,14 |
| 31/12/2022 | Cours 500 < 516,14 | | | | provision 31 800 | |
- **31/12/2021** : VNC = ==790 000 DH== (aucune dépréciation : 540 > 509,68).
- **31/12/2022** : valeur brute 1 016 800 ; valeur actuelle 1 970 × 500 = 985 000 ⇒ **provision 31 800** (6394 / 3950) ⇒ VNC = ==985 000 DH==.`,
kp:["Titres au prix d'achat hors commissions","CMUP recalculé après chaque achat (509,68 puis 516,14)","Sortie de mars 2021 au CMUP 500","2021 : pas de provision, VNC 790 000","2022 : provision 31 800 et VNC 985 000"]},
{pts:2, q:"2. Enregistrer la cession des titres en mars 2021.",
chk:[{l:"Montant net porté en banque",v:164668.5,u:"DH",tol:1},{l:"Plus-value de cession (prix − CMUP)",v:16500,u:"DH"}],
model:`Prix de cession : 300 × 555 = 166 500 ; commission 1 % = 1 665 ; TVA 10 % = 166,50 ; net en banque = 164 668,50. Coût de sortie (CMUP) : 300 × 500 = 150 000 ⇒ plus-value 16 500.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 5141 | Banques | 164 668,50 | |
| 6147 | Services bancaires | 1 665,00 | |
| 34552 | État — TVA récupérable sur charges | 166,50 | |
| 3500 | Titres et valeurs de placement | | 150 000,00 |
| 7385 | Produits nets sur cessions de TVP | | 16 500,00 |
> Si les titres SIGMA étaient des titres immobilisés : 5141 / 7514 « Produits des cessions des immobilisations financières » pour 166 500, puis 6514 « VNA des immobilisations financières cédées » / 2510 pour 150 000.`,
kp:["Net en banque 164 668,50 (prix − commission − TVA)","Commission en charge (6147) et TVA récupérable","Sortie au CMUP (150 000) et plus-value nette 16 500 (7385)"]}
]},
{title:"CG — Dossier 4 : Extrait de balance et CPC (OMEGA)", pts:6, pages:[368,369], th:["cg-inventaire","cg-etats"],
ctx:`L'entreprise OMEGA vous fournit l'extrait de balance avant inventaire au 31/12/2022 (**montants en KDH**) :
| N° | Comptes | Soldes débiteurs | Soldes créditeurs |
|---|---|---|---|
| 6111 | Achats de marchandises | 92 550 | |
| 6119 | RRR obtenus sur achats de marchandises | | 738 |
| 6125 | Achats non stockés de matières et fournitures | 9 350 | |
| 6131 | Locations et charges locatives | 14 105 | |
| 6134 | Primes d'assurance | 4 845 | |
| 6136 | Rémunérations d'intermédiaires et honoraires | 9 345 | |
| 6142 | Transports | 7 587 | |
| 6145 | Frais postaux et frais de télécommunications | 1 774 | |
| 6147 | Services bancaires | 738 | |
| 6161 | Impôts et taxes directs | 933 | |
| 6171 | Rémunérations du personnel | 7 595 | |
| 6174 | Charges sociales | 3 418 | |
| 6311 | Intérêts des emprunts et dettes | 936 | |
| 6386 | Escomptes accordés | 490 | |
| 6583 | Pénalités et amendes fiscales | 258 | |
| 7111 | Ventes de marchandises | | 163 845 |
| 7127 | Ventes et produits accessoires | | 3 426 |
| 7381 | Intérêts et produits assimilés | | 327 |
| 7386 | Escomptes obtenus | | 654 |
| 7513 | PC des immobilisations corporelles | | 4 875 |
- Une facture d'achat a été comptabilisée le 27/12/2022 alors que les marchandises sont encore chez le fournisseur pour un montant de 500 KDH HT (TVA 20 %).
- La redevance de téléphone de décembre a été reçue le 11/01/2023 pour un montant de 18 KDH HT (TVA 20 %).
- Une prime d'assurance a été comptabilisée en avril 2022 et couvre la période du 01/04/2022 au 31/03/2023 pour un montant global de 48 KDH.
- Le stock final de marchandises s'établit à 1 980 KDH alors que le stock initial était de 1 960 KDH. Le stock doit être déprécié de 5 %.
- Les dotations d'exploitation aux amortissements des immobilisations corporelles sont de l'ordre de 2 322 KDH.
- L'immobilisation cédée à 4 875 KDH avait été acquise à 1 300 KDH et est totalement amortie.
- L'entreprise doit constituer une nouvelle provision pour un litige avec un fournisseur de l'ordre de 126 KDH.
**Dans le cadre de l'établissement du CPC après inventaire au titre de 2022, quels sont les soldes des rubriques suivantes ?** Produits d'exploitation (1 pt) ; charges d'exploitation (3 pts) ; résultat financier (1 pt) ; résultat non courant (1 pt).`,
questions:[
{pts:1, q:"Produits d'exploitation.",
chk:[{l:"Total des produits d'exploitation",v:167271,u:"KDH"}],
model:`| Rubrique | Montant (KDH) |
|---|---|
| Ventes de marchandises (en l'état) — 7111 | 163 845 |
| Ventes de biens et services produits — 7127 (produits accessoires) | 3 426 |
| **Total produits d'exploitation** | **==167 271==** |
(Aucune reprise d'exploitation ni variation de stocks de produits.)`,
kp:["Ventes de marchandises 163 845","Produits accessoires 3 426 dans le chiffre d'affaires","Total 167 271"]},
{pts:3, q:"Charges d'exploitation (après écritures d'inventaire).",
chk:[{l:"Achats revendus de marchandises",v:91292,u:"KDH"},{l:"Autres charges externes",v:38400,u:"KDH"},{l:"Total des charges d'exploitation",v:153535,u:"KDH",alt:[153409]}],
model:`#### Écritures d'inventaire retenues
- Marchandises facturées non reçues : **charges constatées d'avance** 500 (3491 / 6111).
- Téléphone de décembre : **charge à payer** 18 (6145 + 34552 3,6 / 4417 21,6).
- Assurance : 48 × 3/12 = **12 de charges constatées d'avance** (3491 / 6134).
- Variation de stock de marchandises : SI − SF = 1 960 − 1 980 = **− 20**.
- Provision pour dépréciation du stock : 5 % × 1 980 = **99** (6196 / 3911).
- Dotations aux amortissements : **2 322** (6193).
- Provision pour litige fournisseur : **126** (6195 / 1511), litige lié à l'exploitation.
#### Charges d'exploitation (KDH)
| Rubrique | Calcul | Montant |
|---|---|---|
| Achats revendus de marchandises | 92 550 − 738 − 500 − 20 | 91 292 |
| Achats consommés de matières et fournitures | 6125 | 9 350 |
| Autres charges externes | 14 105 + (4 845 − 12) + 9 345 + 7 587 + (1 774 + 18) + 738 | 38 400 |
| Impôts et taxes | 6161 | 933 |
| Charges de personnel | 7 595 + 3 418 | 11 013 |
| Dotations d'exploitation | 2 322 + 99 + 126 | 2 547 |
| **Total charges d'exploitation** | | **==153 535==** |
Résultat d'exploitation = 167 271 − 153 535 = **13 736 KDH**.
> Si la provision pour litige est classée en non courant (6595), les charges d'exploitation sont de 153 409.`,
kp:["Facture de marchandises non reçues : CCA 500 (achats diminués)","Variation de stock − 20 et achats revendus 91 292","Charge à payer téléphone + 18 ; CCA assurance − 12","Autres charges externes 38 400 (6147 inclus)","Charges de personnel 11 013 ; impôts et taxes 933","Dotations 2 547 (amortissements 2 322 + stock 99 + litige 126)","Total 153 535"]},
{pts:1, q:"Résultat financier.",
chk:[{l:"Résultat financier",v:-445,u:"KDH"}],
model:`| | Montant (KDH) |
|---|---|
| Intérêts et produits assimilés (7381) | 327 |
| Escomptes obtenus (7386) | 654 |
| **Produits financiers** | **981** |
| Intérêts des emprunts et dettes (6311) | 936 |
| Escomptes accordés (6386) | 490 |
| **Charges financières** | **1 426** |
| **Résultat financier** | **==− 445==** |`,
kp:["Produits financiers 981 (intérêts + escomptes obtenus)","Charges financières 1 426 (intérêts + escomptes accordés)","Résultat financier − 445"]},
{pts:1, q:"Résultat non courant.",
chk:[{l:"Résultat non courant",v:4617,u:"KDH",alt:[4491]}],
model:`| | Montant (KDH) |
|---|---|
| Produits des cessions d'immobilisations (7513) | 4 875 |
| VNA de l'immobilisation cédée (totalement amortie : 1 300 − 1 300) | 0 |
| Pénalités et amendes fiscales (6583) | 258 |
| **Résultat non courant** | **==4 617==** |
(Écriture de sortie : 2832 / 2332 pour 1 300 sans incidence sur le résultat.)`,
kp:["Produit de cession 4 875 et VNA nulle","Pénalités en charges non courantes (258)","Résultat non courant 4 617"]}
]},
{title:"CA — Exercice 1 : Compresse (imputation rationnelle et coût de sous-activité)", pts:10, pages:[370,370], th:["ca-ir","ca-variable"],
ctx:`La société Compresse, PME de la région de Casablanca, est spécialisée dans le montage de compresseurs (cuve, moteur, pompe, pièces importées pour la plupart et assemblées par l'entreprise).
Analyse des charges de juin N relatives au **compresseur 125** :
- charges de production : variables unitaires **144 DH** ; fixes mensuelles **1 200 DH** ;
- autres charges (hors production) du mois : **1 800 DH dont 600 DH de charges fixes**.
L'activité normale et programmée correspond à une fabrication et à une vente de **60 compresseurs 125 par mois**. En juin, la production a été de **40** compresseurs ; **35** ont été vendus au prix unitaire HT de **240 DH** et le stock au 30 juin est de **5** compresseurs.
**Questions**
1. Calculer le coût de production d'un compresseur 125 fabriqué en juin N, sans et avec imputation rationnelle.
2. Présenter, pour juin N, les deux comptes de résultat de comptabilité financière, réduits aux compresseurs 125, correspondant à ces deux valorisations de la production.
3. En vous limitant aux seules charges de production, calculer le coût de sous-activité du mois et le répartir entre la production vendue et la production stockée.
4. Calculer le coût global de sous-activité du mois en considérant que les « autres charges » sont essentiellement des charges de distribution.`,
questions:[
{pts:3, q:"1. Coût de production d'un compresseur 125, sans et avec imputation rationnelle.",
chk:[{l:"Coût unitaire sans IR",v:174,u:"DH"},{l:"Coût unitaire avec IR",v:164,u:"DH"}],
model:`- **Sans IR** : 144 + 1 200 / 40 = 144 + 30 = ==174 DH==
- **Avec IR** : coefficient d'activité = 40 / 60 = 2/3 ; charges fixes imputées = 1 200 × 2/3 = 800 ⇒ 800 / 40 = 20 DH par unité ⇒ 144 + 20 = ==164 DH== (soit 144 + 1 200 / 60).`,
kp:["Sans IR : 144 + 1 200/40 = 174","Coefficient 40/60 et charges fixes imputées 800","Avec IR : 164"]},
{pts:3, q:"2. Les deux comptes de résultat (sans et avec IR) réduits aux compresseurs 125.",
chk:[{l:"Résultat (stock valorisé sans IR)",v:510,u:"DH"},{l:"Résultat (stock valorisé avec IR)",v:460,u:"DH"}],
model:`| | Sans IR | Avec IR |
|---|---|---|
| Ventes : 35 × 240 | 8 400 | 8 400 |
| Production stockée : 5 × coût | 870 | 820 |
| **Total produits** | **9 270** | **9 220** |
| Charges de production : 40 × 144 + 1 200 | 6 960 | 6 960 |
| Autres charges | 1 800 | 1 800 |
| **Total charges** | **8 760** | **8 760** |
| **Résultat** | **==510==** | **==460==** |
L'écart (50) correspond à la part du coût de sous-activité « stockée » sans IR (5 × 10).`,
kp:["Production stockée 5 × 174 = 870 / 5 × 164 = 820","Charges réelles identiques (8 760)","Résultats 510 et 460, écart de 50 expliqué"]},
{pts:2, q:"3. Coût de sous-activité de production et sa répartition entre production vendue et stockée.",
chk:[{l:"Coût de sous-activité (production)",v:400,u:"DH"},{l:"Part imputable à la production stockée",v:50,u:"DH"}],
model:`Coût de sous-activité = charges fixes × (1 − activité réelle / activité normale) = 1 200 × (1 − 40/60) = ==400 DH== (= 1 200 − 800 imputés).
Répartition au prorata des quantités : production vendue 35/40 × 400 = **350** ; production stockée 5/40 × 400 = ==50==.
Avec l'IR, ces 400 DH sont des charges de la période (non incorporées aux stocks) ; sans IR, 50 DH se retrouvent dans la valeur du stock.`,
kp:["400 = 1 200 × 20/60","350 sur la production vendue, 50 sur la production stockée","Lien avec l'écart de résultat de la question 2"]},
{pts:2, q:"4. Coût global de sous-activité du mois (autres charges = charges de distribution).",
chk:[{l:"Coût global de sous-activité",v:650,u:"DH"}],
model:`Pour la distribution, l'activité se mesure par les **ventes** : 35 vendus pour 60 normalement.
Sous-activité de distribution = 600 × (1 − 35/60) = 600 × 25/60 = **250 DH**.
**Coût global de sous-activité** = 400 (production) + 250 (distribution) = ==650 DH==.
Vérification : résultat analytique « normal » = 8 400 − 35 × 164 − 1 200 (distribution variable) − 600 × 35/60 = 1 110 ; 1 110 − 650 = **460** = résultat avec IR (question 2) ; en ajoutant les 50 de sous-activité « stockés » sans IR, on retrouve **510**.`,
kp:["Activité de distribution mesurée par les ventes (35/60)","Sous-activité de distribution 250","Total 650"]}
]},
{title:"CA — Exercice 2 : Lambda (coût d'entrée d'une matière traitée, en-cours, commande)", pts:10, pages:[371,372], th:["ca-couts","ca-encours","ca-stocks"],
ctx:`NB : les coûts globaux sont arrondis au DH le plus proche et les coûts unitaires au centime le plus proche.
Dans son usine d'Agadir, l'entreprise Lambda fabrique et vend un produit unique **PF**. Le traitement nécessite : le passage dans un **atelier d'usinage** dans lequel est incorporée, en début de fabrication, une matière **M1** qui a subi, dès son achat, un traitement de préparation spécifique ; la pièce usinée est transmise immédiatement à l'**atelier suivant**, où elle est traitée **anti-corrosion** par vaporisation en continu d'une matière **M2**. Le produit traité est stocké pour séchage. Il est vendu à des grossistes en **boîte de 10 sachets** ; chaque sachet contient **3 unités** de PF. Certaines ventes, en vrac, sont effectuées à l'usine de Marrakech qui appartient à la firme Lambda.
Le traitement spécifique de préparation de M1 est effectué dès son acquisition et avant stockage. Pendant ce traitement, la matière perd **2 % de son poids par évaporation** et fait apparaître un **déchet** dont le poids peut être évalué à **10 % des quantités de matières obtenues et stockées**. Ce déchet est vendu **2,50 DH le kg** à une entreprise qui se charge de l'évacuer mais uniquement par lots de 500 kg.
**Stocks au 01/04/N** : M1 2 000 kg pour 64 565 DH ; M2 15 kg pour 2 692 DH ; sachets 2 200 à 0,50 DH ; boîtes cartons 1 120 à 5,70 DH ; palettes (emballages récupérables) 480 à 35 DH dont 200 chez les clients ; en-cours d'usinage 34 996 DH ; en-cours de TT anti-corrosion 20 379 DH ; produit fini PF 2 000 à 29,30 DH l'unité.
**Achats de la période** : M1 16 500 kg à 12 DH ; M2 215 kg à 242 DH ; sachets 17 000 à 0,50 DH ; boîtes cartons 5 000 à 5,00 DH.
**Consommations** : M1 13 090 kg ; M2 210 kg ; main-d'œuvre directe (atelier de préparation M1) 400 h ; sachets : on considère comme normale une consommation de 105 sachets pour 300 produits.
**Production** : 52 000 unités de PF. **Ventes** : 1 500 boîtes à 1 490 DH la boîte et 7 200 PF en vrac à 3 800 DH le cent ; déchets : 2 enlèvements ont eu lieu.
**Tableau de répartition des charges indirectes**
| Traitement MP1 | Approvisionnement | Usinage | Traitement anti-corrosion | Distribution |
|---|---|---|---|---|
| 95 070 DH — kg traité | 256 550 DH — matière stockée | 160 470 DH — heure de MOD | 131 980 DH — heure de MOD | 40 560 DH — CA exprimé en % |
L'entreprise impute les coûts d'UO arrondis au centime. **Taux horaires de MOD** : préparation M1 32 DH ; usinage 70 DH ; anti-corrosion 50 DH.
**Éléments de valorisation des en-cours (situation au 30 avril N)**
| Atelier / équipe | Produits terminés | dont en-cours au 1/04 (nombre) | dont en-cours au 1/04 (valeur) | En-cours finaux (nombre) | % d'avancement | Heures réelles |
|---|---|---|---|---|---|---|
| Usinage (en kg) — équipe 1 | 6 000 | 130 | 18 900 | 120 | 20 % | 2 200 |
| Usinage (en kg) — équipe 2 | 7 000 | 110 | 16 096 | 140 | 50 % | 2 320 |
| Anti-corrosion (en produits) — équipe 1 | 24 400 | 800 | 16 240 (80 %) | 680 | 70 % | 3 050 |
| Anti-corrosion (en produits) — équipe 2 | 27 600 | 200 | 4 139 (80 %) | 140 | 60 % | 3 550 |
L'usine retient des **rendements standards** pour valoriser ses en-cours : **0,300 h par kg** (usinage) et **0,125 h par produit** (anti-corrosion) ; on considère comme normal l'obtention de **4 produits par kilo** de M1 usinée.
**Inventaire de fin de période** : M1 3 600 kg ; M2 : un pot de 2 kg a disparu ; sachets 3 400 ; boîtes : pas de manquant.
**Questions**
1. Déterminer le coût d'entrée en stock de M1 et présenter le compte de stock, sachant que les sorties de M1 sont valorisées à un coût conventionnel de **37 DH le kg**.
2. Présenter les calculs conduisant à la valorisation des en-cours au 30/04/N.
3. Un client a commandé **9 000 unités** de PF conditionnées et livrées par palettes de 50 boîtes. Chaque palette lui a été consignée 45 DH. Un escompte de 1 % HT lui a été accordé. Présenter le corps de la facture ; déterminer le coût de revient et le résultat analytique de cette commande.`,
questions:[
{pts:4, q:"1. Coût d'entrée de M1 et compte de stock (sorties au coût conventionnel de 37 DH/kg).",
chk:[{l:"Quantité de M1 stockée",v:14700,u:"kg"},{l:"Coût d'entrée de M1 (total)",v:555005,u:"DH",tol:40},{l:"CMUP de M1 sur la période",v:37.1,u:"DH/kg",tol:0.01}],
model:`#### Quantités
16 500 kg achetés − 2 % d'évaporation (330 kg) = 16 170 kg = matière stockée (Q) + déchet (0,10 Q) ⇒ 1,1 Q = 16 170 ⇒ **Q = 14 700 kg** ; déchet = **1 470 kg**.
#### Coûts d'UO
- Traitement M1 : 95 070 / 16 500 kg traités = **5,76 DH**
- Approvisionnement : 256 550 / (14 700 kg de M1 + 215 kg de M2 stockés) = 256 550 / 14 915 = **17,20 DH/kg**
#### Coût d'entrée de M1
| Élément | Calcul | Montant |
|---|---|---|
| Prix d'achat | 16 500 × 12 | 198 000 |
| MOD de préparation | 400 h × 32 | 12 800 |
| Centre traitement M1 | 16 500 × 5,76 | 95 040 |
| Centre approvisionnement | 14 700 × 17,20 | 252 840 |
| Valeur des déchets (à déduire) | 1 470 × 2,50 | − 3 675 |
| **Coût d'entrée (14 700 kg)** | | **==555 005==** |
Soit 37,76 DH/kg.
#### Compte de stock M1 (inventaire permanent)
| Débit | Qté | Valeur | Crédit | Qté | Valeur |
|---|---|---|---|---|---|
| Stock initial | 2 000 | 64 565 | Sorties au coût conventionnel (× 37) | 13 090 | 484 330 |
| Entrées | 14 700 | 555 005 | Manquant d'inventaire (× 37,10) | 10 | 371 |
| | | | Stock final réel (× 37,10) | 3 600 | 133 560 |
| | | | Différence sur coût conventionnel | | 1 309 |
| **Total** | **16 700** | **619 570** | **Total** | **16 700** | **619 570** |
CMUP de la période = 619 570 / 16 700 = **37,10 DH/kg**. Les sorties ayant été valorisées à 37 DH, elles sont **sous-évaluées** de 13 090 × 0,10 = **1 309 DH** (écart à reprendre dans les différences de traitement comptable / concordance).
> Le M2 suit la même logique : coût d'entrée 215 × (242 + 17,20) = 55 728 ; CMUP = (2 692 + 55 728) / 230 = **254 DH/kg**.`,
kp:["Quantités : 14 700 kg stockés et 1 470 kg de déchets","Coûts d'UO 5,76 (kg traités) et 17,20 (kg stockés M1 + M2)","Prix d'achat + MOD de préparation + centres − valeur des déchets = 555 005","Compte de stock avec SI, entrées, sorties à 37, manquant de 10 kg et SF","Différence sur coût conventionnel (CMUP 37,10 → 1 309)"]},
{pts:3, q:"2. Calculs conduisant à la valorisation des en-cours au 30/04/N.",
chk:[{l:"En-cours final d'usinage",v:12595,u:"DH",tol:5},{l:"En-cours final d'anti-corrosion",v:19550,u:"DH",tol:60}],
model:`#### Coûts horaires (UO = heure de MOD réelle)
- Usinage : 160 470 / 4 520 h = 35,50 ⇒ coût de l'heure = 70 (MOD) + 35,50 = **105,50 DH** ⇒ usinage complet d'un kg = 0,3 × 105,50 = **31,65 DH**
- Anti-corrosion : 131 980 / 6 600 h = 20,00 ⇒ coût de l'heure = 50 + 20 = **70 DH** ⇒ traitement complet d'un produit = 0,125 × 70 = **8,75 DH**
- M2 (vaporisée en continu, donc au prorata de l'avancement) : production équivalente de l'atelier = 52 000 − 1 000 × 80 % + (680 × 70 % + 140 × 60 %) = 51 760 ; M2 par produit équivalent = 210 × 254 / 51 760 = **1,03 DH**
- Coût d'un produit sortant de l'usinage (4 produits par kg) : (37 + 31,65) / 4 = **17,16 DH**
#### En-cours d'usinage (M1 incorporée à 100 % au début)
| Équipe | M1 (× 37) | Usinage (kg × % × 0,3 h × 105,50) | Total |
|---|---|---|---|
| 1 : 120 kg à 20 % | 4 440,00 | 7,2 h → 759,60 | 5 199,60 |
| 2 : 140 kg à 50 % | 5 180,00 | 21 h → 2 215,50 | 7 395,50 |
| **Total** | | | **==12 595==** |
#### En-cours d'anti-corrosion (pièce usinée à 100 %, traitement et M2 au prorata)
| Équipe | Pièces usinées (× 17,1625) | Traitement (× % × 8,75) | M2 (× % × 1,03) | Total |
|---|---|---|---|---|
| 1 : 680 à 70 % | 11 670,50 | 4 165,00 | 490,28 | 16 325,78 |
| 2 : 140 à 60 % | 2 402,75 | 735,00 | 86,52 | 3 224,27 |
| **Total** | | | | **==19 550==** |`,
kp:["Coûts d'UO 35,50 et 20,00 ; coûts horaires 105,50 et 70","Usage des rendements standards (0,3 h/kg ; 0,125 h/produit ; 4 produits/kg)","Matière M1 à 100 % dans les en-cours d'usinage, travail au prorata de l'avancement","En-cours anti-corrosion : coût complet de la pièce usinée + traitement et M2 au prorata","Totaux ≈ 12 595 et ≈ 19 550"]},
{pts:3, q:"3. Corps de la facture, coût de revient et résultat analytique de la commande de 9 000 PF.",
chk:[{l:"Net à payer de la facture",v:531306,u:"DH",tol:2},{l:"Coût de revient de la commande",v:270095,u:"DH",tol:1500},{l:"Résultat analytique de la commande",v:176905,u:"DH",tol:1500}],
model:`9 000 PF = 9 000 / 30 = **300 boîtes** (3 000 sachets) = 300 / 50 = **6 palettes**.
#### Corps de la facture
| Libellé | Montant |
|---|---|
| 300 boîtes × 1 490 | 447 000,00 |
| Escompte 1 % | − 4 470,00 |
| Net financier HT | 442 530,00 |
| TVA 20 % | 88 506,00 |
| Consignation de 6 palettes × 45 (hors TVA) | 270,00 |
| **Net à payer** | **==531 306,00==** |
#### Coût de revient de la commande
1. **Coût de production unitaire de PF** :
- usinage terminé = en-cours initial 34 996 + M1 13 090 × 37 + MOD 4 520 × 70 + centre 4 520 × 35,50 − en-cours final 12 595 = 983 591 ;
- anti-corrosion = 20 379 + 983 591 + MOD 6 600 × 50 + centre 6 600 × 20 + M2 210 × 254 − 19 550 = 1 499 760 pour 52 000 PF ⇒ 28,84 DH ;
- CMUP du stock de PF = (2 000 × 29,30 + 1 499 760) / 54 000 = **28,86 DH**.
2. **Distribution** : CA de la période = 1 500 × 1 490 + 7 200 × 38 = 2 508 600 ; taux = 40 560 / 2 508 600 = **1,62 %** du CA.
| Élément | Calcul | Montant |
|---|---|---|
| Produits finis | 9 000 × 28,86 | 259 740 |
| Sachets (consommation normale 105 pour 300 produits) | 3 150 × 0,50 | 1 575 |
| Boîtes (CMUP (6 384 + 25 000) / 6 120 = 5,13) | 300 × 5,13 | 1 539 |
| Centre distribution | 1,62 % × 447 000 | 7 241 |
| **Coût de revient** | | **==270 095==** |
Résultat analytique = 447 000 − 270 095 = ==176 905 DH== (39,6 % du CA). Les palettes, consignées, ne sont pas un coût ; l'escompte (charge financière) est exclu du coût de revient.`,
kp:["Conversion : 300 boîtes, 3 000 sachets, 6 palettes","Facture : escompte 1 %, TVA sur le net financier, consignation hors TVA → 531 306","Coût unitaire de PF par les flux (en-cours initial + charges − en-cours final) et CMUP","Emballages : sachets à la consommation normale (3 150), boîtes au CMUP","Distribution au taux de 1,62 % du CA","Résultat ≈ 176 905"]}
]}
]});

EXAMS.push({
id:"droit-2023", subject:"droit", year:2023, session:"14-15 octobre 2023", title:"Droit des affaires et droit fiscal", date:"Samedi 14 octobre 2023", duration:180, pages:[373,378],
note:"Deux copies séparées : fiscalité /20 et droit des affaires /20 (barème du droit des affaires non précisé : 10 / 5 / 5 retenu)",
sections:[
{title:"Fiscalité — Partie I : cadre de la réglementation fiscale", pts:3, pages:[375,375], th:["df-is","df-tva"],
ctx:`1. Quelles sont les conditions et limites de la déductibilité des intérêts sur les avances en compte courant d'associés ? (1,5 pt)
2. Quelles sont les règles de territorialité en matière de TVA ? (1,5 pt)`,
questions:[
{pts:1.5, q:"1. Conditions et limites de la déductibilité des intérêts sur les avances en compte courant d'associés.",
model:`Les intérêts servis aux associés sur les sommes qu'ils avancent à la société pour les besoins de l'exploitation sont déductibles sous trois conditions cumulatives :
1. le **capital social doit être entièrement libéré** ;
2. le **montant global des avances** ouvrant droit à déduction est **limité au montant du capital social** (au-delà, les intérêts sont réintégrés) ;
3. le **taux** ne doit pas dépasser le **taux fixé annuellement par arrêté du ministre des Finances**, en fonction du taux moyen des bons du Trésor à 6 mois de l'année précédente (ex. 1,89 % pour 2023, 3,19 % pour 2024).
Les intérêts excédentaires sont **réintégrés**. Par ailleurs, les intérêts versés aux associés supportent une **retenue à la source** (produits de placement à revenu fixe), et la déduction suppose leur comptabilisation effective. Les limites ne s'appliquent pas aux sommes avancées pour l'acquisition de biens d'équipement ou d'immobilisations… mais restent soumises au taux plafond.`,
kp:["Capital entièrement libéré","Avances retenues dans la limite du capital social","Taux plafonné (arrêté annuel, bons du Trésor à 6 mois)","Réintégration de l'excédent ; retenue à la source sur les intérêts"]},
{pts:1.5, q:"2. Règles de territorialité en matière de TVA.",
model:`Le principe est celui de l'**imposition au lieu de consommation** (art. 88 CGI). Une opération est réputée faite au Maroc :
- s'il s'agit d'une **vente** : lorsqu'elle est réalisée aux **conditions de livraison** de la marchandise **au Maroc** ;
- s'il s'agit de **toute autre opération** (prestation de services, location, cession de droits) : lorsque la prestation fournie, le droit cédé ou l'objet loué sont **exploités ou utilisés au Maroc**.
**Conséquences**
- Les **exportations** de biens et les services exploités à l'étranger sont **exonérés avec droit à déduction**.
- Les **importations** supportent la TVA à l'importation perçue par la douane.
- Les services rendus par un **non-résident** et utilisés au Maroc sont taxables : la TVA est acquittée par le client marocain pour le compte du prestataire (autoliquidation / retenue).`,
kp:["Ventes : conditions de livraison au Maroc","Services : exploitation ou utilisation au Maroc","Exportations exonérées avec droit à déduction ; TVA à l'importation","Prestataire non-résident : TVA acquittée par le client marocain"]}
]},
{title:"Fiscalité — Partie II : IS (société ABC, 2022) et déficits reportables", pts:7, pages:[375,375], th:["df-is"],
ctx:`**A.** Dans le cadre de la validation du résultat fiscal de 2022 de la société ABC ayant réalisé un chiffre d'affaires HT de **40 000 000 DH**, analysez le traitement fiscal des situations suivantes au regard de l'IS :
1) Don en argent de 100 000 DH accordé à un club de football de la première division ; (0,5 pt)
2) Versement de 200 000 DH dans le compte des œuvres sociales du personnel de la société constituées sous forme d'association à but non lucratif ; (0,5 pt)
3) Achat par crédit bancaire d'une voiture de fonction au profit du directeur financier. La facture datée du 1er juin 2022 fait ressortir un prix de 500 000 DH TTC ; (1,5 pt)
4) La facture de formation continue au profit des commerciaux fait ressortir 120 000 DH TTC ; (0,5 pt)
5) La conversion des dettes et créances en devises au 31/12/2022 fait ressortir : 5-1 écart de conversion actif : 340 000 DH (0,5 pt) ; 5-2 écart de conversion passif : 160 000 DH (0,5 pt).
**B.** Le résultat brut fiscal des exercices 2017 à 2022 et les dotations aux amortissements comptabilisées se présentent comme suit. Déterminer le résultat net fiscal de chaque exercice. (3 pts)
| Exercice | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 |
|---|---|---|---|---|---|---|
| Résultat fiscal brut avant imputation des déficits | (1 500 000) | 800 000 | (200 000) | (50 000) | 100 000 | 850 000 |
| Dotations aux amortissements des immobilisations corporelles et incorporelles | 550 000 | 470 000 | 450 000 | 450 000 | 450 000 | 450 000 |
| Dotations aux amortissements des immobilisations en non-valeur | 80 000 | 80 000 | 80 000 | 80 000 | 80 000 | — |`,
questions:[
{pts:4, q:"A. Traitement fiscal des situations 1 à 5 (exercice 2022).",
chk:[{l:"Réintégration — œuvres sociales",v:120000,u:"DH"},{l:"Réintégration — amortissement de la voiture (2022)",v:23333.33,u:"DH",tol:2},{l:"Réintégration — écart de conversion passif",v:160000,u:"DH"}],
model:`| N° | Situation | Traitement | Correction |
|---|---|---|---|
| 1 | Don de 100 000 à un club de football | Le club n'est ni une fédération sportive ni une association reconnue d'utilité publique (les clubs professionnels sont souvent des sociétés sportives) : **libéralité non déductible**, sauf contrat de parrainage avec contrepartie publicitaire | **Réintégration 100 000** |
| 2 | 200 000 versés aux œuvres sociales du personnel | Déductibles dans la **limite de 2 ‰ du CA** : 40 000 000 × 2 ‰ = 80 000 | **Réintégration 120 000** |
| 3 | Voiture de fonction 500 000 TTC (juin 2022) | TVA non récupérable (véhicule de tourisme) ; amortissement déductible au taux de 20 % sur une base **plafonnée à 300 000 DH TTC**. Dotation comptable : 500 000 × 20 % × 7/12 = 58 333,33 ; déductible : 300 000 × 20 % × 7/12 = 35 000. Les intérêts du crédit restent déductibles | **Réintégration 23 333,33** |
| 4 | Formation continue des commerciaux 120 000 TTC | Charge engagée dans l'intérêt de l'exploitation : déductible pour son montant **HT** (100 000) ; la TVA (20 000) est récupérable et ne doit pas figurer en charge | Aucune (si comptabilisée HT) |
| 5-1 | Écart de conversion actif 340 000 (perte latente) | La **provision pour perte de change** correspondante est déductible | Aucune |
| 5-2 | Écart de conversion passif 160 000 (gain latent) | Le gain de change latent est **imposable** dans l'exercice de constatation (il sera déduit l'année de sa réalisation pour éviter une double imposition) | **Réintégration 160 000** |`,
kp:["Don au club : non déductible (sauf RUP / parrainage) → 100 000","Œuvres sociales limitées à 2 ‰ du CA → réintégration 120 000","Voiture : base plafonnée 300 000 TTC, 7 mois → réintégration 23 333","Formation : charge déductible HT","Écart actif : provision déductible ; écart passif : gain latent imposable (160 000)"]},
{pts:3, q:"B. Résultat net fiscal de chaque exercice 2017 à 2022.",
chk:[{l:"Résultat net fiscal 2018",v:0,u:"DH"},{l:"Résultat net fiscal 2021",v:0,u:"DH"},{l:"Résultat net fiscal 2022",v:50000,u:"DH",alt:[0]}],
model:`**Règles** : un déficit est reportable sur les **4 exercices suivants** ; la fraction du déficit qui correspond à des **amortissements** est reportable **sans limite de durée**. On impute en priorité les déficits ordinaires (limités dans le temps), les plus anciens d'abord. Le corrigé retient que seuls les amortissements des immobilisations **corporelles et incorporelles** bénéficient du report illimité (les non-valeurs suivent le régime ordinaire).
| Exercice | Résultat brut | Déficit ordinaire (4 ans) | Déficit d'amortissement (illimité) | Imputation | **Résultat net fiscal** |
|---|---|---|---|---|---|
| 2017 | − 1 500 000 | 950 000 (jusqu'en 2021) | 550 000 | — | **déficit 1 500 000** |
| 2018 | 800 000 | reste 150 000 | 550 000 | 800 000 sur l'ordinaire 2017 | **0** |
| 2019 | − 200 000 | 150 000 | 550 000 + 200 000 = 750 000 | — | **déficit 200 000** |
| 2020 | − 50 000 | 150 000 | 800 000 | — | **déficit 50 000** |
| 2021 | 100 000 | 150 000 − 100 000 = 50 000 **perdus** fin 2021 | 800 000 | 100 000 sur l'ordinaire 2017 | **0** |
| 2022 | 850 000 | — | 800 000 − 800 000 = 0 | 800 000 sur les amortissements | **==50 000==** |
> Si l'on admet aussi les amortissements des non-valeurs dans le report illimité : déficit 2017 = 630 000 d'amortissements + 870 000 ordinaire ; en 2021, 70 000 d'ordinaire + 30 000 d'amortissements sont imputés ; en 2022 il reste 850 000 d'amortissements à imputer ⇒ résultat net 2022 = 0.`,
kp:["Report de 4 ans pour le déficit ordinaire, illimité pour la part amortissements","Ventilation du déficit 2017 (950 000 ordinaire / 550 000 amortissements)","Déficits 2019 et 2020 entièrement d'amortissement","Imputation prioritaire de l'ordinaire ; 50 000 perdus en 2021","Résultat net 2022 = 50 000 (après imputation de 800 000)"]}
]},
{title:"Fiscalité — Partie III : IR (salarié et prestataire)", pts:5, pages:[376,376], th:["df-ir","df-ras"],
ctx:`Calculer l'IR devant être retenu à la source par l'employeur au titre des éléments de rémunération suivants :
**(1) Salarié permanent : directeur technique, marié et père de 3 enfants (4 pts)**
| Éléments de la rémunération annuelle | Montant |
|---|---|
| Salaire de base | 140 000,00 |
| Prime d'ancienneté | 7 000,00 |
| Loyer logement de fonction | 35 000,00 |
| Prime de transport | 7 200,00 |
| Prime de l'Aïd Adha | 3 500,00 |
| Indemnité de représentation | 25 000,00 |
| Part salariale CNSS | 4,29 % |
| Part salariale assurance maladie obligatoire | 2 % |
| Part salariale retraite | 6 % |
**(2) Prestataire personne physique non inscrit à la taxe professionnelle (1 pt)**
| Rémunération brute convenue avec le prestataire | 100 000,00 |
|---|---|
| Mise à disposition d'une voiture de fonction (loyer annuel TTC payé par la société à la société de leasing) | 25 000,00 |
**Barème IR (2023)** : 0 à 30 000 exonéré ; 30 001 à 50 000 : 10 % (3 000) ; 50 001 à 60 000 : 20 % (8 000) ; 60 001 à 80 000 : 30 % (14 000) ; 80 001 à 180 000 : 34 % (17 200) ; 180 001 et plus : 38 % (24 400).`,
questions:[
{pts:4, q:"(1) IR à retenir à la source sur le salaire du directeur technique.",
chk:[{l:"Salaire brut imposable",v:197700,u:"DH",tol:5},{l:"Revenu net imposable",v:143795.2,u:"DH",tol:10},{l:"IR annuel retenu",v:30250.37,u:"DH",tol:10}],
model:`| Élément | Montant brut | Exonéré | Imposable |
|---|---|---|---|
| Salaire de base | 140 000 | | 140 000 |
| Prime d'ancienneté | 7 000 | | 7 000 |
| Loyer du logement de fonction (avantage) | 35 000 | | 35 000 |
| Prime de transport (exonérée dans la limite de 500 DH/mois) | 7 200 | 6 000 | 1 200 |
| Prime de l'Aïd | 3 500 | | 3 500 |
| Indemnité de représentation (exonérée dans la limite de 10 % du salaire de base pour les fonctions de direction) | 25 000 | 14 000 | 11 000 |
| **Salaire brut imposable** | | | **197 700** |
| Frais professionnels : 25 % de (197 700 − 35 000 d'avantages) = 40 675, **plafonnés à 35 000** | | | − 35 000 |
| CNSS : 4,29 % × 72 000 (plafond 6 000 DH/mois) | | | − 3 088,80 |
| AMO : 2 % × 197 700 | | | − 3 954,00 |
| Retraite : 6 % × 197 700 | | | − 11 862,00 |
| **Revenu net imposable** | | | **143 795,20** |
IR brut = 143 795,20 × 34 % − 17 200 = 31 690,37
Charges de famille : (épouse + 3 enfants) 4 × 360 = − 1 440
**IR annuel = ==30 250,37 DH==** (≈ 2 520,86 DH par mois).`,
kp:["Logement de fonction et prime de l'Aïd imposables","Prime de transport exonérée dans la limite de 6 000/an","Indemnité de représentation exonérée à 10 % du salaire de base","Frais professionnels plafonnés à 35 000","CNSS plafonnée, AMO et retraite déduites","RNI 143 795,20 ; IR 31 690,37 − 1 440 = 30 250,37"]},
{pts:1, q:"(2) IR à retenir sur la rémunération du prestataire personne physique non inscrit à la taxe professionnelle.",
chk:[{l:"Retenue à la source",v:37500,u:"DH"}],
model:`Depuis 2023, les rémunérations versées à des **personnes physiques non inscrites à la taxe professionnelle** supportent une **retenue à la source de 30 %**, libératoire de l'IR, opérée par le client personne morale (ou personne physique soumise au résultat net réel).
Base : rémunération brute + avantages accordés (mise à disposition du véhicule) = 100 000 + 25 000 = 125 000.
**Retenue = 125 000 × 30 % = ==37 500 DH==**, à reverser avant la fin du mois suivant celui du paiement.`,
kp:["Retenue à la source de 30 % libératoire","Base incluant l'avantage en nature (125 000)","IR = 37 500"]}
]},
{title:"Fiscalité — Partie IV : TVA de décembre 2022", pts:5, pages:[377,377], th:["df-tva"],
ctx:`Calculer la TVA collectée, la TVA déductible et la TVA due du mois de décembre 2022. **Régime de déclaration : encaissement. Prorata de déduction : 100 %.**
**Éléments du chiffre d'affaires (2 pts)**
| Opération | Montant encaissé (DH) |
|---|---|
| Encaissement en décembre 2022 de la facture du loyer d'un terrain nu | 50 000,00 |
| Encaissement en décembre 2022 de la facture relative à l'export de produits livrés en octobre 2022 | 1 500 000,00 |
| Encaissement en décembre 2022 de la facture de vente de produits au Maroc réalisée en novembre 2022 | 400 000,00 |
| Escompte des effets de commerce datés de décembre 2022 avec échéance le 31/03/2023 | 350 000,00 |
| **Montant total crédité dans le relevé bancaire de décembre 2022** | **2 300 000,00** |
**Frais payés (3 pts)**
- Facture d'achat d'une voiture utilitaire pour 220 000 DH TTC payée en octobre 2021 ; la société a oublié de déduire la TVA sur cette facture.
- Paiement d'une facture d'achat de matière première de 130 000 DH TTC par virement daté du 28/12/2022 et débité sur le compte bancaire le 31/12/2022.
- Paiement des droits de douane pour 96 000 dont TVA de 16 000 ; la quittance douanière est datée du 31/12/2022 mais le montant payé figure sur le relevé de janvier 2023.
- Paiement par virement du 15/12/2022 des frais de scolarité des enfants des salariés dans un collège privé : 50 000 DH.
- Règlement en espèces des achats de cadeaux donnés aux clients : 60 000 TTC.`,
questions:[
{pts:5, q:"Calculer la TVA collectée, la TVA déductible et la TVA due de décembre 2022.",
chk:[{l:"TVA collectée",v:66666.67,u:"DH",tol:2},{l:"TVA déductible",v:37666.67,u:"DH",tol:2},{l:"TVA due",v:29000,u:"DH",tol:2}],
model:`#### TVA collectée (régime de l'encaissement)
| Opération | Traitement | TVA |
|---|---|---|
| Loyer d'un terrain nu (50 000) | Location de terrain nu non aménagé : hors champ de la TVA | 0 |
| Export encaissé (1 500 000) | Exonéré avec droit à déduction | 0 |
| Vente au Maroc encaissée en décembre (400 000 TTC) | Taxable à 20 % au mois de l'encaissement | 66 666,67 |
| Effets escomptés à échéance 31/03/2023 (350 000) | L'escompte n'est pas un encaissement : le fait générateur intervient à l'**échéance** (mars 2023) | 0 |
| **TVA collectée** | | **==66 666,67==** |
#### TVA déductible
| Dépense | Traitement | TVA |
|---|---|---|
| Voiture utilitaire payée en octobre 2021 | Droit à déduction à exercer dans le **délai d'un an** : forclos en décembre 2022 | 0 |
| Matière première payée par virement (débit le 31/12) | Payée en décembre : déductible | 21 666,67 |
| TVA à l'importation, quittance du 31/12/2022 | Déductible le **mois de la quittance** | 16 000,00 |
| Frais de scolarité (collège privé) | Enseignement privé exonéré : pas de TVA ; dépense sociale étrangère aux opérations taxables | 0 |
| Cadeaux clients payés en espèces (60 000) | TVA exclue du droit à déduction (cadeaux, sauf objets publicitaires de faible valeur) et paiement en espèces au-delà de 5 000 DH | 0 |
| **TVA déductible** | | **==37 666,67==** |
**TVA due de décembre 2022 = 66 666,67 − 37 666,67 = ==29 000 DH==**`,
kp:["Terrain nu hors champ ; export exonéré avec droit à déduction","Vente encaissée en décembre : 66 666,67","Escompte d'effets : pas d'encaissement avant l'échéance","Voiture de 2021 : délai d'un an dépassé","Matière (paiement de décembre) et douane (quittance de décembre) déductibles","Scolarité et cadeaux payés en espèces : pas de déduction","TVA due 29 000"]}
]},
{title:"Droit des affaires — Cas ALAMI & PARTNERS", pts:20, pages:[378,378], th:["da-constitution","da-organes","da-commercant"],
ctx:`ALAMI est un entrepreneur « self-made-man » qui a réussi dans l'industrie de l'aluminium. Les portes en aluminium qu'il produit sont de très bonne qualité et plusieurs partenaires internationaux sont intéressés pour distribuer son produit à l'étranger, notamment en Europe.
Il a été contacté récemment par une grande société multinationale ABC qui souhaite mettre en place un partenariat avec lui. Il est question de créer une nouvelle société où les deux parties seraient actionnaires selon une structure de capital à convenir et dont la dénomination sociale serait « **ALAMI & PARTNERS** ». Le business plan met en évidence une croissance du volume d'affaires dès la deuxième année ; la société à créer aura un chiffre d'affaires très significatif.
M. ALAMI souhaite par ailleurs que ses **5 enfants** soient dans l'actionnariat. Conscient qu'il ne peut pas être actionnaire majoritaire, il voudrait **avoir un contrôle sur l'activité**.
1. Compte tenu de ce qui précède, quelle serait la forme juridique la plus adaptée, sachant qu'il hésite entre la **SARL** et la **SAS** ? Il vous demande une analyse comparative qui met en évidence les principales différences entre les 2 formes et une proposition argumentée. *Il ne s'agit pas de décrire le fonctionnement des deux formes de manière narrative : faites une analyse comparative qui aboutit à une proposition argumentée à communiquer à M. ALAMI.*
2. M. ALAMI souhaite faire des **apports en nature et en industrie** à la nouvelle entité. Est-ce possible ? Dans l'affirmative, quelle serait la procédure et les règles à suivre pour l'évaluation des deux types d'apports ?
3. Les deux parties souhaitent déposer la marque « ALAMI & PARTNERS ». Quelles sont les conditions légales d'enregistrement d'une marque et quelle est la procédure à suivre ?`,
questions:[
{pts:10, q:"1. Analyse comparative SARL / SAS et proposition argumentée à M. ALAMI.",
model:`#### Tableau comparatif au regard des besoins du projet
| Critère | SARL (loi 5-96) | SAS (loi 17-95) | Enjeu pour M. ALAMI |
|---|---|---|---|
| Nature des titres | Parts sociales non négociables | Actions négociables | Entrée/sortie d'un partenaire multinational |
| Nombre d'associés | 1 à 50 | 1 ou plusieurs, sans maximum (pas d'appel public à l'épargne) | ABC + M. ALAMI + 5 enfants : possible dans les deux |
| Direction | Gérant(s) personne(s) physique(s), nommé(s) à la majorité > 1/2 des parts | Président (personne physique ou morale) + organes librement prévus par les statuts | Pouvoir de nommer la direction indépendamment du capital |
| Règles de décision | Majorités **légales impératives** (ordinaire > 1/2 ; modification des statuts 3/4 du capital) : pouvoir proportionnel aux parts | **Liberté statutaire** : majorités, quorums, droits de veto, décisions réservées | Clé du contrôle par un minoritaire |
| Dissociation capital / pouvoir | Impossible (1 part = 1 voix) | Possible : actions de préférence / catégories d'actions, droits particuliers, désignation du président par une catégorie, clauses de veto | M. ALAMI peut contrôler sans être majoritaire |
| Transmission des titres | Cession à un tiers soumise à agrément des 3/4 | Clauses statutaires d'agrément, de préemption, d'inaliénabilité, d'exclusion, de changement de contrôle | Protéger le pacte familial et encadrer ABC |
| Apports en industrie | Parts d'industrie | Actions inaliénables d'industrie | Valoriser le savoir-faire de M. ALAMI |
| Image vis-à-vis d'une multinationale | Forme « PME », peu adaptée aux partenariats capitalistiques | Forme usuelle des joint-ventures et filiales de groupes | Négociation avec ABC |
| Contrôle légal | CAC au-delà de 50 M DH de CA | Commissaire aux comptes (règles de la SA) | CA attendu très significatif : CAC de toute façon |
#### Proposition : constituer une **SAS**
1. **Contrôle sans majorité** : les statuts (complétés par un pacte d'actionnaires) peuvent réserver à M. ALAMI la **présidence** (ou la désignation du président par sa catégorie d'actions), des **droits de vote particuliers** sur les décisions stratégiques (budget, investissements, nomination des dirigeants, cession d'actifs), un **droit de veto** et des majorités renforcées.
2. **Famille** : les 5 enfants peuvent être associés directement, ou mieux via une **holding familiale** présidée par M. ALAMI, qui regroupe les voix familiales et évite la dispersion (clauses d'inaliénabilité et d'agrément).
3. **Partenariat avec ABC** : souplesse de gouvernance (comité stratégique paritaire), clauses de sortie (préemption, *drag/tag along*, changement de contrôle), forme familière pour une multinationale ; capacité à accueillir de nouveaux investisseurs pour financer la croissance.
4. **Apport du savoir-faire** : possibilité d'actions d'industrie (question 2).
**Limites à signaler** : la liberté statutaire exige une rédaction soignée des statuts et du pacte (risque de blocage) ; formalisme et coûts proches de ceux de la SA (commissaire aux comptes).`,
kp:["Présentation comparative (tableau), pas narrative","Différence clé : majorités légales de la SARL vs liberté statutaire de la SAS","Dissociation capital/pouvoir possible en SAS (catégories d'actions, droits particuliers, veto, présidence)","Transmission : agrément légal 3/4 vs clauses statutaires (agrément, préemption, inaliénabilité, exclusion)","Adéquation au partenariat avec une multinationale et à la croissance","Solution pour les 5 enfants (holding familiale / clauses)","Proposition argumentée : SAS + pacte d'actionnaires","Limites / précautions de rédaction"]},
{pts:5, q:"2. Apports en nature et en industrie : possibilité, procédure et règles d'évaluation.",
model:`**Oui, les deux sont possibles en SAS.**
#### Apport en nature (biens : terrains, machines, fonds, brevets…)
- Les actions d'apport doivent être **intégralement libérées** dès l'émission (transfert du bien à la société).
- **Évaluation obligatoire par un ou plusieurs commissaires aux apports**, désignés (dans les règles de la SA applicables à la SAS) par **ordonnance du président du tribunal**, qui apprécient sous leur responsabilité la valeur des apports et les avantages particuliers.
- Le **rapport** est déposé au siège et au greffe, tenu à la disposition des souscripteurs avant la décision ; les associés approuvent l'évaluation ; s'ils retiennent une valeur supérieure, ils engagent leur responsabilité.
- Sanctions en cas de surévaluation : responsabilité des fondateurs, nullité éventuelle.
#### Apport en industrie (savoir-faire, réseau, compétence de M. ALAMI)
- Admis si les **statuts** le prévoient : émission d'**actions inaliénables** résultant d'apports en industrie, qui **ne concourent pas au capital**.
- Les statuts fixent les **modalités de souscription et de répartition** (droits aux dividendes et au vote) et le **délai au terme duquel ces actions sont évaluées** par un **commissaire aux apports**.
- L'apporteur doit à la société tous les gains réalisés par l'activité apportée ; les actions sont annulées si la prestation cesse.`,
kp:["Possibles en SAS","Nature : libération intégrale, commissaire aux apports désigné par le président du tribunal, rapport déposé","Responsabilité en cas de surévaluation","Industrie : prévue par les statuts, actions inaliénables hors capital","Statuts : modalités et délai d'évaluation par un commissaire aux apports"]},
{pts:5, q:"3. Conditions légales d'enregistrement de la marque « ALAMI & PARTNERS » et procédure.",
model:`#### Conditions de fond (loi 17-97 relative à la protection de la propriété industrielle)
- **Signe susceptible de représentation** (dénomination, logo…) ;
- **distinctif** : ni générique, ni simplement descriptif des produits (« portes aluminium » seul serait refusé) ;
- **licite** : non contraire à l'ordre public et aux bonnes mœurs, non trompeur, pas d'emblèmes officiels ;
- **disponible** : ne porte pas atteinte à des **droits antérieurs** (marque enregistrée ou notoire, dénomination sociale, nom commercial, enseigne, droit d'auteur, nom patronymique d'un tiers). Le nom « ALAMI » est le patronyme du fondateur : il peut l'utiliser, mais il faut vérifier l'absence de marques antérieures identiques ou similaires (recherche d'antériorité à l'OMPIC).
#### Procédure
1. **Recherche d'antériorité** auprès de l'**OMPIC** (Office marocain de la propriété industrielle et commerciale).
2. **Dépôt** à l'OMPIC (en ligne ou au guichet) : formulaire, reproduction de la marque, **liste des produits et services** selon la **classification de Nice**, identité du déposant (la société, ou les fondateurs puis cession à la société une fois immatriculée), paiement des taxes.
3. **Examen** de forme et de fond (motifs absolus de refus).
4. **Publication** de la demande ; ouverture d'un **délai d'opposition** des titulaires de droits antérieurs (2 mois à compter de la publication).
5. **Enregistrement** et publication ; protection de **10 ans** à compter du dépôt, **renouvelable indéfiniment**.
6. Pour la distribution en Europe : **extension internationale** (système de Madrid, via l'OMPIC/OMPI) ou dépôt d'une marque de l'Union européenne.`,
kp:["Conditions : distinctivité, licéité, disponibilité (droits antérieurs)","Attention au nom patronymique et recherche d'antériorité à l'OMPIC","Dépôt à l'OMPIC avec liste des produits/services (classification de Nice)","Examen, publication et délai d'opposition","Protection 10 ans renouvelable ; extension internationale (Madrid)"]}
]}
]});

EXAMS.push({
id:"gest-2023", subject:"gest", year:2023, session:"14-15 octobre 2023", title:"Étude de cas de gestion", date:"Dimanche 15 octobre 2023", duration:300, pages:[379,384],
note:"6 exercices — tables financières et calculatrice non programmable autorisées",
sections:[
{title:"Exercice 1 : Crédit-bail ou emprunt ?", pts:5, pages:[380,380], th:["g-financement","g-invest"],
ctx:`Une machine industrielle coûte **2,5 millions de DH**, amortissable selon le mode linéaire sur **7 ans**. Le financement est possible via un contrat de **crédit-bail** dont la redevance annuelle est de **550 000 DH**, payable en fin de période, sur 7 ans. La valeur de la machine à la fin de la septième année serait nulle. Le taux d'imposition des bénéfices est de **30 %**. Une proposition alternative de financement pourrait être l'émission d'un **emprunt bancaire à 9,5 %** sur la durée d'utilisation de la machine. L'entreprise étant financée exclusivement par fonds propres depuis une dizaine d'années, l'emprunt peut couvrir le coût total de la machine.
**Déterminez la création de valeur due au financement par crédit-bail par rapport au financement par emprunt.**`,
questions:[
{pts:5, q:"Déterminez la création de valeur due au financement par crédit-bail par rapport au financement par emprunt.",
chk:[{l:"Flux annuel net du crédit-bail (après impôt, économie d'amortissement perdue incluse)",v:-492142.86,u:"DH",tol:2},{l:"Valeur actuelle nette du crédit-bail vs emprunt",v:-184973,u:"DH",tol:300}],
model:`On compare le crédit-bail à un emprunt de même montant : l'emprunt sert de référence, on actualise donc les flux différentiels du crédit-bail au **coût de la dette après impôt** : 9,5 % × (1 − 30 %) = **6,65 %**.
#### Flux différentiels du crédit-bail (par rapport à l'achat)
| | Année 0 | Années 1 à 7 |
|---|---|---|
| Achat évité | + 2 500 000 | |
| Redevance après impôt : 550 000 × 0,7 | | − 385 000 |
| Économie d'impôt sur amortissement perdue : (2 500 000 / 7) × 30 % | | − 107 142,86 |
| **Flux net** | **+ 2 500 000** | **− 492 142,86** |
Facteur d'actualisation à 6,65 % sur 7 ans : (1 − 1,0665⁻⁷) / 0,0665 = 5,45568.
**VAN du crédit-bail = 2 500 000 − 492 142,86 × 5,45568 = ==− 184 973 DH==**
**Conclusion** : le crédit-bail **détruit environ 185 000 DH de valeur** par rapport à l'emprunt ; son coût implicite après impôt (≈ 8,72 %) dépasse celui de l'emprunt (6,65 %). L'entreprise, peu endettée et donc capable d'emprunter, a intérêt à financer la machine par emprunt bancaire.
> Avantages non chiffrés du crédit-bail : pas d'apport, pas de garanties, préservation de la capacité d'endettement. Si l'on actualisait à 9,5 % (coût avant impôt), on obtiendrait à tort + 64 084 DH : le taux à retenir est bien le coût de la dette **après impôt**.`,
kp:["Raisonnement différentiel crédit-bail vs achat financé par emprunt","Redevances après impôt (385 000)","Perte des économies d'impôt sur amortissements (107 143)","Actualisation au coût de la dette après impôt (6,65 %)","VAN ≈ − 185 000 → crédit-bail défavorable","Conclusion argumentée (coût implicite 8,72 % > 6,65 %)"]}
]},
{title:"Exercice 2 : Plan de financement et bilans prévisionnels", pts:4, pages:[380,381], th:["g-financement","g-analyse","g-budget"],
ctx:`L'entreprise présente en fin d'année les éléments financiers prévisionnels suivants (**en millions de DH**) :
| | N+1 | N+2 |
|---|---|---|
| CA HT | 490 | 500 |
| Dotations | 42 | 48 |
| Bénéfice net | 17 | 22 |
| Dividendes | 8 | 11 |
| Investissements | 70 | 35 |
| Cession d'actif | 5 | 5 |
Le disponible est de **10** à la fin de l'année N et le besoin en fonds de roulement de **100**. Le BFR est constitué de ses trois éléments principaux : le **stock**, dont le montant est le **double de celui des clients**, lui-même **double de celui des fournisseurs**. Les immobilisations nettes au 31/12/N sont de **205**. Le ratio **Dettes / Fonds propres est de 40 %** en fin d'année ; la dette sera remboursée chaque année par tranche de **10**. IS = 31 % et CA HT de N = 400.
**Travail à faire** : déterminer le bilan simplifié au 31/12/N ; le plan de financement de N+1 et de N+2 ; les bilans prévisionnels de N+1 et de N+2.`,
questions:[
{pts:1, q:"Bilan simplifié au 31/12/N.",
chk:[{l:"Fonds propres au 31/12/N",v:225,u:"M DH"},{l:"Dettes financières au 31/12/N",v:90,u:"M DH"}],
model:`BFR = Stocks + Clients − Fournisseurs avec S = 2C et C = 2F ⇒ BFR = 4F + 2F − F = 5F = 100 ⇒ **F = 20, C = 40, S = 80**.
Ressources stables = 205 + 80 + 40 + 10 − 20 = 315 = FP + D avec D = 0,4 FP ⇒ 1,4 FP = 315 ⇒ **FP = 225, D = 90**.
| Actif | | Passif | |
|---|---|---|---|
| Immobilisations nettes | 205 | Fonds propres | 225 |
| Stocks | 80 | Dettes financières | 90 |
| Clients | 40 | Fournisseurs | 20 |
| Disponible | 10 | | |
| **Total** | **335** | **Total** | **335** |`,
kp:["Décomposition du BFR : F = 20, C = 40, S = 80","Équilibre FP + D = 315 avec D = 40 % FP","FP 225 et D 90"]},
{pts:1.5, q:"Plan de financement de N+1 et de N+2.",
chk:[{l:"CAF N+1",v:59,u:"M DH"},{l:"Variation du BFR N+1",v:22.5,u:"M DH"},{l:"Trésorerie fin N+2",v:8,u:"M DH",tol:0.2}],
model:`**Hypothèses** : BFR proportionnel au CA (100 / 400 = 25 % du CA HT) ; cessions réalisées à la valeur nette comptable (pas de plus-value dans le bénéfice) ; CAF = bénéfice net + dotations ; chaque année, l'entreprise emprunte ce qui est nécessaire pour ramener le ratio D/FP à 40 % en fin d'année.
- BFR : N+1 = 25 % × 490 = 122,5 (Δ + 22,5) ; N+2 = 125 (Δ + 2,5).
- Fonds propres : N+1 = 225 + 17 − 8 = 234 ; N+2 = 234 + 22 − 11 = 245.
- Dettes cibles : N+1 = 0,4 × 234 = 93,6 ⇒ nouvel emprunt = 93,6 − (90 − 10) = **13,6** ; N+2 = 0,4 × 245 = 98 ⇒ emprunt = 98 − (93,6 − 10) = **14,4**.
| | N+1 | N+2 |
|---|---|---|
| CAF (bénéfice + dotations) | 59 | 70 |
| Cessions d'actifs | 5 | 5 |
| Nouveaux emprunts | 13,6 | 14,4 |
| **Total ressources** | **77,6** | **89,4** |
| Investissements | 70 | 35 |
| Dividendes | 8 | 11 |
| Remboursement d'emprunt | 10 | 10 |
| Augmentation du BFR | 22,5 | 2,5 |
| **Total emplois** | **110,5** | **58,5** |
| **Variation de trésorerie** | **− 32,9** | **+ 30,9** |
| Trésorerie de début | 10 | − 22,9 |
| **Trésorerie de fin** | **− 22,9** | **==8,0==** |
**Commentaire** : N+1 est déséquilibrée (investissement lourd + hausse du BFR) : il faut prévoir 22,9 de crédits de trésorerie, ou mieux une **augmentation de capital** / un emprunt complémentaire, ce qui ferait toutefois dépasser le ratio de 40 %. L'excédent de N+2 rétablit la situation.`,
kp:["BFR normatif 25 % du CA (Δ 22,5 et 2,5)","CAF = bénéfice + dotations (59 et 70)","Emprunt d'équilibre pour respecter D/FP = 40 %","Emplois : investissements, dividendes, remboursements, ΔBFR","Trésorerie − 22,9 fin N+1 et + 8 fin N+2, commentaire"]},
{pts:1.5, q:"Bilans prévisionnels de N+1 et de N+2.",
model:`Immobilisations nettes : N+1 = 205 + 70 − 42 − 5 = **228** ; N+2 = 228 + 35 − 48 − 5 = **210**.
BFR décomposé (S = 4F, C = 2F, 5F = BFR) : N+1 : F = 24,5, C = 49, S = 98 ; N+2 : F = 25, C = 50, S = 100.
| | 31/12/N+1 | 31/12/N+2 |
|---|---|---|
| Immobilisations nettes | 228 | 210 |
| Stocks | 98 | 100 |
| Clients | 49 | 50 |
| Disponible | 0 | 8 |
| **Total actif** | **375** | **368** |
| Fonds propres | 234 | 245 |
| Dettes financières | 93,6 | 98 |
| Fournisseurs | 24,5 | 25 |
| Trésorerie passif (concours bancaires) | 22,9 | 0 |
| **Total passif** | **375** | **368** |`,
kp:["Immobilisations : + investissements − dotations − VNC cédée","Décomposition du BFR prévisionnel","Fonds propres et dettes cohérents avec le plan","Bilans équilibrés (375 et 368)"]}
]},
{title:"Exercice 3 : Renégociation d'un emprunt (annuités constantes)", pts:3, pages:[381,381], th:["g-mathfi"],
ctx:`Une entreprise industrielle a contracté un emprunt amortissable par annuités constantes. Un peu avant de verser la **quatrième annuité**, l'entreprise demande à son créancier d'accepter l'une des deux propositions suivantes :
a. payer à la date convenue les intérêts faisant partie de la quatrième annuité, soit **37 444,46**, et le reste en **15 annuités constantes de 48 898,13** chacune, calculées au taux de **9 %**, la première payable un an après ;
b. payer normalement la quatrième annuité et le reste en **20 annuités constantes de 38 556,24** chacune, calculées au taux de 9 %, la première payable un an après.
Ces deux propositions étant considérées comme équivalentes au taux de 9 %, il est demandé de calculer l'annuité constante primitive, le taux initial, la durée de remboursement initialement prévue et le montant de l'emprunt primitif.`,
questions:[
{pts:3, q:"Calculer l'annuité primitive, le taux initial, la durée initiale et le montant de l'emprunt primitif.",
chk:[{l:"Taux initial",v:9.5,u:"%",tol:0.01},{l:"Annuité primitive",v:79634.65,u:"",tol:5},{l:"Durée initiale",v:10,u:"ans"},{l:"Emprunt primitif",v:500000,u:"",tol:20}],
model:`**1. Capital restant dû avant la 4e annuité (C₃)** — proposition a : le capital est remboursé par 15 annuités de 48 898,13 à 9 % :
C₃ = 48 898,13 × (1 − 1,09⁻¹⁵) / 0,09 = 48 898,13 × 8,06069 = **394 152,59**
**2. Taux initial** : les intérêts de la 4e annuité = C₃ × i ⇒ i = 37 444,46 / 394 152,59 = ==9,5 %==
**3. Annuité primitive** — proposition b : après la 4e annuité, il reste C₄ = 38 556,24 × (1 − 1,09⁻²⁰) / 0,09 = 38 556,24 × 9,12855 = **351 962,40**.
Amortissement de la 4e annuité : m₄ = C₃ − C₄ = 42 190,19 ⇒ **a = 37 444,46 + 42 190,19 = ==79 634,65==**
**4. Durée initiale** : C₃ = a × [1 − 1,095^−(n−3)] / 0,095 ⇒ 1 − 1,095^−(n−3) = 394 152,59 × 0,095 / 79 634,65 = 0,47021 ⇒ 1,095^−(n−3) = 0,52979 ⇒ n − 3 = 7 ⇒ **n = ==10 ans==**
**5. Emprunt primitif** : C₀ = 79 634,65 × (1 − 1,095⁻¹⁰) / 0,095 = 79 634,65 × 6,27880 ≈ ==500 000==
(Contrôle : m₁ = m₄ / 1,095³ = 32 134,65 ; a = 500 000 × 9,5 % + 32 134,65 = 79 634,65.)`,
kp:["C₃ = valeur actuelle des 15 annuités à 9 % ≈ 394 153","Taux initial = intérêts / C₃ = 9,5 %","C₄ = valeur actuelle des 20 annuités ≈ 351 962 ; m₄ = C₃ − C₄","Annuité primitive ≈ 79 634,65","Durée 10 ans et emprunt ≈ 500 000"]}
]},
{title:"Exercice 4 : Programmation linéaire (MEGALUX)", pts:3, pages:[381,383], th:["g-prog","ca-variable"],
ctx:`La société MEGALUX fabrique un produit terminé **Y**. L'atelier **A1** incorpore en totalité au début de la fabrication la matière première MP1 pour aboutir à un élément semi-fini **X** (invendable en l'état). À l'atelier **A2**, en début de fabrication, il lui est ajouté en totalité la matière première MP2 : le produit fini **Y** peut alors être commercialisé. Coût unitaire préétabli pour une activité normale mensuelle de 3 500 h de MOD à l'atelier A1 et 1 750 h à l'atelier A2 (unité d'œuvre : l'heure de MOD) :
| | X | Y |
|---|---|---|
| Matière première | 2 kg à 4 DH le kg | 1 kg à 2 DH le kg |
| Main-d'œuvre directe | 0,5 h à 8 DH l'heure | 0,25 h à 8 DH l'heure |
| Centre | 0,5 unité d'œuvre | 0,25 unité d'œuvre |
Charges des centres pour la production normale : atelier 1 : fixes 35 000, variables 52 500 (total 87 500) ; atelier 2 : fixes 14 000, variables 21 000 (total 35 000).
MEGALUX envisage de vendre le semi-fini X en lui ajoutant **un accessoire** (coût unitaire préétabli 20 DH). Ce nouvel article **X'** serait obtenu dans un atelier **A3** pour un montant unitaire de charges indirectes et de MOD de **9 DH** (4,50 DH de charges fixes et 4,50 DH de charges variables). Les services commerciaux pensent pouvoir écouler très facilement X' et Y.
Capacités mensuelles : **A1 : 5 000 h ; A2 : 1 500 h ; A3 : 600 h**. Temps de production par article : **A1 : 0,50 h ; A2 : 0,25 h ; A3 : 5 minutes**. Les charges variables sont proportionnelles aux quantités. Coût de distribution variable unitaire : X' 1 DH ; Y 1,50 DH. **X' sera vendu 60 DH HT et Y 50 DH HT.**
MEGALUX cherche une répartition de sa production respectant les contraintes de capacité des ateliers, tout en optimisant le bénéfice global.
1. Écrire, en le justifiant soigneusement, le modèle de programmation linéaire à résoudre.
2. Résoudre ce modèle en indiquant la répartition optimale de la production et les ateliers utilisés à pleine capacité.`,
questions:[
{pts:1.5, q:"1. Écrire et justifier le modèle de programmation linéaire.",
chk:[{l:"Marge sur coût variable unitaire de Y",v:22,u:"DH"},{l:"Marge sur coût variable unitaire de X'",v:15,u:"DH"}],
model:`Les charges fixes ne dépendent pas de la répartition : maximiser le bénéfice revient à **maximiser la marge sur coût variable** totale.
#### Coûts variables unitaires
Coût variable horaire des centres : A1 = 52 500 / 3 500 = 15 DH/UO ; A2 = 21 000 / 1 750 = 12 DH/UO.
| | X (semi-fini) | Y | X' |
|---|---|---|---|
| Matière | 2 × 4 = 8 | X 19,5 + MP2 1 × 2 = 2 | X 19,5 + accessoire 20 |
| MOD | 0,5 × 8 = 4 | 0,25 × 8 = 2 | (dans les 4,50 variables de A3) |
| Centre (part variable) | 0,5 × 15 = 7,5 | 0,25 × 12 = 3 | 4,50 |
| Distribution variable | | 1,50 | 1,00 |
| **Coût variable** | **19,5** | **28** | **45** |
| Prix de vente | | 50 | 60 |
| **MCV unitaire** | | **22** | **15** |
#### Modèle (x = quantité de X', y = quantité de Y)
- **Max Z = 15 x + 22 y**
- A1 (X est fabriqué pour les deux produits) : 0,5 x + 0,5 y ≤ 5 000 ⇔ x + y ≤ 10 000
- A2 (Y seulement) : 0,25 y ≤ 1 500 ⇔ y ≤ 6 000
- A3 (X' seulement, 5 min = 1/12 h) : x / 12 ≤ 600 ⇔ x ≤ 7 200
- x ≥ 0, y ≥ 0`,
kp:["Objectif : maximiser la MCV (charges fixes indépendantes)","Coûts variables : X 19,5 ; Y 28 ; X' 45 (fixes exclus)","MCV : Y 22 et X' 15","Contraintes A1 (x + y ≤ 10 000), A2 (y ≤ 6 000), A3 (x ≤ 7 200), positivité"]},
{pts:1.5, q:"2. Résoudre le modèle : répartition optimale et ateliers saturés.",
chk:[{l:"Quantité de Y",v:6000,u:"unités"},{l:"Quantité de X'",v:4000,u:"unités"},{l:"Marge sur coût variable maximale",v:192000,u:"DH"}],
model:`Sommets du domaine réalisable :
| Sommet | x (X') | y (Y) | Z = 15x + 22y |
|---|---|---|---|
| A3 seule | 7 200 | 0 | 108 000 |
| A1 ∩ A3 | 7 200 | 2 800 | 169 600 |
| **A1 ∩ A2** | **4 000** | **6 000** | **==192 000==** |
| A2 seule | 0 | 6 000 | 132 000 |
**Optimum : 6 000 Y et 4 000 X'**, MCV = 192 000 DH (bénéfice = 192 000 − charges fixes).
- **Ateliers saturés** : **A1** (0,5 × 10 000 = 5 000 h) et **A2** (0,25 × 6 000 = 1 500 h).
- **A3** utilisé 4 000 / 12 = 333,3 h sur 600 : 266,7 h disponibles.
Y a la meilleure marge par heure de A1 (22 / 0,5 = 44 contre 30) : on sature d'abord A2 avec Y, puis on complète A1 avec X'.`,
kp:["Méthode des sommets (ou graphique) correctement appliquée","Optimum Y = 6 000 et X' = 4 000","MCV maximale 192 000","Ateliers A1 et A2 saturés ; A3 sous-utilisé (≈ 333 h)"]}
]},
{title:"Exercice 5 : Statistique descriptive (touristes à HONAHONA)", pts:3, pages:[383,383], th:["g-stats"],
ctx:`L'Office de tourisme de HONAHONA collecte des données sur le nombre de touristes (en milliers) accueillis au cours de plusieurs jours en février 2022 :
**Europe et Amérique du Nord** : 108,7 ; 112,25 ; 94,01 ; 114,03 ; 162,4 ; 161,61 ; 76,2 ; 102,11 ; 110,87 ; 79,36 ; 129,04 ; 95,16 ; 114,16 ; 121,88.
**Asie et Amérique du Sud** : 29,89 ; 41,13 ; 40,67 ; 40,41 ; 43,07 ; 24,86 ; 31,61 ; 21,6 ; 27,34 ; 64,57 ; 32,98 ; 41,31.
1) Calculez la moyenne et la médiane du nombre de touristes journaliers pour les deux catégories.
2) Calculez l'étendue et l'écart type pour les deux catégories.
3) Quelles comparaisons pouvez-vous conclure entre les deux catégories de pays ?`,
questions:[
{pts:1, q:"1) Moyenne et médiane des deux séries.",
chk:[{l:"Moyenne Europe/Am. du Nord",v:112.98,u:"milliers",tol:0.02},{l:"Médiane Europe/Am. du Nord",v:111.56,u:"milliers",tol:0.02},{l:"Moyenne Asie/Am. du Sud",v:36.62,u:"milliers",tol:0.02},{l:"Médiane Asie/Am. du Sud",v:36.695,u:"milliers",tol:0.02}],
model:`**Europe / Amérique du Nord** (n = 14) : somme = 1 581,78 ⇒ moyenne = **112,98**. Série ordonnée : 76,2 ; 79,36 ; 94,01 ; 95,16 ; 102,11 ; 108,7 ; **110,87 ; 112,25** ; 114,03 ; 114,16 ; 121,88 ; 129,04 ; 161,61 ; 162,4 ⇒ médiane = (110,87 + 112,25) / 2 = **111,56**.
**Asie / Amérique du Sud** (n = 12) : somme = 439,44 ⇒ moyenne = **36,62**. Série ordonnée : 21,6 ; 24,86 ; 27,34 ; 29,89 ; 31,61 ; **32,98 ; 40,41** ; 40,67 ; 41,13 ; 41,31 ; 43,07 ; 64,57 ⇒ médiane = (32,98 + 40,41) / 2 = **36,695**.`,
kp:["Moyennes 112,98 et 36,62","Séries ordonnées et médianes (n pair) 111,56 et 36,695"]},
{pts:1, q:"2) Étendue et écart type des deux séries.",
chk:[{l:"Écart type Europe/Am. du Nord (population)",v:24.57,u:"",tol:0.05,alt:[25.49]},{l:"Écart type Asie/Am. du Sud (population)",v:10.91,u:"",tol:0.05,alt:[11.4]}],
model:`| | Europe / Am. du Nord | Asie / Am. du Sud |
|---|---|---|
| Étendue | 162,4 − 76,2 = **86,2** | 64,57 − 21,6 = **42,97** |
| Écart type (σ, diviseur n) | **24,57** | **10,91** |
| Écart type corrigé (s, diviseur n − 1, échantillon) | 25,49 | 11,40 |
| Coefficient de variation σ / moyenne | 21,7 % | 29,8 % |`,
kp:["Étendues 86,2 et 42,97","Écarts types ≈ 24,6 et ≈ 10,9 (ou 25,5 et 11,4 corrigés)"]},
{pts:1, q:"3) Comparaison des deux catégories de pays.",
model:`- **Niveau** : les touristes d'Europe/Amérique du Nord sont environ **3 fois plus nombreux** chaque jour (113 000 contre 37 000 en moyenne).
- **Symétrie** : dans les deux cas, moyenne ≈ médiane : distributions assez symétriques (avec quelques jours exceptionnels : 161–162 milliers pour la 1re série, 64,57 pour la 2e).
- **Dispersion** : en valeur absolue, la 1re série est plus dispersée (étendue 86,2 ; σ ≈ 24,6) ; mais en **relatif** (coefficient de variation), c'est la 2e qui est la plus **irrégulière** (29,8 % contre 21,7 %). L'étendue, sensible aux valeurs extrêmes, est moins fiable que l'écart type.
- Conséquence pour l'office : la clientèle Europe/Amérique du Nord est le marché principal et le plus régulier ; la clientèle Asie/Amérique du Sud est un marché plus petit et plus volatil, à développer.`,
kp:["Comparaison des niveaux (moyennes/médianes)","Comparaison absolue et relative de la dispersion (coefficient de variation)","Conclusion opérationnelle"]}
]},
{title:"Exercice 6 : Probabilités conditionnelles (maintenance informatique)", pts:2, pages:[383,384], th:["g-probas"],
ctx:`Une entreprise a équipé chacun de ses employés d'un seul ordinateur, suivi par un même service de maintenance. Il y a trois marques : **25 %** des employés ont un ordinateur de marque A, **40 %** de marque B, le reste de marque C. Parmi les employés équipés de A, **90 %** sont satisfaits du service de maintenance ; de B, **65 %** ; de C, **80 %**. On choisit au hasard la fiche d'un employé. On note A, B, C les événements « l'employé est équipé de la marque A, B, C » et S « l'employé est satisfait ».
1) Calculer la probabilité que la fiche choisie soit celle d'un employé équipé de A et satisfait.
2) Calculer la probabilité que la fiche choisie soit celle d'un employé satisfait.
3) Sachant que la fiche choisie est celle d'un employé satisfait, calculer la probabilité qu'il soit équipé de la marque C.`,
questions:[
{pts:2, q:"Calculer P(A ∩ S), P(S) et P(C | S).",
chk:[{l:"P(A ∩ S)",v:0.225,u:"",tol:0.0005},{l:"P(S)",v:0.765,u:"",tol:0.0005},{l:"P(C | S)",v:0.366,u:"",tol:0.001}],
model:`P(C) = 1 − 0,25 − 0,40 = 0,35.
1) P(A ∩ S) = P(A) × P(S | A) = 0,25 × 0,90 = ==0,225==
2) Formule des probabilités totales : P(S) = 0,25 × 0,90 + 0,40 × 0,65 + 0,35 × 0,80 = 0,225 + 0,26 + 0,28 = ==0,765==
3) Formule de Bayes : P(C | S) = P(C ∩ S) / P(S) = 0,28 / 0,765 ≈ ==0,366== (36,6 %).`,
kp:["P(C) = 0,35","P(A ∩ S) = 0,225","Probabilités totales : P(S) = 0,765","Bayes : P(C|S) ≈ 0,366"]}
]}
]});

EXAMS.push({
id:"tec-2023", subject:"tec", year:2023, session:"14-15 octobre 2023", title:"Techniques d'expression et de communication (culture générale)", date:"Dimanche 15 octobre 2023", duration:120, pages:[385,386],
sections:[
{title:"Texte : l'intelligence artificielle dans la finance (Annales des mines, 2019)", pts:20, pages:[386,386], th:["tec-dissertation","tec-questions"],
ctx:`L'intelligence artificielle prend place dans tous les secteurs de l'économie, particulièrement dans celui de la finance. Promesse de nouveaux services, cette technologie est aussi source de risques juridiques, dès lors que le résultat du traitement qu'elle opère comporte une part d'incertitude. Aussi, les fintechs qui développent des outils embarquant un système d'intelligence artificielle et les banques qui en acquièrent les droits d'utilisation doivent régler, dans leurs contrats, la propriété des richesses ainsi produites, comme les responsabilités et garanties de chacun. Les banques qui proposent des outils d'intelligence artificielle à leurs clients doivent par ailleurs mesurer leur niveau de responsabilité en cas de dommages subis par ces derniers.
L'intelligence artificielle, grand mythe de notre temps, fait l'objet de toutes les attentions. Indépendamment des questions éthiques qu'elle soulève, l'IA est aujourd'hui appréhendée comme une chose dotée d'une valeur économique. Dans le secteur financier, les fintechs connaissent un développement exponentiel. Ces entreprises utilisent les nouvelles technologies, en particulier l'IA, afin d'automatiser un certain nombre de tâches et de procédures, de supprimer des intermédiaires et donc de réduire les coûts des services associés. À ce jour, en dépit des bouleversements économiques et sociaux majeurs qu'elle induirait, l'exploitation de l'IA ne fait pas l'objet d'une réglementation spéciale, et l'opportunité d'une telle réglementation continue même de diviser. La question se pose avec une acuité toute particulière s'agissant des fintechs, compte tenu notamment des risques opérationnels et/ou de détournement liés à l'utilisation croissante de nouveaux outils digitaux.
Depuis les années 1950, les ingénieurs en informatique s'efforcent de concevoir des systèmes d'information capables de reproduire les capacités cognitives de l'homme. Initialement destinées à reproduire le savoir par le développement de systèmes experts, c'est aujourd'hui dans l'élaboration de réseaux neuronaux que se développent les capacités de l'IA. Qu'il s'agisse d'un moteur d'inférence ou d'un réseau neuronal, la fonction d'IA est toujours formalisée par un algorithme, lui-même systématiquement « fondu » dans le code source d'un programme informatique.
Couplé à d'autres facteurs, l'avènement du Big Data a permis d'améliorer considérablement les performances de l'intelligence artificielle. L'IA nécessite en effet l'utilisation massive de données pour son développement comme pour son fonctionnement. La donnée est ainsi souvent présentée comme « l'or noir » du XXIe siècle.
— *Annales des mines* (2019)
**Question** : en vous appuyant sur le texte, répondez à la question : quels sont les enjeux et défis de l'intelligence artificielle dans le secteur de la finance ?`,
questions:[
{pts:20, q:"En vous appuyant sur le texte : quels sont les enjeux et défis de l'intelligence artificielle dans le secteur de la finance ?",
model:`#### Introduction
- **Accroche** : la donnée, « or noir du XXIe siècle » selon le texte, alimente des algorithmes qui transforment la banque, l'assurance et la gestion d'actifs.
- **Définitions** : l'IA désigne les systèmes qui reproduisent des capacités cognitives (systèmes experts hier, réseaux de neurones aujourd'hui) ; les **fintechs** sont les jeunes entreprises qui appliquent ces technologies aux services financiers.
- **Problématique** : en quoi l'IA est-elle à la fois une **opportunité** majeure pour la finance et une **source de risques** qui appellent de nouvelles règles ?
- **Annonce du plan** : les enjeux (I), puis les défis juridiques, éthiques et humains (II).
#### I. Des enjeux économiques considérables
1. **Productivité et baisse des coûts** : automatisation des tâches (traitement des dossiers, rapprochements, contrôle KYC), suppression d'intermédiaires (texte), traitement en temps réel.
2. **Meilleure décision et gestion des risques** : scoring de crédit, détection de la fraude et du blanchiment, prévision de défaut, trading algorithmique, gestion de portefeuille (robo-advisors).
3. **Nouveaux services et inclusion financière** : conseil personnalisé, chatbots, paiement mobile, microcrédit fondé sur des données alternatives — un enjeu fort au Maroc où une partie de la population reste peu bancarisée.
4. **Compétitivité** : la donnée devient un actif stratégique ; les banques doivent s'allier aux fintechs ou les racheter sous peine d'être distancées par les géants du numérique.
*Transition* : ces gains ont une contrepartie : l'incertitude inhérente aux résultats de l'IA.
#### II. Des défis juridiques, éthiques et humains
1. **Responsabilité et contrats** : qui répond d'une décision erronée (prêt refusé, conseil d'investissement fautif) ? Le texte souligne la nécessité de régler contractuellement entre fintechs et banques la **propriété** des résultats, les **garanties** et les **responsabilités**, et pour la banque de mesurer sa responsabilité envers ses clients.
2. **Régulation** : absence de cadre spécifique et débat sur son opportunité (texte) ; depuis, l'Union européenne a adopté un règlement sur l'IA classant le crédit et l'assurance parmi les usages à haut risque ; au Maroc, rôle de Bank Al-Maghrib, de l'AMMC et de la CNDP (loi 09-08 sur les données personnelles).
3. **Données et cybersécurité** : protection de la vie privée, qualité des données, risques opérationnels et de **détournement** (cyberattaques, fraude) cités par le texte.
4. **Éthique et transparence** : biais discriminatoires des algorithmes, opacité des « boîtes noires », droit du client à une explication ; risque systémique si tous les acteurs utilisent les mêmes modèles.
5. **Emploi et compétences** : disparition de tâches répétitives (y compris en comptabilité et en audit), besoin de nouveaux profils (data scientists, auditeurs des algorithmes) et de formation continue.
#### Conclusion
- **Bilan** : l'IA est un levier de performance et d'innovation pour la finance, mais son adoption exige confiance, régulation proportionnée et gouvernance des données.
- **Ouverture** : le rôle de l'expert-comptable évolue : moins de saisie, davantage d'analyse, de conseil et d'**audit des systèmes d'information et des algorithmes**.`,
kp:["Introduction : accroche, définition de l'IA et des fintechs, problématique, plan","Utilisation du texte (incertitude, contrats, responsabilité, absence de réglementation, Big Data)","Enjeux : productivité, baisse des coûts, désintermédiation","Enjeux : gestion des risques, scoring, fraude, nouveaux services, inclusion financière","Défis : responsabilité et contrats, régulation (UE, BAM, AMMC, CNDP)","Défis : données, cybersécurité, biais et transparence","Défis humains : emploi et compétences","Conclusion avec ouverture (profession comptable)","Qualité de l'expression : plan apparent, transitions, orthographe"]}
]}
]});
