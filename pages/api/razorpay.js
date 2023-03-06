const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const { amount } = req.body;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
