const url = "http://localhost:8080";

let user = null;
$().ready(() => {
    $("#get").click(() => {
        getUser();
    })
    $("#delete").click(() => {
        remove(user);
    });

});
const remove = (user) => {
    $.ajax({
        method: "DELETE",
        url: `${url}/users/${user.id}`,
       // data: JSON.stringify(newUser),
        contentType: "application/json"

    })
        .done((res)=>{
            console.log("User Deleted!", res);
        })
        .fail((err)=>{
            console.error(err);
        })
}
const getUser = () => {
    let userId = $("#userid").val();
    userGetByPK(userId);
}
const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
        .done((res) => {
            user = res.data;
            display(user);
            console.debug("JR: ", res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const display = (user) => {
    $("#eid").text(user.id);
    $("#eusername").text(user.userName);

}