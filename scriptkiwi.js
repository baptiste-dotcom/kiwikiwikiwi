const anecdotes = [
"Le prénom Clovis vient du germanique Chlodweg. Romanisé il devient Clodovicus puis Clouis et enfin Louis, nom porté par dix-huit rois en France et de nombreux français. (histoire-pour-tous.fr)",
"La guerre de Cent Ans couvre en fait une période de 116 ans (1337 à 1453) pendant laquelle s'affrontent la France et l'Angleterre lors de nombreux conflits, entrecoupés de trêves plus ou moins longues. (histoire-pour-tous.fr)",
"Chateaubriand et Victor Hugo furent deux grands noms dans la littérature française. Pourtant l'un repose sur une île bretonne près de Saint-Malo, sous une dalle sans nom, uniquement accessible à marée basse, alors que l'autre repose à Paris au Panthéon. (histoire-pour-tous.fr)",
"L'Angleterre fut franco-normande en 1066, lorsque Guillaume le Conquérant s'en empara. Pendant les 300 ans qui suivirent, 3 langues coexistèrent dans le pays: le Français parlé par l'aristocratie, le peuple parlant l'anglais et le latin utilisé par le clergé. (histoire-pour-tous.fr)",
"Le chardon est l'emblème national de L'Ecosse depuis 1263. En effet, lors de la bataille de Largs, les Vikings voulant attaquer le camp et surprendre les écossais, avancèrent pieds nus dans le noir, mais se mirent à hurler de douleurs en marchant sur des chardons. Cette plante bien que repoussante, sauva le peuple écossais. (histoire-pour-tous.fr)",
"La mode caractérisant l'homme de la Renaissance - cheveux courts et port de la barbe - est née d'un malencontreux incident survenu à François 1er, le jour de l'Epiphanie 1521. Ayant reçu une bûche enflammée sur la tête, les médecins coupèrent les longs cheveux du roi. Pour cacher les cicatrices, il laissa pousser la barbe. (histoire-pour-tous.fr)",
"Sous l'Ancien Régime, le tutoiement était considéré comme une grossière impertinence. Après la Révolution les mœurs changent, et la Convention rend obligatoire le tutoiement à partir de novembre 1793, dans le civil et dans les administrations marquant un lien de fraternité universelle. Mais cette mode ne durera qu'un an, jusqu'à la chute de Robespierre. (histoire-pour-tous.fr)",
"Le God save the Queen est d'origine française. C'est dur à accepter mais oui, il est à l'origine un morceau français ! pour fêter le rétablissement de Louis XIV après son opération de la fistule en novembre 1686, Mme de Maintenon organise une soirée, la duchesse de Brinton compose un poème et Lully rajoute la musique. Un anglais passant à St Cyr ce jour là, trouva très jolie la musique et rapporta cet air en Angleterre. Il pianota, changea jusque quelques mesures et joua cet air devant Marie Stuart et Guillaume d'Orange qui en firent leur musique officielle. (histoire-pour-tous.fr)",
"La fête national du 14 juillet correspond à la fête de la Fédération de 1790 et non la prise de la Bastille de 1789. Fête de commémoration de la prise de la Bastille, elle se veut être la réconciliation et l'unité de tous les français, ainsi que le roi. Et ce n'est que le 6 juillet 1880 que le 14 juillet devint officiellement jour de la Fête national française. (histoire-pour-tous.fr)",
"Le Monténégro et le japon ont été en guerre pendant 101 ans: ils avaient oublié de signer la paix.. ah ben écoutes, comme quoi tout est possible. Allié de la Russie, le Monténégro a déclaré la guerre au Japon lors de la guerre russo-japonaise de 1904. En l’absence de marine, le Montenegro s’est contenté de faire les gros yeux au Japon, laissant la Russie d’occuper du reste. Et puis… Le Monténégro s’est retrouvé rattaché à la Serbie puis à la Yougoslavie et le traité de paix permettant aux deux pays de rétablir des relations diplomatiques n’a été ratifié qu’en 2006, lors de l’indépendance du pays. (topito.com)",
"La première bombe tombée sur Berlin pendant la guerre n'a tué personne. A part un éléphant, mais comment ça me diras-tu ? Donc je t'explique, en effet, L’éléphant se trouvait dans le zoo de Berlin. Certaines sources disent aussi qu’une girafe est morte dans le même temps. Pas très cool pour les espèces protégées. (topito.com)",
"Louis XVI a participé à l'amélioration de la guillotine, oui oui, tu as bien entendu, il a permis l'amélioration du dispositif qui lui a tranché la tête quelques mois plus tard. En 1792, le médecin Antoine Louis met au point la guillotine (qui n’est d’ailleurs pas la machine de Joseph Guillotin) pour rendre les exécutions plus rapides et plus propres. Mais son prototype prévoit une lame droite ou en croissant qui n’est pas idéale pour cisailler un cou. Louis XVI se gratte le menton et en bon bricolo du dimanche, il propose à Antoine Louis d’opter pour une lame en biseau. Rien à dire, bravo Louis. (topito.com)",
"La France a déclaré la guerre au Mexique pour une histoire de pâtisserie. C’est un chef pâtissier français qui est à l’origine du conflit : après avoir en vain cherché à obtenir réparation auprès du gouvernement mexicain suite à la dégradation de sa pâtisserie par une escouade militaire dont les soldats en avaient profité pour lui piquer plein de gâteaux, il a décidé de se tourner vers Louis Philippe en lui demandant d’intercéder. Aussitôt, Louis Philippe a décidé du blocus des ports du Golfe du Mexique, ce qui à terme a mené à l’invasion française de Veracruz. (topito.com)",
"La terre n'a pas 2025 ans, et si tu le pensais, je ne te juge pas, mais je te propose de rester et d'en apprendre davantage parce que la c'est pas terrible. (B.S.)",
"Le savais-tu, si j'étais né de l'union entre Cronos et Rhéa, ce serait lui le maitre du ciel, du tonnerre et des éclairs, pas Zeus. (True Story) (Source: WikipéMoi.moi)",
"Un homme en Alaska promenait son chien au bord d’un lac. Pour on ne sait quelle raison, il a eu l’idée de lancer un bâton de dynamite sur le lac gelé. Le problème, c’est que son chien le lui a rapporté. Il n’est plus là pour en parler… (laliste.net)",
"Garry Hoy, un notaire de 39 ans, a voulu démontrer à des étudiants la solidité des vitres de l’immeuble Bank Tower à Toronto. La vitre ne s’est pas brisée, mais s’est délogée de son cadre sous son coup d’épaule. Il fit une chute de 24 étages. L'histoire est bête et connue mais cela montre parfaitement la débilité humaine. (laliste.net)",
"Un homme a ouvert une lettre piégé qu’il avait envoyé. Il avait malheureusement oublié de mettre le timbre et la lettre lui avait été renvoyée. Pas de chance pour lui.. Il ne recommencera plus !",
"Un homme meurt dans une chute à moto lors d’une manifestation contre le port obligatoire du casque. Les médecins ont révélé qu’il aurait survécu s’il avait porté un casque sur la tête lors de sa chute. (laliste.net)",
"La mer morte est 429 mètres en dessous du niveau de la mer. Après, en dessous du niveau de quelle mer, je sais pas. Vu qu’a priori la mer morte c’est une mer aussi. Qui choisit le niveau de la mer? Ça n’a aucun sens. (topito.com)",
"Il y a une montagne en Nouvelle-Zélande qui s'appelle Taumatawhakatangihangak oauauotamateaturipukaka pikimaungahoronukupokaiwhe nua kitanatahu. déja, si tu l'as lu en entier bravo, et merci à toi. N'oublie pas de boire de l'eau.",
"Il y a 3.2 km et 21h d'écart entre les îles Diomède. Situés de part et d’autre de la ligne de jour, ces deux bouts de caillou forment également le détroit de Béring, qu’on peut traverser à pied l’hiver pour passer des Etats-Unis à la Russie au calme. Et oui, la terre n'est pas plate, désolé..",
"Il y a 2.27 papes par km² au Vatican, Ce qui en fait le pays avec la plus forte densité de papes au monde. (topito.com)",
"L'Islande est le seul pays européen à ne pas avoir de train. (petitfute.com)",
"La France est le pays avec le plus de fuseaux horaires au monde. (petitfute.com)",
"L’un des ingrédients du Coca Cola était la cocaïne, retirée de la recette en 1929, on savait s'amuser avant ! (laliste.net)",
"Au Royaume-Uni, il est légal de tuer un Écossais dans la ville de York s’il porte un arc et des flèches. (laliste.net)",
"Chaque année, plus de personnes meurent par une noix de coco qui tombe d’un arbre que par des attaques de requins, bon, on est tous d'accord qu'on préfère tous tomber sur un cocotier que sur un requin, mais attention quand même ! (laliste.net)",
"Le koala a des empreintes digitales similaires aux nôtres. (laliste.net)",
"Il n’y a qu’un seul panneau STOP à Paris, Vous trouverez ce panneau sur le quai Saint-Exupéry dans le 16e arrondissement. (laliste.net)",
"La troisième langue officielle de la Nouvelle-Zélande est le langage des signes. (laliste.net)",
"Lorsqu’une phrase comporte toutes les lettres de l’alphabet, c’est un pangramme.",
"Les uniformes nazis ont été fabriqués par Hugo Boss",
"La Votaphobie est la peur des factures. Est-ce qu'on l'aurait pas tous un peu ?",
"Pour le film Charlie et la chocolaterie, Tim Burton a préféré utiliser 40 écureuils dressés à casser des noisettes plutôt que de faire appel aux effets spéciaux. Merci à lui de créer de l'emploie !",
"Pour La Nuit des masques (Halloween), le réalisateur a repris le masque du Capitaine Kirk de Star Trek et l’a repeint pour en faire celui de Michael Myers.",
"Après 33 ans de pause, c’est en 2002 que Steven Spielberg a terminé son cursus universitaire en rendant La Liste de Schindler comme projet de fin d’études. (daylygeekshow.com)",
"Pumba, dans Le Roi lion, est le tout premier personnage de Disney à péter.",
"Dans Iron Man, les terroristes qui kidnappent Tony Stark et demandent une rançon, parlent l’Ourdou. En traduisant ce qu’ils disent, on se rend compte qu’ils sont en train de dévoiler toute l’intrigue du film. ça c'est de la fun fact, de rien ! (dailygeekshow.com)",
"Le saviez-vous ? Avant 1540, l’orange s’appelle… « safran », comme l’épice venue d’Orient ! C’est à cette date que la couleur, qui tire finalement son nom de l’agrume, est pour la première fois mentionnée dans un manuscrit anglais. (beauxarts.com)",
"Pablo Picasso a peint quelque 60 000 œuvres au cours de sa vie, soit deux par jour en moyenne. Maintenant il peut se reposer, il l'a bien mérité.",
"Saviez-vous que de 1912 à 1948, les JO avaient des épreuves d’art ? Le « Pentathlon des muses » récompensait en architecture, littérature, musique, peinture et sculpture, les meilleures représentations du sport. Une compétition que le musicien Pharell Williams aimerait, selon ses déclarations récentes, vouloir voir ressusciter pour les Jeux de 2028 à Los Angeles. (beauxarts.com)",
"La Vénus de Milo n’a quitté le musée du Louvre qu’une seule fois : en 1964 pour le Japon. (beauxarts.com)",
"La construction de la Sagrada Familia, l’un des monuments les plus connus et les plus beaux de Barcelone, a demandé plus de temps que celle de la pyramide de Khéops, en Égypte. Le chantier de cette église, conçue par Gaudí et inscrite au patrimoine mondial de l’UNESCO, a démarré en 1882.",
"La plus longue marelle du monde, dessinée sur une route du Colorado, s’étire sur quelque 7 km. Il faut compter un peu plus de 2 h pour aller au bout de ses 21 871 cases. (camininteresse.fr)",
"La boîte de Pandore désigne aujourd’hui la cause de tous les malheurs, cette expression est née d’une légende de la mythologie grecque, dans laquelle cette boîte est en fait une jarre. En outre, Pandore était considérée comme la première femme de l’humanité. (je veux pas me faire des ennemis, on parle bien de la mythologie grec)",
"L’endroit le plus profond de la Terre est la fosse des Mariannes dans l’océan Pacifique. Sa profondeur est de 36 201 pieds (11 034 m). À savoir presque 11 km !",
"Avec 6 853 km, le Nil est le plus long fleuve du monde. Ses ressources en eau sont également partagées par 11 pays différents.",
"Tim Berners-Lee est l’inventeur du tout premier navigateur Web (World Wide Web) en 1990. Ce qui nous donne www encore partout de nos jours.",
"Marie Curie a été la première personne à remporter DEUX prix Nobel – l’un de physique, en 1903, l’autre de chimie, en 1911, pour ses travaux sur la radioactivité.",
"Le plus jeune lauréat du prix Nobel de la paix est Malala Yousafzai (âgée d’à peine 17 ans en 2014), récompensée pour son œuvre de militante des droits de l’enfant et de championne du droit des filles à l’éducation.",
"L’apopathodiaphulatophobie est la peur d’être constipé",
"Une fourmi peut traîner jusqu’à 60 fois son propre poids. Moi j’ai essayé, je peux aller jusqu’à une demi fois les jours de grande forme",
"La pandiculation est le mot qui signifie s’étirer pour se réveiller. J’ai compté, je pandicule 600 fois par jour",
"En pétant continuellement pendant 6 ans et 9 mois, vous produirez assez de gaz pour créer l’énergie d’une bombe atomique",
"Une loi dans le Massachusetts interdit d’avoir un gorille sur le siège arrière de sa voiture. (Source: envoiturecarine.fr, routard.com)",
"En 1972, une hôtesse de l’air du nom de Vesna Vulovic a survécu a une chute de 10160 mètres",
"Dolly Parton (chanteuse Américaine) a participé au concours de son propre sosie et a perdu face à une drag-queen…",
"En Californie, la loi stipule qu’il est illégal de tirer sur quoi que ce soit depuis sa voiture, excepté une baleine. Mais les baleine sont peut-être agressive en Californie. (Source: imparfaites.be)",
"La cusuraphobie est la peur d’avoir tort, sale cusuraphobe que tié",
"Le briquet a été inventé avant les allumettes, Tu me crois pas ? Va vérifier (Source: la Calvasse de Squeezie)",
"L'armée allemande lors de la WW1 qui décide de déguiser un paquebot en un paquebot anglais (HMS Carmania). Sauf que le déguisé n'aura jamais l'occasion de s'infiltrer dans les lignes ennemies puisque le premier bateau anglais qu'il croise est le vrai HMS Carmania (Source: un random sur Reddit mais il à donné sa source https://www.filovent.com/front/get_article/bataille-navale-trindade",
"Quand le Liechtenstein est parti en guerre en 1866, 80 soldats sont partis, 81 sont rentrés. Ils s'étaient fait un copain sur la route. Hein ? Quoi ? Comment ? c'était en fait un officier autrichien qui a fait la route du retour avec eux",
"Les Américains ont élu Donald Trump président. Deux fois. On pourrait croire à une blague mais je vous jure, et ils avaient le choix en plus..",
"Il y a plus de combinaisons possibles dans un jeu d’échecs que d’atomes dans l’univers observable. (Source: mentorshow.com)",
];

document.getElementById("factButton").addEventListener("click", () => {
  const random = anecdotes[Math.floor(Math.random() * anecdotes.length)];
  document.getElementById("factDisplay").textContent = random;
});

document.getElementById("moreButton").addEventListener("click", () => {
  const bubble = document.getElementById("moreBubble");
  bubble.style.display = bubble.style.display === "none" ? "block" : "none";

});








