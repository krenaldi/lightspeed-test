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
            console.log(data);
            location.assign("/tasks/" + project_id);
        });
    });
});