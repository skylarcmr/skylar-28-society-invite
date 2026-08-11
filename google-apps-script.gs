/**
 * Skylar 28 — Society Acceptance Web App
 *
 * This writes the invite form directly to the Google Sheet created for
 * Society acceptances.
 */

const SHEET_ID = '10JNf5gzORULtMPWEXKNAEpaP6DhWlRXvXNDUGpQW9x4';
const SHEET_NAME = 'Acceptances';

function getAcceptanceSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function setupHeaders() {
  const sheet = getAcceptanceSheet_();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Email',
      'Phone Number',
      'Status',
      'Invited Name',
      'Invited Email',
      'Invited Phone',
      'Source URL'
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'Skylar 28 Society Acceptances' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    setupHeaders();
    const sheet = getAcceptanceSheet_();
    const data = JSON.parse((e.postData && e.postData.contents) || '{}');

    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.status || 'Accepted',
      data.invitedName || '',
      data.invitedEmail || '',
      data.invitedPhone || '',
      data.sourceUrl || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
