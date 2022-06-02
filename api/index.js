const express = require("express");
const routes = require("./routes");
const swaggerUiExpress = require("swagger-ui-express")
const swaggerDocs = require("./swagger.json")

const app = express();
const port = 3000;

routes(app);

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));

module.exports = app;
