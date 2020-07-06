$(document).ready(function () {

    $(".employee-projects").on("submit", function (event) {
        event.preventDefault();

        let member_id = $(this).children(".member_id").val();
        console.log(member_id);
        $.ajax({
            method: "GET",
            url: "/projects/" + member_id
        }).then(function (data) {
            // redirect to projects table
            console.log(data);
            
        });
    });
});