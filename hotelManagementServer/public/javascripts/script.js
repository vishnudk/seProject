function changeImg() {
    var form = document.getElementById("signinForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    var form = document.getElementById("loginForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    // alert("hello ")
    url = ['hotel1.jpg',
        'hotel2.jpg',
        'hotel3.jpg',
        'hotel4.jpg'
    ]
    cnt = 0
    bcImg = document.body.style;
    bcImg.backgroundImage = 'url("images/hotel1.jpg")';

    setInterval(() => {
        // console.log(cnt);
        if (cnt > 3) {
            cnt = 0;
        }
        bcImg.backgroundImage = 'url("images/' + url[cnt] + '")';
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


function submitData(data) {
    // data.preventDefault();

    if (data.passWrd.value == data.cpassWrd.value && data.passWrd.value != "") {
        document.getElementById("errorMsg").innerHTML = "";
        var credentials = {
            "userId": data.userName.value,
            "passWord": data.passWrd.value
        }
        console.log(credentials)
        axios
            .post("/userSignup",
                {
                    "userId": data.userName.value,
                    "passWord": data.passWrd.value
                }).then((data) => {
                    alert("new user created");

                });
    }
    else {
        document.getElementById("errorMsg").innerHTML = "*password dont match";
        document.getElementById("errorMsg").style.color = 'red';
        document.getElementById("errorMsg").style.textAlign = 'center';
        document.getElementById("errorMsg").style.padding = '5%';
        // alert("password dont match")
    }
}

function loginData(data) {

    console.log(
        {
            "userId": data.userNameLogin.value,
            "passWord": data.passWrdLogin.value
        }
    );
    axios
        .post("/userLogin",
            {
                "userId": data.userNameLogin.value,
                "passWord": data.passWrdLogin.value
            }).then((res) => {
                if (res.data == true) {
                    alert("going to the home page ");
                    window.location.href = "/homePage"
                }
                console.log(res.data);
            });
}