let url = "http://localhost:8080";
let user = null;

$().ready(() => {
    //   console.log("jQuerry is ready!");

    $("#get").click(() => {
        getUser()
    });
    $("#save").click(() => {
        updateUser();

    });


});


const updateUser = () => {
    user.userName = $("#eusername").val();
    user.password = $("#epassword").val();
    user.firstName = $("#efirstname").val();
    user.lastName = $("#elastname").val();
    user.phoneNumber = $("#ephone").val();
    user.email = $("#eemail").val();
    user.reviewer = $("#eisreviewer").prop("checked");
    user.admin = $("#eisadmin").prop("checked");
    console.debug("User before update:", user);
    putUser(user);
}

const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log("User Updated!", res);
        })
        .fail((err) =>{
            console.error("ERROR:", err);

        })
}

const getUser = () => {
    let userId = $("#eid").val();
    userGetByPK(userId);
}
const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
        .done((res) => {
            user = res.data;
            display();
            console.debug("JR: ", res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const display = () => {
    $("#eusername").val(user.userName);
    $("#epassword").val(user.password);
    $("#efirstname").val(user.firstName);
    $("#elastname").val(user.lastName);
    $("#ephone").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("#eisreviewer").prop("checked", user.reviewer);
    $("#eisadmin").prop("checked", user.admin);




}
