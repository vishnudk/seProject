function changeImg() {
    // alert("hello ")
    url = ['hotel1.jpg',
        'hotel2.jpg',
        'hotel3.jpg',
        'hotel4.jpg'
    ]
    cnt = 0
    bcImg = document.body.style;
    bcImg.backgroundImage = 'url("hotel1.jpg")';

    setInterval(() => {
        // console.log(cnt);
        if (cnt > 3) {
            cnt = 0;
        }
        bcImg.backgroundImage = 'url("' + url[cnt] + '")';
        cnt++;
    }, 5000);
}
function changeForm(e) {
    if (document.getElementById("singup-btn").style.backgroundColor != "white" && e == 'up') {
        document.getElementById("singup-btn").style.backgroundColor = "white";
        document.getElementById("singin-btn").style.backgroundColor = "#475b62";
        // document.getElementById("submit-btn").style.margin - top="100%";

        document.getElementById("singin-btn").style.color = "white"
        document.getElementById("singup-btn").style.color = "black";


        document.getElementById("singup").style.display = "block";
        document.getElementById("singin").style.display = "none";
    }
    else if (e == "in" && document.getElementById("singup-btn").style.backgroundColor == "white") {
        document.getElementById("singin-btn").style.backgroundColor = "white"
        document.getElementById("singup-btn").style.backgroundColor = "#475b62";

        document.getElementById("singin-btn").style.color = "black"
        document.getElementById("singup-btn").style.color = "white";


        document.getElementById("singin").style.display = "block";
        document.getElementById("singup").style.display = "none";

    }


}