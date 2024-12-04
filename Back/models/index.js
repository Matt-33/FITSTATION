const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
	process.env.NAME_DB,
	process.env.USER_DB,
	process.env.MDP_DB,
	{
		host: process.env.HOST_DB,
		dialect: process.env.DIALECT_DB,
		port: process.env.PORT_DB,
		dialectOptions: {
			timezone: "Etc/GMT-2",
		},
		logging: false,
	}
);

const db = {};

// Importation des modèles
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./User")(sequelize, Sequelize);
db.Order = require("./Order")(sequelize, Sequelize);
db.CartItem = require("./CartItem")(sequelize, Sequelize);
db.OrderItem = require("./OrderItem")(sequelize, Sequelize);
db.Product = require("./Product")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);
db.Cart = require("./Cart")(sequelize, Sequelize);

// Définir les relations après l'initialisation des modèles

// Relation entre User et Cart (panier unique par utilisateur)
db.User.hasOne(db.Cart, {
	foreignKey: "fk_userId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.Cart.belongsTo(db.User, {
	foreignKey: "fk_userId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Relations entre Cart et Product via CartItem
db.Cart.belongsToMany(db.Product, {
	through: db.CartItem,
	foreignKey: "fk_cartId",
	otherKey: "fk_productId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.Product.belongsToMany(db.Cart, {
	through: db.CartItem,
	foreignKey: "fk_productId",
	otherKey: "fk_cartId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Définir explicitement les relations dans CartItem
db.CartItem.belongsTo(db.Cart, {
	foreignKey: "fk_cartId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.CartItem.belongsTo(db.Product, {
	foreignKey: "fk_productId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Relations entre User et Order
db.User.hasMany(db.Order, {
	foreignKey: "fk_userId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.Order.belongsTo(db.User, {
	foreignKey: "fk_userId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Relations entre Order et Product via OrderItem
db.Order.belongsToMany(db.Product, {
	through: db.OrderItem,
	foreignKey: "fk_orderId",
	otherKey: "fk_productId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.Product.belongsToMany(db.Order, {
	through: db.OrderItem,
	foreignKey: "fk_productId",
	otherKey: "fk_orderId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Définir explicitement les relations dans OrderItem
db.OrderItem.belongsTo(db.Order, {
	foreignKey: "fk_orderId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});
db.OrderItem.belongsTo(db.Product, {
	foreignKey: "fk_productId",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// Relation entre Order et Payment
db.Order.hasOne(db.Payment, {
	foreignKey: "fk_orderId",
	onDelete: "SET NULL",
	onUpdate: "CASCADE",
});
db.Payment.belongsTo(db.Order, {
	foreignKey: "fk_orderId",
	onDelete: "SET NULL",
	onUpdate: "CASCADE",
});

// Synchronisation avec la base de données
db.sequelize
	.authenticate()
	.then(() => {
		console.log("Connexion à la base de données réussie");
		// Utilisation de `alter: true` pour modifier les tables sans les supprimer
		return db.sequelize.sync({ alter: true });
	})
	.then(() => {
		console.log("Tables synchronisées avec succès.");
	})
	.catch((err) => {
		console.error(
			"Erreur lors de la connexion ou de la synchronisation des tables:",
			err
		);
	});

module.exports = db;
