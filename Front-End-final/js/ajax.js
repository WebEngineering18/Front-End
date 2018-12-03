var frage = 1;
var letzteFrage = 3;
var antworten = new Array();
var percentage = 0;
var slider = 4;

$(document).ready(function () {
    $("#next").click(function (e) {
        sumbitForm();
        changeCategory();
    });
    $("#back").click(function (e) {
        prevQuestion();
        changeCategory();
    });
    $("#input15").blur(function () {
        if ($("#input15").val() != "") {
            $("#eachYearQ15").show();
        }
        if ($("#input15").val() == "") {
            $("#eachYearQ15").hide();
        }
    });
    $("#input16").blur(function () {
        if ($("#input16").val() != "") {
            $("#eachYearQ16").show();
        }
        if ($("#input16").val() == "") {
            $("#eachYearQ16").hide();
        }
    });
    $("#input18").blur(function () {
        if ($("#input18").val() != "") {
            $("#eachYearQ18").show();
        }
        if ($("#input18").val() == "") {
            $("#eachYearQ18").hide();
        }
    });
    $('#everyYearQ5').change(function () {
        $('#eachYearQ5').show();
        $('#anzahlInsgesamtQ5').hide();
    });
    $('#allYearsQ5').change(function () {
        $('#anzahlInsgesamtQ5').show();
        $('#eachYearQ5').hide();
    });
    $('#allYearsQ9').change(function () {
        $('#anzahlInsgesamtQ9').show();
        $('#eachYearQ9').hide();
    });
    $('#everyYearQ9').change(function () {
        $('#eachYearQ9').show();
        $('#anzahlInsgesamtQ9').hide();
    });
    $('#6_1_1').change(function () {
        $('#6_1').toggle();
    });
    $('#6_2_1').change(function () {
        $('#6_2').toggle();
    });
    $('#6_3_1').change(function () {
        $('#6_3').toggle();
    });
    $('#6_4_1').change(function () {
        $('#6_4').toggle();
    });

});



function sumbitForm() {
    if (frage == 1) {
        antworten[1] = getCheckboxData();
        console.log(antworten[1]);
    } else if (frage == 2) {
        antworten[2] = getRadioData();
        console.log(antworten[2]);
    } else if (frage == 3) {
        antworten[3] = getRadioData();
        console.log(antworten[3]);
        sendToServer(); //todo this if everything finish
    } else {

    }

    nextQuestion();

}

function nextQuestion() {
    if (frage == 1) {
        validateQuestion1();
    } else if (frage == 4) {
        validateQuestion4();
    } else if (frage == 5) {
        validateQuestion5();
    } else if (frage == 6) {
        validateQuestion6();
    } else if (frage == 7) {
        validateQuestion7();
    } else if (frage == 8) {
        validateQuestion8();
    } else if (frage == 9) {
        validateQuestion9();
    } else if (frage == 10) {
        validateQuestion10();
    } else if (frage == 11) {
        validateQuestion11();
    } else if (frage == 12) {
        validateQuestion12();
    } else if (frage == 13) {
        validateQuestion13();
    } else if (frage == 14) {
        validateQuestion14();
    } else if (frage == 15) {
        validateQuestion15();
    } else if (frage == 16) {
        validateQuestion16();
    } else if (frage == 17) {
        validateQuestion17();
    } else if (frage == 18) {
        validateQuestion18();
    }
    else {
        getNextQuestion();
    }

}

function validateQuestion1() {
    var checkBoxes = document.getElementsByClassName('cb1');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert('Sie müssen mindestens ein Feld markieren!');
    } else {
        getNextQuestion();
    }
}

function getNextQuestion() {
    $('#frage_' + frage).hide();
    frage++;
    $('#frage_' + frage).show();
    progressBarNext();
}

function validateQuestion4() {
    let range = $("#range4").val();
    let range2 = $("#range4_2").val();
    let combined = +range + +range2;

    if (combined == 100) {
        getNextQuestion();
    } else {
        alert("Beide Werte müssen zusammen 100 ergeben!");
    }

}

