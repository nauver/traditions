const UI={
  "fr": {
    "title": "Europe’s Traditions Challenge",
    "traditions": "Traditions of Europe",
    "culinary": "Curiosités culinaires",
    "eu": "Quiz EU avec boutons concurrents",
    "homeTitle": "Choisissez votre quiz",
    "homeSub": "Trois modes de jeu, 10 questions aléatoires par partie.",
    "start": "Commencer",
    "question": "Question",
    "of": "sur",
    "score": "Score",
    "result": "Résultat",
    "next": "Question suivante",
    "timeout": "Temps écoulé",
    "correct": "Correct",
    "wrong": "Incorrect",
    "tradName": "Nom",
    "country": "Pays",
    "region": "Région",
    "finished": "Challenge terminé",
    "finalScore": "Score final",
    "restart": "Rejouer",
    "menu": "Retour au menu",
    "expert": "Expert",
    "enthusiast": "Très bon score",
    "traveller": "Bon score",
    "discoverer": "À améliorer",
    "beginner": "Débutant",
    "summary": "Votre niveau",
    "buzzA": "Concurrent A",
    "buzzB": "Concurrent B",
    "buzz": "Buzzers concurrents"
  },
  "en": {
    "title": "Europe’s Traditions Challenge",
    "traditions": "Traditions of Europe",
    "culinary": "Culinary Curiosities",
    "eu": "EU Quiz with competitor buttons",
    "homeTitle": "Choose your quiz",
    "homeSub": "Three game modes, 10 random questions per game.",
    "start": "Start",
    "question": "Question",
    "of": "of",
    "score": "Score",
    "result": "Result",
    "next": "Next question",
    "timeout": "Time is up",
    "correct": "Correct",
    "wrong": "Incorrect",
    "tradName": "Name",
    "country": "Country",
    "region": "Region",
    "finished": "Challenge completed",
    "finalScore": "Final score",
    "restart": "Play again",
    "menu": "Return to menu",
    "expert": "Expert",
    "enthusiast": "Very good score",
    "traveller": "Good score",
    "discoverer": "Needs improvement",
    "beginner": "Beginner",
    "summary": "Your level",
    "buzzA": "Competitor A",
    "buzzB": "Competitor B",
    "buzz": "Competitor buzzers"
  },
  "nl": {
    "title": "Europe’s Traditions Challenge",
    "traditions": "Traditions of Europe",
    "culinary": "Culinaire curiositeiten",
    "eu": "EU Quiz met concurrentknoppen",
    "homeTitle": "Kies je quiz",
    "homeSub": "Drie spelmodi, 10 willekeurige vragen per spel.",
    "start": "Start",
    "question": "Vraag",
    "of": "van",
    "score": "Score",
    "result": "Resultaat",
    "next": "Volgende vraag",
    "timeout": "Tijd voorbij",
    "correct": "Correct",
    "wrong": "Fout",
    "tradName": "Naam",
    "country": "Land",
    "region": "Regio",
    "finished": "Challenge voltooid",
    "finalScore": "Eindscore",
    "restart": "Opnieuw spelen",
    "menu": "Terug naar menu",
    "expert": "Expert",
    "enthusiast": "Zeer goede score",
    "traveller": "Goede score",
    "discoverer": "Kan beter",
    "beginner": "Beginner",
    "summary": "Jouw niveau",
    "buzzA": "Concurrent A",
    "buzzB": "Concurrent B",
    "buzz": "Concurrentknoppen"
  }
};
const TRADITIONS_30=[
  {
    "id": "t001",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t002",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t003",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t004",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t005",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  },
  {
    "id": "t006",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t007",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t008",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t009",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t010",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  },
  {
    "id": "t011",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t012",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t013",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t014",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t015",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  },
  {
    "id": "t016",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t017",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t018",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t019",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t020",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  },
  {
    "id": "t021",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t022",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t023",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t024",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t025",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  },
  {
    "id": "t026",
    "mode": "traditions",
    "traditionName": {
      "fr": "El Colacho",
      "en": "El Colacho",
      "nl": "El Colacho"
    },
    "scenario": {
      "fr": "Des personnes costumées sautent par-dessus des bébés allongés sur des matelas.",
      "en": "Costumed participants jump over babies lying on mattresses.",
      "nl": "Verklede deelnemers springen over baby’s op matrassen."
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
      "fr": "Des participants costumés effectuent un saut symbolique pendant des célébrations locales anciennes.",
      "en": "Costumed participants perform a symbolic jump during old local celebrations.",
      "nl": "Verklede deelnemers maken een symbolische sprong tijdens oude lokale vieringen."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Castrillo de Murcia",
      "en": "Castrillo de Murcia",
      "nl": "Castrillo de Murcia"
    }
  },
  {
    "id": "t027",
    "mode": "traditions",
    "traditionName": {
      "fr": "Pêche aux crevettes à cheval",
      "en": "Pêche aux crevettes à cheval",
      "nl": "Pêche aux crevettes à cheval"
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
      "fr": "Les chevaux tirent des filets dans l’eau peu profonde.",
      "en": "The horses pull nets through shallow water.",
      "nl": "De paarden trekken netten door ondiep water."
    },
    "country": {
      "fr": "Belgique",
      "en": "Belgique",
      "nl": "Belgique"
    },
    "region": {
      "fr": "Oostduinkerke",
      "en": "Oostduinkerke",
      "nl": "Oostduinkerke"
    }
  },
  {
    "id": "t028",
    "mode": "traditions",
    "traditionName": {
      "fr": "La Tomatina",
      "en": "La Tomatina",
      "nl": "La Tomatina"
    },
    "scenario": {
      "fr": "Des milliers de personnes se lancent des tomates.",
      "en": "Thousands of people throw tomatoes at each other.",
      "nl": "Duizenden mensen gooien tomaten naar elkaar."
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
      "fr": "Cette fête transforme les rues en immense bataille de tomates.",
      "en": "This festival turns the streets into a huge tomato battle.",
      "nl": "Dit feest verandert de straten in een enorm tomatengevecht."
    },
    "country": {
      "fr": "Espagne",
      "en": "Espagne",
      "nl": "Espagne"
    },
    "region": {
      "fr": "Buñol",
      "en": "Buñol",
      "nl": "Buñol"
    }
  },
  {
    "id": "t029",
    "mode": "traditions",
    "traditionName": {
      "fr": "Championnat de portage de partenaire",
      "en": "Championnat de portage de partenaire",
      "nl": "Championnat de portage de partenaire"
    },
    "scenario": {
      "fr": "Des concurrents courent en portant leur partenaire sur le dos.",
      "en": "Competitors run while carrying their partner on their back.",
      "nl": "Deelnemers lopen terwijl ze hun partner op de rug dragen."
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
      "fr": "Le format combine vitesse, obstacles et équilibre.",
      "en": "The format combines speed, obstacles and balance.",
      "nl": "De formule combineert snelheid, hindernissen en evenwicht."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Sonkajärvi",
      "en": "Sonkajärvi",
      "nl": "Sonkajärvi"
    }
  },
  {
    "id": "t030",
    "mode": "traditions",
    "traditionName": {
      "fr": "Bataille des oranges",
      "en": "Bataille des oranges",
      "nl": "Bataille des oranges"
    },
    "scenario": {
      "fr": "Pendant un carnaval, des équipes se jettent des oranges.",
      "en": "During a carnival, teams throw oranges at each other.",
      "nl": "Tijdens een carnaval gooien teams sinaasappels naar elkaar."
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
      "fr": "Des équipes s’affrontent dans une mise en scène carnavalesque.",
      "en": "Teams face each other in a carnival setting.",
      "nl": "Teams nemen het tegen elkaar op in een carnavaleske setting."
    },
    "country": {
      "fr": "Italie",
      "en": "Italie",
      "nl": "Italie"
    },
    "region": {
      "fr": "Ivrea",
      "en": "Ivrea",
      "nl": "Ivrea"
    }
  }
];
const CULINARY_50=[
  {
    "id": "c001",
    "mode": "culinary",
    "traditionName": {
      "fr": "Casu Marzu",
      "en": "Casu Marzu",
      "nl": "Casu Marzu"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Casu Marzu ?",
      "en": "What are Casu Marzu?",
      "nl": "Wat zijn Casu Marzu?"
    },
    "answers": {
      "fr": [
        "Un fromage contenant des larves vivantes",
        "Un fromage fermenté",
        "Une soupe de poisson",
        "Une charcuterie fumée"
      ],
      "en": [
        "A cheese containing live larvae",
        "A fermented cheese",
        "A fish soup",
        "Smoked charcuterie"
      ],
      "nl": [
        "Een kaas met levende larven",
        "Een gefermenteerde kaas",
        "Een vissoep",
        "Gerookte vleeswaren"
      ]
    },
    "correctAnswer": {
      "fr": "Un fromage contenant des larves vivantes",
      "en": "A cheese containing live larvae",
      "nl": "Een kaas met levende larven"
    },
    "explanation": {
      "fr": "Un fromage sarde connu pour sa fermentation très particulière.",
      "en": "A Sardinian cheese known for its unusual fermentation.",
      "nl": "Een Sardijnse kaas met een zeer bijzondere fermentatie."
    },
    "country": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "region": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    }
  },
  {
    "id": "c002",
    "mode": "culinary",
    "traditionName": {
      "fr": "Haggis",
      "en": "Haggis",
      "nl": "Haggis"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Haggis ?",
      "en": "What are Haggis?",
      "nl": "Wat zijn Haggis?"
    },
    "answers": {
      "fr": [
        "Un plat à base d’abats de mouton",
        "Une soupe de poisson",
        "Une charcuterie fumée",
        "Un dessert aux céréales"
      ],
      "en": [
        "A dish made with sheep offal",
        "A fish soup",
        "Smoked charcuterie",
        "A cereal dessert"
      ],
      "nl": [
        "Een gerecht met schapenorgaanvlees",
        "Een vissoep",
        "Gerookte vleeswaren",
        "Een graandessert"
      ]
    },
    "correctAnswer": {
      "fr": "Un plat à base d’abats de mouton",
      "en": "A dish made with sheep offal",
      "nl": "Een gerecht met schapenorgaanvlees"
    },
    "explanation": {
      "fr": "Un plat emblématique écossais traditionnellement associé à l’avoine, aux épices et aux abats.",
      "en": "An emblematic Scottish dish traditionally associated with oats, spices and offal.",
      "nl": "Een emblematisch Schots gerecht met haver, kruiden en orgaanvlees."
    },
    "country": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "region": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    }
  },
  {
    "id": "c003",
    "mode": "culinary",
    "traditionName": {
      "fr": "Surströmming",
      "en": "Surströmming",
      "nl": "Surströmming"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Surströmming ?",
      "en": "What are Surströmming?",
      "nl": "Wat zijn Surströmming?"
    },
    "answers": {
      "fr": [
        "Du hareng fermenté",
        "Une charcuterie fumée",
        "Un dessert aux céréales",
        "Une galette salée"
      ],
      "en": [
        "Fermented herring",
        "Smoked charcuterie",
        "A cereal dessert",
        "A savoury pancake"
      ],
      "nl": [
        "Gefermenteerde haring",
        "Gerookte vleeswaren",
        "Een graandessert",
        "Een hartige pannenkoek"
      ]
    },
    "correctAnswer": {
      "fr": "Du hareng fermenté",
      "en": "Fermented herring",
      "nl": "Gefermenteerde haring"
    },
    "explanation": {
      "fr": "Un poisson fermenté surtout connu pour son odeur très puissante.",
      "en": "A fermented fish best known for its extremely strong smell.",
      "nl": "Een gefermenteerde vis die vooral bekendstaat om zijn sterke geur."
    },
    "country": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "region": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    }
  },
  {
    "id": "c004",
    "mode": "culinary",
    "traditionName": {
      "fr": "Hákarl",
      "en": "Hákarl",
      "nl": "Hákarl"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Hákarl ?",
      "en": "What are Hákarl?",
      "nl": "Wat zijn Hákarl?"
    },
    "answers": {
      "fr": [
        "Du requin fermenté",
        "Un dessert aux céréales",
        "Une galette salée",
        "Un plat de poisson séché"
      ],
      "en": [
        "Fermented shark",
        "A cereal dessert",
        "A savoury pancake",
        "A dried-fish dish"
      ],
      "nl": [
        "Gefermenteerde haai",
        "Een graandessert",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis"
      ]
    },
    "correctAnswer": {
      "fr": "Du requin fermenté",
      "en": "Fermented shark",
      "nl": "Gefermenteerde haai"
    },
    "explanation": {
      "fr": "Une spécialité islandaise au goût très marqué.",
      "en": "An Icelandic speciality with a very strong taste.",
      "nl": "Een IJslandse specialiteit met een zeer uitgesproken smaak."
    },
    "country": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "region": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    }
  },
  {
    "id": "c005",
    "mode": "culinary",
    "traditionName": {
      "fr": "Smalahove",
      "en": "Smalahove",
      "nl": "Smalahove"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Smalahove ?",
      "en": "What are Smalahove?",
      "nl": "Wat zijn Smalahove?"
    },
    "answers": {
      "fr": [
        "Une tête de mouton traditionnelle",
        "Une galette salée",
        "Un plat de poisson séché",
        "Une boisson fermentée"
      ],
      "en": [
        "A traditional sheep’s head",
        "A savoury pancake",
        "A dried-fish dish",
        "A fermented drink"
      ],
      "nl": [
        "Een traditionele schapenkop",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank"
      ]
    },
    "correctAnswer": {
      "fr": "Une tête de mouton traditionnelle",
      "en": "A traditional sheep’s head",
      "nl": "Een traditionele schapenkop"
    },
    "explanation": {
      "fr": "Un plat norvégien traditionnellement associé à certaines périodes de fête.",
      "en": "A Norwegian dish traditionally associated with festive periods.",
      "nl": "Een Noors gerecht dat traditioneel met feestperiodes wordt verbonden."
    },
    "country": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "region": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    }
  },
  {
    "id": "c006",
    "mode": "culinary",
    "traditionName": {
      "fr": "Blodplättar",
      "en": "Blodplättar",
      "nl": "Blodplättar"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Blodplättar ?",
      "en": "What are Blodplättar?",
      "nl": "Wat zijn Blodplättar?"
    },
    "answers": {
      "fr": [
        "Des crêpes au sang",
        "Un plat de poisson séché",
        "Une boisson fermentée",
        "Un fromage fermenté"
      ],
      "en": [
        "Blood pancakes",
        "A dried-fish dish",
        "A fermented drink",
        "A fermented cheese"
      ],
      "nl": [
        "Bloedpannenkoeken",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank",
        "Een gefermenteerde kaas"
      ]
    },
    "correctAnswer": {
      "fr": "Des crêpes au sang",
      "en": "Blood pancakes",
      "nl": "Bloedpannenkoeken"
    },
    "explanation": {
      "fr": "Des crêpes préparées à base de sang, consommées dans plusieurs régions du nord de l’Europe.",
      "en": "Pancakes made with blood, eaten in several northern European regions.",
      "nl": "Pannenkoeken gemaakt met bloed, gegeten in meerdere Noord-Europese regio’s."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande / Suède",
      "en": "Finlande / Suède",
      "nl": "Finlande / Suède"
    }
  },
  {
    "id": "c007",
    "mode": "culinary",
    "traditionName": {
      "fr": "Andouillette",
      "en": "Andouillette",
      "nl": "Andouillette"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Andouillette ?",
      "en": "What are Andouillette?",
      "nl": "Wat zijn Andouillette?"
    },
    "answers": {
      "fr": [
        "Une saucisse à base d’intestins de porc",
        "Une boisson fermentée",
        "Un fromage fermenté",
        "Une soupe de poisson"
      ],
      "en": [
        "A sausage made with pork intestines",
        "A fermented drink",
        "A fermented cheese",
        "A fish soup"
      ],
      "nl": [
        "Een worst gemaakt met varkensdarmen",
        "Een gefermenteerde drank",
        "Een gefermenteerde kaas",
        "Een vissoep"
      ]
    },
    "correctAnswer": {
      "fr": "Une saucisse à base d’intestins de porc",
      "en": "A sausage made with pork intestines",
      "nl": "Een worst gemaakt met varkensdarmen"
    },
    "explanation": {
      "fr": "Une spécialité charcutière française connue pour son goût et son odeur très marqués.",
      "en": "A French charcuterie speciality known for its strong taste and smell.",
      "nl": "Een Franse vleeswarenspecialiteit met een sterke smaak en geur."
    },
    "country": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "region": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    }
  },
  {
    "id": "c008",
    "mode": "culinary",
    "traditionName": {
      "fr": "Mämmi",
      "en": "Mämmi",
      "nl": "Mämmi"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Mämmi ?",
      "en": "What are Mämmi?",
      "nl": "Wat zijn Mämmi?"
    },
    "answers": {
      "fr": [
        "Un dessert de Pâques au seigle et au malt",
        "Un fromage fermenté",
        "Une soupe de poisson",
        "Une charcuterie fumée"
      ],
      "en": [
        "An Easter dessert made with rye and malt",
        "A fermented cheese",
        "A fish soup",
        "Smoked charcuterie"
      ],
      "nl": [
        "Een paasdessert met rogge en mout",
        "Een gefermenteerde kaas",
        "Een vissoep",
        "Gerookte vleeswaren"
      ]
    },
    "correctAnswer": {
      "fr": "Un dessert de Pâques au seigle et au malt",
      "en": "An Easter dessert made with rye and malt",
      "nl": "Een paasdessert met rogge en mout"
    },
    "explanation": {
      "fr": "Un dessert finlandais traditionnellement associé à Pâques.",
      "en": "A Finnish dessert traditionally associated with Easter.",
      "nl": "Een Fins dessert dat traditioneel met Pasen wordt geassocieerd."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    }
  },
  {
    "id": "c009",
    "mode": "culinary",
    "traditionName": {
      "fr": "Jellied eels",
      "en": "Jellied eels",
      "nl": "Jellied eels"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Jellied eels ?",
      "en": "What are Jellied eels?",
      "nl": "Wat zijn Jellied eels?"
    },
    "answers": {
      "fr": [
        "Des anguilles servies dans une gelée froide",
        "Une soupe de poisson",
        "Une charcuterie fumée",
        "Un dessert aux céréales"
      ],
      "en": [
        "Eels served in cold jelly",
        "A fish soup",
        "Smoked charcuterie",
        "A cereal dessert"
      ],
      "nl": [
        "Paling geserveerd in koude gelei",
        "Een vissoep",
        "Gerookte vleeswaren",
        "Een graandessert"
      ]
    },
    "correctAnswer": {
      "fr": "Des anguilles servies dans une gelée froide",
      "en": "Eels served in cold jelly",
      "nl": "Paling geserveerd in koude gelei"
    },
    "explanation": {
      "fr": "Une spécialité traditionnelle associée à Londres.",
      "en": "A traditional speciality associated with London.",
      "nl": "Een traditionele specialiteit die met Londen wordt geassocieerd."
    },
    "country": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "region": {
      "fr": "Londres",
      "en": "Londres",
      "nl": "Londres"
    }
  },
  {
    "id": "c010",
    "mode": "culinary",
    "traditionName": {
      "fr": "Czernina",
      "en": "Czernina",
      "nl": "Czernina"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Czernina ?",
      "en": "What are Czernina?",
      "nl": "Wat zijn Czernina?"
    },
    "answers": {
      "fr": [
        "Une soupe au sang de canard",
        "Une charcuterie fumée",
        "Un dessert aux céréales",
        "Une galette salée"
      ],
      "en": [
        "A duck-blood soup",
        "Smoked charcuterie",
        "A cereal dessert",
        "A savoury pancake"
      ],
      "nl": [
        "Een soep met eendenbloed",
        "Gerookte vleeswaren",
        "Een graandessert",
        "Een hartige pannenkoek"
      ]
    },
    "correctAnswer": {
      "fr": "Une soupe au sang de canard",
      "en": "A duck-blood soup",
      "nl": "Een soep met eendenbloed"
    },
    "explanation": {
      "fr": "Une soupe polonaise traditionnelle au goût aigre-doux.",
      "en": "A traditional Polish sweet-and-sour soup.",
      "nl": "Een traditionele Poolse zoetzure soep."
    },
    "country": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "region": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    }
  },
  {
    "id": "c011",
    "mode": "culinary",
    "traditionName": {
      "fr": "Casu Marzu",
      "en": "Casu Marzu",
      "nl": "Casu Marzu"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Casu Marzu ?",
      "en": "What are Casu Marzu?",
      "nl": "Wat zijn Casu Marzu?"
    },
    "answers": {
      "fr": [
        "Un fromage contenant des larves vivantes",
        "Un dessert aux céréales",
        "Une galette salée",
        "Un plat de poisson séché"
      ],
      "en": [
        "A cheese containing live larvae",
        "A cereal dessert",
        "A savoury pancake",
        "A dried-fish dish"
      ],
      "nl": [
        "Een kaas met levende larven",
        "Een graandessert",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis"
      ]
    },
    "correctAnswer": {
      "fr": "Un fromage contenant des larves vivantes",
      "en": "A cheese containing live larvae",
      "nl": "Een kaas met levende larven"
    },
    "explanation": {
      "fr": "Un fromage sarde connu pour sa fermentation très particulière.",
      "en": "A Sardinian cheese known for its unusual fermentation.",
      "nl": "Een Sardijnse kaas met een zeer bijzondere fermentatie."
    },
    "country": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "region": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    }
  },
  {
    "id": "c012",
    "mode": "culinary",
    "traditionName": {
      "fr": "Haggis",
      "en": "Haggis",
      "nl": "Haggis"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Haggis ?",
      "en": "What are Haggis?",
      "nl": "Wat zijn Haggis?"
    },
    "answers": {
      "fr": [
        "Un plat à base d’abats de mouton",
        "Une galette salée",
        "Un plat de poisson séché",
        "Une boisson fermentée"
      ],
      "en": [
        "A dish made with sheep offal",
        "A savoury pancake",
        "A dried-fish dish",
        "A fermented drink"
      ],
      "nl": [
        "Een gerecht met schapenorgaanvlees",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank"
      ]
    },
    "correctAnswer": {
      "fr": "Un plat à base d’abats de mouton",
      "en": "A dish made with sheep offal",
      "nl": "Een gerecht met schapenorgaanvlees"
    },
    "explanation": {
      "fr": "Un plat emblématique écossais traditionnellement associé à l’avoine, aux épices et aux abats.",
      "en": "An emblematic Scottish dish traditionally associated with oats, spices and offal.",
      "nl": "Een emblematisch Schots gerecht met haver, kruiden en orgaanvlees."
    },
    "country": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "region": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    }
  },
  {
    "id": "c013",
    "mode": "culinary",
    "traditionName": {
      "fr": "Surströmming",
      "en": "Surströmming",
      "nl": "Surströmming"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Surströmming ?",
      "en": "What are Surströmming?",
      "nl": "Wat zijn Surströmming?"
    },
    "answers": {
      "fr": [
        "Du hareng fermenté",
        "Un plat de poisson séché",
        "Une boisson fermentée",
        "Un fromage fermenté"
      ],
      "en": [
        "Fermented herring",
        "A dried-fish dish",
        "A fermented drink",
        "A fermented cheese"
      ],
      "nl": [
        "Gefermenteerde haring",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank",
        "Een gefermenteerde kaas"
      ]
    },
    "correctAnswer": {
      "fr": "Du hareng fermenté",
      "en": "Fermented herring",
      "nl": "Gefermenteerde haring"
    },
    "explanation": {
      "fr": "Un poisson fermenté surtout connu pour son odeur très puissante.",
      "en": "A fermented fish best known for its extremely strong smell.",
      "nl": "Een gefermenteerde vis die vooral bekendstaat om zijn sterke geur."
    },
    "country": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "region": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    }
  },
  {
    "id": "c014",
    "mode": "culinary",
    "traditionName": {
      "fr": "Hákarl",
      "en": "Hákarl",
      "nl": "Hákarl"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Hákarl ?",
      "en": "What are Hákarl?",
      "nl": "Wat zijn Hákarl?"
    },
    "answers": {
      "fr": [
        "Du requin fermenté",
        "Une boisson fermentée",
        "Un fromage fermenté",
        "Une soupe de poisson"
      ],
      "en": [
        "Fermented shark",
        "A fermented drink",
        "A fermented cheese",
        "A fish soup"
      ],
      "nl": [
        "Gefermenteerde haai",
        "Een gefermenteerde drank",
        "Een gefermenteerde kaas",
        "Een vissoep"
      ]
    },
    "correctAnswer": {
      "fr": "Du requin fermenté",
      "en": "Fermented shark",
      "nl": "Gefermenteerde haai"
    },
    "explanation": {
      "fr": "Une spécialité islandaise au goût très marqué.",
      "en": "An Icelandic speciality with a very strong taste.",
      "nl": "Een IJslandse specialiteit met een zeer uitgesproken smaak."
    },
    "country": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "region": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    }
  },
  {
    "id": "c015",
    "mode": "culinary",
    "traditionName": {
      "fr": "Smalahove",
      "en": "Smalahove",
      "nl": "Smalahove"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Smalahove ?",
      "en": "What are Smalahove?",
      "nl": "Wat zijn Smalahove?"
    },
    "answers": {
      "fr": [
        "Une tête de mouton traditionnelle",
        "Un fromage fermenté",
        "Une soupe de poisson",
        "Une charcuterie fumée"
      ],
      "en": [
        "A traditional sheep’s head",
        "A fermented cheese",
        "A fish soup",
        "Smoked charcuterie"
      ],
      "nl": [
        "Een traditionele schapenkop",
        "Een gefermenteerde kaas",
        "Een vissoep",
        "Gerookte vleeswaren"
      ]
    },
    "correctAnswer": {
      "fr": "Une tête de mouton traditionnelle",
      "en": "A traditional sheep’s head",
      "nl": "Een traditionele schapenkop"
    },
    "explanation": {
      "fr": "Un plat norvégien traditionnellement associé à certaines périodes de fête.",
      "en": "A Norwegian dish traditionally associated with festive periods.",
      "nl": "Een Noors gerecht dat traditioneel met feestperiodes wordt verbonden."
    },
    "country": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "region": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    }
  },
  {
    "id": "c016",
    "mode": "culinary",
    "traditionName": {
      "fr": "Blodplättar",
      "en": "Blodplättar",
      "nl": "Blodplättar"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Blodplättar ?",
      "en": "What are Blodplättar?",
      "nl": "Wat zijn Blodplättar?"
    },
    "answers": {
      "fr": [
        "Des crêpes au sang",
        "Une soupe de poisson",
        "Une charcuterie fumée",
        "Un dessert aux céréales"
      ],
      "en": [
        "Blood pancakes",
        "A fish soup",
        "Smoked charcuterie",
        "A cereal dessert"
      ],
      "nl": [
        "Bloedpannenkoeken",
        "Een vissoep",
        "Gerookte vleeswaren",
        "Een graandessert"
      ]
    },
    "correctAnswer": {
      "fr": "Des crêpes au sang",
      "en": "Blood pancakes",
      "nl": "Bloedpannenkoeken"
    },
    "explanation": {
      "fr": "Des crêpes préparées à base de sang, consommées dans plusieurs régions du nord de l’Europe.",
      "en": "Pancakes made with blood, eaten in several northern European regions.",
      "nl": "Pannenkoeken gemaakt met bloed, gegeten in meerdere Noord-Europese regio’s."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande / Suède",
      "en": "Finlande / Suède",
      "nl": "Finlande / Suède"
    }
  },
  {
    "id": "c017",
    "mode": "culinary",
    "traditionName": {
      "fr": "Andouillette",
      "en": "Andouillette",
      "nl": "Andouillette"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Andouillette ?",
      "en": "What are Andouillette?",
      "nl": "Wat zijn Andouillette?"
    },
    "answers": {
      "fr": [
        "Une saucisse à base d’intestins de porc",
        "Une charcuterie fumée",
        "Un dessert aux céréales",
        "Une galette salée"
      ],
      "en": [
        "A sausage made with pork intestines",
        "Smoked charcuterie",
        "A cereal dessert",
        "A savoury pancake"
      ],
      "nl": [
        "Een worst gemaakt met varkensdarmen",
        "Gerookte vleeswaren",
        "Een graandessert",
        "Een hartige pannenkoek"
      ]
    },
    "correctAnswer": {
      "fr": "Une saucisse à base d’intestins de porc",
      "en": "A sausage made with pork intestines",
      "nl": "Een worst gemaakt met varkensdarmen"
    },
    "explanation": {
      "fr": "Une spécialité charcutière française connue pour son goût et son odeur très marqués.",
      "en": "A French charcuterie speciality known for its strong taste and smell.",
      "nl": "Een Franse vleeswarenspecialiteit met een sterke smaak en geur."
    },
    "country": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "region": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    }
  },
  {
    "id": "c018",
    "mode": "culinary",
    "traditionName": {
      "fr": "Mämmi",
      "en": "Mämmi",
      "nl": "Mämmi"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Mämmi ?",
      "en": "What are Mämmi?",
      "nl": "Wat zijn Mämmi?"
    },
    "answers": {
      "fr": [
        "Un dessert de Pâques au seigle et au malt",
        "Un dessert aux céréales",
        "Une galette salée",
        "Un plat de poisson séché"
      ],
      "en": [
        "An Easter dessert made with rye and malt",
        "A cereal dessert",
        "A savoury pancake",
        "A dried-fish dish"
      ],
      "nl": [
        "Een paasdessert met rogge en mout",
        "Een graandessert",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis"
      ]
    },
    "correctAnswer": {
      "fr": "Un dessert de Pâques au seigle et au malt",
      "en": "An Easter dessert made with rye and malt",
      "nl": "Een paasdessert met rogge en mout"
    },
    "explanation": {
      "fr": "Un dessert finlandais traditionnellement associé à Pâques.",
      "en": "A Finnish dessert traditionally associated with Easter.",
      "nl": "Een Fins dessert dat traditioneel met Pasen wordt geassocieerd."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    }
  },
  {
    "id": "c019",
    "mode": "culinary",
    "traditionName": {
      "fr": "Jellied eels",
      "en": "Jellied eels",
      "nl": "Jellied eels"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Jellied eels ?",
      "en": "What are Jellied eels?",
      "nl": "Wat zijn Jellied eels?"
    },
    "answers": {
      "fr": [
        "Des anguilles servies dans une gelée froide",
        "Une galette salée",
        "Un plat de poisson séché",
        "Une boisson fermentée"
      ],
      "en": [
        "Eels served in cold jelly",
        "A savoury pancake",
        "A dried-fish dish",
        "A fermented drink"
      ],
      "nl": [
        "Paling geserveerd in koude gelei",
        "Een hartige pannenkoek",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank"
      ]
    },
    "correctAnswer": {
      "fr": "Des anguilles servies dans une gelée froide",
      "en": "Eels served in cold jelly",
      "nl": "Paling geserveerd in koude gelei"
    },
    "explanation": {
      "fr": "Une spécialité traditionnelle associée à Londres.",
      "en": "A traditional speciality associated with London.",
      "nl": "Een traditionele specialiteit die met Londen wordt geassocieerd."
    },
    "country": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "region": {
      "fr": "Londres",
      "en": "Londres",
      "nl": "Londres"
    }
  },
  {
    "id": "c020",
    "mode": "culinary",
    "traditionName": {
      "fr": "Czernina",
      "en": "Czernina",
      "nl": "Czernina"
    },
    "scenario": {
      "fr": "",
      "en": "",
      "nl": ""
    },
    "question": {
      "fr": "Que sont les Czernina ?",
      "en": "What are Czernina?",
      "nl": "Wat zijn Czernina?"
    },
    "answers": {
      "fr": [
        "Une soupe au sang de canard",
        "Un plat de poisson séché",
        "Une boisson fermentée",
        "Un fromage fermenté"
      ],
      "en": [
        "A duck-blood soup",
        "A dried-fish dish",
        "A fermented drink",
        "A fermented cheese"
      ],
      "nl": [
        "Een soep met eendenbloed",
        "Een gerecht met gedroogde vis",
        "Een gefermenteerde drank",
        "Een gefermenteerde kaas"
      ]
    },
    "correctAnswer": {
      "fr": "Une soupe au sang de canard",
      "en": "A duck-blood soup",
      "nl": "Een soep met eendenbloed"
    },
    "explanation": {
      "fr": "Une soupe polonaise traditionnelle au goût aigre-doux.",
      "en": "A traditional Polish sweet-and-sour soup.",
      "nl": "Een traditionele Poolse zoetzure soep."
    },
    "country": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "region": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    }
  },
  {
    "id": "c021",
    "mode": "culinary",
    "traditionName": {
      "fr": "Casu Marzu",
      "en": "Casu Marzu",
      "nl": "Casu Marzu"
    },
    "scenario": {
      "fr": "Le plat s’appelle Casu Marzu.",
      "en": "The dish is called Casu Marzu.",
      "nl": "Het gerecht heet Casu Marzu."
    },
    "question": {
      "fr": "Dans quel pays ou région le Casu Marzu est-il traditionnel ?",
      "en": "In which country or region is Casu Marzu traditional?",
      "nl": "In welk land of welke regio is Casu Marzu traditioneel?"
    },
    "answers": {
      "fr": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ],
      "en": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ],
      "nl": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ]
    },
    "correctAnswer": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "explanation": {
      "fr": "Un fromage sarde connu pour sa fermentation très particulière.",
      "en": "A Sardinian cheese known for its unusual fermentation.",
      "nl": "Een Sardijnse kaas met een zeer bijzondere fermentatie."
    },
    "country": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "region": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    }
  },
  {
    "id": "c022",
    "mode": "culinary",
    "traditionName": {
      "fr": "Haggis",
      "en": "Haggis",
      "nl": "Haggis"
    },
    "scenario": {
      "fr": "Le plat s’appelle Haggis.",
      "en": "The dish is called Haggis.",
      "nl": "Het gerecht heet Haggis."
    },
    "question": {
      "fr": "Dans quel pays ou région le Haggis est-il traditionnel ?",
      "en": "In which country or region is Haggis traditional?",
      "nl": "In welk land of welke regio is Haggis traditioneel?"
    },
    "answers": {
      "fr": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ],
      "en": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ],
      "nl": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ]
    },
    "correctAnswer": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "explanation": {
      "fr": "Un plat emblématique écossais traditionnellement associé à l’avoine, aux épices et aux abats.",
      "en": "An emblematic Scottish dish traditionally associated with oats, spices and offal.",
      "nl": "Een emblematisch Schots gerecht met haver, kruiden en orgaanvlees."
    },
    "country": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "region": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    }
  },
  {
    "id": "c023",
    "mode": "culinary",
    "traditionName": {
      "fr": "Surströmming",
      "en": "Surströmming",
      "nl": "Surströmming"
    },
    "scenario": {
      "fr": "Le plat s’appelle Surströmming.",
      "en": "The dish is called Surströmming.",
      "nl": "Het gerecht heet Surströmming."
    },
    "question": {
      "fr": "Dans quel pays ou région le Surströmming est-il traditionnel ?",
      "en": "In which country or region is Surströmming traditional?",
      "nl": "In welk land of welke regio is Surströmming traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ],
      "en": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ],
      "nl": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ]
    },
    "correctAnswer": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "explanation": {
      "fr": "Un poisson fermenté surtout connu pour son odeur très puissante.",
      "en": "A fermented fish best known for its extremely strong smell.",
      "nl": "Een gefermenteerde vis die vooral bekendstaat om zijn sterke geur."
    },
    "country": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "region": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    }
  },
  {
    "id": "c024",
    "mode": "culinary",
    "traditionName": {
      "fr": "Hákarl",
      "en": "Hákarl",
      "nl": "Hákarl"
    },
    "scenario": {
      "fr": "Le plat s’appelle Hákarl.",
      "en": "The dish is called Hákarl.",
      "nl": "Het gerecht heet Hákarl."
    },
    "question": {
      "fr": "Dans quel pays ou région le Hákarl est-il traditionnel ?",
      "en": "In which country or region is Hákarl traditional?",
      "nl": "In welk land of welke regio is Hákarl traditioneel?"
    },
    "answers": {
      "fr": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ],
      "en": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ],
      "nl": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ]
    },
    "correctAnswer": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "explanation": {
      "fr": "Une spécialité islandaise au goût très marqué.",
      "en": "An Icelandic speciality with a very strong taste.",
      "nl": "Een IJslandse specialiteit met een zeer uitgesproken smaak."
    },
    "country": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "region": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    }
  },
  {
    "id": "c025",
    "mode": "culinary",
    "traditionName": {
      "fr": "Smalahove",
      "en": "Smalahove",
      "nl": "Smalahove"
    },
    "scenario": {
      "fr": "Le plat s’appelle Smalahove.",
      "en": "The dish is called Smalahove.",
      "nl": "Het gerecht heet Smalahove."
    },
    "question": {
      "fr": "Dans quel pays ou région le Smalahove est-il traditionnel ?",
      "en": "In which country or region is Smalahove traditional?",
      "nl": "In welk land of welke regio is Smalahove traditioneel?"
    },
    "answers": {
      "fr": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ],
      "en": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ],
      "nl": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ]
    },
    "correctAnswer": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "explanation": {
      "fr": "Un plat norvégien traditionnellement associé à certaines périodes de fête.",
      "en": "A Norwegian dish traditionally associated with festive periods.",
      "nl": "Een Noors gerecht dat traditioneel met feestperiodes wordt verbonden."
    },
    "country": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "region": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    }
  },
  {
    "id": "c026",
    "mode": "culinary",
    "traditionName": {
      "fr": "Blodplättar",
      "en": "Blodplättar",
      "nl": "Blodplättar"
    },
    "scenario": {
      "fr": "Le plat s’appelle Blodplättar.",
      "en": "The dish is called Blodplättar.",
      "nl": "Het gerecht heet Blodplättar."
    },
    "question": {
      "fr": "Dans quel pays ou région le Blodplättar est-il traditionnel ?",
      "en": "In which country or region is Blodplättar traditional?",
      "nl": "In welk land of welke regio is Blodplättar traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "en": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "nl": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "explanation": {
      "fr": "Des crêpes préparées à base de sang, consommées dans plusieurs régions du nord de l’Europe.",
      "en": "Pancakes made with blood, eaten in several northern European regions.",
      "nl": "Pannenkoeken gemaakt met bloed, gegeten in meerdere Noord-Europese regio’s."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande / Suède",
      "en": "Finlande / Suède",
      "nl": "Finlande / Suède"
    }
  },
  {
    "id": "c027",
    "mode": "culinary",
    "traditionName": {
      "fr": "Andouillette",
      "en": "Andouillette",
      "nl": "Andouillette"
    },
    "scenario": {
      "fr": "Le plat s’appelle Andouillette.",
      "en": "The dish is called Andouillette.",
      "nl": "Het gerecht heet Andouillette."
    },
    "question": {
      "fr": "Dans quel pays ou région le Andouillette est-il traditionnel ?",
      "en": "In which country or region is Andouillette traditional?",
      "nl": "In welk land of welke regio is Andouillette traditioneel?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ],
      "en": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ],
      "nl": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "explanation": {
      "fr": "Une spécialité charcutière française connue pour son goût et son odeur très marqués.",
      "en": "A French charcuterie speciality known for its strong taste and smell.",
      "nl": "Een Franse vleeswarenspecialiteit met een sterke smaak en geur."
    },
    "country": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "region": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    }
  },
  {
    "id": "c028",
    "mode": "culinary",
    "traditionName": {
      "fr": "Mämmi",
      "en": "Mämmi",
      "nl": "Mämmi"
    },
    "scenario": {
      "fr": "Le plat s’appelle Mämmi.",
      "en": "The dish is called Mämmi.",
      "nl": "Het gerecht heet Mämmi."
    },
    "question": {
      "fr": "Dans quel pays ou région le Mämmi est-il traditionnel ?",
      "en": "In which country or region is Mämmi traditional?",
      "nl": "In welk land of welke regio is Mämmi traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "en": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "nl": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "explanation": {
      "fr": "Un dessert finlandais traditionnellement associé à Pâques.",
      "en": "A Finnish dessert traditionally associated with Easter.",
      "nl": "Een Fins dessert dat traditioneel met Pasen wordt geassocieerd."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    }
  },
  {
    "id": "c029",
    "mode": "culinary",
    "traditionName": {
      "fr": "Jellied eels",
      "en": "Jellied eels",
      "nl": "Jellied eels"
    },
    "scenario": {
      "fr": "Le plat s’appelle Jellied eels.",
      "en": "The dish is called Jellied eels.",
      "nl": "Het gerecht heet Jellied eels."
    },
    "question": {
      "fr": "Dans quel pays ou région le Jellied eels est-il traditionnel ?",
      "en": "In which country or region is Jellied eels traditional?",
      "nl": "In welk land of welke regio is Jellied eels traditioneel?"
    },
    "answers": {
      "fr": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ],
      "en": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ],
      "nl": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ]
    },
    "correctAnswer": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "explanation": {
      "fr": "Une spécialité traditionnelle associée à Londres.",
      "en": "A traditional speciality associated with London.",
      "nl": "Een traditionele specialiteit die met Londen wordt geassocieerd."
    },
    "country": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "region": {
      "fr": "Londres",
      "en": "Londres",
      "nl": "Londres"
    }
  },
  {
    "id": "c030",
    "mode": "culinary",
    "traditionName": {
      "fr": "Czernina",
      "en": "Czernina",
      "nl": "Czernina"
    },
    "scenario": {
      "fr": "Le plat s’appelle Czernina.",
      "en": "The dish is called Czernina.",
      "nl": "Het gerecht heet Czernina."
    },
    "question": {
      "fr": "Dans quel pays ou région le Czernina est-il traditionnel ?",
      "en": "In which country or region is Czernina traditional?",
      "nl": "In welk land of welke regio is Czernina traditioneel?"
    },
    "answers": {
      "fr": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ],
      "en": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ]
    },
    "correctAnswer": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "explanation": {
      "fr": "Une soupe polonaise traditionnelle au goût aigre-doux.",
      "en": "A traditional Polish sweet-and-sour soup.",
      "nl": "Een traditionele Poolse zoetzure soep."
    },
    "country": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "region": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    }
  },
  {
    "id": "c031",
    "mode": "culinary",
    "traditionName": {
      "fr": "Casu Marzu",
      "en": "Casu Marzu",
      "nl": "Casu Marzu"
    },
    "scenario": {
      "fr": "Le plat s’appelle Casu Marzu.",
      "en": "The dish is called Casu Marzu.",
      "nl": "Het gerecht heet Casu Marzu."
    },
    "question": {
      "fr": "Dans quel pays ou région le Casu Marzu est-il traditionnel ?",
      "en": "In which country or region is Casu Marzu traditional?",
      "nl": "In welk land of welke regio is Casu Marzu traditioneel?"
    },
    "answers": {
      "fr": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ],
      "en": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ],
      "nl": [
        "Sardaigne",
        "Catalogne",
        "Bavière",
        "Bretagne"
      ]
    },
    "correctAnswer": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "explanation": {
      "fr": "Un fromage sarde connu pour sa fermentation très particulière.",
      "en": "A Sardinian cheese known for its unusual fermentation.",
      "nl": "Een Sardijnse kaas met een zeer bijzondere fermentatie."
    },
    "country": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "region": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    }
  },
  {
    "id": "c032",
    "mode": "culinary",
    "traditionName": {
      "fr": "Haggis",
      "en": "Haggis",
      "nl": "Haggis"
    },
    "scenario": {
      "fr": "Le plat s’appelle Haggis.",
      "en": "The dish is called Haggis.",
      "nl": "Het gerecht heet Haggis."
    },
    "question": {
      "fr": "Dans quel pays ou région le Haggis est-il traditionnel ?",
      "en": "In which country or region is Haggis traditional?",
      "nl": "In welk land of welke regio is Haggis traditioneel?"
    },
    "answers": {
      "fr": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ],
      "en": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ],
      "nl": [
        "Irlande",
        "Écosse",
        "Pays-Bas",
        "Danemark"
      ]
    },
    "correctAnswer": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "explanation": {
      "fr": "Un plat emblématique écossais traditionnellement associé à l’avoine, aux épices et aux abats.",
      "en": "An emblematic Scottish dish traditionally associated with oats, spices and offal.",
      "nl": "Een emblematisch Schots gerecht met haver, kruiden en orgaanvlees."
    },
    "country": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "region": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    }
  },
  {
    "id": "c033",
    "mode": "culinary",
    "traditionName": {
      "fr": "Surströmming",
      "en": "Surströmming",
      "nl": "Surströmming"
    },
    "scenario": {
      "fr": "Le plat s’appelle Surströmming.",
      "en": "The dish is called Surströmming.",
      "nl": "Het gerecht heet Surströmming."
    },
    "question": {
      "fr": "Dans quel pays ou région le Surströmming est-il traditionnel ?",
      "en": "In which country or region is Surströmming traditional?",
      "nl": "In welk land of welke regio is Surströmming traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ],
      "en": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ],
      "nl": [
        "Finlande",
        "Suède",
        "Danemark",
        "Estonie"
      ]
    },
    "correctAnswer": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "explanation": {
      "fr": "Un poisson fermenté surtout connu pour son odeur très puissante.",
      "en": "A fermented fish best known for its extremely strong smell.",
      "nl": "Een gefermenteerde vis die vooral bekendstaat om zijn sterke geur."
    },
    "country": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "region": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    }
  },
  {
    "id": "c034",
    "mode": "culinary",
    "traditionName": {
      "fr": "Hákarl",
      "en": "Hákarl",
      "nl": "Hákarl"
    },
    "scenario": {
      "fr": "Le plat s’appelle Hákarl.",
      "en": "The dish is called Hákarl.",
      "nl": "Het gerecht heet Hákarl."
    },
    "question": {
      "fr": "Dans quel pays ou région le Hákarl est-il traditionnel ?",
      "en": "In which country or region is Hákarl traditional?",
      "nl": "In welk land of welke regio is Hákarl traditioneel?"
    },
    "answers": {
      "fr": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ],
      "en": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ],
      "nl": [
        "Norvège",
        "Islande",
        "Suède",
        "Danemark"
      ]
    },
    "correctAnswer": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "explanation": {
      "fr": "Une spécialité islandaise au goût très marqué.",
      "en": "An Icelandic speciality with a very strong taste.",
      "nl": "Een IJslandse specialiteit met een zeer uitgesproken smaak."
    },
    "country": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "region": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    }
  },
  {
    "id": "c035",
    "mode": "culinary",
    "traditionName": {
      "fr": "Smalahove",
      "en": "Smalahove",
      "nl": "Smalahove"
    },
    "scenario": {
      "fr": "Le plat s’appelle Smalahove.",
      "en": "The dish is called Smalahove.",
      "nl": "Het gerecht heet Smalahove."
    },
    "question": {
      "fr": "Dans quel pays ou région le Smalahove est-il traditionnel ?",
      "en": "In which country or region is Smalahove traditional?",
      "nl": "In welk land of welke regio is Smalahove traditioneel?"
    },
    "answers": {
      "fr": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ],
      "en": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ],
      "nl": [
        "Norvège",
        "Écosse",
        "Irlande",
        "Allemagne"
      ]
    },
    "correctAnswer": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "explanation": {
      "fr": "Un plat norvégien traditionnellement associé à certaines périodes de fête.",
      "en": "A Norwegian dish traditionally associated with festive periods.",
      "nl": "Een Noors gerecht dat traditioneel met feestperiodes wordt verbonden."
    },
    "country": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "region": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    }
  },
  {
    "id": "c036",
    "mode": "culinary",
    "traditionName": {
      "fr": "Blodplättar",
      "en": "Blodplättar",
      "nl": "Blodplättar"
    },
    "scenario": {
      "fr": "Le plat s’appelle Blodplättar.",
      "en": "The dish is called Blodplättar.",
      "nl": "Het gerecht heet Blodplättar."
    },
    "question": {
      "fr": "Dans quel pays ou région le Blodplättar est-il traditionnel ?",
      "en": "In which country or region is Blodplättar traditional?",
      "nl": "In welk land of welke regio is Blodplättar traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "en": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "nl": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "explanation": {
      "fr": "Des crêpes préparées à base de sang, consommées dans plusieurs régions du nord de l’Europe.",
      "en": "Pancakes made with blood, eaten in several northern European regions.",
      "nl": "Pannenkoeken gemaakt met bloed, gegeten in meerdere Noord-Europese regio’s."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande / Suède",
      "en": "Finlande / Suède",
      "nl": "Finlande / Suède"
    }
  },
  {
    "id": "c037",
    "mode": "culinary",
    "traditionName": {
      "fr": "Andouillette",
      "en": "Andouillette",
      "nl": "Andouillette"
    },
    "scenario": {
      "fr": "Le plat s’appelle Andouillette.",
      "en": "The dish is called Andouillette.",
      "nl": "Het gerecht heet Andouillette."
    },
    "question": {
      "fr": "Dans quel pays ou région le Andouillette est-il traditionnel ?",
      "en": "In which country or region is Andouillette traditional?",
      "nl": "In welk land of welke regio is Andouillette traditioneel?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ],
      "en": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ],
      "nl": [
        "France",
        "Belgique",
        "Allemagne",
        "Espagne"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "explanation": {
      "fr": "Une spécialité charcutière française connue pour son goût et son odeur très marqués.",
      "en": "A French charcuterie speciality known for its strong taste and smell.",
      "nl": "Een Franse vleeswarenspecialiteit met een sterke smaak en geur."
    },
    "country": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "region": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    }
  },
  {
    "id": "c038",
    "mode": "culinary",
    "traditionName": {
      "fr": "Mämmi",
      "en": "Mämmi",
      "nl": "Mämmi"
    },
    "scenario": {
      "fr": "Le plat s’appelle Mämmi.",
      "en": "The dish is called Mämmi.",
      "nl": "Het gerecht heet Mämmi."
    },
    "question": {
      "fr": "Dans quel pays ou région le Mämmi est-il traditionnel ?",
      "en": "In which country or region is Mämmi traditional?",
      "nl": "In welk land of welke regio is Mämmi traditioneel?"
    },
    "answers": {
      "fr": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "en": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ],
      "nl": [
        "Finlande",
        "Portugal",
        "Italie",
        "Croatie"
      ]
    },
    "correctAnswer": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "explanation": {
      "fr": "Un dessert finlandais traditionnellement associé à Pâques.",
      "en": "A Finnish dessert traditionally associated with Easter.",
      "nl": "Een Fins dessert dat traditioneel met Pasen wordt geassocieerd."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    }
  },
  {
    "id": "c039",
    "mode": "culinary",
    "traditionName": {
      "fr": "Jellied eels",
      "en": "Jellied eels",
      "nl": "Jellied eels"
    },
    "scenario": {
      "fr": "Le plat s’appelle Jellied eels.",
      "en": "The dish is called Jellied eels.",
      "nl": "Het gerecht heet Jellied eels."
    },
    "question": {
      "fr": "Dans quel pays ou région le Jellied eels est-il traditionnel ?",
      "en": "In which country or region is Jellied eels traditional?",
      "nl": "In welk land of welke regio is Jellied eels traditioneel?"
    },
    "answers": {
      "fr": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ],
      "en": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ],
      "nl": [
        "Royaume-Uni",
        "Grèce",
        "Roumanie",
        "Lituanie"
      ]
    },
    "correctAnswer": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "explanation": {
      "fr": "Une spécialité traditionnelle associée à Londres.",
      "en": "A traditional speciality associated with London.",
      "nl": "Een traditionele specialiteit die met Londen wordt geassocieerd."
    },
    "country": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "region": {
      "fr": "Londres",
      "en": "Londres",
      "nl": "Londres"
    }
  },
  {
    "id": "c040",
    "mode": "culinary",
    "traditionName": {
      "fr": "Czernina",
      "en": "Czernina",
      "nl": "Czernina"
    },
    "scenario": {
      "fr": "Le plat s’appelle Czernina.",
      "en": "The dish is called Czernina.",
      "nl": "Het gerecht heet Czernina."
    },
    "question": {
      "fr": "Dans quel pays ou région le Czernina est-il traditionnel ?",
      "en": "In which country or region is Czernina traditional?",
      "nl": "In welk land of welke regio is Czernina traditioneel?"
    },
    "answers": {
      "fr": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ],
      "en": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ],
      "nl": [
        "Pologne",
        "France",
        "Italie",
        "Espagne"
      ]
    },
    "correctAnswer": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "explanation": {
      "fr": "Une soupe polonaise traditionnelle au goût aigre-doux.",
      "en": "A traditional Polish sweet-and-sour soup.",
      "nl": "Een traditionele Poolse zoetzure soep."
    },
    "country": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "region": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    }
  },
  {
    "id": "c041",
    "mode": "culinary",
    "traditionName": {
      "fr": "Casu Marzu",
      "en": "Casu Marzu",
      "nl": "Casu Marzu"
    },
    "scenario": {
      "fr": "Le Casu Marzu est un fromage contenant des larves vivantes.",
      "en": "Casu Marzu is a cheese containing live larvae.",
      "nl": "Casu Marzu is een kaas met levende larven."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Un fromage sarde connu pour sa fermentation très particulière.",
      "en": "A Sardinian cheese known for its unusual fermentation.",
      "nl": "Een Sardijnse kaas met een zeer bijzondere fermentatie."
    },
    "country": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    },
    "region": {
      "fr": "Sardaigne",
      "en": "Sardaigne",
      "nl": "Sardaigne"
    }
  },
  {
    "id": "c042",
    "mode": "culinary",
    "traditionName": {
      "fr": "Haggis",
      "en": "Haggis",
      "nl": "Haggis"
    },
    "scenario": {
      "fr": "Le Haggis est un dessert sucré à base de chocolat.",
      "en": "Haggis is a sweet chocolate-based dessert.",
      "nl": "Haggis is een zoet dessert op basis van chocolade."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Faux",
      "en": "False",
      "nl": "Onwaar"
    },
    "explanation": {
      "fr": "Un plat emblématique écossais traditionnellement associé à l’avoine, aux épices et aux abats.",
      "en": "An emblematic Scottish dish traditionally associated with oats, spices and offal.",
      "nl": "Een emblematisch Schots gerecht met haver, kruiden en orgaanvlees."
    },
    "country": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    },
    "region": {
      "fr": "Écosse",
      "en": "Écosse",
      "nl": "Écosse"
    }
  },
  {
    "id": "c043",
    "mode": "culinary",
    "traditionName": {
      "fr": "Surströmming",
      "en": "Surströmming",
      "nl": "Surströmming"
    },
    "scenario": {
      "fr": "Le Surströmming est du hareng fermenté.",
      "en": "Surströmming is fermented herring.",
      "nl": "Surströmming is gefermenteerde haring."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Un poisson fermenté surtout connu pour son odeur très puissante.",
      "en": "A fermented fish best known for its extremely strong smell.",
      "nl": "Een gefermenteerde vis die vooral bekendstaat om zijn sterke geur."
    },
    "country": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    },
    "region": {
      "fr": "Suède",
      "en": "Suède",
      "nl": "Suède"
    }
  },
  {
    "id": "c044",
    "mode": "culinary",
    "traditionName": {
      "fr": "Hákarl",
      "en": "Hákarl",
      "nl": "Hákarl"
    },
    "scenario": {
      "fr": "Le Hákarl est du requin fermenté.",
      "en": "Hákarl is fermented shark.",
      "nl": "Hákarl is gefermenteerde haai."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Une spécialité islandaise au goût très marqué.",
      "en": "An Icelandic speciality with a very strong taste.",
      "nl": "Een IJslandse specialiteit met een zeer uitgesproken smaak."
    },
    "country": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    },
    "region": {
      "fr": "Islande",
      "en": "Islande",
      "nl": "Islande"
    }
  },
  {
    "id": "c045",
    "mode": "culinary",
    "traditionName": {
      "fr": "Smalahove",
      "en": "Smalahove",
      "nl": "Smalahove"
    },
    "scenario": {
      "fr": "Le Smalahove est un dessert sucré à base de chocolat.",
      "en": "Smalahove is a sweet chocolate-based dessert.",
      "nl": "Smalahove is een zoet dessert op basis van chocolade."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Faux",
      "en": "False",
      "nl": "Onwaar"
    },
    "explanation": {
      "fr": "Un plat norvégien traditionnellement associé à certaines périodes de fête.",
      "en": "A Norwegian dish traditionally associated with festive periods.",
      "nl": "Een Noors gerecht dat traditioneel met feestperiodes wordt verbonden."
    },
    "country": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    },
    "region": {
      "fr": "Norvège",
      "en": "Norvège",
      "nl": "Norvège"
    }
  },
  {
    "id": "c046",
    "mode": "culinary",
    "traditionName": {
      "fr": "Blodplättar",
      "en": "Blodplättar",
      "nl": "Blodplättar"
    },
    "scenario": {
      "fr": "Le Blodplättar est des crêpes au sang.",
      "en": "Blodplättar is blood pancakes.",
      "nl": "Blodplättar is bloedpannenkoeken."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Des crêpes préparées à base de sang, consommées dans plusieurs régions du nord de l’Europe.",
      "en": "Pancakes made with blood, eaten in several northern European regions.",
      "nl": "Pannenkoeken gemaakt met bloed, gegeten in meerdere Noord-Europese regio’s."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande / Suède",
      "en": "Finlande / Suède",
      "nl": "Finlande / Suède"
    }
  },
  {
    "id": "c047",
    "mode": "culinary",
    "traditionName": {
      "fr": "Andouillette",
      "en": "Andouillette",
      "nl": "Andouillette"
    },
    "scenario": {
      "fr": "Le Andouillette est une saucisse à base d’intestins de porc.",
      "en": "Andouillette is a sausage made with pork intestines.",
      "nl": "Andouillette is een worst gemaakt met varkensdarmen."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Une spécialité charcutière française connue pour son goût et son odeur très marqués.",
      "en": "A French charcuterie speciality known for its strong taste and smell.",
      "nl": "Een Franse vleeswarenspecialiteit met een sterke smaak en geur."
    },
    "country": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    },
    "region": {
      "fr": "France",
      "en": "France",
      "nl": "France"
    }
  },
  {
    "id": "c048",
    "mode": "culinary",
    "traditionName": {
      "fr": "Mämmi",
      "en": "Mämmi",
      "nl": "Mämmi"
    },
    "scenario": {
      "fr": "Le Mämmi est un dessert sucré à base de chocolat.",
      "en": "Mämmi is a sweet chocolate-based dessert.",
      "nl": "Mämmi is een zoet dessert op basis van chocolade."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Faux",
      "en": "False",
      "nl": "Onwaar"
    },
    "explanation": {
      "fr": "Un dessert finlandais traditionnellement associé à Pâques.",
      "en": "A Finnish dessert traditionally associated with Easter.",
      "nl": "Een Fins dessert dat traditioneel met Pasen wordt geassocieerd."
    },
    "country": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    },
    "region": {
      "fr": "Finlande",
      "en": "Finlande",
      "nl": "Finlande"
    }
  },
  {
    "id": "c049",
    "mode": "culinary",
    "traditionName": {
      "fr": "Jellied eels",
      "en": "Jellied eels",
      "nl": "Jellied eels"
    },
    "scenario": {
      "fr": "Le Jellied eels est des anguilles servies dans une gelée froide.",
      "en": "Jellied eels is eels served in cold jelly.",
      "nl": "Jellied eels is paling geserveerd in koude gelei."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Une spécialité traditionnelle associée à Londres.",
      "en": "A traditional speciality associated with London.",
      "nl": "Een traditionele specialiteit die met Londen wordt geassocieerd."
    },
    "country": {
      "fr": "Royaume-Uni",
      "en": "Royaume-Uni",
      "nl": "Royaume-Uni"
    },
    "region": {
      "fr": "Londres",
      "en": "Londres",
      "nl": "Londres"
    }
  },
  {
    "id": "c050",
    "mode": "culinary",
    "traditionName": {
      "fr": "Czernina",
      "en": "Czernina",
      "nl": "Czernina"
    },
    "scenario": {
      "fr": "Le Czernina est une soupe au sang de canard.",
      "en": "Czernina is a duck-blood soup.",
      "nl": "Czernina is een soep met eendenbloed."
    },
    "question": {
      "fr": "Cette affirmation est-elle correcte ?",
      "en": "Is this statement correct?",
      "nl": "Klopt deze uitspraak?"
    },
    "answers": {
      "fr": [
        "Vrai",
        "Faux",
        "Seulement dans certaines régions",
        "Nom inventé"
      ],
      "en": [
        "True",
        "False",
        "Only in some regions",
        "Invented name"
      ],
      "nl": [
        "Waar",
        "Onwaar",
        "Alleen in sommige regio’s",
        "Verzonnen naam"
      ]
    },
    "correctAnswer": {
      "fr": "Vrai",
      "en": "True",
      "nl": "Waar"
    },
    "explanation": {
      "fr": "Une soupe polonaise traditionnelle au goût aigre-doux.",
      "en": "A traditional Polish sweet-and-sour soup.",
      "nl": "Een traditionele Poolse zoetzure soep."
    },
    "country": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    },
    "region": {
      "fr": "Pologne",
      "en": "Pologne",
      "nl": "Pologne"
    }
  }
];
const EU_QUIZ_30=[
  {
    "id": "eu001",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu002",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu003",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu004",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu005",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu006",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu007",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu008",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu009",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu010",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu011",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu012",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu013",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu014",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu015",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu016",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu017",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu018",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu019",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu020",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu021",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu022",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu023",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu024",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu025",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu026",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Que signifie le cercle de douze étoiles sur le drapeau européen ?",
      "en": "What does the circle of twelve stars on the European flag symbolise?",
      "nl": "Wat symboliseert de cirkel van twaalf sterren op de Europese vlag?"
    },
    "answers": {
      "fr": [
        "L’unité et l’harmonie",
        "Les 12 premiers États membres",
        "Les 12 langues officielles",
        "Les 12 capitales fondatrices"
      ],
      "en": [
        "Unity and harmony",
        "The first 12 Member States",
        "The 12 official languages",
        "The 12 founding capitals"
      ],
      "nl": [
        "Eenheid en harmonie",
        "De eerste 12 lidstaten",
        "De 12 officiële talen",
        "De 12 oprichtingshoofdsteden"
      ]
    },
    "correctAnswer": {
      "fr": "L’unité et l’harmonie",
      "en": "Unity and harmony",
      "nl": "Eenheid en harmonie"
    },
    "explanation": {
      "fr": "Les douze étoiles représentent un symbole d’unité, de solidarité et d’harmonie entre les peuples d’Europe.",
      "en": "The twelve stars represent unity, solidarity and harmony among the peoples of Europe.",
      "nl": "De twaalf sterren staan symbool voor eenheid, solidariteit en harmonie tussen de volkeren van Europa."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu027",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇧🇪",
      "en": "🇧🇪",
      "nl": "🇧🇪"
    },
    "question": {
      "fr": "Quelle ville accueille plusieurs institutions européennes majeures ?",
      "en": "Which city hosts several major European institutions?",
      "nl": "Welke stad huisvest verschillende belangrijke Europese instellingen?"
    },
    "answers": {
      "fr": [
        "Bruxelles",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "en": [
        "Brussels",
        "Madrid",
        "Dublin",
        "Tallinn"
      ],
      "nl": [
        "Brussel",
        "Madrid",
        "Dublin",
        "Tallinn"
      ]
    },
    "correctAnswer": {
      "fr": "Bruxelles",
      "en": "Brussels",
      "nl": "Brussel"
    },
    "explanation": {
      "fr": "Bruxelles accueille notamment la Commission européenne, le Conseil de l’Union européenne et une partie des activités du Parlement européen.",
      "en": "Brussels hosts the European Commission, the Council of the European Union and part of the activities of the European Parliament.",
      "nl": "Brussel huisvest onder meer de Europese Commissie, de Raad van de Europese Unie en een deel van de activiteiten van het Europees Parlement."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu028",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇫🇷",
      "en": "🇫🇷",
      "nl": "🇫🇷"
    },
    "question": {
      "fr": "Dans quel pays se trouve le siège officiel du Parlement européen ?",
      "en": "In which country is the official seat of the European Parliament located?",
      "nl": "In welk land bevindt zich de officiële zetel van het Europees Parlement?"
    },
    "answers": {
      "fr": [
        "France",
        "Belgique",
        "Allemagne",
        "Italie"
      ],
      "en": [
        "France",
        "Belgium",
        "Germany",
        "Italy"
      ],
      "nl": [
        "Frankrijk",
        "België",
        "Duitsland",
        "Italië"
      ]
    },
    "correctAnswer": {
      "fr": "France",
      "en": "France",
      "nl": "Frankrijk"
    },
    "explanation": {
      "fr": "Le siège officiel du Parlement européen se trouve à Strasbourg.",
      "en": "The official seat of the European Parliament is in Strasbourg.",
      "nl": "De officiële zetel van het Europees Parlement bevindt zich in Straatsburg."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu029",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "🇪🇺",
      "en": "🇪🇺",
      "nl": "🇪🇺"
    },
    "question": {
      "fr": "Combien de pays sont membres de l’Union européenne ?",
      "en": "How many countries are members of the European Union?",
      "nl": "Hoeveel landen zijn lid van de Europese Unie?"
    },
    "answers": {
      "fr": [
        "27",
        "24",
        "30",
        "28"
      ],
      "en": [
        "27",
        "24",
        "30",
        "28"
      ],
      "nl": [
        "27",
        "24",
        "30",
        "28"
      ]
    },
    "correctAnswer": {
      "fr": "27",
      "en": "27",
      "nl": "27"
    },
    "explanation": {
      "fr": "L’Union européenne compte 27 États membres.",
      "en": "The European Union has 27 Member States.",
      "nl": "De Europese Unie telt 27 lidstaten."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  },
  {
    "id": "eu030",
    "mode": "eu",
    "traditionName": {
      "fr": "Quiz EU",
      "en": "EU Quiz",
      "nl": "EU Quiz"
    },
    "scenario": {
      "fr": "💶",
      "en": "💶",
      "nl": "💶"
    },
    "question": {
      "fr": "Quel symbole est associé à la monnaie euro ?",
      "en": "Which symbol is associated with the euro currency?",
      "nl": "Welk symbool hoort bij de euro?"
    },
    "answers": {
      "fr": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "en": [
        "€",
        "$",
        "£",
        "₣"
      ],
      "nl": [
        "€",
        "$",
        "£",
        "₣"
      ]
    },
    "correctAnswer": {
      "fr": "€",
      "en": "€",
      "nl": "€"
    },
    "explanation": {
      "fr": "Le symbole de l’euro est €.",
      "en": "The symbol of the euro is €.",
      "nl": "Het symbool van de euro is €."
    },
    "country": {
      "fr": "Union européenne",
      "en": "European Union",
      "nl": "Europese Unie"
    },
    "region": {
      "fr": "Europe",
      "en": "Europe",
      "nl": "Europa"
    }
  }
];
