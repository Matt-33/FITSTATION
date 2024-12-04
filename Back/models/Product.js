module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		"Product",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
			},
			price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			category: {
				type: DataTypes.ENUM("clothes", "supplements", "programs"),
				allowNull: false,
			},
			imageUrl: {
				type: DataTypes.STRING,
				field: "image_url",
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: "created_at",
			},
		},
		{
			tableName: "products",
			timestamps: true,
			engine: "InnoDB",
		}
	);

	return Product;
};
