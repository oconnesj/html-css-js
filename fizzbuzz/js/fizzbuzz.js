



const loaded = () => {
    let ulCtrl = document.getElementById("output");
    for (i = 1; i < 51; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            let para = "<p>" +  " FizzBuzz" + "</p>";
            document.write(para.fontcolor("purple"));               
            ulCtrl.innerHTML += para;
           
        } else if (i % 3 === 0 ) {
            let para = "<p>" + " Fizz" + "</p>";
            document.write(para.fontcolor("red"));
            ulCtrl.innerHTML += para;
        }
        else if (i % 5 === 0 ) {
            let para = "<p>" + " Buzz" + "</p>";
            document.write(para.fontcolor("blue"));
            ulCtrl.innerHTML += para;
        }
        else {
            let para = "<p>" + i +  "</p>";
            document.write(para.fontcolor("black"));
            ulCtrl.innerHTML += para;

        }
    }
}
