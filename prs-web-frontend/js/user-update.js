let url = "http://localhost:8080";

$().ready(() => {
 //   console.log("jQuerry is ready!");
    $("#save").click(()=>{
        let updateUser = {};
        updateUser.id = Number($("#eid").val());
        updateUser.userName = $("#eusername").val();
        updateUser.password = $("#epassword").val();
        updateUser.firstName = $("#efirstname").val();
        updateUser.lastName = $("#elastname").val();
        updateUser.phoneNumber = $("#ephone").val();
        updateUser.email = $("#eemail").val();
        updateUser.isReviewer = $("#eisreviewer").prop("checked", true);
        updateUser.isAdmin = $("#eisadmin").prop("checked", true);
        console.log("User:", updateUser);
        $.ajax({
            method: "PUT",
            url: `${url}/users/`,
            data: JSON.stringify(updateUser),
            contentType: "application/json"

        })
            .done((res)=>{
                console.log("User updated!", res);
            })
            .fail((err)=>{
                console.error(err);
            })




    });
});