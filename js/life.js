// All rights reserved to Bart Tarasewicz 5/16/2019
// I fucking love programming hire me barttaro@gmail.com


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
      document.getElementById("item1g").innerHTML = "$" + item1g;
      document.getElementById("btngram").disabled = true;
    }

    if(item312g == "35"){
      document.getElementById("item1g").innerHTML = "$" + item312g;
      document.getElementById("btneigth").disabled = false;
    }else if(item312g == "40"){
      document.getElementById("item312g").innerHTML = item312g;
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

  }else{
    //the user didn't click on the item just the plain old order button
    //now load the type of data required for the plain old order button

  }

}
