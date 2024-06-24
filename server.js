import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "ff28f567152d73b9ad58ed19d0e84e54";
const apiBase = "https://api.openweathermap.org/data/2.5/";

app.use(cors());

app.get("/weather", async (req, res) => {
  const { city } = req.query;
  try {
    const response = await fetch(
      `${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
