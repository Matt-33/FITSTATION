module.exports = (sequelize, DataTypes) => {
	const OrderItem = sequelize.define(
		"OrderItem",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			orderId: {
				type: DataTypes.INTEGER,
				references: {
					model: "orders",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			productId: {
				type: DataTypes.INTEGER,
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
			price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
		},
		{
			tableName: "order_items",
			timestamps: false,
			engine: "InnoDB",
		}
	);

	return OrderItem;
};
