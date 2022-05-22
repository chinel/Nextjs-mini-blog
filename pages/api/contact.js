import { MongoClient } from "mongodb";
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
        "mongodb+srv://nextjsbloguser:xMIy2UXcwg912lxV@cluster-nextjs.yaea0.mongodb.net/nextjs-blog?retryWrites=true&w=majority"
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
