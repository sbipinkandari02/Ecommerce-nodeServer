import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "EcommerceDB",
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
