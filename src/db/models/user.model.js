const { DataTypes } = require('sequelize');

const User = [
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      set(value) {
        this.setDataValue('name', value.trim().toLowerCase());
      },
      get() {
        return this.getDataValue('name')
          .toLowerCase()
          .split(' ')
          .map((e) => e[0].toUpperCase() + e.substring(1))
          .join(' ');
      },
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      set(value) {
        this.setDataValue('lastname', value.trim().toLowerCase());
      },
      get() {
        return this.getDataValue('lastname')
          .toLowerCase()
          .split(' ')
          .map((e) => e[0].toUpperCase() + e.substring(1))
          .join(' ');
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('email', value.trim());
      },
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      set(value) {
        this.setDataValue('phone', value.trim());
      },
      get() {
        return '+51 ' + this.getDataValue('phone');
      },
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  },
];

module.exports = User;
