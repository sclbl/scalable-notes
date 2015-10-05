Notes = new Mongo.Collection('notes');

Notes.allow({
  insert: (userId, document) => {
    if (document.body.length !== 0) {
      return true;
    }
  },

  update: (userId, document, fieldNames, modifier) => {
    if (modifier['$set'].body.length !== 0) {
      return true;
    }
  },

  remove: (userId, document) => {
    return true;
  }
});
