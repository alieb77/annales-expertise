/* Session 2017 (septembre 2017) */
EXAMS.push({
id:"cpt-2017", subject:"cpt", year:2017, session:"Septembre 2017", title:"Comptabilité générale et analytique", date:"Septembre 2017", duration:300, pages:[246,251],
note:"Comptabilité générale (12 pts) et comptabilité analytique (8 pts) — barème indiqué sur le sujet",
sections:[
{title:"CG — Cas 1 : Écritures de redressement d'une importation (Casatex)", pts:4, pages:[247,248], th:["cg-erreurs","cg-immo","cg-devises","cg-amort"],
ctx:`En qualité d'auditeur junior, vous relevez des anomalies dans le traitement d'une importation d'investissement chez Casatex.
Le **01/11/N**, Casatex importe une machine des USA pour **100 000 $** auprès de NewyorkInvest. Cours du $ à la date de facture : billets achat 8,42 / vente 8,48 ; virement achat 8,46 / vente 8,50. Cours retenu par la douane au 05/11/N : **8,50 DH**. Droits de douane **35 %** et TVA à l'importation **20 %**. Délai de paiement accordé par le fournisseur : **14 mois**. La douane a été réglée par **obligations cautionnées à 60 jours** au taux de **12 %** l'an (intérêts payables d'avance par chèque).
Le 07/11/N, le transitaire facture **3 000 DH HT** de frais de transit dont **1 000 DH d'honoraires** (TVA 20 %). Le 10/11/N, le transporteur facture **25 000 DH HT** (TVA 14 %). Cours du $ au 31/12/N : billets achat 8,55 / vente 8,58 ; virement achat 8,56 / vente 8,60.
La société entend bénéficier des **amortissements dégressifs** du CGI. Durée de vie : **10 ans** ; l'amortissement économiquement justifié est le linéaire ; mise en service le **1/12/N**.
Écritures passées par le comptable :
| Date | Comptes | Libellé | Débit | Crédit |
|---|---|---|---|---|
| 01/11/N | 2332 / 4411 | Matériel industriel 100 000 $ × 8,48 | 848 000 | 848 000 |
| 05/11/N | 6165 / 4457 | DD 848 000 × 35 % = 296 800 + TVA (848 000 + 296 800) × 20 % = 228 960 | 525 760 | 525 760 |
| 05/11/N | 631 / 5141 | Charge d'intérêt 525 760 × 12 % × 2/12 | 10 515,20 | 10 515,20 |
| 07/11/N | 61365 + 34552 / 4411 | Honoraires 3 000 + TVA 600 | 3 600 | 3 600 |
| 10/11/N | 61365 + 34552 / 4411 | Frais de transport/achat 25 000 + TVA 3 500 | 28 500 | 28 500 |
| 31/12/N | 6331 / 4411 | Perte de change (8,48 − 8,60) × 100 000 $ | 12 000 | 12 000 |
| 31/12/N | 61933 / 2833 | DEA 848 000 × 40 % × 1/12 | 28 266,67 | 28 266,67 |
1. Calculer le coût d'acquisition de la machine à amortir. 2. Passer les écritures des ajustements nécessaires. 3. Calculer l'impact de ces ajustements sur le résultat comptable avant IS.`,
questions:[
{pts:1, q:"1. Coût d'acquisition de la machine.",
chk:[{l:"Coût d'acquisition",v:1175500,u:"DH",alt:[1171500]}],
model:`| Élément | Calcul | Montant |
|---|---|---|
| Prix d'achat | 100 000 $ × 8,50 (cours de vente par virement : l'entreprise devra acheter des dollars à sa banque) | 850 000 |
| Droits de douane | 850 000 (valeur en douane au cours de 8,50) × 35 % | 297 500 |
| Frais de transit (y compris honoraires du transitaire) | | 3 000 |
| Transport | | 25 000 |
| **Coût d'acquisition** | | **1 175 500** |
Exclus : la **TVA à l'importation** (229 500, récupérable) et les **intérêts** des obligations cautionnées (charge financière).
> Si l'on retient le cours d'achat par virement (8,46) pour la facture : 846 000 + 297 500 + 28 000 = 1 171 500. Le cours « billets » est en tout cas à écarter (opérations en espèces).`,
kp:["Prix d'achat au cours du virement (et non billets)","Droits de douane capitalisés (297 500)","Frais de transit et de transport capitalisés","Exclusion de la TVA récupérable et des intérêts"]},
{pts:2, q:"2. Écritures d'ajustement.",
chk:[{l:"Écart de conversion (perte latente) au 31/12/N",v:10000,u:"DH"},{l:"Dotation linéaire (1 mois)",v:9795.83,u:"DH",tol:2},{l:"Dotation dérogatoire",v:48979.17,u:"DH",tol:5}],
model:`| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **1. Prix d'achat au bon cours et bon compte de tiers** | | | |
| 2332 | Matériel et outillage | 2 000 | |
| 4411 | Fournisseurs | 848 000 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 850 000 |
| **2. Droits de douane à l'actif, TVA récupérable** | | | |
| 2332 | Matériel et outillage (DD) | 297 500 | |
| 34551 | État — TVA récupérable sur immobilisations | 229 500 | |
| 6165 | Impôts et taxes indirects | | 525 760 |
| 4457 | État — impôts et taxes à payer (obligations cautionnées) | | 1 240 |
| **3. Intérêts des obligations cautionnées** : 527 000 × 12 % × 60/360 = 10 540 | | | |
| 6311 | Intérêts des emprunts et dettes | 24,80 | |
| 5141 | Banques | | 24,80 |
| **4-5. Frais accessoires à l'actif** | | | |
| 2332 | Matériel et outillage | 28 000 | |
| 61365 | Honoraires / frais de transport | | 28 000 |
| 4411 | Fournisseurs (transitaire et transporteur : dettes sur immobilisations) | 32 100 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 32 100 |
| **6. Écart de change : annulation de la perte réalisée et constatation de l'écart latent** | | | |
| 4411 | Fournisseurs | 12 000 | |
| 6331 | Pertes de change | | 12 000 |
| 3702 | Écarts de conversion — actif (augmentation des dettes) : 100 000 × (8,60 − 8,50) | 10 000 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 10 000 |
| 6393 | Dotations aux provisions pour risques et charges financiers | 10 000 | |
| 4506 | Provisions pour pertes de change | | 10 000 |
| **7. Amortissements** | | | |
| 28332 | Amortissements du matériel (annulation de l'excédent : 28 266,67 − 9 795,83) | 18 470,84 | |
| 6193 | DEA des immobilisations corporelles | | 18 470,84 |
| 6594 | Dotations non courantes aux amortissements dérogatoires | 48 979,17 | |
| 1351 | Provisions pour amortissements dérogatoires | | 48 979,17 |
Amortissement économique (linéaire, depuis la mise en service le 1/12) : 1 175 500 × 10 % × 1/12 = **9 795,83**. Amortissement fiscal (dégressif, 10 ans ⇒ coefficient 3, taux **30 %**, depuis le 1er jour du mois d'acquisition) : 1 175 500 × 30 % × 2/12 = 58 775 ⇒ dérogatoire = **48 979,17**.`,
kp:["Correction du cours (8,50) et reclassement en 4481","DD capitalisés et TVA récupérable (annulation de la charge 6165)","Intérêts recalculés sur DD + TVA (10 540)","Frais de transit et de transport capitalisés","Annulation de la perte de change réalisée ; écart de conversion actif et provision de 10 000","Amortissement linéaire 9 795,83 et dérogatoire 48 979,17 (taux 30 %)"]},
{pts:1, q:"3. Impact des ajustements sur le résultat avant IS.",
chk:[{l:"Impact sur le résultat avant IS",v:525226.87,u:"DH",tol:5}],
model:`| | Charges comptabilisées | Charges corrigées |
|---|---|---|
| Impôts et taxes (DD + TVA) | 525 760,00 | 0 |
| Intérêts | 10 515,20 | 10 540,00 |
| Honoraires et transport | 28 000,00 | 0 |
| Perte de change | 12 000,00 | 0 |
| Dotation aux provisions pour perte de change | 0 | 10 000,00 |
| Dotation aux amortissements | 28 266,67 | 9 795,83 |
| Amortissements dérogatoires | 0 | 48 979,17 |
| **Total** | **604 541,87** | **79 315,00** |
**Impact = + 525 226,87 DH** : le résultat avant IS augmente (charges surévaluées de ce montant).`,
kp:["Recensement des charges à annuler (6165, frais accessoires, perte de change, excédent de dotation)","Charges à ajouter (provision, dérogatoire, complément d'intérêts)","Impact ≈ + 525 227"]}
]},
{title:"CG — Cas 2 : Subventions (station d'épuration Alpha)", pts:2, pages:[248,248], th:["cg-subv"],
ctx:`Dans le cadre d'un PPP, la société Alpha a reçu le **01/10/N** une subvention de **300 MDH** ; la convention a été signée le **01/02/N** et porte sur la construction d'une station d'épuration. Le projet a été réalisé au **30/05/N+1** pour un coût global de **500 MDH** (dont un terrain de **100 MDH**). Durée de vie de la station : **50 ans**. Alpha a en outre perçu des subventions de **25 MDH** et **30 MDH** au titre de N et N+1 pour pallier l'insuffisance de son activité et couvrir les déficits. Enregistrer les écritures en N et N+1.`,
questions:[
{pts:2, q:"Écritures de N et N+1 (en MDH).",
chk:[{l:"Reprise de la subvention d'investissement en N+1",v:6.3,u:"MDH",tol:0.05}],
model:`- La subvention de **300** est une **subvention d'investissement** (1311), acquise dès la signature de la convention.
- Les **25** et **30** MDH sont des **subventions d'équilibre** (756), produits non courants de l'exercice concerné.
- Ventilation : terrain 300 × 100/500 = **60** (non amortissable, sans clause d'inaliénabilité : reprise sur 10 ans) ; station 300 × 400/500 = **240** (reprise au rythme de l'amortissement sur 50 ans).
- Mise en service le 1er juin N+1 (7 mois) : amortissement 400 / 50 × 7/12 = 4,667 ; reprise 240 / 50 × 7/12 = 2,8 + 60 / 10 × 7/12 = 3,5 ⇒ **6,3 MDH**.
| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| **01/02/N** | **Signature de la convention** | | |
| 3458 | État — autres comptes débiteurs | 300 | |
| 1311 | Subventions d'investissement reçues | | 300 |
| **01/10/N** | **Encaissement** | | |
| 5141 | Banques | 300 | |
| 3458 | État — autres comptes débiteurs | | 300 |
| **N** | **Subvention d'équilibre** | | |
| 5141 | Banques | 25 | |
| 7560 | Subventions d'équilibre | | 25 |
| **N+1** | **Subvention d'équilibre** | | |
| 5141 | Banques | 30 | |
| 7560 | Subventions d'équilibre | | 30 |
| **31/12/N+1** | **Amortissement de la station et reprise de subvention** | | |
| 6193 | DEA des immobilisations corporelles | 4,667 | |
| 28321 | Amortissements des constructions | | 4,667 |
| 1319 | Subventions d'investissement inscrites au CPC | 6,3 | |
| 7577 | Reprises sur subventions d'investissement | | 6,3 |
(Les dépenses de construction de N et N+1 passent par 2392/2393 « Immobilisations en cours », soldées à la mise en service.)`,
kp:["Subvention d'investissement constatée à la signature (3458 / 1311)","Subventions d'équilibre en 756 (25 et 30)","Ventilation terrain 60 / station 240","Reprise au rythme de l'amortissement (50 ans) et sur 10 ans pour le terrain, prorata de 7 mois","Écriture 1319 / 7577 de 6,3"]}
]},
{title:"CG — Questions 3 à 5 : IAS 16, fonctionnement des comptes, importance significative", pts:6, pages:[248,248], th:["cg-eval","cg-amort"],
questions:[
{pts:2, q:"Question 3 : En quoi consistent les amortissements par composants selon IAS 16 (10 lignes environ) ?",
model:`- IAS 16 impose d'identifier, au sein d'une immobilisation corporelle, les **composants significatifs** dont le **coût est important** par rapport au coût total et dont la **durée d'utilité** ou le **rythme de consommation** des avantages **diffèrent** de ceux de l'immobilisation principale (ex. : avion → cellule, moteurs, cabine, grandes révisions ; immeuble → gros œuvre, toiture, ascenseurs, chauffage).
- Chaque composant est **amorti séparément** sur sa propre durée d'utilité, selon le mode reflétant le rythme de consommation des avantages.
- Les **dépenses de remplacement** d'un composant sont activées et la valeur résiduelle du composant remplacé est sortie ; les **grandes révisions** constituent aussi un composant (au lieu d'une provision pour grosses réparations).
- La **base amortissable** est le coût diminué de la **valeur résiduelle** ; durée et mode sont révisés à chaque clôture.
- Intérêt : une image plus fidèle de la consommation réelle des actifs ; le CGNC, lui, amortit l'immobilisation globalement (une approche par composants y est admise de façon facultative).`,
kp:["Identification des composants significatifs (coût, durée ou rythme différents)","Amortissement séparé de chaque composant","Remplacement et grandes révisions traités comme composants","Base amortissable = coût − valeur résiduelle, révision annuelle","Comparaison avec le CGNC / intérêt pour l'image fidèle"]},
{pts:2, q:"Question 4 : Contenu et fonctionnement des comptes 2710, 3413, 3942 et 4464.",
model:`- **2710 Écarts de conversion – actif : diminution des créances immobilisées** : perte latente constatée à l'inventaire sur une créance immobilisée en devises (prêt) dont la valeur en DH baisse. Débité par le crédit de la créance (24..) ; contre-passé à l'ouverture de l'exercice suivant ; la perte est couverte par une provision pour risque de change (1516 / 6393).
- **3413 Fournisseurs – créances pour emballages et matériel à rendre** : montant des emballages consignés **par les fournisseurs** que l'entreprise doit leur restituer et pour lesquels elle sera remboursée. Débité lors de la réception (avec la facture), crédité lors du retour des emballages (avoir) ; les emballages conservés sont transférés en achats.
- **3942 Provisions pour dépréciation des clients et comptes rattachés** : dépréciation des créances clients douteuses, calculée sur le **HT**. Crédité par 6196 (dotation), débité par 7196 (reprise) lorsque la provision devient sans objet ou que la créance est soldée.
- **4464 Associés – opérations faites en commun** : soldes débiteurs ou créditeurs des opérations réalisées en **participation** ou dans le cadre de sociétés en participation / groupements ; crédité de la quote-part de résultat revenant aux coassociés, débité des pertes ou des sommes versées.`,
kp:["2710 : perte latente sur créances immobilisées en devises, contre-passation, provision","3413 : emballages consignés par les fournisseurs, à rendre","3942 : provision sur créances clients (6196 / 7196), base HT","4464 : opérations faites en commun / participation"]},
{pts:2, q:"Question 5 : Définir et commenter le principe d'importance significative (10 lignes environ).",
model:`**Définition** : les états de synthèse doivent révéler **tous les éléments dont l'importance peut affecter les évaluations et les décisions** des utilisateurs. Est significative toute information dont l'omission ou l'inexactitude pourrait influencer le jugement d'un lecteur raisonnable.
**Commentaire** :
- Il autorise des **simplifications** pour les éléments non significatifs (regroupement de postes, enregistrement en charges de petits matériels, méthodes simplifiées), ce qui allège la tenue des comptes ;
- il impose à l'inverse de **détailler** dans l'ETIC les informations significatives (engagements hors bilan, changements de méthode, événements postérieurs) ;
- l'appréciation est à la fois **quantitative** (seuils en % du résultat, du total du bilan, du CA) et **qualitative** (nature de l'élément : fraude, transactions avec les dirigeants) ;
- c'est un principe central en **audit** : le commissaire aux comptes fixe un **seuil de signification** pour planifier ses travaux et apprécier les anomalies.`,
kp:["Définition : éléments susceptibles d'influencer les décisions des utilisateurs","Conséquence : simplification pour l'accessoire / information pour l'essentiel","Appréciation quantitative et qualitative","Lien avec le seuil de signification en audit"]}
]},
{title:"CA — Dossier I : Dar Al Fellah (imputation rationnelle, sous-activité de distribution)", pts:4, pages:[249,250], th:["ca-ir","ca-couts"],
ctx:`Dar Al Fellah S.A. produit des plateaux à fourrage (**PF**, prix 150 000 DH HT) et des bennes à betteraves (**BB**, prix 190 000 DH HT). Commission des représentants : **5 % du CA HT** (charges sociales comprises). Ventes possibles : 300 remorques par an au maximum ; marché régional : 200 PF et 260 BB. Production : PF 200 h de MOD, BB 250 h ; capacité maximale **70 000 h** de MOD ; heure de MOD : 150 DH. Matières et pièces : PF 70 000 DH, BB 100 000 DH HT.
Année N : production 100 PF et 200 BB ; ventes 90 PF et 190 BB ; pas de stocks initiaux ; charges indirectes fixes de production **4 200 000 DH** ; charges indirectes fixes de distribution **7 200 000 DH** ; pas de charges indirectes variables ; charges fixes de production imputées aux heures de MOD ; charges fixes de distribution imputées au nombre de remorques vendues ; flux tendus ; imputation rationnelle des charges fixes.
1. Niveau normal de production = 70 000 h : coût de sous-activité de production (CSAP). 2. Coûts de production complets globaux et unitaires. 3. Niveau normal de la fonction commerciale = 300 remorques : coût de sous-activité de distribution (CSAD). 4. Coûts de revient et résultats analytiques globaux et unitaires. 5. Résultat de l'année N (R) à partir des résultats analytiques et des coûts de sous-activité.`,
questions:[
{pts:4, q:"CSAP, coûts de production, CSAD, coûts de revient, résultats analytiques et résultat global.",
chk:[{l:"CSAP",v:0,u:"DH"},{l:"Coût de production unitaire PF",v:112000,u:"DH"},{l:"Coût de production unitaire BB",v:152500,u:"DH"},{l:"CSAD",v:480000,u:"DH"},{l:"Résultat de l'année N (R)",v:865000,u:"DH"}],
model:`**1.** Heures réelles = 100 × 200 + 200 × 250 = 70 000 h = activité normale ⇒ coefficient 1 ⇒ **CSAP = 0**. Coût de l'heure imputée : 4 200 000 / 70 000 = 60 DH.
**2. Coûts de production**
| | PF (100) | BB (200) |
|---|---|---|
| Matières et pièces | 7 000 000 | 20 000 000 |
| MOD (× 150) | 20 000 h → 3 000 000 | 50 000 h → 7 500 000 |
| Charges fixes de production (× 60) | 1 200 000 | 3 000 000 |
| **Coût de production** | **11 200 000** | **30 500 000** |
| **Unitaire** | **112 000** | **152 500** |
**3.** Coût normal de distribution par remorque : 7 200 000 / 300 = 24 000 ; remorques vendues : 280 ⇒ imputé 6 720 000 ⇒ **CSAD = 480 000**.
**4. Coûts de revient et résultats**
| | PF (90) | BB (190) |
|---|---|---|
| Coût de production des vendus | 10 080 000 | 28 975 000 |
| Commissions (5 % du CA) | 675 000 | 1 805 000 |
| Distribution imputée (× 24 000) | 2 160 000 | 4 560 000 |
| **Coût de revient** | **12 915 000** (143 500/u) | **35 340 000** (186 000/u) |
| Chiffre d'affaires | 13 500 000 | 36 100 000 |
| **Résultat analytique** | **585 000** (6 500/u) | **760 000** (4 000/u) |
**5.** R = 585 000 + 760 000 − CSAP 0 − CSAD 480 000 = **865 000 DH** (vérification par la comptabilité générale : CA 49 600 000 − charges 50 935 000 + stock final 10 PF et 10 BB 2 645 000 + ... = 865 000).`,
kp:["Activité réelle = 70 000 h → CSAP nul","Coûts de production unitaires 112 000 et 152 500","CSAD = 7 200 000 × (1 − 280/300) = 480 000","Commissions 5 % dans le coût de revient","Résultats 585 000 et 760 000 ; R = 865 000"]}
]},
{title:"CA — Dossier II : Seuil de rentabilité (ABC NEGOCE, accessoire A)", pts:2, pages:[250,251], th:["ca-variable","g-rentabilite"],
ctx:`Août 2017 : ventes **10 000 unités** ; prix **85 DH** ; charges variables unitaires **47 DH** ; charges fixes **280 000 DH**.
1) Seuil de rentabilité en valeur et en quantité. 2) Ventes uniformes sur le mois : quel jour le seuil est-il atteint ? 3) Résultat avec un CA de 900 000 DH. 4) Combien d'articles vendre pour un résultat de 200 000 DH ?`,
questions:[
{pts:2, q:"SR, date, résultat pour 900 000 DH de CA et quantité pour un résultat de 200 000 DH.",
chk:[{l:"SR en valeur",v:626315.79,u:"DH",tol:5},{l:"SR en quantité",v:7369,u:"unités",tol:1},{l:"Résultat pour un CA de 900 000",v:122352.94,u:"DH",tol:5},{l:"Quantité pour un résultat de 200 000",v:12632,u:"unités",tol:1}],
model:`MCV unitaire = 85 − 47 = 38 DH ; taux de MCV = 38 / 85 = 44,71 %. Résultat actuel : 10 000 × 38 − 280 000 = 100 000.
1) **SR = 280 000 / 38 = 7 368,4 ⇒ 7 369 unités** ; en valeur : 280 000 / 0,4471 = **626 316 DH**.
2) 7 368,4 / 10 000 × 31 jours (août) = 22,8 ⇒ atteint le **23 août** (≈ 22e jour sur une base de 30 jours).
3) Résultat = 900 000 × 44,71 % − 280 000 = **122 353 DH**.
4) Q = (280 000 + 200 000) / 38 = 12 631,6 ⇒ **12 632 unités**.`,
kp:["MCV 38 et taux 44,71 %","SR ≈ 7 369 unités / 626 316 DH","Date ≈ 23 août","Résultat 122 353 pour 900 000 de CA","12 632 unités pour 200 000 de résultat"]}
]},
{title:"CA — Dossier III : Méthode ABC (Pareto) pour segmenter les coûts", pts:2, pages:[251,251], th:["ca-couts"],
ctx:`La société OTERAP produit 100 articles. Coûts formés de 5 composants : C1 intégré dans 45 articles (coût 150 000) ; C2 dans 18 articles (50 000) ; C3 dans 17 articles (200 000) ; C4 dans 15 articles (900 000) ; C5 dans 5 articles (700 000). En utilisant la méthode appropriée, mettre en évidence les deux segments permettant de mener l'étude de manière efficiente, et commenter.`,
questions:[
{pts:2, q:"Segmentation par la loi de Pareto (méthode 20/80).",
model:`On classe les composants par **coût décroissant** et on cumule :
| Composant | Coût | % du coût | % cumulé | Articles | % cumulé des articles |
|---|---|---|---|---|---|
| C4 | 900 000 | 45 % | 45 % | 15 | 15 % |
| C5 | 700 000 | 35 % | **80 %** | 5 | **20 %** |
| C3 | 200 000 | 10 % | 90 % | 17 | 37 % |
| C1 | 150 000 | 7,5 % | 97,5 % | 45 | 82 % |
| C2 | 50 000 | 2,5 % | 100 % | 18 | 100 % |
| **Total** | **2 000 000** | | | **100** | |
**Segment 1 (classe A)** : **C4 et C5** = **20 %** des articles mais **80 %** des coûts.
**Segment 2 (classes B/C)** : **C3, C1, C2** = **80 %** des articles pour seulement **20 %** des coûts.
**Commentaire** : la loi de Pareto (20/80) se vérifie exactement. L'étude des coûts doit se concentrer en priorité sur C4 et C5 (analyse fine, négociation des achats, standards, suivi des écarts), tandis que les autres composants peuvent faire l'objet d'un suivi allégé : c'est le principe d'efficience du contrôle de gestion.`,
kp:["Classement décroissant et cumuls","Segment A : C4 + C5 = 80 % des coûts pour 20 % des articles","Segment B/C : 80 % des articles pour 20 % des coûts","Commentaire : concentrer l'analyse sur le segment A"]}
]}
]});

