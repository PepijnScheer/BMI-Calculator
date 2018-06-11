function ajax(gewicht, lengte) {
    var debug = true;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var controlScript = "BMI.php";
    var httpString = controlScript + "?gewicht=" + gewicht + "&lengte_cm=" + lengte;
    var httpResponse = "";
    if (debug) console.log(httpString);
    xmlhttp.open("GET", httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (debug) console.log("http response = " + xmlhttp.responseText);
            httpResponse = xmlhttp.responseText;
            document.getElementById('resultaat').innerHTML = httpResponse;
        }
    }
}
button = document.getElementById('button');
button.addEventListener('click', doThis());
function doThis() {
    lengte = document.getElementById("lengte").value;
    gewicht = document.getElementById("gewicht").value;
    console.log(lengte);
    ajax(gewicht, lengte);
}