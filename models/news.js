'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.comments, {
        foreignKey : "news_id"
      })

      this.belongsTo(models.user, {
        foreignKey : "author_id"
      })
    }
  }
  news.init({
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'news',
  });
  return news;
};