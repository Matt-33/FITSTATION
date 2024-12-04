module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define(
		"Order",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			totalPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				field: "total_price",
			},
			status: {
				type: DataTypes.ENUM("pending", "completed", "cancelled"),
				defaultValue: "pending",
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "users",
					key: "id",
				},
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			},
			paymentId: {
				type: DataTypes.INTEGER,
				references: {
					model: "payments",
					key: "id",
				},
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: "created_at",
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			tableName: "orders",
			timestamps: true,
			engine: "InnoDB",
		}
	);

	return Order;
};
