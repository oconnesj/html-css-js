let valueInput = 0;





let increaseBtn = () => {
    document.getElementById("input").value = ++valueInput;
    let normal = document.getElementById("input");
    normal.style.fontWeight = "400";
    normal.style.fontStyle = "normal";
    normal.style.color = "black";


    if (valueInput % 7 === 0) {
        normal.style.fontWeight = "bold";
    }

    if (valueInput % 2 === 0) {
        normal.style.color = 'red';
    }


    if (valueInput % 3 === 0) {
        normal.style.fontStyle = "italic";

    }

}

const decreaseBtn = () => {
    document.getElementById("input").value = --valueInput;
    let normal = document.getElementById("input");
    normal.style.fontWeight = "400";
    normal.style.fontStyle = "normal";
    normal.style.color = "black";


    if (valueInput % 7 === 0) {
        normal.style.fontWeight = "800";
    }

    if (valueInput % 2 === 0) {
        normal.style.color = 'red';
    }


    if (valueInput % 3 === 0) {
        normal.style.fontStyle = "italic";

    }

}
