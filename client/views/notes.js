Template.notes.events({
  'click [data-action=open]': function (event, template) {
    $('form textarea').val(this.body);
    $('form input[type="hidden"]').val(this._id);
  },

  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this note?')) {
      Notes.remove({ _id: this._id });
    }
  }
});

Template.notes.helpers({
  firstLineOfBody: (body) => {
    return body.split('\n')[0];
  },

  notes: () => {
    return Notes.find({}, { sort: { modifiedAt: -1 } });
  }
});
