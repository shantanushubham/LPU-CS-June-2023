class InvalidInputException extends Error {
  constructor(entityName, message) {
    this.entityName = entityName;
    this.message = message;
    console.error(`Please enter valid fields for the entity:`, this.entityName);
  }
}

module.exports = InvalidInputException;
