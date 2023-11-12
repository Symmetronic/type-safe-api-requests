const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const PORT = 3000;
const openapiFile = fs.readFileSync("./openapi.yaml", "utf-8");
const swaggerDocument = YAML.parse(openapiFile);

app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/v1/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  if (Number.isNaN(userId)) {
    return res.status(400).send("Bad user id.");
  }

  return res.json({
    id: userId,
    name: "John Doe",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
