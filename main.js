/* global d3 */
d3.request('data.csv')
  .mimeType('text/csv; charset=shift_jis')
  .response((xhr) => d3.csvParse(xhr.responseText))
  .get((data) => {
    // TODO ここに処理を書く
  })
