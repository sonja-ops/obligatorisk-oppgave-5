//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen

// OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

//
//

async function getBandInfo() {
  const bands = [
    {
      bandName: 'Led Zeppelin',
      guitar: 'Jimmy Page',
    },

    {
      bandName: 'AZ/DC',
      guitar: 'Angus Young',
    },
  ];
  return bands;
}

async function rockData() {
  const response = await getBandInfo();
  console.log(response);
  console.log(response[1].guitar);
}

setTimeout(rockData, 4000);

// HER KODER VI SANNTID SAMMEN FOR CAT FACTS:

// API-link: https://catfact.ninja/facts

async function fetchApi() {
  // Fetcher data fra catFact
  const data = await fetch('https://catfact.ninja/facts');
  console.log(data);
  // Parser fra JSON til array
  const response = await data.json();
  console.log(response);
  console.log(Array.isArray(response));
  console.log(Array.isArray(response.data));
  console.log(Array.isArray(response.data[0]));
  console.log(Array.isArray(response.data[0].fact));

  //Lagre array av objects i en variabel

  const responseData = response.data;

  responseData.forEach((item) => {
    const factItem = item.fact;
    console.log(factItem);
    // lage en p-element til HTML
    const viewCatFact = document.createElement('p');
    //Legge factItem inn som tekst til p
    viewCatFact.textContent = factItem;
    // finne id som heter displayCatFact og hente den inn med querySelector
    const displayCatFact = document.querySelector('#displayCatFact');
    //legge til p på displayCatFact
    displayCatFact.appendChild(viewCatFact);
  });
}

fetchApi();

// Hele arrayet
// Vi finner data array, array med objects
// Vi velger et spesifikt array
// Vi finner fact

//forEach for å få ut hver fact på siden

//VI LAGER EN CHUCK NORRIS KNAPP

//API-link: https://api.chucknorris.io/jokes/random

const ChuckBtn = document.querySelector('#ChuckBtn'); //Henter knapp
const ChuckText = document.querySelector('#ChuckText'); //Henter p som viser teksten

async function ChuckNorrisApi() {
  const response = await fetch('https://api.chucknorris.io/random'); //API for Chuck Norris facts
  console.log(response);
  let data = await response.json();
  console.log(data);
  ChuckText.textContent = data.value;
}

ChuckBtn.addEventListener('click', function () {
  ChuckNorrisApi();
});
