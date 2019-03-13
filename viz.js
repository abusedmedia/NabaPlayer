
db.on('value', onValueChange)

function onValueChange (snapshot) {
  var key = snapshot.child('current').val()
  console.log(key)
  $('video').attr('src', 'videos/' + key + '.mp4')
}