EXAMS.push({
id:"droit-2017", subject:"droit", year:2017, session:"Septembre 2017", title:"Droit des affaires et droit fiscal", date:"Septembre 2017", duration:180, pages:[252,256],
note:"Deux copies séparées : droit des affaires /20 (5 points par question retenus) et droit fiscal /20 (barème non précisé : TVA 6, IR 6, IS 8 retenus)",
sections:[
{title:"Droit des affaires — Questions", pts:20, pages:[253,253], th:["da-constitution","da-cac","da-contrats"],
ctx:`Aucun document n'est autorisé. Répondre en 3 pages maximum.`,
questions:[
{pts:5, q:"1. Quels sont les critères de distinction entre une marque et une dénomination sociale ?",
model:`| Critère | Marque | Dénomination sociale |
|---|---|---|
| Nature / fonction | Signe distinctif des **produits ou services** de l'entreprise auprès de la clientèle | Nom de la **personne morale** (société), qui l'identifie juridiquement |
| Texte applicable | Loi 17-97 sur la propriété industrielle | Code de commerce, lois 17-95 et 5-96 (mention dans les statuts) |
| Acquisition du droit | **Dépôt et enregistrement à l'OMPIC** | Choix dans les statuts + **certificat négatif** et immatriculation au RC |
| Portée | Protection limitée aux classes de produits/services visées (principe de spécialité) et au territoire (Maroc, extensions internationales) | Protection contre l'usurpation (concurrence déloyale) ; unicité au registre central du commerce |
| Durée | 10 ans renouvelables indéfiniment | Durée de vie de la société |
| Cessibilité | Bien incorporel **cessible** et donnant lieu à licence, indépendamment de l'entreprise | Attachée à la société ; changement par modification des statuts |
| Action | Action en **contrefaçon** | Action en concurrence déloyale / usurpation |
Une même expression peut être à la fois dénomination sociale et marque (il faut alors la **déposer** pour la protéger comme marque) ; une dénomination antérieure peut constituer un **droit antérieur** opposable à l'enregistrement d'une marque.`,
kp:["Fonction : désigner des produits/services vs identifier la personne morale","Acquisition : dépôt OMPIC vs statuts, certificat négatif, RC","Portée (spécialité, territoire) et durée (10 ans renouvelables)","Cessibilité / licence de la marque","Actions : contrefaçon vs concurrence déloyale ; conflit de droits antérieurs"]},
{pts:5, q:"2. Dans quels cas doit-on faire appel à un ou des commissaires aux comptes ? Quelle est sa mission et quelles sont ses responsabilités ?",
model:`#### Cas de recours obligatoire
- **SA** : toujours au moins un CAC (au moins deux pour les sociétés faisant appel public à l'épargne, les banques…).
- **SAS** : règles de la SA (au moins un CAC).
- **SARL, SNC, SCS, SCA** : obligatoire lorsque le **chiffre d'affaires** dépasse **50 millions de DH** à la clôture de l'exercice (SCA : toujours) ; sinon facultatif, et peut être demandé par des associés représentant une fraction du capital ou en justice.
- **GIE** émettant des obligations ; **associations** et organismes subventionnés au-delà de certains seuils ; **commissaires aux apports, à la fusion, à la transformation** pour des missions ponctuelles.
#### Mission
- **Certifier** la régularité, la sincérité et l'image fidèle des états de synthèse (rapport général) ; vérifier le rapport de gestion et les documents adressés aux associés ; **rapport spécial** sur les conventions réglementées ; veiller à l'égalité entre associés.
- **Procédure d'alerte** ; **révélation** des faits délictueux au procureur du Roi ; signalement des irrégularités à l'assemblée.
#### Responsabilités
- **Civile** : envers la société et les tiers pour les fautes et négligences commises dans ses fonctions (obligation de moyens).
- **Pénale** : informations mensongères sur la situation de la société, non-révélation de faits délictueux, violation du secret professionnel, exercice en situation d'incompatibilité.
- **Disciplinaire** : devant l'Ordre des experts-comptables.`,
kp:["Obligatoire en SA/SAS ; pluralité pour les sociétés faisant appel public à l'épargne","SARL et sociétés de personnes : seuil de CA de 50 M DH","Missions spéciales (apports, fusion, transformation)","Mission : certification, conventions réglementées, alerte, révélation","Responsabilités civile, pénale et disciplinaire"]},
{pts:5, q:"3. Quelles sont les conditions de création d'une société par actions simplifiée (SAS) ?",
model:`- **Associés** : une ou plusieurs personnes physiques ou morales (régime élargi par la loi 19-20 ; auparavant réservé aux sociétés d'un capital minimum, à vérifier selon la version en vigueur).
- **Capital** : librement fixé par les statuts (la loi 19-20 a supprimé le minimum de 2 millions de DH qui existait auparavant) ; libération selon les statuts ; possibilité d'apports en industrie (actions inaliénables).
- **Interdiction de faire appel public à l'épargne**.
- **Statuts** écrits, fixant librement l'organisation de la direction (président obligatoire), les conditions de prise des décisions collectives, et le cas échéant les clauses d'agrément, d'inaliénabilité (10 ans maximum), d'exclusion.
- **Commissaire aux apports** pour les apports en nature.
- **Formalités** : certificat négatif, dépôt des fonds en banque, enregistrement des statuts, immatriculation au **registre du commerce**, publicité légale, identifiant fiscal et affiliation à la CNSS (aujourd'hui via le guichet électronique de création d'entreprise).
- **Commissaire aux comptes** désigné selon les règles de la SA.`,
kp:["Associés personnes physiques ou morales, associé unique possible","Capital libre (évolution législative à préciser)","Interdiction de l'appel public à l'épargne","Statuts : président et règles de décision librement fixées, clauses particulières","Formalités de constitution et commissaire aux apports"]},
{pts:5, q:"4. La protection des données personnelles au Maroc.",
model:`- **Cadre** : **loi 09-08** (2009) relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, et son décret d'application ; article 24 de la Constitution de 2011 (protection de la vie privée) ; adhésion à la Convention 108 du Conseil de l'Europe.
- **Champ** : tout traitement de données identifiant directement ou indirectement une personne physique (nom, numéro CIN, adresse, données de santé, biométrie…) effectué au Maroc ou par un responsable établi au Maroc.
- **Principes** : collecte **loyale et licite**, finalités **déterminées et légitimes**, données **adéquates, pertinentes et non excessives**, exactes, conservées pendant une durée limitée ; **consentement** de la personne (sauf exceptions légales) ; **sécurité et confidentialité**.
- **Droits des personnes** : information, **accès**, **rectification**, **opposition**.
- **Formalités** : **déclaration préalable** ou **autorisation** de la **CNDP** (Commission nationale de contrôle de la protection des données à caractère personnel) ; autorisation spéciale pour les données sensibles et les **transferts vers l'étranger** (pays offrant une protection adéquate).
- **Contrôle et sanctions** : pouvoirs d'investigation de la CNDP ; sanctions **pénales** (amendes, emprisonnement) en cas de traitement illicite.
- **Enjeux pour l'entreprise et l'auditeur** : conformité des fichiers clients et RH, vidéosurveillance, cloud, sécurité informatique.`,
kp:["Loi 09-08 et Constitution (art. 24)","Principes : licéité, finalité, proportionnalité, consentement, sécurité","Droits d'accès, de rectification, d'opposition","CNDP : déclaration/autorisation, transferts à l'étranger","Sanctions et enjeux pratiques"]}
]},
{title:"Droit fiscal — TVA de juillet 2017 (société ABC) et pénalités", pts:6, pages:[254,254], th:["df-tva","df-procedures"],
ctx:`Opérations de juillet 2017 de la société ABC : CA à l'export 600 000 ; CA taxable **TTC** 700 000 ; **livraison à soi-même du nouveau siège social** : coût de revient 1 000 000 ; fournitures de bureau 15 000 TTC payées par chèque daté du 30/07/2017 et débité en août 2017 ; TVA de 23 000 sur une importation payée le 1er août 2017, quittance de paiement des droits de douane du **5 juillet 2017** ; achat d'une machine 75 000 TTC payée par effet daté du 14/05/2017 à échéance le 30/06/2017, débité le 2 juillet 2017.
En septembre 2017, ABC n'a pas encore déposé sa déclaration. a. Préparer la déclaration de juillet 2017. b. Déterminer les pénalités et majorations applicables en cas de dépôt le 30 octobre 2017.`,
questions:[
{pts:4, q:"a. Déclaration de TVA de juillet 2017.",
chk:[{l:"TVA collectée",v:316666.67,u:"DH",tol:2},{l:"TVA déductible",v:235500,u:"DH",tol:2,alt:[223000]},{l:"TVA due",v:81166.67,u:"DH",tol:2,alt:[93666.67]}],
model:`#### TVA collectée
| Opération | TVA |
|---|---|
| Export (exonéré avec droit à déduction) | 0 |
| CA taxable TTC : 700 000 × 20/120 | 116 666,67 |
| LASM du siège social : 1 000 000 × 20 % (coût de revient hors terrain) | 200 000,00 |
| **Total** | **316 666,67** |
#### TVA déductible de juillet
| Opération | Traitement | TVA |
|---|---|---|
| LASM du siège | Collectée et déduite simultanément | 200 000,00 |
| Fournitures payées par chèque débité en août | Paiement effectif en août → déclaration d'août | 0 |
| Importation : quittance du 5 juillet | Déductible le mois de la quittance | 23 000,00 |
| Machine : effet échu le 30/06, débité le 2/07 | Paiement effectif (débit) en juillet | 12 500,00 |
| **Total** | | **235 500,00** |
**TVA due de juillet 2017 = 316 666,67 − 235 500 = 81 166,67 DH**, à déclarer et payer avant la **fin août 2017**.
> Si l'on rattache le paiement de l'effet à son échéance (juin), la machine relève de juin : déductible 223 000 et TVA due 93 666,67.`,
kp:["Export exonéré avec droit à déduction","TVA sur CA TTC : 116 666,67","LASM du siège : 200 000 collectée et déduite","Fournitures : déduction en août ; import : juillet (quittance)","Machine : selon la date de paiement retenue","TVA due ≈ 81 167, déclaration avant fin août"]},
{pts:2, q:"b. Pénalités et majorations pour un dépôt le 30 octobre 2017.",
model:`La déclaration de juillet devait être déposée et la TVA payée **avant le 31 août 2017** ; dépôt le 30 octobre ⇒ **2 mois de retard** (plus de 30 jours).
Selon le CGI applicable en 2017 (à vérifier dans la version en vigueur) :
- **Dépôt tardif** de la déclaration : majoration de **15 %** des droits (5 % si le retard ne dépasse pas 30 jours) ;
- **Paiement tardif** : pénalité de **10 %** ;
- **Majoration de retard** : **5 %** pour le premier mois et **0,5 %** par mois ou fraction de mois supplémentaire ⇒ 5,5 % pour 2 mois ;
- règle de **non-cumul** : lorsque la déclaration et le paiement sont tous deux tardifs, la majoration pour dépôt tardif et la pénalité pour paiement tardif sont plafonnées à **20 %** au total.
Sur une TVA de 81 166,67 : 20 % = 16 233,33 + 5,5 % = 4 464,17 ⇒ **≈ 20 697,50 DH** de sanctions (à côté du principal).`,
kp:["Échéance : fin août 2017 ; retard de 2 mois","Majoration pour dépôt tardif (15 %, ou 5 % si ≤ 30 jours)","Pénalité de 10 % pour paiement tardif (plafond de cumul 20 %)","Majoration de retard 5 % + 0,5 % par mois supplémentaire","Calcul chiffré sur la TVA due"]}
]},
{title:"Droit fiscal — IR du directeur général (2016)", pts:6, pages:[254,254], th:["df-ir"],
ctx:`Le directeur général de la société ANIM (résident, marié, 3 enfants à charge) dispose en 2016 : d'un revenu brut imposable salarial de **350 000** (revenu net imposable **326 000** et IR retenu à la source **120 420**) ; d'un revenu brut locatif de **150 000**. Barème 2016 : 0 à 30 000 exonéré ; 30 001 à 50 000 : 10 % (3 000) ; 50 001 à 60 000 : 20 % (8 000) ; 60 001 à 80 000 : 30 % (14 000) ; 80 001 à 180 000 : 34 % (17 200) ; au-delà : 38 % (24 400).
1. Est-il obligé de déposer une déclaration de revenu global pour 2016 ? 2. Calculer l'IR sur le revenu global 2016 et l'IR à payer. 3. Calculer les cotisations sociales obligatoires (CNSS et AMO) payées en 2016 par la société au titre de son salaire.`,
questions:[
{pts:1, q:"1. Obligation de déclaration du revenu global 2016.",
model:`**Oui.** En 2016, les revenus fonciers **s'ajoutaient au revenu global** (le régime libératoire n'a été instauré qu'en 2019). Disposant, en plus de son salaire, d'un revenu foncier, le DG doit souscrire la **déclaration du revenu global** avant le **1er mars 2017**.`,
kp:["Oui : salaire + revenus fonciers à agréger","Régime 2016 (avant le taux libératoire de 2019)","Délai : avant fin février 2017"]},
{pts:3, q:"2. IR sur le revenu global 2016 et IR à payer.",
chk:[{l:"Revenu foncier net (après abattement de 40 %)",v:90000,u:"DH"},{l:"Revenu global imposable",v:416000,u:"DH"},{l:"IR à payer (complément)",v:11820,u:"DH",tol:5,alt:[34200]}],
model:`- Revenu foncier net = 150 000 × (1 − 40 %) = **90 000**.
- Revenu global imposable = 326 000 + 90 000 = **416 000**.
- IR brut = 416 000 × 38 % − 24 400 = 133 680 ; charges de famille (épouse + 3 enfants) : 4 × 360 = − 1 440 ⇒ **IR = 132 240**.
- IR déjà retenu sur le salaire : 120 420 (montant indiqué par l'énoncé) ⇒ **IR à payer = 11 820 DH**.
> Remarque : l'IR « normal » sur 326 000 serait 326 000 × 38 % − 24 400 − 1 440 = 98 040 ; avec ce montant de retenue, le complément serait 34 200 (= 90 000 × 38 %). Si le locataire est une personne morale ayant opéré une retenue à la source sur les loyers, elle est imputable.`,
kp:["Abattement de 40 % sur les loyers bruts (régime 2016)","Revenu global 416 000","IR au barème − charges de famille = 132 240","Imputation de la retenue sur salaire → reliquat"]},
{pts:2, q:"3. Cotisations sociales obligatoires (CNSS et AMO) versées par la société en 2016.",
model:`Taux en vigueur en 2016 (à vérifier) appliqués au salaire brut de 350 000 DH :
| Cotisation | Base | Part patronale | Part salariale |
|---|---|---|---|
| Prestations sociales (plafond 6 000 DH/mois) | 72 000 | 8,60 % → 6 192 | 4,48 % → 3 225,60 |
| Allocations familiales (sans plafond) | 350 000 | 6,40 % → 22 400 | — |
| Taxe de formation professionnelle | 350 000 | 1,60 % → 5 600 | — |
| AMO (sans plafond) | 350 000 | 2,26 % → 7 910 | 2,26 % → 7 910 |
| Participation AMO (solidarité) | 350 000 | 1,85 % → 6 475 | — |
| **Total** | | **48 577** | **11 135,60** |
La société verse à la CNSS la part patronale (**48 577 DH**, charge pour l'entreprise) et précompte la part salariale (**11 135,60 DH**) sur le salaire, soit **59 712,60 DH** au total.`,
kp:["Distinction part patronale / part salariale","Plafond de 6 000 DH/mois pour les prestations sociales","Allocations familiales, formation professionnelle, AMO sans plafond","Calcul chiffré cohérent"]}
]},
{title:"Droit fiscal — IS de la société ABC (exercice 2016)", pts:8, pages:[255,256], th:["df-is"],
ctx:`La société ABC (distribution de logiciels éducatifs), créée en 2005, a réalisé en 2016 un CA HT de **17 530 000 DH** ; capital : 10 000 actions de 100 DH entièrement libérées. Bénéfice comptable 2016 : **530 000 DH**.
1. Trois actionnaires disposent d'un compte courant de **7 000 000** depuis le 30/11/2015, rémunéré à **8 %** ; taux admis en 2016 : **2,53 %**. La société Delta, appartenant au président d'ABC, a consenti le 10/07/2016 un prêt de 1 400 000 à 6 %.
2. Impôts et taxes : rappel d'IS 5 500 ; taxe de services communaux de 2014 reçue en 2016 : 18 000 ; taxe d'habitation de la villa de la société habitée par le président : 10 700 ; majoration pour paiement tardif de la taxe d'enseigne : 9 000. Frais divers : entretien de la voiture utilisée par le président pour les besoins de l'entreprise : 24 000 TTC ; dons en nature à des associations reconnues d'utilité publique : 15 000 (logiciels évalués au prix de vente) ; cotisation à l'Association des distributeurs de logiciels : 1 200 ; acquisition **en espèces** d'une pièce de rechange : 12 000 HT ; changement complet du moteur de la camionnette de livraison : 20 000 (constaté en charges).
3. Provisions : créances douteuses calculées d'après les statistiques : 148 000 ; garantie donnée : 86 000 ; stock calculée de manière globale : 50 000.
4. Produits non courants : indemnité de 27 300 reçue d'un fournisseur pour un emballage non conforme.
Calculer le bénéfice imposable (déficits : 2011 : 120 000 dont déficit d'exploitation 90 000 ; 2012 : 150 000 dont déficit d'exploitation 70 000) ; l'IS dû en 2016 (IS 2015 : 98 000) ; les acomptes de 2017.`,
questions:[
{pts:6, q:"Bénéfice imposable 2016 (rectifications et imputation des déficits).",
chk:[{l:"Intérêts du compte courant réintégrés",v:534700,u:"DH"},{l:"Résultat fiscal avant déficits",v:1305900,u:"DH",tol:5000},{l:"Base imposable après déficits",v:1125900,u:"DH",tol:5000}],
model:`| Élément | Réintégration | Justification |
|---|---|---|
| Bénéfice comptable | 530 000 | |
| Intérêts du compte courant : 560 000 comptabilisés − 1 000 000 × 2,53 % (avance plafonnée au capital) | 534 700 | Plafonds de l'avance (capital) et du taux |
| Prêt de Delta (non associé) | 0 | Pas de plafonnement ; taux de marché |
| Rappel d'IS | 5 500 | IS non déductible |
| TSC 2014 émise en 2016 | 0 | Impôt déductible l'année de sa mise en recouvrement |
| Taxe d'habitation de la villa du président | 10 700 | Dépense personnelle (avantage en nature) |
| Majoration de retard (taxe d'enseigne) | 9 000 | Sanctions non déductibles |
| Entretien de la voiture (besoins de l'entreprise) | 0 | Déductible |
| Dons en nature à des associations RUP (15 000 < 2 ‰ du CA = 35 060) | 0 | Déductibles (évaluation au coût de revient ; la marge incluse dans le prix de vente devrait être neutralisée) |
| Cotisation professionnelle | 0 | Déductible |
| Pièce payée en espèces 12 000 HT | 2 000 | Dépenses en espèces déductibles dans la limite de 10 000 DH par jour et par fournisseur (règle de l'époque ; 5 000 DH depuis 2019) |
| Moteur de la camionnette : dépense immobilisable (prolonge la durée de vie) | 16 000 | 20 000 réintégrés − amortissement déductible (20 % sur un an ≈ 4 000) |
| Provision statistique pour créances | 148 000 | Non individualisée, sans recours judiciaire |
| Provision pour garantie | 0 | Déductible |
| Provision globale sur stocks | 50 000 | Non individualisée |
| Indemnité fournisseur (27 300) | 0 | Produit imposable déjà compris |
| **Total réintégrations** | **775 900** | |
Résultat fiscal = 530 000 + 775 900 = **1 305 900**.
**Déficits** (hypothèse : non encore imputés) : la part « exploitation » (hors amortissements) n'est reportable que sur 4 ans ⇒ celle de **2011 (90 000) est périmée** fin 2015 ; celle de 2012 (70 000) est encore imputable en 2016 ; les parts **amortissements** (30 000 + 80 000) sont reportables sans limite. Imputation : 70 000 + 30 000 + 80 000 = **180 000** ⇒ **base imposable 1 125 900**.`,
kp:["Intérêts CCA : avance limitée au capital (1 M) et taux 2,53 % → 534 700","Réintégrations : rappel d'IS, taxe d'habitation du président, majoration, provisions statistique et globale","Charges admises : TSC, entretien, dons RUP (≤ 2 ‰), cotisation, provision pour garantie","Espèces et dépense immobilisable (moteur) correctement traitées","Résultat fiscal ≈ 1 305 900","Déficits : part ordinaire 2011 périmée, 2012 et amortissements imputables → ≈ 1 125 900"]},
{pts:2, q:"IS dû en 2016 et acomptes de 2017.",
chk:[{l:"IS 2016",v:207770,u:"DH",tol:1500},{l:"Reliquat d'IS 2016",v:109770,u:"DH",tol:1500},{l:"Acompte 2017",v:51942.5,u:"DH",tol:400}],
model:`- **IS 2016** (barème progressif de 2016 : 10 % jusqu'à 300 000 ; 20 % de 300 001 à 1 000 000 ; 30 % de 1 000 001 à 5 000 000) : 30 000 + 140 000 + 125 900 × 30 % = **207 770 DH**.
- **CM** : 0,5 % × 17 530 000 = 87 650 (+ produits accessoires) < IS ⇒ impôt dû = **207 770**.
- Acomptes versés en 2016 (sur l'IS 2015 de 98 000) : 4 × 24 500 = 98 000 ⇒ **reliquat 109 770**, à payer avant le 31/03/2017.
- **Acomptes 2017** : 25 % × 207 770 = **51 942,50** chacun.`,
kp:["Barème 2016 (10 / 20 / 30 %)","IS ≈ 207 770 > CM","Acomptes 2016 = IS 2015 (98 000) → reliquat ≈ 109 770","Acomptes 2017 = 51 942,50"]}
]}
]});

