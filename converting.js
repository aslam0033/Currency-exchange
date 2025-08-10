let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let dropdowns=document.querySelectorAll("select");
let dropdown1=document.querySelector("#dp1");
let dropdown2=document.querySelector("#dp2");
let flags=document.querySelectorAll(".flag");
let button=document.querySelector("#calculation");
let amountDisplay=document.querySelector("#final-amount");
let input=document.querySelector("input");
let CurrencyCode=0;
let fromCountry=0;
let toCountry=0;

for(let select of dropdowns){
    for (let a in countryList){
    let CurrencyCode=document.createElement("option");
    CurrencyCode.innerText=a;
    if(select.name ==="dropdown1" && CurrencyCode.innerText=="USD"){
        CurrencyCode.selected="selected";
        fromCountry=CurrencyCode.innerText;
    }else if(select.name ==="dropdown2" && CurrencyCode.innerText=="INR"){
        CurrencyCode.selected="selected"
        toCountry=CurrencyCode.innerText;
         ( async () =>{rate=`${url}/${String(fromCountry).toLowerCase()}.json`; 
   response= await fetch(rate);
   data=await response.json();
   rate=data[fromCountry.toLowerCase()][toCountry.toLowerCase()];
   totalAmount=1*rate;
   amountDisplay.innerText=`1${fromCountry}=${totalAmount}${toCountry}`;
     } )();
    }
    select.append(CurrencyCode);
}
   select.addEventListener("change", (evt)=>{
    if(evt.target==dropdown1){
        fromCountry=evt.target.value;
    }
    if(evt.target==dropdown2){
        toCountry=evt.target.value;
    }
        updateflag(evt.target);
        
    });
}

function updateflag(flag){
    a=flag.value;
    newFlag=countryList[a];
    b=flag.parentElement.children[0];
    b.src=`https://flagsapi.com/${newFlag}/flat/64.png`
}

button.addEventListener("click", (evt)=>{
    if(input.value==""  || input.value<0){
        input.value=1;
    }
    evt.preventDefault();
    calculation();
});

async function calculation(){
    enteredAmount=input.value;
    amountDisplay.innerText=`converting the currency...`
   rate=`${url}/${String(fromCountry).toLowerCase()}.json`; 
   response= await fetch(rate);
   data=await response.json();
   rate=data[fromCountry.toLowerCase()][toCountry.toLowerCase()];
   totalAmount=enteredAmount*rate;
   amountDisplay.innerText=`${enteredAmount}${fromCountry}=${totalAmount}${toCountry}`;
}