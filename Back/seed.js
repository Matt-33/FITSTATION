const db = require("./models");

async function seedDatabase() {
	try {
		// Création d'un utilisateur
		const user = await db.User.create({
			name: "Test User",
			email: "testuser@example.com",
			password: "12345",
		});

		console.log("Utilisateur créé :", user);

		// Création d'un produit
		const product = await db.Product.create({
			name: "Produit Test",
			description: "Description du produit test.",
			price: 19.99,
		});

		console.log("Produit créé :", product);
	} catch (error) {
		console.error(
			"Erreur lors du peuplement de la base de données :",
			error
		);
	}
}

seedDatabase();
