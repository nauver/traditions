const TRANSLATIONS={
  "en": {
    "appTitle": "Odd Traditions of Europe",
    "subtitle": "A CoR-style quiz celebrating Europe’s local heritage",
    "start": "Start quiz",
    "next": "Next question",
    "restart": "Restart",
    "score": "Score",
    "question": "Question",
    "of": "of",
    "correct": "Correct",
    "wrong": "Wrong",
    "finalTitle": "Quiz completed",
    "finalText": "Your final score is",
    "language": "Language",
    "difficulty": "Difficulty",
    "theme": "Theme",
    "country": "Country",
    "intro": "Answer 30 randomly selected questions from a multilingual database of 120 European traditions.",
    "footer": "European Committee of the Regions inspired gamification prototype",
    "selectLang": "Choose language",
    "timeLeft": "Time left",
    "seconds": "seconds",
    "playAgain": "Play again",
    "countries": "EU countries",
    "random": "random questions"
  },
  "fr": {
    "appTitle": "Traditions insolites d’Europe",
    "subtitle": "Un quiz inspiré CoR pour célébrer le patrimoine local européen",
    "start": "Commencer le quiz",
    "next": "Question suivante",
    "restart": "Recommencer",
    "score": "Score",
    "question": "Question",
    "of": "sur",
    "correct": "Correct",
    "wrong": "Incorrect",
    "finalTitle": "Quiz terminé",
    "finalText": "Votre score final est",
    "language": "Langue",
    "difficulty": "Difficulté",
    "theme": "Thème",
    "country": "Pays",
    "intro": "Répondez à 30 questions tirées aléatoirement d’une base multilingue de 120 traditions européennes.",
    "footer": "Prototype de gamification inspiré du Comité européen des régions",
    "selectLang": "Choisir la langue",
    "timeLeft": "Temps restant",
    "seconds": "secondes",
    "playAgain": "Rejouer",
    "countries": "pays de l’UE",
    "random": "questions aléatoires"
  },
  "nl": {
    "appTitle": "Bijzondere tradities van Europa",
    "subtitle": "Een CoR-geïnspireerde quiz over lokaal Europees erfgoed",
    "start": "Quiz starten",
    "next": "Volgende vraag",
    "restart": "Opnieuw starten",
    "score": "Score",
    "question": "Vraag",
    "of": "van",
    "correct": "Juist",
    "wrong": "Fout",
    "finalTitle": "Quiz voltooid",
    "finalText": "Je eindscore is",
    "language": "Taal",
    "difficulty": "Moeilijkheid",
    "theme": "Thema",
    "country": "Land",
    "intro": "Beantwoord 30 willekeurig gekozen vragen uit een meertalige databank van 120 Europese tradities.",
    "footer": "Gamificationprototype geïnspireerd door het Europees Comité van de Regio’s",
    "selectLang": "Kies taal",
    "timeLeft": "Resterende tijd",
    "seconds": "seconden",
    "playAgain": "Opnieuw spelen",
    "countries": "EU-landen",
    "random": "willekeurige vragen"
  }
};
const QUESTIONS=[
  {
    "id": "q001",
    "kind": "country",
    "difficulty": "easy",
    "region": "Buñol, Valencia",
    "question": {
      "en": "In which country is La Tomatina practised?",
      "fr": "Dans quel pays pratique-t-on La Tomatina ?",
      "nl": "In welk land wordt La Tomatina beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    },
    "explanation": {
      "en": "La Tomatina is linked to Buñol, Valencia, Spain.",
      "fr": "La Tomatina est lié à Buñol, Valencia, en Espagne.",
      "nl": "La Tomatina is verbonden met Buñol, Valencia, in Spanje."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q002",
    "kind": "type",
    "difficulty": "medium",
    "region": "Buñol, Valencia",
    "question": {
      "en": "What type of tradition is La Tomatina?",
      "fr": "Quel type de tradition est La Tomatina ?",
      "nl": "Wat voor soort traditie is La Tomatina?"
    },
    "answers": {
      "en": [
        "food fight",
        "fire festival",
        "masked carnival"
      ],
      "fr": [
        "bataille de nourriture",
        "fête du feu",
        "carnaval masqué"
      ],
      "nl": [
        "voedselgevecht",
        "vuurfestival",
        "gemaskerd carnaval"
      ]
    },
    "correctAnswer": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "explanation": {
      "en": "La Tomatina is best described as a food fight.",
      "fr": "La Tomatina est plutôt une tradition de type : bataille de nourriture.",
      "nl": "La Tomatina wordt het best omschreven als: voedselgevecht."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q003",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Buñol, Valencia",
    "question": {
      "en": "Which feature is associated with La Tomatina?",
      "fr": "Quel élément est associé à La Tomatina ?",
      "nl": "Welk element hoort bij La Tomatina?"
    },
    "answers": {
      "en": [
        "throwing tomatoes",
        "wearing masks",
        "lighting bonfires"
      ],
      "fr": [
        "lancer des tomates",
        "porter des masques",
        "allumer des feux de joie"
      ],
      "nl": [
        "tomaten gooien",
        "maskers dragen",
        "vreugdevuren aansteken"
      ]
    },
    "correctAnswer": {
      "en": "throwing tomatoes",
      "fr": "lancer des tomates",
      "nl": "tomaten gooien"
    },
    "explanation": {
      "en": "A key element of La Tomatina is throwing tomatoes.",
      "fr": "Un élément clé de La Tomatina est : lancer des tomates.",
      "nl": "Een belangrijk element van La Tomatina is: tomaten gooien."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q004",
    "kind": "country",
    "difficulty": "easy",
    "region": "Valencia",
    "question": {
      "en": "In which country is Las Fallas practised?",
      "fr": "Dans quel pays pratique-t-on Las Fallas ?",
      "nl": "In welk land wordt Las Fallas beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    },
    "explanation": {
      "en": "Las Fallas is linked to Valencia, Spain.",
      "fr": "Las Fallas est lié à Valencia, en Espagne.",
      "nl": "Las Fallas is verbonden met Valencia, in Spanje."
    },
    "theme": {
      "en": "fire festival",
      "fr": "fête du feu",
      "nl": "vuurfestival"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q005",
    "kind": "type",
    "difficulty": "medium",
    "region": "Valencia",
    "question": {
      "en": "What type of tradition is Las Fallas?",
      "fr": "Quel type de tradition est Las Fallas ?",
      "nl": "Wat voor soort traditie is Las Fallas?"
    },
    "answers": {
      "en": [
        "fire festival",
        "food fight",
        "masked carnival"
      ],
      "fr": [
        "fête du feu",
        "bataille de nourriture",
        "carnaval masqué"
      ],
      "nl": [
        "vuurfestival",
        "voedselgevecht",
        "gemaskerd carnaval"
      ]
    },
    "correctAnswer": {
      "en": "fire festival",
      "fr": "fête du feu",
      "nl": "vuurfestival"
    },
    "explanation": {
      "en": "Las Fallas is best described as a fire festival.",
      "fr": "Las Fallas est plutôt une tradition de type : fête du feu.",
      "nl": "Las Fallas wordt het best omschreven als: vuurfestival."
    },
    "theme": {
      "en": "fire festival",
      "fr": "fête du feu",
      "nl": "vuurfestival"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q006",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Valencia",
    "question": {
      "en": "Which feature is associated with Las Fallas?",
      "fr": "Quel élément est associé à Las Fallas ?",
      "nl": "Welk element hoort bij Las Fallas?"
    },
    "answers": {
      "en": [
        "burning large sculptures",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "brûler de grandes sculptures",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "grote beelden verbranden",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "burning large sculptures",
      "fr": "brûler de grandes sculptures",
      "nl": "grote beelden verbranden"
    },
    "explanation": {
      "en": "A key element of Las Fallas is burning large sculptures.",
      "fr": "Un élément clé de Las Fallas est : brûler de grandes sculptures.",
      "nl": "Een belangrijk element van Las Fallas is: grote beelden verbranden."
    },
    "theme": {
      "en": "fire festival",
      "fr": "fête du feu",
      "nl": "vuurfestival"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q007",
    "kind": "country",
    "difficulty": "easy",
    "region": "Catalonia",
    "question": {
      "en": "In which country is Castells practised?",
      "fr": "Dans quel pays pratique-t-on Castells ?",
      "nl": "In welk land wordt Castells beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    },
    "explanation": {
      "en": "Castells is linked to Catalonia, Spain.",
      "fr": "Castells est lié à Catalonia, en Espagne.",
      "nl": "Castells is verbonden met Catalonia, in Spanje."
    },
    "theme": {
      "en": "human tower tradition",
      "fr": "tradition de tours humaines",
      "nl": "traditie van menselijke torens"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q008",
    "kind": "type",
    "difficulty": "medium",
    "region": "Catalonia",
    "question": {
      "en": "What type of tradition is Castells?",
      "fr": "Quel type de tradition est Castells ?",
      "nl": "Wat voor soort traditie is Castells?"
    },
    "answers": {
      "en": [
        "human tower tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition de tours humaines",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "traditie van menselijke torens",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "human tower tradition",
      "fr": "tradition de tours humaines",
      "nl": "traditie van menselijke torens"
    },
    "explanation": {
      "en": "Castells is best described as a human tower tradition.",
      "fr": "Castells est plutôt une tradition de type : tradition de tours humaines.",
      "nl": "Castells wordt het best omschreven als: traditie van menselijke torens."
    },
    "theme": {
      "en": "human tower tradition",
      "fr": "tradition de tours humaines",
      "nl": "traditie van menselijke torens"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q009",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Catalonia",
    "question": {
      "en": "Which feature is associated with Castells?",
      "fr": "Quel élément est associé à Castells ?",
      "nl": "Welk element hoort bij Castells?"
    },
    "answers": {
      "en": [
        "building human towers",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "construire des tours humaines",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "menselijke torens bouwen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "building human towers",
      "fr": "construire des tours humaines",
      "nl": "menselijke torens bouwen"
    },
    "explanation": {
      "en": "A key element of Castells is building human towers.",
      "fr": "Un élément clé de Castells est : construire des tours humaines.",
      "nl": "Een belangrijk element van Castells is: menselijke torens bouwen."
    },
    "theme": {
      "en": "human tower tradition",
      "fr": "tradition de tours humaines",
      "nl": "traditie van menselijke torens"
    },
    "country": {
      "en": "Spain",
      "fr": "Espagne",
      "nl": "Spanje"
    }
  },
  {
    "id": "q010",
    "kind": "country",
    "difficulty": "easy",
    "region": "Oostduinkerke",
    "question": {
      "en": "In which country is Horseback shrimp fishing practised?",
      "fr": "Dans quel pays pratique-t-on Horseback shrimp fishing ?",
      "nl": "In welk land wordt Horseback shrimp fishing beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    },
    "explanation": {
      "en": "Horseback shrimp fishing is linked to Oostduinkerke, Belgium.",
      "fr": "Horseback shrimp fishing est lié à Oostduinkerke, en Belgique.",
      "nl": "Horseback shrimp fishing is verbonden met Oostduinkerke, in België."
    },
    "theme": {
      "en": "sea tradition",
      "fr": "tradition maritime",
      "nl": "zeetraditie"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q011",
    "kind": "type",
    "difficulty": "medium",
    "region": "Oostduinkerke",
    "question": {
      "en": "What type of tradition is Horseback shrimp fishing?",
      "fr": "Quel type de tradition est Horseback shrimp fishing ?",
      "nl": "Wat voor soort traditie is Horseback shrimp fishing?"
    },
    "answers": {
      "en": [
        "sea tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition maritime",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "zeetraditie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "sea tradition",
      "fr": "tradition maritime",
      "nl": "zeetraditie"
    },
    "explanation": {
      "en": "Horseback shrimp fishing is best described as a sea tradition.",
      "fr": "Horseback shrimp fishing est plutôt une tradition de type : tradition maritime.",
      "nl": "Horseback shrimp fishing wordt het best omschreven als: zeetraditie."
    },
    "theme": {
      "en": "sea tradition",
      "fr": "tradition maritime",
      "nl": "zeetraditie"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q012",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Oostduinkerke",
    "question": {
      "en": "Which feature is associated with Horseback shrimp fishing?",
      "fr": "Quel élément est associé à Horseback shrimp fishing ?",
      "nl": "Welk element hoort bij Horseback shrimp fishing?"
    },
    "answers": {
      "en": [
        "catching shrimp on horseback",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "pêcher des crevettes à cheval",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "garnalen vissen te paard",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "catching shrimp on horseback",
      "fr": "pêcher des crevettes à cheval",
      "nl": "garnalen vissen te paard"
    },
    "explanation": {
      "en": "A key element of Horseback shrimp fishing is catching shrimp on horseback.",
      "fr": "Un élément clé de Horseback shrimp fishing est : pêcher des crevettes à cheval.",
      "nl": "Een belangrijk element van Horseback shrimp fishing is: garnalen vissen te paard."
    },
    "theme": {
      "en": "sea tradition",
      "fr": "tradition maritime",
      "nl": "zeetraditie"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q013",
    "kind": "country",
    "difficulty": "easy",
    "region": "Binche, Wallonia",
    "question": {
      "en": "In which country is Carnival of Binche practised?",
      "fr": "Dans quel pays pratique-t-on Carnival of Binche ?",
      "nl": "In welk land wordt Carnival of Binche beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    },
    "explanation": {
      "en": "Carnival of Binche is linked to Binche, Wallonia, Belgium.",
      "fr": "Carnival of Binche est lié à Binche, Wallonia, en Belgique.",
      "nl": "Carnival of Binche is verbonden met Binche, Wallonia, in België."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q014",
    "kind": "type",
    "difficulty": "medium",
    "region": "Binche, Wallonia",
    "question": {
      "en": "What type of tradition is Carnival of Binche?",
      "fr": "Quel type de tradition est Carnival of Binche ?",
      "nl": "Wat voor soort traditie is Carnival of Binche?"
    },
    "answers": {
      "en": [
        "carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "explanation": {
      "en": "Carnival of Binche is best described as a carnival.",
      "fr": "Carnival of Binche est plutôt une tradition de type : carnaval.",
      "nl": "Carnival of Binche wordt het best omschreven als: carnaval."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q015",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Binche, Wallonia",
    "question": {
      "en": "Which feature is associated with Carnival of Binche?",
      "fr": "Quel élément est associé à Carnival of Binche ?",
      "nl": "Welk element hoort bij Carnival of Binche?"
    },
    "answers": {
      "en": [
        "Gilles throwing oranges",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "Gilles lançant des oranges",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "Gilles die sinaasappels gooien",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "Gilles throwing oranges",
      "fr": "Gilles lançant des oranges",
      "nl": "Gilles die sinaasappels gooien"
    },
    "explanation": {
      "en": "A key element of Carnival of Binche is Gilles throwing oranges.",
      "fr": "Un élément clé de Carnival of Binche est : Gilles lançant des oranges.",
      "nl": "Een belangrijk element van Carnival of Binche is: Gilles die sinaasappels gooien."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q016",
    "kind": "country",
    "difficulty": "easy",
    "region": "Mons, Wallonia",
    "question": {
      "en": "In which country is Ducasse de Mons practised?",
      "fr": "Dans quel pays pratique-t-on Ducasse de Mons ?",
      "nl": "In welk land wordt Ducasse de Mons beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    },
    "explanation": {
      "en": "Ducasse de Mons is linked to Mons, Wallonia, Belgium.",
      "fr": "Ducasse de Mons est lié à Mons, Wallonia, en Belgique.",
      "nl": "Ducasse de Mons is verbonden met Mons, Wallonia, in België."
    },
    "theme": {
      "en": "dragon festival",
      "fr": "fête du dragon",
      "nl": "drakenfeest"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q017",
    "kind": "type",
    "difficulty": "medium",
    "region": "Mons, Wallonia",
    "question": {
      "en": "What type of tradition is Ducasse de Mons?",
      "fr": "Quel type de tradition est Ducasse de Mons ?",
      "nl": "Wat voor soort traditie is Ducasse de Mons?"
    },
    "answers": {
      "en": [
        "dragon festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête du dragon",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "drakenfeest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "dragon festival",
      "fr": "fête du dragon",
      "nl": "drakenfeest"
    },
    "explanation": {
      "en": "Ducasse de Mons is best described as a dragon festival.",
      "fr": "Ducasse de Mons est plutôt une tradition de type : fête du dragon.",
      "nl": "Ducasse de Mons wordt het best omschreven als: drakenfeest."
    },
    "theme": {
      "en": "dragon festival",
      "fr": "fête du dragon",
      "nl": "drakenfeest"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q018",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Mons, Wallonia",
    "question": {
      "en": "Which feature is associated with Ducasse de Mons?",
      "fr": "Quel élément est associé à Ducasse de Mons ?",
      "nl": "Welk element hoort bij Ducasse de Mons?"
    },
    "answers": {
      "en": [
        "Saint George fighting a dragon",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "Saint Georges combattant un dragon",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "Sint-Joris die tegen een draak vecht",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "Saint George fighting a dragon",
      "fr": "Saint Georges combattant un dragon",
      "nl": "Sint-Joris die tegen een draak vecht"
    },
    "explanation": {
      "en": "A key element of Ducasse de Mons is Saint George fighting a dragon.",
      "fr": "Un élément clé de Ducasse de Mons est : Saint Georges combattant un dragon.",
      "nl": "Een belangrijk element van Ducasse de Mons is: Sint-Joris die tegen een draak vecht."
    },
    "theme": {
      "en": "dragon festival",
      "fr": "fête du dragon",
      "nl": "drakenfeest"
    },
    "country": {
      "en": "Belgium",
      "fr": "Belgique",
      "nl": "België"
    }
  },
  {
    "id": "q019",
    "kind": "country",
    "difficulty": "easy",
    "region": "Bessières",
    "question": {
      "en": "In which country is Giant Omelette practised?",
      "fr": "Dans quel pays pratique-t-on Giant Omelette ?",
      "nl": "In welk land wordt Giant Omelette beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "en": "Giant Omelette is linked to Bessières, France.",
      "fr": "Giant Omelette est lié à Bessières, en France.",
      "nl": "Giant Omelette is verbonden met Bessières, in Frankrijk."
    },
    "theme": {
      "en": "food festival",
      "fr": "fête culinaire",
      "nl": "culinair feest"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q020",
    "kind": "type",
    "difficulty": "medium",
    "region": "Bessières",
    "question": {
      "en": "What type of tradition is Giant Omelette?",
      "fr": "Quel type de tradition est Giant Omelette ?",
      "nl": "Wat voor soort traditie is Giant Omelette?"
    },
    "answers": {
      "en": [
        "food festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête culinaire",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "culinair feest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "food festival",
      "fr": "fête culinaire",
      "nl": "culinair feest"
    },
    "explanation": {
      "en": "Giant Omelette is best described as a food festival.",
      "fr": "Giant Omelette est plutôt une tradition de type : fête culinaire.",
      "nl": "Giant Omelette wordt het best omschreven als: culinair feest."
    },
    "theme": {
      "en": "food festival",
      "fr": "fête culinaire",
      "nl": "culinair feest"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q021",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Bessières",
    "question": {
      "en": "Which feature is associated with Giant Omelette?",
      "fr": "Quel élément est associé à Giant Omelette ?",
      "nl": "Welk element hoort bij Giant Omelette?"
    },
    "answers": {
      "en": [
        "cooking a huge omelette",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "cuisiner une omelette géante",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een reuzenomelet bakken",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "cooking a huge omelette",
      "fr": "cuisiner une omelette géante",
      "nl": "een reuzenomelet bakken"
    },
    "explanation": {
      "en": "A key element of Giant Omelette is cooking a huge omelette.",
      "fr": "Un élément clé de Giant Omelette est : cuisiner une omelette géante.",
      "nl": "Een belangrijk element van Giant Omelette is: een reuzenomelet bakken."
    },
    "theme": {
      "en": "food festival",
      "fr": "fête culinaire",
      "nl": "culinair feest"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q022",
    "kind": "country",
    "difficulty": "easy",
    "region": "Menton",
    "question": {
      "en": "In which country is Lemon Festival practised?",
      "fr": "Dans quel pays pratique-t-on Lemon Festival ?",
      "nl": "In welk land wordt Lemon Festival beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "en": "Lemon Festival is linked to Menton, France.",
      "fr": "Lemon Festival est lié à Menton, en France.",
      "nl": "Lemon Festival is verbonden met Menton, in Frankrijk."
    },
    "theme": {
      "en": "citrus festival",
      "fr": "fête des agrumes",
      "nl": "citrusfestival"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q023",
    "kind": "type",
    "difficulty": "medium",
    "region": "Menton",
    "question": {
      "en": "What type of tradition is Lemon Festival?",
      "fr": "Quel type de tradition est Lemon Festival ?",
      "nl": "Wat voor soort traditie is Lemon Festival?"
    },
    "answers": {
      "en": [
        "citrus festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête des agrumes",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "citrusfestival",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "citrus festival",
      "fr": "fête des agrumes",
      "nl": "citrusfestival"
    },
    "explanation": {
      "en": "Lemon Festival is best described as a citrus festival.",
      "fr": "Lemon Festival est plutôt une tradition de type : fête des agrumes.",
      "nl": "Lemon Festival wordt het best omschreven als: citrusfestival."
    },
    "theme": {
      "en": "citrus festival",
      "fr": "fête des agrumes",
      "nl": "citrusfestival"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q024",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Menton",
    "question": {
      "en": "Which feature is associated with Lemon Festival?",
      "fr": "Quel élément est associé à Lemon Festival ?",
      "nl": "Welk element hoort bij Lemon Festival?"
    },
    "answers": {
      "en": [
        "making giant citrus sculptures",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "créer des sculptures géantes d’agrumes",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "reusachtige citrusbeelden maken",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "making giant citrus sculptures",
      "fr": "créer des sculptures géantes d’agrumes",
      "nl": "reusachtige citrusbeelden maken"
    },
    "explanation": {
      "en": "A key element of Lemon Festival is making giant citrus sculptures.",
      "fr": "Un élément clé de Lemon Festival est : créer des sculptures géantes d’agrumes.",
      "nl": "Een belangrijk element van Lemon Festival is: reusachtige citrusbeelden maken."
    },
    "theme": {
      "en": "citrus festival",
      "fr": "fête des agrumes",
      "nl": "citrusfestival"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q025",
    "kind": "country",
    "difficulty": "easy",
    "region": "Dunkirk",
    "question": {
      "en": "In which country is Dunkirk Carnival practised?",
      "fr": "Dans quel pays pratique-t-on Dunkirk Carnival ?",
      "nl": "In welk land wordt Dunkirk Carnival beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "en": "Dunkirk Carnival is linked to Dunkirk, France.",
      "fr": "Dunkirk Carnival est lié à Dunkirk, en France.",
      "nl": "Dunkirk Carnival is verbonden met Dunkirk, in Frankrijk."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q026",
    "kind": "type",
    "difficulty": "medium",
    "region": "Dunkirk",
    "question": {
      "en": "What type of tradition is Dunkirk Carnival?",
      "fr": "Quel type de tradition est Dunkirk Carnival ?",
      "nl": "Wat voor soort traditie is Dunkirk Carnival?"
    },
    "answers": {
      "en": [
        "carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "explanation": {
      "en": "Dunkirk Carnival is best described as a carnival.",
      "fr": "Dunkirk Carnival est plutôt une tradition de type : carnaval.",
      "nl": "Dunkirk Carnival wordt het best omschreven als: carnaval."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q027",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Dunkirk",
    "question": {
      "en": "Which feature is associated with Dunkirk Carnival?",
      "fr": "Quel élément est associé à Dunkirk Carnival ?",
      "nl": "Welk element hoort bij Dunkirk Carnival?"
    },
    "answers": {
      "en": [
        "throwing herrings from the town hall",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "lancer des harengs depuis l’hôtel de ville",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "haringen gooien vanop het stadhuis",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "throwing herrings from the town hall",
      "fr": "lancer des harengs depuis l’hôtel de ville",
      "nl": "haringen gooien vanop het stadhuis"
    },
    "explanation": {
      "en": "A key element of Dunkirk Carnival is throwing herrings from the town hall.",
      "fr": "Un élément clé de Dunkirk Carnival est : lancer des harengs depuis l’hôtel de ville.",
      "nl": "Een belangrijk element van Dunkirk Carnival is: haringen gooien vanop het stadhuis."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "France",
      "fr": "France",
      "nl": "Frankrijk"
    }
  },
  {
    "id": "q028",
    "kind": "country",
    "difficulty": "easy",
    "region": "Ivrea",
    "question": {
      "en": "In which country is Battle of the Oranges practised?",
      "fr": "Dans quel pays pratique-t-on Battle of the Oranges ?",
      "nl": "In welk land wordt Battle of the Oranges beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    },
    "explanation": {
      "en": "Battle of the Oranges is linked to Ivrea, Italy.",
      "fr": "Battle of the Oranges est lié à Ivrea, en Italie.",
      "nl": "Battle of the Oranges is verbonden met Ivrea, in Italië."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q029",
    "kind": "type",
    "difficulty": "medium",
    "region": "Ivrea",
    "question": {
      "en": "What type of tradition is Battle of the Oranges?",
      "fr": "Quel type de tradition est Battle of the Oranges ?",
      "nl": "Wat voor soort traditie is Battle of the Oranges?"
    },
    "answers": {
      "en": [
        "food fight",
        "fire festival",
        "masked carnival"
      ],
      "fr": [
        "bataille de nourriture",
        "fête du feu",
        "carnaval masqué"
      ],
      "nl": [
        "voedselgevecht",
        "vuurfestival",
        "gemaskerd carnaval"
      ]
    },
    "correctAnswer": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "explanation": {
      "en": "Battle of the Oranges is best described as a food fight.",
      "fr": "Battle of the Oranges est plutôt une tradition de type : bataille de nourriture.",
      "nl": "Battle of the Oranges wordt het best omschreven als: voedselgevecht."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q030",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Ivrea",
    "question": {
      "en": "Which feature is associated with Battle of the Oranges?",
      "fr": "Quel élément est associé à Battle of the Oranges ?",
      "nl": "Welk element hoort bij Battle of the Oranges?"
    },
    "answers": {
      "en": [
        "throwing oranges in teams",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "lancer des oranges en équipes",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "sinaasappels gooien in teams",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "throwing oranges in teams",
      "fr": "lancer des oranges en équipes",
      "nl": "sinaasappels gooien in teams"
    },
    "explanation": {
      "en": "A key element of Battle of the Oranges is throwing oranges in teams.",
      "fr": "Un élément clé de Battle of the Oranges est : lancer des oranges en équipes.",
      "nl": "Een belangrijk element van Battle of the Oranges is: sinaasappels gooien in teams."
    },
    "theme": {
      "en": "food fight",
      "fr": "bataille de nourriture",
      "nl": "voedselgevecht"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q031",
    "kind": "country",
    "difficulty": "easy",
    "region": "Venice",
    "question": {
      "en": "In which country is Venice Carnival practised?",
      "fr": "Dans quel pays pratique-t-on Venice Carnival ?",
      "nl": "In welk land wordt Venice Carnival beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    },
    "explanation": {
      "en": "Venice Carnival is linked to Venice, Italy.",
      "fr": "Venice Carnival est lié à Venice, en Italie.",
      "nl": "Venice Carnival is verbonden met Venice, in Italië."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q032",
    "kind": "type",
    "difficulty": "medium",
    "region": "Venice",
    "question": {
      "en": "What type of tradition is Venice Carnival?",
      "fr": "Quel type de tradition est Venice Carnival ?",
      "nl": "Wat voor soort traditie is Venice Carnival?"
    },
    "answers": {
      "en": [
        "masked carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval masqué",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "gemaskerd carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "explanation": {
      "en": "Venice Carnival is best described as a masked carnival.",
      "fr": "Venice Carnival est plutôt une tradition de type : carnaval masqué.",
      "nl": "Venice Carnival wordt het best omschreven als: gemaskerd carnaval."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q033",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Venice",
    "question": {
      "en": "Which feature is associated with Venice Carnival?",
      "fr": "Quel élément est associé à Venice Carnival ?",
      "nl": "Welk element hoort bij Venice Carnival?"
    },
    "answers": {
      "en": [
        "wearing elaborate masks",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "porter des masques élaborés",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "uitgebreide maskers dragen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "wearing elaborate masks",
      "fr": "porter des masques élaborés",
      "nl": "uitgebreide maskers dragen"
    },
    "explanation": {
      "en": "A key element of Venice Carnival is wearing elaborate masks.",
      "fr": "Un élément clé de Venice Carnival est : porter des masques élaborés.",
      "nl": "Een belangrijk element van Venice Carnival is: uitgebreide maskers dragen."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q034",
    "kind": "country",
    "difficulty": "easy",
    "region": "Siena",
    "question": {
      "en": "In which country is Palio di Siena practised?",
      "fr": "Dans quel pays pratique-t-on Palio di Siena ?",
      "nl": "In welk land wordt Palio di Siena beoefend?"
    },
    "answers": {
      "en": [
        "France",
        "Italy",
        "Spain"
      ],
      "fr": [
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Frankrijk",
        "Italië",
        "Spanje"
      ]
    },
    "correctAnswer": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    },
    "explanation": {
      "en": "Palio di Siena is linked to Siena, Italy.",
      "fr": "Palio di Siena est lié à Siena, en Italie.",
      "nl": "Palio di Siena is verbonden met Siena, in Italië."
    },
    "theme": {
      "en": "horse race",
      "fr": "course de chevaux",
      "nl": "paardenrace"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q035",
    "kind": "type",
    "difficulty": "medium",
    "region": "Siena",
    "question": {
      "en": "What type of tradition is Palio di Siena?",
      "fr": "Quel type de tradition est Palio di Siena ?",
      "nl": "Wat voor soort traditie is Palio di Siena?"
    },
    "answers": {
      "en": [
        "horse race",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "course de chevaux",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "paardenrace",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "horse race",
      "fr": "course de chevaux",
      "nl": "paardenrace"
    },
    "explanation": {
      "en": "Palio di Siena is best described as a horse race.",
      "fr": "Palio di Siena est plutôt une tradition de type : course de chevaux.",
      "nl": "Palio di Siena wordt het best omschreven als: paardenrace."
    },
    "theme": {
      "en": "horse race",
      "fr": "course de chevaux",
      "nl": "paardenrace"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q036",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Siena",
    "question": {
      "en": "Which feature is associated with Palio di Siena?",
      "fr": "Quel élément est associé à Palio di Siena ?",
      "nl": "Welk element hoort bij Palio di Siena?"
    },
    "answers": {
      "en": [
        "a historic race around a square",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "une course historique autour d’une place",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een historische race rond een plein",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "a historic race around a square",
      "fr": "une course historique autour d’une place",
      "nl": "een historische race rond een plein"
    },
    "explanation": {
      "en": "A key element of Palio di Siena is a historic race around a square.",
      "fr": "Un élément clé de Palio di Siena est : une course historique autour d’une place.",
      "nl": "Een belangrijk element van Palio di Siena is: een historische race rond een plein."
    },
    "theme": {
      "en": "horse race",
      "fr": "course de chevaux",
      "nl": "paardenrace"
    },
    "country": {
      "en": "Italy",
      "fr": "Italie",
      "nl": "Italië"
    }
  },
  {
    "id": "q037",
    "kind": "country",
    "difficulty": "easy",
    "region": "Porto",
    "question": {
      "en": "In which country is Festa de São João practised?",
      "fr": "Dans quel pays pratique-t-on Festa de São João ?",
      "nl": "In welk land wordt Festa de São João beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "en": "Festa de São João is linked to Porto, Portugal.",
      "fr": "Festa de São João est lié à Porto, en Portugal.",
      "nl": "Festa de São João is verbonden met Porto, in Portugal."
    },
    "theme": {
      "en": "Saint John festival",
      "fr": "fête de la Saint-Jean",
      "nl": "Sint-Jansfeest"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q038",
    "kind": "type",
    "difficulty": "medium",
    "region": "Porto",
    "question": {
      "en": "What type of tradition is Festa de São João?",
      "fr": "Quel type de tradition est Festa de São João ?",
      "nl": "Wat voor soort traditie is Festa de São João?"
    },
    "answers": {
      "en": [
        "Saint John festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête de la Saint-Jean",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "Sint-Jansfeest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "Saint John festival",
      "fr": "fête de la Saint-Jean",
      "nl": "Sint-Jansfeest"
    },
    "explanation": {
      "en": "Festa de São João is best described as a Saint John festival.",
      "fr": "Festa de São João est plutôt une tradition de type : fête de la Saint-Jean.",
      "nl": "Festa de São João wordt het best omschreven als: Sint-Jansfeest."
    },
    "theme": {
      "en": "Saint John festival",
      "fr": "fête de la Saint-Jean",
      "nl": "Sint-Jansfeest"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q039",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Porto",
    "question": {
      "en": "Which feature is associated with Festa de São João?",
      "fr": "Quel élément est associé à Festa de São João ?",
      "nl": "Welk element hoort bij Festa de São João?"
    },
    "answers": {
      "en": [
        "tapping people with plastic hammers",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "taper gentiment avec des marteaux en plastique",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "mensen aantikken met plastic hamers",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "tapping people with plastic hammers",
      "fr": "taper gentiment avec des marteaux en plastique",
      "nl": "mensen aantikken met plastic hamers"
    },
    "explanation": {
      "en": "A key element of Festa de São João is tapping people with plastic hammers.",
      "fr": "Un élément clé de Festa de São João est : taper gentiment avec des marteaux en plastique.",
      "nl": "Een belangrijk element van Festa de São João is: mensen aantikken met plastic hamers."
    },
    "theme": {
      "en": "Saint John festival",
      "fr": "fête de la Saint-Jean",
      "nl": "Sint-Jansfeest"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q040",
    "kind": "country",
    "difficulty": "easy",
    "region": "Tomar",
    "question": {
      "en": "In which country is Festa dos Tabuleiros practised?",
      "fr": "Dans quel pays pratique-t-on Festa dos Tabuleiros ?",
      "nl": "In welk land wordt Festa dos Tabuleiros beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "en": "Festa dos Tabuleiros is linked to Tomar, Portugal.",
      "fr": "Festa dos Tabuleiros est lié à Tomar, en Portugal.",
      "nl": "Festa dos Tabuleiros is verbonden met Tomar, in Portugal."
    },
    "theme": {
      "en": "procession",
      "fr": "procession",
      "nl": "processie"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q041",
    "kind": "type",
    "difficulty": "medium",
    "region": "Tomar",
    "question": {
      "en": "What type of tradition is Festa dos Tabuleiros?",
      "fr": "Quel type de tradition est Festa dos Tabuleiros ?",
      "nl": "Wat voor soort traditie is Festa dos Tabuleiros?"
    },
    "answers": {
      "en": [
        "procession",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "procession",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "processie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "procession",
      "fr": "procession",
      "nl": "processie"
    },
    "explanation": {
      "en": "Festa dos Tabuleiros is best described as a procession.",
      "fr": "Festa dos Tabuleiros est plutôt une tradition de type : procession.",
      "nl": "Festa dos Tabuleiros wordt het best omschreven als: processie."
    },
    "theme": {
      "en": "procession",
      "fr": "procession",
      "nl": "processie"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q042",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Tomar",
    "question": {
      "en": "Which feature is associated with Festa dos Tabuleiros?",
      "fr": "Quel élément est associé à Festa dos Tabuleiros ?",
      "nl": "Welk element hoort bij Festa dos Tabuleiros?"
    },
    "answers": {
      "en": [
        "carrying tall trays of bread and flowers",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "porter de hauts plateaux de pain et de fleurs",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "hoge schalen met brood en bloemen dragen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "carrying tall trays of bread and flowers",
      "fr": "porter de hauts plateaux de pain et de fleurs",
      "nl": "hoge schalen met brood en bloemen dragen"
    },
    "explanation": {
      "en": "A key element of Festa dos Tabuleiros is carrying tall trays of bread and flowers.",
      "fr": "Un élément clé de Festa dos Tabuleiros est : porter de hauts plateaux de pain et de fleurs.",
      "nl": "Een belangrijk element van Festa dos Tabuleiros is: hoge schalen met brood en bloemen dragen."
    },
    "theme": {
      "en": "procession",
      "fr": "procession",
      "nl": "processie"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q043",
    "kind": "country",
    "difficulty": "easy",
    "region": "Podence",
    "question": {
      "en": "In which country is Caretos de Podence practised?",
      "fr": "Dans quel pays pratique-t-on Caretos de Podence ?",
      "nl": "In welk land wordt Caretos de Podence beoefend?"
    },
    "answers": {
      "en": [
        "Spain",
        "Belgium",
        "Portugal"
      ],
      "fr": [
        "Espagne",
        "Belgique",
        "Portugal"
      ],
      "nl": [
        "Spanje",
        "België",
        "Portugal"
      ]
    },
    "correctAnswer": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    },
    "explanation": {
      "en": "Caretos de Podence is linked to Podence, Portugal.",
      "fr": "Caretos de Podence est lié à Podence, en Portugal.",
      "nl": "Caretos de Podence is verbonden met Podence, in Portugal."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q044",
    "kind": "type",
    "difficulty": "medium",
    "region": "Podence",
    "question": {
      "en": "What type of tradition is Caretos de Podence?",
      "fr": "Quel type de tradition est Caretos de Podence ?",
      "nl": "Wat voor soort traditie is Caretos de Podence?"
    },
    "answers": {
      "en": [
        "masked carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval masqué",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "gemaskerd carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "explanation": {
      "en": "Caretos de Podence is best described as a masked carnival.",
      "fr": "Caretos de Podence est plutôt une tradition de type : carnaval masqué.",
      "nl": "Caretos de Podence wordt het best omschreven als: gemaskerd carnaval."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q045",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Podence",
    "question": {
      "en": "Which feature is associated with Caretos de Podence?",
      "fr": "Quel élément est associé à Caretos de Podence ?",
      "nl": "Welk element hoort bij Caretos de Podence?"
    },
    "answers": {
      "en": [
        "wearing colourful fringed costumes",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "porter des costumes colorés à franges",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "kleurrijke kostuums met franjes dragen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "wearing colourful fringed costumes",
      "fr": "porter des costumes colorés à franges",
      "nl": "kleurrijke kostuums met franjes dragen"
    },
    "explanation": {
      "en": "A key element of Caretos de Podence is wearing colourful fringed costumes.",
      "fr": "Un élément clé de Caretos de Podence est : porter des costumes colorés à franges.",
      "nl": "Een belangrijk element van Caretos de Podence is: kleurrijke kostuums met franjes dragen."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Portugal",
      "fr": "Portugal",
      "nl": "Portugal"
    }
  },
  {
    "id": "q046",
    "kind": "country",
    "difficulty": "easy",
    "region": "Several Dutch towns",
    "question": {
      "en": "In which country is Bloemencorso practised?",
      "fr": "Dans quel pays pratique-t-on Bloemencorso ?",
      "nl": "In welk land wordt Bloemencorso beoefend?"
    },
    "answers": {
      "en": [
        "Netherlands",
        "Belgium",
        "Germany"
      ],
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    },
    "explanation": {
      "en": "Bloemencorso is linked to Several Dutch towns, Netherlands.",
      "fr": "Bloemencorso est lié à Several Dutch towns, en Pays-Bas.",
      "nl": "Bloemencorso is verbonden met Several Dutch towns, in Nederland."
    },
    "theme": {
      "en": "flower parade",
      "fr": "parade florale",
      "nl": "bloemenparade"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q047",
    "kind": "type",
    "difficulty": "medium",
    "region": "Several Dutch towns",
    "question": {
      "en": "What type of tradition is Bloemencorso?",
      "fr": "Quel type de tradition est Bloemencorso ?",
      "nl": "Wat voor soort traditie is Bloemencorso?"
    },
    "answers": {
      "en": [
        "flower parade",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "parade florale",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "bloemenparade",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "flower parade",
      "fr": "parade florale",
      "nl": "bloemenparade"
    },
    "explanation": {
      "en": "Bloemencorso is best described as a flower parade.",
      "fr": "Bloemencorso est plutôt une tradition de type : parade florale.",
      "nl": "Bloemencorso wordt het best omschreven als: bloemenparade."
    },
    "theme": {
      "en": "flower parade",
      "fr": "parade florale",
      "nl": "bloemenparade"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q048",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Several Dutch towns",
    "question": {
      "en": "Which feature is associated with Bloemencorso?",
      "fr": "Quel élément est associé à Bloemencorso ?",
      "nl": "Welk element hoort bij Bloemencorso?"
    },
    "answers": {
      "en": [
        "parading floats covered with flowers",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "faire défiler des chars couverts de fleurs",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "wagens met bloemen laten paraderen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "parading floats covered with flowers",
      "fr": "faire défiler des chars couverts de fleurs",
      "nl": "wagens met bloemen laten paraderen"
    },
    "explanation": {
      "en": "A key element of Bloemencorso is parading floats covered with flowers.",
      "fr": "Un élément clé de Bloemencorso est : faire défiler des chars couverts de fleurs.",
      "nl": "Een belangrijk element van Bloemencorso is: wagens met bloemen laten paraderen."
    },
    "theme": {
      "en": "flower parade",
      "fr": "parade florale",
      "nl": "bloemenparade"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q049",
    "kind": "country",
    "difficulty": "easy",
    "region": "Alkmaar and Gouda",
    "question": {
      "en": "In which country is Dutch cheese markets practised?",
      "fr": "Dans quel pays pratique-t-on Dutch cheese markets ?",
      "nl": "In welk land wordt Dutch cheese markets beoefend?"
    },
    "answers": {
      "en": [
        "Netherlands",
        "Belgium",
        "Germany"
      ],
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    },
    "explanation": {
      "en": "Dutch cheese markets is linked to Alkmaar and Gouda, Netherlands.",
      "fr": "Dutch cheese markets est lié à Alkmaar and Gouda, en Pays-Bas.",
      "nl": "Dutch cheese markets is verbonden met Alkmaar and Gouda, in Nederland."
    },
    "theme": {
      "en": "cheese market",
      "fr": "marché au fromage",
      "nl": "kaasmarkt"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q050",
    "kind": "type",
    "difficulty": "medium",
    "region": "Alkmaar and Gouda",
    "question": {
      "en": "What type of tradition is Dutch cheese markets?",
      "fr": "Quel type de tradition est Dutch cheese markets ?",
      "nl": "Wat voor soort traditie is Dutch cheese markets?"
    },
    "answers": {
      "en": [
        "cheese market",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "marché au fromage",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "kaasmarkt",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "cheese market",
      "fr": "marché au fromage",
      "nl": "kaasmarkt"
    },
    "explanation": {
      "en": "Dutch cheese markets is best described as a cheese market.",
      "fr": "Dutch cheese markets est plutôt une tradition de type : marché au fromage.",
      "nl": "Dutch cheese markets wordt het best omschreven als: kaasmarkt."
    },
    "theme": {
      "en": "cheese market",
      "fr": "marché au fromage",
      "nl": "kaasmarkt"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q051",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Alkmaar and Gouda",
    "question": {
      "en": "Which feature is associated with Dutch cheese markets?",
      "fr": "Quel élément est associé à Dutch cheese markets ?",
      "nl": "Welk element hoort bij Dutch cheese markets?"
    },
    "answers": {
      "en": [
        "weighing and carrying cheese",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "peser et porter du fromage",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "kaas wegen en dragen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "weighing and carrying cheese",
      "fr": "peser et porter du fromage",
      "nl": "kaas wegen en dragen"
    },
    "explanation": {
      "en": "A key element of Dutch cheese markets is weighing and carrying cheese.",
      "fr": "Un élément clé de Dutch cheese markets est : peser et porter du fromage.",
      "nl": "Een belangrijk element van Dutch cheese markets is: kaas wegen en dragen."
    },
    "theme": {
      "en": "cheese market",
      "fr": "marché au fromage",
      "nl": "kaasmarkt"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q052",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is King’s Day practised?",
      "fr": "Dans quel pays pratique-t-on King’s Day ?",
      "nl": "In welk land wordt King’s Day beoefend?"
    },
    "answers": {
      "en": [
        "Netherlands",
        "Belgium",
        "Germany"
      ],
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    },
    "explanation": {
      "en": "King’s Day is linked to Nationwide, Netherlands.",
      "fr": "King’s Day est lié à Nationwide, en Pays-Bas.",
      "nl": "King’s Day is verbonden met Nationwide, in Nederland."
    },
    "theme": {
      "en": "royal celebration",
      "fr": "fête royale",
      "nl": "koninklijk feest"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q053",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is King’s Day?",
      "fr": "Quel type de tradition est King’s Day ?",
      "nl": "Wat voor soort traditie is King’s Day?"
    },
    "answers": {
      "en": [
        "royal celebration",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête royale",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "koninklijk feest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "royal celebration",
      "fr": "fête royale",
      "nl": "koninklijk feest"
    },
    "explanation": {
      "en": "King’s Day is best described as a royal celebration.",
      "fr": "King’s Day est plutôt une tradition de type : fête royale.",
      "nl": "King’s Day wordt het best omschreven als: koninklijk feest."
    },
    "theme": {
      "en": "royal celebration",
      "fr": "fête royale",
      "nl": "koninklijk feest"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q054",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with King’s Day?",
      "fr": "Quel élément est associé à King’s Day ?",
      "nl": "Welk element hoort bij King’s Day?"
    },
    "answers": {
      "en": [
        "wearing orange in the streets",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "porter de l’orange dans les rues",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "oranje dragen op straat",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "wearing orange in the streets",
      "fr": "porter de l’orange dans les rues",
      "nl": "oranje dragen op straat"
    },
    "explanation": {
      "en": "A key element of King’s Day is wearing orange in the streets.",
      "fr": "Un élément clé de King’s Day est : porter de l’orange dans les rues.",
      "nl": "Een belangrijk element van King’s Day is: oranje dragen op straat."
    },
    "theme": {
      "en": "royal celebration",
      "fr": "fête royale",
      "nl": "koninklijk feest"
    },
    "country": {
      "en": "Netherlands",
      "fr": "Pays-Bas",
      "nl": "Nederland"
    }
  },
  {
    "id": "q055",
    "kind": "country",
    "difficulty": "easy",
    "region": "Bavaria",
    "question": {
      "en": "In which country is Oktoberfest practised?",
      "fr": "Dans quel pays pratique-t-on Oktoberfest ?",
      "nl": "In welk land wordt Oktoberfest beoefend?"
    },
    "answers": {
      "en": [
        "Netherlands",
        "Belgium",
        "Germany"
      ],
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    },
    "explanation": {
      "en": "Oktoberfest is linked to Bavaria, Germany.",
      "fr": "Oktoberfest est lié à Bavaria, en Allemagne.",
      "nl": "Oktoberfest is verbonden met Bavaria, in Duitsland."
    },
    "theme": {
      "en": "beer festival",
      "fr": "fête de la bière",
      "nl": "bierfeest"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q056",
    "kind": "type",
    "difficulty": "medium",
    "region": "Bavaria",
    "question": {
      "en": "What type of tradition is Oktoberfest?",
      "fr": "Quel type de tradition est Oktoberfest ?",
      "nl": "Wat voor soort traditie is Oktoberfest?"
    },
    "answers": {
      "en": [
        "beer festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête de la bière",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "bierfeest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "beer festival",
      "fr": "fête de la bière",
      "nl": "bierfeest"
    },
    "explanation": {
      "en": "Oktoberfest is best described as a beer festival.",
      "fr": "Oktoberfest est plutôt une tradition de type : fête de la bière.",
      "nl": "Oktoberfest wordt het best omschreven als: bierfeest."
    },
    "theme": {
      "en": "beer festival",
      "fr": "fête de la bière",
      "nl": "bierfeest"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q057",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Bavaria",
    "question": {
      "en": "Which feature is associated with Oktoberfest?",
      "fr": "Quel élément est associé à Oktoberfest ?",
      "nl": "Welk element hoort bij Oktoberfest?"
    },
    "answers": {
      "en": [
        "large beer tents and Bavarian clothing",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "de grandes tentes à bière et des tenues bavaroises",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "grote biertenten en Beierse kleding",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "large beer tents and Bavarian clothing",
      "fr": "de grandes tentes à bière et des tenues bavaroises",
      "nl": "grote biertenten en Beierse kleding"
    },
    "explanation": {
      "en": "A key element of Oktoberfest is large beer tents and Bavarian clothing.",
      "fr": "Un élément clé de Oktoberfest est : de grandes tentes à bière et des tenues bavaroises.",
      "nl": "Een belangrijk element van Oktoberfest is: grote biertenten en Beierse kleding."
    },
    "theme": {
      "en": "beer festival",
      "fr": "fête de la bière",
      "nl": "bierfeest"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q058",
    "kind": "country",
    "difficulty": "easy",
    "region": "Harz Mountains",
    "question": {
      "en": "In which country is Walpurgis Night practised?",
      "fr": "Dans quel pays pratique-t-on Walpurgis Night ?",
      "nl": "In welk land wordt Walpurgis Night beoefend?"
    },
    "answers": {
      "en": [
        "Netherlands",
        "Belgium",
        "Germany"
      ],
      "fr": [
        "Pays-Bas",
        "Belgique",
        "Allemagne"
      ],
      "nl": [
        "Nederland",
        "België",
        "Duitsland"
      ]
    },
    "correctAnswer": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    },
    "explanation": {
      "en": "Walpurgis Night is linked to Harz Mountains, Germany.",
      "fr": "Walpurgis Night est lié à Harz Mountains, en Allemagne.",
      "nl": "Walpurgis Night is verbonden met Harz Mountains, in Duitsland."
    },
    "theme": {
      "en": "folklore night",
      "fr": "nuit folklorique",
      "nl": "folklorenacht"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q059",
    "kind": "type",
    "difficulty": "medium",
    "region": "Harz Mountains",
    "question": {
      "en": "What type of tradition is Walpurgis Night?",
      "fr": "Quel type de tradition est Walpurgis Night ?",
      "nl": "Wat voor soort traditie is Walpurgis Night?"
    },
    "answers": {
      "en": [
        "folklore night",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "nuit folklorique",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "folklorenacht",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "folklore night",
      "fr": "nuit folklorique",
      "nl": "folklorenacht"
    },
    "explanation": {
      "en": "Walpurgis Night is best described as a folklore night.",
      "fr": "Walpurgis Night est plutôt une tradition de type : nuit folklorique.",
      "nl": "Walpurgis Night wordt het best omschreven als: folklorenacht."
    },
    "theme": {
      "en": "folklore night",
      "fr": "nuit folklorique",
      "nl": "folklorenacht"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q060",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Harz Mountains",
    "question": {
      "en": "Which feature is associated with Walpurgis Night?",
      "fr": "Quel élément est associé à Walpurgis Night ?",
      "nl": "Welk element hoort bij Walpurgis Night?"
    },
    "answers": {
      "en": [
        "bonfires and witch folklore",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des feux de joie et le folklore des sorcières",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "vreugdevuren en heksenfolklore",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "bonfires and witch folklore",
      "fr": "des feux de joie et le folklore des sorcières",
      "nl": "vreugdevuren en heksenfolklore"
    },
    "explanation": {
      "en": "A key element of Walpurgis Night is bonfires and witch folklore.",
      "fr": "Un élément clé de Walpurgis Night est : des feux de joie et le folklore des sorcières.",
      "nl": "Een belangrijk element van Walpurgis Night is: vreugdevuren en heksenfolklore."
    },
    "theme": {
      "en": "folklore night",
      "fr": "nuit folklorique",
      "nl": "folklorenacht"
    },
    "country": {
      "en": "Germany",
      "fr": "Allemagne",
      "nl": "Duitsland"
    }
  },
  {
    "id": "q061",
    "kind": "country",
    "difficulty": "easy",
    "region": "Alpine regions",
    "question": {
      "en": "In which country is Krampus parades practised?",
      "fr": "Dans quel pays pratique-t-on Krampus parades ?",
      "nl": "In welk land wordt Krampus parades beoefend?"
    },
    "answers": {
      "en": [
        "Austria",
        "Germany",
        "Slovenia"
      ],
      "fr": [
        "Autriche",
        "Allemagne",
        "Slovénie"
      ],
      "nl": [
        "Oostenrijk",
        "Duitsland",
        "Slovenië"
      ]
    },
    "correctAnswer": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    },
    "explanation": {
      "en": "Krampus parades is linked to Alpine regions, Austria.",
      "fr": "Krampus parades est lié à Alpine regions, en Autriche.",
      "nl": "Krampus parades is verbonden met Alpine regions, in Oostenrijk."
    },
    "theme": {
      "en": "winter folklore",
      "fr": "folklore hivernal",
      "nl": "winterfolklore"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q062",
    "kind": "type",
    "difficulty": "medium",
    "region": "Alpine regions",
    "question": {
      "en": "What type of tradition is Krampus parades?",
      "fr": "Quel type de tradition est Krampus parades ?",
      "nl": "Wat voor soort traditie is Krampus parades?"
    },
    "answers": {
      "en": [
        "winter folklore",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "folklore hivernal",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "winterfolklore",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "winter folklore",
      "fr": "folklore hivernal",
      "nl": "winterfolklore"
    },
    "explanation": {
      "en": "Krampus parades is best described as a winter folklore.",
      "fr": "Krampus parades est plutôt une tradition de type : folklore hivernal.",
      "nl": "Krampus parades wordt het best omschreven als: winterfolklore."
    },
    "theme": {
      "en": "winter folklore",
      "fr": "folklore hivernal",
      "nl": "winterfolklore"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q063",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Alpine regions",
    "question": {
      "en": "Which feature is associated with Krampus parades?",
      "fr": "Quel élément est associé à Krampus parades ?",
      "nl": "Welk element hoort bij Krampus parades?"
    },
    "answers": {
      "en": [
        "frightening horned figures",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des figures cornues effrayantes",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "angstaanjagende gehoornde figuren",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "frightening horned figures",
      "fr": "des figures cornues effrayantes",
      "nl": "angstaanjagende gehoornde figuren"
    },
    "explanation": {
      "en": "A key element of Krampus parades is frightening horned figures.",
      "fr": "Un élément clé de Krampus parades est : des figures cornues effrayantes.",
      "nl": "Een belangrijk element van Krampus parades is: angstaanjagende gehoornde figuren."
    },
    "theme": {
      "en": "winter folklore",
      "fr": "folklore hivernal",
      "nl": "winterfolklore"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q064",
    "kind": "country",
    "difficulty": "easy",
    "region": "Vienna",
    "question": {
      "en": "In which country is Vienna Ball Season practised?",
      "fr": "Dans quel pays pratique-t-on Vienna Ball Season ?",
      "nl": "In welk land wordt Vienna Ball Season beoefend?"
    },
    "answers": {
      "en": [
        "Austria",
        "Germany",
        "Slovenia"
      ],
      "fr": [
        "Autriche",
        "Allemagne",
        "Slovénie"
      ],
      "nl": [
        "Oostenrijk",
        "Duitsland",
        "Slovenië"
      ]
    },
    "correctAnswer": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    },
    "explanation": {
      "en": "Vienna Ball Season is linked to Vienna, Austria.",
      "fr": "Vienna Ball Season est lié à Vienna, en Autriche.",
      "nl": "Vienna Ball Season is verbonden met Vienna, in Oostenrijk."
    },
    "theme": {
      "en": "formal dance tradition",
      "fr": "tradition de bals",
      "nl": "baltraditie"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q065",
    "kind": "type",
    "difficulty": "medium",
    "region": "Vienna",
    "question": {
      "en": "What type of tradition is Vienna Ball Season?",
      "fr": "Quel type de tradition est Vienna Ball Season ?",
      "nl": "Wat voor soort traditie is Vienna Ball Season?"
    },
    "answers": {
      "en": [
        "formal dance tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition de bals",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "baltraditie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "formal dance tradition",
      "fr": "tradition de bals",
      "nl": "baltraditie"
    },
    "explanation": {
      "en": "Vienna Ball Season is best described as a formal dance tradition.",
      "fr": "Vienna Ball Season est plutôt une tradition de type : tradition de bals.",
      "nl": "Vienna Ball Season wordt het best omschreven als: baltraditie."
    },
    "theme": {
      "en": "formal dance tradition",
      "fr": "tradition de bals",
      "nl": "baltraditie"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q066",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Vienna",
    "question": {
      "en": "Which feature is associated with Vienna Ball Season?",
      "fr": "Quel élément est associé à Vienna Ball Season ?",
      "nl": "Welk element hoort bij Vienna Ball Season?"
    },
    "answers": {
      "en": [
        "formal winter balls",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des bals d’hiver formels",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "formele winterbals",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "formal winter balls",
      "fr": "des bals d’hiver formels",
      "nl": "formele winterbals"
    },
    "explanation": {
      "en": "A key element of Vienna Ball Season is formal winter balls.",
      "fr": "Un élément clé de Vienna Ball Season est : des bals d’hiver formels.",
      "nl": "Een belangrijk element van Vienna Ball Season is: formele winterbals."
    },
    "theme": {
      "en": "formal dance tradition",
      "fr": "tradition de bals",
      "nl": "baltraditie"
    },
    "country": {
      "en": "Austria",
      "fr": "Autriche",
      "nl": "Oostenrijk"
    }
  },
  {
    "id": "q067",
    "kind": "country",
    "difficulty": "easy",
    "region": "County Kerry",
    "question": {
      "en": "In which country is Puck Fair practised?",
      "fr": "Dans quel pays pratique-t-on Puck Fair ?",
      "nl": "In welk land wordt Puck Fair beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    },
    "explanation": {
      "en": "Puck Fair is linked to County Kerry, Ireland.",
      "fr": "Puck Fair est lié à County Kerry, en Irlande.",
      "nl": "Puck Fair is verbonden met County Kerry, in Ierland."
    },
    "theme": {
      "en": "animal festival",
      "fr": "fête animale",
      "nl": "dierenfeest"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q068",
    "kind": "type",
    "difficulty": "medium",
    "region": "County Kerry",
    "question": {
      "en": "What type of tradition is Puck Fair?",
      "fr": "Quel type de tradition est Puck Fair ?",
      "nl": "Wat voor soort traditie is Puck Fair?"
    },
    "answers": {
      "en": [
        "animal festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête animale",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "dierenfeest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "animal festival",
      "fr": "fête animale",
      "nl": "dierenfeest"
    },
    "explanation": {
      "en": "Puck Fair is best described as a animal festival.",
      "fr": "Puck Fair est plutôt une tradition de type : fête animale.",
      "nl": "Puck Fair wordt het best omschreven als: dierenfeest."
    },
    "theme": {
      "en": "animal festival",
      "fr": "fête animale",
      "nl": "dierenfeest"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q069",
    "kind": "feature",
    "difficulty": "medium",
    "region": "County Kerry",
    "question": {
      "en": "Which feature is associated with Puck Fair?",
      "fr": "Quel élément est associé à Puck Fair ?",
      "nl": "Welk element hoort bij Puck Fair?"
    },
    "answers": {
      "en": [
        "crowning a goat",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "couronner une chèvre",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een geit kronen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "crowning a goat",
      "fr": "couronner une chèvre",
      "nl": "een geit kronen"
    },
    "explanation": {
      "en": "A key element of Puck Fair is crowning a goat.",
      "fr": "Un élément clé de Puck Fair est : couronner une chèvre.",
      "nl": "Een belangrijk element van Puck Fair is: een geit kronen."
    },
    "theme": {
      "en": "animal festival",
      "fr": "fête animale",
      "nl": "dierenfeest"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q070",
    "kind": "country",
    "difficulty": "easy",
    "region": "Various regions",
    "question": {
      "en": "In which country is Wren Day practised?",
      "fr": "Dans quel pays pratique-t-on Wren Day ?",
      "nl": "In welk land wordt Wren Day beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    },
    "explanation": {
      "en": "Wren Day is linked to Various regions, Ireland.",
      "fr": "Wren Day est lié à Various regions, en Irlande.",
      "nl": "Wren Day is verbonden met Various regions, in Ierland."
    },
    "theme": {
      "en": "winter tradition",
      "fr": "tradition hivernale",
      "nl": "wintertraditie"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q071",
    "kind": "type",
    "difficulty": "medium",
    "region": "Various regions",
    "question": {
      "en": "What type of tradition is Wren Day?",
      "fr": "Quel type de tradition est Wren Day ?",
      "nl": "Wat voor soort traditie is Wren Day?"
    },
    "answers": {
      "en": [
        "winter tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition hivernale",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "wintertraditie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "winter tradition",
      "fr": "tradition hivernale",
      "nl": "wintertraditie"
    },
    "explanation": {
      "en": "Wren Day is best described as a winter tradition.",
      "fr": "Wren Day est plutôt une tradition de type : tradition hivernale.",
      "nl": "Wren Day wordt het best omschreven als: wintertraditie."
    },
    "theme": {
      "en": "winter tradition",
      "fr": "tradition hivernale",
      "nl": "wintertraditie"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q072",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Various regions",
    "question": {
      "en": "Which feature is associated with Wren Day?",
      "fr": "Quel élément est associé à Wren Day ?",
      "nl": "Welk element hoort bij Wren Day?"
    },
    "answers": {
      "en": [
        "processions linked to a small bird",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des processions liées à un petit oiseau",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "optochten rond een kleine vogel",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "processions linked to a small bird",
      "fr": "des processions liées à un petit oiseau",
      "nl": "optochten rond een kleine vogel"
    },
    "explanation": {
      "en": "A key element of Wren Day is processions linked to a small bird.",
      "fr": "Un élément clé de Wren Day est : des processions liées à un petit oiseau.",
      "nl": "Een belangrijk element van Wren Day is: optochten rond een kleine vogel."
    },
    "theme": {
      "en": "winter tradition",
      "fr": "tradition hivernale",
      "nl": "wintertraditie"
    },
    "country": {
      "en": "Ireland",
      "fr": "Irlande",
      "nl": "Ierland"
    }
  },
  {
    "id": "q073",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Fastelavn practised?",
      "fr": "Dans quel pays pratique-t-on Fastelavn ?",
      "nl": "In welk land wordt Fastelavn beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    },
    "explanation": {
      "en": "Fastelavn is linked to Nationwide, Denmark.",
      "fr": "Fastelavn est lié à Nationwide, en Danemark.",
      "nl": "Fastelavn is verbonden met Nationwide, in Denemarken."
    },
    "theme": {
      "en": "carnival-like custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalesk gebruik"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q074",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Fastelavn?",
      "fr": "Quel type de tradition est Fastelavn ?",
      "nl": "Wat voor soort traditie is Fastelavn?"
    },
    "answers": {
      "en": [
        "carnival-like custom",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "coutume de carnaval",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "carnavalesk gebruik",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "carnival-like custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalesk gebruik"
    },
    "explanation": {
      "en": "Fastelavn is best described as a carnival-like custom.",
      "fr": "Fastelavn est plutôt une tradition de type : coutume de carnaval.",
      "nl": "Fastelavn wordt het best omschreven als: carnavalesk gebruik."
    },
    "theme": {
      "en": "carnival-like custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalesk gebruik"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q075",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Fastelavn?",
      "fr": "Quel élément est associé à Fastelavn ?",
      "nl": "Welk element hoort bij Fastelavn?"
    },
    "answers": {
      "en": [
        "children hitting a decorated barrel",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des enfants frappant un tonneau décoré",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "kinderen die op een versierde ton slaan",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "children hitting a decorated barrel",
      "fr": "des enfants frappant un tonneau décoré",
      "nl": "kinderen die op een versierde ton slaan"
    },
    "explanation": {
      "en": "A key element of Fastelavn is children hitting a decorated barrel.",
      "fr": "Un élément clé de Fastelavn est : des enfants frappant un tonneau décoré.",
      "nl": "Een belangrijk element van Fastelavn is: kinderen die op een versierde ton slaan."
    },
    "theme": {
      "en": "carnival-like custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalesk gebruik"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q076",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Sankt Hans practised?",
      "fr": "Dans quel pays pratique-t-on Sankt Hans ?",
      "nl": "In welk land wordt Sankt Hans beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    },
    "explanation": {
      "en": "Sankt Hans is linked to Nationwide, Denmark.",
      "fr": "Sankt Hans est lié à Nationwide, en Danemark.",
      "nl": "Sankt Hans is verbonden met Nationwide, in Denemarken."
    },
    "theme": {
      "en": "midsummer fire tradition",
      "fr": "tradition de feu de la Saint-Jean",
      "nl": "midzomervuurtraditie"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q077",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Sankt Hans?",
      "fr": "Quel type de tradition est Sankt Hans ?",
      "nl": "Wat voor soort traditie is Sankt Hans?"
    },
    "answers": {
      "en": [
        "midsummer fire tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition de feu de la Saint-Jean",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "midzomervuurtraditie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "midsummer fire tradition",
      "fr": "tradition de feu de la Saint-Jean",
      "nl": "midzomervuurtraditie"
    },
    "explanation": {
      "en": "Sankt Hans is best described as a midsummer fire tradition.",
      "fr": "Sankt Hans est plutôt une tradition de type : tradition de feu de la Saint-Jean.",
      "nl": "Sankt Hans wordt het best omschreven als: midzomervuurtraditie."
    },
    "theme": {
      "en": "midsummer fire tradition",
      "fr": "tradition de feu de la Saint-Jean",
      "nl": "midzomervuurtraditie"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q078",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Sankt Hans?",
      "fr": "Quel élément est associé à Sankt Hans ?",
      "nl": "Welk element hoort bij Sankt Hans?"
    },
    "answers": {
      "en": [
        "lighting midsummer bonfires",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "allumer des feux de joie de la Saint-Jean",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "midzomervuren aansteken",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "lighting midsummer bonfires",
      "fr": "allumer des feux de joie de la Saint-Jean",
      "nl": "midzomervuren aansteken"
    },
    "explanation": {
      "en": "A key element of Sankt Hans is lighting midsummer bonfires.",
      "fr": "Un élément clé de Sankt Hans est : allumer des feux de joie de la Saint-Jean.",
      "nl": "Een belangrijk element van Sankt Hans is: midzomervuren aansteken."
    },
    "theme": {
      "en": "midsummer fire tradition",
      "fr": "tradition de feu de la Saint-Jean",
      "nl": "midzomervuurtraditie"
    },
    "country": {
      "en": "Denmark",
      "fr": "Danemark",
      "nl": "Denemarken"
    }
  },
  {
    "id": "q079",
    "kind": "country",
    "difficulty": "easy",
    "region": "Gävle",
    "question": {
      "en": "In which country is Gävle Goat practised?",
      "fr": "Dans quel pays pratique-t-on Gävle Goat ?",
      "nl": "In welk land wordt Gävle Goat beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    },
    "explanation": {
      "en": "Gävle Goat is linked to Gävle, Sweden.",
      "fr": "Gävle Goat est lié à Gävle, en Suède.",
      "nl": "Gävle Goat is verbonden met Gävle, in Zweden."
    },
    "theme": {
      "en": "Christmas tradition",
      "fr": "tradition de Noël",
      "nl": "kersttraditie"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q080",
    "kind": "type",
    "difficulty": "medium",
    "region": "Gävle",
    "question": {
      "en": "What type of tradition is Gävle Goat?",
      "fr": "Quel type de tradition est Gävle Goat ?",
      "nl": "Wat voor soort traditie is Gävle Goat?"
    },
    "answers": {
      "en": [
        "Christmas tradition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "tradition de Noël",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "kersttraditie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "Christmas tradition",
      "fr": "tradition de Noël",
      "nl": "kersttraditie"
    },
    "explanation": {
      "en": "Gävle Goat is best described as a Christmas tradition.",
      "fr": "Gävle Goat est plutôt une tradition de type : tradition de Noël.",
      "nl": "Gävle Goat wordt het best omschreven als: kersttraditie."
    },
    "theme": {
      "en": "Christmas tradition",
      "fr": "tradition de Noël",
      "nl": "kersttraditie"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q081",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Gävle",
    "question": {
      "en": "Which feature is associated with Gävle Goat?",
      "fr": "Quel élément est associé à Gävle Goat ?",
      "nl": "Welk element hoort bij Gävle Goat?"
    },
    "answers": {
      "en": [
        "building a giant straw goat",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "construire une chèvre géante en paille",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een reusachtige strogeit bouwen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "building a giant straw goat",
      "fr": "construire une chèvre géante en paille",
      "nl": "een reusachtige strogeit bouwen"
    },
    "explanation": {
      "en": "A key element of Gävle Goat is building a giant straw goat.",
      "fr": "Un élément clé de Gävle Goat est : construire une chèvre géante en paille.",
      "nl": "Een belangrijk element van Gävle Goat is: een reusachtige strogeit bouwen."
    },
    "theme": {
      "en": "Christmas tradition",
      "fr": "tradition de Noël",
      "nl": "kersttraditie"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q082",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Saint Lucia practised?",
      "fr": "Dans quel pays pratique-t-on Saint Lucia ?",
      "nl": "In welk land wordt Saint Lucia beoefend?"
    },
    "answers": {
      "en": [
        "Ireland",
        "Denmark",
        "Sweden"
      ],
      "fr": [
        "Irlande",
        "Danemark",
        "Suède"
      ],
      "nl": [
        "Ierland",
        "Denemarken",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    },
    "explanation": {
      "en": "Saint Lucia is linked to Nationwide, Sweden.",
      "fr": "Saint Lucia est lié à Nationwide, en Suède.",
      "nl": "Saint Lucia is verbonden met Nationwide, in Zweden."
    },
    "theme": {
      "en": "light festival",
      "fr": "fête de la lumière",
      "nl": "lichtfeest"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q083",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Saint Lucia?",
      "fr": "Quel type de tradition est Saint Lucia ?",
      "nl": "Wat voor soort traditie is Saint Lucia?"
    },
    "answers": {
      "en": [
        "light festival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "fête de la lumière",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "lichtfeest",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "light festival",
      "fr": "fête de la lumière",
      "nl": "lichtfeest"
    },
    "explanation": {
      "en": "Saint Lucia is best described as a light festival.",
      "fr": "Saint Lucia est plutôt une tradition de type : fête de la lumière.",
      "nl": "Saint Lucia wordt het best omschreven als: lichtfeest."
    },
    "theme": {
      "en": "light festival",
      "fr": "fête de la lumière",
      "nl": "lichtfeest"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q084",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Saint Lucia?",
      "fr": "Quel élément est associé à Saint Lucia ?",
      "nl": "Welk element hoort bij Saint Lucia?"
    },
    "answers": {
      "en": [
        "candlelit processions in white robes",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des processions aux chandelles en robes blanches",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "kaarsenprocessies in witte gewaden",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "candlelit processions in white robes",
      "fr": "des processions aux chandelles en robes blanches",
      "nl": "kaarsenprocessies in witte gewaden"
    },
    "explanation": {
      "en": "A key element of Saint Lucia is candlelit processions in white robes.",
      "fr": "Un élément clé de Saint Lucia est : des processions aux chandelles en robes blanches.",
      "nl": "Een belangrijk element van Saint Lucia is: kaarsenprocessies in witte gewaden."
    },
    "theme": {
      "en": "light festival",
      "fr": "fête de la lumière",
      "nl": "lichtfeest"
    },
    "country": {
      "en": "Sweden",
      "fr": "Suède",
      "nl": "Zweden"
    }
  },
  {
    "id": "q085",
    "kind": "country",
    "difficulty": "easy",
    "region": "Oulu",
    "question": {
      "en": "In which country is Air Guitar World Championships practised?",
      "fr": "Dans quel pays pratique-t-on Air Guitar World Championships ?",
      "nl": "In welk land wordt Air Guitar World Championships beoefend?"
    },
    "answers": {
      "en": [
        "Finland",
        "Estonia",
        "Sweden"
      ],
      "fr": [
        "Finlande",
        "Estonie",
        "Suède"
      ],
      "nl": [
        "Finland",
        "Estland",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    },
    "explanation": {
      "en": "Air Guitar World Championships is linked to Oulu, Finland.",
      "fr": "Air Guitar World Championships est lié à Oulu, en Finlande.",
      "nl": "Air Guitar World Championships is verbonden met Oulu, in Finland."
    },
    "theme": {
      "en": "music competition",
      "fr": "concours musical",
      "nl": "muziekwedstrijd"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q086",
    "kind": "type",
    "difficulty": "medium",
    "region": "Oulu",
    "question": {
      "en": "What type of tradition is Air Guitar World Championships?",
      "fr": "Quel type de tradition est Air Guitar World Championships ?",
      "nl": "Wat voor soort traditie is Air Guitar World Championships?"
    },
    "answers": {
      "en": [
        "music competition",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "concours musical",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "muziekwedstrijd",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "music competition",
      "fr": "concours musical",
      "nl": "muziekwedstrijd"
    },
    "explanation": {
      "en": "Air Guitar World Championships is best described as a music competition.",
      "fr": "Air Guitar World Championships est plutôt une tradition de type : concours musical.",
      "nl": "Air Guitar World Championships wordt het best omschreven als: muziekwedstrijd."
    },
    "theme": {
      "en": "music competition",
      "fr": "concours musical",
      "nl": "muziekwedstrijd"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q087",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Oulu",
    "question": {
      "en": "Which feature is associated with Air Guitar World Championships?",
      "fr": "Quel élément est associé à Air Guitar World Championships ?",
      "nl": "Welk element hoort bij Air Guitar World Championships?"
    },
    "answers": {
      "en": [
        "performing with imaginary guitars",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "jouer avec des guitares imaginaires",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "optreden met denkbeeldige gitaren",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "performing with imaginary guitars",
      "fr": "jouer avec des guitares imaginaires",
      "nl": "optreden met denkbeeldige gitaren"
    },
    "explanation": {
      "en": "A key element of Air Guitar World Championships is performing with imaginary guitars.",
      "fr": "Un élément clé de Air Guitar World Championships est : jouer avec des guitares imaginaires.",
      "nl": "Een belangrijk element van Air Guitar World Championships is: optreden met denkbeeldige gitaren."
    },
    "theme": {
      "en": "music competition",
      "fr": "concours musical",
      "nl": "muziekwedstrijd"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q088",
    "kind": "country",
    "difficulty": "easy",
    "region": "Sonkajärvi",
    "question": {
      "en": "In which country is Wife Carrying practised?",
      "fr": "Dans quel pays pratique-t-on Wife Carrying ?",
      "nl": "In welk land wordt Wife Carrying beoefend?"
    },
    "answers": {
      "en": [
        "Finland",
        "Estonia",
        "Sweden"
      ],
      "fr": [
        "Finlande",
        "Estonie",
        "Suède"
      ],
      "nl": [
        "Finland",
        "Estland",
        "Zweden"
      ]
    },
    "correctAnswer": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    },
    "explanation": {
      "en": "Wife Carrying is linked to Sonkajärvi, Finland.",
      "fr": "Wife Carrying est lié à Sonkajärvi, en Finlande.",
      "nl": "Wife Carrying is verbonden met Sonkajärvi, in Finland."
    },
    "theme": {
      "en": "unusual sport",
      "fr": "sport insolite",
      "nl": "ongebruikelijke sport"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q089",
    "kind": "type",
    "difficulty": "medium",
    "region": "Sonkajärvi",
    "question": {
      "en": "What type of tradition is Wife Carrying?",
      "fr": "Quel type de tradition est Wife Carrying ?",
      "nl": "Wat voor soort traditie is Wife Carrying?"
    },
    "answers": {
      "en": [
        "unusual sport",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "sport insolite",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "ongebruikelijke sport",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "unusual sport",
      "fr": "sport insolite",
      "nl": "ongebruikelijke sport"
    },
    "explanation": {
      "en": "Wife Carrying is best described as a unusual sport.",
      "fr": "Wife Carrying est plutôt une tradition de type : sport insolite.",
      "nl": "Wife Carrying wordt het best omschreven als: ongebruikelijke sport."
    },
    "theme": {
      "en": "unusual sport",
      "fr": "sport insolite",
      "nl": "ongebruikelijke sport"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q090",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Sonkajärvi",
    "question": {
      "en": "Which feature is associated with Wife Carrying?",
      "fr": "Quel élément est associé à Wife Carrying ?",
      "nl": "Welk element hoort bij Wife Carrying?"
    },
    "answers": {
      "en": [
        "carrying a partner through obstacles",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "porter un partenaire à travers des obstacles",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een partner door hindernissen dragen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "carrying a partner through obstacles",
      "fr": "porter un partenaire à travers des obstacles",
      "nl": "een partner door hindernissen dragen"
    },
    "explanation": {
      "en": "A key element of Wife Carrying is carrying a partner through obstacles.",
      "fr": "Un élément clé de Wife Carrying est : porter un partenaire à travers des obstacles.",
      "nl": "Een belangrijk element van Wife Carrying is: een partner door hindernissen dragen."
    },
    "theme": {
      "en": "unusual sport",
      "fr": "sport insolite",
      "nl": "ongebruikelijke sport"
    },
    "country": {
      "en": "Finland",
      "fr": "Finlande",
      "nl": "Finland"
    }
  },
  {
    "id": "q091",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Śmigus-Dyngus practised?",
      "fr": "Dans quel pays pratique-t-on Śmigus-Dyngus ?",
      "nl": "In welk land wordt Śmigus-Dyngus beoefend?"
    },
    "answers": {
      "en": [
        "Poland",
        "Czechia",
        "Slovakia"
      ],
      "fr": [
        "Pologne",
        "Tchéquie",
        "Slovaquie"
      ],
      "nl": [
        "Polen",
        "Tsjechië",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    },
    "explanation": {
      "en": "Śmigus-Dyngus is linked to Nationwide, Poland.",
      "fr": "Śmigus-Dyngus est lié à Nationwide, en Pologne.",
      "nl": "Śmigus-Dyngus is verbonden met Nationwide, in Polen."
    },
    "theme": {
      "en": "Easter custom",
      "fr": "coutume de Pâques",
      "nl": "paasgebruik"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q092",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Śmigus-Dyngus?",
      "fr": "Quel type de tradition est Śmigus-Dyngus ?",
      "nl": "Wat voor soort traditie is Śmigus-Dyngus?"
    },
    "answers": {
      "en": [
        "Easter custom",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "coutume de Pâques",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "paasgebruik",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "Easter custom",
      "fr": "coutume de Pâques",
      "nl": "paasgebruik"
    },
    "explanation": {
      "en": "Śmigus-Dyngus is best described as a Easter custom.",
      "fr": "Śmigus-Dyngus est plutôt une tradition de type : coutume de Pâques.",
      "nl": "Śmigus-Dyngus wordt het best omschreven als: paasgebruik."
    },
    "theme": {
      "en": "Easter custom",
      "fr": "coutume de Pâques",
      "nl": "paasgebruik"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q093",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Śmigus-Dyngus?",
      "fr": "Quel élément est associé à Śmigus-Dyngus ?",
      "nl": "Welk element hoort bij Śmigus-Dyngus?"
    },
    "answers": {
      "en": [
        "splashing water on Easter Monday",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "s’asperger d’eau le lundi de Pâques",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "water gooien op paasmaandag",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "splashing water on Easter Monday",
      "fr": "s’asperger d’eau le lundi de Pâques",
      "nl": "water gooien op paasmaandag"
    },
    "explanation": {
      "en": "A key element of Śmigus-Dyngus is splashing water on Easter Monday.",
      "fr": "Un élément clé de Śmigus-Dyngus est : s’asperger d’eau le lundi de Pâques.",
      "nl": "Een belangrijk element van Śmigus-Dyngus is: water gooien op paasmaandag."
    },
    "theme": {
      "en": "Easter custom",
      "fr": "coutume de Pâques",
      "nl": "paasgebruik"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q094",
    "kind": "country",
    "difficulty": "easy",
    "region": "Kraków",
    "question": {
      "en": "In which country is Kraków Szopki practised?",
      "fr": "Dans quel pays pratique-t-on Kraków Szopki ?",
      "nl": "In welk land wordt Kraków Szopki beoefend?"
    },
    "answers": {
      "en": [
        "Poland",
        "Czechia",
        "Slovakia"
      ],
      "fr": [
        "Pologne",
        "Tchéquie",
        "Slovaquie"
      ],
      "nl": [
        "Polen",
        "Tsjechië",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    },
    "explanation": {
      "en": "Kraków Szopki is linked to Kraków, Poland.",
      "fr": "Kraków Szopki est lié à Kraków, en Pologne.",
      "nl": "Kraków Szopki is verbonden met Kraków, in Polen."
    },
    "theme": {
      "en": "nativity craft",
      "fr": "artisanat de crèche",
      "nl": "kerststalambacht"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q095",
    "kind": "type",
    "difficulty": "medium",
    "region": "Kraków",
    "question": {
      "en": "What type of tradition is Kraków Szopki?",
      "fr": "Quel type de tradition est Kraków Szopki ?",
      "nl": "Wat voor soort traditie is Kraków Szopki?"
    },
    "answers": {
      "en": [
        "nativity craft",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "artisanat de crèche",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "kerststalambacht",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "nativity craft",
      "fr": "artisanat de crèche",
      "nl": "kerststalambacht"
    },
    "explanation": {
      "en": "Kraków Szopki is best described as a nativity craft.",
      "fr": "Kraków Szopki est plutôt une tradition de type : artisanat de crèche.",
      "nl": "Kraków Szopki wordt het best omschreven als: kerststalambacht."
    },
    "theme": {
      "en": "nativity craft",
      "fr": "artisanat de crèche",
      "nl": "kerststalambacht"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q096",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Kraków",
    "question": {
      "en": "Which feature is associated with Kraków Szopki?",
      "fr": "Quel élément est associé à Kraków Szopki ?",
      "nl": "Welk element hoort bij Kraków Szopki?"
    },
    "answers": {
      "en": [
        "making decorative nativity scenes",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "créer des crèches décoratives",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "decoratieve kerststallen maken",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "making decorative nativity scenes",
      "fr": "créer des crèches décoratives",
      "nl": "decoratieve kerststallen maken"
    },
    "explanation": {
      "en": "A key element of Kraków Szopki is making decorative nativity scenes.",
      "fr": "Un élément clé de Kraków Szopki est : créer des crèches décoratives.",
      "nl": "Een belangrijk element van Kraków Szopki is: decoratieve kerststallen maken."
    },
    "theme": {
      "en": "nativity craft",
      "fr": "artisanat de crèche",
      "nl": "kerststalambacht"
    },
    "country": {
      "en": "Poland",
      "fr": "Pologne",
      "nl": "Polen"
    }
  },
  {
    "id": "q097",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Kraslice practised?",
      "fr": "Dans quel pays pratique-t-on Kraslice ?",
      "nl": "In welk land wordt Kraslice beoefend?"
    },
    "answers": {
      "en": [
        "Poland",
        "Czechia",
        "Slovakia"
      ],
      "fr": [
        "Pologne",
        "Tchéquie",
        "Slovaquie"
      ],
      "nl": [
        "Polen",
        "Tsjechië",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    },
    "explanation": {
      "en": "Kraslice is linked to Nationwide, Czechia.",
      "fr": "Kraslice est lié à Nationwide, en Tchéquie.",
      "nl": "Kraslice is verbonden met Nationwide, in Tsjechië."
    },
    "theme": {
      "en": "Easter craft",
      "fr": "artisanat de Pâques",
      "nl": "paasambacht"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q098",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Kraslice?",
      "fr": "Quel type de tradition est Kraslice ?",
      "nl": "Wat voor soort traditie is Kraslice?"
    },
    "answers": {
      "en": [
        "Easter craft",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "artisanat de Pâques",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "paasambacht",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "Easter craft",
      "fr": "artisanat de Pâques",
      "nl": "paasambacht"
    },
    "explanation": {
      "en": "Kraslice is best described as a Easter craft.",
      "fr": "Kraslice est plutôt une tradition de type : artisanat de Pâques.",
      "nl": "Kraslice wordt het best omschreven als: paasambacht."
    },
    "theme": {
      "en": "Easter craft",
      "fr": "artisanat de Pâques",
      "nl": "paasambacht"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q099",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Kraslice?",
      "fr": "Quel élément est associé à Kraslice ?",
      "nl": "Welk element hoort bij Kraslice?"
    },
    "answers": {
      "en": [
        "decorating Easter eggs",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "décorer des œufs de Pâques",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "paaseieren versieren",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "decorating Easter eggs",
      "fr": "décorer des œufs de Pâques",
      "nl": "paaseieren versieren"
    },
    "explanation": {
      "en": "A key element of Kraslice is decorating Easter eggs.",
      "fr": "Un élément clé de Kraslice est : décorer des œufs de Pâques.",
      "nl": "Een belangrijk element van Kraslice is: paaseieren versieren."
    },
    "theme": {
      "en": "Easter craft",
      "fr": "artisanat de Pâques",
      "nl": "paasambacht"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q100",
    "kind": "country",
    "difficulty": "easy",
    "region": "Moravia",
    "question": {
      "en": "In which country is Ride of the Kings practised?",
      "fr": "Dans quel pays pratique-t-on Ride of the Kings ?",
      "nl": "In welk land wordt Ride of the Kings beoefend?"
    },
    "answers": {
      "en": [
        "Poland",
        "Czechia",
        "Slovakia"
      ],
      "fr": [
        "Pologne",
        "Tchéquie",
        "Slovaquie"
      ],
      "nl": [
        "Polen",
        "Tsjechië",
        "Slowakije"
      ]
    },
    "correctAnswer": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    },
    "explanation": {
      "en": "Ride of the Kings is linked to Moravia, Czechia.",
      "fr": "Ride of the Kings est lié à Moravia, en Tchéquie.",
      "nl": "Ride of the Kings is verbonden met Moravia, in Tsjechië."
    },
    "theme": {
      "en": "folk procession",
      "fr": "procession folklorique",
      "nl": "folkloristische processie"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q101",
    "kind": "type",
    "difficulty": "medium",
    "region": "Moravia",
    "question": {
      "en": "What type of tradition is Ride of the Kings?",
      "fr": "Quel type de tradition est Ride of the Kings ?",
      "nl": "Wat voor soort traditie is Ride of the Kings?"
    },
    "answers": {
      "en": [
        "folk procession",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "procession folklorique",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "folkloristische processie",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "folk procession",
      "fr": "procession folklorique",
      "nl": "folkloristische processie"
    },
    "explanation": {
      "en": "Ride of the Kings is best described as a folk procession.",
      "fr": "Ride of the Kings est plutôt une tradition de type : procession folklorique.",
      "nl": "Ride of the Kings wordt het best omschreven als: folkloristische processie."
    },
    "theme": {
      "en": "folk procession",
      "fr": "procession folklorique",
      "nl": "folkloristische processie"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q102",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Moravia",
    "question": {
      "en": "Which feature is associated with Ride of the Kings?",
      "fr": "Quel élément est associé à Ride of the Kings ?",
      "nl": "Welk element hoort bij Ride of the Kings?"
    },
    "answers": {
      "en": [
        "a decorated horseback procession",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "une procession décorée à cheval",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "een versierde processie te paard",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "a decorated horseback procession",
      "fr": "une procession décorée à cheval",
      "nl": "een versierde processie te paard"
    },
    "explanation": {
      "en": "A key element of Ride of the Kings is a decorated horseback procession.",
      "fr": "Un élément clé de Ride of the Kings est : une procession décorée à cheval.",
      "nl": "Een belangrijk element van Ride of the Kings is: een versierde processie te paard."
    },
    "theme": {
      "en": "folk procession",
      "fr": "procession folklorique",
      "nl": "folkloristische processie"
    },
    "country": {
      "en": "Czechia",
      "fr": "Tchéquie",
      "nl": "Tsjechië"
    }
  },
  {
    "id": "q103",
    "kind": "country",
    "difficulty": "easy",
    "region": "Mohács",
    "question": {
      "en": "In which country is Busójárás practised?",
      "fr": "Dans quel pays pratique-t-on Busójárás ?",
      "nl": "In welk land wordt Busójárás beoefend?"
    },
    "answers": {
      "en": [
        "Hungary",
        "Slovenia",
        "Croatia"
      ],
      "fr": [
        "Hongrie",
        "Slovénie",
        "Croatie"
      ],
      "nl": [
        "Hongarije",
        "Slovenië",
        "Kroatië"
      ]
    },
    "correctAnswer": {
      "en": "Hungary",
      "fr": "Hongrie",
      "nl": "Hongarije"
    },
    "explanation": {
      "en": "Busójárás is linked to Mohács, Hungary.",
      "fr": "Busójárás est lié à Mohács, en Hongrie.",
      "nl": "Busójárás is verbonden met Mohács, in Hongarije."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Hungary",
      "fr": "Hongrie",
      "nl": "Hongarije"
    }
  },
  {
    "id": "q104",
    "kind": "type",
    "difficulty": "medium",
    "region": "Mohács",
    "question": {
      "en": "What type of tradition is Busójárás?",
      "fr": "Quel type de tradition est Busójárás ?",
      "nl": "Wat voor soort traditie is Busójárás?"
    },
    "answers": {
      "en": [
        "masked carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval masqué",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "gemaskerd carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "explanation": {
      "en": "Busójárás is best described as a masked carnival.",
      "fr": "Busójárás est plutôt une tradition de type : carnaval masqué.",
      "nl": "Busójárás wordt het best omschreven als: gemaskerd carnaval."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Hungary",
      "fr": "Hongrie",
      "nl": "Hongarije"
    }
  },
  {
    "id": "q105",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Mohács",
    "question": {
      "en": "Which feature is associated with Busójárás?",
      "fr": "Quel élément est associé à Busójárás ?",
      "nl": "Welk element hoort bij Busójárás?"
    },
    "answers": {
      "en": [
        "winter-chasing masked figures",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des figures masquées chassant l’hiver",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "gemaskerde figuren die de winter verdrijven",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "winter-chasing masked figures",
      "fr": "des figures masquées chassant l’hiver",
      "nl": "gemaskerde figuren die de winter verdrijven"
    },
    "explanation": {
      "en": "A key element of Busójárás is winter-chasing masked figures.",
      "fr": "Un élément clé de Busójárás est : des figures masquées chassant l’hiver.",
      "nl": "Een belangrijk element van Busójárás is: gemaskerde figuren die de winter verdrijven."
    },
    "theme": {
      "en": "masked carnival",
      "fr": "carnaval masqué",
      "nl": "gemaskerd carnaval"
    },
    "country": {
      "en": "Hungary",
      "fr": "Hongrie",
      "nl": "Hongarije"
    }
  },
  {
    "id": "q106",
    "kind": "country",
    "difficulty": "easy",
    "region": "Ptuj",
    "question": {
      "en": "In which country is Kurentovanje practised?",
      "fr": "Dans quel pays pratique-t-on Kurentovanje ?",
      "nl": "In welk land wordt Kurentovanje beoefend?"
    },
    "answers": {
      "en": [
        "Austria",
        "Germany",
        "Slovenia"
      ],
      "fr": [
        "Autriche",
        "Allemagne",
        "Slovénie"
      ],
      "nl": [
        "Oostenrijk",
        "Duitsland",
        "Slovenië"
      ]
    },
    "correctAnswer": {
      "en": "Slovenia",
      "fr": "Slovénie",
      "nl": "Slovenië"
    },
    "explanation": {
      "en": "Kurentovanje is linked to Ptuj, Slovenia.",
      "fr": "Kurentovanje est lié à Ptuj, en Slovénie.",
      "nl": "Kurentovanje is verbonden met Ptuj, in Slovenië."
    },
    "theme": {
      "en": "Shrovetide carnival",
      "fr": "carnaval de mardi gras",
      "nl": "vastenavondcarnaval"
    },
    "country": {
      "en": "Slovenia",
      "fr": "Slovénie",
      "nl": "Slovenië"
    }
  },
  {
    "id": "q107",
    "kind": "type",
    "difficulty": "medium",
    "region": "Ptuj",
    "question": {
      "en": "What type of tradition is Kurentovanje?",
      "fr": "Quel type de tradition est Kurentovanje ?",
      "nl": "Wat voor soort traditie is Kurentovanje?"
    },
    "answers": {
      "en": [
        "Shrovetide carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval de mardi gras",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "vastenavondcarnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "Shrovetide carnival",
      "fr": "carnaval de mardi gras",
      "nl": "vastenavondcarnaval"
    },
    "explanation": {
      "en": "Kurentovanje is best described as a Shrovetide carnival.",
      "fr": "Kurentovanje est plutôt une tradition de type : carnaval de mardi gras.",
      "nl": "Kurentovanje wordt het best omschreven als: vastenavondcarnaval."
    },
    "theme": {
      "en": "Shrovetide carnival",
      "fr": "carnaval de mardi gras",
      "nl": "vastenavondcarnaval"
    },
    "country": {
      "en": "Slovenia",
      "fr": "Slovénie",
      "nl": "Slovenië"
    }
  },
  {
    "id": "q108",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Ptuj",
    "question": {
      "en": "Which feature is associated with Kurentovanje?",
      "fr": "Quel élément est associé à Kurentovanje ?",
      "nl": "Welk element hoort bij Kurentovanje?"
    },
    "answers": {
      "en": [
        "shaggy costumes and bells",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des costumes velus et des cloches",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "harige kostuums en bellen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "shaggy costumes and bells",
      "fr": "des costumes velus et des cloches",
      "nl": "harige kostuums en bellen"
    },
    "explanation": {
      "en": "A key element of Kurentovanje is shaggy costumes and bells.",
      "fr": "Un élément clé de Kurentovanje est : des costumes velus et des cloches.",
      "nl": "Een belangrijk element van Kurentovanje is: harige kostuums en bellen."
    },
    "theme": {
      "en": "Shrovetide carnival",
      "fr": "carnaval de mardi gras",
      "nl": "vastenavondcarnaval"
    },
    "country": {
      "en": "Slovenia",
      "fr": "Slovénie",
      "nl": "Slovenië"
    }
  },
  {
    "id": "q109",
    "kind": "country",
    "difficulty": "easy",
    "region": "Rijeka",
    "question": {
      "en": "In which country is Rijeka Carnival practised?",
      "fr": "Dans quel pays pratique-t-on Rijeka Carnival ?",
      "nl": "In welk land wordt Rijeka Carnival beoefend?"
    },
    "answers": {
      "en": [
        "Hungary",
        "Slovenia",
        "Croatia"
      ],
      "fr": [
        "Hongrie",
        "Slovénie",
        "Croatie"
      ],
      "nl": [
        "Hongarije",
        "Slovenië",
        "Kroatië"
      ]
    },
    "correctAnswer": {
      "en": "Croatia",
      "fr": "Croatie",
      "nl": "Kroatië"
    },
    "explanation": {
      "en": "Rijeka Carnival is linked to Rijeka, Croatia.",
      "fr": "Rijeka Carnival est lié à Rijeka, en Croatie.",
      "nl": "Rijeka Carnival is verbonden met Rijeka, in Kroatië."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Croatia",
      "fr": "Croatie",
      "nl": "Kroatië"
    }
  },
  {
    "id": "q110",
    "kind": "type",
    "difficulty": "medium",
    "region": "Rijeka",
    "question": {
      "en": "What type of tradition is Rijeka Carnival?",
      "fr": "Quel type de tradition est Rijeka Carnival ?",
      "nl": "Wat voor soort traditie is Rijeka Carnival?"
    },
    "answers": {
      "en": [
        "carnival",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "carnaval",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "carnaval",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "explanation": {
      "en": "Rijeka Carnival is best described as a carnival.",
      "fr": "Rijeka Carnival est plutôt une tradition de type : carnaval.",
      "nl": "Rijeka Carnival wordt het best omschreven als: carnaval."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Croatia",
      "fr": "Croatie",
      "nl": "Kroatië"
    }
  },
  {
    "id": "q111",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Rijeka",
    "question": {
      "en": "Which feature is associated with Rijeka Carnival?",
      "fr": "Quel élément est associé à Rijeka Carnival ?",
      "nl": "Welk element hoort bij Rijeka Carnival?"
    },
    "answers": {
      "en": [
        "masked parades and bell-ringing figures",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des parades masquées et des sonneurs de cloches",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "gemaskerde optochten en bellenluiders",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "masked parades and bell-ringing figures",
      "fr": "des parades masquées et des sonneurs de cloches",
      "nl": "gemaskerde optochten en bellenluiders"
    },
    "explanation": {
      "en": "A key element of Rijeka Carnival is masked parades and bell-ringing figures.",
      "fr": "Un élément clé de Rijeka Carnival est : des parades masquées et des sonneurs de cloches.",
      "nl": "Een belangrijk element van Rijeka Carnival is: gemaskerde optochten en bellenluiders."
    },
    "theme": {
      "en": "carnival",
      "fr": "carnaval",
      "nl": "carnaval"
    },
    "country": {
      "en": "Croatia",
      "fr": "Croatie",
      "nl": "Kroatië"
    }
  },
  {
    "id": "q112",
    "kind": "country",
    "difficulty": "easy",
    "region": "Rural regions",
    "question": {
      "en": "In which country is Kukeri practised?",
      "fr": "Dans quel pays pratique-t-on Kukeri ?",
      "nl": "In welk land wordt Kukeri beoefend?"
    },
    "answers": {
      "en": [
        "Bulgaria",
        "Romania",
        "Greece"
      ],
      "fr": [
        "Bulgarie",
        "Roumanie",
        "Grèce"
      ],
      "nl": [
        "Bulgarije",
        "Roemenië",
        "Griekenland"
      ]
    },
    "correctAnswer": {
      "en": "Bulgaria",
      "fr": "Bulgarie",
      "nl": "Bulgarije"
    },
    "explanation": {
      "en": "Kukeri is linked to Rural regions, Bulgaria.",
      "fr": "Kukeri est lié à Rural regions, en Bulgarie.",
      "nl": "Kukeri is verbonden met Rural regions, in Bulgarije."
    },
    "theme": {
      "en": "masked ritual",
      "fr": "rituel masqué",
      "nl": "gemaskerd ritueel"
    },
    "country": {
      "en": "Bulgaria",
      "fr": "Bulgarie",
      "nl": "Bulgarije"
    }
  },
  {
    "id": "q113",
    "kind": "type",
    "difficulty": "medium",
    "region": "Rural regions",
    "question": {
      "en": "What type of tradition is Kukeri?",
      "fr": "Quel type de tradition est Kukeri ?",
      "nl": "Wat voor soort traditie is Kukeri?"
    },
    "answers": {
      "en": [
        "masked ritual",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "rituel masqué",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "gemaskerd ritueel",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "masked ritual",
      "fr": "rituel masqué",
      "nl": "gemaskerd ritueel"
    },
    "explanation": {
      "en": "Kukeri is best described as a masked ritual.",
      "fr": "Kukeri est plutôt une tradition de type : rituel masqué.",
      "nl": "Kukeri wordt het best omschreven als: gemaskerd ritueel."
    },
    "theme": {
      "en": "masked ritual",
      "fr": "rituel masqué",
      "nl": "gemaskerd ritueel"
    },
    "country": {
      "en": "Bulgaria",
      "fr": "Bulgarie",
      "nl": "Bulgarije"
    }
  },
  {
    "id": "q114",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Rural regions",
    "question": {
      "en": "Which feature is associated with Kukeri?",
      "fr": "Quel élément est associé à Kukeri ?",
      "nl": "Welk element hoort bij Kukeri?"
    },
    "answers": {
      "en": [
        "large bells and scary masks",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "de grandes cloches et des masques effrayants",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "grote bellen en enge maskers",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "large bells and scary masks",
      "fr": "de grandes cloches et des masques effrayants",
      "nl": "grote bellen en enge maskers"
    },
    "explanation": {
      "en": "A key element of Kukeri is large bells and scary masks.",
      "fr": "Un élément clé de Kukeri est : de grandes cloches et des masques effrayants.",
      "nl": "Een belangrijk element van Kukeri is: grote bellen en enge maskers."
    },
    "theme": {
      "en": "masked ritual",
      "fr": "rituel masqué",
      "nl": "gemaskerd ritueel"
    },
    "country": {
      "en": "Bulgaria",
      "fr": "Bulgarie",
      "nl": "Bulgarije"
    }
  },
  {
    "id": "q115",
    "kind": "country",
    "difficulty": "easy",
    "region": "Nationwide",
    "question": {
      "en": "In which country is Mărțișor practised?",
      "fr": "Dans quel pays pratique-t-on Mărțișor ?",
      "nl": "In welk land wordt Mărțișor beoefend?"
    },
    "answers": {
      "en": [
        "Bulgaria",
        "Romania",
        "Greece"
      ],
      "fr": [
        "Bulgarie",
        "Roumanie",
        "Grèce"
      ],
      "nl": [
        "Bulgarije",
        "Roemenië",
        "Griekenland"
      ]
    },
    "correctAnswer": {
      "en": "Romania",
      "fr": "Roumanie",
      "nl": "Roemenië"
    },
    "explanation": {
      "en": "Mărțișor is linked to Nationwide, Romania.",
      "fr": "Mărțișor est lié à Nationwide, en Roumanie.",
      "nl": "Mărțișor is verbonden met Nationwide, in Roemenië."
    },
    "theme": {
      "en": "spring custom",
      "fr": "coutume du printemps",
      "nl": "lentegebruik"
    },
    "country": {
      "en": "Romania",
      "fr": "Roumanie",
      "nl": "Roemenië"
    }
  },
  {
    "id": "q116",
    "kind": "type",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "What type of tradition is Mărțișor?",
      "fr": "Quel type de tradition est Mărțișor ?",
      "nl": "Wat voor soort traditie is Mărțișor?"
    },
    "answers": {
      "en": [
        "spring custom",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "coutume du printemps",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "lentegebruik",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "spring custom",
      "fr": "coutume du printemps",
      "nl": "lentegebruik"
    },
    "explanation": {
      "en": "Mărțișor is best described as a spring custom.",
      "fr": "Mărțișor est plutôt une tradition de type : coutume du printemps.",
      "nl": "Mărțișor wordt het best omschreven als: lentegebruik."
    },
    "theme": {
      "en": "spring custom",
      "fr": "coutume du printemps",
      "nl": "lentegebruik"
    },
    "country": {
      "en": "Romania",
      "fr": "Roumanie",
      "nl": "Roemenië"
    }
  },
  {
    "id": "q117",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Nationwide",
    "question": {
      "en": "Which feature is associated with Mărțișor?",
      "fr": "Quel élément est associé à Mărțișor ?",
      "nl": "Welk element hoort bij Mărțișor?"
    },
    "answers": {
      "en": [
        "red-and-white spring tokens",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "des porte-bonheur rouges et blancs du printemps",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "rood-witte lentesymbolen",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "red-and-white spring tokens",
      "fr": "des porte-bonheur rouges et blancs du printemps",
      "nl": "rood-witte lentesymbolen"
    },
    "explanation": {
      "en": "A key element of Mărțișor is red-and-white spring tokens.",
      "fr": "Un élément clé de Mărțișor est : des porte-bonheur rouges et blancs du printemps.",
      "nl": "Een belangrijk element van Mărțișor is: rood-witte lentesymbolen."
    },
    "theme": {
      "en": "spring custom",
      "fr": "coutume du printemps",
      "nl": "lentegebruik"
    },
    "country": {
      "en": "Romania",
      "fr": "Roumanie",
      "nl": "Roemenië"
    }
  },
  {
    "id": "q118",
    "kind": "country",
    "difficulty": "easy",
    "region": "Galaxidi",
    "question": {
      "en": "In which country is Galaxidi Flour War practised?",
      "fr": "Dans quel pays pratique-t-on Galaxidi Flour War ?",
      "nl": "In welk land wordt Galaxidi Flour War beoefend?"
    },
    "answers": {
      "en": [
        "Bulgaria",
        "Romania",
        "Greece"
      ],
      "fr": [
        "Bulgarie",
        "Roumanie",
        "Grèce"
      ],
      "nl": [
        "Bulgarije",
        "Roemenië",
        "Griekenland"
      ]
    },
    "correctAnswer": {
      "en": "Greece",
      "fr": "Grèce",
      "nl": "Griekenland"
    },
    "explanation": {
      "en": "Galaxidi Flour War is linked to Galaxidi, Greece.",
      "fr": "Galaxidi Flour War est lié à Galaxidi, en Grèce.",
      "nl": "Galaxidi Flour War is verbonden met Galaxidi, in Griekenland."
    },
    "theme": {
      "en": "carnival custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalsgebruik"
    },
    "country": {
      "en": "Greece",
      "fr": "Grèce",
      "nl": "Griekenland"
    }
  },
  {
    "id": "q119",
    "kind": "type",
    "difficulty": "medium",
    "region": "Galaxidi",
    "question": {
      "en": "What type of tradition is Galaxidi Flour War?",
      "fr": "Quel type de tradition est Galaxidi Flour War ?",
      "nl": "Wat voor soort traditie is Galaxidi Flour War?"
    },
    "answers": {
      "en": [
        "carnival custom",
        "food fight",
        "fire festival"
      ],
      "fr": [
        "coutume de carnaval",
        "bataille de nourriture",
        "fête du feu"
      ],
      "nl": [
        "carnavalsgebruik",
        "voedselgevecht",
        "vuurfestival"
      ]
    },
    "correctAnswer": {
      "en": "carnival custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalsgebruik"
    },
    "explanation": {
      "en": "Galaxidi Flour War is best described as a carnival custom.",
      "fr": "Galaxidi Flour War est plutôt une tradition de type : coutume de carnaval.",
      "nl": "Galaxidi Flour War wordt het best omschreven als: carnavalsgebruik."
    },
    "theme": {
      "en": "carnival custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalsgebruik"
    },
    "country": {
      "en": "Greece",
      "fr": "Grèce",
      "nl": "Griekenland"
    }
  },
  {
    "id": "q120",
    "kind": "feature",
    "difficulty": "medium",
    "region": "Galaxidi",
    "question": {
      "en": "Which feature is associated with Galaxidi Flour War?",
      "fr": "Quel élément est associé à Galaxidi Flour War ?",
      "nl": "Welk element hoort bij Galaxidi Flour War?"
    },
    "answers": {
      "en": [
        "throwing coloured flour",
        "throwing tomatoes",
        "wearing masks"
      ],
      "fr": [
        "lancer de la farine colorée",
        "lancer des tomates",
        "porter des masques"
      ],
      "nl": [
        "gekleurde bloem gooien",
        "tomaten gooien",
        "maskers dragen"
      ]
    },
    "correctAnswer": {
      "en": "throwing coloured flour",
      "fr": "lancer de la farine colorée",
      "nl": "gekleurde bloem gooien"
    },
    "explanation": {
      "en": "A key element of Galaxidi Flour War is throwing coloured flour.",
      "fr": "Un élément clé de Galaxidi Flour War est : lancer de la farine colorée.",
      "nl": "Een belangrijk element van Galaxidi Flour War is: gekleurde bloem gooien."
    },
    "theme": {
      "en": "carnival custom",
      "fr": "coutume de carnaval",
      "nl": "carnavalsgebruik"
    },
    "country": {
      "en": "Greece",
      "fr": "Grèce",
      "nl": "Griekenland"
    }
  }
];
