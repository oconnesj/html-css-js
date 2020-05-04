let url = "http://localhost:8080";

//let userList = [];
let jsonresp;

$().ready(() => {
    // console.log("jQuerry is ready!");
    $.getJSON(`${url}/users/`)
        .done((res) => {
            jsonresp = res;
            display();
            console.log(res);
        })
        .fail((err) => {
            console.error(err);
        });
});

const display = () => {
    let tbody = $("tbody");
    for (let user of jsonresp.data) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        let tdUsername = $(`<td>${user.userName}</td>`);
        tr.append(tdUsername);

        let tdFullname = $(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(tdFullname);

        let tdPhoneNumber = $(`<td>${user.phoneNumber}</td>`);
        tr.append(tdPhoneNumber);

        let tdEmail = $(`<td>${user.email}</td>`);
        tr.append(tdEmail);


        tr.append(`<td>${user.reviewer ? "Yes" : "No"}</td>`);
        tr.append(`<td>${user.admin ? "Yes" : "No"}</td>`);







      
     

        tbody.append(tr);

    }

}

