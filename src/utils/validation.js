
export default class Validate {
  static validateEmail = (email) => {
    const mailFormat = /[\w-]+@([\w-]+\.)+[\w-]+/;
    if (email.match(mailFormat)) {
      return true;
    } else {
      return false;
    }
  };
  static validatePassword = (password) => {
    if (password.length < 4) {
      return false;
    } else return true;
  };
  static validateName = (name) => {
    const nameFormat = /^[a-zA-Z0-9']+$/;
    if (name.match(nameFormat)) {
      return true;
    } else {
      return false;
    }
  };
  static validatePhoneNumber = (number) => {
    
    if (number>6&&number<14) {
      return false;
    }else
    return true;
  }; 
  static validateAge = (number) => {
    
    if (number>0) {
      
      return true;
    }else
    return false;
  };
  static validateNotEmpty = (data) => {
    if (data.length > 0) {
      return true;
    }
    return false;
  };
}
