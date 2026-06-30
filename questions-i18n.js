const TRANSLATIONS={
  "en": {
    "title": "Europe’s Traditions Challenge",
    "start": "Start challenge",
    "next": "Next question",
    "finish": "Finish",
    "restart": "Play again",
    "score": "Score",
    "question": "Question",
    "of": "of",
    "correct": "Correct",
    "wrong": "Incorrect",
    "timeout": "Time is up",
    "finalTitle": "Challenge completed",
    "finalText": "Final score",
    "classic": "Classic",
    "teams": "Team duel",
    "teamA": "Team A",
    "teamB": "Team B",
    "questionCount": "30 questions · 27 EU Member States"
  },
  "fr": {
    "title": "Challenge des traditions européennes",
    "start": "Lancer le challenge",
    "next": "Question suivante",
    "finish": "Terminer",
    "restart": "Rejouer",
    "score": "Score",
    "question": "Question",
    "of": "sur",
    "correct": "Correct",
    "wrong": "Incorrect",
    "timeout": "Temps écoulé",
    "finalTitle": "Challenge terminé",
    "finalText": "Score final",
    "classic": "Classique",
    "teams": "Duel équipes",
    "teamA": "Équipe A",
    "teamB": "Équipe B",
    "questionCount": "30 questions · 27 États membres"
  },
  "nl": {
    "title": "Europese Tradities Challenge",
    "start": "Challenge starten",
    "next": "Volgende vraag",
    "finish": "Einde",
    "restart": "Opnieuw spelen",
    "score": "Score",
    "question": "Vraag",
    "of": "van",
    "correct": "Correct",
    "wrong": "Fout",
    "timeout": "Tijd voorbij",
    "finalTitle": "Challenge voltooid",
    "finalText": "Eindscore",
    "classic": "Klassiek",
    "teams": "Teamduel",
    "teamA": "Team A",
    "teamB": "Team B",
    "questionCount": "30 vragen · 27 EU-lidstaten"
  }
};
const QUESTIONS=[
  {
    "id": "q_001",
    "country": "Spain",
    "region": "Buñol, Valencia",
    "theme": "Food fight",
    "difficulty": "easy",
    "question": "In which country can you find La Tomatina?",
    "answers": [
      "Spain",
      "France",
      "Italy"
    ],
    "correctAnswer": "Spain",
    "explanation": "La Tomatina is associated with Buñol, Valencia: people throw tomatoes in a huge public food fight."
  },
  {
    "id": "q_002",
    "country": "Spain",
    "region": "Valencia",
    "theme": "Fire festival",
    "difficulty": "easy",
    "question": "In which country can you find Las Fallas?",
    "answers": [
      "Spain",
      "France",
      "Italy"
    ],
    "correctAnswer": "Spain",
    "explanation": "Las Fallas is associated with Valencia: large artistic sculptures are displayed and burned."
  },
  {
    "id": "q_003",
    "country": "Spain",
    "region": "Catalonia",
    "theme": "Human towers",
    "difficulty": "easy",
    "question": "In which country can you find Castells?",
    "answers": [
      "Spain",
      "France",
      "Italy"
    ],
    "correctAnswer": "Spain",
    "explanation": "Castells is associated with Catalonia: teams build impressive human towers."
  },
  {
    "id": "q_004",
    "country": "Spain",
    "region": "Pamplona, Navarre",
    "theme": "Running festival",
    "difficulty": "easy",
    "question": "In which country can you find San Fermín?",
    "answers": [
      "Spain",
      "France",
      "Italy"
    ],
    "correctAnswer": "Spain",
    "explanation": "San Fermín is associated with Pamplona, Navarre: people run through the streets ahead of bulls."
  },
  {
    "id": "q_005",
    "country": "Belgium",
    "region": "Oostduinkerke",
    "theme": "Sea tradition",
    "difficulty": "easy",
    "question": "In which country can you find Horseback shrimp fishing?",
    "answers": [
      "Belgium",
      "France",
      "Italy"
    ],
    "correctAnswer": "Belgium",
    "explanation": "Horseback shrimp fishing is associated with Oostduinkerke: fishermen catch shrimp while riding horses into the sea."
  },
  {
    "id": "q_006",
    "country": "Belgium",
    "region": "Binche",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Carnival of Binche?",
    "answers": [
      "Belgium",
      "France",
      "Italy"
    ],
    "correctAnswer": "Belgium",
    "explanation": "Carnival of Binche is associated with Binche: Gilles wear masks, ostrich feathers and throw oranges."
  },
  {
    "id": "q_007",
    "country": "Belgium",
    "region": "Mons",
    "theme": "Dragon festival",
    "difficulty": "easy",
    "question": "In which country can you find Ducasse de Mons?",
    "answers": [
      "Belgium",
      "France",
      "Italy"
    ],
    "correctAnswer": "Belgium",
    "explanation": "Ducasse de Mons is associated with Mons: Saint George symbolically fights a dragon."
  },
  {
    "id": "q_008",
    "country": "France",
    "region": "Bessières",
    "theme": "Food festival",
    "difficulty": "easy",
    "question": "In which country can you find Giant Omelette Festival?",
    "answers": [
      "France",
      "Belgium",
      "Italy"
    ],
    "correctAnswer": "France",
    "explanation": "Giant Omelette Festival is associated with Bessières: a giant omelette is cooked for a public celebration."
  },
  {
    "id": "q_009",
    "country": "France",
    "region": "Menton",
    "theme": "Citrus festival",
    "difficulty": "easy",
    "question": "In which country can you find Menton Lemon Festival?",
    "answers": [
      "France",
      "Belgium",
      "Italy"
    ],
    "correctAnswer": "France",
    "explanation": "Menton Lemon Festival is associated with Menton: giant citrus sculptures are built."
  },
  {
    "id": "q_010",
    "country": "France",
    "region": "Dunkirk",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Dunkirk Carnival?",
    "answers": [
      "France",
      "Belgium",
      "Italy"
    ],
    "correctAnswer": "France",
    "explanation": "Dunkirk Carnival is associated with Dunkirk: herrings are thrown from the town hall balcony."
  },
  {
    "id": "q_011",
    "country": "France",
    "region": "Nice",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Nice Carnival?",
    "answers": [
      "France",
      "Belgium",
      "Italy"
    ],
    "correctAnswer": "France",
    "explanation": "Nice Carnival is associated with Nice: flower battles take place on decorated floats."
  },
  {
    "id": "q_012",
    "country": "Italy",
    "region": "Ivrea",
    "theme": "Food fight",
    "difficulty": "easy",
    "question": "In which country can you find Battle of the Oranges?",
    "answers": [
      "Italy",
      "France",
      "Spain"
    ],
    "correctAnswer": "Italy",
    "explanation": "Battle of the Oranges is associated with Ivrea: teams throw oranges during Carnival."
  },
  {
    "id": "q_013",
    "country": "Italy",
    "region": "Venice",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Carnival of Venice?",
    "answers": [
      "Italy",
      "France",
      "Spain"
    ],
    "correctAnswer": "Italy",
    "explanation": "Carnival of Venice is associated with Venice: elegant masks and costumes fill the city."
  },
  {
    "id": "q_014",
    "country": "Italy",
    "region": "Siena",
    "theme": "Horse race",
    "difficulty": "easy",
    "question": "In which country can you find Palio di Siena?",
    "answers": [
      "Italy",
      "France",
      "Spain"
    ],
    "correctAnswer": "Italy",
    "explanation": "Palio di Siena is associated with Siena: districts compete in a historic horse race."
  },
  {
    "id": "q_015",
    "country": "Italy",
    "region": "Florence",
    "theme": "Historic sport",
    "difficulty": "easy",
    "question": "In which country can you find Calcio Storico Fiorentino?",
    "answers": [
      "Italy",
      "France",
      "Spain"
    ],
    "correctAnswer": "Italy",
    "explanation": "Calcio Storico Fiorentino is associated with Florence: a rough historic ball game is played in costume."
  },
  {
    "id": "q_016",
    "country": "Portugal",
    "region": "Porto",
    "theme": "Saint John festival",
    "difficulty": "easy",
    "question": "In which country can you find Festa de São João do Porto?",
    "answers": [
      "Portugal",
      "France",
      "Italy"
    ],
    "correctAnswer": "Portugal",
    "explanation": "Festa de São João do Porto is associated with Porto: people playfully tap each other with plastic hammers."
  },
  {
    "id": "q_017",
    "country": "Portugal",
    "region": "Tomar",
    "theme": "Floral festival",
    "difficulty": "easy",
    "question": "In which country can you find Festa dos Tabuleiros?",
    "answers": [
      "Portugal",
      "France",
      "Italy"
    ],
    "correctAnswer": "Portugal",
    "explanation": "Festa dos Tabuleiros is associated with Tomar: women carry tall trays of bread and flowers."
  },
  {
    "id": "q_018",
    "country": "Portugal",
    "region": "Podence",
    "theme": "Masked carnival",
    "difficulty": "easy",
    "question": "In which country can you find Caretos of Podence?",
    "answers": [
      "Portugal",
      "France",
      "Italy"
    ],
    "correctAnswer": "Portugal",
    "explanation": "Caretos of Podence is associated with Podence: colourful masked figures wear fringed costumes."
  },
  {
    "id": "q_019",
    "country": "Netherlands",
    "region": "Alkmaar and Gouda",
    "theme": "Food market",
    "difficulty": "easy",
    "question": "In which country can you find Dutch cheese markets?",
    "answers": [
      "Netherlands",
      "France",
      "Italy"
    ],
    "correctAnswer": "Netherlands",
    "explanation": "Dutch cheese markets is associated with Alkmaar and Gouda: cheese is theatrically weighed and carried."
  },
  {
    "id": "q_020",
    "country": "Netherlands",
    "region": "Nationwide",
    "theme": "National celebration",
    "difficulty": "easy",
    "question": "In which country can you find King’s Day?",
    "answers": [
      "Netherlands",
      "France",
      "Italy"
    ],
    "correctAnswer": "Netherlands",
    "explanation": "King’s Day is associated with Nationwide: orange dominates street celebrations."
  },
  {
    "id": "q_021",
    "country": "Germany",
    "region": "Bavaria",
    "theme": "Beer festival",
    "difficulty": "easy",
    "question": "In which country can you find Oktoberfest?",
    "answers": [
      "Germany",
      "France",
      "Italy"
    ],
    "correctAnswer": "Germany",
    "explanation": "Oktoberfest is associated with Bavaria: beer tents and Bavarian clothing are central."
  },
  {
    "id": "q_022",
    "country": "Germany",
    "region": "Harz Mountains",
    "theme": "Folklore",
    "difficulty": "easy",
    "question": "In which country can you find Walpurgis Night?",
    "answers": [
      "Germany",
      "France",
      "Italy"
    ],
    "correctAnswer": "Germany",
    "explanation": "Walpurgis Night is associated with Harz Mountains: bonfires and witch folklore are associated with the night."
  },
  {
    "id": "q_023",
    "country": "Austria",
    "region": "Alpine regions",
    "theme": "Winter folklore",
    "difficulty": "easy",
    "question": "In which country can you find Krampus parades?",
    "answers": [
      "Austria",
      "France",
      "Italy"
    ],
    "correctAnswer": "Austria",
    "explanation": "Krampus parades is associated with Alpine regions: frightening horned figures appear in winter parades."
  },
  {
    "id": "q_024",
    "country": "Austria",
    "region": "Vienna",
    "theme": "Dance tradition",
    "difficulty": "easy",
    "question": "In which country can you find Vienna Ball Season?",
    "answers": [
      "Austria",
      "France",
      "Italy"
    ],
    "correctAnswer": "Austria",
    "explanation": "Vienna Ball Season is associated with Vienna: formal winter balls are a major social tradition."
  },
  {
    "id": "q_025",
    "country": "Ireland",
    "region": "County Kerry",
    "theme": "Animal festival",
    "difficulty": "easy",
    "question": "In which country can you find Puck Fair?",
    "answers": [
      "Ireland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Ireland",
    "explanation": "Puck Fair is associated with County Kerry: a goat is symbolically crowned."
  },
  {
    "id": "q_026",
    "country": "Ireland",
    "region": "Nationwide",
    "theme": "National celebration",
    "difficulty": "easy",
    "question": "In which country can you find Saint Patrick’s Day?",
    "answers": [
      "Ireland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Ireland",
    "explanation": "Saint Patrick’s Day is associated with Nationwide: green is the dominant colour of the celebration."
  },
  {
    "id": "q_027",
    "country": "Denmark",
    "region": "Nationwide",
    "theme": "Carnival-like custom",
    "difficulty": "easy",
    "question": "In which country can you find Fastelavn?",
    "answers": [
      "Denmark",
      "France",
      "Italy"
    ],
    "correctAnswer": "Denmark",
    "explanation": "Fastelavn is associated with Nationwide: children hit a decorated barrel."
  },
  {
    "id": "q_028",
    "country": "Denmark",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "easy",
    "question": "In which country can you find Sankt Hans?",
    "answers": [
      "Denmark",
      "France",
      "Italy"
    ],
    "correctAnswer": "Denmark",
    "explanation": "Sankt Hans is associated with Nationwide: bonfires are lit on Midsummer Eve."
  },
  {
    "id": "q_029",
    "country": "Sweden",
    "region": "Gävle",
    "theme": "Christmas tradition",
    "difficulty": "easy",
    "question": "In which country can you find Gävle Goat?",
    "answers": [
      "Sweden",
      "France",
      "Italy"
    ],
    "correctAnswer": "Sweden",
    "explanation": "Gävle Goat is associated with Gävle: a giant straw goat is built during the Christmas season."
  },
  {
    "id": "q_030",
    "country": "Sweden",
    "region": "Nationwide",
    "theme": "Light festival",
    "difficulty": "easy",
    "question": "In which country can you find Saint Lucia?",
    "answers": [
      "Sweden",
      "France",
      "Italy"
    ],
    "correctAnswer": "Sweden",
    "explanation": "Saint Lucia is associated with Nationwide: candlelit processions with white robes are held."
  },
  {
    "id": "q_031",
    "country": "Finland",
    "region": "Oulu",
    "theme": "Music competition",
    "difficulty": "easy",
    "question": "In which country can you find Air Guitar World Championships?",
    "answers": [
      "Finland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Finland",
    "explanation": "Air Guitar World Championships is associated with Oulu: participants perform with imaginary guitars."
  },
  {
    "id": "q_032",
    "country": "Finland",
    "region": "Sonkajärvi",
    "theme": "Unusual sport",
    "difficulty": "easy",
    "question": "In which country can you find Wife Carrying?",
    "answers": [
      "Finland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Finland",
    "explanation": "Wife Carrying is associated with Sonkajärvi: competitors race while carrying their partner."
  },
  {
    "id": "q_033",
    "country": "Poland",
    "region": "Nationwide",
    "theme": "Easter custom",
    "difficulty": "easy",
    "question": "In which country can you find Śmigus-Dyngus?",
    "answers": [
      "Poland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Poland",
    "explanation": "Śmigus-Dyngus is associated with Nationwide: people splash water on Easter Monday."
  },
  {
    "id": "q_034",
    "country": "Poland",
    "region": "Kraków",
    "theme": "Nativity craft",
    "difficulty": "easy",
    "question": "In which country can you find Kraków szopki?",
    "answers": [
      "Poland",
      "France",
      "Italy"
    ],
    "correctAnswer": "Poland",
    "explanation": "Kraków szopki is associated with Kraków: elaborate decorative nativity scenes are created."
  },
  {
    "id": "q_035",
    "country": "Czechia",
    "region": "Nationwide",
    "theme": "Easter craft",
    "difficulty": "easy",
    "question": "In which country can you find Kraslice?",
    "answers": [
      "Czechia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Czechia",
    "explanation": "Kraslice is associated with Nationwide: highly decorated Easter eggs are made."
  },
  {
    "id": "q_036",
    "country": "Czechia",
    "region": "Moravia",
    "theme": "Folk tradition",
    "difficulty": "easy",
    "question": "In which country can you find Ride of the Kings?",
    "answers": [
      "Czechia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Czechia",
    "explanation": "Ride of the Kings is associated with Moravia: a young king is escorted in a colourful procession."
  },
  {
    "id": "q_037",
    "country": "Slovakia",
    "region": "Nationwide",
    "theme": "Easter custom",
    "difficulty": "easy",
    "question": "In which country can you find Slovak Easter Monday?",
    "answers": [
      "Slovakia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Slovakia",
    "explanation": "Slovak Easter Monday is associated with Nationwide: water sprinkling and decorated willow whips may appear."
  },
  {
    "id": "q_038",
    "country": "Hungary",
    "region": "Mohács",
    "theme": "Masked carnival",
    "difficulty": "easy",
    "question": "In which country can you find Busójárás?",
    "answers": [
      "Hungary",
      "France",
      "Italy"
    ],
    "correctAnswer": "Hungary",
    "explanation": "Busójárás is associated with Mohács: frightening masks are used to chase away winter."
  },
  {
    "id": "q_039",
    "country": "Slovenia",
    "region": "Ptuj",
    "theme": "Shrovetide carnival",
    "difficulty": "easy",
    "question": "In which country can you find Kurentovanje?",
    "answers": [
      "Slovenia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Slovenia",
    "explanation": "Kurentovanje is associated with Ptuj: shaggy Kurenti wear bells to chase away winter."
  },
  {
    "id": "q_040",
    "country": "Croatia",
    "region": "Sinj",
    "theme": "Equestrian competition",
    "difficulty": "easy",
    "question": "In which country can you find Sinjska Alka?",
    "answers": [
      "Croatia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Croatia",
    "explanation": "Sinjska Alka is associated with Sinj: horsemen aim lances at a hanging metal ring."
  },
  {
    "id": "q_041",
    "country": "Bulgaria",
    "region": "Nationwide",
    "theme": "Masked ritual",
    "difficulty": "easy",
    "question": "In which country can you find Kukeri?",
    "answers": [
      "Bulgaria",
      "France",
      "Italy"
    ],
    "correctAnswer": "Bulgaria",
    "explanation": "Kukeri is associated with Nationwide: masked figures wear large bells to scare away evil spirits."
  },
  {
    "id": "q_042",
    "country": "Bulgaria",
    "region": "Nationwide",
    "theme": "Spring custom",
    "difficulty": "easy",
    "question": "In which country can you find Baba Marta?",
    "answers": [
      "Bulgaria",
      "France",
      "Italy"
    ],
    "correctAnswer": "Bulgaria",
    "explanation": "Baba Marta is associated with Nationwide: red-and-white martenitsa tokens are exchanged in March."
  },
  {
    "id": "q_043",
    "country": "Romania",
    "region": "Nationwide",
    "theme": "Spring custom",
    "difficulty": "easy",
    "question": "In which country can you find Mărțișor?",
    "answers": [
      "Romania",
      "France",
      "Italy"
    ],
    "correctAnswer": "Romania",
    "explanation": "Mărțișor is associated with Nationwide: red-and-white spring tokens are exchanged on 1 March."
  },
  {
    "id": "q_044",
    "country": "Romania",
    "region": "Maramureș and Moldova",
    "theme": "Winter masks",
    "difficulty": "easy",
    "question": "In which country can you find Bear dances?",
    "answers": [
      "Romania",
      "France",
      "Italy"
    ],
    "correctAnswer": "Romania",
    "explanation": "Bear dances is associated with Maramureș and Moldova: bear masks and dances mark winter folk customs."
  },
  {
    "id": "q_045",
    "country": "Greece",
    "region": "Galaxidi",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Flour War?",
    "answers": [
      "Greece",
      "France",
      "Italy"
    ],
    "correctAnswer": "Greece",
    "explanation": "Flour War is associated with Galaxidi: people throw flour during Carnival."
  },
  {
    "id": "q_046",
    "country": "Greece",
    "region": "Chios",
    "theme": "Easter custom",
    "difficulty": "easy",
    "question": "In which country can you find Rouketopolemos?",
    "answers": [
      "Greece",
      "France",
      "Italy"
    ],
    "correctAnswer": "Greece",
    "explanation": "Rouketopolemos is associated with Chios: a rocket war is held between churches at Easter."
  },
  {
    "id": "q_047",
    "country": "Cyprus",
    "region": "Coastal towns",
    "theme": "Water festival",
    "difficulty": "easy",
    "question": "In which country can you find Kataklysmos?",
    "answers": [
      "Cyprus",
      "France",
      "Italy"
    ],
    "correctAnswer": "Cyprus",
    "explanation": "Kataklysmos is associated with Coastal towns: a festival of the flood is celebrated near the sea."
  },
  {
    "id": "q_048",
    "country": "Cyprus",
    "region": "Limassol",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Limassol Carnival?",
    "answers": [
      "Cyprus",
      "France",
      "Italy"
    ],
    "correctAnswer": "Cyprus",
    "explanation": "Limassol Carnival is associated with Limassol: a large colourful Carnival parade takes place."
  },
  {
    "id": "q_049",
    "country": "Malta",
    "region": "Valletta and Nadur",
    "theme": "Carnival",
    "difficulty": "easy",
    "question": "In which country can you find Malta Carnival?",
    "answers": [
      "Malta",
      "France",
      "Italy"
    ],
    "correctAnswer": "Malta",
    "explanation": "Malta Carnival is associated with Valletta and Nadur: colourful floats and costumes fill the streets."
  },
  {
    "id": "q_050",
    "country": "Malta",
    "region": "Villages",
    "theme": "Village festival",
    "difficulty": "easy",
    "question": "In which country can you find Maltese festas?",
    "answers": [
      "Malta",
      "France",
      "Italy"
    ],
    "correctAnswer": "Malta",
    "explanation": "Maltese festas is associated with Villages: fireworks and band marches are typical village celebrations."
  },
  {
    "id": "q_051",
    "country": "Estonia",
    "region": "Nationwide",
    "theme": "Song festival",
    "difficulty": "easy",
    "question": "In which country can you find Estonian Song Celebration?",
    "answers": [
      "Estonia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Estonia",
    "explanation": "Estonian Song Celebration is associated with Nationwide: huge choirs gather for a major singing tradition."
  },
  {
    "id": "q_052",
    "country": "Estonia",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "easy",
    "question": "In which country can you find Jaanipäev?",
    "answers": [
      "Estonia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Estonia",
    "explanation": "Jaanipäev is associated with Nationwide: midsummer bonfires are central to the celebration."
  },
  {
    "id": "q_053",
    "country": "Latvia",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "easy",
    "question": "In which country can you find Jāņi?",
    "answers": [
      "Latvia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Latvia",
    "explanation": "Jāņi is associated with Nationwide: songs, wreaths, bonfires and caraway cheese mark midsummer."
  },
  {
    "id": "q_054",
    "country": "Latvia",
    "region": "Nationwide",
    "theme": "Song and dance",
    "difficulty": "easy",
    "question": "In which country can you find Song and Dance Celebration?",
    "answers": [
      "Latvia",
      "France",
      "Italy"
    ],
    "correctAnswer": "Latvia",
    "explanation": "Song and Dance Celebration is associated with Nationwide: large choirs and dance groups gather."
  },
  {
    "id": "q_055",
    "country": "Lithuania",
    "region": "Vilnius",
    "theme": "Spring fair",
    "difficulty": "easy",
    "question": "In which country can you find Kaziukas Fair?",
    "answers": [
      "Lithuania",
      "France",
      "Italy"
    ],
    "correctAnswer": "Lithuania",
    "explanation": "Kaziukas Fair is associated with Vilnius: crafts and traditional goods are sold at a spring fair."
  },
  {
    "id": "q_056",
    "country": "Lithuania",
    "region": "Trakai",
    "theme": "Food tradition",
    "difficulty": "easy",
    "question": "In which country can you find Kibinai tradition?",
    "answers": [
      "Lithuania",
      "France",
      "Italy"
    ],
    "correctAnswer": "Lithuania",
    "explanation": "Kibinai tradition is associated with Trakai: a pastry linked with Karaim culture is eaten."
  },
  {
    "id": "q_057",
    "country": "Luxembourg",
    "region": "Luxembourg City",
    "theme": "Spring festival",
    "difficulty": "easy",
    "question": "In which country can you find Éimaischen?",
    "answers": [
      "Luxembourg",
      "France",
      "Italy"
    ],
    "correctAnswer": "Luxembourg",
    "explanation": "Éimaischen is associated with Luxembourg City: small clay bird whistles called Péckvillercher are sold."
  },
  {
    "id": "q_058",
    "country": "Luxembourg",
    "region": "Echternach",
    "theme": "Procession",
    "difficulty": "easy",
    "question": "In which country can you find Hopping Procession of Echternach?",
    "answers": [
      "Luxembourg",
      "France",
      "Italy"
    ],
    "correctAnswer": "Luxembourg",
    "explanation": "Hopping Procession of Echternach is associated with Echternach: participants move in a distinctive hopping procession."
  },
  {
    "id": "q_059",
    "country": "Spain",
    "region": "Buñol, Valencia",
    "theme": "Food fight",
    "difficulty": "medium",
    "question": "Which tradition is linked with Buñol, Valencia?",
    "answers": [
      "La Tomatina",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "La Tomatina",
    "explanation": "Buñol, Valencia is linked with La Tomatina."
  },
  {
    "id": "q_060",
    "country": "Spain",
    "region": "Valencia",
    "theme": "Fire festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Valencia?",
    "answers": [
      "Las Fallas",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Las Fallas",
    "explanation": "Valencia is linked with Las Fallas."
  },
  {
    "id": "q_061",
    "country": "Spain",
    "region": "Catalonia",
    "theme": "Human towers",
    "difficulty": "medium",
    "question": "Which tradition is linked with Catalonia?",
    "answers": [
      "Castells",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Castells",
    "explanation": "Catalonia is linked with Castells."
  },
  {
    "id": "q_062",
    "country": "Spain",
    "region": "Pamplona, Navarre",
    "theme": "Running festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Pamplona, Navarre?",
    "answers": [
      "San Fermín",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "San Fermín",
    "explanation": "Pamplona, Navarre is linked with San Fermín."
  },
  {
    "id": "q_063",
    "country": "Belgium",
    "region": "Oostduinkerke",
    "theme": "Sea tradition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Oostduinkerke?",
    "answers": [
      "Horseback shrimp fishing",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Horseback shrimp fishing",
    "explanation": "Oostduinkerke is linked with Horseback shrimp fishing."
  },
  {
    "id": "q_064",
    "country": "Belgium",
    "region": "Binche",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Binche?",
    "answers": [
      "Carnival of Binche",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Carnival of Binche",
    "explanation": "Binche is linked with Carnival of Binche."
  },
  {
    "id": "q_065",
    "country": "Belgium",
    "region": "Mons",
    "theme": "Dragon festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Mons?",
    "answers": [
      "Ducasse de Mons",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Ducasse de Mons",
    "explanation": "Mons is linked with Ducasse de Mons."
  },
  {
    "id": "q_066",
    "country": "France",
    "region": "Bessières",
    "theme": "Food festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Bessières?",
    "answers": [
      "Giant Omelette Festival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Giant Omelette Festival",
    "explanation": "Bessières is linked with Giant Omelette Festival."
  },
  {
    "id": "q_067",
    "country": "France",
    "region": "Menton",
    "theme": "Citrus festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Menton?",
    "answers": [
      "Menton Lemon Festival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Menton Lemon Festival",
    "explanation": "Menton is linked with Menton Lemon Festival."
  },
  {
    "id": "q_068",
    "country": "France",
    "region": "Dunkirk",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Dunkirk?",
    "answers": [
      "Dunkirk Carnival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Dunkirk Carnival",
    "explanation": "Dunkirk is linked with Dunkirk Carnival."
  },
  {
    "id": "q_069",
    "country": "France",
    "region": "Nice",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nice?",
    "answers": [
      "Nice Carnival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Nice Carnival",
    "explanation": "Nice is linked with Nice Carnival."
  },
  {
    "id": "q_070",
    "country": "Italy",
    "region": "Ivrea",
    "theme": "Food fight",
    "difficulty": "medium",
    "question": "Which tradition is linked with Ivrea?",
    "answers": [
      "Battle of the Oranges",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Battle of the Oranges",
    "explanation": "Ivrea is linked with Battle of the Oranges."
  },
  {
    "id": "q_071",
    "country": "Italy",
    "region": "Venice",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Venice?",
    "answers": [
      "Carnival of Venice",
      "La Tomatina",
      "Kukeri"
    ],
    "correctAnswer": "Carnival of Venice",
    "explanation": "Venice is linked with Carnival of Venice."
  },
  {
    "id": "q_072",
    "country": "Italy",
    "region": "Siena",
    "theme": "Horse race",
    "difficulty": "medium",
    "question": "Which tradition is linked with Siena?",
    "answers": [
      "Palio di Siena",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Palio di Siena",
    "explanation": "Siena is linked with Palio di Siena."
  },
  {
    "id": "q_073",
    "country": "Italy",
    "region": "Florence",
    "theme": "Historic sport",
    "difficulty": "medium",
    "question": "Which tradition is linked with Florence?",
    "answers": [
      "Calcio Storico Fiorentino",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Calcio Storico Fiorentino",
    "explanation": "Florence is linked with Calcio Storico Fiorentino."
  },
  {
    "id": "q_074",
    "country": "Portugal",
    "region": "Porto",
    "theme": "Saint John festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Porto?",
    "answers": [
      "Festa de São João do Porto",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Festa de São João do Porto",
    "explanation": "Porto is linked with Festa de São João do Porto."
  },
  {
    "id": "q_075",
    "country": "Portugal",
    "region": "Tomar",
    "theme": "Floral festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Tomar?",
    "answers": [
      "Festa dos Tabuleiros",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Festa dos Tabuleiros",
    "explanation": "Tomar is linked with Festa dos Tabuleiros."
  },
  {
    "id": "q_076",
    "country": "Portugal",
    "region": "Podence",
    "theme": "Masked carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Podence?",
    "answers": [
      "Caretos of Podence",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Caretos of Podence",
    "explanation": "Podence is linked with Caretos of Podence."
  },
  {
    "id": "q_077",
    "country": "Netherlands",
    "region": "Alkmaar and Gouda",
    "theme": "Food market",
    "difficulty": "medium",
    "question": "Which tradition is linked with Alkmaar and Gouda?",
    "answers": [
      "Dutch cheese markets",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Dutch cheese markets",
    "explanation": "Alkmaar and Gouda is linked with Dutch cheese markets."
  },
  {
    "id": "q_078",
    "country": "Netherlands",
    "region": "Nationwide",
    "theme": "National celebration",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "King’s Day",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "King’s Day",
    "explanation": "Nationwide is linked with King’s Day."
  },
  {
    "id": "q_079",
    "country": "Germany",
    "region": "Bavaria",
    "theme": "Beer festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Bavaria?",
    "answers": [
      "Oktoberfest",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Oktoberfest",
    "explanation": "Bavaria is linked with Oktoberfest."
  },
  {
    "id": "q_080",
    "country": "Germany",
    "region": "Harz Mountains",
    "theme": "Folklore",
    "difficulty": "medium",
    "question": "Which tradition is linked with Harz Mountains?",
    "answers": [
      "Walpurgis Night",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Walpurgis Night",
    "explanation": "Harz Mountains is linked with Walpurgis Night."
  },
  {
    "id": "q_081",
    "country": "Austria",
    "region": "Alpine regions",
    "theme": "Winter folklore",
    "difficulty": "medium",
    "question": "Which tradition is linked with Alpine regions?",
    "answers": [
      "Krampus parades",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Krampus parades",
    "explanation": "Alpine regions is linked with Krampus parades."
  },
  {
    "id": "q_082",
    "country": "Austria",
    "region": "Vienna",
    "theme": "Dance tradition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Vienna?",
    "answers": [
      "Vienna Ball Season",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Vienna Ball Season",
    "explanation": "Vienna is linked with Vienna Ball Season."
  },
  {
    "id": "q_083",
    "country": "Ireland",
    "region": "County Kerry",
    "theme": "Animal festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with County Kerry?",
    "answers": [
      "Puck Fair",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Puck Fair",
    "explanation": "County Kerry is linked with Puck Fair."
  },
  {
    "id": "q_084",
    "country": "Ireland",
    "region": "Nationwide",
    "theme": "National celebration",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Saint Patrick’s Day",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Saint Patrick’s Day",
    "explanation": "Nationwide is linked with Saint Patrick’s Day."
  },
  {
    "id": "q_085",
    "country": "Denmark",
    "region": "Nationwide",
    "theme": "Carnival-like custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Fastelavn",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Fastelavn",
    "explanation": "Nationwide is linked with Fastelavn."
  },
  {
    "id": "q_086",
    "country": "Denmark",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Sankt Hans",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Sankt Hans",
    "explanation": "Nationwide is linked with Sankt Hans."
  },
  {
    "id": "q_087",
    "country": "Sweden",
    "region": "Gävle",
    "theme": "Christmas tradition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Gävle?",
    "answers": [
      "Gävle Goat",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Gävle Goat",
    "explanation": "Gävle is linked with Gävle Goat."
  },
  {
    "id": "q_088",
    "country": "Sweden",
    "region": "Nationwide",
    "theme": "Light festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Saint Lucia",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Saint Lucia",
    "explanation": "Nationwide is linked with Saint Lucia."
  },
  {
    "id": "q_089",
    "country": "Finland",
    "region": "Oulu",
    "theme": "Music competition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Oulu?",
    "answers": [
      "Air Guitar World Championships",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Air Guitar World Championships",
    "explanation": "Oulu is linked with Air Guitar World Championships."
  },
  {
    "id": "q_090",
    "country": "Finland",
    "region": "Sonkajärvi",
    "theme": "Unusual sport",
    "difficulty": "medium",
    "question": "Which tradition is linked with Sonkajärvi?",
    "answers": [
      "Wife Carrying",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Wife Carrying",
    "explanation": "Sonkajärvi is linked with Wife Carrying."
  },
  {
    "id": "q_091",
    "country": "Poland",
    "region": "Nationwide",
    "theme": "Easter custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Śmigus-Dyngus",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Śmigus-Dyngus",
    "explanation": "Nationwide is linked with Śmigus-Dyngus."
  },
  {
    "id": "q_092",
    "country": "Poland",
    "region": "Kraków",
    "theme": "Nativity craft",
    "difficulty": "medium",
    "question": "Which tradition is linked with Kraków?",
    "answers": [
      "Kraków szopki",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kraków szopki",
    "explanation": "Kraków is linked with Kraków szopki."
  },
  {
    "id": "q_093",
    "country": "Czechia",
    "region": "Nationwide",
    "theme": "Easter craft",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Kraslice",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kraslice",
    "explanation": "Nationwide is linked with Kraslice."
  },
  {
    "id": "q_094",
    "country": "Czechia",
    "region": "Moravia",
    "theme": "Folk tradition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Moravia?",
    "answers": [
      "Ride of the Kings",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Ride of the Kings",
    "explanation": "Moravia is linked with Ride of the Kings."
  },
  {
    "id": "q_095",
    "country": "Slovakia",
    "region": "Nationwide",
    "theme": "Easter custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Slovak Easter Monday",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Slovak Easter Monday",
    "explanation": "Nationwide is linked with Slovak Easter Monday."
  },
  {
    "id": "q_096",
    "country": "Hungary",
    "region": "Mohács",
    "theme": "Masked carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Mohács?",
    "answers": [
      "Busójárás",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Busójárás",
    "explanation": "Mohács is linked with Busójárás."
  },
  {
    "id": "q_097",
    "country": "Slovenia",
    "region": "Ptuj",
    "theme": "Shrovetide carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Ptuj?",
    "answers": [
      "Kurentovanje",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kurentovanje",
    "explanation": "Ptuj is linked with Kurentovanje."
  },
  {
    "id": "q_098",
    "country": "Croatia",
    "region": "Sinj",
    "theme": "Equestrian competition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Sinj?",
    "answers": [
      "Sinjska Alka",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Sinjska Alka",
    "explanation": "Sinj is linked with Sinjska Alka."
  },
  {
    "id": "q_099",
    "country": "Bulgaria",
    "region": "Nationwide",
    "theme": "Masked ritual",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Kukeri",
      "Carnival of Venice",
      "Castells"
    ],
    "correctAnswer": "Kukeri",
    "explanation": "Nationwide is linked with Kukeri."
  },
  {
    "id": "q_100",
    "country": "Bulgaria",
    "region": "Nationwide",
    "theme": "Spring custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Baba Marta",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Baba Marta",
    "explanation": "Nationwide is linked with Baba Marta."
  },
  {
    "id": "q_101",
    "country": "Romania",
    "region": "Nationwide",
    "theme": "Spring custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Mărțișor",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Mărțișor",
    "explanation": "Nationwide is linked with Mărțișor."
  },
  {
    "id": "q_102",
    "country": "Romania",
    "region": "Maramureș and Moldova",
    "theme": "Winter masks",
    "difficulty": "medium",
    "question": "Which tradition is linked with Maramureș and Moldova?",
    "answers": [
      "Bear dances",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Bear dances",
    "explanation": "Maramureș and Moldova is linked with Bear dances."
  },
  {
    "id": "q_103",
    "country": "Greece",
    "region": "Galaxidi",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Galaxidi?",
    "answers": [
      "Flour War",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Flour War",
    "explanation": "Galaxidi is linked with Flour War."
  },
  {
    "id": "q_104",
    "country": "Greece",
    "region": "Chios",
    "theme": "Easter custom",
    "difficulty": "medium",
    "question": "Which tradition is linked with Chios?",
    "answers": [
      "Rouketopolemos",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Rouketopolemos",
    "explanation": "Chios is linked with Rouketopolemos."
  },
  {
    "id": "q_105",
    "country": "Cyprus",
    "region": "Coastal towns",
    "theme": "Water festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Coastal towns?",
    "answers": [
      "Kataklysmos",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kataklysmos",
    "explanation": "Coastal towns is linked with Kataklysmos."
  },
  {
    "id": "q_106",
    "country": "Cyprus",
    "region": "Limassol",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Limassol?",
    "answers": [
      "Limassol Carnival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Limassol Carnival",
    "explanation": "Limassol is linked with Limassol Carnival."
  },
  {
    "id": "q_107",
    "country": "Malta",
    "region": "Valletta and Nadur",
    "theme": "Carnival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Valletta and Nadur?",
    "answers": [
      "Malta Carnival",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Malta Carnival",
    "explanation": "Valletta and Nadur is linked with Malta Carnival."
  },
  {
    "id": "q_108",
    "country": "Malta",
    "region": "Villages",
    "theme": "Village festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Villages?",
    "answers": [
      "Maltese festas",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Maltese festas",
    "explanation": "Villages is linked with Maltese festas."
  },
  {
    "id": "q_109",
    "country": "Estonia",
    "region": "Nationwide",
    "theme": "Song festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Estonian Song Celebration",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Estonian Song Celebration",
    "explanation": "Nationwide is linked with Estonian Song Celebration."
  },
  {
    "id": "q_110",
    "country": "Estonia",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Jaanipäev",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Jaanipäev",
    "explanation": "Nationwide is linked with Jaanipäev."
  },
  {
    "id": "q_111",
    "country": "Latvia",
    "region": "Nationwide",
    "theme": "Midsummer",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Jāņi",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Jāņi",
    "explanation": "Nationwide is linked with Jāņi."
  },
  {
    "id": "q_112",
    "country": "Latvia",
    "region": "Nationwide",
    "theme": "Song and dance",
    "difficulty": "medium",
    "question": "Which tradition is linked with Nationwide?",
    "answers": [
      "Song and Dance Celebration",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Song and Dance Celebration",
    "explanation": "Nationwide is linked with Song and Dance Celebration."
  },
  {
    "id": "q_113",
    "country": "Lithuania",
    "region": "Vilnius",
    "theme": "Spring fair",
    "difficulty": "medium",
    "question": "Which tradition is linked with Vilnius?",
    "answers": [
      "Kaziukas Fair",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kaziukas Fair",
    "explanation": "Vilnius is linked with Kaziukas Fair."
  },
  {
    "id": "q_114",
    "country": "Lithuania",
    "region": "Trakai",
    "theme": "Food tradition",
    "difficulty": "medium",
    "question": "Which tradition is linked with Trakai?",
    "answers": [
      "Kibinai tradition",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Kibinai tradition",
    "explanation": "Trakai is linked with Kibinai tradition."
  },
  {
    "id": "q_115",
    "country": "Luxembourg",
    "region": "Luxembourg City",
    "theme": "Spring festival",
    "difficulty": "medium",
    "question": "Which tradition is linked with Luxembourg City?",
    "answers": [
      "Éimaischen",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Éimaischen",
    "explanation": "Luxembourg City is linked with Éimaischen."
  },
  {
    "id": "q_116",
    "country": "Luxembourg",
    "region": "Echternach",
    "theme": "Procession",
    "difficulty": "medium",
    "question": "Which tradition is linked with Echternach?",
    "answers": [
      "Hopping Procession of Echternach",
      "Carnival of Venice",
      "Kukeri"
    ],
    "correctAnswer": "Hopping Procession of Echternach",
    "explanation": "Echternach is linked with Hopping Procession of Echternach."
  },
  {
    "id": "q_117",
    "country": "Spain",
    "region": "Buñol, Valencia",
    "theme": "Food fight",
    "difficulty": "hard",
    "question": "What is La Tomatina mainly known for?",
    "answers": [
      "tomatoes",
      "flower parades",
      "masked processions"
    ],
    "correctAnswer": "tomatoes",
    "explanation": "La Tomatina is mainly known for people throw tomatoes in a huge public food fight."
  },
  {
    "id": "q_118",
    "country": "Spain",
    "region": "Valencia",
    "theme": "Fire festival",
    "difficulty": "hard",
    "question": "What is Las Fallas mainly known for?",
    "answers": [
      "burning sculptures",
      "flower parades",
      "masked processions"
    ],
    "correctAnswer": "burning sculptures",
    "explanation": "Las Fallas is mainly known for large artistic sculptures are displayed and burned."
  },
  {
    "id": "q_119",
    "country": "Spain",
    "region": "Catalonia",
    "theme": "Human towers",
    "difficulty": "hard",
    "question": "What is Castells mainly known for?",
    "answers": [
      "human towers",
      "flower parades",
      "masked processions"
    ],
    "correctAnswer": "human towers",
    "explanation": "Castells is mainly known for teams build impressive human towers."
  },
  {
    "id": "q_120",
    "country": "Spain",
    "region": "Pamplona, Navarre",
    "theme": "Running festival",
    "difficulty": "hard",
    "question": "What is San Fermín mainly known for?",
    "answers": [
      "running of the bulls",
      "flower parades",
      "masked processions"
    ],
    "correctAnswer": "running of the bulls",
    "explanation": "San Fermín is mainly known for people run through the streets ahead of bulls."
  }
];
