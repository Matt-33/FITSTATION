const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes")
const app = express();

app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

// Test de connexion à la base de données et synchronisation des tables
db.sequelize
	.authenticate()
	.then(() => {
		console.log("Connexion à la base de données réussie");
		// Synchronisation des tables avec modification si nécessaire
		return db.sequelize.sync();
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


module.exports = app;
