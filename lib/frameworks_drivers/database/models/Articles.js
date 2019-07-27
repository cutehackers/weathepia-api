module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    "Articles",
    {
      // attributes
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      // options
    }
  );

  return Articles;
};
