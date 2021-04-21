function changeForm(e) {
    if (document.getElementById("singup-btn").style.backgroundColor != "white" && e == 'up') {
        document.getElementById("singup-btn").style.backgroundColor = "white";
        document.getElementById("singin-btn").style.backgroundColor = "rgb(158, 158, 158)";
        // document.getElementById("submit-btn").style.margin - top="100%";
        document.getElementById("singup").style.display = "block";
        document.getElementById("singin").style.display = "none";
    }
    else if (e == "in" && document.getElementById("singup-btn").style.backgroundColor == "white") {
        document.getElementById("singin-btn").style.backgroundColor = "white"
        document.getElementById("singup-btn").style.backgroundColor = "rgb(158, 158, 158)";
        document.getElementById("singin").style.display = "block";
        document.getElementById("singup").style.display = "none";

    }


}