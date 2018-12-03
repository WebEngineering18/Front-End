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
        $('#input5').hide();
    });
    $('#allYearsQ5').change(function () {
        $('#input5').show();
        $('#eachYearQ5').hide();
    });
    $('#allYearsQ9').change(function () {
        $('#input9').show();
        $('#eachYearQ9').hide();
    });
    $('#everyYearQ9').change(function () {
        $('#eachYearQ9').show();
        $('#input9').hide();
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

function getNextQuestion() {
    $('#frage_' + frage).hide();
    frage++;
    $('#frage_' + frage).show();
    progressBarNext();
}

function nextQuestion() {
    if (frage == 1) {
        validateQuestionCB(frage);
    } else if (frage == 4) {
        validateQuestionRange(frage);
    } else if (frage == 5) {
        validateQuestionNumber(frage);
    } else if (frage == 6) {
        validateQuestionRange(frage);
    } else if (frage == 7) {
        validateQuestionNumber(frage);
    } else if (frage == 8) {
        validateQuestionCB(frage);
    } else if (frage == 9) {
        validateQuestionNumber(frage);
    } else if (frage == 10) {
        validateQuestionRange(frage);
    } else if (frage == 11) {
        validateQuestionCB(frage);
    } else if (frage == 12) {
        validateQuestionNumber(frage);
    } else if (frage == 13) {
        validateQuestionCB(frage);
    } else if (frage == 14) {
        validateQuestionRange(frage);
    } else if (frage == 15) {
        validateQuestionNumber(frage);
    } else if (frage == 16) {
        validateQuestionNumber(frage);
    } else if (frage == 17) {
        validateQuestionNumber(frage);
    } else if (frage == 18) {
        validateQuestionNumber(frage);
    }
    else {
        getNextQuestion();
    }

}

function validateQuestionCB(curFrage) {
    var checkBoxes = document.getElementsByClassName('cb' + curFrage);
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

function validateQuestionNumber(input) {
    if (!$("#input" + input).val()) {
        alert("Bitte geben Sie was ein!");
    } else {
        getNextQuestion();
    }
}

function validateQuestionRange(frage) {
    let combined;
    let range, range2, range3, range4, range5, range6, range7, range8, range9;

    if (frage == 4) {
        range = $("#range4").val();
        range2 = $("#range4_2").val();

        combined = +range + +range2;
    } else if (frage == 6) {
        range = $("#range6_1").val();
        range2 = $("#range6_2").val();
        range3 = $("#range6_3").val();
        range4 = $("#range6_4").val();

        combined = +range + +range2 + +range3 + +range4;
    } else if (frage == 10) {
        range = $("#range10").val();
        range2 = $("#range10_2").val();
        range3 = $("#range10_3").val();
        range4 = $("#range10_4").val();
        range5 = $("#range10_5").val();
        range6 = $("#range10_6").val();
        range7 = $("#range10_7").val();
        range8 = $("#range10_8").val();
        range9 = $("#range10_9").val();

        combined = +range + +range2 + +range3 + +range4 + +range5 + +range6 + +range7 + +range8 + +range9;
    } else if (frage == 14) {
        range = $("#range14").val();
        range2 = $("#range14_2").val();
        range3 = $("#range14_3").val();

        combined = +range + +range2 + +range3;
    }
    if (combined == 100) {
        getNextQuestion();
    } else {
        alert("Alle Werte müssen zusammen 100 ergeben!");
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



