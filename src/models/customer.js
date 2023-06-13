'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Ticket, {sourceKey : "customerID" , foreignKey : "customerID", as : "ticket"})
      Customer.hasMany(models.Comment, {sourceKey : "customerID" , foreignKey : "customerID", as : "comments"})
    }
  }
  Customer.init({
    customerID : { 
      type : DataTypes.STRING,
      validate : {
        is : /^KH[0-9]{3}$/,
        notEmpty : true,
      }
    },
    email : {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Email không được rỗng"
        },
        isEmail : {
          msg : "Email không hợp lệ!"
        },
      }
    },
    password : {
     type : DataTypes.STRING,
     validate : {
      notEmpty : {
        msg : "Mật khẩu không được rỗng"
      },
      is : {
        args : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        msg : "Mật khẩu phải có ít nhất 8 ký tự (ít nhất một chứ cái hoa, thường, chữ số và ký tự đặc biệt)",
      },
     }
    },
    fullName : {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Họ tên không được rỗng"
        },
      }
    },
    gender: DataTypes.BOOLEAN,
    birthday: {
      type : DataTypes.DATEONLY,
      validate : {
        notEmpty : {
          msg : "Ngày sinh không được rỗng",
        },
        isDate : {
          msg : "Ngày không hợp lệ"
        },
        isBefore : {
          args : new Date() + "",
          msg : "Ngày sinh phải trước ngày hiện tại"
        },
      }
    },
    phoneNumber: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Số điện thoại không được rỗng"
        },
        isNumeric : {
          msg : "Số điện thoại không hợp lệ(chỉ được phép nhập số)!"
        },
        len : {
          args : [10,10],
          msg : "Số điện thoại gồm 10 số!"
        },
      }
    },
    passport : {
      type  :DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Căn cước công dân không được rỗng",
        },
        isNumeric : {
          msg : "Căn cước công dân không hợp lệ(chỉ được phép nhập số)!"
        },
        len : {
          args : [9,12],
          msg : "Căn cước công dân gồm 12 số(CMND 9 số)!"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};