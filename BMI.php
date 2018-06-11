<?php
$gewicht = $_GET["gewicht"];
$lengte = $_GET["lengte_cm"];
BMIcalc ($gewicht,$lengte);

function BMIcalc($gewicht,$lengte){
    $lengte = $lengte/100; // naar meters omrekenen
    $bmi = round($gewicht / ($lengte * $lengte),1);
    //test
    echo "Uw BMI is: " . $bmi . "<br>";

switch($bmi){
    case($bmi < 18):
        echo "u heeft ondergewicht";
        break;
    case($bmi < 25):
        echo "u heeft normaal gewicht";
        break;
    case($bmi < 30):
        echo "u heeft overgewicht gewicht";
        break;
    case($bmi < 40):
        echo "u heeft Obese gewicht";
        break;
    case($bmi > 40):
        echo "u heeft Mobidiy Obese gewicht";
        break;
}}
?>