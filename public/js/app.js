$(document).ready(function () {

    $(".employee-projects").on("submit", function (event) {
        event.preventDefault();

        let member_id = $(this).children(".member_id").val();
        console.log(member_id);
        $.ajax({
            method: "GET",
            url: "/projects/" + member_id
        }).then(function (data) {
            // reload page to display devoured burger in proper column
            location.reload();
        });
    });
});