function onEdit(e) {
  const sheetName = "In/Out (Manual)";
  const colToWatch = 3; // Column C
  const timeStampCol = 1; // Column A

  // Get edited sheet and range
  const sheet = e.source.getActiveSheet();
  if (sheet.getName() !== sheetName) return;

  const row = e.range.getRow();
  const col = e.range.getColumn();

  // Only trigger when editing Column C, AND not a header row
  if (col === colToWatch && row > 1) {

    // If Column C has value and Column A is empty, add timestamp
    if (e.range.getValue() !== "" && sheet.getRange(row, timeStampCol).getValue() === "") {
      sheet.getRange(row, timeStampCol).setValue(new Date());
    }
  }
}