function validateQuestion5() {
    if (!$("#anzahlInsgesamtQ5").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion6() {
    let range = $("#range6_1").val();
    let range2 = $("#range6_2").val();
    let range3 = $("#range6_3").val();
    let range4 = $("#range6_4").val();

    let combined = +range + +range2 + +range3 + +range4;

    console.log(combined);
    if (combined == 100) {
        getNextQuestion();
    } else {
        alert("Alle Werte müssen zusammen 100 ergeben!");
    }
}

function validateQuestion7() {
    if (!$("#input7").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion8() {
    var checkBoxes = document.getElementsByClassName('cb8');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert('Sie müssen mindestens ein Feld markieren!');
    } else {
        getNextQuestion();
    }
}

function validateQuestion9() {
    if (!$("#anzahlInsgesamtQ9").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion10() {
    let range = $("#range10").val();
    console.log(range + typeof (range));
    let range2 = $("#range10_2").val();
    let range3 = $("#range10_3").val();
    let range4 = $("#range10_4").val();
    let range5 = $("#range10_5").val();
    let range6 = $("#range10_6").val();
    let range7 = $("#range10_7").val();
    let range8 = $("#range10_8").val();
    let range9 = $("#range10_9").val();

    let combined = +range + +range2 + +range3 + +range4 + +range5 + +range6 + +range7 + +range8 + +range9;
    console.log(combined);
    if (combined == 100) {
        getNextQuestion();
    } else {
        alert("Alle Werte müssen zusammen 100 ergeben!");
    }
}

function validateQuestion11() {
    var checkBoxes = document.getElementsByClassName('cb11');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert('Sie müssen mindestens ein Feld markieren!');
    } else {
        getNextQuestion();
    }
}

function validateQuestion12() {
    if (!$("#input12").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion13() {
    var checkBoxes = document.getElementsByClassName('cb13');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert('Sie müssen mindestens ein Feld markieren!');
    } else {
        getNextQuestion();
    }
}

function validateQuestion14() {
    let range = $("#range14").val();
    let range2 = $("#range14_2").val();
    let range3 = $("#range14_3").val();

    let combined = +range + +range2 + +range3;
    if (combined == 100) {
        getNextQuestion();
    } else {
        alert("Alle Werte müssen zusammen 100 ergeben!");
    }
}

function validateQuestion15() {
    if (!$("#input15").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion16() {
    if (!$("#input16").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion17() {
    if (!$("#input17").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestion18() {
    if (!$("#input18").val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function prevQuestion() {
    if (frage > 1) {
        $('#frage_' + frage).hide();
        frage--;
        $('#frage_' + frage).show();
        progressBarBack();
    }
}

function sendToServer() {
    for (var i = 1; i <= letzteFrage; i++) {
        $.ajax({
            url: 'http://localhost/edit',
            dataType: "json",
            type: 'POST',
            data: {
                frage_id: i,
                antwort: antworten[i]
            },
            error: function () {
                console.log("Fehler aufgetreten!")
            }
            ,
            success: function (data) {
                console.log("Frage wurden an Server geschickt!")
            }
        });
    }
}

function getCheckboxData() {
    return $("#frage_" + frage + " input:checkbox:checked").map(function () {
        return $(this).val();
    }).get();
}

function getRadioData() {
    return $("#frage_" + frage + " input:radio:checked").map(function () {
        return $(this).val();
    }).get();
}

function changeCategory() {
    if (frage < 4) {
        $("#category").html("Allgemeines");
    }
    else if (frage > 3 && frage < 7) {
        $("#category").html("Planungsprozess");
    }
    else if (frage > 6 && frage < 9) {
        $("#category").html("Ausschreibung und Vergabe");
    }
    else if (frage > 8 && frage < 12) {
        $("#category").html("Ausführung");
    }
    else if (frage > 11 && frage < 15) {
        $("#category").html("Abnahme / Gewährleistung");
    }
    else if (frage > 14 && frage < 19) {
        $("#category").html("Schadenkosten");
    }
    else if (frage > 18 && frage < 21) {
        $("#category").html("Entwicklung der Bauqualität");
    }
    if (frage == 20) {
        $("#next .uk-button").html("Beenden");
    }
    if (frage == 19) {
        $("#next .uk-button").html("Weiter");
    }
    if (frage > 1) {
        $("#back").show();
    }
    if (frage == 1) {
        $("#back").hide();
    }
    else if (frage == 21) {
        $("#category").html("Institut für Bauforschung");
        $("#buttons").hide();

    }

}
function progressBarNext() {
    var progressValue = document.getElementById("progress");
    ++progressValue.value;
    var progressPercentage = document.getElementById("percentage");
    percentage += 5;
    progressPercentage.innerHTML = percentage + "% (" + progressValue.value + "/20)";
}
function progressBarBack() {
    var progressValue = document.getElementById("progress");
    --progressValue.value;
    var progressPercentage = document.getElementById("percentage");
    percentage -= 5;
    progressPercentage.innerHTML = percentage + "% (" + progressValue.value + "/20)";
}



