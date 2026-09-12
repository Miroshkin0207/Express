const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const corsOptions = {
    origin: ["bebra"],
    methods: "GET, POST, OPTIONS",
    allowedHeaders: "Content-Type"
}
app.use(cors(corsOptions));

//const port = 3000;
//app.listen(port, () => console.log("Сервер запущен!"));

app.get("/api/data", (req, res) => {  
    res.status(200).send("Наш ответ");
    console.log("Ответ отправлен!");
});

app.post("/api/setData", (req, res) => {
    const data = req.body;
    console.log("Ответ получен! Вот его данные:");
    console.log(data.n);
    res.status(200).send("Данные выведены на консоль");
});

module.exports = app;
