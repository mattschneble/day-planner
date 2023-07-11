//define variables for use later
var todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
var todayTime = dayjs().hour();

//making sure the page doesn't run until the DOM is ready

$(document).ready(function () {
    var hourBlock = $(".hour-block");

    //created event listener for the save buttons to save the user input to localStorage
    hourBlock.children(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".entertext").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, textInput);
    })

    //create a for loop to run through the time blocks
    for (var i = 0; i < hourBlock.length; i++) {
        //create a variable to get the current hour block to be used to run through the hour blocks in the for loop to compare to the current time and apply the correct class
        var currentHour = i + 9;
        if (currentHour < todayTime) {
            $(hourBlock[i]).addClass("past");
        } else if (currentHour === todayTime) {
            $(hourBlock[i]).addClass("present");
        } else {
            $(hourBlock[i]).addClass("future");
            }
        }


    //create a for loop to run through the hour blocks and make changes to the hour blocks that are in the past, present, and future
    for(var i = 9; i <= 17; i++){
        var enterText = hourBlock.eq(i+9).children(".entertext");
        //retrieve the inputed text from localStorage and display it in the correct hour block
        $("#hour-9am .entertext").val(localStorage.getItem("hour-9am"));
        $("#hour-10am .entertext").val(localStorage.getItem("hour-10am"));
        $("#hour-11am .entertext").val(localStorage.getItem("hour-11am"));
        $("#hour-12pm .entertext").val(localStorage.getItem("hour-12pm"));
        $("#hour-13pm .entertext").val(localStorage.getItem("hour-13pm"));
        $("#hour-14pm .entertext").val(localStorage.getItem("hour-14pm"));
        $("#hour-15pm .entertext").val(localStorage.getItem("hour-15pm"));
        $("#hour-16pm .entertext").val(localStorage.getItem("hour-16pm"));
        $("#hour-17pm .entertext").val(localStorage.getItem("hour-17pm"));
    }

    $('#todayDate').text(todayDate);

  });
  