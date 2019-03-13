
$.get('ui.svg', function (data) {
  $('body').append(data.documentElement)

  var current = 'home'

  TweenMax.set('#back', { y: -100 })
  TweenMax.set('svg > g:not(#back):not(#home)', { x: 1080 })
  $('svg > g:not(#back):not(#home)').hide()

  function swap (id, vdo) {
    // $('svg > g:not(#back)').hide()
    // $('#' + id).show()

    TweenMax.to('#' + current, 1, { x: -1080,
      ease: Expo.easeOut,
      onComplete: function () {
        $(this).hide()
      } })

    $('#' + id).show()
    TweenMax.set('#' + id, { x: 1080 })
    TweenMax.to('#' + id, 1, { x: 0, ease: Expo.easeOut })

    current = id

    if (id != 'home') {
      TweenMax.set('#' + id + ' > *:not(image)', { opacity: 0 })
      TweenMax.to('#back', 1, { y: 0, ease: Expo.easeInOut })
    }

    TweenMax.set('#' + id + ' > *:not(image)', { opacity: 0 })

    console.log('now playing:', vdo)
    db.update({ current: vdo })
  }

  $('#back').on('click', function () {
    TweenMax.set('#back', { y: -100 })
    swap('home', 'home')
  })

  TweenMax.set('#home > rect', { opacity: 0 })
  $('#home > rect').on('click', function () {
    var id = $(this).attr('id').substr(1, 1)
    swap(id, id + '/intro')
  })

  function selector (g, v) {
    console.log(g, v)

    TweenMax.set('#' + g + ' > *:not(image)', { opacity: 0 })

    TweenMax.set('#' + g + ' > #' + v, { opacity: 0, scale: 0.5, transformOrigin: 'center' })
    TweenMax.to('#' + g + ' > #' + v, 0.75, { opacity: 1, scale: 1, transformOrigin: 'center', ease: Elastic.easeOut })

    // $('#' + g + ' > *:not(image)').attr('opacity', 0)
    // $('#' + g + ' > #' + v).attr('opacity', 1)

    var vdo = g + '/' + v

    if (g == 'a') {
      var rnd = parseInt(Math.random() * 3) + 1
      vdo = vdo + '-' + rnd
    }

    console.log('now playing:', vdo)
    db.update({ current: vdo })
  }

  var groups = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
  groups.forEach(function (g) {
    $('#' + g + ' > *:not(image)').on('click', function () {
      selector(g, $(this).attr('id').toLowerCase())
    })
  })
})
