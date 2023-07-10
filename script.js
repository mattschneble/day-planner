$(function () {
    //define variables for use later
    var todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    var todayTime = dayjs().hour();
    var hourBlock = $(".hour-block");

    //created event listener for the save buttons to save the user input to localStorage
    hourBlock.children(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".entertext").val();
        localStorage.setItem($(this).parent().attr("id"), textInput);
    });

    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
    //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

    //Plan of Attack #2
    //create a for loop to iterate through the time blocks
    for (var i = 0; i < hourBlock.length; i++) {
        //create a variable to get the current hour block to be used to iterate through the hour blocks in the for loop to compare to the current time and apply the correct class
        var currentHour = i + 9;
        if (currentHour < todayTime) {
            $(hourBlock[i]).addClass("past");
        } else if (currentHour === todayTime) {
            $(hourBlock[i]).addClass("present");
        } else {
            $(hourBlock[i]).addClass("future");
            }
        }


    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

    //Plan of Attack #3
    //use getItem to retrieve the saved input value from localStorage for each hour block
    //create a for loop to iterate through the time blocks
        //make sure to check localStorage within the loop
        localStorage.getItem()
        //need to display items that are in localStorage to the corresponding hour block
        //use id selectors to get the info in the textarea

    // TODO: Add code to display the current date in the header of the page.

    //Plan of Attack #4
    //create a variable for dayjs() to get the current date (can optionally add time)
    // $('#currentDay).text(variable created above) to display the current date in the header of the page

  });
  