EXAMS.push({
id:"gest-2017", subject:"gest", year:2017, session:"Septembre 2017", title:"Étude de cas de gestion", date:"Septembre 2017", duration:300, pages:[257,260],
note:"6 exercices",
sections:[
{title:"Exercice 1 : Capitalisation, actualisation et emprunt obligataire (OLIVETTE)", pts:2, pages:[258,258], th:["g-mathfi","cg-emprunt"],
ctx:`**1er cas** : 1.1 Valeur acquise de 10 000 KDH placés 10 ans à 5 %. 1.2 Valeur actuelle qu'il faut placer 10 ans à 5 % pour obtenir 10 000 KDH.
**2e cas** : la société OLIVETTE a emprunté le 1er janvier N, sous forme de **8 000 obligations de 500 DH** au taux de **5 %**, **4 000 000 DH** remboursables en **8 ans**. Présenter le tableau d'amortissement financier : 1. par amortissement constant ; 2. par annuités constantes (méthode de la « soulte capitalisée »). Quel serait le taux semestriel équivalent si le remboursement était semestriel ?`,
questions:[
{pts:0.5, q:"1er cas : valeur acquise et valeur actuelle.",
chk:[{l:"Valeur acquise",v:16288.95,u:"KDH",tol:0.5},{l:"Valeur actuelle",v:6139.13,u:"KDH",tol:0.5}],
model:`1.1 C₁₀ = 10 000 × 1,05¹⁰ = **16 288,95 KDH**.
1.2 C₀ = 10 000 × 1,05⁻¹⁰ = **6 139,13 KDH**.`,
kp:["Capitalisation 1,05¹⁰","Actualisation 1,05⁻¹⁰"]},
{pts:1.5, q:"2e cas : tableaux d'amortissement (amortissement constant ; annuités constantes avec soulte capitalisée) et taux semestriel équivalent.",
chk:[{l:"Annuité théorique constante",v:618887.25,u:"DH",tol:2},{l:"Taux semestriel équivalent",v:2.4695,u:"%",tol:0.001}],
model:`#### 1. Amortissement constant : 1 000 obligations (500 000 DH) par an
| Année | Obligations vivantes | Intérêts (5 %) | Obligations amorties | Amortissement | Annuité |
|---|---|---|---|---|---|
| 1 | 8 000 | 200 000 | 1 000 | 500 000 | 700 000 |
| 2 | 7 000 | 175 000 | 1 000 | 500 000 | 675 000 |
| 3 | 6 000 | 150 000 | 1 000 | 500 000 | 650 000 |
| 4 | 5 000 | 125 000 | 1 000 | 500 000 | 625 000 |
| 5 | 4 000 | 100 000 | 1 000 | 500 000 | 600 000 |
| 6 | 3 000 | 75 000 | 1 000 | 500 000 | 575 000 |
| 7 | 2 000 | 50 000 | 1 000 | 500 000 | 550 000 |
| 8 | 1 000 | 25 000 | 1 000 | 500 000 | 525 000 |
#### 2. Annuités constantes (soulte capitalisée)
Annuité théorique = 4 000 000 × 0,05 / (1 − 1,05⁻⁸) = **618 887,25**. Nombre théorique d'obligations amorties la 1re année = (618 887,25 − 200 000) / 500 = 837,77, puis × 1,05 chaque année ; on arrondit à l'entier et on **reporte la soulte** (partie fractionnaire, capitalisée à 5 %) sur l'année suivante.
| Année | Obligations vivantes | Intérêts | Obligations amorties | Amortissement | Annuité réelle |
|---|---|---|---|---|---|
| 1 | 8 000 | 200 000 | 838 | 419 000 | 619 000 |
| 2 | 7 162 | 179 050 | 879 | 439 500 | 618 550 |
| 3 | 6 283 | 157 075 | 924 | 462 000 | 619 075 |
| 4 | 5 359 | 133 975 | 970 | 485 000 | 618 975 |
| 5 | 4 389 | 109 725 | 1 018 | 509 000 | 618 725 |
| 6 | 3 371 | 84 275 | 1 069 | 534 500 | 618 775 |
| 7 | 2 302 | 57 550 | 1 123 | 561 500 | 619 050 |
| 8 | 1 179 | 29 475 | 1 179 | 589 500 | 618 975 |
| **Total** | | | **8 000** | **4 000 000** | |
**Taux semestriel équivalent** : (1,05)^(1/2) − 1 = **2,4695 %** (et non 2,5 %, taux proportionnel).`,
kp:["Amortissement constant : 1 000 obligations par an, intérêts décroissants","Annuité théorique 618 887,25","Nombres d'obligations arrondis avec report de la soulte","Annuités réelles proches de l'annuité théorique ; 8 000 titres amortis","Taux semestriel équivalent ≈ 2,47 %"]}
]},
{title:"Exercice 2 : Taux de croissance annuel moyen", pts:2, pages:[258,258], th:["g-stats"],
ctx:`Le chiffre d'affaires d'une entreprise a augmenté de 5 % les deux premières années, de 7 % les trois années suivantes et de 4 % la dernière année. Quelle est, en pourcentage, son augmentation annuelle moyenne ?`,
questions:[
{pts:2, q:"Augmentation annuelle moyenne.",
chk:[{l:"Taux de croissance annuel moyen",v:5.83,u:"%",tol:0.01}],
model:`On utilise la **moyenne géométrique** des coefficients multiplicateurs (et non la moyenne arithmétique des taux) :
(1 + t)⁶ = 1,05² × 1,07³ × 1,04 = 1,1025 × 1,225043 × 1,04 = 1,40463
1 + t = 1,40463^(1/6) = 1,05826 ⇒ **t ≈ 5,83 % par an**.
(La moyenne arithmétique, (2 × 5 + 3 × 7 + 4) / 6 = 5,83 %, donne ici une valeur très proche mais n'est pas la méthode correcte.)`,
kp:["Moyenne géométrique des coefficients","Produit 1,05² × 1,07³ × 1,04 ≈ 1,4046","t ≈ 5,83 %"]}
]},
{title:"Exercice 3 : Loi uniforme (attente du bus)", pts:2, pages:[258,258], th:["g-probas"],
ctx:`Le bus passe toutes les quinze minutes à un arrêt précis. Le temps d'arrivée de l'usager est uniformément distribué sur [0 ; 30] : il se présente entre 7 h et 7 h 30. 1) Probabilité qu'il attende moins de 5 minutes ? 2) Probabilité qu'il attende plus de 10 minutes ?`,
questions:[
{pts:2, q:"P(attente < 5 min) et P(attente > 10 min).",
chk:[{l:"P(attente < 5 min)",v:0.3333,u:"",tol:0.002},{l:"P(attente > 10 min)",v:0.3333,u:"",tol:0.002}],
model:`L'heure d'arrivée X (en minutes après 7 h) suit la loi **uniforme sur [0 ; 30]** (densité 1/30) ; les bus passent à 7 h 00, 7 h 15 et 7 h 30.
1) Attente < 5 min ⇔ arrivée dans ]10 ; 15[ ou ]25 ; 30[ ⇒ P = (5 + 5) / 30 = **1/3**.
2) Attente > 10 min ⇔ arrivée dans ]0 ; 5[ ou ]15 ; 20[ ⇒ P = (5 + 5) / 30 = **1/3**.
(Cela revient à dire que le temps d'attente suit une loi uniforme sur [0 ; 15].)`,
kp:["Modélisation : arrivée uniforme sur [0 ; 30], bus toutes les 15 min","Intervalles favorables identifiés","Les deux probabilités valent 1/3"]}
]},
{title:"Exercice 4 : Dividende financé par emprunt ou rachat d'actions (Alpha)", pts:4, pages:[258,259], th:["g-financement","g-evaluation"],
ctx:`La société Alpha n'a aucune dette, n'est pas soumise à l'IS ; capital : **10 000 actions** cotées **30 MAD**. Elle envisage d'emprunter **60 000 MAD** pour payer un dividende extraordinaire ou pour racheter en bourse une partie de ses actions.
1. Valeur initiale de l'entreprise. 2. Valeur des actions si l'emprunt sert à payer un dividende. 3. Valeur de l'entreprise après le dividende. 4. Le résultat serait-il différent en cas de rachat d'actions ?`,
questions:[
{pts:4, q:"Valeurs de l'entreprise et des actions dans les deux scénarios.",
chk:[{l:"Valeur initiale de l'entreprise",v:300000,u:"MAD"},{l:"Cours de l'action après le dividende",v:24,u:"MAD"},{l:"Cours de l'action après le rachat",v:30,u:"MAD"}],
model:`Cadre de **Modigliani-Miller sans impôt** : la valeur de l'entreprise ne dépend pas de sa structure financière ni de sa politique de distribution.
1. Valeur initiale = valeur des capitaux propres (pas de dette) = 10 000 × 30 = **300 000 MAD**.
2. Dividende de 60 000 / 10 000 = **6 MAD** par action. Valeur de l'entreprise inchangée (300 000) = capitaux propres + dette ⇒ capitaux propres = 240 000 ⇒ **cours = 24 MAD**. La richesse de l'actionnaire est inchangée : 24 + 6 = 30.
3. **Valeur de l'entreprise = 300 000** (240 000 de capitaux propres + 60 000 de dette).
4. **Rachat** : 60 000 / 30 = 2 000 actions rachetées ; il reste 8 000 actions pour 240 000 de capitaux propres ⇒ **cours = 30 MAD**. La valeur de l'entreprise (300 000) et la richesse des actionnaires sont **identiques** : ceux qui vendent reçoivent 30, ceux qui gardent conservent 30. La seule différence est la forme (dividende ou plus-value) — sans impôt et sans coûts de transaction, elle est indifférente. En présence d'IS, l'endettement créerait de la valeur (économie d'impôt sur les intérêts).`,
kp:["Valeur initiale 300 000","Dividende de 6 : cours 24, richesse inchangée","Valeur de l'entreprise inchangée (240 000 + 60 000)","Rachat de 2 000 actions : cours 30","Conclusion MM : neutralité sans impôt"]}
]},
{title:"Exercice 5 : Programmation linéaire (facteur F, machine, marchés)", pts:5, pages:[259,259], th:["g-prog"],
ctx:`Une entreprise fabrique A et B. Une unité de A absorbe une unité de facteur F, une unité de B une demi-unité ; on ne dispose que de **400 unités de F** par jour. Il faut produire chaque jour **au moins 100 unités de chaque produit** ; le marché ne peut absorber que **300 A** et **500 B** par jour. MCV : **40 DH** (A) et **30 DH** (B). Machine : A et B durent chacun **1 minute** ; temps disponible : **600 minutes** par jour.
1) Formuler et représenter toutes les contraintes. 2) Programme optimal. 3) MCV globale à l'optimum. 4) Pour chaque contrainte non saturée, ce qui reste possible.`,
questions:[
{pts:5, q:"Modèle, optimum, MCV et marges des contraintes non saturées.",
chk:[{l:"Quantité de A",v:200,u:""},{l:"Quantité de B",v:400,u:""},{l:"MCV globale",v:20000,u:"DH"}],
model:`**Modèle** : Max Z = 40x + 30y sous :
- facteur F : x + 0,5y ≤ 400
- machine : x + y ≤ 600
- marchés : x ≤ 300 ; y ≤ 500
- demande minimale : x ≥ 100 ; y ≥ 100
**Sommets** du domaine :
| Sommet | x | y | Z |
|---|---|---|---|
| x = 100, y = 100 | 100 | 100 | 7 000 |
| x = 300, y = 100 | 300 | 100 | 15 000 |
| F ∩ x = 300 | 300 | 200 | 18 000 |
| **F ∩ machine** | **200** | **400** | **20 000** |
| machine ∩ x = 100 | 100 | 500 | 19 000 |
**Optimum : 200 A et 400 B** ⇒ **MCV = 20 000 DH par jour**.
**Contraintes** : F (200 + 200 = 400) et machine (600 min) **saturées** ; marché de A : 300 − 200 = **100 unités** de A encore vendables ; marché de B : 500 − 400 = **100 unités** de B ; minimums de production largement dépassés (+ 100 A, + 300 B).`,
kp:["Formulation (F, machine, marchés, minimums)","Graphique / sommets","Optimum 200 A et 400 B","MCV 20 000","Marges : 100 A et 100 B de marché ; F et machine saturés"]}
]},
{title:"Exercice 6 : Coûts standards et analyse des écarts (PRODISK, CD-ROM)", pts:5, pages:[259,260], th:["ca-ecarts"],
ctx:`PRODISK fabrique des CD-ROM. Atelier 1 (UO : kg de matières, Mylar et oxyde) ; atelier 2 (UO : heure de MOD). Fiche de coût standard d'un CD : Mylar 30 g à 145 DH le kg ; oxyde 2 g à 952 DH le kg ; MOD atelier 1 : 3 minutes à 20 DH/h ; MOD atelier 2 : 6 minutes à 25 DH/h ; atelier 1 : coût de l'UO 76 DH dont 50 DH de charges fixes ; atelier 2 : coût de l'UO 60 DH dont 25 DH de charges variables. Budgets établis pour une production normale de **42 000 CD par mois**.
Mars : Mylar 1 189 kg à 145 ; oxyde 81 kg à 950 ; MOD atelier 1 : 2 050 h à 20 ; atelier 2 : 4 100 h à 25 ; charges indirectes : atelier 1 : 99 060 ; atelier 2 : 237 800 ; production : **40 000 CD**.
1. Tableau de comparaison réel / préétabli avec les écarts par élément. 2. Écarts sur Mylar. 3. Écarts sur MOD de l'atelier 1. 4. Écarts sur charges indirectes de l'atelier 1. 5. Idem atelier 2. 6. Interprétation.`,
questions:[
{pts:2, q:"1. Tableau de comparaison réel / préétabli (production réelle de 40 000 CD).",
chk:[{l:"Coût standard d'un CD",v:18.186,u:"DH",tol:0.001},{l:"Coût réel total",v:729715,u:"DH"},{l:"Écart global",v:2275,u:"DH"}],
model:`Coût standard d'un CD : Mylar 4,35 + oxyde 1,904 + MOD1 1,00 + MOD2 2,50 + atelier 1 (0,032 kg × 76) 2,432 + atelier 2 (0,1 h × 60) 6,00 = **18,186 DH**.
| Élément | Réel | Préétabli (40 000 CD) | Écart |
|---|---|---|---|
| Mylar | 1 189 kg × 145 = 172 405 | 1 200 kg × 145 = 174 000 | − 1 595 (F) |
| Oxyde | 81 kg × 950 = 76 950 | 80 kg × 952 = 76 160 | + 790 (D) |
| MOD atelier 1 | 2 050 h × 20 = 41 000 | 2 000 h × 20 = 40 000 | + 1 000 (D) |
| MOD atelier 2 | 4 100 h × 25 = 102 500 | 4 000 h × 25 = 100 000 | + 2 500 (D) |
| Atelier 1 | 99 060 | 1 280 kg × 76 = 97 280 | + 1 780 (D) |
| Atelier 2 | 237 800 | 4 000 h × 60 = 240 000 | − 2 200 (F) |
| **Total** | **729 715** | **727 440** | **+ 2 275 (D)** |`,
kp:["Coût standard unitaire 18,186","Préétabli adapté à 40 000 CD (1 200 kg, 80 kg, 2 000 h, 4 000 h, 1 280 kg)","Écarts par élément","Écart global + 2 275 défavorable"]},
{pts:3, q:"2 à 6. Analyse des écarts (Mylar, MOD 1, ateliers 1 et 2) et interprétation.",
chk:[{l:"Mylar — écart sur quantité",v:-1595,u:"DH"},{l:"Atelier 1 — écart d'activité",v:3700,u:"DH"},{l:"Atelier 2 — écart sur budget",v:-11700,u:"DH"},{l:"Atelier 2 — écart de rendement",v:6000,u:"DH"}],
model:`**Mylar** : quantité (1 189 − 1 200) × 145 = **− 1 595 (F)** ; prix (145 − 145) × 1 189 = **0**.
**MOD atelier 1** : temps (2 050 − 2 000) × 20 = **+ 1 000 (D)** ; taux (20 − 20) × 2 050 = 0.
**Atelier 1** (UO réelle 1 270 kg ; activité normale 42 000 × 0,032 = 1 344 kg ; fixes 1 344 × 50 = 67 200 ; variable 26 DH/kg) :
- budget flexible = 1 270 × 26 + 67 200 = 100 220 ; écart sur budget = 99 060 − 100 220 = **− 1 160 (F)** ;
- écart d'activité = 100 220 − 1 270 × 76 = **+ 3 700 (D)** (sous-activité : 1 270 kg au lieu de 1 344) ;
- écart de rendement = (1 270 − 1 280) × 76 = **− 760 (F)**. Total + 1 780.
**Atelier 2** (UO réelle 4 100 h ; normale 4 200 h ; fixes 4 200 × 35 = 147 000 ; variable 25 DH/h) :
- budget flexible = 4 100 × 25 + 147 000 = 249 500 ; écart sur budget = 237 800 − 249 500 = **− 11 700 (F)** ;
- écart d'activité = 249 500 − 4 100 × 60 = **+ 3 500 (D)** ;
- écart de rendement = (4 100 − 4 000) × 60 = **+ 6 000 (D)**. Total − 2 200.
**Interprétation** : bonne maîtrise des matières (Mylar économisé) et des dépenses des ateliers (écarts sur budget favorables), mais **baisse de la productivité** de la main-d'œuvre (50 h de trop en atelier 1, 100 h en atelier 2, d'où des écarts de rendement défavorables) et **sous-activité** (40 000 CD au lieu de 42 000) qui laisse des charges fixes non absorbées. Actions : formation, organisation du travail, recherche de volumes supplémentaires.`,
kp:["Mylar : écart quantité − 1 595 et prix nul","MOD 1 : écart sur temps + 1 000","Atelier 1 : budget − 1 160 ; activité + 3 700 ; rendement − 760","Atelier 2 : budget − 11 700 ; activité + 3 500 ; rendement + 6 000","Interprétation : productivité et sous-activité"]}
]}
]});

