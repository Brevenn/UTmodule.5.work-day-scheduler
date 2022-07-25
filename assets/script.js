// Loading the HTML and CSS files.
$(document).ready(function() {

    // Load and Display current Date and Time.
    $("#currentWorkDay").text(moment().format ("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function() {

        // create variables for the local values.
        console.log(this);
        var text = $(this).siblings(".info").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })


    // Load Saved Data from localStorage into each hour created in the HTML

    $("#hour1 .info").val(localStorage.getItem("hour1"));
    $("#hour2 .info").val(localStorage.getItem("hour2"));
    $("#hour3 .info").val(localStorage.getItem("hour3"));
    $("#hour4 .info").val(localStorage.getItem("hour4"));
    $("#hour5 .info").val(localStorage.getItem("hour5"));
    $("#hour6 .info").val(localStorage.getItem("hour6"));
    $("#hour7 .info").val(localStorage.getItem("hour7"));
    $("#hour8 .info").val(localStorage.getItem("hour8"));
    $("#hour9 .info").val(localStorage.getItem("hour9"));
    $("#hour10 .info").val(localStorage.getItem("hour10"));
    $("#hour11 .info").val(localStorage.getItem("hour11"));
});