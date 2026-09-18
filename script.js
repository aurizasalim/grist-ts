grist.ready({ requiredAccess: 'none' });
grist.onRecords(table => {

});
grist.onRecord(function(record) {
  document.getElementById('title').innerHTML = `<a href="${record.link}">${record.A}</a>`;

});