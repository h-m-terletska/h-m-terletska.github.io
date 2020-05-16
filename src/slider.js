document.addEventListener("DOMContentLoaded", function(){

  var data = [ 0, 1, 2 ];

  for (i in data) {
    var img = $(document.createElement('img'))
    img.attr("src", 'data/W' + data[i] + '.jpg');
    img.addClass('map')
    img.addClass(String(data[i]))
    if (i == 0) {
      img.css({'zIndex': '1' })
    } else {
      img.css({'zIndex': '-1' })
    }

    $('.timelapse').append(img)
    console.log(data[i])
  }


  jQuery('#time-slider')
    .slider({
      min: data[0],
      max: data[data.length - 1],
      step: 1,
      value: 0,
      tooltip: 'hide',
      ticks: data,
      ticks_snap_bounds: 1
    })
    .on('change', function(e, ui) {
      console.log('.' + e.value.newValue)

      jQuery('.time-slider-display').html(e.value.newValue);
      $('.' + e.value.newValue).css({'zIndex': '1' })
      $('.' + e.value.oldValue).css({'zIndex': '-1' })
    });

  $($('.slider-track-low'))
    .clone()
    .addClass('slider-track-total')
    .css({width: '62.5%' });
});

