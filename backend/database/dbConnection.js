import mongoose from "mongoose"; // hame pahle mongoose install karna hoga mongoose kya hai ye db ki taraf se banaya hua frmawork hai jo ki data base se connect karne mai help karta hai matlba ki ye data baase se conncet karvata hai

const dbConnection = () => {
  // ye ek function hai dbConnection naam kar ke ye kya kar raha hai ye data base se connect karne ka kaam kar raha hai
  mongoose
    .connect(process.env.MONGO_URI, {
      // mongoose.connect ye tarika hai connect karne ka process.en ye syntax hai aur mongo_uri ye variable name hai jo ki .env file mai hai iss variable ke andar hamara db project ka url hai iss variable se hum connect karenge apne database se
      dbName: "RESTAURANT", // ye data base ka naam puch raha hai ki kya name rakna chahte ho data base project ka
    })
    .then(() => {
      console.log("connected to database successefully!"); // ye errror handling ke liye code hai then mai code run hoga tab chalega
    })
    .catch((err) => {
      console.log(
        `Error occured something went wrong to connected database server! ${err}`,
      ); // ye code errors changling ke liye hai ye catch iska matlab hai jab error ayega connnect karne mai server se connect nhi hoag data base to ye code chalega catch wala code
    });
};


export default dbConnection; // ye code export kar raha hai matlab ki ye code bhej raha hai jo bhi is code ko import karenge wo iske code ko use kar sakta hai