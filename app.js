
$.get('ui.svg', function (data) {
  $('body').append(data.documentElement)

  function swap (id, vdo) {
    $('svg > g').hide()
    $('#' + id).show()
    $('#back').show()
    console.log('now playing:', vdo)
    db.update({ current: vdo })
  }

  $('#back').on('click', function () {
    swap('home', 'home')
  })

  $('#home > rect').on('click', function () {
    var id = $(this).attr('id').substr(1, 1)
    swap(id, id + '/intro')
  })

  $('#a > rect').on('click', function () {
    var id = $(this).attr('id')
    /*
    var rnd = parseInt(Math.random()*4) + 1
    vdo = vdo + rnd
    */
    var vdo = 'a/' + id
    console.log('now playing:', vdo)
    db.update({ current: vdo })
  })
})
