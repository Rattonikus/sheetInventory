//Create context menu
function onOpen(name) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Inventory Helper')
  .addItem('Open helper', 'menuitem')
  .addToUi();
}

//Open HTML Sidebar 
function menuitem() {
  var html = HtmlService.createHtmlOutputFromFile('page')
  .setTitle("Inventory Helper")
  SpreadsheetApp.getUi()
  .showSidebar(html)
}



function getAssetNumber(asset) {
  var assetscanned = asset.toString();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Gets active sheet, important to distinguish from active spreadsheet. 
  var assetRange = ss.createTextFinder(assetscanned).findNext(); 
  assetRange.setBackground('green')
  // find the range with the matching data 
  var assetColumn = assetRange.getColumn() - 1;
  var assetRow = assetRange.getRow(); 
  // Find the column next to the data, in this case the asset number 
  var assetNumberRange = ss.getRange(assetRow, assetColumn);
  //Gets the new range, which should select the asset number 
  //assetNumberRange.setBackground('blue');
  //assetRange.setBackground('red');
    // for debug purposes 
  //SpreadsheetApp.getUi().alert(assetNumberRange.getValues());
  // getValues returns the.. well value. Done uncomment unless you need to?? idk what im doing here im just winging it 
  return assetNumberRange.getValues(); 
}

function changeColor(asset) {
  var assetscanned = asset.toString();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
  var assetRange = ss.createTextFinder(assetscanned).findNext(); 
  assetRange.setBackground('green');
}


//this function returns all rooms according to the google sheet format, likely uneeded, but it was the first function i made here, and its 

// function menuitem2() {
//   var ui = SpreadsheetApp.getUi()
//   ui.alert("PRESSDED 2")
//   var sheet = SpreadsheetApp.getActiveSpreadsheet(); 
//   var data = sheet.getDataRange().getValues();
//   var pos = sheet.getDataRange().getBackgrounds();
//   var dataRow = data[0];
//   var rooms = new Array
//   var roomIndex = 0

//   for (var i = 0; i < data[0].length; i++)
//   {
//     var  currentData = dataRow[i]

//     if (currentData.toString().indexOf(')') > -1)
//     {
//       Logger.log(currentData.toString().slice(0, 4) + 'has a ( thing at ' + currentData.toString().indexOf(' '))
//       var roomName = currentData.toString().slice(0, currentData.toString().indexOf('(') - 1)
//       var assetIndexInt = (i + 1).toFixed()
//       var assetCount = currentData.toString().slice(currentData.toString().indexOf('(') + 1, currentData.toString().indexOf(')'))
//       rooms[roomIndex] = [roomName, assetCount, assetIndexInt]
//       Logger.log(rooms[roomIndex] + ' ' + i)
//       Logger.log(rooms + ' at ' + i)
//             roomIndex += 1

//     }
//     else
//     {
//       Logger.log(currentData.toString() + 'Has no thing')
//     }
//   }
// }


