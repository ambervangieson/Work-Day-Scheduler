myStorage = window.localStorage;

$('.saveBtn').on('click', function() {
    var targetHour = $(this).attr('data-time');

    var targetText = $('#'+targetHour).val();

    window.localStorage.setItem(targetHour, targetText)
})

$("#currentDay").text(dayjs().format("MM/DD/YYYY hh:mm"))


setInterval(function() {
    $("#currentDay").text(dayjs().format("MM/DD/YYYY hh:mm"))
  
}, 1000)


var currentHour = dayjs().format('H');

for(var i = 8; i <= 19; i++) {
    
    if(currentHour > i) {
        $('#hour-' + i).addClass('past')
    } else if (currentHour == i) {
        $('#hour-' + i).addClass('present')
    } else {
        $('#hour-' + i).addClass('future')
    }

    
    var currentTextArea = $('#' + i) 

    var storedData = JSON.parse(window.localStorage.getItem(i));

    currentTextArea.val(storedData)

    console.log('${storedData}')


}

   
