$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 10,
        color: "white",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
    }).circularProgress('animate', 80, 4000);

    $(".my-progress").circularProgress({
        line_width: 10,
        color: "white",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
    }).circularProgress('animate', 85, 2000);
});
