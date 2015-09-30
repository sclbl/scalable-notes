Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    const note = {
      _id: template.find('form input[type="hidden"]').value,
      body: template.find('form textarea').value
    };

    if (note.body.length !== 0) {
      if (note._id.length === 0) {
        Notes.insert({ body: note.body, modifiedAt: new Date() });
      } else {
        Notes.update({ _id : note._id }, { $set: { body: note.body, modifiedAt: new Date() } });
      }
      template.find('form textarea').value = '';
      template.find('form input[type="hidden"]').value = '';
    }
  },

  'click button': function (event, template) {
    event.preventDefault();

    $('form input[type="hidden"]').val('');
    $('form textarea').val('');
  }
});
