var n = 0;
var prv = 0;
function hiFun() {
    // alert("hello man");
    // document.getElementById("menu-bar").style.transitionDelay = "2s";
    if (document.getElementById("menu-bar").style.width == "20%") {
        document.getElementById("menu-bar").style.width = "0%";
    }
    else {
        document.getElementById("menu-bar").style.width = "20%";

    }
}

function checkNotification() {
    if (n > 0 && n != prv) {
        document.getElementById("not-no").style.opacity = 1;
        document.getElementById("not-no").innerHTML = n;
        console.log(n);
        var len = n - prv;
        var i, t;
        for (i = 0; i < len; i++) {
            var nEle = document.createElement("h4");
            t = prv + i;
            nEle.innerHTML = "notification " + t;
            document.getElementById("notifications-display").appendChild(nEle);

        }
        prv = n;

    }
    else if (n == 0) {
        document.getElementById("not-no").style.opacity = 0;
    }
}

function addNo() {
    n = n + 1;

}

function showNoti() {
    if (n > 0) {
        document.getElementById("notifications-display").style.height = "auto";
    }
    else {
        alert("no notifications !!");
    }
}