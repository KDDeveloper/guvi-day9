

async function asianCountries (){
    await fetch ("https://restcountries.com/v2/all")
    .then((x)=>x.json())
    .then((y)=>y.filter((el)=>{ return el.region==="Asia"}))
    .then((z)=>console.log(z))
}

asianCountries();

async function populationLessThanTwoLakhs (){
    await fetch ("https://restcountries.com/v2/all")
    .then((x)=>x.json())
    .then((y)=>y.filter((el)=>{ return el.population<200000}))
    .then((z)=>console.log(z))
}

populationLessThanTwoLakhs();

async function basicDetails (){
    await fetch ("https://restcountries.com/v2/all")
    .then((x)=>x.json())
    .then((y)=>y.forEach((el)=>{
        console.log({
            name:`${el.name}`,
            capital:`${el.capital}`,
            countryFlag:`${el.flags.svg}`
        })
    }))
    // .then((z)=>console.log(z))
}

basicDetails()

async function totalPopulation (){
    await fetch ("https://restcountries.com/v2/all")
    .then((x)=>x.json())
    .then((p)=>p.map((el)=>el.population))
    .then((y)=>y.reduce((a,b)=> a + b))
    .then((z)=>console.log(z))
}

totalPopulation();

async function usingUSDollar (){
    await fetch ("https://restcountries.com/v2/all")
    .then((x)=>x.json())
    .then((y)=>y.filter((el)=>{if (el.currencies!==undefined) { return el.currencies[0].code==='USD'}}))
    .then((z)=>console.log(z))
}

usingUSDollar();