EXAMS.push({
id:"tec-2017", subject:"tec", year:2017, session:"Septembre 2017", title:"Techniques d'expression et de communication", date:"Septembre 2017", duration:120, pages:[261,263],
sections:[
{title:"Texte : « Retour de manivelle » (E. Morozov, 2016)", pts:20, pages:[262,263], th:["tec-dissertation","tec-questions"],
ctx:`**Retour de manivelle** (Evgeny Morozov, auteur de *Le mirage numérique*, 2016 — résumé des idées du texte)
Il y a une dizaine d'années, la Silicon Valley se présentait comme l'ambassadrice d'un capitalisme nouveau, plus « cool » et plus humain ; elle était le chouchou des élites, des médias et de la « génération numérique », et ses critiques (vie privée, froideur technicienne) étaient balayées. Ses entreprises dominaient les classements des marques les plus admirées et prétendaient transformer « clics » et « likes » en idéaux politiques (printemps arabe).
Les choses ont changé : le secteur est accusé de complicité avec la propagande terroriste, de harcèlement et de discriminations, de faire monter les prix (logement) ; la valeur des **données** générées par les utilisateurs dépasse souvent celle des services « gratuits » rendus. Ses idées — technologies de rupture, transparence radicale, **économie à la tâche** (*gig economy*) — restent hégémoniques, mais reposent sur des fondations instables (esprit « post-politique » des conférences TED). Ces entreprises pratiquent le **lobbying**, financent la recherche universitaire et sanctionnent les think tanks critiques (exemple de la fondation New America et de Google).
Leur influence politique n'égale pas encore celle de Wall Street ou du pétrole, mais elles cherchent à l'acquérir, comme les géants du tabac, du pétrole et de la finance. Les grandes entreprises technologiques entretiennent l'illusion que l'économie mondiale va bien : la valeur boursière d'Alphabet, Amazon, Facebook et Microsoft a progressé, depuis janvier, de plus que le PIB de la Norvège. Pour répondre au mécontentement (inégalités, malaise de la mondialisation), la Silicon Valley avance des propositions radicales — **revenu universel**, taxe sur les robots, villes privatisées gérées par des entreprises technologiques — qui détournent l'attention des législations anti-monopole.
Mais des entreprises axées sur le profit et des modèles commerciaux « féodaux » ne peuvent ressusciter le capitalisme mondial tout en instaurant un « New Deal » qui limiterait l'avidité de leurs propres investisseurs. La manne des données semble intarissable, mais ses profits ne suffiront pas à effacer les contradictions du système : **« Auto-proclamé défenseur du capitalisme mondial, la Silicon Valley risque bien plutôt d'en devenir le fossoyeur. »**
**Question** : expliquer et discuter l'affirmation suivante : « Auto-proclamé défenseur du capitalisme mondial, la Silicon Valley risque bien plutôt d'en devenir le fossoyeur ».`,
questions:[
{pts:20, q:"Expliquer et discuter : « Auto-proclamé défenseur du capitalisme mondial, la Silicon Valley risque bien plutôt d'en devenir le fossoyeur ».",
model:`#### Introduction
- **Accroche** : les GAFAM (Google/Alphabet, Apple, Facebook/Meta, Amazon, Microsoft) pèsent plus en bourse que le PIB de nombreux États.
- **Explication** : la Silicon Valley se présente comme la **sauveuse** du capitalisme (innovation, croissance, solutions aux problèmes sociaux) ; Morozov soutient qu'elle en aggrave les **contradictions** (concentration, inégalités, captation des données, défiance démocratique) au point de menacer sa légitimité — d'où l'image du « fossoyeur ».
- **Problématique** : les géants du numérique renforcent-ils ou minent-ils le capitalisme ?
- **Plan** : la thèse de Morozov (I), ses limites (II), les conditions d'un capitalisme numérique soutenable (III).
#### I. Un défenseur qui sape les fondements du système
1. **Monopoles et fin de la concurrence** : effets de réseau, rachats de concurrents (Instagram, WhatsApp), « le gagnant rafle tout » : la concurrence, moteur du capitalisme, s'éteint.
2. **Capitalisme de surveillance** : les données des utilisateurs valent plus que les services « gratuits » ; atteinte à la vie privée, manipulation (Cambridge Analytica).
3. **Précarisation du travail** : *gig economy* (Uber, livreurs), affaiblissement de la protection sociale, inégalités croissantes qui nourrissent la colère populaire.
4. **Influence politique et optimisation fiscale** : lobbying, financement de la recherche, évitement de l'impôt — érosion de la légitimité démocratique.
5. **Solutions-alibis** : revenu universel, villes privatisées… détournent l'attention des réformes antitrust ; des entreprises axées sur le profit ne peuvent imposer un « New Deal » limitant l'avidité de leurs propres actionnaires.
#### II. Une thèse à nuancer
1. **Moteur de croissance et d'innovation** : gains de productivité, nouveaux services (cloud, IA, paiement mobile), création d'emplois qualifiés et de start-up.
2. **Démocratisation** de l'accès à l'information, au commerce (plateformes pour PME) et à la finance (fintech, inclusion financière en Afrique).
3. **Le capitalisme s'adapte** : il a déjà surmonté des crises de concentration (lois antitrust de 1890, démantèlement de Standard Oil, d'AT&T) ; les États reprennent la main (RGPD, règlements européens sur les marchés et les services numériques, impôt minimum mondial de l'OCDE).
#### III. Vers un capitalisme numérique régulé
1. **Régulation de la concurrence** et de l'accès aux données ; interopérabilité.
2. **Fiscalité** équitable des entreprises numériques ; protection des données (au Maroc : loi 09-08, CNDP).
3. **Protection sociale** des travailleurs des plateformes ; responsabilité sociale et environnementale ; transparence des algorithmes.
#### Conclusion
- **Bilan** : la Silicon Valley n'est pas en soi le fossoyeur du capitalisme, mais son modèle — concentration, extraction de données, contournement des règles — en exacerbe les contradictions ; c'est l'absence de régulation qui transformerait la menace en réalité.
- **Ouverture** : rôle des auditeurs et des normes (reporting extra-financier, valorisation des actifs immatériels et des données).`,
kp:["Introduction : contexte (puissance des GAFAM), explication de l'image du « fossoyeur », problématique, plan","Arguments du texte : monopoles, données, gig economy, lobbying, solutions-alibis","Exemples précis (rachats, Cambridge Analytica, plateformes)","Discussion : apports du numérique (innovation, inclusion)","Capacité d'adaptation du capitalisme (antitrust, RGPD, fiscalité mondiale)","Pistes de régulation (concurrence, fiscalité, données, travail)","Conclusion nuancée avec ouverture","Expression : plan apparent, transitions, orthographe"]}
]}
]});
