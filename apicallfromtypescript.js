fetch('https://catfact.ninja/breeds', {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'X-CSRF-TOKEN': 'Dwn1x5FrRk5pg6EUmugeg2Y2zcdtdT92Zv2hujam',
    },
})
    .then(function (response) { return response.json(); })
    .then(function (response) {
    var tbody = document.getElementById("myTable");
    response.data.forEach(function (cat) {
        var row = tbody.insertRow();
        var breedCell = row.insertCell(0);
        var countryCell = row.insertCell(1);
        var originCell = row.insertCell(2);
        var coatCell = row.insertCell(3);
        var patternCell = row.insertCell(4);
        var breedText = document.createTextNode(cat.breed);
        var countryText = document.createTextNode(cat.country);
        var originText = document.createTextNode(cat.origin);
        var coatText = document.createTextNode(cat.coat);
        var patternText = document.createTextNode(cat.pattern);
        breedCell.appendChild(breedText);
        countryCell.appendChild(countryText);
        originCell.appendChild(originText);
        coatCell.appendChild(coatText);
        patternCell.appendChild(patternText);
    });
})
    .catch(function (error) { return console.error(error); });
