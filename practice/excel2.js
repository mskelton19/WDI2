var Excel = require('exceljs');

var workbook = new Excel.Workbook();
workbook.xlsx.readFile('music.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet('Discography');
        worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
          console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
        });
    });

var idCol = Discography.getColumn('B');

console.log(idCol);
