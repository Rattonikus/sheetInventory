function onScan() {
    var scannedInput = document.getElementById('scannerInput').value;
    document.getElementById('scannerInput').value = "";
    //Puts the value in HTML element 'scannerInput' into JS variable scannedInput and clears the input field 

    var list = document.getElementById('scanlist');
    list.innerHTML += "<li id='" + scannedInput + "'>" + scannedInput + "</li>" 
    var test = document.getElementById(scannedInput);
    //get list, created an identifiable list item with the asset tag, and update it in the success handler below to show the asset number

    var assetNumber = google.script.run.withSuccessHandler(newValue => { test.innerHTML = scannedInput + " #" + newValue}).getAssetNumber(scannedInput);
    //Runs the get asset script with a success handler so that i can capture the return type. because .run returns NOTHING!!!!!

  }

  function clearList() {
    var list = document.getElementById('scanlist');
    list.innerHTML = "";
}