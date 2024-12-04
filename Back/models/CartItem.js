module.exports = (sequelize, DataTypes) => {
	const CartItem = sequelize.define(
		"CartItem",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
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
		},
		{
			tableName: "cartitems",
			timestamps: true,
			engine: "InnoDB",
		}
	);

	return CartItem;
};
