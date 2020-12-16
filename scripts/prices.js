function CBR_XML_Daily_Ru(rates) {
    
  
    var USDrate = rates.Valute.USD.Value.toFixed(2);
    var USD = document.getElementById('USD');
    USD.innerHTML = USD.innerHTML.replace('00.0000', USDrate);
  
    var EURrate = rates.Valute.EUR.Value.toFixed(2);
    var EUR = document.getElementById('EUR');
    EUR.innerHTML = EUR.innerHTML.replace('00.0000', EURrate);
  
    var carsEuro = document.getElementsByClassName("euro");
    var carsEuroUsed = document.getElementsByClassName("euroUsed");
    var carsEuroSell = document.getElementsByClassName("euroSell");
    var carsDonat = document.getElementsByClassName("donat");
    var price, priceUsed, priceSell;
    for (i = 0; i < carsEuro.length; i++)
    {
        price = carsEuro[i].textContent*EUR.textContent;
        price = Math.round(price);
        priceUsed = price * 0.84;
        priceUsed = Math.round(priceUsed);
        priceSell = price * 0.7;
        priceSell = Math.round(priceSell);
        price = new Intl.NumberFormat('de-DE').format(price);
        priceUsed = new Intl.NumberFormat('de-DE').format(priceUsed);
        priceSell = new Intl.NumberFormat('de-DE').format(priceSell);
        carsEuro[i].textContent = price + " ₽";
        carsEuroUsed[i].textContent = priceUsed + " ₽";
        carsEuroSell[i].textContent = priceSell + " ₽";
    }
    var carsDoll = document.getElementsByClassName("doll");
    var carsDollUsed = document.getElementsByClassName("dollUsed");
    var carsDollSell = document.getElementsByClassName("dollSell");
    for (i = 0;i < carsDoll.length; i++)
    {
        price = carsDoll[i].textContent*USD.textContent;
        price = Math.round(price);
        priceUsed = price * 0.84;
        priceUsed = Math.round(priceUsed);
        priceSell = price * 0.7;
        priceSell = Math.round(priceSell);
        price = new Intl.NumberFormat('de-DE').format(price);
        priceUsed = new Intl.NumberFormat('de-DE').format(priceUsed);
        priceSell = new Intl.NumberFormat('de-DE').format(priceSell);
        carsDoll[i].textContent = price + " ₽";
        carsDollUsed[i].textContent = priceUsed + " ₽";
        carsDollSell[i].textContent = priceSell + " ₽";
    }
    
  }

  function showInfo(){
      
  }
  