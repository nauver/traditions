const UI = {
  "fr": {
    "title": "Europe’s Traditions Challenge",
    "homeTitle": "10 questions tirées de 30 traditions vérifiées",
    "homeSub": "Des traditions réelles, sourcées, avec une accroche amusante et 4 réponses possibles.",
    "classic": "Classique",
    "teams": "Duel équipes",
    "note": "Tirage aléatoire à chaque partie · aucune indication de pays, région ou difficulté avant la réponse.",
    "start": "Lancer le challenge",
    "question": "Question",
    "of": "sur",
    "score": "Score",
    "teamA": "Équipe A",
    "teamB": "Équipe B",
    "result": "Résultat",
    "next": "Question suivante",
    "timeout": "Temps écoulé",
    "correct": "Correct",
    "wrong": "Incorrect",
    "tradName": "Nom de la tradition",
    "country": "Pays",
    "region": "Région",
    "source": "Source",
    "finished": "Challenge terminé",
    "finalScore": "Score final",
    "restart": "Rejouer",
    "footerStart": "CoR gamification prototype V5 multilingue",
    "footerQuiz": "Aucune indication avant la réponse",
    "footerResult": "30 traditions vérifiées · 10 questions"
  },
  "en": {
    "title": "Europe’s Traditions Challenge",
    "homeTitle": "10 questions from 30 verified traditions",
    "homeSub": "Real, sourced traditions with an engaging prompt and 4 possible answers.",
    "classic": "Classic",
    "teams": "Team duel",
    "note": "Random draw each game · no country, region or difficulty hint before the answer.",
    "start": "Start challenge",
    "question": "Question",
    "of": "of",
    "score": "Score",
    "teamA": "Team A",
    "teamB": "Team B",
    "result": "Result",
    "next": "Next question",
    "timeout": "Time is up",
    "correct": "Correct",
    "wrong": "Incorrect",
    "tradName": "Tradition name",
    "country": "Country",
    "region": "Region",
    "source": "Source",
    "finished": "Challenge completed",
    "finalScore": "Final score",
    "restart": "Play again",
    "footerStart": "CoR multilingual gamification prototype V5",
    "footerQuiz": "No hint before the answer",
    "footerResult": "30 verified traditions · 10 questions"
  },
  "nl": {
    "title": "Europe’s Traditions Challenge",
    "homeTitle": "10 vragen uit 30 geverifieerde tradities",
    "homeSub": "Echte, gedocumenteerde tradities met een leuke situatie en 4 mogelijke antwoorden.",
    "classic": "Klassiek",
    "teams": "Teamduel",
    "note": "Elke spelronde willekeurig · geen land, regio of moeilijkheid vóór het antwoord.",
    "start": "Challenge starten",
    "question": "Vraag",
    "of": "van",
    "score": "Score",
    "teamA": "Team A",
    "teamB": "Team B",
    "result": "Resultaat",
    "next": "Volgende vraag",
    "timeout": "Tijd voorbij",
    "correct": "Correct",
    "wrong": "Fout",
    "tradName": "Naam van de traditie",
    "country": "Land",
    "region": "Regio",
    "source": "Bron",
    "finished": "Challenge voltooid",
    "finalScore": "Eindscore",
    "restart": "Opnieuw spelen",
    "footerStart": "CoR meertalig gamificationprototype V5",
    "footerQuiz": "Geen hint vóór het antwoord",
    "footerResult": "30 geverifieerde tradities · 10 vragen"
  }
};
const QUESTIONS_VERIFIED_30 = [
  {
    "id": "v001",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "country": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "region": {
      "fr": "Castrillo de Murcia, Castille-et-León",
      "en": "Castrillo de Murcia, Castile and León",
      "nl": "Castrillo de Murcia, Castilië en León"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas dans la rue.",
      "en": "Costumed participants jump over babies lying on mattresses in the street.",
      "nl": "Verklede deelnemers springen over baby’s die op matrassen in de straat liggen."
    },
    "question": {
      "fr": "Dans quel pays cette tradition a-t-elle lieu ?",
      "en": "In which country does this tradition take place?",
      "nl": "In welk land vindt deze traditie plaats?"
    },
    "answers": {
      "fr": [
        "Italie",
        "Espagne",
        "Portugal",
        "Grèce"
      ],
      "en": [
        "Italy",
        "Spain",
        "Portugal",
        "Greece"
      ],
      "nl": [
        "Italië",
        "Spanje",
        "Portugal",
        "Griekenland"
      ]
    },
    "correctAnswer": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "explanation": {
      "fr": "Cette tradition se déroule pendant les célébrations locales de la Fête-Dieu. Des participants costumés effectuent un saut symbolique au-dessus de bébés placés sur des matelas.",
      "en": "This tradition takes place during local Corpus Christi celebrations. Costumed participants perform a symbolic jump over babies placed on mattresses.",
      "nl": "Deze traditie vindt plaats tijdens lokale Sacramentsdagvieringen. Verklede deelnemers maken een symbolische sprong over baby’s op matrassen."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — El colacho saltando",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:El_colacho_saltando.jpg"
  },
  {
    "id": "v002",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Wife-carrying championship",
      "nl": "Kampioenschap partnerdragen"
    },
    "country": {
      "fr": "Finlande",
      "en": "Finland",
      "nl": "Finland"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    },
    "scenario": {
      "fr": "Des concurrents courent sur un parcours d’obstacles en portant leur partenaire sur le dos.",
      "en": "Competitors run through an obstacle course while carrying their partner on their back.",
      "nl": "Deelnemers lopen over een hindernisparcours terwijl ze hun partner op de rug dragen."
    },
    "question": {
      "fr": "Dans quel pays se tient ce championnat ?",
      "en": "In which country is this championship held?",
      "nl": "In welk land wordt dit kampioenschap gehouden?"
    },
    "answers": {
      "fr": [
        "Estonie",
        "Finlande",
        "Suède",
        "Lettonie"
      ],
      "en": [
        "Estonia",
        "Finland",
        "Sweden",
        "Latvia"
      ],
      "nl": [
        "Estland",
        "Finland",
        "Zweden",
        "Letland"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finland",
      "nl": "Finland"
    },
    "explanation": {
      "fr": "Le format combine vitesse, obstacles et équilibre. Le résultat est une compétition très visuelle, souvent citée comme exemple de concours insolite européen.",
      "en": "The format combines speed, obstacles and balance. The result is a very visual competition, often cited as an example of an unusual European contest.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht. Het resultaat is een zeer visuele wedstrijd die vaak wordt genoemd als voorbeeld van een ongebruikelijke Europese competitie."
    },
    "difficulty": "easy",
    "sourceName": "Wife-Carrying World Championship official website",
    "sourceUrl": "https://eukonkanto.fi/en/front-page/"
  },
  {
    "id": "v003",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Horseback shrimp fishing",
      "nl": "Garnalenvissen te paard"
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "region": {
      "fr": "Oostduinkerke, Flandre occidentale",
      "en": "Oostduinkerke, West Flanders",
      "nl": "Oostduinkerke, West-Vlaanderen"
    },
    "scenario": {
      "fr": "Des pêcheurs entrent dans la mer à cheval pour capturer des crevettes.",
      "en": "Fishers enter the sea on horseback to catch shrimp.",
      "nl": "Vissers gaan te paard de zee in om garnalen te vangen."
    },
    "question": {
      "fr": "Dans quel pays cette tradition maritime existe-t-elle encore ?",
      "en": "In which country does this maritime tradition still exist?",
      "nl": "In welk land bestaat deze maritieme traditie nog?"
    },
    "answers": {
      "fr": [
        "Belgique",
        "Pays-Bas",
        "Danemark",
        "Allemagne"
      ],
      "en": [
        "Belgium",
        "Netherlands",
        "Denmark",
        "Germany"
      ],
      "nl": [
        "België",
        "Nederland",
        "Denemarken",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "explanation": {
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde afin de capturer les crevettes grises. Cette pratique est liée à un savoir-faire côtier transmis localement.",
      "en": "The horses pull nets through shallow water to catch grey shrimp. The practice is linked to coastal know-how passed down locally.",
      "nl": "De paarden trekken netten door ondiep water om grijze garnalen te vangen. De praktijk is verbonden met lokaal doorgegeven kustkennis."
    },
    "difficulty": "easy",
    "sourceName": "UNESCO — Shrimp fishing on horseback in Oostduinkerke",
    "sourceUrl": "https://ich.unesco.org/en/RL/shrimp-fishing-on-horseback-in-oostduinkerke-00673"
  },
  {
    "id": "v004",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "country": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "region": {
      "fr": "Buñol, Valence",
      "en": "Buñol, Valencia",
      "nl": "Buñol, Valencia"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates dans une bataille géante.",
      "en": "Thousands of people throw tomatoes at each other in a giant battle.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar in een gigantisch gevecht."
    },
    "question": {
      "fr": "Dans quel pays cette bataille rouge a-t-elle lieu ?",
      "en": "In which country does this red battle take place?",
      "nl": "In welk land vindt dit rode gevecht plaats?"
    },
    "answers": {
      "fr": [
        "Portugal",
        "Espagne",
        "Italie",
        "Croatie"
      ],
      "en": [
        "Portugal",
        "Spain",
        "Italy",
        "Croatia"
      ],
      "nl": [
        "Portugal",
        "Spanje",
        "Italië",
        "Kroatië"
      ]
    },
    "correctAnswer": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "explanation": {
      "fr": "Cette fête transforme temporairement les rues en immense bataille de tomates. Elle est connue pour son caractère spectaculaire et très photogénique.",
      "en": "This festival temporarily turns the streets into a huge tomato battle. It is known for being spectacular and highly photogenic.",
      "nl": "Dit feest verandert de straten tijdelijk in een enorm tomatengevecht. Het staat bekend als spectaculair en zeer fotogeniek."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — La Tomatina",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:La_Tomatina_-_Spain,_Bu%C3%B1ol_-_panoramio_(1).jpg"
  },
  {
    "id": "v005",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Battle of the Oranges",
      "nl": "Sinaasappelgevecht"
    },
    "country": {
      "fr": "Italie",
      "en": "Italy",
      "nl": "Italië"
    },
    "region": {
      "fr": "Ivrea, Piémont",
      "en": "Ivrea, Piedmont",
      "nl": "Ivrea, Piëmont"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges dans les rues.",
      "en": "During a carnival, teams throw oranges at each other in the streets.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar in de straten."
    },
    "question": {
      "fr": "Dans quel pays trouve-t-on cette bataille d’agrumes ?",
      "en": "In which country does this citrus battle take place?",
      "nl": "In welk land vindt dit citrusgevecht plaats?"
    },
    "answers": {
      "fr": [
        "Espagne",
        "Italie",
        "France",
        "Slovénie"
      ],
      "en": [
        "Spain",
        "Italy",
        "France",
        "Slovenia"
      ],
      "nl": [
        "Spanje",
        "Italië",
        "Frankrijk",
        "Slovenië"
      ]
    },
    "correctAnswer": {
      "fr": "Italie",
      "en": "Italy",
      "nl": "Italië"
    },
    "explanation": {
      "fr": "Cette bataille fait partie d’un carnaval historique. Des équipes s’affrontent dans les rues avec des oranges, dans une mise en scène très codifiée.",
      "en": "This battle is part of a historic carnival. Teams face each other in the streets with oranges in a highly codified performance.",
      "nl": "Dit gevecht maakt deel uit van een historisch carnaval. Teams nemen het in de straten tegen elkaar op met sinaasappels in een sterk gecodeerde opvoering."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — BattagliaMercenariIvrea",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:BattagliaMercenariIvrea.jpg"
  },
  {
    "id": "v006",
    "traditionName": {
      "fr": "Kukeri",
      "en": "Kukeri",
      "nl": "Kukeri"
    },
    "country": {
      "fr": "Bulgarie",
      "en": "Bulgaria",
      "nl": "Bulgarije"
    },
    "region": {
      "fr": "Pernik et régions rurales",
      "en": "Pernik and rural regions",
      "nl": "Pernik en landelijke regio’s"
    },
    "scenario": {
      "fr": "Des personnages masqués portent de grandes cloches pour chasser les mauvais esprits.",
      "en": "Masked characters wear large bells to drive away evil spirits.",
      "nl": "Gemaskerde figuren dragen grote bellen om boze geesten te verdrijven."
    },
    "question": {
      "fr": "Dans quel pays rencontre-t-on les Kukeri ?",
      "en": "In which country can Kukeri be found?",
      "nl": "In welk land vindt men de Kukeri?"
    },
    "answers": {
      "fr": [
        "Roumanie",
        "Bulgarie",
        "Hongrie",
        "Slovaquie"
      ],
      "en": [
        "Romania",
        "Bulgaria",
        "Hungary",
        "Slovakia"
      ],
      "nl": [
        "Roemenië",
        "Bulgarije",
        "Hongarije",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "fr": "Bulgarie",
      "en": "Bulgaria",
      "nl": "Bulgarije"
    },
    "explanation": {
      "fr": "Les costumes, les masques et les cloches servent à marquer le passage saisonnier et à éloigner symboliquement les mauvais esprits.",
      "en": "The costumes, masks and bells mark the seasonal transition and symbolically drive away evil spirits.",
      "nl": "De kostuums, maskers en bellen markeren de seizoensovergang en verdrijven symbolisch boze geesten."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — Kukeri E8",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kukeri_E8.jpg"
  },
  {
    "id": "v007",
    "traditionName": {
      "fr": "Kurentovanje",
      "en": "Kurentovanje",
      "nl": "Kurentovanje"
    },
    "country": {
      "fr": "Slovénie",
      "en": "Slovenia",
      "nl": "Slovenië"
    },
    "region": {
      "fr": "Ptuj",
      "en": "Ptuj",
      "nl": "Ptuj"
    },
    "scenario": {
      "fr": "Des silhouettes couvertes de peaux et de cloches parcourent la ville pour chasser l’hiver.",
      "en": "Figures covered in skins and bells walk through the town to chase winter away.",
      "nl": "Figuren bedekt met huiden en bellen trekken door de stad om de winter te verdrijven."
    },
    "question": {
      "fr": "Dans quel pays a lieu cette tradition ?",
      "en": "In which country does this tradition take place?",
      "nl": "In welk land vindt deze traditie plaats?"
    },
    "answers": {
      "fr": [
        "Slovénie",
        "Croatie",
        "Autriche",
        "Slovaquie"
      ],
      "en": [
        "Slovenia",
        "Croatia",
        "Austria",
        "Slovakia"
      ],
      "nl": [
        "Slovenië",
        "Kroatië",
        "Oostenrijk",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "fr": "Slovénie",
      "en": "Slovenia",
      "nl": "Slovenië"
    },
    "explanation": {
      "fr": "Les Kurenti portent des peaux, des masques et des cloches. Leur rôle symbolique est d’aider à faire partir l’hiver et à accueillir le printemps.",
      "en": "Kurenti wear skins, masks and bells. Symbolically, their role is to help drive winter away and welcome spring.",
      "nl": "Kurenti dragen huiden, maskers en bellen. Hun symbolische rol is de winter te verdrijven en de lente te verwelkomen."
    },
    "difficulty": "easy",
    "sourceName": "Slovenia.info — Kurentovanje",
    "sourceUrl": "https://www.slovenia.info/en/stories/kurentovanje-the-largest-shrovetide-carnival-in-slovenia"
  },
  {
    "id": "v008",
    "traditionName": {
      "fr": "Busójárás",
      "en": "Busójárás",
      "nl": "Busójárás"
    },
    "country": {
      "fr": "Hongrie",
      "en": "Hungary",
      "nl": "Hongarije"
    },
    "region": {
      "fr": "Mohács",
      "en": "Mohács",
      "nl": "Mohács"
    },
    "scenario": {
      "fr": "Des personnages aux masques impressionnants défilent pour faire fuir l’hiver.",
      "en": "Characters wearing impressive masks parade to drive winter away.",
      "nl": "Figuren met indrukwekkende maskers paraderen om de winter te verdrijven."
    },
    "question": {
      "fr": "Dans quel pays a lieu le Busójárás ?",
      "en": "In which country does Busójárás take place?",
      "nl": "In welk land vindt Busójárás plaats?"
    },
    "answers": {
      "fr": [
        "Hongrie",
        "Roumanie",
        "Bulgarie",
        "Slovénie"
      ],
      "en": [
        "Hungary",
        "Romania",
        "Bulgaria",
        "Slovenia"
      ],
      "nl": [
        "Hongarije",
        "Roemenië",
        "Bulgarije",
        "Slovenië"
      ]
    },
    "correctAnswer": {
      "fr": "Hongrie",
      "en": "Hungary",
      "nl": "Hongarije"
    },
    "explanation": {
      "fr": "Les costumes et masques imposants donnent à cette fête de fin d’hiver une forte identité visuelle. Le défilé est associé à la fin de la saison froide.",
      "en": "The imposing costumes and masks give this end-of-winter festival a strong visual identity. The parade is associated with the end of the cold season.",
      "nl": "De indrukwekkende kostuums en maskers geven dit einde-winterfeest een sterke visuele identiteit. De parade is verbonden met het einde van het koude seizoen."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — Busójárás",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bus%C3%B3-walking_of_the_Hungarian_Carnival_-_Farsangi_bus%C3%B3j%C3%A1r%C3%A1s.jpg"
  },
  {
    "id": "v009",
    "traditionName": {
      "fr": "Chèvre de Gävle",
      "en": "Gävle Goat",
      "nl": "Gävlebok"
    },
    "country": {
      "fr": "Suède",
      "en": "Sweden",
      "nl": "Zweden"
    },
    "region": {
      "fr": "Gävle",
      "en": "Gävle",
      "nl": "Gävle"
    },
    "scenario": {
      "fr": "Une immense chèvre de paille est construite chaque année pendant la période de Noël.",
      "en": "A huge straw goat is built every year during the Christmas period.",
      "nl": "Elk jaar wordt er tijdens de kerstperiode een enorme strogeit gebouwd."
    },
    "question": {
      "fr": "Dans quel pays peut-on voir cette chèvre géante ?",
      "en": "In which country can this giant goat be seen?",
      "nl": "In welk land is deze reuzengeit te zien?"
    },
    "answers": {
      "fr": [
        "Danemark",
        "Suède",
        "Finlande",
        "Lituanie"
      ],
      "en": [
        "Denmark",
        "Sweden",
        "Finland",
        "Lithuania"
      ],
      "nl": [
        "Denemarken",
        "Zweden",
        "Finland",
        "Litouwen"
      ]
    },
    "correctAnswer": {
      "fr": "Suède",
      "en": "Sweden",
      "nl": "Zweden"
    },
    "explanation": {
      "fr": "Cette grande structure de paille est liée aux traditions nordiques de Noël. Elle est devenue célèbre bien au-delà de sa ville d’origine.",
      "en": "This large straw structure is linked to Nordic Christmas traditions. It has become famous far beyond its home town.",
      "nl": "Deze grote stroconstructie is verbonden met Noordse kersttradities. Ze is beroemd geworden ver buiten de stad van oorsprong."
    },
    "difficulty": "easy",
    "sourceName": "Wikimedia Commons — Gävle Goat",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:G%C3%A4vle_Goat.JPG"
  },
  {
    "id": "v010",
    "traditionName": {
      "fr": "Guerre de farine de Galaxidi",
      "en": "Galaxidi Flour War",
      "nl": "Meeloorlog van Galaxidi"
    },
    "country": {
      "fr": "Grèce",
      "en": "Greece",
      "nl": "Griekenland"
    },
    "region": {
      "fr": "Galaxidi",
      "en": "Galaxidi",
      "nl": "Galaxidi"
    },
    "scenario": {
      "fr": "Des habitants se lancent de la farine pendant un carnaval haut en couleur.",
      "en": "Residents throw flour at each other during a colourful carnival.",
      "nl": "Bewoners gooien meel naar elkaar tijdens een kleurrijk carnaval."
    },
    "question": {
      "fr": "Dans quel pays cette bataille de farine a-t-elle lieu ?",
      "en": "In which country does this flour battle take place?",
      "nl": "In welk land vindt dit meelgevecht plaats?"
    },
    "answers": {
      "fr": [
        "Chypre",
        "Grèce",
        "Malte",
        "Italie"
      ],
      "en": [
        "Cyprus",
        "Greece",
        "Malta",
        "Italy"
      ],
      "nl": [
        "Cyprus",
        "Griekenland",
        "Malta",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "Grèce",
      "en": "Greece",
      "nl": "Griekenland"
    },
    "explanation": {
      "fr": "Les participants se couvrent de farine colorée dans les rues. Cette tradition carnavalesque est très visuelle et attire de nombreux curieux.",
      "en": "Participants cover each other with coloured flour in the streets. This carnival tradition is very visual and attracts many visitors.",
      "nl": "De deelnemers bedekken elkaar in de straten met gekleurd meel. Deze carnavalstraditie is zeer visueel en trekt veel bezoekers."
    },
    "difficulty": "easy",
    "sourceName": "Visit Greece / Galaxidi Flour War references",
    "sourceUrl": "https://www.visitgreece.gr/"
  },
  {
    "id": "v011",
    "traditionName": {
      "fr": "Rouketopolemos",
      "en": "Rouketopolemos",
      "nl": "Rouketopolemos"
    },
    "country": {
      "fr": "Grèce",
      "en": "Greece",
      "nl": "Griekenland"
    },
    "region": {
      "fr": "Vrontados, Chios",
      "en": "Vrontados, Chios",
      "nl": "Vrontados, Chios"
    },
    "scenario": {
      "fr": "Deux paroisses se répondent avec des milliers de petites fusées pendant la nuit de Pâques.",
      "en": "Two parishes answer each other with thousands of small rockets on Easter night.",
      "nl": "Twee parochies beantwoorden elkaar met duizenden kleine raketten tijdens de paasnacht."
    },
    "question": {
      "fr": "Dans quel pays cette tradition spectaculaire existe-t-elle ?",
      "en": "In which country does this spectacular tradition exist?",
      "nl": "In welk land bestaat deze spectaculaire traditie?"
    },
    "answers": {
      "fr": [
        "Grèce",
        "Chypre",
        "Malte",
        "Italie"
      ],
      "en": [
        "Greece",
        "Cyprus",
        "Malta",
        "Italy"
      ],
      "nl": [
        "Griekenland",
        "Cyprus",
        "Malta",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "Grèce",
      "en": "Greece",
      "nl": "Griekenland"
    },
    "explanation": {
      "fr": "Cette tradition de Pâques est connue pour ses tirs de fusées entre églises. La scène nocturne produit un spectacle lumineux particulièrement impressionnant.",
      "en": "This Easter tradition is known for rocket fire between churches. The night-time scene creates a particularly impressive light spectacle.",
      "nl": "Deze paastraditie staat bekend om raketten tussen kerken. Het nachtelijke tafereel zorgt voor een bijzonder indrukwekkend lichtspektakel."
    },
    "difficulty": "medium",
    "sourceName": "Visit Greece / Chios Easter references",
    "sourceUrl": "https://www.visitgreece.gr/"
  },
  {
    "id": "v012",
    "traditionName": {
      "fr": "Śmigus-Dyngus",
      "en": "Śmigus-Dyngus",
      "nl": "Śmigus-Dyngus"
    },
    "country": {
      "fr": "Pologne",
      "en": "Poland",
      "nl": "Polen"
    },
    "region": {
      "fr": "National",
      "en": "National",
      "nl": "National"
    },
    "scenario": {
      "fr": "Le lundi de Pâques, des personnes s’arrosent d’eau dans une ambiance festive.",
      "en": "On Easter Monday, people splash each other with water in a festive atmosphere.",
      "nl": "Op paasmaandag besprenkelen mensen elkaar met water in een feestelijke sfeer."
    },
    "question": {
      "fr": "Dans quel pays cette journée très humide est-elle populaire ?",
      "en": "In which country is this very wet day popular?",
      "nl": "In welk land is deze zeer natte dag populair?"
    },
    "answers": {
      "fr": [
        "Pologne",
        "Tchéquie",
        "Slovaquie",
        "Hongrie"
      ],
      "en": [
        "Poland",
        "Czechia",
        "Slovakia",
        "Hungary"
      ],
      "nl": [
        "Polen",
        "Tsjechië",
        "Slowakije",
        "Hongarije"
      ]
    },
    "correctAnswer": {
      "fr": "Pologne",
      "en": "Poland",
      "nl": "Polen"
    },
    "explanation": {
      "fr": "Cette tradition est aussi appelée lundi mouillé. Elle donne lieu à des jeux d’eau dans l’espace public ou familial.",
      "en": "This tradition is also known as Wet Monday. It leads to water games in public or family settings.",
      "nl": "Deze traditie staat ook bekend als natte maandag. Ze leidt tot waterspelletjes in publieke of familiale context."
    },
    "difficulty": "easy",
    "sourceName": "Polish tourism / Easter Monday references",
    "sourceUrl": "https://www.poland.travel/"
  },
  {
    "id": "v013",
    "traditionName": {
      "fr": "São João de Porto",
      "en": "São João de Porto",
      "nl": "São João de Porto"
    },
    "country": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "region": {
      "fr": "Porto",
      "en": "Porto",
      "nl": "Porto"
    },
    "scenario": {
      "fr": "Des personnes se tapotent gentiment avec des marteaux en plastique pendant une grande fête populaire.",
      "en": "People gently tap each other with plastic hammers during a large popular festival.",
      "nl": "Mensen tikken elkaar zachtjes aan met plastic hamers tijdens een groot volksfeest."
    },
    "question": {
      "fr": "Dans quel pays cette tradition urbaine a-t-elle lieu ?",
      "en": "In which country does this urban tradition take place?",
      "nl": "In welk land vindt deze stedelijke traditie plaats?"
    },
    "answers": {
      "fr": [
        "Portugal",
        "Espagne",
        "France",
        "Italie"
      ],
      "en": [
        "Portugal",
        "Spain",
        "France",
        "Italy"
      ],
      "nl": [
        "Portugal",
        "Spanje",
        "Frankrijk",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "fr": "Les marteaux en plastique sont devenus l’un des signes les plus reconnaissables de cette fête populaire.",
      "en": "The plastic hammers have become one of the most recognisable signs of this popular festival.",
      "nl": "De plastic hamers zijn een van de meest herkenbare tekenen van dit volksfeest geworden."
    },
    "difficulty": "easy",
    "sourceName": "Visit Portugal — São João references",
    "sourceUrl": "https://www.visitportugal.com/"
  },
  {
    "id": "v014",
    "traditionName": {
      "fr": "Puck Fair",
      "en": "Puck Fair",
      "nl": "Puck Fair"
    },
    "country": {
      "fr": "Irlande",
      "en": "Ireland",
      "nl": "Ierland"
    },
    "region": {
      "fr": "Killorglin, Kerry",
      "en": "Killorglin, Kerry",
      "nl": "Killorglin, Kerry"
    },
    "scenario": {
      "fr": "Une chèvre est symboliquement couronnée pendant une foire traditionnelle.",
      "en": "A goat is symbolically crowned during a traditional fair.",
      "nl": "Een geit wordt symbolisch gekroond tijdens een traditionele jaarmarkt."
    },
    "question": {
      "fr": "Dans quel pays cette chèvre devient-elle reine ou roi de la fête ?",
      "en": "In which country does this goat become the queen or king of the festival?",
      "nl": "In welk land wordt deze geit koningin of koning van het feest?"
    },
    "answers": {
      "fr": [
        "Irlande",
        "Danemark",
        "Pays-Bas",
        "France"
      ],
      "en": [
        "Ireland",
        "Denmark",
        "Netherlands",
        "France"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Nederland",
        "Frankrijk"
      ]
    },
    "correctAnswer": {
      "fr": "Irlande",
      "en": "Ireland",
      "nl": "Ierland"
    },
    "explanation": {
      "fr": "La chèvre couronnée est l’image centrale de cette foire traditionnelle, qui mêle fête populaire, défilés et identité locale.",
      "en": "The crowned goat is the central image of this traditional fair, combining popular celebration, parades and local identity.",
      "nl": "De gekroonde geit is het centrale beeld van deze traditionele jaarmarkt, met volksfeest, optochten en lokale identiteit."
    },
    "difficulty": "easy",
    "sourceName": "Puck Fair official references",
    "sourceUrl": "https://puckfair.ie/"
  },
  {
    "id": "v015",
    "traditionName": {
      "fr": "Fastelavn",
      "en": "Fastelavn",
      "nl": "Fastelavn"
    },
    "country": {
      "fr": "Danemark",
      "en": "Denmark",
      "nl": "Denemarken"
    },
    "region": {
      "fr": "National",
      "en": "National",
      "nl": "National"
    },
    "scenario": {
      "fr": "Des enfants frappent un tonneau décoré pendant une fête traditionnelle.",
      "en": "Children hit a decorated barrel during a traditional festival.",
      "nl": "Kinderen slaan op een versierd vat tijdens een traditionele viering."
    },
    "question": {
      "fr": "Dans quel pays cette coutume existe-t-elle ?",
      "en": "In which country does this custom exist?",
      "nl": "In welk land bestaat dit gebruik?"
    },
    "answers": {
      "fr": [
        "Danemark",
        "Suède",
        "Finlande",
        "Allemagne"
      ],
      "en": [
        "Denmark",
        "Sweden",
        "Finland",
        "Germany"
      ],
      "nl": [
        "Denemarken",
        "Zweden",
        "Finland",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "fr": "Danemark",
      "en": "Denmark",
      "nl": "Denemarken"
    },
    "explanation": {
      "fr": "Cette fête proche du carnaval comprend des costumes, des jeux et la coutume du tonneau décoré.",
      "en": "This carnival-like festival includes costumes, games and the decorated barrel custom.",
      "nl": "Dit carnavaleske feest omvat kostuums, spelletjes en het gebruik van een versierd vat."
    },
    "difficulty": "easy",
    "sourceName": "Visit Denmark — Fastelavn references",
    "sourceUrl": "https://www.visitdenmark.com/"
  },
  {
    "id": "v016",
    "traditionName": {
      "fr": "Krampus",
      "en": "Krampus",
      "nl": "Krampus"
    },
    "country": {
      "fr": "Autriche",
      "en": "Austria",
      "nl": "Oostenrijk"
    },
    "region": {
      "fr": "Régions alpines",
      "en": "Régions alpines",
      "nl": "Régions alpines"
    },
    "scenario": {
      "fr": "Des personnages cornus et effrayants défilent pendant l’hiver.",
      "en": "Horned and frightening characters parade during winter.",
      "nl": "Gehoornde en indrukwekkende figuren paraderen tijdens de winter."
    },
    "question": {
      "fr": "Dans quel pays cette tradition alpine est-elle très connue ?",
      "en": "In which country is this Alpine tradition very well known?",
      "nl": "In welk land is deze Alpentraditie erg bekend?"
    },
    "answers": {
      "fr": [
        "Autriche",
        "Irlande",
        "Lettonie",
        "Belgique"
      ],
      "en": [
        "Austria",
        "Ireland",
        "Latvia",
        "Belgium"
      ],
      "nl": [
        "Oostenrijk",
        "Ierland",
        "Letland",
        "België"
      ]
    },
    "correctAnswer": {
      "fr": "Autriche",
      "en": "Austria",
      "nl": "Oostenrijk"
    },
    "explanation": {
      "fr": "Les parades hivernales montrent des personnages cornus spectaculaires. Cette figure accompagne les traditions alpines de début décembre.",
      "en": "Winter parades show spectacular horned figures. This character accompanies Alpine traditions in early December.",
      "nl": "Winterparades tonen spectaculaire gehoornde figuren. Deze figuur hoort bij Alpentradities begin december."
    },
    "difficulty": "easy",
    "sourceName": "Austrian tourism / Krampus references",
    "sourceUrl": "https://www.austria.info/"
  },
  {
    "id": "v017",
    "traditionName": {
      "fr": "Marchés au fromage néerlandais",
      "en": "Marchés au fromage néerlandais",
      "nl": "Marchés au fromage néerlandais"
    },
    "country": {
      "fr": "Pays-Bas",
      "en": "Netherlands",
      "nl": "Nederland"
    },
    "region": {
      "fr": "Alkmaar / Gouda",
      "en": "Alkmaar / Gouda",
      "nl": "Alkmaar / Gouda"
    },
    "scenario": {
      "fr": "Des porteurs transportent des fromages dans une mise en scène traditionnelle.",
      "en": "Porters carry cheeses in a traditional staged market scene.",
      "nl": "Dragers vervoeren kazen in een traditionele marktscène."
    },
    "question": {
      "fr": "Dans quel pays voit-on ces marchés au fromage ?",
      "en": "In which country can these cheese markets be seen?",
      "nl": "In welk land zijn deze kaasmarkten te zien?"
    },
    "answers": {
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne",
        "France"
      ],
      "en": [
        "Netherlands",
        "Belgium",
        "Germany",
        "France"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland",
        "Frankrijk"
      ]
    },
    "correctAnswer": {
      "fr": "Pays-Bas",
      "en": "Netherlands",
      "nl": "Nederland"
    },
    "explanation": {
      "fr": "Ces marchés mettent en scène le transport, la pesée et la vente du fromage avec une présentation traditionnelle très visuelle.",
      "en": "These markets stage the carrying, weighing and selling of cheese with a very visual traditional presentation.",
      "nl": "Deze markten tonen het dragen, wegen en verkopen van kaas in een zeer visuele traditionele presentatie."
    },
    "difficulty": "easy",
    "sourceName": "Dutch tourism / cheese markets references",
    "sourceUrl": "https://www.holland.com/"
  },
  {
    "id": "v018",
    "traditionName": {
      "fr": "Procession dansante d’Echternach",
      "en": "Procession dansante d’Echternach",
      "nl": "Procession dansante d’Echternach"
    },
    "country": {
      "fr": "Luxembourg",
      "en": "Luxembourg",
      "nl": "Luxemburg"
    },
    "region": {
      "fr": "Echternach",
      "en": "Echternach",
      "nl": "Echternach"
    },
    "scenario": {
      "fr": "Des participants avancent en rythme dans une procession très particulière.",
      "en": "Participants move forward rhythmically in a very distinctive procession.",
      "nl": "Deelnemers bewegen ritmisch vooruit in een zeer bijzondere processie."
    },
    "question": {
      "fr": "Dans quel pays cette procession a-t-elle lieu ?",
      "en": "In which country does this procession take place?",
      "nl": "In welk land vindt deze processie plaats?"
    },
    "answers": {
      "fr": [
        "Luxembourg",
        "Belgique",
        "Allemagne",
        "France"
      ],
      "en": [
        "Luxembourg",
        "Belgium",
        "Germany",
        "France"
      ],
      "nl": [
        "Luxemburg",
        "België",
        "Duitsland",
        "Frankrijk"
      ]
    },
    "correctAnswer": {
      "fr": "Luxembourg",
      "en": "Luxembourg",
      "nl": "Luxemburg"
    },
    "explanation": {
      "fr": "Cette procession est l’une des traditions les plus connues du pays. Les participants avancent ensemble selon un rythme particulier.",
      "en": "This procession is one of the country’s best-known traditions. Participants move together in a distinctive rhythm.",
      "nl": "Deze processie is een van de bekendste tradities van het land. Deelnemers bewegen samen in een bijzonder ritme."
    },
    "difficulty": "medium",
    "sourceName": "UNESCO / Luxembourg references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v019",
    "traditionName": {
      "fr": "Castells",
      "en": "Castells",
      "nl": "Castells"
    },
    "country": {
      "fr": "Catalogne",
      "en": "Catalonia",
      "nl": "Catalonië"
    },
    "region": {
      "fr": "Catalogne",
      "en": "Catalogne",
      "nl": "Catalogne"
    },
    "scenario": {
      "fr": "Des équipes forment d’immenses tours humaines, parfois hautes de plusieurs étages.",
      "en": "Teams form huge human towers, sometimes several levels high.",
      "nl": "Teams vormen enorme menselijke torens, soms meerdere verdiepingen hoog."
    },
    "question": {
      "fr": "Dans quelle région cette tradition est-elle emblématique ?",
      "en": "In which region is this tradition emblematic?",
      "nl": "In welke regio is deze traditie emblematisch?"
    },
    "answers": {
      "fr": [
        "Catalogne",
        "Bavière",
        "Bretagne",
        "Sardaigne"
      ],
      "en": [
        "Catalonia",
        "Bavaria",
        "Brittany",
        "Sardinia"
      ],
      "nl": [
        "Catalonië",
        "Beieren",
        "Bretagne",
        "Sardinië"
      ]
    },
    "correctAnswer": {
      "fr": "Catalogne",
      "en": "Catalonia",
      "nl": "Catalonië"
    },
    "explanation": {
      "fr": "Cette tradition de tours humaines repose sur le travail d’équipe, l’équilibre et la confiance.",
      "en": "This human-tower tradition relies on teamwork, balance and trust.",
      "nl": "Deze menselijke-torentraditie steunt op teamwork, evenwicht en vertrouwen."
    },
    "difficulty": "easy",
    "sourceName": "Government of Catalonia — Castells",
    "sourceUrl": "https://patrimoni.gencat.cat/en/collection/castells"
  },
  {
    "id": "v020",
    "traditionName": {
      "fr": "Air Guitar World Championships",
      "en": "Air Guitar World Championships",
      "nl": "Air Guitar World Championships"
    },
    "country": {
      "fr": "Finlande",
      "en": "Finland",
      "nl": "Finland"
    },
    "region": {
      "fr": "Oulu",
      "en": "Oulu",
      "nl": "Oulu"
    },
    "scenario": {
      "fr": "Des concurrents montent sur scène pour jouer de la guitare… sans guitare.",
      "en": "Competitors go on stage to play guitar… without a guitar.",
      "nl": "Deelnemers gaan het podium op om gitaar te spelen… zonder gitaar."
    },
    "question": {
      "fr": "Dans quel pays se tient ce championnat du monde ?",
      "en": "In which country is this world championship held?",
      "nl": "In welk land wordt dit wereldkampioenschap gehouden?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Irlande",
        "Suède",
        "Allemagne"
      ],
      "en": [
        "Finland",
        "Ireland",
        "Sweden",
        "Germany"
      ],
      "nl": [
        "Finland",
        "Ierland",
        "Zweden",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finland",
      "nl": "Finland"
    },
    "explanation": {
      "fr": "Les concurrents jouent sur scène avec des instruments imaginaires. Le concours défend une approche humoristique et performative.",
      "en": "Competitors perform on stage with imaginary instruments. The contest promotes a humorous and performative approach.",
      "nl": "Deelnemers treden op met denkbeeldige instrumenten. De wedstrijd heeft een humoristische en performatieve aanpak."
    },
    "difficulty": "easy",
    "sourceName": "Air Guitar World Championships official website",
    "sourceUrl": "https://airguitarworldchampionships.com/en/home/"
  },
  {
    "id": "v021",
    "traditionName": {
      "fr": "Las Fallas",
      "en": "Las Fallas",
      "nl": "Las Fallas"
    },
    "country": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "region": {
      "fr": "Valence",
      "en": "Valence",
      "nl": "Valence"
    },
    "scenario": {
      "fr": "D’immenses sculptures satiriques sont exposées puis brûlées lors d’une grande fête urbaine.",
      "en": "Huge satirical sculptures are displayed and then burned during a major urban festival.",
      "nl": "Enorme satirische beelden worden tentoongesteld en daarna verbrand tijdens een groot stadsfeest."
    },
    "question": {
      "fr": "Dans quel pays cette tradition a-t-elle lieu ?",
      "en": "In which country does this tradition take place?",
      "nl": "In welk land vindt deze traditie plaats?"
    },
    "answers": {
      "fr": [
        "Espagne",
        "Italie",
        "Portugal",
        "France"
      ],
      "en": [
        "Spain",
        "Italy",
        "Portugal",
        "France"
      ],
      "nl": [
        "Spanje",
        "Italië",
        "Portugal",
        "Frankrijk"
      ]
    },
    "correctAnswer": {
      "fr": "Espagne",
      "en": "Spain",
      "nl": "Spanje"
    },
    "explanation": {
      "fr": "Cette fête est connue pour ses sculptures monumentales, souvent satiriques, présentées avant d’être brûlées.",
      "en": "This festival is known for its monumental, often satirical sculptures, displayed before being burned.",
      "nl": "Dit feest staat bekend om monumentale, vaak satirische beelden die worden getoond voordat ze worden verbrand."
    },
    "difficulty": "easy",
    "sourceName": "Visit Valencia / UNESCO references",
    "sourceUrl": "https://www.visitvalencia.com/"
  },
  {
    "id": "v022",
    "traditionName": {
      "fr": "Carnaval de Binche",
      "en": "Carnaval de Binche",
      "nl": "Carnaval de Binche"
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "region": {
      "fr": "Binche, Wallonie",
      "en": "Binche, Wallonie",
      "nl": "Binche, Wallonie"
    },
    "scenario": {
      "fr": "Des personnages appelés Gilles portent de grands chapeaux et lancent des oranges.",
      "en": "Characters called Gilles wear large hats and throw oranges.",
      "nl": "Figuren die Gilles worden genoemd dragen grote hoeden en gooien sinaasappels."
    },
    "question": {
      "fr": "Dans quel pays se déroule ce carnaval ?",
      "en": "In which country does this carnival take place?",
      "nl": "In welk land vindt dit carnaval plaats?"
    },
    "answers": {
      "fr": [
        "Belgique",
        "France",
        "Pays-Bas",
        "Luxembourg"
      ],
      "en": [
        "Belgium",
        "France",
        "Netherlands",
        "Luxembourg"
      ],
      "nl": [
        "België",
        "Frankrijk",
        "Nederland",
        "Luxemburg"
      ]
    },
    "correctAnswer": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "explanation": {
      "fr": "Les Gilles, leurs costumes et les oranges lancées au public font partie des éléments les plus reconnaissables de ce carnaval.",
      "en": "The Gilles, their costumes and the oranges thrown to the public are among the most recognisable elements of this carnival.",
      "nl": "De Gilles, hun kostuums en de naar het publiek gegooide sinaasappels behoren tot de herkenbaarste elementen van dit carnaval."
    },
    "difficulty": "easy",
    "sourceName": "UNESCO / Carnival of Binche references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v023",
    "traditionName": {
      "fr": "Ducasse de Mons",
      "en": "Ducasse de Mons",
      "nl": "Ducasse de Mons"
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "region": {
      "fr": "Mons, Wallonie",
      "en": "Mons, Wallonie",
      "nl": "Mons, Wallonie"
    },
    "scenario": {
      "fr": "Un combat rituel met en scène saint Georges et un dragon.",
      "en": "A ritual combat stages Saint George and a dragon.",
      "nl": "Een ritueel gevecht toont Sint-Joris en een draak."
    },
    "question": {
      "fr": "Dans quel pays cette tradition a-t-elle lieu ?",
      "en": "In which country does this tradition take place?",
      "nl": "In welk land vindt deze traditie plaats?"
    },
    "answers": {
      "fr": [
        "Belgique",
        "France",
        "Italie",
        "Espagne"
      ],
      "en": [
        "Belgium",
        "France",
        "Italy",
        "Spain"
      ],
      "nl": [
        "België",
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "fr": "Belgique",
      "en": "Belgium",
      "nl": "België"
    },
    "explanation": {
      "fr": "Le combat du Lumeçon oppose symboliquement saint Georges au dragon. Cette scène rituelle est au centre de la fête.",
      "en": "The Lumeçon combat symbolically pits Saint George against the dragon. This ritual scene is central to the festival.",
      "nl": "Het Lumeçon-gevecht plaatst Sint-Joris symbolisch tegenover de draak. Deze rituele scène staat centraal in het feest."
    },
    "difficulty": "medium",
    "sourceName": "UNESCO / Ducasse de Mons references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v024",
    "traditionName": {
      "fr": "Festa dos Tabuleiros",
      "en": "Festa dos Tabuleiros",
      "nl": "Festa dos Tabuleiros"
    },
    "country": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "region": {
      "fr": "Tomar",
      "en": "Tomar",
      "nl": "Tomar"
    },
    "scenario": {
      "fr": "Des personnes portent sur la tête de hauts plateaux décorés de pain et de fleurs.",
      "en": "People carry tall trays decorated with bread and flowers on their heads.",
      "nl": "Mensen dragen hoge plateaus met brood en bloemen op hun hoofd."
    },
    "question": {
      "fr": "Dans quel pays cette procession existe-t-elle ?",
      "en": "In which country does this procession exist?",
      "nl": "In welk land bestaat deze processie?"
    },
    "answers": {
      "fr": [
        "Portugal",
        "Espagne",
        "Italie",
        "Grèce"
      ],
      "en": [
        "Portugal",
        "Spain",
        "Italy",
        "Greece"
      ],
      "nl": [
        "Portugal",
        "Spanje",
        "Italië",
        "Griekenland"
      ]
    },
    "correctAnswer": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "fr": "Les plateaux portés en procession sont hauts, fleuris et très reconnaissables. La tradition donne lieu à une grande célébration collective.",
      "en": "The trays carried in procession are tall, floral and very recognisable. The tradition gives rise to a large collective celebration.",
      "nl": "De plateaus in de processie zijn hoog, bloemrijk en zeer herkenbaar. De traditie leidt tot een grote gezamenlijke viering."
    },
    "difficulty": "medium",
    "sourceName": "Visit Portugal / Tomar references",
    "sourceUrl": "https://www.visitportugal.com/"
  },
  {
    "id": "v025",
    "traditionName": {
      "fr": "Caretos de Podence",
      "en": "Caretos de Podence",
      "nl": "Caretos de Podence"
    },
    "country": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "region": {
      "fr": "Podence, Trás-os-Montes",
      "en": "Podence, Trás-os-Montes",
      "nl": "Podence, Trás-os-Montes"
    },
    "scenario": {
      "fr": "Des personnages masqués en costumes colorés courent dans les rues pendant le carnaval.",
      "en": "Masked characters in colourful costumes run through the streets during carnival.",
      "nl": "Gemaskerde figuren in kleurrijke kostuums rennen door de straten tijdens carnaval."
    },
    "question": {
      "fr": "Dans quel pays rencontre-t-on les Caretos de Podence ?",
      "en": "In which country can the Caretos de Podence be found?",
      "nl": "In welk land vindt men de Caretos de Podence?"
    },
    "answers": {
      "fr": [
        "Portugal",
        "Bulgarie",
        "Hongrie",
        "Croatie"
      ],
      "en": [
        "Portugal",
        "Bulgaria",
        "Hungary",
        "Croatia"
      ],
      "nl": [
        "Portugal",
        "Bulgarije",
        "Hongarije",
        "Kroatië"
      ]
    },
    "correctAnswer": {
      "fr": "Portugal",
      "en": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "fr": "Les masques et costumes colorés donnent au carnaval une forte identité visuelle. Les personnages parcourent les rues dans une atmosphère dynamique.",
      "en": "The masks and colourful costumes give the carnival a strong visual identity. The characters move through the streets in a dynamic atmosphere.",
      "nl": "De maskers en kleurrijke kostuums geven het carnaval een sterke visuele identiteit. De figuren trekken door de straten in een dynamische sfeer."
    },
    "difficulty": "easy",
    "sourceName": "UNESCO / Caretos de Podence references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v026",
    "traditionName": {
      "fr": "Mărțișor",
      "en": "Mărțișor",
      "nl": "Mărțișor"
    },
    "country": {
      "fr": "Roumanie",
      "en": "Romania",
      "nl": "Roemenië"
    },
    "region": {
      "fr": "National",
      "en": "National",
      "nl": "National"
    },
    "scenario": {
      "fr": "On offre de petits porte-bonheur rouges et blancs pour marquer l’arrivée du printemps.",
      "en": "Small red-and-white lucky charms are offered to mark the arrival of spring.",
      "nl": "Kleine rood-witte geluksbrengers worden gegeven om de komst van de lente te markeren."
    },
    "question": {
      "fr": "Dans quel pays cette tradition est-elle très répandue ?",
      "en": "In which country is this tradition very widespread?",
      "nl": "In welk land is deze traditie wijdverspreid?"
    },
    "answers": {
      "fr": [
        "Roumanie",
        "Bulgarie",
        "Hongrie",
        "Pologne"
      ],
      "en": [
        "Romania",
        "Bulgaria",
        "Hungary",
        "Poland"
      ],
      "nl": [
        "Roemenië",
        "Bulgarije",
        "Hongarije",
        "Polen"
      ]
    },
    "correctAnswer": {
      "fr": "Roumanie",
      "en": "Romania",
      "nl": "Roemenië"
    },
    "explanation": {
      "fr": "Les petits fils rouges et blancs symbolisent le passage vers le printemps. Ils sont offerts au début du mois de mars.",
      "en": "The small red-and-white threads symbolise the transition to spring. They are offered at the beginning of March.",
      "nl": "De kleine rood-witte draadjes symboliseren de overgang naar de lente. Ze worden begin maart gegeven."
    },
    "difficulty": "easy",
    "sourceName": "UNESCO / Mărțișor references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v027",
    "traditionName": {
      "fr": "Baba Marta / Martenitsa",
      "en": "Baba Marta / Martenitsa",
      "nl": "Baba Marta / Martenitsa"
    },
    "country": {
      "fr": "Bulgarie",
      "en": "Bulgaria",
      "nl": "Bulgarije"
    },
    "region": {
      "fr": "National",
      "en": "National",
      "nl": "National"
    },
    "scenario": {
      "fr": "On porte des fils rouges et blancs pour accueillir le printemps.",
      "en": "Red-and-white threads are worn to welcome spring.",
      "nl": "Rood-witte draadjes worden gedragen om de lente te verwelkomen."
    },
    "question": {
      "fr": "Dans quel pays cette tradition est-elle appelée Baba Marta ?",
      "en": "In which country is this tradition called Baba Marta?",
      "nl": "In welk land wordt deze traditie Baba Marta genoemd?"
    },
    "answers": {
      "fr": [
        "Bulgarie",
        "Roumanie",
        "Grèce",
        "Slovaquie"
      ],
      "en": [
        "Bulgaria",
        "Romania",
        "Greece",
        "Slovakia"
      ],
      "nl": [
        "Bulgarije",
        "Roemenië",
        "Griekenland",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "fr": "Bulgarie",
      "en": "Bulgaria",
      "nl": "Bulgarije"
    },
    "explanation": {
      "fr": "Les Martenitsa rouges et blanches sont portées pour souhaiter santé et renouveau. La tradition marque l’arrivée du printemps.",
      "en": "Red-and-white Martenitsa are worn to wish health and renewal. The tradition marks the arrival of spring.",
      "nl": "Rood-witte Martenitsa worden gedragen om gezondheid en vernieuwing te wensen. De traditie markeert de komst van de lente."
    },
    "difficulty": "easy",
    "sourceName": "UNESCO / Martenitsa references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v028",
    "traditionName": {
      "fr": "Jāņi",
      "en": "Jāņi",
      "nl": "Jāņi"
    },
    "country": {
      "fr": "Lettonie",
      "en": "Latvia",
      "nl": "Letland"
    },
    "region": {
      "fr": "National",
      "en": "National",
      "nl": "National"
    },
    "scenario": {
      "fr": "Des couronnes, des chants, des feux et un fromage spécial marquent la nuit la plus courte.",
      "en": "Wreaths, songs, fires and a special cheese mark the shortest night.",
      "nl": "Kransen, liederen, vuren en een speciale kaas markeren de kortste nacht."
    },
    "question": {
      "fr": "Dans quel pays célèbre-t-on Jāņi ?",
      "en": "In which country is Jāņi celebrated?",
      "nl": "In welk land wordt Jāņi gevierd?"
    },
    "answers": {
      "fr": [
        "Lettonie",
        "Estonie",
        "Lituanie",
        "Finlande"
      ],
      "en": [
        "Latvia",
        "Estonia",
        "Lithuania",
        "Finland"
      ],
      "nl": [
        "Letland",
        "Estland",
        "Litouwen",
        "Finland"
      ]
    },
    "correctAnswer": {
      "fr": "Lettonie",
      "en": "Latvia",
      "nl": "Letland"
    },
    "explanation": {
      "fr": "Cette grande fête du solstice d’été associe chants, couronnes, feux de joie et nourriture traditionnelle.",
      "en": "This major summer-solstice festival combines songs, wreaths, bonfires and traditional food.",
      "nl": "Dit grote midzomerfeest combineert liederen, kransen, vreugdevuren en traditionele voeding."
    },
    "difficulty": "easy",
    "sourceName": "Latvia tourism / Jāņi references",
    "sourceUrl": "https://www.latvia.travel/"
  },
  {
    "id": "v029",
    "traditionName": {
      "fr": "Seto Leelo",
      "en": "Seto Leelo",
      "nl": "Seto Leelo"
    },
    "country": {
      "fr": "Estonie",
      "en": "Estonia",
      "nl": "Estland"
    },
    "region": {
      "fr": "Setomaa",
      "en": "Setomaa",
      "nl": "Setomaa"
    },
    "scenario": {
      "fr": "Des chanteurs interprètent une tradition polyphonique très spécifique.",
      "en": "Singers perform a very specific polyphonic tradition.",
      "nl": "Zangers voeren een zeer specifieke meerstemmige traditie uit."
    },
    "question": {
      "fr": "Dans quel pays trouve-t-on la tradition Seto Leelo ?",
      "en": "In which country is the Seto Leelo tradition found?",
      "nl": "In welk land vindt men de Seto Leelo-traditie?"
    },
    "answers": {
      "fr": [
        "Estonie",
        "Lettonie",
        "Lituanie",
        "Finlande"
      ],
      "en": [
        "Estonia",
        "Latvia",
        "Lithuania",
        "Finland"
      ],
      "nl": [
        "Estland",
        "Letland",
        "Litouwen",
        "Finland"
      ]
    },
    "correctAnswer": {
      "fr": "Estonie",
      "en": "Estonia",
      "nl": "Estland"
    },
    "explanation": {
      "fr": "Cette tradition chantée polyphonique est liée au peuple Seto. Elle repose sur une pratique vocale collective transmise localement.",
      "en": "This polyphonic singing tradition is linked to the Seto people. It relies on a locally transmitted collective vocal practice.",
      "nl": "Deze meerstemmige zangtraditie is verbonden met het Seto-volk. Ze berust op een lokaal doorgegeven collectieve zangpraktijk."
    },
    "difficulty": "medium",
    "sourceName": "UNESCO / Seto Leelo references",
    "sourceUrl": "https://ich.unesco.org/"
  },
  {
    "id": "v030",
    "traditionName": {
      "fr": "Kaziukas Fair",
      "en": "Kaziukas Fair",
      "nl": "Kaziukas Fair"
    },
    "country": {
      "fr": "Lituanie",
      "en": "Lithuania",
      "nl": "Litouwen"
    },
    "region": {
      "fr": "Vilnius",
      "en": "Vilnius",
      "nl": "Vilnius"
    },
    "scenario": {
      "fr": "Une grande foire de printemps réunit artisans, objets traditionnels et spécialités locales.",
      "en": "A large spring fair brings together craftspeople, traditional objects and local specialities.",
      "nl": "Een grote voorjaarsmarkt brengt ambachtslieden, traditionele objecten en lokale specialiteiten samen."
    },
    "question": {
      "fr": "Dans quel pays cette foire a-t-elle lieu ?",
      "en": "In which country does this fair take place?",
      "nl": "In welk land vindt deze markt plaats?"
    },
    "answers": {
      "fr": [
        "Lituanie",
        "Lettonie",
        "Pologne",
        "Estonie"
      ],
      "en": [
        "Lithuania",
        "Latvia",
        "Poland",
        "Estonia"
      ],
      "nl": [
        "Litouwen",
        "Letland",
        "Polen",
        "Estland"
      ]
    },
    "correctAnswer": {
      "fr": "Lituanie",
      "en": "Lithuania",
      "nl": "Litouwen"
    },
    "explanation": {
      "fr": "Cette foire printanière met en avant l’artisanat, les marchés et la culture populaire. Elle est très liée à la vie urbaine et festive de sa capitale.",
      "en": "This spring fair highlights crafts, markets and popular culture. It is strongly linked to the urban and festive life of the capital.",
      "nl": "Deze voorjaarsmarkt legt de nadruk op ambacht, markten en volkscultuur. Ze is sterk verbonden met het stedelijke en feestelijke leven van de hoofdstad."
    },
    "difficulty": "medium",
    "sourceName": "Lithuania tourism / Kaziukas references",
    "sourceUrl": "https://lithuania.travel/"
  }
];
