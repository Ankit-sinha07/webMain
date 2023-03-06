import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { initializeFirebase, db } from "../../Firebase/index";

async function loadSheet() {
  const SHEET_ID = "1k5TFVGwgwcr3Ko1QJTy9ZfGGG1hdBuDd0gtrcUymTVE";
  const CLIENT_EMAIL =
    "careervyas-com-sheetapi@carrervyaswebsite.iam.gserviceaccount.com";
  const PRIVATE_KEY =
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGh6Cd9kIRdn9k\nb4N3GSCg8wtIliCHI4nAmV0bC80RTQJqraY0y3pU4kQVNaK6wKjpaKss2QNJQyY4\nHVi9JpNn5zR3YUn+luqqUQ5c9hrwT3/7Z5bC1ACP1eriBK1D6b7NjhYtlg6+y2X7\nT6zzC3clmtxHv5WGI2RxcLxSvvFPLMJpGbSX5U0ymARWTmV2vkANpTO/GEm8iUAr\n20IKVQTsH0PJR4Feg4MqN5JNpFAyvbZVvzBZcrNkbYBvkmG6zjBJNI5OHhjZE+GA\nDsfZrQt8M+l5wdnSxi1sBhI6SE9Sxh8wYMnt5OOCVojpIw0LyQE/l2BNC0ADHDmz\ncl/NrdjHAgMBAAECggEAX9ITYFp87e/LMd8uzTuIB5b3EbxAC+nHsXl0OjsaaajJ\nK1MP3vh83V5uLOx70/ZsMGfwAo/lqaUq27eyXm0xhVtO8/W1oJcXwUepDo5MV0OP\nynhniDaJ5OKDYT6PoDFAAfd71dnQ2R7T5JXCrHYStkhF3K1oDlujvasDgk6dqq/e\nsBaAESCmmRrkrIiG3UULQc19Md259G9S0czSuFQYBkVlxeTe52GpibsSQidP0fnl\ncXOO9o0DbOatxBR54a3vDTqMw6d8Rs0NhqP7iOll67P8sC3f4PjEuQ0GyLmo9NHV\neq5WSw0QrVvLpDGxXIu7WTCQl96dcyC7tbpQQZRv6QKBgQDiLjXT7FCgeXtIE/1C\nFxFMw/6nVnUwl1eEjD8x5/4KbtiR6/Zt5zM0HvAQP4flsRn0HYCUQWQ4hGlqbLLx\n87Sazg3CT0tIXCQfbwRx3yqCU5dwn+1yOCz9QSxAfQ4bl9p3ZVA687jZnf/hlqNo\nyog6586I0CQGzo8oKSFbPjczqQKBgQDgtC5vWSZXpCrIbYI7eyDim94NOKQabT/z\nWixBXSR0LgYt83yioO+9ytDtNATbYUHNpP0i7xGZoDhxjiq7ZTCejFUkglHbolQZ\nVHTm0LaPafLHYLsNYt8ZhBewZ8Fq7xx4oD2y0qqNwEFT+XucWp/by2ihrklGJfxh\nL48lN6Ju7wKBgB78+8z8PJOv8S8P5gvvAyTEWZhtpQKySYBUgrgAs/KT+0IK1Sl7\nmq1Sa8ueGK1klUy32gz15JhFs/erytyRajYncwUjPgo87YoM+MvtKnLOpxn8H1kd\nzzQngLuZJpyrMnhXPiXFjJbsKcmrjNnnncCMT+S4t6bjGAQFlpdcr815AoGAdHGr\nJpTCY+R1L0xgksZp8kTnu15A3FkFLOzrxiuoenRnS2TEj9pqoqX5wxKT+cPav+Di\nNTpCmqQG3AHabyYvHdqHPNYz6WejwUSdGAfMs2EqKNwd0wALsUNcq1P5TZr/3Bre\nHk9Bhxe8QvIkdpAYC2TLog2Zdzq0IQDuY1EDYg0CgYAN2XeWWllB4wTmPTgQP+Xf\nkQg3eGeN8WEHc85k1DG7+oxv8UAZtG2FlgA/yCauox50+bjHsRHtiziiYNuPbfDS\nbY5kDrwxmU9TI9bYAs4fWaUYjKX5d0iU15rAsEZCKs/SFkm9Ek+G/O53MqJYxIli\nOKAQ8zI6I+cqP+8IbuowZQ==\n-----END PRIVATE KEY-----\n";

  const doc = new GoogleSpreadsheet(SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/g, ""),
  });
  await doc.loadInfo();
  return doc;
}
const addDataToSheet = async (
  response,
  refferalCode,
  userDetails,
  courseData,
  amount
) => {
  const docs = await loadSheet();
  const SHEET_NAME = "Sheet1";
  const sheet = docs.sheetsByTitle[SHEET_NAME];
  await sheet.addRow({
    "First Name": userDetails.firstName,
    "Last Name": userDetails.lastName,
    Email: userDetails.email,
    Phone: userDetails.mobileNo,
    Country: userDetails.country,
    "Mentor For": userDetails.mentorFor,
    "Plan Name": courseData.planType,
    "Amount Paid": `${response.amount}` || `${amount}`,
    "RazorPay Payment ID": response.id || response.razorpay_payment_id,
    "Refferal Code Used": refferalCode,
  });
};

const handleSuccessfulPayment = async (
  response,
  refferalCode,
  userDetails,
  courseData,
  amount
) => {
  if (response === null) return;
  await addDataToSheet(
    response,
    refferalCode || "No Refferal Code",
    userDetails,
    courseData,
    amount
  );
  if (refferalCode === null) return;
  initializeFirebase();

  const docRef = doc(db, "refferalCodes", refferalCode);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { users, active, paymentIDS, discount } = docSnap.data();
    await setDoc(docRef, {
      users: users + 1,
      active: active,
      discount: discount,
      paymentIDS: [...paymentIDS, response.id || response.razorpay_payment_id],
    });
  }
};

const isValidRefferalCode = async (code) => {
  if (code === null) return [false, 0];
  initializeFirebase();

  const docRef = doc(db, "refferalCodes", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data.active) return [true, data.discount];
    else return [false, 0];
  } else {
    return [false, 0];
  }
};

export { handleSuccessfulPayment, isValidRefferalCode };
