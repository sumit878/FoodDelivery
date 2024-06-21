import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://sumit9794964787:mH8a9rJCMH9T39HM@cluster0.5jkmpwd.mongodb.net/food-Delivery').then(()=>console.log("DB connected"));
}
