const { MongoClient, ObjectId } = require("mongodb");

const MONGO_DB_URL =
  "mongodb+srv://root:roota@tutoraccluster.udjbnbd.mongodb.net/?retryWrites=true&w=majority";

const DATABASE_NAME = "cipher_schools";

const mongoClient = new MongoClient(MONGO_DB_URL, { useNewUrlParser: true });

const myFunction = async () => {
  try {
    await mongoClient.connect();
    console.log("Connection was successful!");
    const db = mongoClient.db(DATABASE_NAME);
    const userCollection = db.collection("users");
    // INSERT MANY START

    // const insertResult = await db.collection("users").insertMany([
    //   {
    //     name: "Shantanu Shubham",
    //     email: "shantanu@lpu.com",
    //     age: 24,
    //   },
    //   {
    //     name: "Satyam Kesari",
    //     email: "satyam@lpu.com",
    //     age: 24,
    //   },
    // ]);
    // console.log("Insert Success", insertResult);

    // INSERT MANY END

    // FIND START

    // const findResult = await userCollection.findOne({
    //   _id: new ObjectId("64905d29db7c02603c49f69f"),
    // });
    // console.log(findResult);

    // const findResult = await userCollection
    //   // .find({ name: { $regex: /^S/, $options: "i" }, age: { $gt: 20 } })
    //   .find({ $or: [{ age: { $lt: 20 } }, { name: /^sa/ }] })
    //   .toArray();
    // console.log(findResult);

    // FIND END

    // DELETE START

    // const deleteResult = await userCollection.deleteMany({
    //   _id: new ObjectId("649064d6fc5641c65261aa00"),
    // });
    // console.log(deleteResult);

    // DELETE END

    // UPDATE START

    const updateResult = await userCollection.updateMany(
      {},
      { $inc: { age: 1 } }
    );
    console.log(updateResult);

    // UPDATE END
    
  } catch (err) {
    console.error(err);
  }
};

myFunction();
