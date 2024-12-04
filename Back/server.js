const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

// Configuration du port
app.set("port", process.env.PORT || 3000);

const server = http.createServer(app);

// Écoute du serveur
server.listen(process.env.PORT || 3000, () => {
	console.log(`Serveur ouvert sur le port : ${process.env.PORT || 3000}`);
});
