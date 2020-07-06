$(document).ready(function () {

    $(".employee-projects").on("submit", function (event) {
        event.preventDefault();

        let member_id = $(this).children(".member_id").val();
        // console.log(member_id);
        $.ajax({
            method: "GET",
            url: "/projects/" + member_id
        }).then(function (data) {
            // redirect to projects table
            // console.log(data);
            location.assign("/projects/" + member_id);
        });
    });

    $(".project-tasks").on("submit", function (event) {
        event.preventDefault();

        let project_id = $(this).children(".project_id").val();
        console.log(project_id);
        $.ajax({
            method: "GET",
            url: "/tasks/" + project_id
        }).then(function (data) {
            // redirect to project tasks table
            // console.log(data);
            location.assign("/tasks/" + project_id);
        });
    });

    // Calculate total hours of work per project
    let total_hours = 0;
    let rows = $("#projects tr:gt(0)");
    rows.children("td:nth-child(3)").each(function () {
        total_hours += parseInt($(this).html());
    });
    $("#total_hours").html(total_hours);

    // Generate title of project on tasks table
    let project_title = $(".project_title").val();
    // console.log(project_title);
    $("#project_title").html(project_title);
});