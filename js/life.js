// All rights reserved to Bart Tarasewicz 5/16/2019
// I fucking love programming hire me barttaro@gmail.com

document.getElementById("submitorderbtn").addEventListener("click", submitOrder());

function loadDataFromURL() {

  var itemExists = false;

  var url_string = window.location.href;
  var url = new URL(url_string);
  var itemData = url.searchParams.get("item");

  if(itemData != ""){
    //is the data not blank? if it isnt then im assuimg that it does but
    //if not go to else if and else lol
    itemExists = true;
  }else if(itemData == "none"){
    itemExists = false;
  }else{
    itemExists = false;
  }

  if(itemExists == true){
    //the user selected an item before now lets load the data from the url so we do less work
    var itemType = url.searchParams.get("item");
    var itemImg = url.searchParams.get("itemimg");
    var itemDesc = url.searchParams.get("itemdesc");
    var itemEffects = url.searchParams.get("itemsmaineffects");
    var itemNew = url.searchParams.get("itemNew");
    var item1g= url.searchParams.get("item1g");
    var item312g= url.searchParams.get("item312g");
    var item7g= url.searchParams.get("item7g");

    //now that we grabbed the values from the url and stored them as a variable in javascript
    //we can now change the elements on the existing page to swap the values with the associated vars

    document.getElementById("itemName").innerHTML = itemType;
    document.getElementById("itemImg").src = './assets/' + itemImg;
    document.getElementById("itemDesc").innerHTML = itemDesc;

    //if check the string if the item is new or old
    if(itemNew == "true"){
      document.getElementById("itemNEW").innerHTML = 'NEW!';
    }else if(itemNew == "false"){
      document.getElementById("itemNEW").innerHTML = '';
    }else{
      alert('Please notify the admins! We ran into an error. Tell them this link is broken. Thanks -SmartBarts');
    }

    //check the amount and set the price or hide button if doesnt exist
    if(item1g == "10"){
      document.getElementById("item1g").innerHTML = "$" + item1g;
      document.getElementById("btngram").disabled = false;
    }else if(item1g == "40"){
      document.getElementById("item1g").innerHTML = "$" + item1g;
      document.getElementById("btngram").disabled = false;
    }else if(item1g == "N/A"){
      //1 G i guess is not available
      document.getElementById("item1g").innerHTML = item1g;
      document.getElementById("btngram").disabled = true;
    }

    if(item312g == "35"){
      document.getElementById("item1g").innerHTML = "$" + item312g;
      document.getElementById("btneigth").disabled = false;
    }else if(item312g == "40"){
      document.getElementById("item312g").innerHTML = "$" + item312g;
      document.getElementById("btneigth").disabled = false;
    }else if(item312g == "N/A"){
      //1 G i guess is not available
      document.getElementById("item312g").innerHTML = item312g;
      document.getElementById("btneigth").disabled = true;
    }

    if(item7g == "60"){
      document.getElementById("item7g").innerHTML = "$" + item7g;
      document.getElementById("btnquarter").disabled = false;
    }else if(item7g == "70"){
      document.getElementById("item7g").innerHTML = "$" + item7g;
      document.getElementById("btnquarter").disabled = false;
    }else if(item7g == "N/A"){
      //1 G i guess is not available
      document.getElementById("item7g").innerHTML = item7g;
      document.getElementById("btnquarter").disabled = true;
    }

    document.getElementById("itemselected").value = document.getElementById("itemName").innerHTML;

  }else{
    //the user didn't click on the item just the plain old order button
    //now load the type of data required for the plain old order button

  }

}

function changeAmountToBtn1() {

  document.getElementById("amountChangeID").innerHTML = "1";
  document.getElementById("amountChangeID").value = "1g";

}

function changeAmountToBtn2() {

  document.getElementById("amountChangeID").innerHTML = "3.5";
  document.getElementById("amountChangeID").value = "3.5g";

}

function changeAmountToBtn3() {

  document.getElementById("amountChangeID").innerHTML = "7";
  document.getElementById("amountChangeID").value = "7g";

}

function submitOrder()  {
  document.getElementById("submitorderbtn").className += " is-loading";
  document.getElementById("controla").className += " is-loading";
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(document.getElementById("timeSec").innerHTML == "00:00"){
          window.location.replace("http://192.168.1.7/");
        }
    }, 1000);
}

function loadComponents() {
  var fiveMinutes = 5,
      display = document.querySelector('#timeSec');
  startTimer(fiveMinutes, display);
}
