import express from "express";

const app = express();

app.get("/test", (request, response) => {
  response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  response.send("Olá NLW post");
});

app.listen(3333, () => console.log("🚀 Server is running"));
