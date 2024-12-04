const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Importation des routes
const cartRoutes = require("./routes/cartRoutes");

// Test de connexion à la base de données et synchronisation des tables
db.sequelize
	.authenticate()
	.then(() => {
		console.log("Connexion à la base de données réussie");
		// Synchronisation des tables avec modification si nécessaire
		return db.sequelize.sync({ alter: true });
	})
	.then(() => {
		console.log("Tables créées ou mises à jour avec succès");
	})
	.catch((err) => {
		console.error(
			"Erreur lors de la connexion ou de la création/mise à jour des tables:",
			err
		);
	});

// Configuration des routes
app.use("/cart", cartRoutes);

module.exports = app;
