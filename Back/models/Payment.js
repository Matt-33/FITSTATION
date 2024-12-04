module.exports = (sequelize, DataTypes) => {
	const Payment = sequelize.define(
		"Payment",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			orderId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "orders",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			amount: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			paymentMethod: {
				type: DataTypes.ENUM("credit_card", "paypal", "bank_transfer"),
				allowNull: false,
			},
			paymentStatus: {
				type: DataTypes.ENUM("pending", "completed", "failed"),
				defaultValue: "pending",
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: "created_at",
			},
		},
		{
			tableName: "payments",
			timestamps: true,
			engine: "InnoDB",
		}
	);

	return Payment;
};
