$(document).ready(function(){

  $('.button').on('click', function(){

    var bill = $('#bill').val()
    var service = $('#service').val()
    var numOfPeople = $('#numOfPeople').val()
    var yourShare;
    var comment = '';

    $('#result').addClass('result')

    if(bill == ''){
      $('#bill').addClass('red-input')
      comment += 'You have to enter the bill. '
    }
    if(service == null){
      $('#service').addClass('red-input')
      comment += 'You have to choose a service. '
    }
    if (numOfPeople == '') {
      $('#numOfPeople').addClass('red-input')
      comment += 'You have to enter the number of people participated.'
    }



    if(bill == '' || service == null || numOfPeople == ''){
      alert(comment)
    }
    else {
      $('#bill').removeClass('red-input')
      $('#service').removeClass('red-input')
      $('#numOfPeople').removeClass('red-input')
    }



    if(bill != '' && service != null && numOfPeople != ''){
      yourShare = parseFloat(bill)*service/numOfPeople

      $('#result').html('You have to pay: ' + yourShare + '$' )
    }


  })

})
