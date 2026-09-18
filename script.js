grist.ready({ requiredAccess: 'read table' });
grist.onRecords(table => {

});

grist.onRecord(function(record) {
  //document.getElementById('title').innerHTML = `<a href="${record.link}">${record.A}</a>`;
  //document.getElementById('title').innerText = record.link;

  console.log("Selected record:", record);
  console.log("record.link:", record.link);
  document.getElementById('title').innerText = record.link ?? "No link";
});

//console.log("grist.ready() called");
//document.getElementById('title').innerText = "test pada script diluar onRecord";
//Sudah positif keload scriptnya