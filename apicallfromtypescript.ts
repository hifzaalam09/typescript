
fetch('https://catfact.ninja/breeds', {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'X-CSRF-TOKEN': 'Dwn1x5FrRk5pg6EUmugeg2Y2zcdtdT92Zv2hujam',
  },
})
  .then(response => response.json())
  .then(response => 
    {
        let tbody = document.getElementById("myTable") as HTMLTableElement;
        response.data.forEach(cat => {
            let row = tbody.insertRow();
          
            let breedCell = row.insertCell(0);
            let countryCell = row.insertCell(1);
            let originCell = row.insertCell(2);
            let coatCell = row.insertCell(3);
            let patternCell = row.insertCell(4);
          
            let breedText = document.createTextNode(cat.breed);
            let countryText = document.createTextNode(cat.country);
            let originText = document.createTextNode(cat.origin);
            let coatText = document.createTextNode(cat.coat);
            let patternText = document.createTextNode(cat.pattern);
          
            breedCell.appendChild(breedText);
            countryCell.appendChild(countryText);
            originCell.appendChild(originText);
            coatCell.appendChild(coatText);
            patternCell.appendChild(patternText);
          });
    }
    )
  .catch(error => console.error(error));



  