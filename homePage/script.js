var n = 0;
var prv = 0;
var shownNoti = 0;
function hiFun() {

    if (document.getElementById("menu-bar").style.width == "20%") {
        document.getElementById("menu-bar").style.width = "0%";
    }
    else {
        document.getElementById("menu-bar").style.width = "20%";

    }
}

function checkNotification() {
    if (n > 0 && n != prv) {
        if (shownNoti > 0) {
            document.getElementById("not-no").style.opacity = 1;
            document.getElementById("not-no").innerHTML = shownNoti;
        }
        console.log(n);
        var len = n - prv;
        var i, t;
        for (i = 0; i < len; i++) {
            var nEle = document.createElement("h4");
            t = prv + i;
            nEle.innerHTML = "notification " + t;
            nEle.className = "notificationDisp";
            document.getElementById("notifications-display").appendChild(nEle);

        }
        prv = n;

    }
    if (shownNoti == 0) {
        document.getElementById("not-no").style.opacity = 0;
    }
}

function addNo() {
    n = n + 1;
    shownNoti = shownNoti + 1;

}

function showNoti() {
    if (n > 0) {
        if (document.getElementById("notifications-display").style.height == "0px") {
            document.getElementById("notifications-display").style.height = "auto";
            shownNoti = 0;
        }
        else {
            document.getElementById("notifications-display").style.height = "0px";
        }
    }
    else {
        alert("no notifications !!");
    }
}