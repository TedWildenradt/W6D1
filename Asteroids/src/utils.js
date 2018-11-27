const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Objects.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;