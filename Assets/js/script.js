// Today's date
var todayDate = moment().format('dddd : MMMM Do, YYYY');
$("#currentDay").html(currentDate);

// Save button
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").text();
  
  // Save text in local storage
  localStorage.setItem(time, text);
});

// When schedule is saved, stay on page
function usePlanner() {

  $(".hour").each(function() {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);

    if(currentPlan !== null) {
        $(this).siblings(".description").val(currentPlan);
    }
});
};

// Color coding schedule (past, present, future)
function timeBlock() {
  var hour = moment().hours();

  $(".time-block").each(function() {
      var currentTime = parseInt($(this).attr("id"));

      if (currentTime > hour) {
          $(this).addClass("future");
      } else if (currentTime === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

// Functions
timeBlock();
usePlanner();