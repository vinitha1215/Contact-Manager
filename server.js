import express from "express";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});