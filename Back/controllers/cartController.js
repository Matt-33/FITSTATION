const db = require("../models");
const CartItem = db.CartItem;
const Product = db.Product;

// exports.addToCart = async (req, res) => {
// 	try {
// 		const { productId, quantity } = req.body;
// 		const userId = req.user.id;

// 		// Vérifier si le produit existe
// 		const product = await Product.findByPk(productId);
// 		if (!product) {
// 			return res.status(404).json({ message: "Produit non trouvé" });
// 		}

// 		// Vérifier si l'item est déjà dans le panier
// 		let cartItem = await CartItem.findOne({
// 			where: { userId, productId },
// 		});

// 		if (cartItem) {
// 			// Si le produit est déjà dans le panier, augmenter la quantité
// 			cartItem.quantity += quantity;
// 			await cartItem.save();
// 		} else {
// 			// Sinon, ajouter un nouvel item dans le panier
// 			cartItem = await CartItem.create({
// 				userId,
// 				productId,
// 				quantity,
// 			});
// 		}

// 		return res.status(200).json({
// 			message: "Produit ajouté au panier avec succès",
// 			cartItem,
// 		});
// 	} catch (error) {
// 		console.error("Erreur lors de l'ajout au panier :", error);
// 		return res.status(500).json({ message: "Erreur interne du serveur" });
// 	}
// };
