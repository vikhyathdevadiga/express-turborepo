import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel is ready!"));

app.listen(3001, () => console.log("Server ready on port 3000."));

export default app;