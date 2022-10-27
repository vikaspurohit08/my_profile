import mongoose from "mongoose";
import { app } from "./app";
import { DatabaseConnectionError } from "./common/errors/database-connection-error";

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/profile_db");
    console.log("Connected to mongo server");
  } catch (error) {
    throw new DatabaseConnectionError();
  }

  app.listen(3000, () => {
    console.log("Listening to port 3000 successfully");
  });
};

start();
