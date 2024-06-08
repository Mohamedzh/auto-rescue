import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const connectGoogleSheet = async () => {
  const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  const credentials = JSON.parse(
    Buffer.from(process.env.SECRET!, "base64").toString()
  );

  const sheetId = process.env.SHEET as string;

  const jwtFromEnv = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });

  const doc = new GoogleSpreadsheet(sheetId, jwtFromEnv);

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle["Schedule"];
  const rows = await sheet.getRows();

  let targetArr: any[] = [];
  // const headerRow = rows[0];

  rows.slice(1).map((row) => {
    targetArr.push(row.toObject());
    return targetArr;
  });

  targetArr = targetArr.map((item) => {
    return {
      ...item,
      checkDate:
        item[Object.keys(item)[8]].split(",")[1].slice(1) +
        ", " +
        item[Object.keys(item)[8]].split(",")[2].slice(1),
      changeDate:
        item[Object.keys(item)[13]].split(",")[1].slice(1) +
        ", " +
        item[Object.keys(item)[13]].split(",")[2].slice(1),
    };
  });
  return targetArr;
};
