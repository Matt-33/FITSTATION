module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define(
		"Cart",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			productId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "products",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			tableName: "carts",
			timestamps: true,
			engine: "InnoDB",
		}
	);

	return Cart;
};
