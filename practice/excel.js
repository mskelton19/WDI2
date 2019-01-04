var Excel = require('exceljs');

var workbook = new Excel.Workbook();
var worksheet = workbook.addWorksheet('Discography');

// add column headers
worksheet.columns = [
  {header: 'Album', key: 'album'},
  {header: 'Year', key: 'year'}
];

// add row using keys
worksheet.addRow({album: "Taylor Swift", year: 2006});

workbook.xlsx.writeFile('music.xlsx').then(function(){
  console.log("Saved");
})

var idCol = worksheet.getColumn('album');

console.log(idCol);

var sheet2arr = function(sheet){
   var result = [];
   var row;
   var rowNum;
   var colNum;
   var range = XLSX.utils.decode_range(sheet['!ref']);
   for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
      row = [];
       for(colNum=range.s.c; colNum<=range.e.c; colNum++){
          var nextCell = sheet[
             XLSX.utils.encode_cell({r: rowNum, c: colNum})
          ];
          if( typeof nextCell === 'undefined' ){
             row.push(void 0);
          } else row.push(nextCell.w);
       }
       result.push(row);
   }
   return result;
};


sheet2arr('Discography');
