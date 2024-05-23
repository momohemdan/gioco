const famousPeople = [
    { name: "Albert Einstein", birthYear: 1879, DeadorAlive: "Morto", country: "Tedesco", fieldOfWork: "Fisica", achievement: "Teoria della relatività" },
    { name: "Ada Lovelace", birthYear: 1815, DeadorAlive: "Morto", country: "Britannica", fieldOfWork: "Informatica e Matematica", achievement: "Ha scrittto il primo algoritmo progettato per essere eseguito su una macchina" },
    { name: "Leonardo da Vinci", birthYear: 1452, DeadorAlive: "Morto", country: "Italiano", fieldOfWork: "Arte e Ingegneria", achievement: "la Gioconda" },
    { name: "Marie Curie", birthYear: 1867, DeadorAlive: "Morto", country: "Polacca", fieldOfWork: "Fisica e Chimica", achievement: "Ha scoperto due elementi chimici, il polonio e il radio" },
    { name: "Nikola Tesla", birthYear: 1856, DeadorAlive: "Morto", country: "Croato", fieldOfWork: "Ingegneria Elettrica", achievement: "Ha Contribuito allo sviluppo dei sistemi elettrici moderni e lavorato sulla trasmissione senza fili" },
    { name: "Isaac Newton", birthYear: 1643, DeadorAlive: "Morto", country: "Britannico", fieldOfWork: "Matematica e Fisica", achievement: "Le leggi del moto e della gravità" },
    { name: "Steve Jobs", birthYear: 1955, DeadorAlive: "Morto", country: "Statunitense", fieldOfWork: "Tecnologia", achievement: "Co-fondatore di Apple Inc. e creatore di prodotti iconici come l'iPhone e l'iPad" },
    { name: "Alan Turing", birthYear: 1912, DeadorAlive: "Morto", country: "Britannico", fieldOfWork: "Informatica e Matematica", achievement: "Considerato il padre della scienza informatica moderna e ha contribuito alla decrittazione dei codici durante la Seconda Guerra Mondiale" },
    { name: "Galileo Galilei", birthYear: 1564, DeadorAlive: "Morto", country: "Italiano", fieldOfWork: "Astronomia e Fisica", achievement: "Ha osservazioni astronomiche tramite il telescopio e per aver confermato l'eliocentrismo di Copernico" },
    { name: "Charles Babbage", birthYear: 1791, DeadorAlive: "Morto", country: "Britannico", fieldOfWork: "Matematica, Ingegnere Meccanico e Inventore", achievement: "Ha progettato la Macchina analitica, considerata il primo concetto di un computer programmabile" },
    { name: "Stephen Hawking", birthYear: 1942, DeadorAlive: "Morto", country: "Britannico", fieldOfWork: "Fisica Teorica e Cosmologia", achievement: "Ha contribuito alla comprensione dei buchi neri e dell'universo" },
    { name: "Jane Goodall", birthYear: 1934, DeadorAlive: "Vivo", country: "Britannica", fieldOfWork: "Scienze Biologiche (Primatologia)", achievement: "Ha studi rivoluzionari sui primati, in particolare sui chimpanzé in Tanzania" },
    { name: "Bill Gates", birthYear: 1955, DeadorAlive: "Vivo", country: "Statunitense", fieldOfWork: "Tecnologia", achievement: "Co-fondatore di Microsoft Corporation e ha contribuito significativamente allo sviluppo del software per PC" },
    { name: "Tim Berners-Lee", birthYear: 1955, DeadorAlive: "Vivo", country: "Britannico", fieldOfWork: "Informatica", achievement: "Inventore del World Wide Web" },
    { name: "Grace Hopper", birthYear: 1906, DeadorAlive: "Morto", country: "Statunitense", fieldOfWork: "Informatica", achievement: "Ha sviluppato il primo compilatore per un linguaggio di programmazione" },
    { name: "Richard Feynman", birthYear: 1918, DeadorAlive: "Morto", country: "Statunitense", fieldOfWork: "Fisica", achievement: "Insignito del Premio Nobel per la Fisica per il suo lavoro sulla elettrodinamica quantistica" },
    { name: "Margaret Hamilton", birthYear: 1936, DeadorAlive: "Vivo", country: "Statunitense", fieldOfWork: "Informatica", achievement: "Lavororato come direttrice del team di sviluppo del software per il programma Apollo della NASA" },
    { name: "Santiago Ramón y Cajal", birthYear: 1852, DeadorAlive: "Morto", country: "Spagnolo", fieldOfWork: "Neuroscienze", achievement: "Premio Nobel per la Medicina per i suoi studi sul sistema nervoso" },
    { name: "Vincent van Gogh", birthYear: 1853, DeadorAlive: "Morto", country: "Olandese", fieldOfWork: "Arte", achievement: "Ha opere pittoriche post-impressioniste" },
    { name: "Alexander Graham Bell", birthYear: 1847, DeadorAlive: "Morto", country: "Scozzese", fieldOfWork: "Tecnologia e Ingegneria", achievement: "Ha Inventato il telefono" }
  ];
  
  function populateOptions() {
    const birthYearSelect = document.getElementById("birthYear");
    const DeadorAliveSelect = document.getElementById("DeadorAlive");
    const countrySelect = document.getElementById("country");
    const fieldOfWorkSelect = document.getElementById("fieldOfWork");
    const achievementSelect = document.getElementById("achievement");
  
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    const uniqueBirthYears = [...new Set(famousPeople.map(person => person.birthYear))];
    const uniqueDeadorAlive = [...new Set(famousPeople.map(person => person.DeadorAlive))];
    const uniqueCountries = [...new Set(famousPeople.map(person => person.country))];
    const uniqueFieldsOfWork = [...new Set(famousPeople.map(person => person.fieldOfWork))];
    const uniqueAchievements = [...new Set(famousPeople.map(person => person.achievement))];
  
    
    shuffleArray(uniqueBirthYears);
    shuffleArray(uniqueDeadorAlive);
    shuffleArray(uniqueCountries);
    shuffleArray(uniqueFieldsOfWork);
    shuffleArray(uniqueAchievements);
  
    uniqueBirthYears.forEach(year => {
        const option = document.createElement("option");
        option.text = year;
        birthYearSelect.add(option);
    });
  
    uniqueDeadorAlive.forEach(year => {
        const option = document.createElement("option");
        option.text = year;
        DeadorAliveSelect.add(option);
    });
  
    uniqueCountries.forEach(country => {
        const option = document.createElement("option");
        option.text = country;
        countrySelect.add(option);
    });
  
    uniqueFieldsOfWork.forEach(field => {
        const option = document.createElement("option");
        option.text = field;
        fieldOfWorkSelect.add(option);
    });
  
    uniqueAchievements.forEach(achievement => {
        const option = document.createElement("option");
        option.text = achievement;
        achievementSelect.add(option);
    });
  }
  
  let guessedCharacters = []; 

  function checkGuess() {
      const birthYear = document.getElementById("birthYear").value;
      const DeadorAlive = document.getElementById("DeadorAlive").value;
      const country = document.getElementById("country").value;
      const fieldOfWork = document.getElementById("fieldOfWork").value;
      const achievement = document.getElementById("achievement").value;
  
      const matchedPerson = famousPeople.find(person =>
          person.birthYear.toString() === birthYear &&
          person.DeadorAlive.toLowerCase() === DeadorAlive.toLowerCase() &&
          person.country.toLowerCase() === country.toLowerCase() &&
          person.fieldOfWork.toLowerCase() === fieldOfWork.toLowerCase() &&
          person.achievement.toLowerCase() === achievement.toLowerCase()
      );
  
      const resultDisplay = document.getElementById("result");
      const guessedCharactersTable = document.getElementById("guessedCharacters").getElementsByTagName('tbody')[0];
  
      if (matchedPerson) {
         
          const alreadyGuessed = guessedCharacters.some(character => character.name === matchedPerson.name);
          if (!alreadyGuessed) {
              resultDisplay.textContent = `Bravo! Il personaggio era ${matchedPerson.name}.`;
              
              const newRow = guessedCharactersTable.insertRow();
              const cell = newRow.insertCell(0);
              cell.textContent = matchedPerson.name;
  
              
              guessedCharacters.push(matchedPerson);
  
           
              const guessedCharacterCount = guessedCharactersTable.getElementsByTagName('tr').length;
              if (guessedCharacterCount === famousPeople.length) {
                 
              }
          } else {
              resultDisplay.textContent = `Hai già indovinato il personaggio!`;
          }
      } else {
          resultDisplay.textContent = `Sbagliato. Riprova!`;
      }
  }
  

  populateOptions();

  document.addEventListener("DOMContentLoaded", function() {
    const selectContainers = document.querySelectorAll(".select-container");
  
    selectContainers.forEach(selectContainer => {
      const options = selectContainer.querySelectorAll("option");
  
      options.forEach(option => {
        option.addEventListener("mouseover", function() {
          this.style.color = "gold";
        });
  
        option.addEventListener("mouseleave", function() {
          this.style.color = "";
        });
      });
    });
  });
  