   /* Button */
   function openLink() {
    window.open('https://github.com/itsriyas-exe', '_blank');
}
   
   
   const search = async()=>{
   console.log(inputValue.value);
   if(inputValue.value){
   const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue.value}?fullText=true`)
   console.log(response);
   response.json().then((data)=>{
    console.log(data[0]);
    const common = data[0].name.common
    console.log(common);
    const official = data[0].name.official
    console.log(official);
    const capital = data[0].capital
    console.log(capital);
    //currency
    for( var curr in data[0].currencies){
        var currencyName= data[0].currencies[curr].name
        var currencySymbol = data[0].currencies[curr].symbol
    }
    console.log(currencyName);
    console.log(currencySymbol);

    const borders = data[0].borders
    console.log(borders);
    const area = data[0].area
    console.log(area);
    const map=data[0].maps.googleMaps
    console.log(map);
    const population = data[0].population
    console.log(population);
    const timezone=data[0].timezones
    console.log(timezone);
    const continent=data[0].continents
    console.log(continent);
    const flag=data[0].flags.png
    console.log(flag);
   //language
    let language = data[0].languages
    let nationalLanguage = []
    for(let lang in language){
        console.log(lang);
        nationalLanguage.push(language[lang])
        
    }
    console.log(language);
    
    result.innerHTML= ` <div class="data d-flex justify-content-center align-items-center mt-5">
      <div class="card" style="width: 18rem;">
        <img src="${flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${official}</h5>
          <p class="card-text text-secondary">${capital}</p>
        </div>
          </div>
        <div class="data-2">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Continent<p>${continent}</p></li>
          <li class="list-group-item">Area<p>${area}</p></li>
          <li class="list-group-item">Population<p>${population}</p></li>
          <li class="list-group-item">Borders<p>${borders}</p></li>
          <li class="list-group-item">Currency<p>${currencyName} - ${currencySymbol}</p></li>
          <li class="list-group-item">Timezone<p>${timezone}</p></li>
          <li class="list-group-item">Map<a href="${map}"><p>${map}</p></a></li>
          <li class="list-group-item">Languages<p>${nationalLanguage}</p></li>
        </ul>
      </div>
    </div>
    <div class="social d-flex justify-content-center">
      <p onclick="openLink()"><i class="uil uil-github"></i>&nbsp;itsriyas</p>
     </div>`
   })
   
   }else{
    alert('Please enter the country name.')
   }
   
}