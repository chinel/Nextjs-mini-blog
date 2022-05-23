import { MongoClient } from "mongodb";
const DB_USER = process.env.NEXT_MONGO_DB_USER;
const DB_PASSWORD = process.env.NEXT_MONGO_DB_PASSWORD;
const DB_NAME = process.env.NEXT_MONGO_DB_NAME;
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    //Store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster-nextjs.yaea0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
      );
    } catch (error) {
      // console.log("--error 1");
      // console.log(error);
      res.status(500).json({ message: "Coould not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("contact").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      // console.log("--error 2");
      // console.log(error);
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message", data: newMessage });
  }
}

export default handler;
