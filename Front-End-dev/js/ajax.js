var frage = 1;
var letzteFrage = 3;
var antworten = new Array();

$(document).ready(function () {
    $("#next").click(function (e) {
        sumbitForm();
    });
    $("#back").click(function (e) {
        prevQuestion();
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
    $('#frage_' + frage).hide();
    frage++;
    $('#frage_' + frage).show();
}

function prevQuestion() {
    $('#frage_' + frage).hide();
    frage--;
    $('#frage_' + frage).show();
}

function sendToServer() {
    for (var i = 1; i <= letzteFrage; i++) {
        $.ajax({
            url: 'http://localhost/edit',
            dataType: "jsonp",
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