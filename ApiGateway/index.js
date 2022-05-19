const gateway = require("fast-gateway");
const server = gateway({
  routes: [
    {
      prefix: "/order",
      target: "http://localhost:8081",
    },
    {
      prefix: "/payment",
      target: "http://localhost:8082",
    },
  ],
});


server.get("/", (req, res) => {
  res.send("Welcome to API Gateway");
});



server.start(9002).then(server => {
  console.log("API Gateway running on 9001");
});
