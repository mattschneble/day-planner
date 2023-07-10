// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {


    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
    //HINT: What does `this` reference in the click listener function? 
    //HINT: How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

    //Plan of Attack #1
    //figure out the hour block you are currently in using the $(this) selector
    // key names need to match key names for using getItem localStorage
    //setItem for localStorage to save the input value to the corresponding hour by using keyword 'this' to help solve #2.

    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
    //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

    //Plan of Attack #2
    //select child elements through use of jQuery
    //utilize dayjs() to get the current hour ONLY
    //create a for loop to iterate through the time blocks
    //expected for loop:
        //for (i=9; i<18; i++) //uses 24 hour clock
    //inside the for loop above:
        //a. use if statement to compare the actual hour vs the hour block to see if the hour is in the past/present/future
        //b. if the current hour is less the hour block, it will be in the future
        //c. if the current hour is equal to the hour block, it will be in the present
        //d. if the current hour is greater than the hour block, it will be in the past
    //remove the listed class in the html and add the class that corresponds to the if statement
    //can utilize the setInterval() method to update the time


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
  